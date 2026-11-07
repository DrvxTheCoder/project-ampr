import Image from "next/image";
import Link from "next/link";

import type { DocumentEntry } from "@/content/types";

import { ArrowBadge } from "./pill-link";

/** Carte de document : couverture titrée, nom et action de consultation. */
export function DocumentCard({
  document,
  ...props
}: { document: DocumentEntry } & Omit<React.ComponentProps<typeof Link>, "href">) {
  return (
    <Link href={`/documentation/${document.slug}`} className="group block rounded-3xl" {...props}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
        <Image
          src={document.cover.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
        <p className="absolute inset-x-6 bottom-6 text-display text-2xl text-balance text-white">
          {document.title}
        </p>
      </div>
      <p className="mt-4 text-sm font-medium">{document.category}</p>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{document.summary}</p>
      <div className="mt-4 flex h-11 items-center justify-between rounded-full border border-border pr-1 pl-5 text-sm">
        Consulter
        <ArrowBadge className="border-border" />
      </div>
    </Link>
  );
}
