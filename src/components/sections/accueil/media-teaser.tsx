import Image from "next/image";

import { PillLink } from "@/components/shared/pill-link";
import { Section } from "@/components/shared/section";
import { mediaItems } from "@/content/medias";

export function HomeMediaTeaser() {
  return (
    <Section>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 data-reveal="title" className="text-display text-[clamp(1.75rem,3.7vw,3.25rem)]">
          Images & vidéos
        </h2>
        <PillLink href="/medias" data-reveal="up">
          Voir la galerie
        </PillLink>
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {mediaItems.slice(0, 4).map((item) => (
          <li
            key={item.id}
            data-reveal="up"
            className="relative aspect-square overflow-hidden rounded-2xl bg-muted"
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
