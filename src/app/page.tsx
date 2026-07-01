import { Hero } from "@/components/Hero";
import { SolutionsTabs } from "@/components/SolutionsTabs";
import { PricingTeaser } from "@/components/PricingTeaser";
import { ReferencesTeaser } from "@/components/ReferencesTeaser";
import { ReachTeaser } from "@/components/ReachTeaser";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsTabs />
      <PricingTeaser />
      <ReferencesTeaser />
      <ReachTeaser />
      <Contact />
    </>
  );
}
