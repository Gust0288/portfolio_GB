"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { z } from "zod";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid e-mail address."),
  message: z.string().min(10, "Please write a short message (at least 10 characters)."),
});

type ContactFields = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactFields, string>>;

export function ContactSection() {
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as ContactFields;
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFields;
        fieldErrors[field] ??= issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const { name, email, message } = result.data;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-16 sm:py-24">
      <Reveal>
        <h2
          id="contact-heading"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Contact
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Want to talk about a role or a project? Write me a message or reach me
          directly. I usually reply within a day.
        </p>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <p id="contact-name-error" className="text-sm text-destructive">
                {errors.name}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">E-mail</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && (
              <p id="contact-email-error" className="text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              name="message"
              rows={5}
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
            />
            {errors.message && (
              <p id="contact-message-error" className="text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>
            <Button type="submit">Send message</Button>
            <p className="text-xs text-muted-foreground">
              Opens your e-mail client with the message prefilled.
            </p>
          </form>
        </Reveal>
        <Reveal delay={0.1} className="space-y-3">
          <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
            Direct
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-foreground underline-offset-4 hover:underline"
              >
                <Mail className="size-4" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground underline-offset-4 hover:underline"
              >
                <GitHubIcon className="size-4" />
                github.com/Gust0288
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground underline-offset-4 hover:underline"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
