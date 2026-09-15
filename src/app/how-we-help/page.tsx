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
  title: "How We Help | Custom Software, Web Apps & Workflow Automation | Aetibar",
  description:
    "Technology should fit your business — not the other way around. Aetibar develops custom software, web applications, and system integrations that connect customer touchpoints with internal operations.",
  keywords: [
    "How Aetibar helps",
    "Custom software development",
    "Business workflow automation",
    "Web application development",
    "Internal business tools",
    "System integration",
    "API integration",
    "Custom business software",
    "Software development company in Udaipur",
    "Software development company in India",
    "Aetibar Technologies",
  ],
  alternates: {
    canonical: "https://www.aetibar.in/how-we-help",
  },
  openGraph: {
    title: "How We Help | Custom Software, Web Apps & Workflow Automation | Aetibar",
    description:
      "Technology should fit your business — not the other way around. We build custom software and connected systems around how your business actually works.",
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
      "Technology should fit your business — not the other way around. We build practical digital systems and software around how your business actually works.",
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
