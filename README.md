# Site vitrine Samsic APMR

Site Next.js (App Router), TypeScript, Tailwind CSS et shadcn/ui, présentant le service de fauteuils autonomes ALBA.

## Démarrer

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:3000.

## Rubriques

| Rubrique        | Adresse                                | Contenu                                 |
| --------------- | -------------------------------------- | --------------------------------------- |
| Accueil         | `/`                                    | `src/content/accueil.ts`                |
| Présentation    | `/presentation`                        | `src/content/presentation.ts`           |
| Rapport         | `/rapports`, `/rapports/[slug]`        | `src/content/rapports/`                 |
| Documentation   | `/documentation`, `/documentation/[slug]` | `src/content/documentation/`         |
| Images & vidéos | `/medias`                              | `src/content/medias.ts`                 |

Tout le texte se trouve dans `src/content/`. Les pages ne font que l'afficher : il n'y a en général aucun composant à modifier pour changer le contenu.

## Ajouter du contenu

### Un rapport

1. Copiez un fichier de `src/content/rapports/` et renommez-le.
2. Modifiez son contenu, en particulier `slug`, qui devient l'adresse de la page.
3. Ajoutez-le à la liste de `src/content/rapports/index.ts`.

La page, la liste, le bloc de l'accueil et la recherche se mettent à jour automatiquement. Les rapports sont triés du plus récent au plus ancien.

### Un document

Même démarche dans `src/content/documentation/`. L'ordre de la liste dans `index.ts` est celui de l'affichage, et l'accueil montre les trois premiers documents.

Pour ajouter une catégorie de filtre, complétez `documentCategories` dans `src/content/types.ts`.

### Une photo ou une vidéo

Déposez le fichier dans `public/images` ou `public/videos`, puis ajoutez un élément à `src/content/medias.ts`. Pour une vidéo, renseignez `videoSrc` : sans ce champ, la galerie affiche « Vidéo à venir ».

### Un PDF à télécharger

Déposez le fichier dans `public/fichiers`, puis renseignez `file: "/fichiers/mon-document.pdf"` sur le rapport ou le document. Le bouton de téléchargement apparaît alors tout seul.

## Rédiger un rapport ou un document

Le contenu se compose de sections, elles-mêmes faites de briques :

| Brique      | Usage                                     |
| ----------- | ----------------------------------------- |
| `paragraph` | Texte courant                             |
| `list`      | Liste à puces                             |
| `steps`     | Étapes numérotées                         |
| `callout`   | Encadré `info` ou `warning`               |
| `figures`   | Chiffres clés                             |
| `image`     | Image avec légende optionnelle            |

Pour créer une nouvelle brique, ajoutez son type dans `src/content/types.ts` et son rendu dans `src/components/shared/content-blocks.tsx`.

## Remplacer les images provisoires

Les images de `public/images/placeholders/` sont nommées selon leur usage (`hero-terminal.webp`, `role-agent.webp`…). Deux possibilités :

- écraser le fichier par une vraie photo portant le même nom ;
- remplacer l'appel `placeholder("nom", "description")` dans `src/content/` par `{ src: "/images/ma-photo.webp", alt: "description" }`.

## Personnaliser l'apparence

- **Couleurs** : variables de `:root` dans `src/app/globals.css`. `--panel` est la couleur des panneaux et `--primary` celle des boutons.
- **Polices** : `src/app/layout.tsx`.
- **Logo** : `src/components/layout/logo.tsx`, qui affiche un logo texte provisoire.
- **Nom et menu** : `src/content/site.ts`.
- **Ordre des sections de l'accueil** : `src/app/page.tsx`.

## Structure

```text
src/
├── app/                  Pages et routes
├── content/              Tout le contenu éditable
├── components/
│   ├── layout/           En-tête, pied de page, recherche, logo
│   ├── sections/         Sections propres à une page
│   ├── shared/           Éléments réutilisables
│   └── ui/               Composants shadcn/ui
└── lib/                  Formatage et index de recherche
```
