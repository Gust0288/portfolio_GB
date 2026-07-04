// src/data/skills.ts
export type Skill = {
  name: string;
  /**
   * Ord der matches (lowercase substring) mod projekternes tech-lister.
   * Udeladt: navnet uden parentes bruges. Tom liste: ingen projektkobling.
   */
  keywords?: string[];
  /** Uddannelser (slugs fra education.ts) skillen stammer fra. */
  education?: string[];
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        keywords: [],
        education: ["multimedia-design-ap", "web-development-pba"],
      },
      {
        name: "CSS (Tailwind, Bootstrap)",
        keywords: ["tailwind", "bootstrap", "css"],
        education: ["multimedia-design-ap", "web-development-pba"],
      },
      {
        name: "JavaScript",
        keywords: [],
        education: ["multimedia-design-ap", "web-development-pba"],
      },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js", education: ["web-development-pba"] },
      { name: "Nuxt.js", education: ["web-development-pba"] },
      { name: "Angular" },
      { name: "Vite" },
      { name: "Electron" },
      {
        name: "UX/UI principles",
        keywords: [],
        education: ["multimedia-design-ap"],
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Python (Flask)" },
      {
        name: "PHP (Laravel)",
        keywords: ["laravel", "php"],
        education: ["web-development-pba"],
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL", education: ["web-development-pba"] },
      { name: "SQLite", education: ["web-development-pba"] },
      { name: "MongoDB", education: ["web-development-pba"] },
      { name: "Neo4j" },
    ],
  },
  {
    title: "Tools & methods",
    skills: [
      {
        name: "Git",
        keywords: [],
        education: ["web-development-pba", "multimedia-design-ap"],
      },
      { name: "CI/CD", keywords: ["github actions", "ci/cd"] },
      { name: "REST APIs", keywords: [], education: ["web-development-pba"] },
      {
        name: "LLM integration (Ollama, Whisper, TTS)",
        keywords: ["ollama", "whisper"],
      },
    ],
  },
];
