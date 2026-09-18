
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../../../data/detailedServices";
import GraphicsDesigningPage from "../../../components/services/pages/GraphicsDesigningPage";
import ServiceBackButton from "../../../components/services/ServiceBackButton";



export const metadata: Metadata = {
  title: {
    absolute: "Graphic Design Services in Udaipur | Aetibar",
  },

  description:
    "Aetibar provides professional graphic design services in Udaipur, creating brand identities, social media designs, marketing creatives, business graphics, and visual designs that help businesses stand out.",

  keywords: [
    // Primary Keywords
    "Graphic Design",
    "Graphic Design Services in Udaipur",
    "Graphic Design Company in Udaipur",
    "Graphic Design Agency in Udaipur",
    "Graphic Design Services",
    "Professional Graphic Design Services",
    "Custom Graphic Design",

    // Branding & Identity
    "Brand Identity Design",
    "Logo Design Services",
    "Branding Design Services",
    "Business Branding Services",
    "Corporate Branding Design",
    "Visual Identity Design",
    "Brand Design Services",

    // Marketing & Social Media
    "Social Media Design Services",
    "Social Media Post Design",
    "Social Media Creative Design",
    "Marketing Graphic Design",
    "Digital Marketing Design",
    "Advertising Creative Design",
    "Promotional Graphic Design",

    // Business Design
    "Business Graphic Design",
    "Corporate Graphic Design",
    "Brochure Design",
    "Business Card Design",
    "Presentation Design",
    "Banner Design",
    "Poster Design",
    "Creative Design Services",

    // Digital Design
    "Website Graphics Design",
    "Digital Graphic Design",
    "UI Graphic Design",
    "Custom Visual Design",

    // Business Intent
    "Graphic Design for Businesses",
    "Graphic Design for Startups",
    "Professional Branding Services",
    "Creative Design Agency",

    // Local Keywords
    "Graphic Designer in Udaipur",
    "Graphic Design Company in Udaipur",
    "Branding Agency in Udaipur",
    "Logo Design Company in Udaipur",

    // Brand
    "Aetibar Graphic Design",
    "Aetibar Design Services",
  ],

  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "design",
  classification: "Graphic Design",
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
    canonical: "https://www.aetibar.in/services/graphic-design",
  },

  openGraph: {
    title: "Graphic Design Services in Udaipur | Aetibar",

    description:
      "Build a strong visual identity with Aetibar's graphic design services. From branding and logo design to social media creatives and marketing graphics, we create designs that represent your business.",

    url: "https://www.aetibar.in/services/graphic-design",

    siteName: "Aetibar",

    type: "website",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Graphic Design Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Graphic Design Services in Udaipur | Aetibar",

    description:
      "Professional graphic design, branding, logo design, social media creatives, and marketing design services for businesses.",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const graphicDesignSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Graphic Design & Branding Services",
  serviceType: "Graphic Design",
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
    "Professional graphic design, brand identity systems, corporate logos, UI graphics, and marketing collaterals by Aetibar in Udaipur.",
};

export default function Page() {
  const service = getServiceBySlug("graphic-design");
  if (!service) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(graphicDesignSchema),
        }}
      />
      <ServiceBackButton />
      <GraphicsDesigningPage service={service} />
    </>
  );
}
