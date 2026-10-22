import React from "react";
import { Metadata } from "next";
import SeoClient from "./SeoClient";

export const metadata: Metadata = {
  title:
    "SEO Company in Udaipur | Search Engine Optimization Services | Aetibar",

  description:
    "Aetibar provides SEO services in Udaipur to improve search visibility, organic traffic, local search presence, and website performance through practical search engine optimization.",

  keywords: [
    "SEO Company in Udaipur",
    "SEO Services in Udaipur",
    "Search Engine Optimization Udaipur",
    "Local SEO Udaipur",
    "Technical SEO Udaipur",
    "On-Page SEO Udaipur",
    "Google Business Profile Optimization Udaipur",
    "SEO Agency in Udaipur",
    "Search Engine Optimization Services",
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
    canonical: "https://www.aetibar.in/services/seo-service-in-udaipur",
  },

  openGraph: {
    title:
      "SEO Company in Udaipur | Search Engine Optimization Services | Aetibar",

    description:
      "Improve your website's search visibility with practical SEO services covering technical SEO, keyword research, on-page optimization, local SEO, and content optimization.",

    url: "https://www.aetibar.in/services/seo-service-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - SEO Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "SEO Company in Udaipur | Search Engine Optimization Services | Aetibar",

    description:
      "Practical SEO services to improve search visibility, organic traffic, local search presence, and website performance.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Company in Udaipur",
  serviceType: "Search Engine Optimization Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides search engine optimization services in Udaipur, including technical SEO, on-page optimization, local SEO, Google Business Profile optimization, keyword research, and SEO content optimization.",
  url: "https://www.aetibar.in/services/seo-service-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};

export default function SeoServicePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SeoClient />
    </main>
  );
}
