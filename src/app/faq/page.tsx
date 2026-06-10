import type { Metadata } from "next";
import { FaqPageContent } from "@/components/FaqPageContent";

export const metadata: Metadata = {
  title: "FAQ — Häufige Fragen",
  description:
    "Antworten auf die häufigsten Fragen von Kanzleien: Kosten, Dauer, Eigentum an der Website, technisches Vorwissen und DSGVO.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Verdex",
    description:
      "Antworten auf die häufigsten Fragen von Kanzleien: Kosten, Dauer, Eigentum, DSGVO.",
    type: "website",
  },
};

export default function FaqPage() {
  return <FaqPageContent />;
}
