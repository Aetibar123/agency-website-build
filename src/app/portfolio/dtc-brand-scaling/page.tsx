import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../data/portfolioProjects";
import PortfolioDetailClient from "../../../components/portfolio/PortfolioDetailClient";
import PortfolioBackButton from "../../../components/portfolio/PortfolioBackButton";

export const metadata: Metadata = {
  title: {
    absolute: "DTC Brand Customer Retention & Growth Case Study | Digital Marketing | Aetibar",
  },

  description:
    "Case study on how Aetibar engineered a high-converting customer retention, email marketing, and lifecycle automation strategy for DTC skincare brand Aura Skincare.",

  keywords: [
    "Digital Marketing",
    "Digital Marketing Case Study",
    "DTC Brand Growth Strategy",
    "Customer Retention Marketing",
    "Lifecycle Marketing Automation",
    "Email Marketing Case Study",
    "SMS Marketing Automation",
    "E-Commerce Retention Strategy",
    "Customer Lifetime Value Optimization",
    "Web Development",
    "Aetibar Work",
    "Aetibar Case Study",
  ],

  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "marketing",
  classification: "Digital Marketing Case Study",
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
    canonical: "https://www.aetibar.in/portfolio/dtc-brand-scaling",
  },

  openGraph: {
    title: "DTC Customer Retention & Growth Strategy | Aetibar",
    description:
      "Lifecycle marketing and behavioral automation framework that boosted repeat purchases and maximized customer lifetime value.",
    url: "https://www.aetibar.in/portfolio/dtc-brand-scaling",
    siteName: "Aetibar",
    type: "article",
    images: [
      {
        url: "https://www.aetibar.in/images/portfolio/dtc.png",
        width: 1200,
        height: 630,
        alt: "DTC Customer Retention & Growth Strategy Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DTC Customer Retention & Growth Strategy | Aetibar",
    description:
      "Lifecycle marketing and behavioral automation framework that boosted repeat purchases and maximized customer lifetime value.",
    images: ["https://www.aetibar.in/images/portfolio/dtc.png"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DTC Brand Customer Retention & Growth Case Study",
  description:
    "How Aetibar engineered a high-converting customer retention, email marketing, and lifecycle automation strategy for DTC skincare brand Aura Skincare.",
  image: "https://www.aetibar.in/images/portfolio/dtc.png",
  author: {
    "@type": "Organization",
    name: "Aetibar Technologies",
    url: "https://www.aetibar.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Aetibar",
    logo: {
      "@type": "ImageObject",
      url: "https://www.aetibar.in/logo.jpeg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.aetibar.in/portfolio/dtc-brand-scaling",
  },
};

export default function Page() {
  const project = getProjectBySlug("dtc-brand-scaling");
  if (!project) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema),
        }}
      />
      <PortfolioBackButton />
      <PortfolioDetailClient project={project} />
    </>
  );
}
