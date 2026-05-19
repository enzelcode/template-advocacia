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
      className="relative isolate overflow-hidden bg-background pt-36 pb-28 sm:pt-44 sm:pb-36"
    >
      {/* Camadas de fundo: gradiente + grid sutil + glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-b from-[color:var(--background)] via-[color:var(--secondary)] to-background"
      />
      <div
        aria-hidden
        className="bg-grid mask-radial-fade absolute inset-0 -z-10 opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-15%] -z-10 size-[55rem] rounded-full bg-[color:var(--brand-gold)]/12 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 size-[40rem] rounded-full bg-[color:var(--brand-navy)]/8 blur-[100px]"
      />

      {/* Decoração: escala da justiça em SVG, watermark sutil */}
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-10 top-1/2 -z-10 w-[28rem] -translate-y-1/2 text-[color:var(--brand-navy)]/[0.035] sm:w-[36rem]"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.8">
          <line x1="100" y1="20" x2="100" y2="180" />
          <line x1="40" y1="40" x2="160" y2="40" />
          <path d="M40 40 L20 95 Q40 110 60 95 Z" />
          <path d="M160 40 L140 95 Q160 110 180 95 Z" />
          <ellipse cx="100" cy="180" rx="40" ry="4" />
        </g>
      </svg>

      <Container className="relative grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          {/* Eyebrow com hairline */}
          <div className="reveal flex items-center gap-4">
            <span className="h-px w-12 bg-[color:var(--brand-gold)]" />
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[color:var(--brand-gold)]">
              {hero.eyebrow}
            </p>
          </div>

          <h1 className="reveal mt-8 font-heading text-[2.6rem] font-normal leading-[1.02] text-[color:var(--brand-navy)] sm:text-6xl lg:text-[5.2rem] text-balance">
            {hero.headline}{" "}
            <span className="italic font-light text-[color:var(--brand-navy)]/85">
              {hero.headlineEmphasis}
            </span>
          </h1>

          <p className="reveal mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground text-pretty">
            {hero.subheadline}
          </p>

          <div className="reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <WhatsappButton label={hero.ctaPrimary} />
            {hero.ctaSecondary ? (
              <Link
                href="#areas"
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <span className="relative">
                  {hero.ctaSecondary}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-30 bg-[color:var(--brand-navy)] transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            ) : null}
          </div>
        </div>

        {/* Coluna direita: stats verticais com tratamento serifa */}
        <div className="reveal lg:pb-4">
          <dl className="grid grid-cols-3 gap-6 border-y border-border/70 py-8 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-border/70 lg:border-x-0 lg:border-y-0 lg:py-0">
            {hero.stats.map((s) => (
              <div key={s.label} className="text-left lg:py-6">
                <dt className="font-heading text-4xl font-normal text-[color:var(--brand-navy)] sm:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="reveal mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-8 bg-[color:var(--brand-gold)]" />
            {oab}
          </p>
        </div>
      </Container>
    </section>
  );
}
