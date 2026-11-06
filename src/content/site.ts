import type { ActionLink, ImageAsset } from "./types";

export const site = {
  name: "Samsic APMR",
  wordmark: "SAMSIC",
  wordmarkSuffix: "APMR",
  description:
    "Samsic APMR accompagne les personnes à mobilité réduite dans les terminaux 2A et 2C, avec le fauteuil autonome ALBA.",
  footerNote:
    "Accompagner chaque passager jusqu'à sa porte d'embarquement, en autonomie et en sécurité.",
  copyrightYear: 2026,
};

/** Rubriques du menu principal. */
export const navigation: ActionLink[] = [
  { label: "Présentation", href: "/presentation" },
  { label: "Rapport", href: "/rapports" },
  { label: "Documentation", href: "/documentation" },
  { label: "Images & vidéos", href: "/medias" },
];

/** Image temporaire : remplacez l'appel par { src, alt } avec la vraie photo. */
export const placeholder = (name: string, alt: string): ImageAsset => ({
  src: `/images/placeholders/${name}.webp`,
  alt,
});
