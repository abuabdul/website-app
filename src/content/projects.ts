import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Cloud-Native Payments Platform",
    description:
      "A PCI-DSS compliant payment processing platform built on GCP handling £50M+ in daily transactions. Features real-time fraud detection, multi-currency support, and a merchant dashboard.",
    techStack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "GCP", "Kubernetes", "React"],
    githubUrl: "https://github.com",
    featured: true,
    startDate: "2020-01",
    endDate: "2021-12",
    status: "completed",
  },
  {
    id: "proj-2",
    title: "Enterprise Microservices Migration",
    description:
      "Led the decomposition of a 10-year-old Java monolith into AWS-native microservices. Achieved 40% latency reduction and 35% cost savings while maintaining zero downtime.",
    techStack: ["TypeScript", "Node.js", "AWS Lambda", "API Gateway", "DynamoDB", "SQS", "CDK"],
    featured: true,
    startDate: "2022-03",
    endDate: "2023-06",
    status: "completed",
  },
  {
    id: "proj-3",
    title: "Personal Portfolio Website",
    description:
      "This very site — a statically generated personal portfolio and blog built with Next.js 16, Tailwind CSS v4, and MDX. Fully type-safe, accessible, and deployed on Vercel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "React"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    startDate: "2026-06",
    status: "active",
  },
  {
    id: "proj-4",
    title: "Real-Time Fraud Detection Engine",
    description:
      "A streaming fraud detection service processing 10,000+ transactions per second using ML scoring models. Built with Apache Kafka and deployed on Kubernetes.",
    techStack: ["Java", "Kafka Streams", "PostgreSQL", "Docker", "Kubernetes", "Python"],
    featured: false,
    startDate: "2020-06",
    endDate: "2021-03",
    status: "completed",
  },
  {
    id: "proj-5",
    title: "Supply Chain SaaS Platform",
    description:
      "An early-stage SaaS product for supply chain management featuring inventory tracking, supplier portal, and analytics dashboard.",
    techStack: ["Java", "AngularJS", "MySQL", "REST APIs"],
    featured: false,
    startDate: "2014-09",
    endDate: "2016-05",
    status: "archived",
  },
  {
    id: "proj-6",
    title: "React Component Library",
    description:
      "An internal shared component library used across 6 client projects at a digital agency. Included design tokens, accessible primitives, and comprehensive Storybook documentation.",
    techStack: ["React", "TypeScript", "Storybook", "Jest", "CSS Modules"],
    featured: false,
    startDate: "2018-01",
    endDate: "2019-02",
    status: "archived",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
