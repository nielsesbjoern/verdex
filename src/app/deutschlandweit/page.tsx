import type { Metadata } from "next";
import { GermanyReachPageContent } from "@/components/GermanyReachPageContent";

export const metadata: Metadata = {
  title: "Deutschlandweit — Remote für Kanzleien in ganz Deutschland",
  description:
    "Verdex arbeitet vollständig remote — vom Erstgespräch bis zur vollständigen Übergabe. Ob Flensburg oder München: Entfernung spielt keine Rolle, Sorgfalt schon.",
  alternates: { canonical: "/deutschlandweit" },
  openGraph: {
    title: "Deutschlandweit — Verdex",
    description:
      "Verdex arbeitet vollständig remote — vom Erstgespräch bis zur vollständigen Übergabe.",
    type: "website",
  },
};

export default function DeutschlandweitPage() {
  return <GermanyReachPageContent />;
}
