import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { AchievementCard } from "@/components/sections/achievement-card";
import { achievements } from "@/content/achievements";
import type { AchievementType } from "@/types";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Certifications, awards, and career milestones of Abu Abdul.",
};

const sections: { type: AchievementType; label: string; subtitle: string }[] = [
  { type: "certification", label: "Certifications", subtitle: "Industry-recognised technical qualifications" },
  { type: "award", label: "Awards & Recognition", subtitle: "External recognition and speaking engagements" },
  { type: "milestone", label: "Career Milestones", subtitle: "Significant moments in the journey" },
];

export default function AchievementsPage() {
  return (
    <PageWrapper>
      <SectionHeader
        eyebrow="Credentials"
        title="Achievements"
        subtitle="Certifications, awards, and milestones that mark the journey from engineer to architect."
      />
      <div className="space-y-14">
        {sections.map(({ type, label, subtitle }) => {
          const items = achievements.filter((a) => a.type === type);
          if (items.length === 0) return null;

          return (
            <section key={type}>
              <div className="mb-6">
                <h2 className="text-xl font-bold text-primary">{label}</h2>
                <p className="text-sm text-text-muted mt-0.5">{subtitle}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((achievement) => (
                  <AchievementCard key={achievement.id} achievement={achievement} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </PageWrapper>
  );
}
