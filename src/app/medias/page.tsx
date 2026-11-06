import type { Metadata } from "next";

import { MediaGallery } from "@/components/sections/media-gallery";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { mediaItems } from "@/content/medias";
import { pageIntros } from "@/content/pages";

export const metadata: Metadata = {
  title: "Images & vidéos",
  description: pageIntros.media.text,
};

export default function MediaPage() {
  return (
    <>
      <PageHero {...pageIntros.media} />
      <Section>
        <h2 className="sr-only">Galerie</h2>
        <MediaGallery items={mediaItems} />
      </Section>
    </>
  );
}
