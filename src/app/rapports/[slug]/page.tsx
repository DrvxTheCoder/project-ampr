import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePage } from "@/components/shared/article-page";
import { getReport, reports } from "@/content/rapports";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return reports.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/rapports/[slug]">): Promise<Metadata> {
  const report = getReport((await params).slug);
  return report ? { title: report.title, description: report.summary } : {};
}

export default async function ReportPage({ params }: PageProps<"/rapports/[slug]">) {
  const report = getReport((await params).slug);
  if (!report) notFound();

  return (
    <ArticlePage
      article={report}
      eyebrow="Rapport"
      back={{ label: "Tous les rapports", href: "/rapports" }}
      meta={[formatDate(report.date), report.location]}
    />
  );
}
