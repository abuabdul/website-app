import type { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2024-03",
    expiryDate: "2027-03",
    type: "certification",
    credentialUrl: "https://aws.amazon.com/certification/",
    credentialId: "AWS-SAP-XXXX",
    description:
      "Validates advanced skills in designing distributed systems and complex AWS architectures.",
  },
  {
    id: "ach-2",
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2022-11",
    expiryDate: "2025-11",
    type: "certification",
    credentialUrl: "https://aws.amazon.com/certification/",
    credentialId: "AWS-DVA-XXXX",
    description: "Demonstrates proficiency in developing, deploying, and debugging AWS applications.",
  },
  {
    id: "ach-3",
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2023-07",
    expiryDate: "2025-07",
    type: "certification",
    credentialUrl: "https://cloud.google.com/certification",
    description:
      "Validates the ability to design, develop, and manage robust, secure, scalable Google Cloud solutions.",
  },
  {
    id: "ach-4",
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2023-02",
    expiryDate: "2026-02",
    type: "certification",
    credentialUrl: "https://www.cncf.io/certification/cka/",
    description: "Demonstrates competency in Kubernetes cluster administration and operations.",
  },
  {
    id: "ach-5",
    title: "Tech Leader of the Year — Internal Award",
    issuer: "TechCorp Solutions",
    date: "2023-12",
    type: "award",
    description:
      "Recognised for outstanding technical leadership and impact on the engineering organisation's culture and delivery.",
  },
  {
    id: "ach-6",
    title: "Speaker — AWS re:Invent Community Track",
    issuer: "Amazon Web Services",
    date: "2024-11",
    type: "award",
    credentialUrl: "https://reinvent.awsevents.com/",
    description:
      "Delivered a talk on event-driven microservices migration strategies to an audience of 500+ engineers.",
  },
  {
    id: "ach-7",
    title: "Principal Engineer Promotion",
    issuer: "TechCorp Solutions",
    date: "2023-01",
    type: "milestone",
    description:
      "Promoted to Principal Engineer in recognition of technical depth, cross-team influence, and delivery impact.",
  },
  {
    id: "ach-8",
    title: "10 Years in Software Engineering",
    issuer: "Self",
    date: "2024-09",
    type: "milestone",
    description:
      "A decade of shipping software — from junior developer to principal engineer, across startups, agencies, and enterprise.",
  },
];
