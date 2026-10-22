import React from "react";
import { Metadata } from "next";
import AiAutomationClient from "./AiAutomationClient";

export const metadata: Metadata = {
  title: "AI Automation Company in Udaipur | Workflow Automation | Aetibar",

  description:
    "Aetibar provides AI automation services in Udaipur, helping businesses automate repetitive workflows, connect existing tools, process business data, and improve day-to-day operations.",

  keywords: [
    "AI Automation Company in Udaipur",
    "Business Process Automation Udaipur",
    "AI Workflow Automation Udaipur",
    "AI Integration Services Udaipur",
    "Lead Automation Udaipur",
    "AI Automation Agency Udaipur",
    "Workflow Automation Services",
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
      "https://www.aetibar.in/services/ai-automation-company-in-udaipur",
  },

  openGraph: {
    title: "AI Automation Company in Udaipur | Workflow Automation | Aetibar",

    description:
      "Practical AI automation and workflow integration services to reduce repetitive work, connect business tools, and improve everyday processes.",

    url: "https://www.aetibar.in/services/ai-automation-company-in-udaipur",

    siteName: "Aetibar",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar - AI Automation Company in Udaipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "AI Automation Company in Udaipur | Workflow Automation | Aetibar",

    description:
      "Practical AI automation and workflow integration services to reduce repetitive work and connect your existing business tools.",

    creator: "@Aetibar_",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation Company in Udaipur",
  serviceType: "AI Automation Services",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  description:
    "Aetibar provides AI automation services in Udaipur, including workflow automation, business process automation, AI-assisted tasks, document data extraction, and integrations between business software and everyday tools.",
  url: "https://www.aetibar.in/services/ai-automation-company-in-udaipur",
  areaServed: {
    "@type": "City",
    name: "Udaipur",
  },
};

export default function AiAutomationServicePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AiAutomationClient />
    </main>
  );
}
