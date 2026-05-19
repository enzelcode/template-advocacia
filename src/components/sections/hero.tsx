"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";

export function Hero() {
  const ref = useReveal<HTMLElement>();
  const { hero, oab } = siteConfig;

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden bg-[color:var(--brand-navy)] pt-36 pb-24 text-[color:var(--primary-foreground)] sm:pt-44 sm:pb-32"
    >
      {/* Pano de fundo: verde escuro com pillars + glow dourado */}
      <div aria-hidden className="bg-pillars absolute inset-0 opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-20%] -z-10 size-[55rem] rounded-full bg-[color:var(--brand-gold)]/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 size-[40rem] rounded-full bg-black/40 blur-[120px]"
      />

      {/* Balança da justiça: só em telas grandes (lg+) */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute right-[-4%] top-1/2 hidden w-[34rem] -translate-y-1/2 text-[color:var(--brand-gold)]/15 lg:block xl:w-[40rem]"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.8">
          <line x1="100" y1="20" x2="100" y2="180" />
          <line x1="40" y1="40" x2="160" y2="40" />
          <path d="M40 40 L20 95 Q40 110 60 95 Z" />
          <path d="M160 40 L140 95 Q160 110 180 95 Z" />
          <ellipse cx="100" cy="180" rx="40" ry="4" />
        </g>
      </svg>

      <Container className="relative grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <div>
          <div className="reveal flex items-center gap-4">
            <span className="h-px w-12 bg-[color:var(--brand-gold)]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[color:var(--brand-gold)] sm:text-[11px]">
              {hero.eyebrow}
            </p>
          </div>

          <h1 className="reveal mt-8 font-heading text-[2.8rem] font-normal leading-[1.05] text-white sm:text-6xl lg:text-[5.4rem] text-balance">
            {hero.headline}{" "}
            <span className="italic font-light text-[color:var(--brand-gold)]">
              {hero.headlineEmphasis}
            </span>
          </h1>

          <p className="reveal mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg text-pretty">
            {hero.subheadline}
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <WhatsappButton label={hero.ctaPrimary} tone="gold" />
            {hero.ctaSecondary ? (
              <Link
                href="#areas"
                className="group inline-flex items-center gap-3 text-sm font-medium text-white"
              >
                <span className="relative">
                  {hero.ctaSecondary}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-30 bg-[color:var(--brand-gold)] transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            ) : null}
          </div>
        </div>

        {/* Coluna direita: stats (sem balança no mobile) */}
        <div className="lg:pb-4">
          <dl className="reveal grid grid-cols-3 gap-6 border-y border-white/15 py-6 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-white/15 lg:border-x-0 lg:border-y-0 lg:py-0">
            {hero.stats.map((s) => (
              <div key={s.label} className="text-left lg:py-6">
                <dt className="font-heading text-3xl font-normal text-white sm:text-4xl lg:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/55 sm:text-[11px]">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="reveal mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/55">
            <span className="h-px w-8 bg-[color:var(--brand-gold)]" />
            {oab}
          </p>
        </div>
      </Container>
    </section>
  );
}
