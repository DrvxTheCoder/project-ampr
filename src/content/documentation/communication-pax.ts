import { placeholder } from "../site";
import type { DocumentEntry } from "../types";

export const communicationPax: DocumentEntry = {
  slug: "communication-pax",
  title: "Communication PAX",
  category: "Passagers",
  summary: "Le discours d'accueil et les étapes à expliquer au passager, du scan à la fin du parcours.",
  cover: placeholder("doc-communication", "Couverture de la fiche communication PAX"),
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        {
          type: "paragraph",
          text: "« Bonjour ! Bienvenue au point d'accueil ZR. Nous vous proposons un transport en fauteuil autonome, seriez-vous intéressé(e) ? Je vous l'explique. »",
        },
        {
          type: "paragraph",
          text: "« Le fauteuil autonome vous conduit seul et de façon sûre à votre porte d'embarquement. Vous n'avez rien à faire. »",
        },
        {
          type: "paragraph",
          text: "« En cas de besoin, appuyez sur SOS. Un agent viendra à vous dans les minutes qui suivent. »",
        },
      ],
    },
    {
      id: "etapes",
      title: "Étapes",
      subsections: [
        {
          title: "Respecter les consignes",
          blocks: [
            {
              type: "paragraph",
              text: "Asseyez-vous sur le fauteuil et suivez les consignes à l'écran. Aucun objet ne doit obstruer les capteurs.",
            },
          ],
        },
        {
          title: "Scanner votre carte d'embarquement",
          blocks: [{ type: "steps", items: ["Cliquer.", "Scanner.", "Valider."] }],
        },
        {
          title: "Vous pouvez faire une pause",
          blocks: [
            {
              type: "paragraph",
              text: "Durant votre trajet, vous avez la possibilité d'aller aux toilettes si besoin. Cliquez sur « Pause », puis validez.",
            },
            {
              type: "steps",
              items: [
                "Une fois que vous avez fini aux toilettes, cliquez sur « Back to trip ».",
                "Repartez à l'étape de scan et suivez à nouveau les étapes.",
              ],
            },
            {
              type: "list",
              items: [
                "En cas d'échec, cliquez sur SOS.",
                "Pendant la navigation, klaxonnez au besoin afin de libérer le passage.",
              ],
            },
          ],
        },
        {
          title: "En fin de parcours",
          blocks: [
            {
              type: "list",
              items: [
                "Un questionnaire de satisfaction vous est proposé.",
                "Vous avez 1 minute pour vous lever et 2 minutes pour prendre votre bagage.",
              ],
            },
          ],
        },
      ],
    },
  ],
};
