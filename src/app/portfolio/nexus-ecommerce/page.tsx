import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../data/portfolioProjects";
import PortfolioDetailClient from "../../../components/portfolio/PortfolioDetailClient";
import PortfolioBackButton from "../../../components/portfolio/PortfolioBackButton";

export const metadata: Metadata = {
  title: {
    absolute: "Headless E-Commerce Platform Case Study | Web Development | Aetibar",
  },

  description:
    "Explore how Aetibar designed and developed a modern headless e-commerce platform using Next.js, APIs, and scalable web architecture for high performance.",

  keywords: [
    "Headless E-Commerce Development",
    "Next.js E-Commerce Platform",
    "Custom E-Commerce Development",
    "E-Commerce Case Study",
    "Scalable E-Commerce Architecture",
    "Web Development Case Study",
    "Fast E-Commerce Website",
    "Retail E-Commerce Solution",
    "Aetibar Work",
    "Aetibar Case Study",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/portfolio/nexus-ecommerce",
  },

  openGraph: {
    title: "Headless E-Commerce Platform Case Study | Aetibar",
    description:
      "Modern headless e-commerce architecture engineered for speed, scalability, and seamless shopping experiences.",
    url: "https://www.aetibar.in/portfolio/nexus-ecommerce",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/images/portfolio/ecommerce.png",
        width: 1200,
        height: 630,
        alt: "Headless E-Commerce Platform Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Headless E-Commerce Platform Case Study | Aetibar",
    description:
      "Modern headless e-commerce architecture engineered for speed, scalability, and seamless shopping experiences.",
    images: ["https://www.aetibar.in/images/portfolio/ecommerce.png"],
  },
};

export default function Page() {
  const project = getProjectBySlug("nexus-ecommerce");
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
