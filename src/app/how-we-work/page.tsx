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
  title: "How We Work | Our Process for Digital Services | Aetibar",
  description:
    "Learn how Aetibar works across web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation—from understanding your needs to implementation, review, delivery, and ongoing support.",
  keywords: [
    "digital services process",
    "web development process",
    "mobile app development process",
    "SEO process",
    "social media marketing process",
    "paid advertising process",
    "AI automation process",
    "transparent project process",
    "digital marketing process",
    "Aetibar",
  ],
  authors: [{ name: "Aetibar", url: "https://www.aetibar.in" }],
  creator: "Aetibar",
  publisher: "Aetibar",
  category: "technology",
  classification:
    "Web Development, Mobile App Development, SEO, Social Media Marketing, Paid Advertising, AI Automation",
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
    title: "How We Work | Our Process for Digital Services | Aetibar",
    description:
      "See how Aetibar works with businesses—from understanding their needs and planning the right approach to implementing, reviewing, delivering, and supporting digital projects and services.",
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
    title: "How We Work | Our Process for Digital Services | Aetibar",
    description:
      "See how Aetibar approaches web development, mobile apps, SEO, marketing, advertising, and AI automation with a clear and practical process.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    ICBM: "24.5854, 73.7125",
  },
};



const howWeWorkSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How We Work | Aetibar",
  url: "https://www.aetibar.in/how-we-work",
  description:
    "Learn how Aetibar works with businesses across web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation—from understanding your needs and planning the right approach to implementation, review, delivery, and ongoing support.",
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
