"use client";

import { siteConfig } from "@/config/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/shared/container";
import { useReveal } from "@/hooks/use-reveal";

export function Faq() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="faq" className="relative py-28 sm:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Coluna esquerda: título */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-[color:var(--brand-gold)]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[color:var(--brand-gold)]">
                Perguntas
              </p>
            </div>
            <h2 className="reveal mt-6 font-heading text-3xl font-normal leading-tight text-[color:var(--brand-navy)] sm:text-5xl text-balance">
              Dúvidas{" "}
              <span className="italic font-light">comuns</span>, respostas diretas.
            </h2>
            <p className="reveal mt-6 text-base text-muted-foreground text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.
            </p>
          </div>

          {/* Coluna direita: accordion */}
          <Accordion className="reveal w-full divide-y divide-border/70 border-y border-border/70">
            {siteConfig.faq.map((item, i) => (
              <AccordionItem key={i} value={i} className="not-last:border-b-0">
                <AccordionTrigger className="group/trigger items-baseline gap-6 py-6 text-left">
                  <span className="font-heading text-xs font-medium tracking-[0.2em] text-[color:var(--brand-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-heading text-lg font-normal text-[color:var(--brand-navy)] sm:text-xl">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-12 pr-4 text-base leading-relaxed text-muted-foreground text-pretty">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
