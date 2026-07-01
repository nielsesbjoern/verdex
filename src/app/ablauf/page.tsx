import type { Metadata } from "next";
import { ProcessPageContent } from "@/components/ProcessPageContent";

export const metadata: Metadata = {
  title: "Ablauf — In vier Schritten zum Launch",
  description:
    "So läuft die Zusammenarbeit mit Verdex: Gespräch, Konzept, Umsetzung, Launch & Übergabe — mit dem Anspruch eines Juristen.",
  alternates: { canonical: "/ablauf" },
  openGraph: {
    title: "Ablauf — Verdex",
    description:
      "So läuft die Zusammenarbeit mit Verdex: Gespräch, Konzept, Umsetzung, Launch & Übergabe.",
    type: "website",
  },
};

export default function AblaufPage() {
  return <ProcessPageContent />;
}
