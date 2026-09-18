
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../../../data/detailedServices";
import SeoPage from "../../../components/services/pages/SeoPage";
import ServiceBackButton from "../../../components/services/ServiceBackButton";


export const metadata: Metadata = {
  title: {
    absolute: "SEO Services in Udaipur | SEO Company | Aetibar",
  },

  description:
    "Aetibar provides professional SEO services in Udaipur to improve search rankings, increase organic traffic, and help businesses grow with effective on-page, technical, local, and content SEO strategies.",

  keywords: [
    // Primary Keywords
    "Search Engine Optimization",
    "Digital Marketing",
    "SEO Services in Udaipur",
    "SEO Company in Udaipur",
    "SEO Agency in Udaipur",
    "Search Engine Optimization Services",
    "Professional SEO Services",

    // Service Keywords
    "On Page SEO Services",
    "Technical SEO Services",
    "Local SEO Services",
    "Off Page SEO Services",
    "SEO Audit Services",
    "Keyword Research Services",
    "SEO Content Strategy",
    "Website SEO Services",
    "Ecommerce SEO Services",
    "Google SEO Services",

    // Business Intent Keywords
    "Affordable SEO Services",
    "SEO Services for Small Business",
    "SEO Services for Startups",
    "Business SEO Services",
    "Organic SEO Services",
    "SEO Marketing Services",

    // Local Keywords
    "Local SEO Company in Udaipur",
    "Local SEO Services in Udaipur",
    "Best SEO Company in Udaipur",
    "SEO Expert in Udaipur",

    // Brand
    "Aetibar SEO Services",
    "Aetibar SEO Company",
  ],

  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "marketing",
  classification: "Search Engine Optimization",
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
    canonical: "https://www.aetibar.in/services/search-engine-optimization",
  },

  openGraph: {
    title: "SEO Services in Udaipur | SEO Company | Aetibar",

    description:
      "Grow your online visibility with Aetibar's SEO services. We help businesses improve search rankings, increase organic traffic, and reach more customers.",

    url: "https://www.aetibar.in/services/search-engine-optimization",

    siteName: "Aetibar",

    type: "website",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar SEO Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SEO Services in Udaipur | Aetibar",

    description:
      "Professional SEO services to improve search rankings, increase organic traffic, and grow your business online.",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const seoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Search Engine Optimization Services",
  serviceType: "SEO Services",
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
    "Comprehensive search engine optimization, technical SEO audits, on-page optimization, and organic growth services by Aetibar in Udaipur.",
};

export default function Page() {
  const service = getServiceBySlug("search-engine-optimization");
  if (!service) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoSchema),
        }}
      />
      <ServiceBackButton />
      <SeoPage service={service} />
    </>
  );
}
