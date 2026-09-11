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
    "Fleet Management Mobile App",
    "Driver Application Development",
    "Offline First Mobile App",
    "Logistics Mobile App Development",
    "GPS Tracking Mobile Application",
    "Digital Proof of Delivery App",
    "Cross-Platform App Development",
    "Mobile App Development Case Study",
    "Aetibar Work",
    "Aetibar Case Study",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/portfolio/logix-driver-app",
  },

  openGraph: {
    title: "Fleet Management Mobile App Case Study | Aetibar",
    description:
      "Cross-platform fleet and driver mobile application built for offline reliability, real-time GPS tracking, and delivery operations.",
    url: "https://www.aetibar.in/portfolio/logix-driver-app",
    siteName: "Aetibar",
    type: "website",
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
};

export default function Page() {
  const project = getProjectBySlug("logix-driver-app");
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
