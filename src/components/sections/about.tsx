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
    <section ref={ref} id="sobre" className="relative bg-background py-24 sm:py-32">
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.15fr] lg:gap-20 lg:items-center">
          {/* Coluna imagem */}
          <div className="reveal relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-[color:var(--brand-black)]">
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
                    className="absolute inset-0 opacity-60"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 50% 30%, rgba(201,160,78,0.18), transparent 60%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 18px)",
                    }}
                  />
                  {/* Monograma RA gigante decorativo */}
                  <span
                    aria-hidden
                    className="absolute inset-0 grid place-items-center font-heading text-[14rem] font-normal italic leading-none tracking-tighter text-[color:var(--brand-gold)]/30 select-none"
                  >
                    RA
                  </span>
                  {/* Texto "FOTO EM BREVE" canto */}
                  <p className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.28em] text-white/35">
                    Foto · em breve
                  </p>
                </>
              )}

              {/* Plate inferior com nome — overlay gradient + texto */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent"
              />
              <div className="absolute inset-x-8 bottom-8">
                <p className="font-heading text-2xl font-normal text-white">
                  {about.name}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/70">
                  {about.role}
                </p>
              </div>
            </div>

            {/* Stat lateral */}
            {about.stat ? (
              <div className="mt-6 grid grid-cols-2 gap-6 sm:gap-8">
                <div className="rounded-md border border-border p-5">
                  <p className="font-heading text-3xl font-normal text-[color:var(--brand-black)]">
                    {about.stat.value}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {about.stat.label}
                  </p>
                </div>
                <div className="rounded-md border border-border p-5">
                  <p className="font-heading text-3xl font-normal text-[color:var(--brand-black)]">
                    24h
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Resposta no WhatsApp
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          {/* Coluna texto */}
          <div>
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
                {about.eyebrow}
              </p>
            </div>

            <h2 className="reveal mt-6 font-heading text-3xl font-normal leading-tight text-[color:var(--brand-black)] sm:text-4xl md:text-5xl text-balance">
              {about.title}
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="reveal text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Frase em destaque (blockquote) */}
            <blockquote className="reveal mt-10 border-l-2 border-[color:var(--brand-gold)] pl-6 font-heading text-xl italic font-light leading-snug text-[color:var(--brand-black)] sm:text-2xl text-balance">
              “Compromisso, técnica e ética em cada detalhe do seu caso.”
            </blockquote>

            {/* Credentials em grid numerado */}
            <ul className="reveal mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {about.credentials.map((c, i) => (
                <li
                  key={c}
                  className="flex items-start gap-4"
                >
                  <span className="font-heading text-sm font-medium tracking-[0.16em] text-[color:var(--brand-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground/80 text-pretty">{c}</span>
                </li>
              ))}
            </ul>

            <div className="reveal mt-12">
              <WhatsappButton label="Conversar com o advogado" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
