import React from "react";
import { Metadata } from "next";
import HomeScrollProgress from "../../components/home/HomeScrollProgress";
import ServicesPageClient from "../../components/services/ServicesPageClient";


export const metadata: Metadata = {
  title:
    "Digital Services | Web Development, Marketing, SEO, Apps & AI | Aetibar",

  description:
    "Explore Aetibar's digital services for businesses, including web development, mobile app development, SEO, social media marketing, paid advertising, and AI automation.",

  keywords: [
    "Digital Services for Businesses",
    "Web Development Services",
    "Mobile App Development Services",
    "SEO Services",
    "Social Media Marketing Services",
    "Paid Advertising Services",
    "AI Automation Services",
    "Business Workflow Automation",
    "Web Development Company in Udaipur",
    "Mobile App Development Company in Udaipur",
    "SEO Company in Udaipur",
    "Social Media Marketing Company in Udaipur",
    "Paid Advertising Company in Udaipur",
    "AI Automation Company in Udaipur",
  ],

  authors: [
    {
      name: "Aetibar",
      url: "https://www.aetibar.in",
    },
  ],

  creator: "Aetibar",
  publisher: "Aetibar",

  alternates: {
    canonical: "https://www.aetibar.in/services",
  },

  openGraph: {
    title:
      "Digital Services | Web Development, Marketing, SEO, Apps & AI | Aetibar",

    description:
      "Explore Aetibar's digital services for businesses, covering web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation.",

    url: "https://www.aetibar.in/services",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Digital Services for Businesses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Services | Web Development, Marketing, SEO, Apps & AI | Aetibar",

    description:
      "Explore Aetibar's web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation services.",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};




const servicesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.aetibar.in/services#webpage",
      "url": "https://www.aetibar.in/services",
      "name":
        "Digital Services | Web Development, Marketing, SEO, Apps & AI Automation | Aetibar",
      "description":
        "Explore Aetibar's digital services, including web development, mobile app development, SEO, social media marketing, paid advertising, and AI automation for businesses.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.aetibar.in/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.aetibar.in/services",
          },
        ],
      },
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.aetibar.in/#website",
        "url": "https://www.aetibar.in/",
        "name": "Aetibar",
      },
    },

    {
      "@type": "ProfessionalService",
      "@id": "https://www.aetibar.in/#organization",
      "name": "Aetibar",
      "url": "https://www.aetibar.in/",
      "logo": "https://www.aetibar.in/logo.jpeg",
      "image": "https://www.aetibar.in/logo.jpeg",
      "description":
        "Aetibar helps businesses build websites and mobile applications, improve their search and social media presence, manage paid advertising, and automate repetitive business workflows with AI and software integrations.",
      "email": "hello.aetibar@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Udaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Aetibar Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing",
              "description":
                "Social media content planning, branded creatives, platform-specific content strategy, publishing, and performance reporting.",
              "url":
                "https://www.aetibar.in/services/social-media-marketing-company-in-udaipur",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Search Engine Optimization",
              "description":
                "Technical SEO, keyword research, on-page optimization, local SEO, Google Business Profile optimization, and SEO content optimization.",
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
                "Google Ads and Meta Ads campaign management covering audience and keyword targeting, conversion tracking, budget management, and ongoing optimization.",
              "url":
                "https://www.aetibar.in/services/paid-advertising-company-in-udaipur",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description":
                "Custom business websites, e-commerce websites, client portals, booking dashboards, website redesigns, and SEO-ready web development.",
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
                "Custom iOS and Android applications, cross-platform mobile development, field operations tools, customer-facing apps, and business software integrations.",
              "url":
                "https://www.aetibar.in/services/mobile-app-development-company-in-udaipur",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Automation",
              "description":
                "Workflow automation, AI-assisted business processes, document data extraction, lead workflows, and integrations between business software and everyday tools.",
              "url":
                "https://www.aetibar.in/services/ai-automation-company-in-udaipur",
            },
          },
        ],
      },
    },
  ],
};



export default function ServicesPage() {
  return (
    <main>
      {/* High-Performance Sunset Scroll Progress Bar */}
      <HomeScrollProgress />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesPageSchema),
        }}
      />

      {/* Main Animated Client Content */}
      <ServicesPageClient />
    </main>
  );
}
