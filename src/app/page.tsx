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
  title: "Aetibar | Web Development, Mobile App Development & Digital Marketing in Udaipur",
  description:
    "Aetibar is a technology company based in Udaipur, India. We deliver custom web development, mobile app development, digital marketing, and business software solutions designed around how your business actually runs.",
  keywords: [
    "web development",
    "mobile app development",
    "digital marketing",
    "web development company in Udaipur",
    "mobile app development company",
    "digital marketing agency in Udaipur",
    "custom software development",
    "website development India",
    "search engine optimization",
    "SEO services Udaipur",
    "web application development",
    "custom business software",
    "AI automation for business",
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
    canonical: "https://www.aetibar.in/",
  },
  openGraph: {
    title: "Aetibar | Web Development, Mobile App Development & Digital Marketing in Udaipur",
    description:
      "Aetibar is a technology company based in Udaipur, India. We deliver custom web development, mobile app development, digital marketing, and business software solutions designed around how your business actually runs.",
    url: "https://www.aetibar.in/",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Web Development, Mobile Apps & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetibar | Web Development, Mobile App Development & Digital Marketing in Udaipur",
    description:
      "Aetibar is a technology company based in Udaipur, India. We deliver custom web development, mobile app development, digital marketing, and business software solutions designed around how your business actually runs.",
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

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.aetibar.in/#website",
      "url": "https://www.aetibar.in/",
      "name": "Aetibar",
      "description":
        "Technology company delivering custom web development, mobile app development, digital marketing, and business software in Udaipur, India.",
      "publisher": {
        "@id": "https://www.aetibar.in/#organization",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.aetibar.in/#organization",
      "name": "Aetibar",
      "url": "https://www.aetibar.in/",
      "logo": "https://www.aetibar.in/logo.jpeg",
      "image": "https://www.aetibar.in/logo.jpeg",
      "description":
        "Aetibar is a technology and digital solutions company based in Udaipur, India, providing custom web development, mobile app development, digital marketing, SEO, and business software.",
      "telephone": "+91-XXXXXXXXXX",
      "email": "hello.aetibar@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Udaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.5854,
        "longitude": 73.7125,
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Rajasthan",
        },
        {
          "@type": "Country",
          "name": "India",
        },
        {
          "@type": "Place",
          "name": "Worldwide",
        },
      ],
      "sameAs": [
        "https://www.linkedin.com/company/aetibar",
        "https://www.instagram.com/aetibar_information/",
        "https://x.com/Aetibar_",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Core Technology & Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description":
                "Custom websites, web applications, and eCommerce platforms built for fast loading and organic search visibility.",
              "url": "https://www.aetibar.in/services/web-development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development",
              "description":
                "Cross-platform iOS and Android mobile applications built for responsive performance and offline reliability.",
              "url": "https://www.aetibar.in/services/mobile-app-development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Marketing",
              "description":
                "Targeted search advertising, conversion optimization, and performance marketing to generate qualified customer inquiries.",
              "url": "https://www.aetibar.in/services/digital-marketing",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Engine Optimization (SEO)",
              "description":
                "Technical SEO audits, speed optimizations, and structured schema markup to improve organic rankings.",
              "url": "https://www.aetibar.in/services/search-engine-optimization",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Business Software",
              "description":
                "Custom internal tools, dashboards, and database software designed around your actual business operations.",
              "url": "https://www.aetibar.in/solutions/custom-business-software",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Practical AI & Automation",
              "description":
                "Document data extraction, customer inquiry routing, and automated business workflows with human review safeguards.",
              "url": "https://www.aetibar.in/solutions/ai-automation",
            },
          },
        ],
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      {/* Schema.org Structured Data for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema),
        }}
      />

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
