import { Hero } from "@/components/Hero";
import { SolutionsTabs } from "@/components/SolutionsTabs";
import { ReferencesTeaser } from "@/components/ReferencesTeaser";
import { GermanyReach } from "@/components/GermanyReach";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsTabs />
      <ReferencesTeaser />
      <GermanyReach />
      <Contact />
    </>
  );
}
