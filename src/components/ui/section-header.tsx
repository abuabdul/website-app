import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, className, centered = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-primary">{title}</h2>
      {subtitle && <p className="mt-3 text-lg text-text-muted max-w-2xl">{subtitle}</p>}
    </div>
  );
}
