import { placeholder } from "./site";
import type { MediaItem } from "./types";

/**
 * Pour ajouter une photo : déposez le fichier dans /public/images, puis ajoutez
 * un élément à cette liste. Pour une vidéo, déposez le .mp4 dans /public/videos
 * et renseignez videoSrc.
 */
export const mediaItems: MediaItem[] = [
  {
    id: "allee-terminal",
    type: "photo",
    title: "Allée du terminal 2A",
    image: placeholder("media-01", "Allée du terminal 2A"),
  },
  {
    id: "presentation-service",
    type: "video",
    title: "Présentation du service",
    description: "Le fauteuil ALBA, du point d'accueil à la porte d'embarquement.",
    image: placeholder("media-02", "Image d'attente de la vidéo de présentation"),
  },
  {
    id: "fauteuil-capteurs",
    type: "photo",
    title: "Capteurs du fauteuil",
    image: placeholder("media-03", "Capteurs du fauteuil ALBA"),
  },
  {
    id: "point-accueil",
    type: "photo",
    title: "Point d'accueil en zone R",
    image: placeholder("media-04", "Point d'accueil en zone R"),
  },
  {
    id: "preparation",
    type: "photo",
    title: "Local de préparation",
    image: placeholder("media-05", "Fauteuils dans le local de préparation"),
  },
  {
    id: "tutoriel-passager",
    type: "video",
    title: "Tutoriel passager",
    description: "Scanner sa carte, faire une pause et appeler un agent.",
    image: placeholder("media-06", "Image d'attente du tutoriel passager"),
  },
  {
    id: "porte-embarquement",
    type: "photo",
    title: "Arrivée en porte d'embarquement",
    image: placeholder("media-07", "Fauteuil arrivé en porte d'embarquement"),
  },
  {
    id: "tablette",
    type: "photo",
    title: "Tablette de navigation",
    image: placeholder("media-08", "Tablette de navigation du fauteuil"),
  },
];
