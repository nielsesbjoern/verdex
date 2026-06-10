import type { Metadata } from "next";
import { BeforeAfterShowcase } from "@/components/showcase/BeforeAfterShowcase";

export const metadata: Metadata = {
  title: "Referenzen — Vorher / Nachher",
  description:
    "Ein anonymisiertes Vorher-Nachher-Beispiel: vom alten Kanzlei-Auftritt zum Mandantenmagneten — inklusive messbarer SEO-Wirkung.",
  alternates: { canonical: "/referenzen" },
  openGraph: {
    title: "Referenzen — Verdex",
    description:
      "Ein anonymisiertes Vorher-Nachher-Beispiel: vom alten Kanzlei-Auftritt zum Mandantenmagneten — inklusive messbarer SEO-Wirkung.",
    type: "website",
  },
};

export default function ReferenzenPage() {
  return <BeforeAfterShowcase />;
}
