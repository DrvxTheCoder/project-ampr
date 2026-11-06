const dateFormat = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "long",
  timeZone: "UTC",
});

/** Convertit une date AAAA-MM-JJ en texte, par exemple « 25 août 2026 ». */
export const formatDate = (date: string) => dateFormat.format(new Date(date));

/** Retire accents et majuscules pour comparer deux textes. */
export const normalize = (text: string) =>
  text
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
