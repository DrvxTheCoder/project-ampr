import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/shared/article-page";
import { documents, getDocument } from "@/content/documentation";

export function generateStaticParams() {
  return documents.map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/documentation/[slug]">): Promise<Metadata> {
  const document = getDocument((await params).slug);
  return document ? { title: document.title, description: document.summary } : {};
}

export default async function DocumentPage({ params }: PageProps<"/documentation/[slug]">) {
  const document = getDocument((await params).slug);
  if (!document) notFound();

  return (
    <ArticlePage
      article={document}
      eyebrow={document.category}
      back={{ label: "Toute la documentation", href: "/documentation" }}
    />
  );
}
