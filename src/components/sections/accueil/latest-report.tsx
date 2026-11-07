import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/shared/section";
import { reports } from "@/content/rapports";
import { formatDate } from "@/lib/format";

export function HomeLatestReport() {
  const [latest] = reports;
  if (!latest) return null;

  return (
    <Section>
      <div className="grid gap-8 md:grid-cols-12">
        <div data-reveal="up" className="md:col-span-5">
          <h2 className="text-display text-xl">Rapport</h2>
          <Link
            href="/rapports"
            className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Voir tous les rapports
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <Link
          href={`/rapports/${latest.slug}`}
          data-reveal="up"
          className="group rounded-sm md:col-span-7"
        >
          <time dateTime={latest.date} className="text-sm text-muted-foreground">
            {formatDate(latest.date)}
          </time>
          <p className="mt-3 text-display text-[clamp(1.25rem,2.4vw,1.875rem)] text-balance underline-offset-4 group-hover:underline">
            {latest.title}
          </p>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">{latest.summary}</p>
        </Link>
      </div>
    </Section>
  );
}
