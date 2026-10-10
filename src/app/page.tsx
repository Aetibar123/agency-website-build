import React from "react";
import { Metadata } from "next";
import HomeHero from "../components/home/HomeHero";
import HomeIntroduction from "../components/home/HomeIntroduction";
import HomeServices from "../components/home/HomeServices";
import HomeWork from "../components/home/HomeWork";
import HomeProcess from "../components/home/HomeProcess";
import HomeWhyAetibar from "../components/home/HomeWhyAetibar";
import HomeCtaSection from "../components/home/HomeCtaSection";
import HomeScrollProgress from "../components/home/HomeScrollProgress";


export const metadata: Metadata = {
  title:
    "Aetibar | Digital marketing, AI Automation, Web & Mobile app Development Company in Udaipur",

  description:
    "Aetibar helps businesses grow with web development, mobile apps, SEO, digital marketing, and AI automation solutions in Udaipur. Build smarter, grow faster.",

  keywords: [
    // Core business terms
    "digital agency",
    "digital solutions company",
    "digital services for businesses",
    "business technology solutions",
    "digital marketing company",
    "digital marketing agency",
    "full service digital agency",
    "digital agency in India",

    // Web development
    "web development",
    "website development",
    "web development company",
    "custom web development",
    "custom website development",
    "business website development",
    "business website design",
    "professional business websites",
    "ecommerce website development",
    "online store development",
    "custom web applications",
    "business web applications",
    "website development company in Udaipur",
    "web development company in Udaipur",

    // Mobile app development
    "mobile app development",
    "mobile application development",
    "app development company",
    "iOS app development",
    "Android app development",
    "iPhone app development",
    "Android application development",
    "custom mobile apps",
    "business mobile applications",
    "customer apps",
    "field service apps",
    "mobile app development company in Udaipur",
    "app development company in Udaipur",

    // SEO
    "SEO",
    "search engine optimization",
    "SEO services",
    "SEO company",
    "SEO agency",
    "local SEO",
    "local search optimization",
    "Google Business Profile optimization",
    "Google Maps SEO",
    "on page SEO",
    "technical SEO",
    "keyword research",
    "SEO content",
    "organic search visibility",
    "search visibility",
    "SEO company in Udaipur",

    // Social media marketing
    "social media marketing",
    "social media marketing services",
    "social media management",
    "social media agency",
    "social media marketing company",
    "Instagram marketing",
    "Facebook marketing",
    "LinkedIn marketing",
    "social media content",
    "social media content planning",
    "social media management services",
    "social media marketing company in Udaipur",

    // Paid advertising
    "paid advertising",
    "paid advertising company",
    "online advertising",
    "digital advertising",
    "Google Ads",
    "Google Ads management",
    "Google Search Ads",
    "Google PPC",
    "PPC advertising",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "Meta advertising",
    "paid search advertising",
    "conversion tracking",
    "Google Ads company in Udaipur",
    "paid advertising company in Udaipur",

    // AI automation
    "AI automation",
    "AI automation company",
    "AI automation services",
    "business automation",
    "workflow automation",
    "AI workflow automation",
    "business process automation",
    "automated business workflows",
    "AI integration",
    "AI business solutions",
    "CRM automation",
    "lead automation",
    "WhatsApp automation",
    "email automation",
    "Google Sheets automation",
    "AI customer support",
    "AI automation company in Udaipur",

    // Business-intent / semantic keywords
    "custom software solutions",
    "business software solutions",
    "digital solutions for small businesses",
    "digital solutions for local businesses",
    "online business solutions",
    "customer enquiry systems",
    "lead management systems",
    "business workflow solutions",
    "software integrations",
    "business process automation",

    // Local intent
    "digital agency Udaipur",
    "digital marketing agency Udaipur",
    "digital marketing company Udaipur",
    "web development Udaipur",
    "website development Udaipur",
    "SEO agency Udaipur",
    "SEO services Udaipur",
    "social media marketing Udaipur",
    "Google Ads agency Udaipur",
    "Meta Ads agency Udaipur",
    "AI automation Udaipur",
    "app development Udaipur",
    "mobile app development Udaipur",
    "software development Udaipur",
    "technology company Udaipur",
    "digital services Udaipur",
    "digital agency Rajasthan",
    "digital marketing Rajasthan",
    "web development Rajasthan",
    "SEO services Rajasthan",
    "AI automation Rajasthan",
  ],

  authors: [
    {
      name: "Aetibar",
      url: "https://www.aetibar.in",
    },
  ],

  creator: "Aetibar",
  publisher: "Aetibar",
  category: "technology",

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
    title:
      "Aetibar | Web Development, SEO, Digital Marketing & AI Automation in Udaipur",

    description:
      "Websites, mobile apps, SEO, social media marketing, Google & Meta advertising, and AI automation for businesses. Practical digital services built around your business needs.",

    url: "https://www.aetibar.in/",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt:
          "Aetibar - Web Development, Mobile Apps, SEO, Digital Marketing, Advertising and AI Automation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Aetibar | Web Development, SEO, Digital Marketing & AI Automation in Udaipur",

    description:
      "Practical websites, mobile apps, SEO, social media marketing, paid advertising, and AI automation for businesses.",

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




const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.aetibar.in/#website",
      "url": "https://www.aetibar.in/",
      "name": "Aetibar",
      "description":
        "Aetibar helps businesses with web development, mobile app development, SEO, social media marketing, paid advertising, and practical AI automation.",
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
        "Aetibar helps businesses build and improve their digital presence through websites, mobile apps, search engine optimization, social media marketing, paid advertising, and AI-powered business automation.",
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
      ],

      "sameAs": [
        "https://www.linkedin.com/company/aetibar",
        "https://www.instagram.com/aetibar_information/",
        "https://x.com/Aetibar_",
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Aetibar Digital Services",

        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description":
                "Business websites, online stores, and custom web applications built around your business requirements.",
              "url":
                "https://www.aetibar.in/services/web-development-company-in-udaipur",
            },
          },

          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development",
              "description":
                "Custom iOS and Android applications for customer services, bookings, orders, field teams, and business workflows.",
              "url":
                "https://www.aetibar.in/services/mobile-app-development-company-in-udaipur",
            },
          },

          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Engine Optimization",
              "description":
                "Technical SEO, on-page optimization, keyword research, local SEO, Google Business Profile optimization, and useful content to improve search visibility.",
              "url":
                "https://www.aetibar.in/services/seo-company-in-udaipur",
            },
          },

          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paid Advertising",
              "description":
                "Targeted Google Ads and Meta advertising campaigns with audience and keyword targeting, conversion tracking, ongoing optimization, and performance reporting.",
              "url":
                "https://www.aetibar.in/services/paid-advertising-company-in-udaipur",
            },
          },

          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing",
              "description":
                "Social media content planning, branded posts, captions, publishing, and performance reporting for platforms such as Instagram, Facebook, and LinkedIn.",
              "url":
                "https://www.aetibar.in/services/social-media-marketing-company-in-udaipur",
            },
          },

          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Automation",
              "description":
                "Practical business automation that connects tools such as WhatsApp, email, spreadsheets, CRMs, and other software to reduce repetitive manual work.",
              "url":
                "https://www.aetibar.in/services/ai-automation-company-in-udaipur",
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
      {/* High-Performance Sunset Scroll Progress Bar */}
      <HomeScrollProgress />

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
