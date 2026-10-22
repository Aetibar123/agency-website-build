import React from "react";
import { Metadata } from "next";
import SocialMediaClient from "./SocialMediaClient";

export const metadata: Metadata = {
  title: "Social Media Marketing Company in Udaipur | SMM Agency | Aetibar",

  description:
    "Aetibar provides social media marketing services in Udaipur, including content planning, branded creatives, platform strategy, publishing, and performance reporting.",

  keywords: [
    "Social Media Marketing Company in Udaipur",
    "Social Media Marketing Agency in Udaipur",
    "Social Media Management Udaipur",
    "SMM Company in Udaipur",
    "Instagram Marketing Udaipur",
    "Facebook Marketing Udaipur",
    "LinkedIn Marketing Udaipur",
    "Social Media Marketing Services",
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
      "https://www.aetibar.in/services/social-media-marketing-service-in-udaipur",
  },

  openGraph: {
    title: "Social Media Marketing Company in Udaipur | SMM Agency | Aetibar",

    description:
      "Professional social media marketing covering content planning, branded visuals, platform-specific strategy, publishing, and performance reporting.",

    url: "https://www.aetibar.in/services/social-media-marketing-service-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Social Media Marketing Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Social Media Marketing Company in Udaipur | SMM Agency | Aetibar",

    description:
      "Social media marketing services covering content planning, branded creatives, platform strategy, publishing, and performance reporting.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media Marketing Company in Udaipur",
  serviceType: "Social Media Marketing Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides social media marketing services in Udaipur, including content planning, branded social media creatives, platform-specific content strategy, publishing, and performance reporting.",
  url: "https://www.aetibar.in/services/social-media-marketing-service-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};

export default function SocialMediaMarketingServicePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <SocialMediaClient />
    </main>
  );
}
