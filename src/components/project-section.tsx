"use client";

import { motion, MotionConfig, type Variants } from "motion/react";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function ProjectSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24">
        <h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Projects
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Four projects — two of them running in production.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </section>
    </MotionConfig>
  );
}
