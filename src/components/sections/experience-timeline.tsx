import { Badge } from "@/components/ui/badge";
import { formatMonthYear } from "@/lib/utils";
import type { WorkExperience } from "@/types";

interface ExperienceTimelineProps {
  experience: WorkExperience[];
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-3 top-2 bottom-2 w-px bg-border hidden sm:block" />

      <div className="space-y-10">
        {experience.map((role) => (
          <div key={role.id} className="sm:pl-12 relative">
            {/* Dot */}
            <div className="hidden sm:block absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 border-accent bg-surface flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-accent" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-primary">{role.title}</h3>
                <p className="text-sm font-medium text-accent">
                  {role.companyUrl ? (
                    <a href={role.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {role.company}
                    </a>
                  ) : (
                    role.company
                  )}
                  {" "}· {role.location}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-text-muted whitespace-nowrap">
                  {formatMonthYear(role.startDate)} – {role.endDate ? formatMonthYear(role.endDate) : "Present"}
                </span>
                {!role.endDate && (
                  <Badge variant="accent">Current</Badge>
                )}
              </div>
            </div>

            <ul className="space-y-1.5 mb-4">
              {role.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-2 text-sm text-text-muted">
                  <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                  {achievement}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {role.techStack.map((tech) => (
                <Badge key={tech} variant="muted">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
