import type { Metadata } from "next";

import { PageReveal } from "@/components/motion/page-reveal";
import { PresentationCommitments } from "@/components/sections/presentation/commitments";
import { PresentationExperience } from "@/components/sections/presentation/experience";
import { PresentationFaq } from "@/components/sections/presentation/faq";
import { PresentationJourney } from "@/components/sections/presentation/journey";
import { PresentationService } from "@/components/sections/presentation/service";
import { PageHero } from "@/components/shared/page-hero";
import { presentation } from "@/content/presentation";

export const metadata: Metadata = {
  title: "Présentation",
  description: presentation.hero.text,
};

export default function PresentationPage() {
  return (
    <PageReveal>
      <PageHero {...presentation.hero} />
      <PresentationService />
      <PresentationJourney />
      <PresentationExperience />
      <PresentationCommitments />
      <PresentationFaq />
    </PageReveal>
  );
}
