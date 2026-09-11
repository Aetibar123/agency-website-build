
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../../../data/detailedServices";
import DigitalMarketingPage from "../../../components/services/pages/DigitalMarketingPage";
import ServiceBackButton from "../../../components/services/ServiceBackButton";


export const metadata: Metadata = {
  title: {
    absolute: "Digital Marketing Agency in Udaipur | Aetibar",
  },

  description:
    "Aetibar is a digital marketing agency in Udaipur helping businesses grow online with social media marketing, Google Ads, paid advertising, content marketing, SEO, and lead generation strategies.",

  keywords: [
    // Primary Keywords
    "Digital Marketing Agency in Udaipur",
    "Digital Marketing Company in Udaipur",
    "Digital Marketing Services in Udaipur",
    "Digital Marketing Agency",
    "Digital Marketing Services",
    "Online Marketing Services",

    // Social Media Marketing
    "Social Media Marketing Services",
    "Social Media Marketing Agency",
    "Social Media Management Services",
    "Social Media Advertising",
    "Instagram Marketing Services",
    "Facebook Marketing Services",
    "Social Media Advertising Agency",

    // Paid Advertising
    "Google Ads Management",
    "Google Ads Agency",
    "PPC Management Services",
    "PPC Advertising Agency",
    "Paid Advertising Services",
    "Performance Marketing Services",
    "Online Advertising Agency",

    // Lead Generation & Growth
    "Lead Generation Services",
    "Lead Generation Agency",
    "Digital Marketing for Businesses",
    "Digital Marketing for Small Business",
    "Digital Marketing for Startups",
    "Online Business Growth Services",
    "Customer Acquisition Services",

    // Content & Marketing
    "Content Marketing Services",
    "Content Marketing Agency",
    "Digital Content Marketing",
    "Marketing Strategy Services",
    "Online Marketing Strategy",

    // Local Keywords
    "Digital Marketing Company Udaipur",
    "Digital Marketing Agency Udaipur",
    "Social Media Marketing Agency in Udaipur",
    "Google Ads Agency in Udaipur",
    "PPC Agency in Udaipur",

    // Brand
    "Aetibar Digital Marketing",
    "Aetibar Digital Marketing Agency",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/services/digital-marketing",
  },

  openGraph: {
    title: "Digital Marketing Agency in Udaipur | Aetibar",

    description:
      "Grow your business online with Aetibar's digital marketing services, including social media marketing, Google Ads, paid advertising, content marketing, and lead generation.",

    url: "https://www.aetibar.in/services/digital-marketing",

    siteName: "Aetibar",

    type: "website",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Digital Marketing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Digital Marketing Agency in Udaipur | Aetibar",

    description:
      "Professional digital marketing services including social media marketing, Google Ads, paid advertising, content marketing, and lead generation.",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};


export default function Page() {
  const service = getServiceBySlug("digital-marketing");
  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceBackButton />
      <DigitalMarketingPage service={service} />
    </>
  );
}
