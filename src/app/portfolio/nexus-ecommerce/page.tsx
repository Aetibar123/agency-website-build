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
    "Web Development",
    "Web Development Case Study",
    "Headless E-Commerce Development",
    "Next.js E-Commerce Platform",
    "Custom E-Commerce Development",
    "E-Commerce Case Study",
    "Scalable E-Commerce Architecture",
    "Fast E-Commerce Website",
    "Mobile App Development",
    "Digital Marketing",
    "Retail E-Commerce Solution",
    "Aetibar Work",
    "Aetibar Case Study",
  ],

  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "Web Development Case Study",
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
    canonical: "https://www.aetibar.in/portfolio/nexus-ecommerce",
  },

  openGraph: {
    title: "Headless E-Commerce Platform Case Study | Aetibar",
    description:
      "Modern headless e-commerce architecture engineered for speed, scalability, and seamless shopping experiences.",
    url: "https://www.aetibar.in/portfolio/nexus-ecommerce",
    siteName: "Aetibar",
    type: "article",
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
  headline: "Headless E-Commerce Platform Case Study",
  description:
    "Explore how Aetibar designed and developed a modern headless e-commerce platform using Next.js, APIs, and scalable web architecture for high performance.",
  image: "https://www.aetibar.in/images/portfolio/ecommerce.png",
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
    "@id": "https://www.aetibar.in/portfolio/nexus-ecommerce",
  },
};

export default function Page() {
  const project = getProjectBySlug("nexus-ecommerce");
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
