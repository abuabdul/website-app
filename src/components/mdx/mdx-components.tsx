import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={cn("text-3xl font-bold text-primary mt-8 mb-4", className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={cn("text-2xl font-bold text-primary mt-8 mb-3 border-b border-border pb-2", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={cn("text-xl font-semibold text-primary mt-6 mb-2", className)} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={cn("text-text-muted leading-relaxed mb-4", className)} {...props} />
  ),
  a: ({ className, ...props }) => (
    <a className={cn("text-accent underline hover:text-accent/80 transition-colors", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("list-disc pl-6 space-y-1.5 mb-4 text-text-muted", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("list-decimal pl-6 space-y-1.5 mb-4 text-text-muted", className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn("border-l-4 border-accent pl-4 italic text-text-muted my-4", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn("bg-muted text-primary rounded px-1.5 py-0.5 text-sm font-mono", className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn("bg-muted border border-border rounded-xl p-4 overflow-x-auto mb-4 text-sm font-mono", className)}
      {...props}
    />
  ),
  hr: () => <hr className="border-border my-8" />,
  strong: ({ className, ...props }) => (
    <strong className={cn("font-semibold text-text", className)} {...props} />
  ),
};
