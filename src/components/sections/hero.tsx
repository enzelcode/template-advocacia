"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";

/**
 * Hero V2 — Split editorial: nome do advogado em destaque (serif gigante) à esquerda,
 * monograma "RA" gigante decorativo + frase de posicionamento à direita.
 * Trust signals como faixa de rodapé. Inspirado em sites de escritório premium.
 */
export function Hero() {
  const ref = useReveal<HTMLElement>();
  const { hero, contact, oab } = siteConfig;

  // Quebra o shortName em primeiro/sobrenome pro display empilhado serif gigante
  const [firstName, ...rest] = siteConfig.shortName.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[color:var(--brand-black)] text-[color:var(--primary-foreground)]"
    >
      <Container className="relative flex min-h-[100svh] flex-col justify-center pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="grid items-center gap-x-12 gap-y-16 lg:grid-cols-[1.15fr_1fr] lg:gap-x-20">
          {/* Coluna esquerda — nome + posicionamento + CTA */}
          <div className="relative">
            <p className="reveal text-[10px] font-medium uppercase tracking-[0.4em] text-white/45 sm:text-[11px]">
              Advogado · {oab}
            </p>

            <h1 className="reveal mt-8 font-heading text-[18vw] font-normal leading-[0.92] text-white sm:text-[12vw] lg:text-[7vw] xl:text-[6.5rem]">
              <span className="block">{firstName}</span>
              {lastName ? (
                <span className="block italic font-light text-[color:var(--brand-gold)]">
                  {lastName}
                </span>
              ) : null}
            </h1>

            <div className="reveal mt-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[color:var(--brand-gold)]" />
              <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/75 sm:text-[11px]">
                {siteConfig.tagline}
              </p>
            </div>

            <p className="reveal mt-10 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg text-pretty">
              {hero.subheadline}
            </p>

            <div className="reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
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

          {/* Coluna direita — monograma RA decorativo gigante + quote de marca */}
          <div className="reveal relative hidden lg:block">
            <div className="relative aspect-square w-full max-w-[28rem] ml-auto">
              {/* Frame fino dourado */}
              <span
                aria-hidden
                className="absolute inset-0 border border-[color:var(--brand-gold)]/30"
              />
              {/* Ornamento canto superior */}
              <span
                aria-hidden
                className="absolute -top-px left-8 h-2 w-px bg-[color:var(--brand-gold)]/50"
              />
              <span
                aria-hidden
                className="absolute -top-px right-8 h-2 w-px bg-[color:var(--brand-gold)]/50"
              />

              {/* Monograma RA gigante centralizado */}
              <span
                aria-hidden
                className="absolute inset-0 grid place-items-center font-heading text-[16rem] font-normal italic leading-none tracking-tighter text-[color:var(--brand-gold)]/95 select-none"
                style={{
                  textShadow:
                    "0 1px 0 rgba(255,255,255,0.04), 0 -1px 0 rgba(0,0,0,0.4)",
                }}
              >
                RA
              </span>

              {/* Frase de marca embaixo */}
              <div className="absolute inset-x-8 bottom-8 text-center">
                <p className="font-heading text-base italic font-light leading-relaxed text-white/80 text-balance">
                  {hero.headline}
                  <span className="block text-[color:var(--brand-gold)]">
                    {hero.headlineEmphasis}
                  </span>
                </p>
              </div>

              {/* Ornamento canto inferior */}
              <span
                aria-hidden
                className="absolute -bottom-px left-8 h-2 w-px bg-[color:var(--brand-gold)]/50"
              />
              <span
                aria-hidden
                className="absolute -bottom-px right-8 h-2 w-px bg-[color:var(--brand-gold)]/50"
              />
            </div>
          </div>
        </div>

        {/* Trust signals — faixa fina embaixo, como assinatura editorial */}
        <div className="reveal mt-20 sm:mt-24">
          <div aria-hidden className="h-px w-full bg-white/12" />
          <ul className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 text-[10px] uppercase tracking-[0.28em] text-white/55">
            {hero.stats.map((s) => (
              <li key={s.label} className="flex items-center gap-3">
                <span className="size-1 rounded-full bg-[color:var(--brand-gold)]" />
                <span className="font-heading not-italic text-sm normal-case tracking-normal text-white">
                  {s.value}
                </span>
                <span>{s.label}</span>
              </li>
            ))}
            <li className="ml-auto hidden items-center gap-3 sm:flex">
              <span className="size-1 rounded-full bg-[color:var(--brand-gold)]" />
              {contact.address}
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
