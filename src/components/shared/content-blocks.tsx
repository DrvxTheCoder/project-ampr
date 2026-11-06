import Image from "next/image";

import type { ContentBlock } from "@/content/types";
import { cn } from "@/lib/utils";

/** Affiche les briques de contenu d'un rapport ou d'une documentation. */
export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="leading-relaxed text-pretty">{block.text}</p>;

    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed">
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="space-y-3">
          {block.items.map((item, index) => (
            <li key={item} className="flex gap-4 leading-relaxed">
              <span
                aria-hidden
                className="grid size-7 shrink-0 place-items-center rounded-full bg-panel text-xs font-medium text-panel-foreground tabular-nums"
              >
                {index + 1}
              </span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      );

    case "callout":
      return (
        <aside
          className={cn(
            "rounded-2xl p-5 leading-relaxed",
            block.tone === "warning"
              ? "border border-signal/30 bg-signal/5"
              : "bg-panel/35",
          )}
        >
          {block.title && (
            <p className={cn("font-medium", block.tone === "warning" && "text-signal")}>
              {block.title}
            </p>
          )}
          <p className={block.title ? "mt-1" : undefined}>{block.text}</p>
        </aside>
      );

    case "figures":
      return (
        <dl className="grid gap-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item.label} className="rounded-2xl bg-muted p-5">
              <dd className="text-display text-3xl normal-case">{item.value}</dd>
              <dt className="mt-2 text-sm text-muted-foreground">{item.label}</dt>
            </div>
          ))}
        </dl>
      );

    case "image":
      return (
        <figure>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
            <Image
              src={block.image.src}
              alt={block.image.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-sm text-muted-foreground">{block.caption}</figcaption>
          )}
        </figure>
      );
  }
}
