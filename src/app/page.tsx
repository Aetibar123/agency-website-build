import React from "react";
import { Metadata } from "next";
import HomeHero from "../components/home/HomeHero";
import ProblemSection from "../components/home/ProblemSection";
import PhilosophySection from "../components/home/PhilosophySection";
import TwoSidesSection from "../components/home/TwoSidesSection";
import SolutionAreasSection from "../components/home/SolutionAreasSection";
import HowWeWorkHomeSection from "../components/home/HowWeWorkHomeSection";
import SelectedWorkHomeSection from "../components/home/SelectedWorkHomeSection";
import HomeCtaSection from "../components/home/HomeCtaSection";

export const metadata: Metadata = {
  title: "Aetibar | Web Development, Custom Software & AI Solutions in Udaipur",
  description:
    "Aetibar is a technology company based in Udaipur, India. We build custom websites, web applications, business software, and practical AI automation that solve real problems.",
  keywords: [
    "web development company in Udaipur",
    "custom software development",
    "website development company in India",
    "web application development",
    "custom business software",
    "AI automation for business",
    "mobile app development",
    "SEO services Udaipur",
    "Aetibar Technologies",
  ],
  alternates: {
    canonical: "https://www.aetibar.in/",
  },
  openGraph: {
    title: "Aetibar | Web Development, Custom Software & AI Solutions in Udaipur",
    description:
      "Aetibar is a technology company based in Udaipur, India. We build custom websites, web applications, business software, and practical AI automation that solve real problems.",
    url: "https://www.aetibar.in/",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Web Development & Custom Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetibar | Web Development, Custom Software & AI Solutions in Udaipur",
    description:
      "Aetibar is a technology company based in Udaipur, India. We build custom websites, web applications, business software, and practical AI automation that solve real problems.",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero */}
      <HomeHero />

      {/* 2. The Problem */}
      <ProblemSection />

      {/* 3. How Aetibar Thinks */}
      <PhilosophySection />

      {/* 4. Two Sides of a Digital Business */}
      <TwoSidesSection />

      {/* 5. Solution Areas */}
      <SolutionAreasSection />

      {/* 6. How We Work */}
      <HowWeWorkHomeSection />

      {/* 7. Selected Work */}
      <SelectedWorkHomeSection />

      {/* 8. Final CTA */}
      <HomeCtaSection />
    </main>
  );
}
