"use client";

import { useEffect } from "react";

import { ease, gsap, prefersReducedMotion } from "@/lib/gsap";

const PRESSABLE = '[data-slot="button"], [data-press]';
const ARROW = "[data-arrow]";

/** Sens de sortie de chaque flèche : elle part d'un côté et revient de l'autre. */
const arrowPaths: Record<string, [number, number]> = {
  right: [1, 0],
  left: [-1, 0],
  down: [0, 1],
  "up-right": [1, -1],
};

function playArrow(badge: HTMLElement) {
  const icon = badge.querySelector("svg");
  const path = arrowPaths[badge.dataset.arrow ?? ""];
  if (!icon || !path || gsap.isTweening(icon)) return;

  const [x, y] = path.map((direction) => direction * 18);
  gsap
    .timeline()
    .to(icon, { x, y, opacity: 0, duration: 0.2, ease: ease.exit })
    .set(icon, { x: -x, y: -y })
    .to(icon, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: ease.enter,
      clearProps: "transform,opacity",
    });
}

/**
 * Micro-interactions déléguées à la fenêtre : boutons et flèches restent ainsi
 * des composants serveur, marqués par data-slot="button", data-press ou data-arrow.
 */
export function MicroInteractions() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let pressed: Element | null = null;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
      pressed = event.target.closest(PRESSABLE);
      if (pressed) gsap.to(pressed, { scale: 0.97, duration: 0.12, overwrite: "auto" });
    };

    const handlePointerUp = () => {
      if (!pressed) return;
      gsap.to(pressed, {
        scale: 1,
        duration: 0.45,
        ease: "back.out(2.5)",
        overwrite: "auto",
        clearProps: "transform",
      });
      pressed = null;
    };

    const handlePointerOver = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !(event.target instanceof Element)) return;

      const host = event.target.closest<HTMLElement>("a, button");
      if (!host || (event.relatedTarget instanceof Node && host.contains(event.relatedTarget))) {
        return;
      }
      if (host.matches(ARROW)) playArrow(host);
      host.querySelectorAll<HTMLElement>(ARROW).forEach(playArrow);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("pointerover", handlePointerOver);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("pointerover", handlePointerOver);
    };
  }, []);

  return null;
}
