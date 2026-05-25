import { Globe2, Briefcase, MessageCircle, ShieldCheck } from "lucide-react";

const items = [
  { icon: Globe2, label: "Atendimento em todo o Brasil" },
  { icon: Briefcase, label: "6 áreas de atuação" },
  { icon: MessageCircle, label: "Resposta rápida no WhatsApp" },
  { icon: ShieldCheck, label: "Sigilo e ética profissional" },
  { icon: Globe2, label: "Atendimento online ou presencial" },
];

/**
 * Faixa marquee horizontal passando com info rápida.
 * Animation CSS pura (keyframe marquee em globals.css). Duplicamos os
 * itens duas vezes pra loop infinito sem corte visual.
 */
export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[color:var(--brand-black)] py-5 text-white">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-white/85"
          >
            <it.icon className="size-4 text-[color:var(--brand-gold)]" />
            {it.label}
            <span aria-hidden className="ml-12 size-1 rounded-full bg-[color:var(--brand-gold)]/60" />
          </span>
        ))}
      </div>
    </section>
  );
}
