"use client";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";

export function Process() {
  const ref = useReveal<HTMLElement>();
  const steps = siteConfig.process;

  return (
    <section ref={ref} id="processo" className="relative py-28 sm:py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
              Como funciona
            </p>
            <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
          </div>
          <h2 className="reveal mt-6 font-heading text-3xl font-normal leading-tight text-[color:var(--brand-navy)] sm:text-5xl text-balance">
            Do primeiro contato à{" "}
            <span className="italic font-light">solução</span>.
          </h2>
          <p className="reveal mt-5 text-base text-muted-foreground text-pretty">
            Cada etapa é explicada com clareza, sem juridiquês e sem surpresas.
          </p>
        </div>

        {/* Timeline horizontal com linha conectora */}
        <ol className="relative mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Linha conectora (só em lg+) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px lg:block"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent 0, color-mix(in oklch, var(--foreground) 15%, transparent) 8%, color-mix(in oklch, var(--foreground) 15%, transparent) 92%, transparent 100%)",
            }}
          />

          {steps.map((step, i) => (
            <li key={step.step} className="reveal relative lg:px-6">
              {/* Marcador circular */}
              <div className="relative z-10 inline-flex">
                <span className="grid size-14 place-items-center rounded-full border border-border bg-background font-heading text-base text-[color:var(--brand-navy)] shadow-sm">
                  {step.step}
                </span>
                {i === 0 ? (
                  <span
                    aria-hidden
                    className="absolute inset-0 -m-1 rounded-full ring-1 ring-[color:var(--brand-gold)]/40"
                  />
                ) : null}
              </div>

              <h3 className="mt-8 font-heading text-xl font-normal text-[color:var(--brand-navy)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
