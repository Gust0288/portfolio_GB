"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowDown, ArrowRight, Mail } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "motion/react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Magnetic } from "@/components/magnetic";
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

function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % site.roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <>
      <motion.div
        variants={item}
        className="relative mt-3 h-8 text-xl font-medium text-primary sm:h-9 sm:text-2xl"
      >
        <AnimatePresence>
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex items-center whitespace-nowrap"
          >
            {site.roles[roleIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <span className="sr-only">
        Open to fullstack, frontend, or backend developer roles.
      </span>
    </>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  function handleSpotlightMove(event: MouseEvent<HTMLElement>) {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    el.style.setProperty("--spot-opacity", "1");
  }

  function handleSpotlightLeave() {
    sectionRef.current?.style.setProperty("--spot-opacity", "0");
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      onMouseMove={handleSpotlightMove}
      onMouseLeave={handleSpotlightLeave}
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center overflow-hidden py-16"
    >
      {/* Ambient background glow, drifts on its own */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center blur-3xl"
        animate={{ x: ["-2%", "2%", "-2%"], scale: [1, 1.08, 1] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      >
        <div className="h-96 w-full max-w-4xl rounded-full bg-gradient-to-tr from-primary/20 via-primary/8 to-transparent" />
      </motion.div>

      {/* Cursor-reactive spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: "var(--spot-opacity, 0)",
          background:
            "radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 50%), oklch(from var(--primary) l c h / 0.16), oklch(from var(--primary) l c h / 0) 70%)",
        }}
      />

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
        <RotatingRole />
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
          <Magnetic>
            <Button size="lg" nativeButton={false} render={<a href="#projects" />}>
              View projects
              <ArrowRight aria-hidden="true" />
            </Button>
          </Magnetic>
          <Magnetic>
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
          </Magnetic>
          <Magnetic>
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
          </Magnetic>
          <Magnetic>
            <Button
              variant="ghost"
              size="lg"
              nativeButton={false}
              render={<a href={`mailto:${site.email}`} />}
            >
              <Mail aria-hidden="true" />
              {site.email}
            </Button>
          </Magnetic>
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
