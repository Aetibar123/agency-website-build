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
    "DTC Brand Growth Strategy",
    "Customer Retention Marketing",
    "Lifecycle Marketing Automation",
    "Email Marketing Case Study",
    "SMS Marketing Automation",
    "E-Commerce Retention Strategy",
    "Digital Marketing Case Study",
    "Customer Lifetime Value Optimization",
    "Aetibar Work",
    "Aetibar Case Study",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/portfolio/dtc-brand-scaling",
  },

  openGraph: {
    title: "DTC Customer Retention & Growth Strategy | Aetibar",
    description:
      "Lifecycle marketing and behavioral automation framework that boosted repeat purchases and maximized customer lifetime value.",
    url: "https://www.aetibar.in/portfolio/dtc-brand-scaling",
    siteName: "Aetibar",
    type: "website",
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
};

export default function Page() {
  const project = getProjectBySlug("dtc-brand-scaling");
  if (!project) {
    notFound();
  }

  return (
    <>
      <PortfolioBackButton />
      <PortfolioDetailClient project={project} />
    </>
  );
}
