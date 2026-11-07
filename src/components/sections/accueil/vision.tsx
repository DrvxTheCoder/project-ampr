import { Eyebrow, Section } from "@/components/shared/section";
import { home } from "@/content/accueil";
import { cn } from "@/lib/utils";

/** Décalage de chaque ligne, repris en boucle si la citation en compte plus. */
const offsets = ["lg:ml-[8%]", "", "lg:ml-[14%]", "lg:ml-[2%]"];

export function HomeVision() {
  const { vision } = home;

  return (
    <Section>
      <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-3">
        <Eyebrow data-reveal="up">{vision.eyebrow}</Eyebrow>
        <p data-reveal="up" className="max-w-md text-sm text-pretty text-muted-foreground">
          {vision.text}
        </p>
      </div>
      <p className="mt-10 text-display text-[clamp(1.5rem,3.5vw,3rem)]">
        {vision.lines.map((line, index) => (
          <span
            key={line}
            data-reveal="up"
            className={cn(
              "lg:block",
              offsets[index % offsets.length],
              index % 2 === 1 && "text-muted-foreground/70",
            )}
          >
            {line}{" "}
          </span>
        ))}
      </p>
    </Section>
  );
}
