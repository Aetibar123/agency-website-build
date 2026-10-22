import React from "react";
import { Metadata } from "next";
import DigitalMarketingClient from "./DigitalMarketingClient";
import { workProjects } from "../../../data/workData";

export const metadata: Metadata = {
  title: "Digital Marketing Company in Udaipur | SEO, SMM & Paid Ads | Aetibar",

  description:
    "Aetibar provides digital marketing services in Udaipur, combining SEO, social media marketing, and Google & Meta advertising to help businesses improve online visibility and generate more enquiries.",

  keywords: [
    "Digital Marketing Company in Udaipur",
    "Digital Marketing Agency in Udaipur",
    "Digital Marketing Services in Udaipur",
    "SEO Company in Udaipur",
    "Social Media Marketing Agency Udaipur",
    "Google Ads Agency in Udaipur",
    "PPC Company in Udaipur",
  ],

  authors: [
    {
      name: "Aetibar Technologies",
      url: "https://www.aetibar.in",
    },
  ],

  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",

  alternates: {
    canonical:
      "https://www.aetibar.in/services/digital-marketing-company-in-udaipur",
  },

  openGraph: {
    title:
      "Digital Marketing Company in Udaipur | SEO, SMM & Paid Ads | Aetibar",

    description:
      "Build stronger online visibility with SEO, social media marketing, and Google & Meta advertising from Aetibar.",

    url: "https://www.aetibar.in/services/digital-marketing-company-in-udaipur",

    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Digital Marketing Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Marketing Company in Udaipur | SEO, SMM & Paid Ads | Aetibar",

    description:
      "SEO, social media marketing, and Google & Meta advertising to help businesses improve their online presence and reach more customers.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Company in Udaipur",
  serviceType: "Digital Marketing Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides digital marketing services in Udaipur, including search engine optimization, social media marketing, and paid advertising across Google and Meta.",
  url: "https://www.aetibar.in/services/digital-marketing-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Search Engine Optimization",
          url: "https://www.aetibar.in/services/seo-service-in-udaipur",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing",
          url: "https://www.aetibar.in/services/social-media-marketing-service-in-udaipur",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google & Meta Advertising",
          url: "https://www.aetibar.in/services/performance-marketing-company-in-udaipur",
        },
      },
    ],
  },
};

export default function DigitalMarketingServicePage() {
  const relevantProjects = workProjects.filter((p) =>
    [
      "local-seo-search-visibility",
      "google-ads-lead-generation",
      "social-media-organic-growth",
      "meta-ads-sales-campaign",
    ].includes(p.slug),
  );

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DigitalMarketingClient relevantProjects={relevantProjects} />
    </main>
  );
}
