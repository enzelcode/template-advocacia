import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink, hasWhatsapp } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/shared/brand-icons";

type Tone = "navy" | "gold" | "outline-light" | "outline-dark";

type WhatsappButtonProps = {
  label: string;
  message?: string;
  tone?: Tone;
  size?: "default" | "lg";
  className?: string;
};

const toneStyles: Record<Tone, string> = {
  navy:
    "bg-[color:var(--brand-navy)] text-white hover:bg-[color:var(--brand-navy)] hover:brightness-110",
  gold:
    "bg-[color:var(--brand-gold)] text-[color:var(--brand-navy)] hover:bg-[color:var(--brand-gold)] hover:brightness-105",
  "outline-light":
    "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/12 hover:border-white/50",
  "outline-dark":
    "border border-[color:var(--brand-navy)]/20 bg-transparent text-[color:var(--brand-navy)] hover:bg-[color:var(--brand-navy)]/5",
};

export function WhatsappButton({
  label,
  message,
  tone = "navy",
  size = "lg",
  className,
}: WhatsappButtonProps) {
  const wa = hasWhatsapp();
  const Icon = wa ? WhatsappIcon : MessageCircle;
  return (
    <a
      href={whatsappLink(message)}
      {...(wa ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full font-medium tracking-wide whitespace-nowrap",
        "transition-all duration-300 hover:-translate-y-[1px] hover:shadow-lg hover:shadow-black/15",
        size === "lg" ? "h-12 px-7 text-sm" : "h-10 px-5 text-sm",
        toneStyles[tone],
        className,
      )}
    >
      <Icon className="size-[18px]" />
      {label}
      <span aria-hidden className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  );
}
