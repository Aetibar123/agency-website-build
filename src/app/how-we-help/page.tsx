import React from "react";
import { Metadata } from "next";
import HowWeHelpHero from "../../components/how-we-help/HowWeHelpHero";
import TwoHalvesSection from "../../components/how-we-help/TwoHalvesSection";
import FrictionScenariosSection from "../../components/how-we-help/FrictionScenariosSection";
import DiagnosticMatrixSection from "../../components/how-we-help/DiagnosticMatrixSection";
import InteractiveDiagnosticTool from "../../components/how-we-help/InteractiveDiagnosticTool";
import ComparisonSection from "../../components/how-we-help/ComparisonSection";
import HowWeHelpCta from "../../components/how-we-help/HowWeHelpCta";

export const metadata: Metadata = {
  title: "How We Help | Bridging Customer Touchpoints & Internal Operations",
  description:
    "Technology should fit your business — not the other way around. We help businesses eliminate disconnected tools, manual copy-pasting, and communication bottlenecks with cohesive digital systems.",
  keywords: [
    "How Aetibar helps",
    "Business workflow solutions",
    "Customer and lead systems",
    "Internal operations tools",
    "Digital system architecture",
    "Friction diagnostic",
    "Custom Next.js platforms",
    "Aetibar Technologies",
  ],
  alternates: {
    canonical: "https://www.aetibar.in/how-we-help",
  },
  openGraph: {
    title: "How We Help | Bridging Customer Touchpoints & Internal Operations",
    description:
      "Technology should fit your business — not the other way around. We help businesses improve how customers interact with them and how work happens internally.",
    url: "https://www.aetibar.in/how-we-help",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - How We Help",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Help | Aetibar",
    description:
      "Technology should fit your business — not the other way around. We build practical digital systems around how your business actually works.",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

export default function HowWeHelpPage() {
  return (
    <main>
      {/* 1. Page Hero with Flowing Topology Diagram */}
      <HowWeHelpHero />

      {/* 2. The Two Connected Halves of Modern Business */}
      <TwoHalvesSection />

      {/* 3. Real-World Friction Scenarios & How We Fix Them */}
      <FrictionScenariosSection />

      {/* 4. Diagnostic Selection Framework (4 Intervention Tiers) */}
      <DiagnosticMatrixSection />

      {/* 5. Interactive Workflow Friction Self-Assessment */}
      <InteractiveDiagnosticTool />

      {/* 6. Why This Model Outperforms Traditional Options */}
      <ComparisonSection />

      {/* 7. Final High-Impact CTA */}
      <HowWeHelpCta />
    </main>
  );
}
