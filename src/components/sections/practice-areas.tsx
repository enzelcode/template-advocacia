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
      className="relative border-y border-border bg-background py-28 sm:py-36"
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

        {/* Tabs (só aparecem se houver mais de um grupo) */}
        {hasTabs ? (
          <div
            role="tablist"
            aria-label="Áreas de atuação"
            className="reveal mt-12 inline-flex items-center gap-1 rounded-full border border-border bg-background p-1.5"
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
                    "rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "bg-[color:var(--brand-black)] text-white"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        ) : null}

        {/* Grid de áreas — linhas finas separando, sem hover dramático */}
        <div
          role="tabpanel"
          id={`panel-${activeGroup?.id}`}
          aria-labelledby={`tab-${activeGroup?.id}`}
          key={activeGroup?.id}
          className={cn(
            "mt-16 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          {areas.map((area, i) => (
            <article
              key={area.title}
              style={{ animationDelay: `${i * 60}ms` }}
              className="group flex animate-in flex-col gap-6 border-b border-border p-10 fade-in slide-in-from-bottom-3 fill-mode-both duration-500 sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(2n)]:border-l-border lg:[&:nth-child(2n)]:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:border-l-border"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-heading text-xs font-medium tracking-[0.22em] text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon
                  name={area.icon}
                  className="size-5 text-[color:var(--brand-black)]/40 transition-colors duration-300 group-hover:text-[color:var(--brand-gold)]"
                />
              </div>

              <h3 className="font-heading text-2xl font-normal leading-tight text-[color:var(--brand-black)] text-balance">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                {area.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA fim da seção */}
        <div className="reveal mt-20 flex flex-col items-center gap-6 text-center">
          <p className="max-w-md text-sm text-muted-foreground text-pretty">
            Sua causa não está na lista? Chama no WhatsApp — avaliamos a viabilidade do seu caso sem compromisso.
          </p>
          <WhatsappButton label="Tirar minha dúvida" tone="navy" />
        </div>
      </Container>
    </section>
  );
}
