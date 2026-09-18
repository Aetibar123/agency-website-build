import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../data/portfolioProjects";
import PortfolioDetailClient from "../../../components/portfolio/PortfolioDetailClient";
import PortfolioBackButton from "../../../components/portfolio/PortfolioBackButton";

export const metadata: Metadata = {
  title: {
    absolute: "AI Customer Support Automation Platform Case Study | AI Automation | Aetibar",
  },

  description:
    "Learn how Aetibar developed an enterprise AI customer support automation platform using RAG architecture to automate 70%+ of customer requests.",

  keywords: [
    "AI Automation",
    "Web Development",
    "AI Customer Support Automation",
    "AI Support Platform Development",
    "RAG AI Architecture",
    "Customer Service AI Automation",
    "Enterprise AI Solutions",
    "AI Agent Development Case Study",
    "AI Automation Case Study",
    "Intelligent Process Automation",
    "Custom Software Engineering",
    "Aetibar Work",
    "Aetibar Case Study",
  ],

  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "AI Automation Case Study",
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
    canonical: "https://www.aetibar.in/portfolio/ai-customer-support",
  },

  openGraph: {
    title: "AI Customer Support Automation Case Study | Aetibar",
    description:
      "Enterprise RAG AI support platform that cut response times to under 5 seconds and automated 70%+ of routine support requests.",
    url: "https://www.aetibar.in/portfolio/ai-customer-support",
    siteName: "Aetibar",
    type: "article",
    images: [
      {
        url: "https://www.aetibar.in/images/portfolio/aiCostomer.png",
        width: 1200,
        height: 630,
        alt: "AI Customer Support Automation Platform Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Customer Support Automation Case Study | Aetibar",
    description:
      "Enterprise RAG AI support platform that cut response times to under 5 seconds and automated 70%+ of routine support requests.",
    images: ["https://www.aetibar.in/images/portfolio/aiCostomer.png"],
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
  headline: "AI Customer Support Automation Platform Case Study",
  description:
    "How Aetibar developed an enterprise AI customer support automation platform using RAG architecture to automate 70%+ of customer requests.",
  image: "https://www.aetibar.in/images/portfolio/aiCostomer.png",
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
    "@id": "https://www.aetibar.in/portfolio/ai-customer-support",
  },
};

export default function Page() {
  const project = getProjectBySlug("ai-customer-support");
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
