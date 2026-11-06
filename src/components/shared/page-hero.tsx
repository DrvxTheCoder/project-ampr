import type { ImageAsset } from "@/content/types";

import { ChamferImage } from "./chamfer-image";
import { Container, Eyebrow } from "./section";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: ImageAsset;
};

/** En-tête commun aux pages de rubrique. */
export function PageHero({ eyebrow, title, text, image }: PageHeroProps) {
  return (
    <section className="pt-10 pb-6 sm:pt-14">
      <Container className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-display text-[clamp(2.25rem,5.4vw,4.5rem)] text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-muted-foreground sm:text-lg">{text}</p>
        </div>
        <ChamferImage
          image={image}
          sizes="(min-width: 1024px) 40vw, 100vw"
          preload
          className="aspect-[16/10] lg:col-span-5"
        />
      </Container>
    </section>
  );
}
