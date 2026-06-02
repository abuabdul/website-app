import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/sections/project-card";
import { featuredProjects } from "@/content/projects";

export function FeaturedProjects() {
  return (
    <section className="bg-muted border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <SectionHeader eyebrow="Work" title="Featured Projects" className="mb-0" />
          <Link
            href="/projects"
            className="text-sm font-medium text-accent hover:underline hidden sm:block"
          >
            All projects →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-block text-sm font-medium text-accent hover:underline sm:hidden"
        >
          All projects →
        </Link>
      </div>
    </section>
  );
}
