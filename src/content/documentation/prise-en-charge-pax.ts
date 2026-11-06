import { placeholder } from "../site";
import type { DocumentEntry } from "../types";

export const priseEnChargePax: DocumentEntry = {
  slug: "prise-en-charge-pax",
  title: "Prise en charge PAX",
  category: "Opérateur",
  summary: "Installer le passager, lui expliquer les consignes et préparer le départ en toute sécurité.",
  cover: placeholder("doc-prise-en-charge", "Couverture de la fiche prise en charge PAX"),
  sections: [
    {
      id: "installation",
      title: "Installer le passager",
      blocks: [
        {
          type: "callout",
          tone: "warning",
          title: "Interdit",
          text: "Embarquement au large ou PAX nécessitant une assistance jusqu'à l'embarquement.",
        },
        {
          type: "steps",
          items: [
            "Demander si le PAX embarque seul.",
            "Soulever le repose-pieds et installer le PAX.",
            "Poser le bagage du PAX à l'arrière.",
            "Expliquer les consignes au PAX : garder une posture correcte, ne pas manger ni boire, attacher sa ceinture.",
            "Vérifier qu'aucun objet n'obstrue les capteurs et que personne ne se trouve dans un rayon de 10 cm autour du véhicule avant de démarrer la navigation.",
          ],
        },
      ],
    },
    {
      id: "pause",
      title: "Expliquer la pause au PAX",
      blocks: [
        {
          type: "steps",
          items: [
            "Cliquer sur « Pause ».",
            "Valider.",
            "Choisir « Toilet ».",
            "Le temps restant s'affiche à l'écran.",
          ],
        },
        {
          type: "list",
          items: ["Le bouton SOS permet de demander assistance.", "Le klaxon permet de se faire laisser passer."],
        },
      ],
    },
    {
      id: "fin-de-parcours",
      title: "Fin de parcours",
      blocks: [
        {
          type: "list",
          items: [
            "Le fauteuil annonce la fin de parcours.",
            "Le PAX répond au questionnaire de satisfaction.",
            "Prévenir le PAX qu'il a 1 minute pour quitter le fauteuil et 2 minutes pour prendre son bagage.",
          ],
        },
      ],
    },
  ],
};
