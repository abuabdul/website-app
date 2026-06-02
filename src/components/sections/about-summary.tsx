import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutSummary() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader eyebrow="About Me" title="A bit about who I am" />
      <div className="max-w-3xl space-y-4 text-text-muted leading-relaxed">
        <p>
          I&apos;m a Senior Software Engineer based in Derby, UK with 10+ years of experience
          building scalable enterprise applications and cloud-native systems. I&apos;ve worked
          across the full stack — Java/Spring Boot and Node.js/NestJS on the backend, React and
          Next.js on the frontend — delivering production systems at companies including CHEP,
          Boston Consulting Group, Canto, MarketAxess, and Trafigura.
        </p>
        <p>
          I&apos;m an expert in Infrastructure as Code (Terraform), DevOps automation, and
          microservices architecture on AWS. More recently I&apos;ve been deeply excited by
          AI-driven development — working with Generative AI, LangChain, OpenAI/GPT-4, and
          Agentic AI to build the next generation of intelligent applications. I&apos;m passionate
          about bridging deep technical expertise with strategic thinking to help organisations
          build systems that scale.
        </p>
      </div>
      <Link
        href="/resume"
        className="mt-6 inline-flex items-center text-sm font-medium text-accent hover:underline"
      >
        Read my full resume →
      </Link>
    </section>
  );
}
