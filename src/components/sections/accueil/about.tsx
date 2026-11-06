import Image from "next/image";
import Link from "next/link";

import { ArrowBadge } from "@/components/shared/pill-link";
import { Container } from "@/components/shared/section";
import { home } from "@/content/accueil";

export function HomeAbout() {
  const { about } = home;

  return (
    <section id="le-service" className="scroll-mt-24 py-8">
      <Container>
        <div className="grid overflow-hidden rounded-3xl md:grid-cols-2">
          <div className="relative min-h-80 bg-muted">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent to-55%" />
            <dl className="absolute inset-x-6 bottom-6 grid grid-cols-3 items-start gap-4 text-white">
              {about.figures.map((figure) => (
                <div key={figure.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-xs text-white/80">{figure.label}</dt>
                  <dd className="text-xl font-medium sm:text-2xl">{figure.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-panel p-6 text-panel-foreground sm:p-10">
            <h2 className="text-display text-xl">{about.title}</h2>
            <ul className="mt-6">
              {about.links.map((link) => (
                <li key={link.href} className="border-t border-panel-foreground/15 first:border-t-0">
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-4 rounded-sm py-5"
                  >
                    {link.label}
                    <ArrowBadge />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
