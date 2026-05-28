import { Hero } from "@/components/Hero";
import { SolutionsTabs } from "@/components/SolutionsTabs";
import { WhyVerdex } from "@/components/WhyVerdex";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsTabs />
      <WhyVerdex />
      <Contact />
    </>
  );
}
