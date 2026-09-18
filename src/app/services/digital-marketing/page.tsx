
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
    "Digital Marketing",
    "Digital Marketing Agency in Udaipur",
    "Digital Marketing Company in Udaipur",
    "Digital Marketing Services in Udaipur",
    "Digital Marketing Agency",
    "Digital Marketing Services",
    "Online Marketing Services",
    "Performance Marketing Agency",

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

  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "marketing",
  classification: "Digital Marketing",
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
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const digitalMarketingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Marketing Services",
  serviceType: "Digital Marketing",
  provider: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
  areaServed: {
    "@type": "Place",
    name: "Udaipur, Rajasthan, India",
  },
  description:
    "Performance digital marketing, SEO, Google Ads management, social media marketing, and lead generation services by Aetibar in Udaipur.",
};

export default function Page() {
  const service = getServiceBySlug("digital-marketing");
  if (!service) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(digitalMarketingSchema),
        }}
      />
      <ServiceBackButton />
      <DigitalMarketingPage service={service} />
    </>
  );
}
