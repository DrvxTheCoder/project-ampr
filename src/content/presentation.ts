import { placeholder } from "./site";

/** Textes et images de la page Présentation, section par section. */
export const presentation = {
  hero: {
    eyebrow: "Présentation",
    title: "Le fauteuil autonome ALBA",
    text: "Un fauteuil roulant à batterie rechargeable qui assure un déplacement autonome et sûr pour les personnes à mobilité réduite.",
    image: placeholder("presentation-hero", "Allée du terminal menant aux portes"),
  },
  service: {
    title: "Le service en bref",
    image: placeholder("fauteuil-detail", "Fauteuil ALBA vu de côté"),
    facts: [
      { label: "Public", value: "Passagers WCHR et WCHS pouvant embarquer seuls" },
      { label: "Point d'accueil", value: "Zone R" },
      { label: "Zone d'opération", value: "Terminal 2A et Terminal 2C" },
      { label: "Opérateur", value: "Agent APMR en charge au point d'accueil" },
      { label: "Prise de service", value: "Fauteuil enregistré dans OZION et visible comme un agent" },
      { label: "Fin de service", value: "Retour autonome au point d'accueil 3 minutes après le dépôt" },
    ],
  },
  journey: {
    eyebrow: "Cas d'utilisation",
    title: "Le parcours passager",
    text: "Le fauteuil ALBA prend le relais après les contrôles de sécurité, puis repart seul une fois le passager déposé.",
    steps: [
      { title: "Zone d'assistance à la mobilité", means: "Fauteuil standard et agent Samsic", alba: false },
      { title: "Contrôles de sécurité", means: "Fauteuil standard et agent Samsic", alba: false },
      { title: "Zone d'attente", means: "Fauteuil ALBA", alba: true },
      { title: "Porte d'embarquement", means: "Fauteuil ALBA", alba: true },
      { title: "Retour autonome", means: "Fauteuil ALBA", alba: true },
    ],
  },
  experience: {
    eyebrow: "À bord",
    title: "Quatre étapes pour le passager",
    steps: [
      {
        title: "S'installer",
        text: "Le passager s'assoit, attache sa ceinture et suit les consignes à l'écran. Aucun objet ne doit obstruer les capteurs.",
      },
      {
        title: "Scanner",
        text: "La carte d'embarquement est scannée avec la caméra de la tablette, ce qui indique au fauteuil la porte à rejoindre.",
      },
      {
        title: "Faire une pause",
        text: "Pendant le trajet, le passager peut demander un arrêt aux toilettes, puis reprendre sa route.",
      },
      {
        title: "Arriver",
        text: "Un questionnaire de satisfaction est proposé. Le passager dispose d'une minute pour se lever et de deux minutes pour prendre son bagage.",
      },
    ],
  },
  commitments: {
    title: "Nos engagements",
    items: [
      {
        title: "Consentement",
        text: "Le passager donne son accord avant tout transport. S'il refuse, l'agent APMR poursuit sa mission à ses côtés.",
      },
      {
        title: "Sécurité",
        text: "Aucun passager n'est transporté au joystick, et un périmètre de 10 cm est vérifié avant chaque départ.",
      },
      {
        title: "Assistance",
        text: "Le bouton SOS appelle un agent, qui rejoint le passager grâce à la localisation du fauteuil.",
      },
      {
        title: "Courtoisie",
        text: "Chaque échange avec les passagers et le personnel de l'aéroport reste courtois et compréhensif.",
      },
    ],
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Qui peut utiliser le fauteuil ALBA ?",
        answer:
          "Les passagers WCHR et WCHS qui peuvent embarquer seuls. Les embarquements au large et les passagers ayant besoin d'une assistance jusqu'à l'embarquement ne sont pas concernés.",
      },
      {
        question: "Puis-je refuser le fauteuil autonome ?",
        answer:
          "Oui. L'agent d'accueil demande votre accord avant le transport. En cas de refus, l'agent APMR continue de vous accompagner.",
      },
      {
        question: "Que faire en cas de problème pendant le trajet ?",
        answer: "Appuyez sur le bouton SOS de la tablette. Un agent viendra à vous dans les minutes qui suivent.",
      },
      {
        question: "Puis-je m'arrêter aux toilettes ?",
        answer:
          "Oui. Cliquez sur Pause, validez, puis choisissez Toilet. Une fois terminé, cliquez sur Back to trip et scannez de nouveau votre carte d'embarquement.",
      },
      {
        question: "Combien de temps ai-je pour quitter le fauteuil ?",
        answer:
          "Vous avez une minute pour vous lever et deux minutes pour prendre votre bagage. Le fauteuil repart ensuite seul vers le point d'accueil.",
      },
    ],
  },
};
