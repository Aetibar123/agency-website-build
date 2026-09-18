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
  title: "How We Help | Web Development, Mobile Apps & Custom Software | Aetibar",
  description:
    "Technology should fit your business — not the other way around. Aetibar provides custom web development, mobile app development, digital marketing, and business software solutions.",
  keywords: [
    "how Aetibar helps",
    "web development solutions",
    "mobile app development",
    "digital marketing lead systems",
    "custom software development Udaipur",
    "business workflow automation",
    "internal business tools",
    "web application development",
    "custom business software",
    "Aetibar Technologies",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "Web Development, Mobile App Development, Digital Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.aetibar.in/how-we-help",
  },
  openGraph: {
    title: "How We Help | Web Development, Mobile Apps & Custom Software | Aetibar",
    description:
      "Technology should fit your business — not the other way around. We build custom software, web applications, and connected systems around how your business actually works.",
    url: "https://www.aetibar.in/how-we-help",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
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
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const howWeHelpSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How We Help - Aetibar",
  url: "https://www.aetibar.in/how-we-help",
  description:
    "Aetibar develops custom software, web applications, mobile apps, and system integrations that connect customer touchpoints with internal operations.",
  publisher: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
};

export default function HowWeHelpPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howWeHelpSchema),
        }}
      />
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
