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
          <h2 className="reveal mt-8 font-heading text-3xl font-normal leading-tight text-[color:var(--brand-black)] sm:text-5xl text-balance">
            Do primeiro contato à{" "}
            <span className="italic font-light">solução</span>.
          </h2>
          <p className="reveal mt-6 text-base text-muted-foreground text-pretty">
            Cada etapa explicada com clareza, sem juridiquês e sem surpresas.
          </p>
        </div>

        <ol className="relative mt-24 grid gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Linha conectora discreta (só em lg+) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-3 hidden h-px bg-border lg:block"
          />

          {steps.map((step) => (
            <li key={step.step} className="reveal relative lg:px-8">
              <div className="relative z-10 inline-flex items-center gap-3 bg-background pr-4 lg:pr-6">
                <span className="size-1.5 rounded-full bg-[color:var(--brand-gold)]" />
                <span className="font-heading text-sm font-medium tracking-[0.2em] text-[color:var(--brand-gold)]">
                  {step.step}
                </span>
              </div>

              <h3 className="mt-8 font-heading text-xl font-normal text-[color:var(--brand-black)]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
