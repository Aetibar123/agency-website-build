import React from "react";
import { Metadata } from "next";
import HeroSection from "../components/home/HeroSection";
import TechStackSection from "../components/home/TechStackSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import MethodologySection from "../components/home/MethodologySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CtaSection from "../components/home/CtaSection";
import BrandAnchorSection from "../components/home/BrandAnchorSection";

export const metadata: Metadata = {
  title:
    "Aetibar | Ai, Web, App Development & Digital Marketing Company in Udaipur",

  description:
    "Build powerful websites and mobile apps with Aetibar. We also offer AI automation, SEO, digital marketing, and brand design services.",

  keywords: [
    "Web Development Company in Udaipur",
    "Website Development Company",
    "Website Design Company",
    "Mobile App Development",
    "App Development Company",
    "AI Automation Services",
    "SEO Services",
    "Digital Marketing Company in Udaipur",
    "Brand Design",
    "Aetibar",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/",
  },

  openGraph: {
    title:
      "Aetibar | Web Development, App Development & Digital Marketing Company in Udaipur",

    description:
      "Professional Web Development, Mobile App Development, AI Automations, SEO & Marketing, and Brand Design services.",

    url: "https://www.aetibar.in/",
    siteName: "Aetibar",
    type: "website",

    images: [
      {
        url: "https://www.aetibar.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aetibar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Aetibar | Web Development & Digital Marketing Company in Udaipur",

    description:
      "Professional Web Development, Mobile App Development, AI Automation, SEO & Marketing and Brand Design services.",

    images: ["https://www.aetibar.in/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <AboutSection />
      <ServicesSection />
      <MethodologySection />
      <TestimonialsSection />
      <CtaSection />
      <BrandAnchorSection />
    </>
  );
}
