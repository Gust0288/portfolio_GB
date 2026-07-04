import { ArrowRight, Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[60svh] flex-col justify-center py-16 sm:py-24"
    >
      <p className="text-sm font-medium text-muted-foreground">{site.location}</p>
      <h1
        id="hero-heading"
        className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl"
      >
        {site.name}
      </h1>
      <p className="mt-2 text-xl text-muted-foreground sm:text-2xl">{site.role}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
        {site.valueStatement}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button nativeButton={false} render={<a href="#projects" />}>
          View projects
          <ArrowRight aria-hidden="true" />
        </Button>
        <Button
          variant="outline"
          nativeButton={false}
          render={
            <a href={site.github} target="_blank" rel="noopener noreferrer" />
          }
        >
          <GitHubIcon />
          GitHub
        </Button>
        <Button
          variant="outline"
          nativeButton={false}
          render={
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" />
          }
        >
          <LinkedInIcon />
          LinkedIn
        </Button>
        <Button
          variant="ghost"
          nativeButton={false}
          render={<a href={`mailto:${site.email}`} />}
        >
          <Mail aria-hidden="true" />
          {site.email}
        </Button>
      </div>
    </section>
  );
}
