import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { SkillsMatrix } from "@/components/sections/skills-matrix";
import { resumeData } from "@/content/resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Work experience, education, and skills of Abu Abdul — software engineer and aspiring enterprise architect.",
};

export default function ResumePage() {
  const { summary, workExperience, education, skillCategories, pdfUrl } = resumeData;

  return (
    <PageWrapper>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-1">CV</p>
          <h1 className="text-4xl font-bold text-primary">Resume</h1>
          <p className="mt-3 text-text-muted max-w-2xl leading-relaxed">{summary}</p>
        </div>
        <a
          href={pdfUrl}
          download="Abu_Abdul_Resume.pdf"
          className="flex-shrink-0 inline-flex items-center gap-2 rounded-lg font-medium transition-colors bg-primary text-white hover:bg-primary/90 h-10 px-5 text-sm"
        >
          <Download size={15} />
          Download PDF
        </a>
      </div>

      {/* Experience */}
      <section className="mb-16">
        <SectionHeader eyebrow="Career" title="Work Experience" />
        <ExperienceTimeline experience={workExperience} />
      </section>

      {/* Education */}
      <section className="mb-16">
        <SectionHeader eyebrow="Academic" title="Education" />
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <div>
                <h3 className="text-lg font-semibold text-primary">{edu.institution}</h3>
                <p className="text-sm text-text-muted">
                  {edu.degree} in {edu.field}
                  {edu.honors && <span className="text-accent"> · {edu.honors}</span>}
                </p>
                <p className="text-sm text-text-muted">{edu.location}</p>
              </div>
              <p className="text-sm text-text-muted flex-shrink-0">
                {edu.startYear} – {edu.endYear ?? "Present"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <SectionHeader eyebrow="Expertise" title="Skills" />
        <SkillsMatrix categories={skillCategories} />
      </section>
    </PageWrapper>
  );
}
