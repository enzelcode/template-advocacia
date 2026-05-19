"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Anima filhos com a classe `.reveal` com fade + slide-up,
 * em sequência (stagger), quando entram no viewport.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(deps: unknown[] = []) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = el.querySelectorAll<HTMLElement>(".reveal");
      if (!targets.length) return;

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
