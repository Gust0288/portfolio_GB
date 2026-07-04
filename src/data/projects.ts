// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string; // 1-2 linjer til kortet
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  image: string; // screenshot — påkrævet fra start
  links: { label: string; url: string }[];
  status?: "live" | "in-development";
};

export const projects: Project[] = [
  {
    slug: "di-membership-portal",
    title: "Digital Membership Portal — Dansk Industri (DI)",
    summary:
      "Self-service membership portal for Dansk Industri, replacing a manual phone-based signup process. Built end-to-end as my bachelor project.",
    problem:
      "Dansk Industri's membership signup was a manual, phone-based process — slow for applicants and time-consuming for staff.",
    solution:
      "A self-service portal with a dynamic wizard flow and automatic CVR lookup, plus a JWT-protected admin panel for case handling. Contract-first REST API and a full CI/CD pipeline with testing, vulnerability scanning and automated deploys.",
    outcome:
      "A production portal running live for Dansk Industri. I built the entire stack — frontend, backend, database and pipeline.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Flask (Python)",
      "PostgreSQL",
      "JWT",
      "GitHub Actions",
      "Docker",
      "Render",
    ],
    image: "/images/projects/di-portal.svg",
    links: [
      { label: "Live", url: "https://di-portal-frontend.onrender.com" },
      {
        label: "GitHub",
        url: "https://github.com/Gust0288/di-bachelor-project-f2026",
      },
    ],
    status: "live",
  },
  {
    slug: "ibdi-healthcare-app",
    title: "IBDI — Healthcare App (iOS & Android)",
    summary:
      "Published healthcare app for people with chronic bowel disease (IBD) — available in both the App Store and Google Play.",
    problem:
      "Patients with chronic bowel disease (IBD) lack a single place to log symptoms, medication and test results.",
    solution:
      "An app where users log symptoms and medication, spot flare-ups early, and share their data with their care team.",
    outcome:
      "Published in both the App Store and Google Play. Built at the startup Social Vibes, where I led frontend development and built the data flow between frontend and backend.",
    tech: ["Angular", "TypeScript", "Ionic", "SQL", "Neo4j"],
    image: "/images/projects/ibdi.svg",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/dk/app/ibdi/id6744438920",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=ibdi.app",
      },
    ],
    status: "live",
  },
  {
    slug: "car-rental",
    title: "Car Rental — Booking Platform",
    summary:
      "Fullstack car rental booking platform — a personal project currently in development.",
    problem:
      "A personal project to practice building a complete booking system with real-world concerns: availability, reservations and admin tooling.",
    solution:
      "A fullstack booking platform where users browse cars, create reservations and manage their bookings, while admins manage the fleet through an admin panel.",
    outcome:
      "In active development — the core booking flow and admin panel are being built out.",
    tech: ["React", "Chakra UI", "Express.js", "Node.js", "PostgreSQL"],
    image: "/images/projects/car-rental.svg",
    links: [
      { label: "GitHub", url: "https://github.com/Gust0288/car-rental-prj" },
    ],
    status: "in-development",
  },
];
