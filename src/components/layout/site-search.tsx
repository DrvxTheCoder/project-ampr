"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { normalize } from "@/lib/format";
import type { SearchEntry } from "@/lib/search";

export function SiteSearch({ index }: { index: SearchEntry[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const terms = normalize(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];
    return index
      .filter((item) => terms.every((term) => item.haystack.includes(term)))
      .slice(0, 8);
  }, [index, query]);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger className="flex h-9 items-center justify-between gap-6 rounded-full border border-border bg-background py-1 pr-1 pl-4 text-sm text-muted-foreground outline-none transition-colors hover:border-foreground/40 focus-visible:ring-3 focus-visible:ring-ring/50 max-lg:size-9 max-lg:justify-center max-lg:p-0">
        <span className="max-lg:sr-only">Rechercher</span>
        <span className="grid size-7 place-items-center rounded-full text-foreground lg:border lg:border-border">
          <Search className="size-3.5" aria-hidden />
        </span>
      </DialogTrigger>
      <DialogContent className="top-[18%] translate-y-0 gap-3 rounded-3xl p-4 sm:max-w-xl">
        <DialogTitle className="sr-only">Rechercher sur le site</DialogTitle>
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Rapport, procédure, photo…"
          aria-label="Rechercher"
          className="h-11 rounded-full px-4 pr-12"
        />
        {query.trim() !== "" && (
          <ul className="max-h-80 overflow-y-auto">
            {results.map((result) => (
              <li key={`${result.href}-${result.title}`}>
                <Link
                  href={result.href}
                  onClick={() => handleOpenChange(false)}
                  className="flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
                >
                  <span>
                    <span className="block text-sm font-medium">{result.title}</span>
                    <span className="block text-xs text-muted-foreground">{result.rubric}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                </Link>
              </li>
            ))}
            {results.length === 0 && (
              <li className="px-3 py-4 text-sm text-muted-foreground">
                Aucun résultat pour « {query.trim()} ».
              </li>
            )}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  );
}
