"use client";

import { siteConfig } from "@/config/site";
import { Icon } from "@/components/shared/icon";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";

export function Highlights() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative border-b border-border/60 bg-background">
      <Container className="relative grid gap-x-12 gap-y-10 py-16 sm:grid-cols-3 sm:divide-x sm:divide-border/70 sm:py-20">
        {siteConfig.highlights.map((item, i) => (
          <div
            key={item.title}
            className="reveal flex flex-col gap-4 sm:px-8 sm:first:pl-0 sm:last:pr-0"
          >
            <div className="flex items-center gap-4">
              <span className="font-heading text-xs font-medium tracking-[0.2em] text-[color:var(--brand-gold)]">
                0{i + 1}
              </span>
              <span className="h-px flex-1 bg-border" />
              <span className="grid size-11 place-items-center rounded-full border border-[color:var(--brand-gold)]/30 bg-[color:var(--brand-gold)]/10 text-[color:var(--brand-gold)]">
                <Icon name={item.icon} className="size-[18px]" />
              </span>
            </div>
            <h3 className="font-heading text-xl font-normal leading-tight text-[color:var(--brand-navy)] text-balance sm:text-2xl">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              {item.description}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
