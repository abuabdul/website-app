import { GitFork, Briefcase, Mail } from "lucide-react";

const socials = [
  { icon: GitFork, href: "https://github.com", label: "GitHub" },
  { icon: Briefcase, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} — Built with Next.js &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-text-muted hover:text-accent transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
