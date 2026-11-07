import { PageReveal } from "@/components/motion/page-reveal";
import { PillLink } from "@/components/shared/pill-link";
import { Section } from "@/components/shared/section";

export default function NotFound() {
  return (
    <PageReveal>
      <Section className="py-24 sm:py-32">
        <h1 data-reveal="title" className="text-display text-[clamp(2.25rem,5.4vw,4.5rem)]">
          Page introuvable
        </h1>
        <p data-reveal="up" className="mt-4 text-muted-foreground">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <PillLink href="/" data-reveal="up" className="mt-8">
          Retour à l&apos;accueil
        </PillLink>
      </Section>
    </PageReveal>
  );
}
