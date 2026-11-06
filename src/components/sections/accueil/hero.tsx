import Image from "next/image";
import { ArrowDown } from "lucide-react";

import { ChamferImage } from "@/components/shared/chamfer-image";
import { PillLink } from "@/components/shared/pill-link";
import { Container } from "@/components/shared/section";
import { home } from "@/content/accueil";

export function HomeHero() {
  const { hero } = home;

  return (
    <section className="pt-8 pb-10 sm:pt-12">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h1 className="text-display text-[clamp(2.4rem,5.5vw,4.75rem)]">
            <span className="flex items-center gap-[0.25em]">
              <span className="relative inline-block h-[0.82em] w-[2.1em] shrink-0 overflow-hidden rounded-full">
                <Image
                  src={hero.pillImage.src}
                  alt={hero.pillImage.alt}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </span>
              {hero.titleFirstLine}
              <span className="ml-3 hidden max-w-44 text-xs leading-snug font-normal tracking-normal text-muted-foreground normal-case [font-family:var(--font-body)] [font-stretch:100%] xl:block">
                {hero.note}
              </span>
            </span>
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block">{hero.titleLastLine}</span>
          </h1>
          <PillLink href={hero.action.href} className="mt-8">
            {hero.action.label}
          </PillLink>
        </div>

        <div className="flex items-end gap-4 lg:col-span-5">
          <ChamferImage
            image={hero.image}
            sizes="(min-width: 1024px) 38vw, 100vw"
            preload
            className="aspect-[5/4] flex-1"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 pr-10 text-white sm:inset-x-8 sm:bottom-8">
              <p className="text-lg font-medium">{hero.imageTitle}</p>
              <p className="mt-1 text-sm text-white/80">{hero.imageText}</p>
            </div>
          </ChamferImage>
          <a
            href="#le-service"
            aria-label="Faire défiler vers le service"
            className="hidden size-10 shrink-0 place-items-center rounded-full border border-border transition-colors hover:bg-muted xl:grid"
          >
            <ArrowDown className="size-4" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
