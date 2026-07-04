import { educations, type Education } from "@/data/education";
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

// Finder de uddannelser en skill stammer fra.
export function educationsForSkill(skill: Skill): Education[] {
  if (!skill.education?.length) return [];
  return educations.filter((education) =>
    skill.education!.includes(education.slug)
  );
}
