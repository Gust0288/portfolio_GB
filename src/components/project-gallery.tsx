"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ProjectGalleryProps = {
  title: string;
  images: string[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <Dialog onOpenChange={(open) => open && setIndex(0)}>
      <DialogTrigger
        aria-label={`Open image gallery for ${title}`}
        className="group/gallery relative block aspect-video w-full cursor-zoom-in overflow-hidden outline-none focus-visible:ring-3 focus-visible:ring-ring/50 bg-muted"
      >
        <Image
          src={images[0]}
          alt={`Screenshot of ${title}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain transition-transform duration-500 ease-out group-hover/gallery:scale-[1.04]"
        />
        <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover/gallery:opacity-100 group-focus-visible/gallery:opacity-100">
          <ZoomIn className="size-3.5" aria-hidden="true" />
          {count > 1 ? `View gallery (${count})` : "View image"}
        </span>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-4xl"
        onKeyDown={(event) => {
          if (count < 2) return;
          if (event.key === "ArrowLeft") prev();
          if (event.key === "ArrowRight") next();
        }}
      >
        <DialogTitle className="pr-8">{title}</DialogTitle>
        <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
          <Image
            key={images[index]}
            src={images[index]}
            alt={`Screenshot ${index + 1} of ${count}  ${title}`}
            fill
            sizes="(min-width: 640px) 56rem, 100vw"
            className="object-contain"
          />
        </div>
        {count > 1 && (
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon-sm"
              onClick={prev}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </Button>
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {index + 1} / {count}
            </p>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={next}
              aria-label="Next image"
            >
              <ChevronRight />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
