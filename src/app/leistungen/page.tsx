import type { Metadata } from "next";
import { ServicesOverview } from "@/components/solutions/ServicesOverview";

export const metadata: Metadata = {
  title: "Leistungen — Websites & Sichtbarkeit für Kanzleien",
  description:
    "Moderne Kanzlei-Websites und lokale Sichtbarkeit von Verdex — alle Lösungen im Überblick.",
  alternates: { canonical: "/leistungen" },
  openGraph: {
    title: "Leistungen — Verdex",
    description:
      "Moderne Kanzlei-Websites und lokale Sichtbarkeit von Verdex — alle Lösungen im Überblick.",
    type: "website",
  },
};

export default function LeistungenPage() {
  return <ServicesOverview />;
}
