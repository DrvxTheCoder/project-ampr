import type { DocumentEntry } from "../types";
import { communicationPax } from "./communication-pax";
import { consignesGenerales } from "./consignes-generales";
import { manuelRegulation } from "./manuel-regulation";
import { navigationGuide } from "./navigation";
import { preparationMateriel } from "./preparation-materiel";
import { priseEnChargePax } from "./prise-en-charge-pax";
import { procedureType } from "./procedure-type";

/**
 * Pour ajouter un document : copiez un fichier de ce dossier, modifiez-le, puis
 * ajoutez-le à cette liste. L'ordre de la liste est celui de l'affichage.
 */
export const documents: DocumentEntry[] = [
  procedureType,
  preparationMateriel,
  priseEnChargePax,
  navigationGuide,
  communicationPax,
  consignesGenerales,
  manuelRegulation,
];

export const getDocument = (slug: string) => documents.find((document) => document.slug === slug);
