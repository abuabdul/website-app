import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Memoa — AI-Powered Product",
    description:
      "Led the product launch of Memoa, an AI-driven application featuring Generative AI capabilities. Secured 100+ users and 10 paying customers within the first week of launch.",
    techStack: ["Generative AI", "OpenAI", "LangChain", "Node.js", "React", "TypeScript", "AWS"],
    githubUrl: "https://github.com/abuabdul",
    featured: true,
    startDate: "2024-01",
    status: "active",
  },
  {
    id: "proj-2",
    title: "BCG Transcript Library System",
    description:
      "Built a document and transcript management platform at Boston Consulting Group integrating GPT-4 for AI-enhanced document processing. Onboarded 5 vendors within 3 months via serverless AWS Lambda APIs.",
    techStack: [
      "Node.js",
      "TypeScript",
      "React",
      "GPT-4",
      "GenAI",
      "AWS Lambda",
      "SQS",
      "S3",
      "PostgreSQL",
      "Terraform",
    ],
    featured: true,
    startDate: "2023-10",
    endDate: "2025-03",
    status: "completed",
  },
  {
    id: "proj-3",
    title: "CineaCloud — Streaming Platform",
    description:
      "Integrated Stripe payment gateway into CineaCloud with multi-currency support, improving payment processing efficiency by 35%. Built to support a global streaming audience.",
    techStack: ["Node.js", "React", "Stripe", "AWS", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/abuabdul",
    featured: true,
    startDate: "2020-01",
    status: "completed",
  },
  {
    id: "proj-4",
    title: "Ethereum Document Management System",
    description:
      "Designed and built an Ethereum blockchain-based document management system using Solidity smart contracts at ConsenSys. Provides immutable, decentralised document verification.",
    techStack: ["Solidity", "Ethereum", "Web3.js", "Node.js", "React", "IPFS"],
    featured: false,
    startDate: "2019-01",
    status: "completed",
  },
  {
    id: "proj-5",
    title: "Canto Digital Asset Management",
    description:
      "Designed advanced search functionality for a digital asset management platform handling 10,000+ assets. Integrated MerlinOne's NOMAD API for video search and built analytics to cut storage costs by 25%.",
    techStack: [
      "Spring Boot",
      "Java",
      "AWS Lambda",
      "OpenSearch",
      "Redis",
      "React",
      "DynamoDB",
      "CloudFront",
    ],
    featured: false,
    startDate: "2022-08",
    endDate: "2023-09",
    status: "completed",
  },
  {
    id: "proj-6",
    title: "Shopify App — E-commerce Innovation",
    description:
      "Pioneered a custom Shopify app using Node.js and React for enhanced e-commerce capabilities, including product recommendation features and custom storefront integrations.",
    techStack: ["Node.js", "React", "TypeScript", "Shopify API", "MySQL", "AWS"],
    githubUrl: "https://github.com/abuabdul",
    featured: false,
    startDate: "2020-06",
    status: "completed",
  },
  {
    id: "proj-7",
    title: "MarketAxess Trading APIs",
    description:
      "Built OpenAPI-compliant REST APIs and AWS Lambda functions for electronic bond trading data processing. Achieved 95%+ SonarQube quality gate compliance through comprehensive TDD.",
    techStack: [
      "Java",
      "Spring Boot",
      "Node.js",
      "AWS Lambda",
      "Redis",
      "Docker",
      "SonarQube",
      "Jenkins",
    ],
    featured: false,
    startDate: "2021-08",
    endDate: "2022-08",
    status: "completed",
  },
  {
    id: "proj-8",
    title: "Personal Portfolio Website",
    description:
      "This site — a statically generated portfolio and blog built with Next.js 16, Tailwind CSS v4, and MDX. Fully type-safe, accessible, and deployed on Vercel.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "React"],
    githubUrl: "https://github.com/abuabdul/website-app",
    liveUrl: "https://abuabdul.dev",
    featured: false,
    startDate: "2026-06",
    status: "active",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
