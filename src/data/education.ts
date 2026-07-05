// src/data/education.ts
export type Education = {
  slug: string;
  degree: string;
  school: string;
  period: string;
  summary: string; // 1 linje til lister
  description: string; // udførlig beskrivelse til popover
  topics: string[];
};

export const educations: Education[] = [
  {
    slug: "web-development-pba",
    degree: "Web Development (PBA)",
    school: "EK, Copenhagen School of Design and Technology",
    period: "Completed June 2026",
    summary: "Professional bachelor top-up in fullstack web development.",
    description:
      "A professional bachelor top-up degree focused on fullstack web development. The programme covers backend development with databases and API design, advanced frontend, web security, testing and deployment, and modern development environments. It is heavily project-based: semesters are built around group projects and real clients, and it ended with my bachelor project, a production membership portal built for Dansk Industri. The programme includes a five-month internship, which I spent at Awork A/S working on a case management system for a Danish public authority.",
    topics: [
      "Fullstack development",
      "Databases & API design",
      "Web security",
      "Testing & deployment",
      "Agile teamwork",
      "Internship at Awork A/S",
    ],
  },
  {
    slug: "multimedia-design-ap",
    degree: "Multimedia Design (AP)",
    school: "EK, Copenhagen School of Design and Technology",
    period: "Completed 2024",
    summary: "Two-year AP degree in design and frontend development.",
    description:
      "A two-year academy profession degree at the intersection of design and technology. This is where I learned the frontend fundamentals: semantic HTML, CSS and JavaScript, plus UX/UI methods like user research, wireframing, prototyping and usability testing. The programme also covered digital concept development, visual identity and content production, practiced through group projects for real companies. It gave me the design eye I still lean on as a developer, and included an internship at Social Vibes, where I later continued as a junior developer.",
    topics: [
      "HTML, CSS & JavaScript",
      "UX/UI & prototyping",
      "User research & testing",
      "Digital concept development",
      "Internship at Social Vibes",
    ],
  },
];
