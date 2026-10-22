import React from "react";
import { Metadata } from "next";
import PerformanceMarketingClient from "./PerformanceMarketingClient";

export const metadata: Metadata = {
  title:
    "Paid Advertising Company in Udaipur | Google Ads & Meta Ads | Aetibar",

  description:
    "Aetibar provides paid advertising services in Udaipur, including Google Ads, Meta Ads, campaign management, audience targeting, conversion tracking, and performance optimization.",

  keywords: [
    "Paid Advertising Company in Udaipur",
    "Google Ads Agency in Udaipur",
    "PPC Company in Udaipur",
    "Meta Ads Management Udaipur",
    "Google Ads Management Udaipur",
    "Performance Marketing Udaipur",
    "Paid Advertising Services",
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
    canonical:
      "https://www.aetibar.in/services/performance-marketing-company-in-udaipur",
  },

  openGraph: {
    title:
      "Paid Advertising Company in Udaipur | Google Ads & Meta Ads | Aetibar",

    description:
      "Paid advertising services covering Google Ads, Meta Ads, campaign management, conversion tracking, and ongoing performance optimization.",

    url: "https://www.aetibar.in/services/performance-marketing-company-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Paid Advertising Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Paid Advertising Company in Udaipur | Google Ads & Meta Ads | Aetibar",

    description:
      "Google Ads and Meta advertising services focused on targeted campaigns, conversion tracking, and ongoing optimization.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Paid Advertising Company in Udaipur",
  serviceType: "Paid Advertising Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides paid advertising services in Udaipur, including Google Ads, Meta Ads, campaign management, audience and keyword targeting, negative keyword management, conversion tracking, and performance optimization.",
  url: "https://www.aetibar.in/services/performance-marketing-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};

export default function PerformanceMarketingServicePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PerformanceMarketingClient />
    </main>
  );
}

export { PerformanceMarketingServicePage as PaidAdvertisingServicePage };
