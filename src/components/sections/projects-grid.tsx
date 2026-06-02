"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/sections/project-card";
import type { Project } from "@/types";

interface ProjectsGridProps {
  projects: Project[];
  allTags: string[];
}

export function ProjectsGrid({ projects, allTags }: ProjectsGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag ? projects.filter((p) => p.techStack.includes(activeTag)) : projects;

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Badge
          variant={activeTag === null ? "accent" : "default"}
          onClick={() => setActiveTag(null)}
        >
          All
        </Badge>
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={activeTag === tag ? "accent" : "default"}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-muted py-12">No projects match this filter.</p>
      )}
    </div>
  );
}
