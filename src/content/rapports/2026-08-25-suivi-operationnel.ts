import { placeholder } from "../site";
import type { Report } from "../types";

export const suiviOperationnel: Report = {
  slug: "suivi-operationnel-2026-08",
  title: "Suivi opérationnel des fauteuils ALBA",
  date: "2026-08-25",
  location: "Terminal 2AC",
  tags: ["Compte-rendu", "Exploitation"],
  summary:
    "Compte-rendu de réunion sur la navigation, la détection d'obstacles, les alertes SOS et le retour des opérateurs et des passagers.",
  cover: placeholder("rapport-suivi", "Fauteuils ALBA au terminal 2"),
  sections: [
    {
      id: "inconvenients",
      title: "Inconvénients",
      subsections: [
        {
          title: "Espace de navigation",
          blocks: [
            {
              type: "list",
              items: [
                "Les T2AC ne disposent pas de suffisamment d'espace pour les machines, le flux voyageurs étant important en période d'embarquement.",
                "Les machines perdent énormément de temps, même face à des obstacles peu importants.",
              ],
            },
          ],
        },
        {
          title: "Vitesse de navigation",
          blocks: [
            {
              type: "figures",
              items: [
                { value: "0,9 m/s", label: "Vitesse avant mise à jour" },
                { value: "0,5 m/s", label: "Vitesse actuelle" },
              ],
            },
            {
              type: "list",
              items: [
                "Vitesse réduite suite aux nouvelles mises à jour imposées par l'ADP.",
                "Conséquence : des trajets nettement plus longs.",
              ],
            },
          ],
        },
        {
          title: "Détection d'obstacles",
          blocks: [
            {
              type: "list",
              items: [
                "Détection plus sensible qu'auparavant, entraînant d'importants à-coups et des freinages incessants.",
              ],
            },
          ],
        },
        {
          title: "Scan",
          blocks: [
            {
              type: "list",
              items: ["Certains scans sont complets, d'autres imposent le passage par la Gate List."],
            },
          ],
        },
        {
          title: "Alertes SOS",
          blocks: [
            {
              type: "list",
              items: [
                "Les alertes n'arrivent pas sur le PDA attitré.",
                "Il faut entrer dans la prestation sur OZION pour les consulter, et parfois elles n'y apparaissent même pas.",
              ],
            },
          ],
        },
        {
          title: "Réaction des passagers",
          blocks: [
            {
              type: "list",
              items: [
                "Réaction mitigée : le projet est apprécié, mais le confort reste à améliorer (à-coups, durée des trajets).",
                "Un client évoque une absence d'humanisme : plus personne à qui parler durant le trajet.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "impression-operateurs",
      title: "Impression des opérateurs",
      blocks: [
        {
          type: "list",
          items: [
            "Système jugé moins performant qu'avant.",
            "Point positif : ALBA réagit désormais plus rapidement pour éviter un obstacle.",
          ],
        },
      ],
    },
    {
      id: "remarques",
      title: "Remarques",
      blocks: [
        {
          type: "list",
          items: [
            "Remettre en service le local technique des batteries à proximité : la recharge est souvent trop lente et les superviseurs en charge sont souvent très occupés.",
            "Malgré les messages des CP, les agents PMR ne déposent pas assez souvent les PAX WCHR en ZR. Une sensibilisation des agents PMR est à prévoir.",
            "Certains PAX arrivant en confort R ou S se transforment en C ; d'autres refusent de changer de confort.",
          ],
        },
      ],
    },
  ],
};
