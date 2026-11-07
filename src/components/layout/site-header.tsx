"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/content/site";
import { ease, gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from "@/lib/gsap";
import type { SearchEntry } from "@/lib/search";
import { cn } from "@/lib/utils";

import { Container } from "../shared/section";
import { Logo } from "./logo";
import { SiteSearch } from "./site-search";

/** Trait unique qui suit le lien survolé et revient se poser sur la page active. */
function useNavIndicator(pathname: string) {
  const list = useRef<HTMLUListElement>(null);
  const line = useRef<HTMLLIElement>(null);
  const shown = useRef(false);

  const moveTo = (link: HTMLElement | null) => {
    if (!link) {
      shown.current = false;
      gsap.to(line.current, { autoAlpha: 0, duration: 0.25, overwrite: true });
      return;
    }

    const box = { x: link.offsetLeft, width: link.offsetWidth };
    if (!shown.current || prefersReducedMotion()) {
      gsap.set(line.current, { ...box, overwrite: true });
      gsap.to(line.current, { autoAlpha: 1, duration: 0.25 });
      shown.current = true;
    } else {
      gsap.to(line.current, { ...box, autoAlpha: 1, duration: 0.5, ease: ease.settle, overwrite: true });
    }
  };
  const moveToActive = () =>
    moveTo(list.current?.querySelector<HTMLElement>('a[aria-current="page"]') ?? null);

  useEffect(moveToActive, [pathname]);

  useEffect(() => {
    const element = list.current;
    if (!element) return;

    const handlePointerOver = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLElement>("a");
      if (link) moveTo(link);
    };
    const sizeObserver = new ResizeObserver(moveToActive);

    element.addEventListener("pointerover", handlePointerOver);
    element.addEventListener("pointerleave", moveToActive);
    sizeObserver.observe(element);
    return () => {
      element.removeEventListener("pointerover", handlePointerOver);
      element.removeEventListener("pointerleave", moveToActive);
      sizeObserver.disconnect();
    };
  });

  return { list, line };
}

/** Liens du menu mobile : ils entrent en cascade à l'ouverture du panneau. */
function MobileNavList({ children }: { children: React.ReactNode }) {
  const list = useRef<HTMLUListElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from("li", {
        autoAlpha: 0,
        x: 18,
        duration: 0.6,
        ease: ease.enter,
        stagger: 0.05,
        delay: 0.08,
      });
    },
    { scope: list },
  );

  return (
    <ul ref={list} className="space-y-1">
      {children}
    </ul>
  );
}

export function SiteHeader({ searchIndex }: { searchIndex: SearchEntry[] }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const header = useRef<HTMLElement>(null);
  const { list, line } = useNavIndicator(pathname);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 12,
      end: Number.MAX_SAFE_INTEGER,
      onToggle: ({ isActive: scrolled }) =>
        header.current?.toggleAttribute("data-scrolled", scrolled),
    });
  });

  return (
    <header
      ref={header}
      className="sticky top-0 z-40 border-b border-transparent bg-background/85 backdrop-blur-md transition-colors duration-300 data-scrolled:border-border"
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul ref={list} className="relative flex items-center gap-9 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-sm py-2 text-muted-foreground transition-colors hover:text-foreground",
                    "aria-[current=page]:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li
              ref={line}
              aria-hidden
              className="pointer-events-none invisible absolute -bottom-2.5 left-0 h-0.5 bg-foreground"
            />
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <SiteSearch index={searchIndex} />
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-9 rounded-full lg:hidden"
                aria-label="Ouvrir le menu"
              >
                <Menu aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav aria-label="Navigation mobile" className="mt-10">
                <MobileNavList>
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className="block rounded-xl py-3 text-display text-2xl aria-[current=page]:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </MobileNavList>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
