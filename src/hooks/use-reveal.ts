"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Anima filhos com a classe `.reveal` (fade + slide-up) quando entram no viewport.
 *
 * Cuidados:
 * - Não aninhe .reveal em pai E filho — o GSAP sobrescreve `transform` inline,
 *   e dois .reveal aninhados causam dupla animação visualmente confusa.
 * - Evite transforms via Tailwind (translate-y-*) em elementos com .reveal,
 *   porque o GSAP zera o transform ao fim da animação.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(deps: unknown[] = []) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll<HTMLElement>(".reveal");
      if (!targets.length) return;

      // Belt-and-suspenders: define o estado inicial pelo JS também
      gsap.set(targets, { opacity: 0, y: 24, force3D: true });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, el);

    // Refresh do ScrollTrigger após o layout estabilizar (imagens, fontes, etc).
    const t = setTimeout(() => ScrollTrigger.refresh(), 120);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
