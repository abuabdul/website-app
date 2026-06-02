import { Badge } from "@/components/ui/badge";
import type { SkillCategory } from "@/types";

interface SkillsMatrixProps {
  categories: SkillCategory[];
}

const levelColor: Record<string, string> = {
  expert: "bg-accent/20 text-accent border-accent/30",
  advanced: "bg-primary/10 text-primary border-primary/20",
  intermediate: "bg-muted text-text border-border",
  beginner: "bg-muted text-text-muted border-border",
};

export function SkillsMatrix({ categories }: SkillsMatrixProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((cat) => (
        <div key={cat.category}>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted mb-3">
            {cat.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill.name}
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${levelColor[skill.level]}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
