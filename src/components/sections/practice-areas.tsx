"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/shared/icon";
import { Container } from "@/components/shared/container";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { useReveal } from "@/hooks/use-reveal";

export function PracticeAreas() {
  const ref = useReveal<HTMLElement>();
  const areas = siteConfig.practiceAreas[0]?.areas ?? [];

  return (
    <section
      ref={ref}
      id="areas"
      className="relative bg-[color:var(--secondary)] py-24 sm:py-32"
    >
      <Container className="relative">
        {/* Header da seção */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
                Áreas de atuação
              </p>
            </div>
            <h2 className="reveal mt-8 font-heading text-3xl font-normal leading-tight text-[color:var(--brand-black)] sm:text-5xl text-balance">
              Onde podemos{" "}
              <span className="italic font-light">te ajudar</span>.
            </h2>
          </div>
          <p className="reveal max-w-xs text-sm text-muted-foreground">
            Atuação estratégica e personalizada em múltiplas áreas do direito.
          </p>
        </div>

        {/* Grid de cards reais */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {areas.map((area, i) => (
            <article
              key={area.title}
              style={{ animationDelay: `${i * 70}ms` }}
              className="group relative flex animate-in flex-col gap-6 rounded-xl border border-border bg-background p-8 fade-in slide-in-from-bottom-3 fill-mode-both duration-500 transition-all hover:-translate-y-1 hover:border-[color:var(--brand-gold)]/50 hover:shadow-xl hover:shadow-black/[0.06]"
            >
              {/* Ícone em quadrado escuro */}
              <div className="flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-lg bg-[color:var(--brand-black)] text-[color:var(--brand-gold)] transition-transform duration-300 group-hover:scale-105">
                  <Icon name={area.icon} className="size-6" />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--brand-gold)]" />
              </div>

              <div className="flex-1">
                <h3 className="font-heading text-2xl font-normal leading-tight text-[color:var(--brand-black)] text-balance">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {area.description}
                </p>
              </div>

              {/* Footer do card — número discreto */}
              <div className="flex items-center justify-between border-t border-border pt-5">
                <span className="font-heading text-xs font-medium tracking-[0.22em] text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")} ⁄ {String(areas.length).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
                  Atuação especializada
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA fim da seção */}
        <div className="reveal mt-16 flex flex-col items-center gap-5 text-center">
          <p className="max-w-md text-sm text-muted-foreground text-pretty">
            Sua causa não está na lista? Chama no WhatsApp — avaliamos a viabilidade do seu caso sem compromisso.
          </p>
          <WhatsappButton label="Tirar minha dúvida" tone="navy" />
        </div>
      </Container>
    </section>
  );
}
