"use client";

import { motion, type Variants } from "motion/react";

import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge, badgeVariants } from "@/components/ui/badge";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { skillGroups, type Skill } from "@/data/skills";
import { projectsUsingSkill } from "@/lib/skill-projects";
import { cn } from "@/lib/utils";

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function SkillBadge({ skill }: { skill: Skill }) {
  const linked = projectsUsingSkill(skill);

  if (linked.length === 0) {
    return <Badge variant="outline">{skill.name}</Badge>;
  }

  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          badgeVariants({ variant: "outline" }),
          "cursor-pointer gap-1.5 transition-colors hover:border-primary/60 hover:text-primary data-popup-open:border-primary data-popup-open:text-primary"
        )}
      >
        {skill.name}
        <span
          className="rounded-full bg-primary/10 px-1.5 text-[10px] font-semibold text-primary tabular-nums"
          aria-label={`used in ${linked.length} ${linked.length === 1 ? "project" : "projects"}`}
        >
          {linked.length}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-52 p-3">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Used in
        </p>
        <ul className="mt-1 space-y-1">
          {linked.map((project) => (
            <li key={project.slug}>
              <PopoverClose
                nativeButton={false}
                render={<a href={`#${project.slug}`} />}
                className="text-sm text-foreground underline-offset-4 hover:text-primary hover:underline"
              >
                {project.shortTitle ?? project.title}
              </PopoverClose>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

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
          What I actually work with. Click a highlighted skill to see the
          projects it is used in.
        </p>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
          >
            <SpotlightCard className="h-full p-5">
              <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
                {group.title}
              </h3>
              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-64px" }}
                className="mt-4 flex flex-wrap gap-1.5"
              >
                {group.skills.map((skill) => (
                  <motion.li key={skill.name} variants={itemVariants}>
                    <SkillBadge skill={skill} />
                  </motion.li>
                ))}
              </motion.ul>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
