"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/shared/icon";
import { Container } from "@/components/shared/container";
import { WhatsappButton } from "@/components/shared/whatsapp-button";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function PracticeAreas() {
  const ref = useReveal<HTMLElement>();
  const groups = siteConfig.practiceAreas;
  const [activeId, setActiveId] = useState(groups[0]?.id ?? "");

  const activeGroup = groups.find((g) => g.id === activeId) ?? groups[0];
  const areas = activeGroup?.areas ?? [];
  const hasTabs = groups.length > 1;

  return (
    <section
      ref={ref}
      id="areas"
      className="relative overflow-hidden bg-[color:var(--secondary)]/60 py-28 sm:py-36"
    >
      <div aria-hidden className="bg-grid mask-bottom-fade absolute inset-0 opacity-50" />

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
            <h2 className="reveal mt-6 font-heading text-3xl font-normal leading-tight text-[color:var(--brand-navy)] sm:text-5xl text-balance">
              Onde podemos{" "}
              <span className="italic font-light">te ajudar</span>.
            </h2>
          </div>
          <p className="reveal text-sm text-muted-foreground max-w-xs">
            Atuação técnica focada em Direito Trabalhista, com atendimento complementar em Família.
          </p>
        </div>

        {/* Tabs (só aparecem se houver mais de um grupo) */}
        {hasTabs ? (
          <div
            role="tablist"
            aria-label="Áreas de atuação"
            className="reveal mt-12 inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/60 p-1.5 backdrop-blur"
          >
            {groups.map((g) => {
              const isActive = g.id === activeId;
              return (
                <button
                  key={g.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${g.id}`}
                  id={`tab-${g.id}`}
                  type="button"
                  onClick={() => setActiveId(g.id)}
                  className={cn(
                    "relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-[color:var(--brand-navy)] text-white shadow-sm"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  {g.label}
                  {isActive ? (
                    <span
                      aria-hidden
                      className="absolute -bottom-px left-1/2 h-px w-6 -translate-x-1/2 bg-[color:var(--brand-gold)]"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : null}

        {/* Grid de áreas — key=activeId força remount + animação no swap */}
        <div
          role="tabpanel"
          id={`panel-${activeGroup?.id}`}
          aria-labelledby={`tab-${activeGroup?.id}`}
          key={activeGroup?.id}
          className={cn(
            "mt-10 grid grid-cols-1 border-t border-border/70 sm:grid-cols-2 lg:grid-cols-3",
            !hasTabs && "mt-16",
          )}
        >
          {areas.map((area, i) => (
            <article
              key={area.title}
              style={{ animationDelay: `${i * 60}ms` }}
              className="group relative flex animate-in flex-col gap-5 border-b border-border/70 p-8 fade-in slide-in-from-bottom-3 fill-mode-both duration-500 transition-colors hover:bg-background sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(2n)]:border-l-border/70 lg:[&:nth-child(2n)]:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:border-l-border/70"
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
