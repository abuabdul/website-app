// ─── Resume ───────────────────────────────────────────────────────────────────

export interface WorkExperience {
  id: string;
  company: string;
  companyUrl?: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | null;
  honors?: string;
  location: string;
}

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ResumeData {
  summary: string;
  workExperience: WorkExperience[];
  education: Education[];
  skillCategories: SkillCategory[];
  pdfUrl: string;
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  startDate: string;
  endDate?: string;
  status: "active" | "completed" | "archived";
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  published: boolean;
  coverImage?: string;
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  readingTime: string;
  wordCount: number;
}

// ─── Achievements ─────────────────────────────────────────────────────────────

export type AchievementType = "certification" | "award" | "milestone" | "publication";

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  type: AchievementType;
  credentialUrl?: string;
  credentialId?: string;
  description?: string;
}

// ─── Hobbies ──────────────────────────────────────────────────────────────────

export interface Hobby {
  id: string;
  name: string;
  description: string;
  iconName: string;
  tags?: string[];
}

// ─── Navigation / Contact ─────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
  handle?: string;
}
