import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20", className)}>
      {children}
    </main>
  );
}
