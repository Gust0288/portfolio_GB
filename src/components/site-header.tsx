import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {site.name}
        </a>
        <nav aria-label="Main">
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  nativeButton={false}
                  render={<a href={link.href} />}
                >
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            nativeButton={false}
            render={
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              />
            }
          >
            <GitHubIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            nativeButton={false}
            render={
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              />
            }
          >
            <LinkedInIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            nativeButton={false}
            render={<a href={`mailto:${site.email}`} aria-label="E-mail" />}
          >
            <Mail />
          </Button>
        </div>
      </div>
    </header>
  );
}
