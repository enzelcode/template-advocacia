"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const ref = useReveal<HTMLElement>();
  const { about } = siteConfig;

  return (
    <section ref={ref} id="sobre" className="relative py-28 sm:py-36">
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.15fr] lg:gap-24 lg:items-center">
          {/* Coluna imagem */}
          <div className="reveal">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[color:var(--brand-black)]">
              {about.photo ? (
                <Image
                  src={about.photo}
                  alt={about.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  className="object-cover object-center"
                />
              ) : (
                <>
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 18px)",
                    }}
                  />
                  <span className="absolute -bottom-8 -right-2 font-heading text-[18rem] font-normal italic leading-none text-white/[0.05] select-none">
                    {siteConfig.shortName.charAt(0)}
                  </span>
                </>
              )}
              {/* Plate com nome */}
              <div className="absolute inset-x-8 bottom-8">
                <p className="font-heading text-xl font-normal text-white">
                  {about.name}
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70">
                  {about.role}
                </p>
              </div>
            </div>

            {about.stat ? (
              <div className="mt-8 flex items-baseline gap-6 border-t border-border pt-6">
                <p className="font-heading text-4xl font-normal text-[color:var(--brand-black)]">
                  {about.stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {about.stat.label}
                </p>
              </div>
            ) : null}
          </div>

          <div>
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
                {about.eyebrow}
              </p>
            </div>

            <h2 className="reveal mt-8 font-heading text-3xl font-normal leading-tight text-[color:var(--brand-black)] sm:text-4xl md:text-5xl text-balance">
              {about.title}
            </h2>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="reveal text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="reveal mt-12 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {about.credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 text-sm text-foreground/80"
                >
                  <span className="mt-[7px] h-px w-4 shrink-0 bg-[color:var(--brand-gold)]" />
                  <span className="text-pretty">{c}</span>
                </li>
              ))}
            </ul>

            <div className="reveal mt-14">
              <WhatsappButton label="Conversar com o advogado" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
