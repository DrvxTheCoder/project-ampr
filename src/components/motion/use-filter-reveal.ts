"use client";

import { useRef } from "react";

import { ease, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/** Fait réapparaître les enfants d'une grille chaque fois que le filtre change. */
export function useFilterReveal<T extends HTMLElement>(filter: string) {
  const grid = useRef<T>(null);
  const shownFilter = useRef(filter);

  useGSAP(
    () => {
      if (shownFilter.current === filter) return;
      shownFilter.current = filter;

      if (!grid.current || prefersReducedMotion()) return;
      gsap.fromTo(
        grid.current.children,
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: ease.enter,
          stagger: 0.04,
          overwrite: true,
          clearProps: "transform,opacity,visibility",
        },
      );
    },
    { dependencies: [filter] },
  );

  return grid;
}
