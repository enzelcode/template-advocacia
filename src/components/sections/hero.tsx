"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";

export function Hero() {
  const ref = useReveal<HTMLElement>();
  const { hero } = siteConfig;

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden bg-[color:var(--brand-black)] text-[color:var(--primary-foreground)]"
    >
      {/* Foto de fundo: biblioteca de direito clássica */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay preto pra contraste do texto */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"
      />

      <Container className="relative flex min-h-[88svh] flex-col justify-center pt-36 pb-20 sm:pt-40">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-3 rounded-full border border-[color:var(--brand-gold)]/40 bg-black/30 px-4 py-1.5 backdrop-blur">
            <span className="size-1.5 rounded-full bg-[color:var(--brand-gold)]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--brand-gold)] sm:text-[11px]">
              {siteConfig.tagline}
            </p>
          </div>

          <h1 className="reveal mt-8 font-heading text-4xl font-normal leading-[1.05] text-white sm:text-5xl md:text-6xl text-balance">
            Atuação estratégica e personalizada{" "}
            <span className="italic font-light text-[color:var(--brand-gold)]">
              para proteger os seus direitos.
            </span>
          </h1>

          <p className="reveal mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg text-pretty">
            {hero.subheadline}
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <WhatsappButton label="Falar com o advogado" tone="gold" />
            <Link
              href="#areas"
              className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-7 text-sm font-medium text-white backdrop-blur transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Áreas de atuação
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
