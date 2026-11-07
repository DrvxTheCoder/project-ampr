import Image from "next/image";
import Link from "next/link";

import { Carousel } from "@/components/shared/carousel";
import { ArrowBadge } from "@/components/shared/pill-link";
import { Container } from "@/components/shared/section";
import { home } from "@/content/accueil";

export function HomeHighlights() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container data-reveal="up">
        <Carousel label="Les atouts du service">
          {home.highlights.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl bg-muted text-white sm:w-[46%] lg:w-[31%]"
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 46vw, 78vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent" />
              <ArrowBadge className="absolute top-5 right-5 border-white/40 group-hover:bg-white group-hover:text-black" />
              <span className="absolute inset-x-6 bottom-6">
                <span className="block text-eyebrow text-[0.65rem] text-white/80">
                  {item.eyebrow}
                </span>
                <span className="mt-3 block text-display text-xl text-balance">{item.title}</span>
              </span>
            </Link>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
