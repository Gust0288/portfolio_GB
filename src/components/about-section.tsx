import { Info } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { educations } from "@/data/education";

const experience = [
  {
    role: "Fullstack Developer Intern",
    org: "Awork A/S",
    period: "Jan – May 2026",
    description:
      "Case management system for a Danish public authority, built with a PHP/Laravel backend and a Nuxt.js, TypeScript and Tailwind frontend.",
  },
  {
    role: "Junior Developer",
    org: "Social Vibes",
    period: "Oct 2024 – Aug 2025",
    description:
      "Built the IBDI healthcare app and the Social Vibes app with Angular 19, Ionic and Neo4j. IBDI shipped to both app stores.",
  },
  {
    role: "Frontend Intern",
    org: "Social Vibes",
    period: "Aug – Oct 2024",
    description: "First step into professional development work.",
  },
];

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-16 sm:py-24">
      <Reveal>
        <h2
          id="about-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          About
        </h2>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a fullstack developer from Copenhagen, freshly graduated
            from KEA&apos;s Web Development programme (June 2026). I came into
            code through multimedia design, and the combination stuck: I care
            about how things look and feel, but I want to build the whole
            thing: database, API and UI.
          </p>
          <p>
            Most of what I know, I learned by shipping. At Social Vibes I went
            from frontend intern to junior developer and helped take a
            healthcare app all the way to the App Store and Google Play. At
            Awork I worked on a case management system for a Danish public
            authority, and for my bachelor project I built a self-service
            membership portal that Dansk Industri runs in production.
          </p>
          <p>
            I&apos;m looking for a developer role in Copenhagen or elsewhere on
            Zealand, and open to the wider Nordics, where I can keep shipping
            real things with a team that takes both code quality and users
            seriously.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-8">
          <div>
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
              Experience
            </h3>
            <ol className="mt-3 space-y-4">
              {experience.map((item) => (
                <li key={`${item.role}-${item.period}`}>
                  <p className="font-medium text-foreground">
                    {item.role} · {item.org}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
              Education
            </h3>
            <ol className="mt-3 space-y-3">
              {educations.map((item) => (
                <li
                  key={item.slug}
                  id={`edu-${item.slug}`}
                  className="-m-2 scroll-mt-24 rounded-lg p-2 target:ring-2 target:ring-primary/50"
                >
                  <Popover>
                    <PopoverTrigger
                      openOnHover
                      delay={150}
                      className="block w-full cursor-pointer rounded-md text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      <span className="flex items-center gap-1.5 font-medium text-foreground">
                        <span className="decoration-primary/50 underline-offset-4 hover:underline hover:decoration-dotted">
                          {item.degree}
                        </span>
                        <Info
                          className="size-3.5 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="block text-sm text-muted-foreground">
                        {item.school} · {item.period}
                      </span>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-4" side="top">
                      <p className="font-medium">{item.degree}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.school} · {item.period}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {item.topics.map((topic) => (
                          <li key={topic}>
                            <Badge variant="outline">{topic}</Badge>
                          </li>
                        ))}
                      </ul>
                    </PopoverContent>
                  </Popover>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
