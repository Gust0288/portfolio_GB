"use client";

import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { motion, type Variants } from "motion/react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center py-16"
    >
      {/* Soft accent glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center overflow-visible blur-3xl"
      >
        <div className="h-96 w-full max-w-4xl rounded-full bg-gradient-to-tr from-primary/20 via-primary/8 to-transparent" />
      </div>

      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.p variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-sm font-medium text-muted-foreground">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for work · {site.location}
          </span>
        </motion.p>
        <motion.h1
          variants={item}
          id="hero-heading"
          className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-7xl"
        >
          {site.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-3 text-xl font-medium text-primary sm:text-2xl"
        >
          {site.role}
        </motion.p>
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl"
        >
          {site.valueStatement}
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button size="lg" nativeButton={false} render={<a href="#projects" />}>
            View projects
            <ArrowRight aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="lg"
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
            size="lg"
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
            size="lg"
            nativeButton={false}
            render={<a href={`mailto:${site.email}`} />}
          >
            <Mail aria-hidden="true" />
            {site.email}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.a
          href="#projects"
          aria-label="Scroll to projects"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-5" aria-hidden="true" />
        </motion.a>
      </motion.div>
    </section>
  );
}
