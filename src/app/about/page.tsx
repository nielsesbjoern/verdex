import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About — Founder",
  description:
    "Niels Schade — founder of Verdex. Three generations of legal heritage, strategic business education at Copenhagen Business School.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — Verdex Founder",
    description:
      "Niels Schade — founder of Verdex. Three generations of legal heritage, strategic business education at Copenhagen Business School.",
    type: "profile",
  },
};

export default function AboutPage() {
  return <About />;
}
