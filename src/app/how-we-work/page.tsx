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
  title: "How We Work | Transparent Web & Mobile App Development Process | Aetibar",
  description:
    "Discover our simple, transparent 5-stage process for website development, mobile apps, and AI automation. Learn how we deliver projects on time with working previews, zero jargon, and 100% code ownership.",
  keywords: [
    "web development process",
    "website development stages",
    "mobile app development process",
    "custom software development process",
    "AI automation implementation",
    "transparent development process",
    "agile web development methodology",
    "business software development",
    "web development company process",
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
    canonical: "https://www.aetibar.in/how-we-work",
  },
  openGraph: {
    title: "How We Work | Transparent Web & Mobile App Development Process | Aetibar",
    description:
      "See how Aetibar delivers projects smoothly: we understand your business needs, share clear plans and live previews, test thoroughly, and give you 100% code ownership.",
    url: "https://www.aetibar.in/how-we-work",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
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
    title: "How We Work | Transparent Web & Mobile App Development Process | Aetibar",
    description:
      "See how Aetibar delivers projects smoothly with regular working previews, zero jargon, and reliable post-launch support.",
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

const howWeWorkSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How We Work - Aetibar",
  url: "https://www.aetibar.in/how-we-work",
  description:
    "Explore Aetibar's human-friendly 5-stage development process: Discovery, Planning, Staged Building, Testing & Launch, and Dedicated Support.",
  publisher: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
};

export default function HowWeWorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howWeWorkSchema),
        }}
      />
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
