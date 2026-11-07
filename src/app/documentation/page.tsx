import type { Metadata } from "next";

import { PageReveal } from "@/components/motion/page-reveal";
import { DocumentationBrowser } from "@/components/sections/documentation-browser";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { documents } from "@/content/documentation";
import { pageIntros } from "@/content/pages";

export const metadata: Metadata = {
  title: "Documentation",
  description: pageIntros.documentation.text,
};

export default function DocumentationPage() {
  return (
    <PageReveal>
      <PageHero {...pageIntros.documentation} />
      <Section>
        <h2 className="sr-only">Tous les documents</h2>
        <DocumentationBrowser documents={documents} />
      </Section>
    </PageReveal>
  );
}
