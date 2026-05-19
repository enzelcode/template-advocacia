import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsappIcon } from "@/components/shared/brand-icons";

type WhatsappButtonProps = {
  label: string;
  message?: string;
  size?: "default" | "lg";
  variant?: "default" | "outline" | "secondary";
  className?: string;
};

export function WhatsappButton({
  label,
  message,
  size = "lg",
  variant = "default",
  className,
}: WhatsappButtonProps) {
  return (
    <Button
      size={size}
      variant={variant}
      nativeButton={false}
      render={
        <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" />
      }
      className={cn(
        "group relative h-12 gap-2.5 rounded-full px-7 text-sm font-medium tracking-wide",
        "transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg hover:shadow-[color:var(--brand-navy)]/15",
        className,
      )}
    >
      <WhatsappIcon className="size-[18px]" />
      {label}
      <span aria-hidden className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Button>
  );
}
