import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
  onClick?: () => void;
}

export function Badge({ children, variant = "default", className, onClick }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors";
  const variants = {
    default: "bg-muted text-text border border-border",
    accent: "bg-accent/10 text-accent border border-accent/20",
    muted: "bg-muted text-text-muted",
  };

  return (
    <span
      className={cn(base, variants[variant], onClick && "cursor-pointer hover:bg-accent/10 hover:text-accent", className)}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
