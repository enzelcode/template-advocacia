"use client";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M0 24V14C0 7.5 3.5 2.5 10.5 0V5C7 6.5 5.5 9 5.5 12H10.5V24H0ZM18.5 24V14C18.5 7.5 22 2.5 29 0V5C25.5 6.5 24 9 24 12H29V24H18.5Z" />
    </svg>
  );
}

export function Testimonials() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative bg-[color:var(--brand-black)] py-28 text-[color:var(--primary-foreground)] sm:py-36"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
              Depoimentos
            </p>
            <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
          </div>
          <h2 className="reveal mt-8 font-heading text-3xl font-normal leading-tight sm:text-5xl text-balance">
            Quem confia,{" "}
            <span className="italic font-light text-[color:var(--brand-gold)]">recomenda</span>.
          </h2>
        </div>

        <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
          {siteConfig.testimonials.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="reveal flex flex-col gap-7 bg-[color:var(--brand-black)] p-10"
            >
              <QuoteMark className="size-6 text-[color:var(--brand-gold)]" />

              <blockquote className="text-[15px] leading-relaxed text-white/85 text-pretty">
                {t.quote}
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid size-10 place-items-center rounded-full border border-white/15 font-heading text-sm text-[color:var(--brand-gold)]">
                  {t.initials}
                </span>
                <div>
                  <p className="font-heading text-base text-white">{t.name}</p>
                  {t.role ? (
                    <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/45">
                      {t.role}
                    </p>
                  ) : null}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
