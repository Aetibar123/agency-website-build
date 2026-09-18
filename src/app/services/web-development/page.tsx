
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../../../data/detailedServices";
import WebDevelopmentPage from "../../../components/services/pages/WebDevelopmentPage";
import ServiceBackButton from "../../../components/services/ServiceBackButton";

export const metadata: Metadata = {
  title: {
    absolute: "Web Development Company in Udaipur | Custom Web Applications | Aetibar",
  },

  description:
    "Aetibar is a top web development company in Udaipur, India, engineering custom websites, web applications, eCommerce platforms, and full-stack software built for speed, security, and search visibility.",

  keywords: [
    // Primary Web App Keywords
    "Web Development",
    "Web Development Company in Udaipur",
    "Custom Web Application Development",
    "Full Stack Web Development",
    "Web Software Engineering",
    "Custom Web Platforms",

    // Technical Architecture Keywords
    "SaaS Application Development",
    "Cloud Web Applications",
    "Frontend and Backend Engineering",
    "Database Architecture and APIs",
    "Custom Client Portals",
    "API Development and Integration",

    // Technology Stack Keywords
    "Next.js Application Development",
    "React Web Applications",
    "Node.js Backend Development",
    "TypeScript Engineering",
    "Scalable Web Architecture",

    // Local / Brand Keywords
    "Web Development Udaipur",
    "Custom Software Engineering Udaipur",
    "Aetibar Web Engineering",
    "Aetibar Technologies",
  ],

  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "Web Development",
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
    canonical: "https://www.aetibar.in/services/web-development",
  },

  openGraph: {
    title: "Web Development Company in Udaipur | Custom Web Applications | Aetibar",
    description:
      "Aetibar engineers full-stack web applications, custom web platforms, scalable APIs, and cloud software built for complex operational workflows.",
    url: "https://www.aetibar.in/services/web-development",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Web Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Udaipur | Aetibar",
    description:
      "Full-stack web application development, custom software platforms, and scalable cloud systems.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const webDevSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  serviceType: "Web Development",
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
    "Custom web development, responsive web applications, Next.js engineering, and scalable cloud platforms by Aetibar.",
};

export default function Page() {
  const service = getServiceBySlug("web-development");
  if (!service) {
    notFound();
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webDevSchema),
        }}
      />
      <ServiceBackButton />
      <WebDevelopmentPage service={service} />
    </main>
  );
}
