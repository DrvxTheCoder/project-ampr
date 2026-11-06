import { placeholder } from "../site";
import type { DocumentEntry } from "../types";

export const navigationGuide: DocumentEntry = {
  slug: "navigation",
  title: "Navigation",
  category: "Opérateur",
  summary: "Lancer le trajet, suivre le parcours, traiter une alerte et résoudre un échec de scan.",
  cover: placeholder("doc-navigation", "Couverture de la fiche navigation"),
  sections: [
    {
      id: "depart",
      title: "Départ vers la porte d'embarquement",
      blocks: [
        { type: "steps", items: ["Cliquer sur « Scan your pass ».", "Scanner la carte d'embarquement.", "Valider."] },
        {
          type: "callout",
          tone: "info",
          title: "Important",
          text: "Pour obtenir la destination, il faut scanner la carte d'embarquement du PAX via la caméra de la tablette.",
        },
      ],
    },
    {
      id: "suivi",
      title: "Suivi du parcours",
      blocks: [
        {
          type: "list",
          items: [
            "Attendre avec le passager les 10 secondes avant le départ.",
            "En cas d'alerte passager, vous recevez un message sur le PDA accueil ZR. La localisation du fauteuil est disponible sur OZION.",
            "Ouvrir l'application « Fauteuil Autonome » via le PDA, sélectionner « Alertes/défauts », puis suivre les étapes.",
            "Reprendre la procédure de navigation.",
            "En cas d'échec, basculer le fauteuil en mode manuel : avant cela, il faut éteindre le véhicule et déverrouiller le levier.",
            "Contacter le régulateur pour que la prestation soit finie.",
          ],
        },
        { type: "callout", tone: "warning", title: "Interdit", text: "Transport de PAX en joystick interdit." },
      ],
    },
    {
      id: "echec-scan",
      title: "Consignes en cas d'échec de scan",
      blocks: [
        {
          type: "steps",
          items: [
            "Retrouver la prestation dans OZION.",
            "Demander à l'agent le nom qui était présent sur son PDA.",
            "Cliquer sur le nom et le prénom du passager (en jaune).",
            "Modifier les champs « Nom » et « Prénom » du PAX en recopiant strictement ceux de la carte d'embarquement.",
            "Valider et attendre environ 30 secondes, puis scanner à nouveau la carte d'embarquement.",
            "Si le fauteuil ne propose pas la porte d'embarquement, prendre en photo la carte d'embarquement, la mettre dans le groupe WhatsApp « ALBA Fauteuil autonome » pour la recherche du dysfonctionnement, puis sélectionner manuellement la porte d'embarquement.",
          ],
        },
      ],
    },
  ],
};
