import type { ActionLink, ImageAsset } from "@/content/types";

import { ChamferImage } from "./chamfer-image";
import { PillLink } from "./pill-link";
import { Eyebrow, Section } from "./section";

type FeatureImageSectionProps = {
  eyebrow: string;
  firstLine: string;
  secondLine: string;
  action: ActionLink;
  text: string;
  image: ImageAsset;
  /** "start" : texte à droite de la première ligne ; "end" : texte à gauche de la seconde. */
  layout: "start" | "end";
};

/** Titre sur deux lignes décalées, action en ligne, puis grande image biseautée. */
export function FeatureImageSection({
  eyebrow,
  firstLine,
  secondLine,
  action,
  text,
  image,
  layout,
}: FeatureImageSectionProps) {
  const title = "text-display text-[clamp(1.75rem,3.7vw,3.25rem)] text-balance";
  const note = "max-w-60 text-sm text-pretty text-muted-foreground";
  const button = (
    <PillLink href={action.href} data-reveal="up">
      {action.label}
    </PillLink>
  );

  return (
    <Section>
      <Eyebrow data-reveal="up">{eyebrow}</Eyebrow>
      <h2 className="sr-only">
        {firstLine} {secondLine}
      </h2>
      <div className="mt-6 space-y-4">
        {layout === "start" ? (
          <>
            <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
              <p aria-hidden data-reveal="up" className={title}>{firstLine}</p>
              <p data-reveal="up" className={note}>{text}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {button}
              <p aria-hidden data-reveal="up" className={title}>{secondLine}</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <p aria-hidden data-reveal="up" className={title}>{firstLine}</p>
              {button}
            </div>
            <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
              <p data-reveal="up" className={note}>{text}</p>
              <p aria-hidden data-reveal="up" className={title}>{secondLine}</p>
            </div>
          </>
        )}
      </div>
      <ChamferImage
        image={image}
        sizes="(min-width: 1320px) 1224px, 100vw"
        className="mt-10 aspect-[4/3] sm:aspect-[16/8]"
      />
    </Section>
  );
}
