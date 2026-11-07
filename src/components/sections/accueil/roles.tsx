import { Carousel } from "@/components/shared/carousel";
import { ChamferImage } from "@/components/shared/chamfer-image";
import { PillLink } from "@/components/shared/pill-link";
import { Eyebrow, Section } from "@/components/shared/section";
import { home } from "@/content/accueil";
import { cn } from "@/lib/utils";

export function HomeRoles() {
  const { roles } = home;

  return (
    <Section>
      <Eyebrow data-reveal="up">{roles.eyebrow}</Eyebrow>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
        <h2 className="text-display text-[clamp(1.75rem,3.7vw,3.25rem)]">
          {roles.title.map((line) => (
            <span key={line} data-reveal="up" className="block">
              {line}
            </span>
          ))}
        </h2>
        <div data-reveal="up" className="max-w-sm">
          <p className="text-sm text-pretty text-muted-foreground">{roles.text}</p>
          <PillLink href={roles.action.href} className="mt-4">
            {roles.action.label}
          </PillLink>
        </div>
      </div>

      <div data-reveal="up" className="mt-10">
        <Carousel label="Les acteurs du service" className="items-start">
          {roles.items.map((person, index) => (
            <figure
              key={person.name}
              className={cn(
                "w-[72%] shrink-0 snap-start sm:w-[44%] lg:w-[31%]",
                index % 2 === 1 && "pt-12",
              )}
            >
              <ChamferImage
                image={person.image}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 44vw, 72vw"
                className="aspect-[9/10]"
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-6 bottom-6 pr-10 text-white">
                  <span className="block text-display text-lg">{person.name}</span>
                  <span className="mt-1 block text-sm text-white/80">{person.role}</span>
                </figcaption>
              </ChamferImage>
            </figure>
          ))}
        </Carousel>
      </div>
    </Section>
  );
}
