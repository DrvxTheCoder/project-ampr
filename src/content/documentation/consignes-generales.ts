import { placeholder } from "../site";
import type { DocumentEntry } from "../types";

export const consignesGenerales: DocumentEntry = {
  slug: "consignes-generales",
  title: "Consignes générales",
  category: "Consignes",
  summary: "Les règles communes aux opérateurs : matériel, prise en charge, navigation et communication.",
  cover: placeholder("doc-consignes", "Couverture des consignes générales"),
  sections: [
    {
      id: "materiel",
      title: "Préparation matérielle",
      blocks: [
        {
          type: "list",
          items: [
            "Pour le déplacement du fauteuil dans le local technique, après le nettoyage et la checklist, débloquer le levier de verrouillage et mettre le fauteuil en mode manuel.",
            "Pousser et faire entrer le fauteuil dans l'ascenseur pour le remonter.",
            "Allumer le fauteuil une fois à l'extérieur de l'ascenseur.",
            "Scanner le fauteuil grâce au QR code à l'entrée de l'ascenseur.",
            "Envoyer le fauteuil au STAGING AREA en mode autonome.",
          ],
        },
      ],
    },
    {
      id: "prise-en-charge",
      title: "Prise en charge PAX",
      blocks: [
        {
          type: "list",
          items: [
            "Repérer uniquement les PAX WCHR et WCHS en amont dans OZION.",
            "Communiquer avec les chefs d'équipe et les agents en charge des PAX WCHR et WCHS afin qu'ils déposent les PAX en ZR, pour une prise en charge en mode autonome.",
            "Faire suspendre la mission des APMR en ZR fauteuil autonome.",
          ],
        },
      ],
    },
    {
      id: "navigation",
      title: "Navigation",
      blocks: [
        {
          type: "list",
          items: [
            "Ne pas oublier de mettre la langue de navigation correspondant à celle comprise par le PAX.",
            "Le mode joystick ne doit strictement pas être utilisé pour conduire les PAX, afin d'éviter tout accident.",
            "Toujours veiller aux alertes SOS après le départ en navigation, afin d'intervenir vite en cas de problème.",
          ],
        },
      ],
    },
    {
      id: "communication",
      title: "Communication",
      blocks: [
        {
          type: "list",
          items: [
            "Rester toujours courtois et compréhensif envers les PAX et le personnel travaillant au sein de l'ADP.",
            "Ne jamais exposer un problème interne ni critiquer le projet auprès d'une personne en dehors des opérateurs.",
            "Tout constat de dysfonctionnement doit être noté et rapporté au chef de projet et dans le groupe WhatsApp ALBA.",
            "Éviter les prises de bec entre vous et les agents, ainsi qu'avec les autres personnels au sein de l'ADP.",
          ],
        },
      ],
    },
  ],
};
