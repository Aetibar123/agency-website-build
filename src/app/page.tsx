import React from "react";
import { Metadata } from "next";
import HomeHero from "../components/home/HomeHero";
import HomeIntroduction from "../components/home/HomeIntroduction";
import HomeServices from "../components/home/HomeServices";
import HomeWork from "../components/home/HomeWork";
import HomeProcess from "../components/home/HomeProcess";
import HomeWhyAetibar from "../components/home/HomeWhyAetibar";
import HomeCtaSection from "../components/home/HomeCtaSection";

export const metadata: Metadata = {
  title: "Aetibar | AI, Web & Mobile App Development Company",
  description:
    "Aetibar builds high-performance websites, custom software, AI automation and digital systems designed around real business needs.",
  keywords: [
    "web development",
    "mobile app development",
    "AI automation",
    "digital marketing",
    "web development company",
    "custom web development",
    "website development services",
    "e-commerce website development",
    "mobile app development services",
    "AI automation services",
    "AI integration services",
    "SEO services",
    "search engine optimization",
    "social media marketing services",
    "Google ads management",
    "Meta ads management",
    "Aetibar",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "Web Development, Mobile App Development, AI Automation, Digital Marketing",
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
    title: "Aetibar | Websites, Apps, AI & Digital Marketing for Your Business",
    description:
      "We help businesses build websites and apps, use AI to simplify work, and reach more customers through digital marketing.",
    url: "https://www.aetibar.in/",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Websites, Apps, AI & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetibar | Websites, Apps, AI & Digital Marketing for Your Business",
    description:
      "We help businesses build websites and apps, use AI to simplify work, and reach more customers through digital marketing.",
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
        "We help businesses build websites and apps, use AI to simplify work, and reach more customers through digital marketing.",
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
        "Aetibar helps businesses build websites and apps, use AI to simplify work, and reach more customers through digital marketing.",
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
        "name": "Aetibar Digital Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description":
                "Business websites, e-commerce websites, and custom web applications.",
              "url": "https://www.aetibar.in/services/web-development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "App Development",
              "description":
                "Mobile applications designed around business needs and user requirements.",
              "url": "https://www.aetibar.in/services/app-development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Automation & Integration",
              "description":
                "AI features, workflow automation, and integration with existing business systems where useful.",
              "url": "https://www.aetibar.in/services/ai-automation",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Services",
              "description":
                "Search engine optimization to improve website visibility and organic reach.",
              "url": "https://www.aetibar.in/services/seo",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing",
              "description":
                "Social media management, content planning, and marketing support.",
              "url": "https://www.aetibar.in/services/social-media-marketing",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paid Advertising",
              "description":
                "Google Ads, Meta Ads, campaign management, and performance tracking.",
              "url": "https://www.aetibar.in/services/paid-advertising",
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

      {/* Section 1: Hero */}
      <HomeHero />

      {/* Section 2: Introduction */}
      <HomeIntroduction />

      {/* Section 3: Services */}
      <HomeServices />

      {/* Section 4: Our Work */}
      <HomeWork />

      {/* Section 5: How We Work */}
      <HomeProcess />

      {/* Section 6: Why Aetibar */}
      <HomeWhyAetibar />

      {/* Section 7: Final CTA */}
      <HomeCtaSection />
    </main>
  );
}
