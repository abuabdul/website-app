import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "border border-primary text-primary hover:bg-primary/5",
    ghost: "text-text-muted hover:text-text hover:bg-muted",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-7 text-base",
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
