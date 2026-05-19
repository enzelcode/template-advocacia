"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Anima filhos com classe `.reveal` (fade + slide-up) quando a seção
 * entra no viewport.
 *
 * - Se a seção JÁ está visível no mount, dispara imediatamente (sem esperar
 *   nem 1 frame do IntersectionObserver).
 * - Senão, usa IntersectionObserver pra disparar quando entrar.
 *
 * Não usa ScrollTrigger porque ele depende de layout estável no momento
 * do registro (fontes/imagens carregando = animação não dispara até o
 * usuário scrollar).
 */
export function useReveal<T extends HTMLElement = HTMLElement>(deps: unknown[] = []) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>(".reveal");
    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, y: 24, force3D: true });

    const animate = () => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.06,
        overwrite: "auto",
      });
    };

    // Se a seção já está visível no viewport, dispara já — sem esperar IO.
    const rect = el.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (inView) {
      animate();
      return;
    }

    // Senão, observa entrada via IntersectionObserver.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          animate();
          observer.disconnect();
          break;
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
