import { placeholder } from "../site";
import type { DocumentEntry } from "../types";

export const procedureType: DocumentEntry = {
  slug: "procedure-type",
  title: "Procédure type opérateur",
  category: "Opérateur",
  summary: "La fiche de synthèse de l'opérateur, avant et pendant la prise de service.",
  cover: placeholder("doc-procedure", "Couverture de la procédure type opérateur"),
  sections: [
    {
      id: "avant-prise-de-service",
      title: "Avant prise de service",
      blocks: [
        {
          type: "steps",
          items: [
            "Vérifier le niveau de batterie : 100 % obligatoire.",
            "Nettoyer le fauteuil : chiffon humide et détergent neutre pour l'écran, chiffon et alcool éthylique 70° pour le siège et les accoudoirs.",
            "Allumer le fauteuil : tirer le bouton rouge vers le haut.",
            "Allumer l'écran ALBA sur le côté droit de la tablette.",
            "Attendre que les capteurs clignotent 3 minutes, puis se fixent.",
            "Scanner chaque fauteuil ALBA via le PDA.",
            "Emmener les fauteuils ALBA par ascenseur jusqu'à la porte A45.",
            "Scanner le QR code à l'extérieur de l'ascenseur pour la géolocalisation et voir le voyant de connexion clignoter en vert.",
            "Envoyer les fauteuils ALBA avec l'option STAGING jusqu'au point d'accueil.",
          ],
        },
      ],
    },
    {
      id: "prise-de-service",
      title: "Prise de service",
      blocks: [
        {
          type: "steps",
          items: [
            "Insérer le fauteuil ALBA dans OZION en cliquant sur Prises de service.",
            "Sélectionner le logo de nouvelle prise de service.",
            "Sélectionner le nom de l'agent « Alba xxx », puis le mettre en zone Formation.",
            "Reproduire pour chaque fauteuil à utiliser.",
            "Vérifier les données PAX WCHR et WCHS dans OZION pour une détection et une prise en charge rapides et efficaces.",
            "Contacter le chef ou la cheffe d'équipe, ou l'agent APMR en charge, pour manager les PAX en amont.",
            "Interpeller directement les agents APMR.",
            "Demander au PAX et à l'agent APMR en charge si le PAX peut embarquer seul ou non.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "À éviter",
          text: "Les embarquements au large et les PAX nécessitant une assistance à l'embarquement.",
        },
      ],
    },
  ],
};
