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
  title: "Aetibar | Full-Service Digital Agency: Branding, SEO, Paid Ads, Websites & AI",
  description:
    "Accelerate business growth with Aetibar. We deliver distinctive brand design, high-performance web storefronts, native mobile apps, organic search visibility, and intelligent workflow automation.",
  keywords: [
    "full service digital agency",
    "digital marketing company",
    "brand identity and logo design",
    "custom website creation",
    "e-commerce storefront development",
    "native iOS and Android apps",
    "search engine optimization",
    "local Google Maps ranking",
    "Google Ads PPC management",
    "Meta and Instagram campaigns",
    "social media brand strategy",
    "intelligent process automation",
    "CRM and lead capture systems",
    "commercial website solutions",
    "digital agency Udaipur",
    "Aetibar Technologies",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "Digital Marketing, Branding, Graphic Design, Web Development, Mobile Apps, AI Automation, SEO",
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
    title: "Aetibar | Full-Service Digital Agency: Branding, SEO, Paid Ads, Websites & AI",
    description:
      "Transform your commercial reach with Aetibar: authoritative branding, rapid web platforms, targeted search ads, and smart workflow tools engineered for tangible ROI.",
    url: "https://www.aetibar.in/",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Full-Service Digital Agency: Branding, Websites, Marketing & AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetibar | Full-Service Digital Agency: Branding, SEO, Paid Ads, Websites & AI",
    description:
      "Transform your commercial reach with Aetibar: authoritative branding, rapid web platforms, targeted search ads, and smart workflow tools engineered for tangible ROI.",
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
        "Full-service digital agency helping businesses grow through graphic design & branding, fast websites, mobile apps, page-1 Google SEO, targeted paid ads, and practical AI workflow automation.",
      "publisher": {
        "@id": "https://www.aetibar.in/#organization",
      },
      "inLanguage": "en-IN",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.aetibar.in/#organization",
      "name": "Aetibar Technologies",
      "url": "https://www.aetibar.in/",
      "logo": "https://www.aetibar.in/logo.jpeg",
      "image": "https://www.aetibar.in/logo.jpeg",
      "description":
        "Aetibar helps businesses build strong brand trust, rank high on Google, win more customers through targeted paid ads and high-converting websites, and automate daily repetitive office tasks with AI.",
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
        "name": "Aetibar Complete Digital Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Graphic Design & Brand Identity",
              "description":
                "Professional logo design, brand color palettes, social media templates, brochures, and UI/UX design that build instant customer trust.",
              "url": "https://www.aetibar.in/services/social-media-marketing-company-in-udaipur",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Development",
              "description":
                "Fast, mobile-friendly business websites and e-commerce stores designed with direct WhatsApp and call buttons to convert visitors into inquiries.",
              "url": "https://www.aetibar.in/services/web-development-company-in-udaipur",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development",
              "description":
                "Custom iPhone and Android mobile apps for bookings, customer accounts, orders, and smooth team operations.",
              "url": "https://www.aetibar.in/services/app-development-company-in-udaipur",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO & Google Search Rankings",
              "description":
                "Local SEO and Google ranking optimization to attract high-intent buyers actively searching for your services without paying for every click.",
              "url": "https://www.aetibar.in/services/seo-company-in-udaipur",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Targeted Paid Advertising",
              "description":
                "High-ROI Google Search Ads and Meta (Instagram/Facebook) campaigns focused on verified customer calls and direct WhatsApp leads.",
              "url": "https://www.aetibar.in/services/paid-advertising-company-in-udaipur",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing & Management",
              "description":
                "Monthly content planning, branded graphic posts, customer engagement, and trust building on Instagram, Facebook, and LinkedIn.",
              "url": "https://www.aetibar.in/services/social-media-marketing-company-in-udaipur",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Smart Workflow Automation",
              "description":
                "Practical automated tools connecting WhatsApp, email, and spreadsheets to eliminate repetitive office busywork and save 10+ hours weekly.",
              "url": "https://www.aetibar.in/services/ai-automation-company-in-udaipur",
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
