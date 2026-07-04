"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { ProjectGallery } from "@/components/project-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 2) * 0.1 }}
      whileHover={{ y: -4 }}
      className="h-full scroll-mt-24 [&:target>div]:ring-2 [&:target>div]:ring-primary/60"
    >
      <Card className="h-full pt-0 transition-[box-shadow,--tw-ring-color] duration-300 hover:shadow-lg hover:ring-primary/35">
        <ProjectGallery title={project.title} images={project.images} />
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.summary}</CardDescription>
          {project.status && (
            <CardAction>
              <Badge variant={project.status === "live" ? "default" : "secondary"}>
                {project.status === "live" ? "Live" : "In development"}
              </Badge>
            </CardAction>
          )}
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-xs font-medium tracking-wide text-foreground uppercase">
                Problem
              </dt>
              <dd className="mt-1 text-muted-foreground">{project.problem}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-foreground uppercase">
                Solution
              </dt>
              <dd className="mt-1 text-muted-foreground">{project.solution}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium tracking-wide text-foreground uppercase">
                Outcome
              </dt>
              <dd className="mt-1 text-muted-foreground">{project.outcome}</dd>
            </div>
          </dl>
          <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Technologies used">
            {project.tech.map((tech) => (
              <li key={tech}>
                <Badge variant="outline">{tech}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="gap-2">
          {project.links.map((link) => (
            <Button
              key={link.url}
              variant="outline"
              size="sm"
              nativeButton={false}
              render={
                <a href={link.url} target="_blank" rel="noopener noreferrer" />
              }
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" />
            </Button>
          ))}
        </CardFooter>
      </Card>
    </motion.article>
  );
}
