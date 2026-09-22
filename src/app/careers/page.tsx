import React from "react";
import { Metadata } from "next";
import CareersHeroSection from "../../components/careers/CareersHeroSection";
import PerksSection from "../../components/careers/PerksSection";
import OpeningsSection from "../../components/careers/OpeningsSection";
import CtaSection from "../../components/home/CtaSection";

export const metadata: Metadata = {
  title: "Careers at Aetibar | Web Development, App Engineering & Marketing Roles in Udaipur",
  description:
    "Join Aetibar in Udaipur, Rajasthan. We're hiring thoughtful engineers, web developers, mobile app developers, UI/UX designers, and digital marketers.",
  keywords: [
    "Aetibar careers",
    "web developer jobs in Udaipur",
    "mobile app developer jobs",
    "digital marketing careers Udaipur",
    "software engineering jobs Rajasthan",
    "front end developer jobs",
    "tech jobs Udaipur",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "careers",
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
    canonical: "https://www.aetibar.in/careers",
  },
  openGraph: {
    title: "Careers at Aetibar | Web Development & Engineering in Udaipur",
    description:
      "Join our engineering studio in Udaipur. Explore open positions in web development, mobile apps, and digital growth.",
    url: "https://www.aetibar.in/careers",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Careers at Aetibar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Aetibar | Engineering & Digital Marketing in Udaipur",
    description:
      "Join our team in Udaipur. Explore career opportunities in web development, mobile apps, and digital growth.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

export default function CareersPage() {
  return (
    <main>
      <CareersHeroSection />
      <PerksSection />
      <OpeningsSection />
      <CtaSection />
    </main>
  );
}
