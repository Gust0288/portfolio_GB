import { learningSkills, skillGroups } from "@/data/skills";

// Korte navne til båndet: "CSS (Tailwind, Bootstrap)" -> "CSS"
const tickerSkills = Array.from(
  new Set(
    [
      ...skillGroups.flatMap((group) => group.skills),
      ...learningSkills,
    ].map((skill) => skill.name.replace(/\s*\(.*\)\s*/, "").trim())
  )
);

export function TechTicker() {
  return (
    <div
      aria-label="Technologies I work with"
      className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="flex w-max animate-ticker group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {tickerSkills.map((name) => (
              <li
                key={name}
                className="flex items-center gap-4 pl-4 text-sm text-muted-foreground"
              >
                <span className="whitespace-nowrap">{name}</span>
                <span
                  aria-hidden="true"
                  className="size-1 shrink-0 rounded-full bg-primary/40"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
