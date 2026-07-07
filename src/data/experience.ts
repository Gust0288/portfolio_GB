// src/data/experience.ts
export type Experience = {
  slug: string;
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    slug: "awork",
    role: "Fullstack Developer Intern",
    org: "Awork A/S",
    period: "Jan – May 2026",
    description:
      "Case management system for a Danish public authority, built with a PHP/Laravel backend and a Nuxt.js, TypeScript and Tailwind frontend.",
  },
  {
    slug: "social-vibes-junior",
    role: "Junior Developer",
    org: "Social Vibes",
    period: "Oct 2024 – Aug 2025",
    description:
      "Built the IBDI healthcare app and the Social Vibes app with Angular 19, Ionic and Neo4j. IBDI shipped to both app stores.",
  },
  {
    slug: "social-vibes-intern",
    role: "Frontend Intern",
    org: "Social Vibes",
    period: "Aug – Oct 2024",
    description: "First step into professional development work.",
  },
];
