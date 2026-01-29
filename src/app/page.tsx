import {
  CTA,
  Hero,
  LabTeaser,
  Services,
  TechStack,
} from "@/components/sections";

/**
 * Fimetech Homepage
 * Scroll-based storytelling with 5 distinct blocks
 */
export default function HomePage() {
  return (
    <>
      {/* Block 1: Hero - "The Hook" */}
      <Hero />

      {/* Block 2: Services - "The Black Box" */}
      <Services />

      {/* Block 3: Trust - "The Stack" */}
      <TechStack />

      {/* Block 4: Lab Teaser - "The Window" */}
      <LabTeaser />

      {/* Block 5: CTA - "The Signal" */}
      <CTA />
    </>
  );
}
