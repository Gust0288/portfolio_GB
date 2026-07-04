import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";

export function ProjectSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24">
      <Reveal>
        <h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Projects
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Four projects, two of them running in production.
        </p>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
