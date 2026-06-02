import type { Metadata } from "next";
import { GitFork, Briefcase, Mail, ExternalLink } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Abu Abdul.",
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    description: "Best for detailed questions, collaboration ideas, or just saying hello.",
  },
  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com",
    description: "Connect professionally — I'm open to interesting opportunities and conversations.",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com",
    description: "See what I'm building, follow my open-source contributions, and raise issues.",
  },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <SectionHeader
        eyebrow="Get in Touch"
        title="Contact"
        subtitle="I'm always happy to connect with engineers, leaders, and anyone who shares a curiosity for building things well."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {contactLinks.map(({ icon: Icon, label, value, href, description }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="block group"
          >
            <Card hover className="h-full transition-colors group-hover:border-accent/40">
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-primary mb-1 flex items-center gap-1.5">
                {label}
                <ExternalLink size={12} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-accent mb-2 font-mono">{value}</p>
              <p className="text-sm text-text-muted leading-relaxed">{description}</p>
            </Card>
          </a>
        ))}
      </div>

      <div className="bg-muted border border-border rounded-xl p-8 max-w-xl">
        <h2 className="text-lg font-semibold text-primary mb-2">Open to opportunities</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          I&apos;m currently open to senior engineering, principal engineer, and architect roles —
          particularly in companies working on complex distributed systems, platform engineering, or
          building engineering culture at scale. If that sounds like you, reach out.
        </p>
      </div>
    </PageWrapper>
  );
}
