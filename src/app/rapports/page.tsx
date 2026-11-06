import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/shared/page-hero";
import { ArrowBadge } from "@/components/shared/pill-link";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { pageIntros } from "@/content/pages";
import { reports } from "@/content/rapports";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Rapport",
  description: pageIntros.reports.text,
};

export default function ReportsPage() {
  return (
    <>
      <PageHero {...pageIntros.reports} />
      <Section>
        <h2 className="sr-only">Tous les rapports</h2>
        <ul className="border-b border-border">
          {reports.map((report) => (
            <li key={report.slug} className="border-t border-border">
              <Link
                href={`/rapports/${report.slug}`}
                className="group grid items-center gap-4 rounded-sm py-7 md:grid-cols-12"
              >
                <time dateTime={report.date} className="text-sm text-muted-foreground md:col-span-3">
                  {formatDate(report.date)}
                </time>
                <span className="md:col-span-8">
                  <span className="block text-display text-xl text-balance sm:text-2xl">
                    {report.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm text-muted-foreground">
                    {report.summary}
                  </span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    {report.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </span>
                </span>
                <ArrowBadge className="hidden justify-self-end md:col-span-1 md:grid" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
