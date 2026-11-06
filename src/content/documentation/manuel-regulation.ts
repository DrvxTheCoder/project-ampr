import { placeholder } from "../site";
import type { DocumentEntry } from "../types";

export const manuelRegulation: DocumentEntry = {
  slug: "manuel-regulation",
  title: "Manuel régulation",
  category: "Régulation",
  summary: "Le cadre du service ALBA pour la régulation : cible, prise de service, transport et fin de service.",
  cover: placeholder("doc-regulation", "Couverture du manuel régulation"),
  sections: [
    {
      id: "cadre",
      title: "Cadre du service",
      blocks: [
        {
          type: "list",
          items: [
            "Description : fauteuil roulant à batterie rechargeable assurant un déplacement autonome et sûr pour les personnes à mobilité réduite.",
            "Cible spécifique : WCHR et WCHS, précisément ceux qui peuvent embarquer seuls.",
            "Point d'accueil : zone R.",
            "Zone d'opération : Terminal 2A et Terminal 2C.",
            "Opérateur : agent APMR en charge au point d'accueil.",
            "Prise de service : dans OZION, le fauteuil est enregistré par l'opérateur et visible comme un agent.",
          ],
        },
      ],
    },
    {
      id: "transport",
      title: "Procédure de transport",
      blocks: [
        { type: "paragraph", text: "L'agent d'accueil en ZR demande l'accord du PAX avant de le transporter par ALBA." },
        { type: "list", items: ["Si celui-ci refuse, l'agent APMR continue sa mission avec le PAX."] },
      ],
    },
    {
      id: "fin-de-service",
      title: "Fin de service",
      blocks: [
        {
          type: "paragraph",
          text: "3 minutes après le dépôt du PAX, le fauteuil retourne seul au point d'accueil. Les fauteuils sont ensuite redescendus par l'ascenseur dans leur local, et les batteries sont changées et rechargées.",
        },
        {
          type: "callout",
          tone: "info",
          title: "Remarque",
          text: "Le local de recharge des batteries n'étant pas prêt, les opérateurs ALBA font appel à la régulation afin d'affréter une navette pour déposer les batteries au local temporaire, au niveau des PARIFS.",
        },
      ],
    },
  ],
};
