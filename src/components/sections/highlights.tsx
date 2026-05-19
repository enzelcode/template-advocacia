"use client";

import { siteConfig } from "@/config/site";
import { Icon } from "@/components/shared/icon";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";

export function Highlights() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative border-y border-border/70 bg-[color:var(--brand-navy)] text-[color:var(--primary-foreground)]"
    >
      <div
        aria-hidden
        className="bg-pillars mask-radial-fade absolute inset-0 opacity-30"
      />
      <Container className="relative grid gap-x-12 gap-y-12 py-20 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
        {siteConfig.highlights.map((item, i) => (
          <div
            key={item.title}
            className="reveal flex flex-col gap-5 sm:px-8 sm:first:pl-0 sm:last:pr-0"
          >
            <div className="flex items-center gap-4">
              <span className="font-heading text-xs font-medium tracking-[0.2em] text-[color:var(--brand-gold)]">
                0{i + 1}
              </span>
              <span className="h-px flex-1 bg-white/15" />
              <span className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-[color:var(--brand-gold)]">
                <Icon name={item.icon} className="size-[18px]" />
              </span>
            </div>
            <h3 className="font-heading text-2xl font-normal leading-tight text-balance">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/65 text-pretty">
              {item.description}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
