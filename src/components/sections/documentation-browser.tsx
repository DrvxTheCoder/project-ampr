"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { DocumentCard } from "@/components/shared/document-card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { documentCategories, type DocumentEntry } from "@/content/types";
import { normalize } from "@/lib/format";

const ALL = "Tout";

export function DocumentationBrowser({ documents }: { documents: DocumentEntry[] }) {
  const [category, setCategory] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const needle = normalize(query.trim());
    return documents.filter(
      (document) =>
        (category === ALL || document.category === category) &&
        normalize(`${document.title} ${document.summary}`).includes(needle),
    );
  }, [documents, category, query]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Tabs value={category} onValueChange={setCategory} className="max-w-full">
          <TabsList className="h-auto max-w-full justify-start overflow-x-auto rounded-full [scrollbar-width:none]">
            {[ALL, ...documentCategories].map((name) => (
              <TabsTrigger key={name} value={name} className="flex-none rounded-full px-4 py-1.5">
                {name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="relative w-full sm:w-72">
          <Search
            className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher un document"
            aria-label="Rechercher un document"
            className="h-10 rounded-full pl-10"
          />
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        {visible.length} {visible.length > 1 ? "documents" : "document"}
      </p>

      {visible.length > 0 ? (
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((document) => (
            <DocumentCard key={document.slug} document={document} />
          ))}
        </div>
      ) : (
        <p className="mt-6 rounded-3xl bg-muted p-10 text-center text-muted-foreground">
          Aucun document ne correspond à cette recherche.
        </p>
      )}
    </>
  );
}
