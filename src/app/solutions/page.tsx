import React from "react";
import { Metadata } from "next";
import SolutionsHubClient from "../../components/solutions/SolutionsHubClient";

export const metadata: Metadata = {
  title: "Solutions | Web Development, CRM, Custom Software & AI | Aetibar",
  description:
    "Explore Aetibar's solution domains: Custom web development, CRM & lead systems, internal business software, and practical AI automation engineered in Udaipur, India.",
  keywords: [
    "web development solutions",
    "custom business software",
    "CRM and lead management",
    "internal business tools",
    "practical AI automation",
    "custom software development company Udaipur",
    "web application development",
    "Aetibar Technologies",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "Web Development, Mobile App Development, Digital Marketing",
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
    canonical: "https://www.aetibar.in/solutions",
  },
  openGraph: {
    title: "Solutions | Web Development, CRM, Custom Software & AI | Aetibar",
    description:
      "Aetibar engineers custom business websites, CRM lead pipelines, internal operational tools, and practical automation.",
    url: "https://www.aetibar.in/solutions",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions | Web Development, CRM, Custom Software & AI | Aetibar",
    description:
      "Aetibar engineers custom business websites, CRM lead pipelines, internal operational tools, and practical automation.",
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

export default function SolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Aetibar Solutions - Purpose-Built Digital Systems",
    description:
      "Explore Aetibar's 4 core solution domains: High-performance business websites, unified customer & lead pipelines, custom internal operational tools, and practical AI automation.",
    url: "https://www.aetibar.in/solutions",
    provider: {
      "@type": "Organization",
      name: "Aetibar",
      url: "https://www.aetibar.in",
      logo: "https://www.aetibar.in/logo.jpeg",
    },
    hasPart: [
      {
        "@type": "Service",
        name: "Custom Business Website Development",
        url: "https://www.aetibar.in/solutions/business-website-development",
        description:
          "Custom business websites engineered to attract customers, generate enquiries, and support operations.",
      },
      {
        "@type": "Service",
        name: "Custom CRM & Lead Management Systems",
        url: "https://www.aetibar.in/solutions/crm-lead-management",
        description:
          "Turn scattered inquiries across web, email, and WhatsApp into accountable revenue pipelines.",
      },
      {
        "@type": "Service",
        name: "Custom Business Software",
        url: "https://www.aetibar.in/solutions/custom-business-software",
        description:
          "Replace fragile spreadsheets with custom operational dashboards, dispatch systems, and workflow applications.",
      },
      {
        "@type": "Service",
        name: "AI & Practical Automation",
        url: "https://www.aetibar.in/solutions/ai-automation",
        description:
          "Targeted language models and webhook bridges where manual administrative friction drains hours.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SolutionsHubClient />
    </>
  );
}
