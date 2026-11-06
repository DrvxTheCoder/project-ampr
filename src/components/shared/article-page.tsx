import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

import type { Article } from "@/content/types";

import { ChamferImage } from "./chamfer-image";
import { ContentBlocks } from "./content-blocks";
import { PillLink } from "./pill-link";
import { Container, Eyebrow } from "./section";

type ArticlePageProps = {
  article: Article;
  eyebrow: string;
  /** Lien de retour vers la rubrique. */
  back: { label: string; href: string };
  /** Informations affichées sous le résumé, comme la date ou le lieu. */
  meta?: string[];
};

/** Mise en page commune aux rapports et aux documents. */
export function ArticlePage({ article, eyebrow, back, meta }: ArticlePageProps) {
  return (
    <article className="pt-8 pb-16 sm:pt-12">
      <Container>
        <Link
          href={back.href}
          className="inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {back.label}
        </Link>

        <header className="mt-8 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 text-display text-[clamp(2rem,4.6vw,3.75rem)] text-balance">
              {article.title}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-muted-foreground sm:text-lg">
              {article.summary}
            </p>
            {meta && meta.length > 0 && (
              <p className="mt-4 text-sm text-muted-foreground">{meta.join(" · ")}</p>
            )}
            {article.file && (
              <PillLink href={article.file} download icon={Download} className="mt-6">
                Télécharger le PDF
              </PillLink>
            )}
          </div>
          <ChamferImage
            image={article.cover}
            sizes="(min-width: 1024px) 40vw, 100vw"
            preload
            className="aspect-[16/10] lg:col-span-5"
          />
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <nav aria-label="Sommaire" className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-medium">Sommaire</p>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="transition-colors hover:text-foreground">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="space-y-14 lg:col-span-8 lg:col-start-5">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="text-display text-2xl sm:text-3xl">{section.title}</h2>
                {section.intro && <p className="mt-4 text-muted-foreground">{section.intro}</p>}
                {section.blocks && (
                  <div className="mt-6">
                    <ContentBlocks blocks={section.blocks} />
                  </div>
                )}
                {section.subsections?.map((subsection) => (
                  <div key={subsection.title} className="mt-8">
                    <h3 className="mb-4 text-lg font-medium">{subsection.title}</h3>
                    <ContentBlocks blocks={subsection.blocks} />
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
