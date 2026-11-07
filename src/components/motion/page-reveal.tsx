"use client";

import { useRef } from "react";

import { ease, gsap, prefersReducedMotion, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

const START = "top 90%";
/** Plafond de la cascade : après un saut de défilement, le lot peut être très long. */
const MAX_STAGGER = 0.4;
const CLEARED = "transform,opacity,visibility";

/**
 * Anime à l'entrée dans l'écran les éléments marqués par l'attribut data-reveal :
 * - "up" : fondu et légère montée ;
 * - "fade" : fondu seul, pour les cibles d'ancres dont la position doit rester exacte ;
 * - "title" : titre révélé ligne par ligne ;
 * - "image" : fondu, l'image contenue ([data-reveal-media]) se pose en se resserrant.
 *
 * Next.js masque les pages quittées sans les démonter : useGSAP annule alors tout,
 * puis rejoue les animations lorsque la page redevient visible.
 */
export function PageReveal({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      document.documentElement.toggleAttribute("data-motion-ready", true);
      if (prefersReducedMotion()) return;

      const select = (variant: string) =>
        gsap.utils.toArray<HTMLElement>(`[data-reveal="${variant}"]`);

      const batch = (
        targets: HTMLElement[],
        from: gsap.TweenVars,
        onEnter?: (elements: HTMLElement[]) => void,
      ) => {
        if (targets.length === 0) return;
        gsap.set(targets, { autoAlpha: 0, ...from });
        ScrollTrigger.batch(targets, {
          start: START,
          once: true,
          onEnter: (elements) => {
            gsap.to(elements, {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: ease.enter,
              stagger: Math.min(0.08, MAX_STAGGER / elements.length),
              clearProps: CLEARED,
            });
            onEnter?.(elements as HTMLElement[]);
          },
        });
      };

      batch(select("up"), { y: 26 });
      batch(select("fade"), {});

      const images = select("image");
      const mediaOf = (elements: HTMLElement[]) =>
        elements.flatMap((element) =>
          gsap.utils.toArray<HTMLElement>(element.querySelectorAll("[data-reveal-media]")),
        );
      if (images.length > 0) gsap.set(mediaOf(images), { scale: 1.08 });
      batch(images, {}, (elements) => {
        gsap.to(mediaOf(elements), {
          scale: 1,
          duration: 1.5,
          ease: ease.settle,
          clearProps: "transform",
        });
      });

      select("title").forEach((title) => {
        SplitText.create(title, {
          type: "lines",
          autoSplit: true,
          onSplit: (split) =>
            gsap.from(split.lines, {
              autoAlpha: 0,
              yPercent: 45,
              duration: 1,
              ease: ease.settle,
              stagger: 0.09,
              scrollTrigger: { trigger: title, start: START, once: true },
            }),
        });
      });
    },
    { scope },
  );

  return <div ref={scope}>{children}</div>;
}
