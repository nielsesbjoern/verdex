import type { Metadata } from "next";
import { BeforeAfterShowcase } from "@/components/showcase/BeforeAfterShowcase";

export const metadata: Metadata = {
  title: "Anschauungsbeispiel — Vorher / Nachher",
  description:
    "Fiktives Vorher-Nachher-Beispiel zur Veranschaulichung — kein tatsächlich umgesetztes Kanzlei-Projekt.",
  alternates: { canonical: "/referenzen" },
  openGraph: {
    title: "Anschauungsbeispiel — Verdex",
    description:
      "Fiktives Vorher-Nachher-Beispiel zur Veranschaulichung — kein tatsächlich umgesetztes Kanzlei-Projekt.",
    type: "website",
  },
};

export default function ReferenzenPage() {
  return <BeforeAfterShowcase />;
}
