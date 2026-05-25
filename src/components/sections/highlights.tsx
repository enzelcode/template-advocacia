"use client";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";

export function Highlights() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative border-b border-border bg-background">
      <Container className="relative grid gap-x-16 gap-y-12 py-20 sm:grid-cols-3 sm:py-24">
        {siteConfig.highlights.map((item, i) => (
          <div key={item.title} className="reveal flex flex-col">
            <div className="flex items-center gap-4">
              <span className="font-heading text-sm font-normal text-[color:var(--brand-gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h3 className="mt-8 font-heading text-xl font-normal leading-snug text-[color:var(--brand-black)] text-balance sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              {item.description}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
