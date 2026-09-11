import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: {
    absolute: "Work & Case Studies | Aetibar",
  },

  description:
    "Explore our work and client case studies across web development, mobile apps, AI automation, SEO, and digital marketing built to solve real business challenges.",

  keywords: [
    "Aetibar Work",
    "Client Work & Case Studies",
    "Web Development Projects",
    "Mobile App Case Studies",
    "AI Automation Case Studies",
    "SEO Case Studies",
    "Digital Marketing Results",
    "Client Case Studies",
    "Custom Software Work",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/portfolio",
  },

  openGraph: {
    title: "Work & Case Studies | Aetibar",
    description:
      "Explore our work and client case studies across web development, mobile apps, AI automation, SEO, and digital marketing.",
    url: "https://www.aetibar.in/portfolio",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Work",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Work & Case Studies | Aetibar",
    description:
      "Explore our work and client case studies across web development, mobile apps, AI automation, SEO, and digital marketing.",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

export default function PortfolioHubPage() {
  return <PortfolioClient />;
}
