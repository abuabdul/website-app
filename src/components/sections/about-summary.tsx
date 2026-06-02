import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutSummary() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionHeader eyebrow="About Me" title="A bit about who I am" />
      <div className="max-w-3xl space-y-4 text-text-muted leading-relaxed">
        <p>
          I&apos;m a full-stack software engineer with over a decade of experience building
          production systems across fintech, digital agencies, and enterprise software. I started my
          career writing Java and AngularJS, and have since worked across the stack with TypeScript,
          React, Node.js, and AWS. These days I spend as much time thinking about architecture and
          engineering culture as I do writing code.
        </p>
        <p>
          My goal is to move into an enterprise architect or director of engineering role — combining
          technical depth with strategic thinking to help organisations build systems that scale in
          every sense of the word: technically, organisationally, and commercially.
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
