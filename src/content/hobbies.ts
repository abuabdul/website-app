import type { Hobby } from "@/types";

export const hobbies: Hobby[] = [
  {
    id: "hob-1",
    name: "Open Source Contributing",
    description:
      "I enjoy giving back to the developer community by contributing to open-source projects — from fixing bugs and writing docs to building new features. It's a great way to learn from world-class engineers.",
    iconName: "GitFork",
    tags: ["tech", "community"],
  },
  {
    id: "hob-2",
    name: "Technical Writing & Blogging",
    description:
      "I write about software architecture, engineering leadership, and lessons learned in the trenches. Explaining things clearly is one of the hardest and most rewarding skills to develop.",
    iconName: "PenLine",
    tags: ["creative", "tech"],
  },
  {
    id: "hob-3",
    name: "Running",
    description:
      "Running gives me space to think and decompress after deep focus work. I've completed several half-marathons and enjoy early morning runs before the day begins.",
    iconName: "PersonStanding",
    tags: ["outdoor", "fitness"],
  },
  {
    id: "hob-4",
    name: "Reading",
    description:
      "My reading spans technology, business strategy, philosophy, and history. Current shelf includes Clean Architecture, The Pragmatic Programmer, and Thinking, Fast and Slow.",
    iconName: "BookOpen",
    tags: ["learning"],
  },
  {
    id: "hob-5",
    name: "Cooking",
    description:
      "Cooking is creative problem solving with tastier results than debugging. I love experimenting with cuisines from around the world and hosting dinner parties.",
    iconName: "UtensilsCrossed",
    tags: ["creative", "social"],
  },
  {
    id: "hob-6",
    name: "Mentoring",
    description:
      "I volunteer time mentoring junior developers through online platforms and local tech communities. Watching someone go from confused to confident is incredibly fulfilling.",
    iconName: "Users",
    tags: ["community", "tech"],
  },
];
