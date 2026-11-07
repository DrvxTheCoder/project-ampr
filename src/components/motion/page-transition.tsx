"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import { ease, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/** Délai au-delà duquel la page courante réapparaît si la navigation n'aboutit pas. */
const NAVIGATION_TIMEOUT = 3000;

/** Renvoie la destination d'un clic s'il mène vers une autre page du site. */
function getInternalHref(event: MouseEvent) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return null;
  }
  if (!(event.target instanceof Element)) return null;

  const link = event.target.closest<HTMLAnchorElement>("a[href]");
  if (!link || link.hasAttribute("download")) return null;
  if (link.target && link.target !== "_self") return null;

  const url = new URL(link.href);
  const isFile = /\.[a-z0-9]+$/i.test(url.pathname);
  if (url.origin !== window.location.origin || isFile) return null;
  if (url.pathname === window.location.pathname) return null;

  return url.pathname + url.search + url.hash;
}

/**
 * Fondu entre les pages, sous l'en-tête qui reste en place.
 * Les clics sont interceptés ici pour que tous les liens du site en profitent :
 * la page s'efface, puis la navigation part. Les retours arrière n'ont que l'entrée.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const shell = useRef<HTMLDivElement>(null);
  const shownPathname = useRef(pathname);
  const pendingHref = useRef<string | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useGSAP(
    () => {
      if (shownPathname.current === pathname) return;
      shownPathname.current = pathname;
      pendingHref.current = null;
      clearTimeout(timeout.current);

      if (prefersReducedMotion()) return;
      gsap.fromTo(
        shell.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.45, ease: "power1.out", overwrite: true, clearProps: "opacity" },
      );
    },
    { dependencies: [pathname] },
  );

  useEffect(() => {
    const restore = () => {
      pendingHref.current = null;
      gsap.to(shell.current, { opacity: 1, duration: 0.3, overwrite: true, clearProps: "opacity" });
    };

    const handleClick = (event: MouseEvent) => {
      const href = getInternalHref(event);
      if (!href || prefersReducedMotion()) return;

      // Empêche next/link de naviguer : router.push prend le relais après le fondu.
      event.preventDefault();
      const alreadyLeaving = pendingHref.current !== null;
      pendingHref.current = href;
      if (alreadyLeaving) return;

      gsap.to(shell.current, {
        opacity: 0,
        duration: 0.22,
        ease: ease.exit,
        overwrite: true,
        onComplete: () => {
          if (pendingHref.current) router.push(pendingHref.current);
          timeout.current = setTimeout(restore, NAVIGATION_TIMEOUT);
        },
      });
    };

    window.addEventListener("click", handleClick, true);
    return () => {
      window.removeEventListener("click", handleClick, true);
      clearTimeout(timeout.current);
    };
  }, [router]);

  return (
    <div ref={shell} className="flex flex-1 flex-col">
      {children}
    </div>
  );
}
