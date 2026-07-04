// src/data/skills.ts
export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS (Tailwind, Bootstrap)",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Nuxt.js",
      "Angular",
      "UX/UI principles",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python (Flask)", "PHP (Laravel)"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Neo4j"],
  },
  {
    title: "Tools & methods",
    skills: ["Git", "CI/CD", "REST APIs"],
  },
];
