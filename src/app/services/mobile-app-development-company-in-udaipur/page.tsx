import React from "react";
import { Metadata } from "next";
import MobileDevelopmentClient from "./MobileDevelopmentClient";

export const metadata: Metadata = {
  title:
    "App Development Company in Udaipur | Mobile App Development | Aetibar",

  description:
    "Aetibar provides app development services in Udaipur, including custom iOS and Android apps, cross-platform development, field operations tools, and customer-facing mobile applications.",

  keywords: [
    "App Development Company in Udaipur",
    "Mobile App Development Company in Udaipur",
    "Android App Development Udaipur",
    "iOS App Development Udaipur",
    "Cross-Platform App Development Udaipur",
    "Custom Mobile App Development Udaipur",
    "Mobile App Development Services",
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
      "https://www.aetibar.in/services/mobile-app-development-company-in-udaipur",
  },

  openGraph: {
    title:
      "App Development Company in Udaipur | Mobile App Development | Aetibar",

    description:
      "Custom iOS and Android app development for customer-facing products, field operations, and business workflows.",

    url: "https://www.aetibar.in/services/mobile-app-development-company-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - App Development Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "App Development Company in Udaipur | Mobile App Development | Aetibar",

    description:
      "Custom iOS and Android mobile apps designed around your customers, teams, and business workflows.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "App Development Company in Udaipur",
  serviceType: "Mobile App Development Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides custom mobile app development services in Udaipur, including iOS and Android applications, cross-platform development, field operations tools, customer-facing apps, and business software integrations.",
  url: "https://www.aetibar.in/services/mobile-app-development-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};

export default function AppDevelopmentServicePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <MobileDevelopmentClient />
    </main>
  );
}
