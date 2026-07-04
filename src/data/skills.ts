// src/data/skills.ts
export type Skill = {
  name: string;
  /**
   * Ord der matches (lowercase substring) mod projekternes tech-lister.
   * Udeladt: navnet uden parentes bruges. Tom liste: ingen projektkobling.
   */
  keywords?: string[];
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", keywords: [] },
      { name: "CSS (Tailwind, Bootstrap)", keywords: ["tailwind", "bootstrap", "css"] },
      { name: "JavaScript", keywords: [] },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Nuxt.js" },
      { name: "Angular" },
      { name: "Vite" },
      { name: "Electron" },
      { name: "UX/UI principles", keywords: [] },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Python (Flask)" },
      { name: "PHP (Laravel)", keywords: ["laravel", "php"] },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "SQLite" },
      { name: "MongoDB" },
      { name: "Neo4j" },
    ],
  },
  {
    title: "Tools & methods",
    skills: [
      { name: "Git", keywords: [] },
      { name: "CI/CD", keywords: ["github actions", "ci/cd"] },
      { name: "REST APIs", keywords: [] },
      { name: "LLM integration (Ollama, Whisper, TTS)", keywords: ["ollama", "whisper"] },
    ],
  },
];
