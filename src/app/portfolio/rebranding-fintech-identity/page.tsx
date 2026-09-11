import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../data/portfolioProjects";
import PortfolioDetailClient from "../../../components/portfolio/PortfolioDetailClient";
import PortfolioBackButton from "../../../components/portfolio/PortfolioBackButton";

export const metadata: Metadata = {
  title: {
    absolute: "Fintech Brand Identity & Design System Case Study | Graphic Design | Aetibar",
  },

  description:
    "How Aetibar built a modern brand identity, scalable Figma design system, and multi-channel creative system for fintech platform Vault Finance, boosting conversions by 24%.",

  keywords: [
    "Fintech Brand Identity",
    "Design System Development",
    "Corporate Rebranding Case Study",
    "Graphic Design Case Study",
    "Figma Design System Case Study",
    "Visual Identity Design",
    "Fintech UI UX Design",
    "Brand Strategy & Design",
    "Aetibar Work",
    "Aetibar Case Study",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/portfolio/rebranding-fintech-identity",
  },

  openGraph: {
    title: "Modern Brand Identity & Design System Case Study | Aetibar",
    description:
      "Complete fintech visual identity and reusable design system that cut UI development time by 40% and boosted conversions by 24%.",
    url: "https://www.aetibar.in/portfolio/rebranding-fintech-identity",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/images/portfolio/rebrand.png",
        width: 1200,
        height: 630,
        alt: "Modern Brand Identity and Design System Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modern Brand Identity & Design System Case Study | Aetibar",
    description:
      "Complete fintech visual identity and reusable design system that cut UI development time by 40% and boosted conversions by 24%.",
    images: ["https://www.aetibar.in/images/portfolio/rebrand.png"],
  },
};

export default function Page() {
  const project = getProjectBySlug("rebranding-fintech-identity");
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
