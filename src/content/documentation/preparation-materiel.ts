import { placeholder } from "../site";
import type { DocumentEntry } from "../types";

export const preparationMateriel: DocumentEntry = {
  slug: "preparation-materiel",
  title: "Préparation du matériel",
  category: "Opérateur",
  summary: "Les étapes pour vérifier, allumer, envoyer et déclarer chaque fauteuil avant le service.",
  cover: placeholder("doc-preparation", "Couverture de la fiche préparation du matériel"),
  sections: [
    {
      id: "verification",
      title: "Vérifier et nettoyer",
      blocks: [
        {
          type: "steps",
          items: [
            "Vérifier le niveau de batterie : 100 % obligatoire.",
            "Nettoyer le fauteuil avec un chiffon humide et un produit désinfectant.",
            "Nettoyer l'écran avec un chiffon et un nettoyant écran.",
          ],
        },
      ],
    },
    {
      id: "allumage",
      title: "Allumer et géolocaliser",
      blocks: [
        {
          type: "steps",
          items: [
            "Tirer le bouton rouge vers le haut pour allumer le fauteuil.",
            "Allumer l'écran ALBA sur le côté de la tablette et attendre l'interface d'accueil.",
            "Faire la checklist avec l'application Fauteuil Autonome via le PDA.",
            "Scanner le QR code à l'extérieur de l'ascenseur pour la géolocalisation et voir le voyant de connexion clignoter en vert.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Attention",
          text: "Attendre que les capteurs clignotent pendant 3 minutes, puis se fixent.",
        },
      ],
    },
    {
      id: "envoi",
      title: "Envoyer au point d'accueil",
      blocks: [
        {
          type: "steps",
          items: [
            "Envoyer le fauteuil ALBA avec l'option STAGING jusqu'au point d'accueil.",
            "Vérifier sa présence et le ranger en position de départ.",
          ],
        },
        { type: "callout", tone: "warning", title: "Attention", text: "Le faire pour chaque fauteuil." },
      ],
    },
    {
      id: "ozion",
      title: "Déclarer dans OZION",
      blocks: [
        {
          type: "steps",
          items: [
            "Insérer le fauteuil ALBA dans OZION en cliquant sur Prises de service.",
            "Sélectionner le logo de nouvelle prise de service.",
            "Sélectionner le nom de l'agent « Alba xxx », puis le mettre en zone Formation.",
            "Reproduire pour chaque fauteuil à utiliser.",
          ],
        },
      ],
    },
  ],
};
