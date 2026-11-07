import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

/** Courbes communes : le site garde ainsi un seul rythme d'animation. */
export const ease = {
  enter: "power3.out",
  settle: "expo.out",
  exit: "power2.in",
};

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
