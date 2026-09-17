
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../../../data/detailedServices";
import WebDevelopmentPage from "../../../components/services/pages/WebDevelopmentPage";
import ServiceBackButton from "../../../components/services/ServiceBackButton";

export const metadata: Metadata = {
  title: {
    absolute: "Web Application Development & Custom Software Engineering | Aetibar",
  },

  description:
    "Aetibar engineers full-stack web applications, custom web platforms, scalable APIs, and cloud software built for complex operational workflows and enterprise performance.",

  keywords: [
    // Primary Web App Keywords
    "Web Application Development",
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
    "Web Application Development Company in Udaipur",
    "Custom Software Engineering Udaipur",
    "Aetibar Web Engineering",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/services/web-development",
  },

  openGraph: {
    title: "Web Application Development & Custom Software Engineering | Aetibar",

    description:
      "Aetibar engineers full-stack web applications, custom web platforms, scalable APIs, and cloud software built for complex operational workflows.",

    url: "https://www.aetibar.in/services/web-development",

    siteName: "Aetibar",

    type: "website",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Web Application Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Web Application Development & Custom Software | Aetibar",

    description:
      "Full-stack web application development, custom software platforms, and scalable cloud systems.",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};



export default function Page() {
  const service = getServiceBySlug("web-development");
  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceBackButton />
      <WebDevelopmentPage service={service} />
    </>
  );
}
