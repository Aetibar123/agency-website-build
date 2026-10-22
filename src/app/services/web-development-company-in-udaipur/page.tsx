import React from "react";
import { Metadata } from "next";
import WebDevelopmentClient from "./WebDevelopmentClient";

export const metadata: Metadata = {
  title: "Web Development Company in Udaipur | Custom Websites | Aetibar",

  description:
    "Aetibar provides web development services in Udaipur, including custom business websites, e-commerce stores, client portals, web applications, and website redesigns.",

  keywords: [
    "Web Development Company in Udaipur",
    "Website Development Company in Udaipur",
    "Web Design Company in Udaipur",
    "Custom Web Development Udaipur",
    "E-commerce Website Development Udaipur",
    "Web Application Development Udaipur",
    "Website Redesign Udaipur",
    "Web Development Services",
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
      "https://www.aetibar.in/services/web-development-company-in-udaipur",
  },

  openGraph: {
    title: "Web Development Company in Udaipur | Custom Websites | Aetibar",

    description:
      "Custom web development for business websites, e-commerce stores, client portals, web applications, and website redesigns.",

    url: "https://www.aetibar.in/services/web-development-company-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Web Development Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Web Development Company in Udaipur | Custom Websites | Aetibar",

    description:
      "Custom websites, e-commerce stores, web applications, and business portals built around your requirements.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Company in Udaipur",
  serviceType: "Web Development Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides web development services in Udaipur, including custom business websites, e-commerce websites, client portals, booking dashboards, website redesigns, and SEO-ready website development.",
  url: "https://www.aetibar.in/services/web-development-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};

export default function WebDevelopmentServicePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WebDevelopmentClient />
    </main>
  );
}
