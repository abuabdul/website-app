import { ExternalLink, GitFork } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="flex flex-col h-full">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="muted">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
          >
            <GitFork size={14} />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
          >
            <ExternalLink size={14} />
            Live
          </a>
        )}
      </div>
    </Card>
  );
}
