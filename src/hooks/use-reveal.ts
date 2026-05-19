"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Anima filhos com classe `.reveal` (fade + slide-up) quando a seção
 * entra no viewport.
 *
 * Usa IntersectionObserver nativo em vez de ScrollTrigger pra evitar
 * o bug clássico onde o GSAP calcula posições com layout ainda instável
 * (fontes/imagens carregando) e a animação só dispara depois de uma
 * interação que força reflow.
 *
 * Cuidados:
 * - Não aninhe `.reveal` em pai e filho.
 * - Evite Tailwind translate-* em elementos com `.reveal` (o GSAP zera
 *   a transform inline ao fim da animação).
 */
export function useReveal<T extends HTMLElement = HTMLElement>(deps: unknown[] = []) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>(".reveal");
    if (!targets.length) return;

    // Estado inicial via JS também (caso o CSS demore a aplicar)
    gsap.set(targets, { opacity: 0, y: 24, force3D: true });

    let tween: gsap.core.Tween | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          tween = gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: "auto",
          });
          observer.disconnect();
          break;
        }
      },
      {
        // Dispara quando ~12% da seção está visível, com 8% de respiro no rodapé
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      tween?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
