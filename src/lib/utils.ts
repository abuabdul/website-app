import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatMonthYear(dateStr: string): string {
  return new Date(dateStr + "-01").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

/**
 * Prefix a public asset path with the base path when deployed to GitHub Pages.
 * Use this for plain <a href> and raw string paths — Next.js <Link> and <Image>
 * handle basePath automatically.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
