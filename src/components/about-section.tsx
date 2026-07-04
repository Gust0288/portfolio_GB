import { Reveal } from "@/components/reveal";

const experience = [
  {
    role: "Fullstack Developer Intern",
    org: "Awork A/S",
    period: "Jan – May 2026",
    description:
      "Case management system for a Danish public authority — PHP/Laravel backend with a Nuxt.js, TypeScript and Tailwind frontend.",
  },
  {
    role: "Junior Developer",
    org: "Social Vibes",
    period: "Oct 2024 – Aug 2025",
    description:
      "Built the IBDI healthcare app and the Social Vibes app with Angular 19, Ionic and Neo4j — IBDI shipped to both app stores.",
  },
  {
    role: "Frontend Intern",
    org: "Social Vibes",
    period: "Aug – Oct 2024",
    description: "First step into professional development work.",
  },
];

const education = [
  {
    degree: "Web Development (PBA)",
    school: "KEA — Copenhagen School of Design and Technology",
    period: "Completed June 2026",
  },
  {
    degree: "Multimedia Design (AP)",
    school: "KEA — Copenhagen School of Design and Technology",
    period: "Completed 2024",
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
            thing — database, API and UI.
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
            Zealand — and open to the wider Nordics — where I can keep shipping
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
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="font-medium text-foreground">{item.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.school} · {item.period}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
