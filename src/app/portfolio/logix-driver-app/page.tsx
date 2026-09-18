import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "../../../data/portfolioProjects";
import PortfolioDetailClient from "../../../components/portfolio/PortfolioDetailClient";
import PortfolioBackButton from "../../../components/portfolio/PortfolioBackButton";

export const metadata: Metadata = {
  title: {
    absolute: "Fleet Management Driver Mobile App Case Study | App Development | Aetibar",
  },

  description:
    "Discover how Aetibar built a cross-platform fleet management mobile app with offline mode, GPS tracking, route management, and digital proof of delivery.",

  keywords: [
    "Mobile App Development",
    "Mobile App Development Case Study",
    "Fleet Management Mobile App",
    "Driver Application Development",
    "Offline First Mobile App",
    "Logistics Mobile App Development",
    "GPS Tracking Mobile Application",
    "Digital Proof of Delivery App",
    "Cross-Platform App Development",
    "Web Development",
    "Custom Software Engineering",
    "Aetibar Work",
    "Aetibar Case Study",
  ],

  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "Mobile App Development Case Study",
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
    canonical: "https://www.aetibar.in/portfolio/logix-driver-app",
  },

  openGraph: {
    title: "Fleet Management Mobile App Case Study | Aetibar",
    description:
      "Cross-platform fleet and driver mobile application built for offline reliability, real-time GPS tracking, and delivery operations.",
    url: "https://www.aetibar.in/portfolio/logix-driver-app",
    siteName: "Aetibar",
    type: "article",
    images: [
      {
        url: "https://www.aetibar.in/images/portfolio/logix.png",
        width: 1200,
        height: 630,
        alt: "Fleet Management Mobile Application Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fleet Management Mobile App Case Study | Aetibar",
    description:
      "Cross-platform fleet and driver mobile application built for offline reliability, real-time GPS tracking, and delivery operations.",
    images: ["https://www.aetibar.in/images/portfolio/logix.png"],
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
  headline: "Fleet Management Driver Mobile App Case Study",
  description:
    "Discover how Aetibar built a cross-platform fleet management mobile app with offline mode, GPS tracking, route management, and digital proof of delivery.",
  image: "https://www.aetibar.in/images/portfolio/logix.png",
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
    "@id": "https://www.aetibar.in/portfolio/logix-driver-app",
  },
};

export default function Page() {
  const project = getProjectBySlug("logix-driver-app");
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
