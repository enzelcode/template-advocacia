import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  variant?: "dark" | "light";
  size?: "default" | "lg";
};

/**
 * Logo inline — monograma derivado das iniciais do shortName,
 * serifado e dourado, em moldura quadrada + nome ao lado.
 * Usado quando não há um arquivo de logo (siteConfig.logo) — fallback bonitinho.
 */
function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function BrandMark({ variant = "dark", size = "default" }: BrandMarkProps) {
  const isLight = variant === "light";
  const initials = getInitials(siteConfig.shortName);

  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className={cn(
          "grid shrink-0 place-items-center rounded-md border text-[color:var(--brand-gold)]",
          isLight
            ? "border-[color:var(--brand-gold)]/50 bg-white/[0.04]"
            : "border-[color:var(--brand-gold)]/50 bg-[color:var(--brand-gold)]/10",
          size === "lg" ? "size-14" : "size-11",
        )}
      >
        <span
          className={cn(
            "font-heading font-normal italic leading-none tracking-tight",
            size === "lg" ? "text-xl" : "text-base",
          )}
        >
          {initials}
        </span>
      </span>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading font-normal tracking-tight",
            isLight ? "text-white" : "text-[color:var(--brand-black)]",
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
