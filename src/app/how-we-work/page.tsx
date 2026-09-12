import React from "react";
import { Metadata } from "next";
import HowWeWorkHero from "../../components/how-we-work/HowWeWorkHero";
import WhyWorkflowFirstSection from "../../components/how-we-work/WhyWorkflowFirstSection";
import MethodologyDeepDiveSection from "../../components/how-we-work/MethodologyDeepDiveSection";
import InteractiveSprintSimulator from "../../components/how-we-work/InteractiveSprintSimulator";
import TransparencyGuaranteesSection from "../../components/how-we-work/TransparencyGuaranteesSection";
import HowWeWorkFaqSection from "../../components/how-we-work/HowWeWorkFaqSection";
import HowWeWorkCta from "../../components/how-we-work/HowWeWorkCta";

export const metadata: Metadata = {
  title: "How We Work | 5-Stage Workflow-First Engineering Lifecycle | Aetibar",
  description:
    "We don't start with code. We shadow how your business operates, architect resilient PostgreSQL topologies, deliver bi-weekly staging previews, and execute zero-downtime cutover.",
  keywords: [
    "How Aetibar works",
    "Workflow engineering lifecycle",
    "Custom business software development",
    "Operational friction audit",
    "Zero-downtime data migration",
    "Next.js internal tools",
    "PostgreSQL system architecture",
    "Aetibar Technologies",
  ],
  alternates: {
    canonical: "https://www.aetibar.in/how-we-work",
  },
  openGraph: {
    title: "How We Work | 5-Stage Workflow-First Engineering Lifecycle | Aetibar",
    description:
      "We don't start with code. We shadow how your business operates, architect resilient PostgreSQL topologies, deliver bi-weekly staging previews, and execute zero-downtime cutover.",
    url: "https://www.aetibar.in/how-we-work",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - How We Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work | 5-Stage Engineering Lifecycle | Aetibar",
    description:
      "We don't start with code. We shadow how your business operates, deliver bi-weekly working staging previews, and ensure zero data loss during migration.",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

export default function HowWeWorkPage() {
  return (
    <main>
      {/* 1. Hero Section with Interactive 5-Stage Pipeline Preview & Trust Metrics Strip */}
      <HowWeWorkHero />

      {/* 2. The Architectural Difference: 3-Way Model Comparison & Matrix */}
      <WhyWorkflowFirstSection />

      {/* 3. The Flagship 5-Stage Engineering Lifecycle Deep-Dive */}
      <MethodologyDeepDiveSection />

      {/* 4. Interactive Engagement Simulator & Roadmap Calculator */}
      <InteractiveSprintSimulator />

      {/* 5. Four Non-Negotiable Standards & Governance Guarantees */}
      <TransparencyGuaranteesSection />

      {/* 6. Frequently Asked Questions (Interactive Accordion) */}
      <HowWeWorkFaqSection />

      {/* 7. Final High-Impact Dark Gradient CTA Section */}
      <HowWeWorkCta />
    </main>
  );
}
