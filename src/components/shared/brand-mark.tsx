import { Scale } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  variant?: "dark" | "light";
  size?: "default" | "lg";
};

/**
 * Logo inline (ícone de balança em pílula dourada + nome serifado + subtitle).
 * Usado quando não há um arquivo de logo (siteConfig.logo) — fallback bonitinho.
 */
export function BrandMark({ variant = "dark", size = "default" }: BrandMarkProps) {
  const isLight = variant === "light";

  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-full border text-[color:var(--brand-gold)]",
          isLight
            ? "border-[color:var(--brand-gold)]/40 bg-white/[0.04]"
            : "border-[color:var(--brand-gold)]/40 bg-[color:var(--brand-gold)]/10",
          size === "lg" ? "size-14" : "size-11",
        )}
      >
        <Scale className={size === "lg" ? "size-6" : "size-5"} />
      </span>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading font-normal tracking-tight",
            isLight ? "text-white" : "text-[color:var(--brand-navy)]",
            size === "lg" ? "text-2xl" : "text-lg sm:text-xl",
          )}
        >
          {siteConfig.shortName}
        </span>
        <span
          className={cn(
            "mt-1.5 text-[9px] font-medium uppercase tracking-[0.22em]",
            isLight ? "text-white/60" : "text-muted-foreground",
          )}
        >
          {siteConfig.tagline}
        </span>
      </div>
    </div>
  );
}
