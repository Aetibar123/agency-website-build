import React from "react";
import { Metadata } from "next";
import SolutionsHubClient from "../../components/solutions/SolutionsHubClient";

export const metadata: Metadata = {
  title: "Solutions | Purpose-Built Digital Systems & Workflows | Aetibar",
  description:
    "Explore Aetibar's 4 core solution domains: High-performance business websites, unified customer & lead pipelines, custom internal operational tools, and practical AI automation.",
  keywords: [
    "Business workflow solutions",
    "Custom business websites",
    "Customer and lead systems",
    "Internal operational tools",
    "Practical AI automation",
    "Next.js web platforms",
    "Digital problem solving",
    "Aetibar Technologies",
  ],
  alternates: {
    canonical: "https://www.aetibar.in/solutions",
  },
  openGraph: {
    title: "Solutions | Purpose-Built Digital Systems & Workflows | Aetibar",
    description:
      "Different business problems need different digital systems. Aetibar engineers custom business websites, customer pipelines, internal operational tools, and practical automation.",
    url: "https://www.aetibar.in/solutions",
    siteName: "Aetibar",
    type: "website",
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
    title: "Solutions | Purpose-Built Digital Systems & Workflows | Aetibar",
    description:
      "Different business problems need different digital systems. Aetibar engineers custom business websites, customer pipelines, internal operational tools, and practical automation.",
    images: ["https://www.aetibar.in/logo.jpeg"],
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
