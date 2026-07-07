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
  /** Erhvervserfaring (slugs fra experience.ts) hvor skillen er brugt. */
  experience?: string[];
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
        experience: ["awork"],
      },
      {
        name: "JavaScript",
        keywords: [],
        education: ["multimedia-design-ap", "web-development-pba"],
      },
      { name: "TypeScript", experience: ["awork"] },
      { name: "React" },
      { name: "Next.js", education: ["web-development-pba"] },
      { name: "Nuxt.js", education: ["web-development-pba"], experience: ["awork"] },
      { name: "Angular", experience: ["social-vibes-junior"] },
      { name: "Vite" },
      {
        name: "Vue.js",
        education: ["web-development-pba"],
        experience: ["awork"],
      },
      { name: "Ionic", experience: ["social-vibes-junior"] },
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
        experience: ["awork"],
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
      { name: "Neo4j", experience: ["social-vibes-junior"] },
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

// Skills jeg er i gang med at lære, ikke fuldt selvstændige endnu.
export const learningSkills: Skill[] = [
  { name: "C#" },
  { name: ".NET" },
  { name: "ASP.NET Core" },
  { name: "EF Core" },
];
