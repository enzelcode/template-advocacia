import * as Lucide from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  name: string;
  className?: string;
};

/**
 * Renderiza um ícone do lucide-react pelo nome (string),
 * permitindo configurar ícones por seção via site.ts.
 */
export function Icon({ name, className }: IconProps) {
  const LucideIcon =
    (Lucide as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ??
    Lucide.Circle;
  return <LucideIcon className={cn("size-6", className)} />;
}
