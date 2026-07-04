import { HeroSection } from "@/components/hero-section";
import { ProjectSection } from "@/components/project-section";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24">
      <HeroSection />
      <ProjectSection />
    </main>
  );
}
