import type { Metadata } from "next";
import { GitFork, Briefcase, Mail, ExternalLink } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { ObfuscatedEmail } from "@/components/ui/obfuscated-email";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Abubacker A K.",
};

const otherLinks = [
  {
    icon: Briefcase,
    label: "LinkedIn",
    value: "linkedin.com/in/abubackersiddik",
    href: "https://linkedin.com/in/abubackersiddik",
    description: "Connect professionally — I'm open to interesting roles, consulting opportunities, and conversations.",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/abuabdul",
    href: "https://github.com/abuabdul",
    description: "Browse my open-source work, side projects, and contributions to the developer community.",
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
        {/* Email card — address assembled client-side only, never in static HTML */}
        <div className="block group">
          <Card hover className="h-full">
            <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
              <Mail size={18} />
            </div>
            <h3 className="font-semibold text-primary mb-1">Email</h3>
            <ObfuscatedEmail className="text-xs text-accent font-mono mb-2 hover:underline block" />
            <p className="text-sm text-text-muted leading-relaxed">
              Best for detailed questions, collaboration ideas, opportunities, or just saying hello.
            </p>
          </Card>
        </div>

        {/* LinkedIn and GitHub */}
        {otherLinks.map(({ icon: Icon, label, value, href, description }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
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
          I&apos;m open to Senior Engineer, Principal Engineer, Solutions Architect, and Director of
          Engineering roles — particularly in companies working on AI-driven systems, cloud-native
          platforms, or complex distributed architecture. Based in Derby, UK. If that sounds like
          you, I&apos;d love to hear from you.
        </p>
      </div>
    </PageWrapper>
  );
}
