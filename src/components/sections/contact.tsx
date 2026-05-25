"use client";

import { siteConfig } from "@/config/site";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { ContactForm } from "@/components/shared/contact-form";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";
import { hasWhatsapp } from "@/lib/whatsapp";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const { contact } = siteConfig;
  const wa = hasWhatsapp();

  return (
    <section
      ref={ref}
      id="contato"
      className="relative bg-[color:var(--brand-black)] py-28 text-[color:var(--primary-foreground)] sm:py-36"
    >
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
          <h2 className="reveal mt-8 font-heading text-3xl font-normal leading-tight sm:text-5xl text-balance">
            Sua causa começa{" "}
            <span className="italic font-light text-[color:var(--brand-gold)]">
              com uma conversa
            </span>
            .
          </h2>
          <p className="reveal mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/65 text-pretty">
            {wa
              ? "Preencha o formulário e sua mensagem abre direto no nosso WhatsApp. Se preferir, fale por um dos canais ao lado."
              : "Preencha o formulário com sua situação. Retornamos pelo seu e-mail ou telefone em até 24h em dias úteis."}
          </p>
        </div>

        <div className="mt-20 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <ContactForm />

          <div className="flex h-full flex-col gap-8">
            <ul className="flex-1 space-y-6">
              {contact.phone ? (
                <li className="reveal flex items-start gap-5 border-t border-white/10 pt-6">
                  <Phone className="mt-1 size-[18px] text-[color:var(--brand-gold)]" />
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                      Telefone
                    </p>
                    <p className="mt-2 font-heading text-lg">{contact.phone}</p>
                  </div>
                </li>
              ) : null}
              <li className="reveal flex items-start gap-5 border-t border-white/10 pt-6">
                <Mail className="mt-1 size-[18px] text-[color:var(--brand-gold)]" />
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-2 block font-heading text-lg break-words transition-colors hover:text-[color:var(--brand-gold)]"
                  >
                    {contact.email}
                  </a>
                </div>
              </li>
              {contact.address ? (
                <li className="reveal flex items-start gap-5 border-y border-white/10 py-6">
                  <MapPin className="mt-1 size-[18px] text-[color:var(--brand-gold)]" />
                  <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                      Localização
                    </p>
                    <p className="mt-2 font-heading text-lg">{contact.address}</p>
                  </div>
                </li>
              ) : null}
            </ul>

            <div className="reveal">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--brand-gold)]">
                Atendimento direto
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                Resposta em até 24h em dias úteis. Consultas mediante agendamento — presencial ou online.
              </p>
              {wa ? (
                <div className="mt-6">
                  <WhatsappButton label="Falar pelo WhatsApp" tone="gold" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
