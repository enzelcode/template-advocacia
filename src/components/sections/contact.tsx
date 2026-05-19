"use client";

import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const { contact } = siteConfig;

  return (
    <section ref={ref} id="contato" className="relative py-28 sm:py-36">
      <Container>
        <div className="relative overflow-hidden rounded-md bg-[color:var(--brand-navy)] text-[color:var(--primary-foreground)] noise">
          {/* Pattern interno */}
          <div aria-hidden className="bg-pillars absolute inset-0 opacity-40" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-[color:var(--brand-gold)]/25 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -bottom-20 size-[20rem] rounded-full bg-white/[0.04] blur-[80px]"
          />

          {/* Watermark serifa */}
          <span className="pointer-events-none absolute -bottom-20 -right-4 font-heading text-[18rem] font-normal leading-none text-white/[0.04] select-none">
            &
          </span>

          <div className="relative grid gap-14 px-8 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:px-16 md:py-24">
            <div>
              <div className="reveal flex items-center gap-4">
                <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
                  Vamos conversar
                </p>
              </div>
              <h2 className="reveal mt-6 font-heading text-3xl font-normal leading-tight sm:text-5xl md:text-[3.4rem] text-balance">
                Lorem ipsum{" "}
                <span className="italic font-light text-[color:var(--brand-gold)]">
                  dolor sit amet
                </span>
                .
              </h2>
              <p className="reveal mt-6 max-w-md text-base leading-relaxed text-white/65 text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="reveal mt-10">
                <WhatsappButton
                  label="Falar pelo WhatsApp"
                  className="bg-[color:var(--brand-gold)] text-[color:var(--brand-navy)] hover:bg-[color:var(--brand-gold)] hover:brightness-105"
                />
              </div>
            </div>

            <ul className="space-y-4">
              <li className="reveal group flex items-start gap-5 border-t border-white/10 pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 text-[color:var(--brand-gold)]">
                  <Phone className="size-[18px]" />
                </span>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                    Telefone
                  </p>
                  <p className="mt-1.5 font-heading text-lg">{contact.phone}</p>
                </div>
              </li>
              <li className="reveal group flex items-start gap-5 border-t border-white/10 pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 text-[color:var(--brand-gold)]">
                  <Mail className="size-[18px]" />
                </span>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1.5 block font-heading text-lg transition-colors hover:text-[color:var(--brand-gold)]"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              {contact.address ? (
                <li className="reveal group flex items-start gap-5 border-y border-white/10 py-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 text-[color:var(--brand-gold)]">
                    <MapPin className="size-[18px]" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                      Endereço
                    </p>
                    <p className="mt-1.5 font-heading text-lg">{contact.address}</p>
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
