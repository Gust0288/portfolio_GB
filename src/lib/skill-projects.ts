import { projects, type Project } from "@/data/projects";
import type { Skill } from "@/data/skills";

// Finder de projekter hvis tech-liste matcher en skills keywords.
export function projectsUsingSkill(skill: Skill): Project[] {
  const keywords = (
    skill.keywords ?? [skill.name.replace(/\s*\(.*\)\s*/, "").trim()]
  )
    .map((keyword) => keyword.toLowerCase())
    .filter(Boolean);

  if (keywords.length === 0) return [];

  return projects.filter((project) =>
    project.tech.some((tech) =>
      keywords.some((keyword) => tech.toLowerCase().includes(keyword))
    )
  );
}
