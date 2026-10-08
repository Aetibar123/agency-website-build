import React from "react";
import { Metadata } from "next";
import AboutPageClient from "../../components/about/AboutPageClient";
import HomeScrollProgress from "../../components/home/HomeScrollProgress";

export const metadata: Metadata = {
  title: "About Aetibar | Digital Services for Businesses",
  description:
    "Learn about Aetibar and our practical approach to web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation for businesses in India and beyond.",
  keywords: [
    "about Aetibar",
    "web development company in Udaipur",
    "digital marketing agency in Udaipur",
    "SEO company in Udaipur",
    "mobile app development company",
    "paid advertising agency",
    "social media marketing company",
    "AI automation company",
    "digital services for businesses",
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
    canonical: "https://www.aetibar.in/about",
  },
  openGraph: {
    title: "About Aetibar | Digital Services for Businesses",
    description:
      "Learn how Aetibar helps businesses with web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation.",
    url: "https://www.aetibar.in/about",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/images/home/editorial-craft-operations.jpg",
        width: 1200,
        height: 630,
        alt: "About Aetibar - Digital Services for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aetibar | Digital Services for Businesses",
    description:
      "Learn about Aetibar and our approach to web development, mobile apps, SEO, marketing, advertising, and AI automation.",
    creator: "@Aetibar_",
    images: [
      "https://www.aetibar.in/images/home/editorial-craft-operations.jpg",
    ],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    ICBM: "24.5854, 73.7125",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Aetibar",
  url: "https://www.aetibar.in/about",
  description:
    "Learn about Aetibar and our practical approach to web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation for businesses.",
  mainEntity: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
    logo: "https://www.aetibar.in/logo.jpeg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Paid Advertising",
      "AI Automation",
    ],
  },
};

export default function AboutPage() {
  return (
    <main>
      <HomeScrollProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <AboutPageClient />
    </main>
  );
}
