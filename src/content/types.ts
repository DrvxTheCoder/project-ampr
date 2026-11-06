/** Types partagés par tout le contenu du site (dossier src/content). */

export type ImageAsset = {
  /** Chemin depuis /public, par exemple "/images/photos/terminal.webp". */
  src: string;
  alt: string;
};

export type ActionLink = {
  label: string;
  href: string;
};

export type Figure = {
  value: string;
  label: string;
};

/** Briques disponibles pour rédiger un rapport ou une documentation. */
export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "callout"; tone: "info" | "warning"; title?: string; text: string }
  | { type: "figures"; items: Figure[] }
  | { type: "image"; image: ImageAsset; caption?: string };

export type ContentSubsection = {
  title: string;
  blocks: ContentBlock[];
};

export type ContentSection = {
  /** Ancre de la section dans le sommaire. */
  id: string;
  title: string;
  intro?: string;
  blocks?: ContentBlock[];
  subsections?: ContentSubsection[];
};

export type Article = {
  /** Identifiant dans l'URL : minuscules et tirets. */
  slug: string;
  title: string;
  summary: string;
  cover: ImageAsset;
  sections: ContentSection[];
  /** PDF à proposer au téléchargement, placé dans /public/fichiers. */
  file?: string;
};

export type Report = Article & {
  /** Date au format AAAA-MM-JJ. */
  date: string;
  location: string;
  tags: string[];
};

export const documentCategories = [
  "Régulation",
  "Opérateur",
  "Passagers",
  "Consignes",
] as const;

export type DocumentCategory = (typeof documentCategories)[number];

export type DocumentEntry = Article & {
  category: DocumentCategory;
};

export type MediaItem = {
  id: string;
  type: "photo" | "video";
  title: string;
  description?: string;
  /** Photo affichée, ou image d'attente pour une vidéo. */
  image: ImageAsset;
  /** Fichier vidéo (.mp4), à renseigner pour les éléments de type "video". */
  videoSrc?: string;
};
