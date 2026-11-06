import { documents } from "@/content/documentation";
import { mediaItems } from "@/content/medias";
import { reports } from "@/content/rapports";
import { navigation } from "@/content/site";

import { normalize } from "./format";

export type SearchEntry = {
  title: string;
  rubric: string;
  href: string;
  /** Texte recherché, sans accents et en minuscules. */
  haystack: string;
};

const entry = (title: string, rubric: string, href: string, ...text: string[]): SearchEntry => ({
  title,
  rubric,
  href,
  haystack: normalize([title, ...text].join(" ")),
});

/** Index construit à partir du contenu : tout nouvel élément y figure d'office. */
export const searchIndex: SearchEntry[] = [
  ...navigation.map((item) => entry(item.label, "Rubrique", item.href)),
  ...reports.map((report) =>
    entry(report.title, "Rapport", `/rapports/${report.slug}`, report.summary, ...report.tags),
  ),
  ...documents.map((document) =>
    entry(
      document.title,
      "Documentation",
      `/documentation/${document.slug}`,
      document.summary,
      document.category,
    ),
  ),
  ...mediaItems.map((item) =>
    entry(item.title, "Images & vidéos", "/medias", item.description ?? ""),
  ),
];
