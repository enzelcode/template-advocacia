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
      className="relative isolate overflow-hidden bg-[color:var(--brand-black)] pt-40 pb-20 text-[color:var(--primary-foreground)] sm:pt-48 sm:pb-28"
    >
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[color:var(--brand-gold)] sm:text-[11px]">
              {hero.eyebrow}
            </p>
            <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
          </div>

          <h1 className="reveal mt-10 font-heading text-5xl font-normal leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[6rem] text-balance">
            {hero.headline}
            <br />
            <span className="italic font-light text-[color:var(--brand-gold)]">
              {hero.headlineEmphasis}
            </span>
          </h1>

          <p className="reveal mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg text-pretty">
            {hero.subheadline}
          </p>

          <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <WhatsappButton label={hero.ctaPrimary} tone="gold" />
            {hero.ctaSecondary ? (
              <Link
                href="#areas"
                className="group inline-flex items-center gap-3 text-sm font-medium text-white/85 transition-colors hover:text-white"
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

        {/* Rodapé do hero: stats + OAB. Linha fina dourada sutil. */}
        <div className="reveal mt-24 sm:mt-32">
          <div aria-hidden className="mx-auto h-px w-full max-w-5xl bg-white/10" />
          <dl className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
            {hero.stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="font-heading text-3xl font-normal text-white sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/50">
                  {s.label}
                </dd>
              </div>
            ))}
            <div className="text-center">
              <dt className="font-heading text-3xl font-normal text-[color:var(--brand-gold)] sm:text-4xl">
                ∗
              </dt>
              <dd className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/50">
                {oab}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
