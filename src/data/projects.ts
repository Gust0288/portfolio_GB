// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  shortTitle?: string; // kort navn til popovers/links, falder tilbage til title
  summary: string; // 1-2 linjer til kortet
  problem?: string; // udelades for teaser-projekter der ikke er startet endnu
  solution?: string;
  outcome?: string;
  tech: string[];
  images: string[]; // screenshots, første billede er cover, resten vises i galleriet
  links: { label: string; url: string }[];
  status?: "live" | "in-development";
};

export const projects: Project[] = [
  {
    slug: "di-membership-portal",
    title: "Bachelor Project: Digital Membership Portal for Dansk Industri (DI)",
    shortTitle: "DI Membership Portal",
    summary:
      "My final bachelor project (PBA Web Development, KEA, June 2026). A self-service membership portal for Dansk Industri, replacing a manual phone-based signup process, built end-to-end and running in production.",
    problem:
      "Dansk Industri's membership signup was a manual, phone-based process that was slow for applicants and time-consuming for staff.",
    solution:
      "A self-service portal with a 10-step wizard flow and automatic CVR lookup on the applicant side. On the staff side, a separate JWT-protected admin panel gives case handlers four views: an overview, a queue of pending applications, active registration sessions and a full activity log, plus an approve/reject workflow with free-text notes and automatic e-mail notifications to the applicant. Contract-first REST API and a full CI/CD pipeline with testing, vulnerability scanning and automated deploys.",
    outcome:
      "Delivered as my final bachelor project and running live in production for Dansk Industri. I designed and built the entire stack from scratch: frontend, backend, database and CI/CD pipeline.",
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
    images: [
      "/images/projects/di/di-1.png",
      "/images/projects/di/di-2.png",
      "/images/projects/di/di-3.png",
      "/images/projects/di/di-4.png",
      "/images/projects/di/di-5.png",
    ],
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
    title: "IBDI, Healthcare App (iOS & Android)",
    shortTitle: "IBDI",
    summary:
      "Published healthcare app for people with chronic bowel disease (IBD), available in both the App Store and Google Play.",
    problem:
      "Patients with chronic bowel disease (IBD) lack a single place to log symptoms, medication and test results.",
    solution:
      "An app where users log symptoms and medication, spot flare-ups early, and share their data with their care team.",
    outcome:
      "Published in both the App Store and Google Play. Built at the startup Social Vibes, where I led frontend development and built the data flow between frontend and backend.",
    tech: ["Angular", "TypeScript", "Ionic", "SQL", "Neo4j"],
    images: [
      "/images/projects/ibdi/ibdi-1.png",
      "/images/projects/ibdi/ibdi-2.png",
      "/images/projects/ibdi/ibdi-3.png",
    ],
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
    title: "Car Rental, Booking Platform",
    shortTitle: "Car Rental",
    summary:
      "Fullstack car rental booking platform, a personal project currently in development.",
    problem:
      "A personal project to practice building a complete booking system with real-world concerns: availability, reservations and admin tooling.",
    solution:
      "A fullstack booking platform where users browse cars, create reservations and manage their bookings, while admins manage the fleet through an admin panel.",
    outcome:
      "In active development. The core booking flow and admin panel are being built out.",
    tech: ["React", "Chakra UI", "Express.js", "Node.js", "PostgreSQL"],
    images: [
      "/images/projects/car-rental/car-rental-1.png",
      "/images/projects/car-rental/car-rental-2.png",
      "/images/projects/car-rental/car-rental-3.png",
      "/images/projects/car-rental/car-rental-4.png",
      "/images/projects/car-rental/car-rental-5.png",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Gust0288/car-rental-prj" },
    ],
    status: "in-development",
  },
  {
    slug: "jarvis-assistant",
    title: "JARVIS, Local-First Desktop AI Assistant",
    shortTitle: "JARVIS",
    summary:
      "Voice-controlled desktop AI assistant for macOS with a holographic-style UI. Runs on local models via Ollama. Personal project.",
    problem:
      "Cloud AI assistants send everything you say to third parties and can't act on your machine, so your calendar, notes and apps are out of reach.",
    solution:
      "An Electron + React desktop app backed by a local Node.js tool server. Local Ollama models with streaming responses and a memory system that extracts and recalls facts across sessions. Whisper push-to-talk voice input, text-to-speech with an amplitude-reactive reactor animation, a Spotlight-style ⌥Space quick-ask overlay, and macOS integrations (Calendar, Notes, app launching, weather, web search). Every write action requires confirmation first.",
    outcome:
      "In active development and running as a daily assistant on my own machine. Everything privacy-sensitive stays local.",
    tech: [
      "React",
      "Vite",
      "Electron",
      "Node.js",
      "Ollama",
      "Whisper",
      "Web Audio API",
    ],
    images: [
      "/images/projects/jarvis/jarvis-1.png",
      "/images/projects/jarvis/jarvis-2.png",
      "/images/projects/jarvis/jarvis-3.png",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Gust0288/Jarvis" }],
    status: "in-development",
  },
  {
    slug: "personal-finance-api",
    title: "Personal Finance API (.NET)",
    shortTitle: "Finance API",
    summary:
      "An ASP.NET Core API for tracking spending, budgets and recurring expenses. My first .NET project, in the earliest stage.",
    problem:
      "I want my budgets and recurring expenses to live somewhere better than a spreadsheet, and I want a meaty, real domain to learn the .NET stack properly.",
    solution:
      "The plan: a REST API built with ASP.NET Core and EF Core on PostgreSQL. Accounts, categories, budgets and recurring expenses, JWT auth, and tests and CI from the first commit.",
    tech: ["C#", ".NET", "ASP.NET Core", "EF Core", "PostgreSQL"],
    images: ["/images/projects/finance-api.svg"],
    links: [],
    status: "in-development",
  },
  {
    slug: "csharp-project",
    title: "Untitled C# Project",
    shortTitle: "C# Project",
    summary:
      "A C#-focused project I'm working on. Not ready to show yet, but the reveal is coming.",
    tech: ["C#", ".NET"],
    images: ["/images/projects/csharp-teaser.svg"],
    links: [],
    status: "in-development",
  },
];
