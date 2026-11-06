import type { Report } from "../types";
import { suiviOperationnel } from "./2026-08-25-suivi-operationnel";

/**
 * Pour ajouter un rapport : copiez un fichier de ce dossier, modifiez-le, puis
 * ajoutez-le à cette liste. Le tri par date est automatique.
 */
const allReports: Report[] = [suiviOperationnel];

export const reports = [...allReports].sort((a, b) => b.date.localeCompare(a.date));

export const getReport = (slug: string) => reports.find((report) => report.slug === slug);
