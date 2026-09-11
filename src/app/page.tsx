import React from "react";
import { Metadata } from "next";
import HeroSection from "../components/home/HeroSection";
import IntroductionSection from "../components/home/IntroductionSection";
import ServicesSection from "../components/home/ServicesSection";
import SelectedWorkSection from "../components/home/SelectedWorkSection";
import ProcessSection from "../components/home/ProcessSection";
import TechCapabilitiesSection from "../components/home/TechCapabilitiesSection";
import WhyAetibarSection from "../components/home/WhyAetibarSection";
import AboutStorySection from "../components/home/AboutStorySection";
import CtaSection from "../components/home/CtaSection";

export const metadata: Metadata = {
  title:
    "Aetibar | AI, Web, App Development & Digital Marketing Studio in Udaipur",

  description:
    "Aetibar is an engineering and creative studio building custom web platforms, mobile applications, AI automation, and technical SEO for ambitious businesses.",

  keywords: [
    "Web Development Company in Udaipur",
    "Custom Website Development",
    "Mobile App Development",
    "AI Automation Agency",
    "AI Agent Development",
    "Technical SEO Services",
    "Performance Marketing Agency",
    "Brand Design & UI UX",
    "Software Engineering Studio",
    "Aetibar Technologies",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/",
  },

  openGraph: {
    title:
      "Aetibar | Digital Products, AI Automation & Growth Engineering",

    description:
      "Engineering bespoke digital platforms, intelligent AI workflows, and strategic growth infrastructure.",

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
    title:
      "Aetibar | Digital Products, AI Automation & Growth Engineering",

    description:
      "Engineering bespoke digital platforms, intelligent AI workflows, and strategic growth infrastructure.",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <SelectedWorkSection />
      <ProcessSection />
      <TechCapabilitiesSection />
      <WhyAetibarSection />
      <AboutStorySection />
      <CtaSection />
    </main>
  );
}
