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
  title: "How We Work | Custom Software, Web Development & AI Solutions | Aetibar",
  description:
    "Explore how Aetibar delivers technology projects. We understand your business workflow, create a clear plan, build with visible previews, test thoroughly, and provide ongoing support.",
  keywords: [
    "How Aetibar works",
    "software development process",
    "custom software development Udaipur",
    "web development company Udaipur",
    "business automation process",
    "web application development India",
    "staged software development",
    "Aetibar Technologies",
  ],
  alternates: {
    canonical: "https://www.aetibar.in/how-we-work",
  },
  openGraph: {
    title: "How We Work | Custom Software, Web Development & AI Solutions | Aetibar",
    description:
      "Explore how Aetibar delivers technology projects. We understand your business workflow, create a clear plan, build with visible previews, test thoroughly, and provide ongoing support.",
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
    title: "How We Work | Custom Software, Web Development & AI Solutions | Aetibar",
    description:
      "Explore how Aetibar delivers technology projects. We understand your business workflow, create a clear plan, build with visible previews, test thoroughly, and provide ongoing support.",
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
