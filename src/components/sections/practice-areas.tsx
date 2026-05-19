"use client";

import { siteConfig } from "@/config/site";
import { Icon } from "@/components/shared/icon";
import { Container } from "@/components/shared/container";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { useReveal } from "@/hooks/use-reveal";

export function PracticeAreas() {
  const ref = useReveal<HTMLElement>();
  const areas = siteConfig.practiceAreas;

  return (
    <section
      ref={ref}
      id="areas"
      className="relative overflow-hidden bg-[color:var(--secondary)]/60 py-28 sm:py-36"
    >
      <div aria-hidden className="bg-grid mask-bottom-fade absolute inset-0 opacity-50" />

      <Container className="relative">
        {/* Header da seção, layout split */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
                Áreas de atuação
              </p>
            </div>
            <h2 className="reveal mt-6 font-heading text-3xl font-normal leading-tight text-[color:var(--brand-navy)] sm:text-5xl text-balance">
              Onde podemos{" "}
              <span className="italic font-light">te ajudar</span>.
            </h2>
          </div>
          <p className="reveal text-sm text-muted-foreground max-w-xs">
            Atuação técnica em direito civil, trabalhista, previdenciário e do consumidor.
          </p>
        </div>

        {/* Grid de áreas: hairlines em vez de cards-caixa */}
        <div className="reveal mt-16 grid grid-cols-1 border-t border-border/70 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <article
              key={area.title}
              className="group relative flex flex-col gap-5 border-b border-border/70 p-8 transition-colors duration-300 hover:bg-background sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(2n)]:border-l-border/70 lg:[&:nth-child(2n)]:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:border-l-border/70"
            >
              {/* Índice */}
              <div className="flex items-baseline justify-between">
                <span className="font-heading text-xs font-medium tracking-[0.2em] text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")} ⁄ {String(areas.length).padStart(2, "0")}
                </span>
                <Icon
                  name={area.icon}
                  className="size-5 text-[color:var(--brand-navy)]/40 transition-colors duration-300 group-hover:text-[color:var(--brand-gold)]"
                />
              </div>

              <h3 className="font-heading text-2xl font-normal leading-tight text-[color:var(--brand-navy)] text-balance">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {area.description}
              </p>

              {/* Hairline gold no hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[color:var(--brand-gold)] transition-transform duration-500 group-hover:scale-x-100"
              />
            </article>
          ))}
        </div>

        {/* CTA fim da seção */}
        <div className="reveal mt-16 flex flex-col items-center gap-5 text-center">
          <p className="max-w-md text-sm text-muted-foreground text-pretty">
            Sua causa não está na lista? Chama no WhatsApp — avaliamos a viabilidade jurídica do seu caso sem compromisso.
          </p>
          <WhatsappButton label="Tirar minha dúvida" tone="navy" />
        </div>
      </Container>
    </section>
  );
}
