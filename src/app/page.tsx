import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectSection } from "@/components/project-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24">
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
