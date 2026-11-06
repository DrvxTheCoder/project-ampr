import { DocumentCard } from "@/components/shared/document-card";
import { PillLink } from "@/components/shared/pill-link";
import { Section } from "@/components/shared/section";
import { documents } from "@/content/documentation";

export function HomePublications() {
  return (
    <Section>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-display text-[clamp(1.75rem,3.7vw,3.25rem)]">Documentation</h2>
        <PillLink href="/documentation">Toute la documentation</PillLink>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {documents.slice(0, 3).map((document) => (
          <DocumentCard key={document.slug} document={document} />
        ))}
      </div>
    </Section>
  );
}
