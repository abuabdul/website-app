import type { Metadata } from "next";
import { icons } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { hobbies } from "@/content/hobbies";

export const metadata: Metadata = {
  title: "Hobbies",
  description: "The things Abu Abdul does outside of work.",
};

function DynamicIcon({ name, size = 24 }: { name: string; size?: number }) {
  const Icon = icons[name as keyof typeof icons];
  if (!Icon) return null;
  return <Icon size={size} />;
}

export default function HobbiesPage() {
  return (
    <PageWrapper>
      <SectionHeader
        eyebrow="Beyond the Code"
        title="Hobbies & Interests"
        subtitle="What I get up to when I'm not in front of a terminal."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby) => (
          <Card key={hobby.id} hover className="flex flex-col gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <DynamicIcon name={hobby.iconName} size={22} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-primary mb-1.5">{hobby.name}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{hobby.description}</p>
            </div>
            {hobby.tags && (
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {hobby.tags.map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
}
