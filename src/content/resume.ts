import type { ResumeData } from "@/types";

export const resumeData: ResumeData = {
  summary:
    "Results-driven software engineer with 10+ years of experience building scalable full-stack systems. Transitioning toward enterprise architecture and engineering leadership, with a track record of leading cross-functional teams, driving technical strategy, and delivering complex distributed systems in cloud-native environments.",

  workExperience: [
    {
      id: "we-1",
      company: "TechCorp Solutions",
      companyUrl: "https://example.com",
      title: "Principal Software Engineer",
      location: "Remote",
      startDate: "2022-01",
      endDate: null,
      description:
        "Leading the architecture and development of a cloud-native platform serving 5M+ users.",
      achievements: [
        "Designed and implemented a microservices architecture that reduced system latency by 40%",
        "Mentored a team of 8 engineers, establishing coding standards and review processes",
        "Led the migration of monolithic legacy system to AWS-native services, cutting infrastructure costs by 35%",
        "Introduced domain-driven design principles that improved team velocity by 25%",
      ],
      techStack: ["TypeScript", "Node.js", "React", "AWS", "Kubernetes", "PostgreSQL", "Redis"],
    },
    {
      id: "we-2",
      company: "FinTech Innovations",
      companyUrl: "https://example.com",
      title: "Senior Full Stack Engineer",
      location: "London, UK",
      startDate: "2019-03",
      endDate: "2021-12",
      description:
        "Built and maintained high-throughput payment processing systems handling £50M+ in daily transactions.",
      achievements: [
        "Architected a real-time fraud detection service processing 10,000+ transactions per second",
        "Reduced API response times by 60% through query optimisation and intelligent caching",
        "Delivered PCI-DSS compliant payment gateway from inception to production in 6 months",
        "Implemented CI/CD pipelines that reduced deployment time from days to minutes",
      ],
      techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Kafka", "Docker", "GCP"],
    },
    {
      id: "we-3",
      company: "Digital Agency Co.",
      title: "Full Stack Developer",
      location: "Manchester, UK",
      startDate: "2016-06",
      endDate: "2019-02",
      description:
        "Delivered custom web applications for a diverse portfolio of enterprise and SME clients.",
      achievements: [
        "Built 15+ client-facing applications from requirements gathering through to deployment",
        "Introduced automated testing frameworks that reduced regression bugs by 70%",
        "Led front-end guild to standardise React component library across 6 active projects",
      ],
      techStack: ["JavaScript", "React", "Node.js", "PHP", "MySQL", "AWS"],
    },
    {
      id: "we-4",
      company: "StartupXYZ",
      title: "Software Engineer",
      location: "Manchester, UK",
      startDate: "2014-09",
      endDate: "2016-05",
      description: "Early-stage startup building a SaaS platform for supply chain management.",
      achievements: [
        "Built core product features from scratch using Java and AngularJS",
        "Implemented RESTful APIs consumed by web and mobile clients",
        "Participated in agile ceremonies and contributed to product roadmap discussions",
      ],
      techStack: ["Java", "AngularJS", "MySQL", "Linux", "Git"],
    },
  ],

  education: [
    {
      id: "edu-1",
      institution: "University of Manchester",
      degree: "BSc (Hons)",
      field: "Computer Science",
      startYear: 2010,
      endYear: 2014,
      honors: "First Class Honours",
      location: "Manchester, UK",
    },
  ],

  skillCategories: [
    {
      category: "Languages",
      skills: [
        { name: "TypeScript", level: "expert" },
        { name: "JavaScript", level: "expert" },
        { name: "Java", level: "advanced" },
        { name: "Python", level: "intermediate" },
        { name: "SQL", level: "advanced" },
        { name: "Bash", level: "intermediate" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React", level: "expert" },
        { name: "Next.js", level: "advanced" },
        { name: "Node.js", level: "expert" },
        { name: "Spring Boot", level: "advanced" },
        { name: "Express", level: "advanced" },
        { name: "GraphQL", level: "intermediate" },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: "advanced" },
        { name: "GCP", level: "intermediate" },
        { name: "Kubernetes", level: "intermediate" },
        { name: "Docker", level: "advanced" },
        { name: "Terraform", level: "intermediate" },
        { name: "CI/CD", level: "advanced" },
      ],
    },
    {
      category: "Architecture",
      skills: [
        { name: "Microservices", level: "advanced" },
        { name: "Domain-Driven Design", level: "advanced" },
        { name: "Event-Driven Architecture", level: "intermediate" },
        { name: "System Design", level: "advanced" },
        { name: "API Design", level: "expert" },
        { name: "Distributed Systems", level: "intermediate" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: "advanced" },
        { name: "MySQL", level: "advanced" },
        { name: "Redis", level: "intermediate" },
        { name: "MongoDB", level: "intermediate" },
        { name: "Elasticsearch", level: "intermediate" },
      ],
    },
    {
      category: "Leadership",
      skills: [
        { name: "Technical Mentoring", level: "advanced" },
        { name: "Agile / Scrum", level: "expert" },
        { name: "Code Review", level: "expert" },
        { name: "Technical Strategy", level: "intermediate" },
        { name: "Stakeholder Communication", level: "advanced" },
      ],
    },
  ],

  pdfUrl: "/resume.pdf",
};
