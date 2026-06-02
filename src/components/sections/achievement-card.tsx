import { Award, BadgeCheck, Milestone, BookOpen, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatMonthYear } from "@/lib/utils";
import type { Achievement, AchievementType } from "@/types";

const typeIcon: Record<AchievementType, React.ElementType> = {
  certification: BadgeCheck,
  award: Award,
  milestone: Milestone,
  publication: BookOpen,
};

const typeBadge: Record<AchievementType, string> = {
  certification: "Certification",
  award: "Award",
  milestone: "Milestone",
  publication: "Publication",
};

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const Icon = typeIcon[achievement.type];

  return (
    <Card hover className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-semibold text-primary leading-snug">{achievement.title}</h3>
          <Badge variant="muted" className="flex-shrink-0 text-xs">
            {typeBadge[achievement.type]}
          </Badge>
        </div>
        <p className="text-xs text-accent font-medium mb-1">{achievement.issuer}</p>
        <p className="text-xs text-text-muted mb-2">
          {formatMonthYear(achievement.date)}
          {achievement.expiryDate && ` – ${formatMonthYear(achievement.expiryDate)}`}
        </p>
        {achievement.description && (
          <p className="text-xs text-text-muted leading-relaxed">{achievement.description}</p>
        )}
        {achievement.credentialUrl && (
          <a
            href={achievement.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs text-accent hover:underline"
          >
            <ExternalLink size={11} />
            Verify credential
          </a>
        )}
      </div>
    </Card>
  );
}
