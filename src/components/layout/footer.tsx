"use client";

import { useEffect, useState } from "react";
import { GitFork, Briefcase, Mail } from "lucide-react";

const PARTS = ["abuabdul86", "hotmail", "com"];

function useEmail() {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => {
    setEmail(`${PARTS[0]}@${PARTS[1]}.${PARTS[2]}`);
  }, []);
  return email;
}

export function Footer() {
  const email = useEmail();

  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Abubacker A K — Built with Next.js &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/abuabdul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <GitFork size={18} />
          </a>
          <a
            href="https://linkedin.com/in/abubackersiddik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <Briefcase size={18} />
          </a>
          {/* Email href assembled client-side only — never in static HTML */}
          <a
            href={email ? `mailto:${email}` : undefined}
            aria-label="Email"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
