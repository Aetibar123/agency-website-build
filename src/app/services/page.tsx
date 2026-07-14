import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Ai, Web & App Development, Digital Marketing, Seo | Aetibar",

  description:
    "Explore Aetibar's expert web development, mobile app development, AI automation, SEO, digital marketing, and brand design services for business growth.",

  keywords: [
    "Web Development Company",
    "Website Development Company",
    "Mobile App Development",
    "AI Automation",
    "SEO Services",
    "Digital Marketing Company in Udaipur",
    "Brand Design",
    "IT Services",
    "Aetibar Services",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/services",
  },

  openGraph: {
    title: "Web Development & Digital Marketing Services | Aetibar",
    description:
      "Discover Aetibar's complete range of web development, mobile app, AI automation, SEO, digital marketing, and branding services.",
    url: "https://www.aetibar.in/services",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Services | Aetibar",
    description:
      "Professional Web Development, AI Automation, SEO, Mobile App Development, and Brand Design services.",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

export default function ServicesHubPage() {
  return <ServicesClient />;
}
