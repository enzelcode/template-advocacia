import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="reveal text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--brand-gold)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="reveal mt-3 font-heading text-3xl sm:text-4xl md:text-5xl font-medium text-foreground text-balance">
        {title}
      </h2>
      {description ? (
        <p className="reveal mt-5 text-base sm:text-lg text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
