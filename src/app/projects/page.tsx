import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of software projects built by Abu Abdul.",
};

export default function ProjectsPage() {
  const allTags = Array.from(new Set(projects.flatMap((p) => p.techStack))).sort();

  return (
    <PageWrapper>
      <SectionHeader
        eyebrow="Portfolio"
        title="Projects"
        subtitle="A collection of things I've built — from enterprise systems to side projects."
      />
      <ProjectsGrid projects={projects} allTags={allTags} />
    </PageWrapper>
  );
}
