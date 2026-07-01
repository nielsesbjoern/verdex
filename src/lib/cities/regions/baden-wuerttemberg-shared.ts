import type { CourtChain } from "../types";

/** Shared FAQ blocks — no portfolio or case claims. */
export function standardCityFaq(
  cityName: string,
  courts: CourtChain,
  localFaqs: { q: string; a: string }[],
): { q: string; a: string }[] {
  return [
    ...localFaqs,
    {
      q: `Welches Gericht ist für Mandate aus ${cityName} zuständig?`,
      a: `Erstinstanzlich ${courts.amtsgericht}, in der Berufung ${courts.landgericht}, als Oberlandesgericht ${courts.oberlandesgericht}.`,
    },
    {
      q: "Was kostet eine Kanzlei-Website bei Verdex?",
      a: "Eine individuelle Kanzlei-Website beginnt bei 6.900 €; Pakete mit lokaler Sichtbarkeit starten bei 11.000 €. Nach dem Erstgespräch erhalten Sie ein verbindliches Festpreis-Angebot.",
    },
    {
      q: `Arbeitet Verdex remote mit Kanzleien in ${cityName}?`,
      a: "Ja — vom Erstgespräch bis zum Launch. Hosting und Datenschutz bleiben in Deutschland.",
    },
  ];
}

export const BW = "Baden-Württemberg" as const;
