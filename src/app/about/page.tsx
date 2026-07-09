import React from "react";
import { Metadata } from "next";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import MissionSection from "../../components/about/MissionSection";
import TeamSection from "../../components/about/TeamSection";
import CtaSection from "../../components/home/CtaSection";

export const metadata: Metadata = {
  title: "About Aetibar | Web Development & Digital Marketing Company",
  description:
    "Learn about Aetibar, a trusted web development and digital marketing company in Udaipur specializing in Web Development, Mobile App Development, AI Automations, SEO & Marketing, and Brand Design.",

  keywords: [
    "About Aetibar",
    "Web Development Company",
    "Web Development Company in Udaipur",
    "Website Development Company",
    "Mobile App Development",
    "AI Automations",
    "SEO & Marketing",
    "Digital Marketing Company in Udaipur",
    "Brand Design",
    "Aetibar",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/about",
  },

  openGraph: {
    title: "About Aetibar | Web Development & Digital Marketing Company",
    description:
      "Discover Aetibar's expertise in Web Development, Mobile App Development, AI Automations, SEO & Marketing, and Brand Design.",
    url: "https://www.aetibar.in/about",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Aetibar",
    description:
      "Learn more about Aetibar and our digital solutions for businesses.",
    images: ["/logo.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}
