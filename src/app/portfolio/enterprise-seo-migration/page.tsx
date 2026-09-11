import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../data/portfolioProjects";
import PortfolioDetailClient from "../../../components/portfolio/PortfolioDetailClient";
import PortfolioBackButton from "../../../components/portfolio/PortfolioBackButton";

export const metadata: Metadata = {
  title: {
    absolute: "Enterprise SEO Site Migration Case Study | SEO Services | Aetibar",
  },

  description:
    "Detailed case study on migrating a 500,000+ page news platform to Next.js SSR with zero organic traffic loss and an 18% traffic growth within 60 days.",

  keywords: [
    "Enterprise SEO Site Migration",
    "Large Scale SEO Migration",
    "Next.js SEO Migration",
    "301 Redirect Mapping SEO",
    "Core Web Vitals Optimization",
    "Technical SEO Case Study",
    "Organic Traffic Growth Case Study",
    "News Platform SEO Architecture",
    "Aetibar Work",
    "Aetibar Case Study",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/portfolio/enterprise-seo-migration",
  },

  openGraph: {
    title: "Enterprise SEO Site Migration Case Study | Aetibar",
    description:
      "Zero-loss migration of 500,000+ indexed pages to Next.js SSR, delivering 18% organic search traffic growth within 60 days.",
    url: "https://www.aetibar.in/portfolio/enterprise-seo-migration",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/images/portfolio/EnterpriseSeo.png",
        width: 1200,
        height: 630,
        alt: "Enterprise SEO Site Migration Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Enterprise SEO Site Migration Case Study | Aetibar",
    description:
      "Zero-loss migration of 500,000+ indexed pages to Next.js SSR, delivering 18% organic search traffic growth within 60 days.",
    images: ["https://www.aetibar.in/images/portfolio/EnterpriseSeo.png"],
  },
};

export default function Page() {
  const project = getProjectBySlug("enterprise-seo-migration");
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
