import { PageReveal } from "@/components/motion/page-reveal";
import { HomeAbout } from "@/components/sections/accueil/about";
import { HomeHero } from "@/components/sections/accueil/hero";
import { HomeHighlights } from "@/components/sections/accueil/highlights";
import { HomeLatestReport } from "@/components/sections/accueil/latest-report";
import { HomeMediaTeaser } from "@/components/sections/accueil/media-teaser";
import { HomePublications } from "@/components/sections/accueil/publications";
import { HomeRoles } from "@/components/sections/accueil/roles";
import { HomeVision } from "@/components/sections/accueil/vision";
import { FeatureImageSection } from "@/components/shared/feature-image-section";
import { home } from "@/content/accueil";

/** Pour réorganiser l'accueil, déplacez simplement les sections ci-dessous. */
export default function HomePage() {
  return (
    <PageReveal>
      <HomeHero />
      <HomeAbout />
      <FeatureImageSection {...home.mission} layout="start" />
      <HomeVision />
      <HomeHighlights />
      <FeatureImageSection {...home.story} layout="end" />
      <HomeRoles />
      <HomeLatestReport />
      <HomePublications />
      <HomeMediaTeaser />
    </PageReveal>
  );
}
