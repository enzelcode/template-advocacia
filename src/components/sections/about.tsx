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
    <section ref={ref} id="sobre" className="relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="bg-dots mask-radial-fade absolute inset-0 opacity-40" />

      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.15fr] lg:gap-24 lg:items-center">
          {/* Coluna imagem */}
          <div className="reveal relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-[color:var(--brand-navy)]">
              <Image
                src="/sobre.png"
                alt={about.name}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
                className="object-cover object-center"
              />
              {/* Gradiente sutil só no rodapé pra legibilidade do nome */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent"
              />
              {/* Plate com nome */}
              <div className="absolute inset-x-6 bottom-6">
                <p className="font-heading text-xl font-normal text-white drop-shadow-md">
                  {about.name}
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/75 mt-1">
                  {about.role}
                </p>
              </div>
            </div>

            {/* Hairline gold accent vertical */}
            <span aria-hidden className="absolute -top-6 -left-6 hidden h-24 w-px bg-[color:var(--brand-gold)] sm:block" />

            {/* Estatística abaixo da foto */}
            {about.stat ? (
              <div className="mt-6 flex items-center gap-5 rounded-md border border-border/70 bg-card px-6 py-5 shadow-sm">
                <p className="font-heading text-4xl font-normal text-[color:var(--brand-navy)]">
                  {about.stat.value}
                </p>
                <span className="h-10 w-px bg-border" />
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

            <h2 className="reveal mt-6 font-heading text-3xl font-normal leading-tight text-[color:var(--brand-navy)] sm:text-4xl md:text-5xl text-balance">
              {about.title}
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              {about.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className={i === 0 ? "reveal has-dropcap text-pretty" : "reveal text-pretty"}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="reveal mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {about.credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 border-t border-border/70 pt-3 text-sm text-foreground/80"
                >
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[color:var(--brand-gold)]" />
                  <span className="text-pretty">{c}</span>
                </li>
              ))}
            </ul>

            <div className="reveal mt-12">
              <WhatsappButton label="Conversar com a equipe" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
