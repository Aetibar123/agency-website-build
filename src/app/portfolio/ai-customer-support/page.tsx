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
    "AI Customer Support Automation",
    "AI Support Platform Development",
    "RAG AI Architecture",
    "Customer Service AI Automation",
    "Enterprise AI Solutions",
    "AI Agent Development Case Study",
    "AI Automation Case Study",
    "Intelligent Process Automation",
    "Aetibar Work",
    "Aetibar Case Study",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/portfolio/ai-customer-support",
  },

  openGraph: {
    title: "AI Customer Support Automation Case Study | Aetibar",
    description:
      "Enterprise RAG AI support platform that cut response times to under 5 seconds and automated 70%+ of routine support requests.",
    url: "https://www.aetibar.in/portfolio/ai-customer-support",
    siteName: "Aetibar",
    type: "website",
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
};

export default function Page() {
  const project = getProjectBySlug("ai-customer-support");
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
