import { placeholder } from "./site";

/** En-têtes des pages de rubrique. */
export const pageIntros = {
  reports: {
    eyebrow: "Rapport",
    title: "Suivi et comptes-rendus",
    text: "Les comptes-rendus de réunion et les retours d'exploitation du service ALBA.",
    image: placeholder("page-rapports", "Vue du tarmac à travers les baies vitrées"),
  },
  documentation: {
    eyebrow: "Documentation",
    title: "Procédures et manuels",
    text: "Les fiches de référence pour préparer les fauteuils, accueillir les passagers et suivre les trajets.",
    image: placeholder("page-documentation", "Fauteuil ALBA en attente au point d'accueil"),
  },
  media: {
    eyebrow: "Images & vidéos",
    title: "Le service en images",
    text: "Photos et vidéos du fauteuil ALBA dans les terminaux 2A et 2C.",
    image: placeholder("page-medias", "Allée du terminal 2"),
  },
};
