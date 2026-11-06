"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CarouselProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

/** Défilement horizontal à la main ou avec les boutons précédent et suivant. */
export function Carousel({ label, children, className }: CarouselProps) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const element = track.current;
    if (!element) return;
    element.scrollBy({ left: direction * element.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <div role="group" aria-roledescription="carrousel" aria-label={label}>
      <div
        ref={track}
        tabIndex={0}
        className={cn(
          "flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-scrollbar]:hidden",
          className,
        )}
      >
        {children}
      </div>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-8 rounded-full border border-border p-1">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Précédent"
            onClick={() => scroll(-1)}
          >
            <ArrowLeft aria-hidden />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Suivant"
            onClick={() => scroll(1)}
          >
            <ArrowRight aria-hidden />
          </Button>
        </div>
      </div>
    </div>
  );
}
