import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24 py-16 sm:py-24">
      <Reveal>
        <h2
          id="skills-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Skills
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          What I actually work with. No padding.
        </p>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Badge
                    variant="outline"
                    className="transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {skill}
                  </Badge>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
