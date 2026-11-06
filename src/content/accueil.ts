import { placeholder } from "./site";

/** Textes et images de la page d'accueil, section par section. */
export const home = {
  hero: {
    pillImage: placeholder("presentation-hero", ""),
    titleFirstLine: "ALBA,",
    titleLines: ["le fauteuil", "qui vous mène"],
    titleLastLine: "à bon port",
    note: "Du point d'accueil à la porte d'embarquement, sans effort.",
    action: { label: "Découvrir", href: "/presentation" },
    image: placeholder("hero-terminal", "Hall du terminal au coucher du soleil"),
    imageTitle: "Terminaux 2A et 2C",
    imageText: "Un déplacement autonome et sûr pour les personnes à mobilité réduite.",
  },
  about: {
    title: "Le service",
    image: placeholder("accueil-equipe", "Équipe d'accueil en zone R"),
    figures: [
      { value: "2", label: "Terminaux" },
      { value: "3 min", label: "Avant le retour" },
      { value: "100 %", label: "Batterie au départ" },
    ],
    links: [
      { label: "Le fauteuil ALBA", href: "/presentation#service" },
      { label: "Le parcours passager", href: "/presentation#parcours" },
      { label: "Nos engagements", href: "/presentation#engagements" },
    ],
  },
  mission: {
    eyebrow: "Notre mission",
    firstLine: "L’autonomie du passager",
    secondLine: "La sécurité d’abord",
    action: { label: "En savoir plus", href: "/presentation" },
    text: "Le fauteuil ALBA conduit seul le passager vers sa porte. Un agent reste joignable à tout moment grâce au bouton SOS.",
    image: placeholder("mission-galerie", "Galerie vitrée menant aux portes d'embarquement"),
  },
  vision: {
    eyebrow: "Notre vision",
    text: "Le fauteuil ALBA complète l'accompagnement des agents APMR, sans jamais s'imposer au passager.",
    /** Les lignes s'affichent en décalé, en alternant noir et gris. */
    lines: [
      "Se déplacer librement",
      "dans le terminal, c’est",
      "gagner en autonomie sans",
      "perdre le lien humain.",
    ],
  },
  highlights: {
    items: [
      {
        eyebrow: "Autonomie",
        title: "Un trajet sans effort",
        image: placeholder("media-07", "Fauteuil en route vers la porte"),
        href: "/presentation#parcours",
      },
      {
        eyebrow: "Sécurité",
        title: "Capteurs et vigilance",
        image: placeholder("media-03", "Capteurs du fauteuil"),
        href: "/presentation#engagements",
      },
      {
        eyebrow: "Assistance",
        title: "Le SOS à portée de main",
        image: placeholder("media-04", "Tablette du fauteuil et bouton SOS"),
        href: "/presentation#engagements",
      },
      {
        eyebrow: "Confort",
        title: "Une pause si besoin",
        image: placeholder("media-08", "Passager en pause pendant le trajet"),
        href: "/presentation#faq",
      },
    ],
  },
  story: {
    eyebrow: "Sur le parcours",
    firstLine: "De la zone d’attente",
    secondLine: "à la porte d’embarquement",
    action: { label: "Voir le parcours", href: "/presentation#parcours" },
    text: "Une fois le passager déposé, le fauteuil repart seul vers le point d'accueil.",
    image: placeholder("parcours", "Fauteuil ALBA dans le terminal"),
  },
  roles: {
    eyebrow: "Sur le terrain",
    title: ["Les acteurs", "du service"],
    text: "Opérateurs, agents et régulation travaillent ensemble pour orienter chaque passager vers le bon accompagnement.",
    action: { label: "Voir les procédures", href: "/documentation" },
    items: [
      {
        name: "Opérateur ALBA",
        role: "Prépare les fauteuils et accueille en zone R",
        image: placeholder("role-operateur", "Opérateur ALBA"),
      },
      {
        name: "Agent APMR",
        role: "Accompagne le passager jusqu'au point d'accueil",
        image: placeholder("role-agent", "Agent APMR"),
      },
      {
        name: "Chef d'équipe",
        role: "Oriente les passagers éligibles en amont",
        image: placeholder("role-superviseur", "Chef d'équipe"),
      },
      {
        name: "Régulation",
        role: "Suit les prestations et coordonne les moyens",
        image: placeholder("role-regulation", "Poste de régulation"),
      },
    ],
  },
};
