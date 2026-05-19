"use client";

import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { ContactForm } from "@/components/shared/contact-form";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const { contact } = siteConfig;

  return (
    <section
      ref={ref}
      id="contato"
      className="relative overflow-hidden bg-[color:var(--brand-navy)] py-24 text-[color:var(--primary-foreground)] sm:py-32"
    >
      <div aria-hidden className="bg-pillars absolute inset-0 opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 size-[40rem] rounded-full bg-[color:var(--brand-gold)]/18 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -bottom-32 size-[30rem] rounded-full bg-white/[0.03] blur-[100px]"
      />

      <span className="pointer-events-none absolute -bottom-32 right-4 font-heading text-[18rem] font-normal leading-none text-white/[0.035] select-none sm:right-16 sm:text-[26rem]">
        &
      </span>

      <Container className="relative">
        {/* Heading centralizado */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
              Agende sua consulta
            </p>
            <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
          </div>
          <h2 className="reveal mt-6 font-heading text-3xl font-normal leading-tight sm:text-5xl md:text-[3.4rem] text-balance">
            Sua causa começa{" "}
            <span className="italic font-light text-[color:var(--brand-gold)]">
              com uma conversa
            </span>
            .
          </h2>
          <p className="reveal mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/70 text-pretty">
            Preencha o formulário e sua mensagem abre direto no nosso WhatsApp.
            Se preferir, fale por um dos canais ao lado.
          </p>
        </div>

        {/* Grid: formulário | contatos */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <ContactForm />

          <div className="flex h-full flex-col gap-6">
            <ul className="flex-1 space-y-4">
              {contact.phone ? (
                <li className="reveal flex items-start gap-5 border-t border-white/10 pt-5">
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
              ) : null}
              <li className="reveal flex items-start gap-5 border-t border-white/10 pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 text-[color:var(--brand-gold)]">
                  <Mail className="size-[18px]" />
                </span>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1.5 block font-heading text-lg break-words transition-colors hover:text-[color:var(--brand-gold)]"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              {contact.address ? (
                <li className="reveal flex items-start gap-5 border-y border-white/10 py-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/15 text-[color:var(--brand-gold)]">
                    <MapPin className="size-[18px]" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">
                      Localização
                    </p>
                    <p className="mt-1.5 font-heading text-lg">{contact.address}</p>
                  </div>
                </li>
              ) : null}
            </ul>

            <div className="reveal rounded-md border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                Atendimento direto
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Resposta em até 24h em dias úteis. Consultas mediante agendamento — presencial ou online.
              </p>
              <div className="mt-5">
                <WhatsappButton label="Falar pelo WhatsApp" tone="gold" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
