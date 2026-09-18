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
    "Graphic Design",
    "Brand Identity Design",
    "Digital Marketing",
    "Web Development",
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

  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "design",
  classification: "Brand Design Case Study",
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
    canonical: "https://www.aetibar.in/portfolio/rebranding-fintech-identity",
  },

  openGraph: {
    title: "Modern Brand Identity & Design System Case Study | Aetibar",
    description:
      "Complete fintech visual identity and reusable design system that cut UI development time by 40% and boosted conversions by 24%.",
    url: "https://www.aetibar.in/portfolio/rebranding-fintech-identity",
    siteName: "Aetibar",
    type: "article",
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
  headline: "Fintech Brand Identity & Design System Case Study",
  description:
    "How Aetibar built a modern brand identity, scalable Figma design system, and multi-channel creative system for fintech platform Vault Finance, boosting conversions by 24%.",
  image: "https://www.aetibar.in/images/portfolio/rebrand.png",
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
    "@id": "https://www.aetibar.in/portfolio/rebranding-fintech-identity",
  },
};

export default function Page() {
  const project = getProjectBySlug("rebranding-fintech-identity");
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
