"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Split into parts so the full address is never in the static HTML or a single string literal.
const PARTS = ["abuabdul86", "hotmail", "com"];

function assemble() {
  return `${PARTS[0]}@${PARTS[1]}.${PARTS[2]}`;
}

interface ObfuscatedEmailProps {
  className?: string;
  /** Render as a clickable mailto link (default) or plain text */
  asLink?: boolean;
}

export function ObfuscatedEmail({ className, asLink = true }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(assemble());
  }, []);

  if (!email) {
    // Placeholder so layout doesn't shift; never contains the real address
    return <span className={cn("opacity-0 select-none", className)} aria-hidden>········@·········.···</span>;
  }

  if (!asLink) {
    return <span className={className}>{email}</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  );
}
