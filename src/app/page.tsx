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
  title: "Aetibar | Digital Systems & Workflow Solutions for Modern Businesses",
  description:
    "We help businesses turn disconnected digital processes into practical websites, systems and workflows built around how their business actually operates.",
  keywords: [
    "Business workflow solutions",
    "Custom business websites",
    "Customer and lead systems",
    "Internal operations tools",
    "Practical AI automation",
    "Digital problem solving",
    "Aetibar Technologies",
  ],
  alternates: {
    canonical: "https://www.aetibar.in/",
  },
  openGraph: {
    title: "Aetibar | Build a better way for your business to work.",
    description:
      "We help businesses turn disconnected digital processes into practical websites, systems and workflows built around how their business actually operates.",
    url: "https://www.aetibar.in/",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetibar | Build a better way for your business to work.",
    description:
      "We help businesses turn disconnected digital processes into practical websites, systems and workflows built around how their business actually operates.",
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
