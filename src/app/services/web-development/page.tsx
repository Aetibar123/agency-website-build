
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../../../data/detailedServices";
import WebDevelopmentPage from "../../../components/services/pages/WebDevelopmentPage";
import ServiceBackButton from "../../../components/services/ServiceBackButton";

export const metadata: Metadata = {
  title: {
    absolute: "Web Development Company | Custom Website Development | Aetibar",
  },

  description:
    "Aetibar is a professional web development company offering custom website development, business websites, eCommerce websites, web applications, and scalable digital solutions for businesses.",

  keywords: [
    // Primary Keywords
    "Web Development Company",
    "Website Development Company",
    "Professional Web Development Services",
    "Custom Website Development",

    // Service Keywords
    "Business Website Development",
    "Custom Web Development",
    "Responsive Website Development",
    "Corporate Website Development",
    "Ecommerce Website Development",
    "Web Application Development",
    "Custom Web Application Development",
    "Website Design and Development",

    // Technology / Solution Keywords
    "Modern Web Development",
    "Scalable Web Applications",
    "Full Stack Web Development",
    "Frontend and Backend Development",

    // Local / Brand Keywords
    "Web Development Company in Udaipur",
    "Website Development Company in Udaipur",
    "Web Development Services in Udaipur",
    "Aetibar Web Development",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/services/web-development",
  },

  openGraph: {
    title: "Web Development Company | Custom Website Development | Aetibar",

    description:
      "Get professional web development services from Aetibar. We build custom business websites, eCommerce platforms, web applications, and scalable digital solutions.",

    url: "https://www.aetibar.in/services/web-development",

    siteName: "Aetibar",

    type: "website",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Web Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Web Development Company | Aetibar",

    description:
      "Professional custom website development, web application development, business websites, and scalable web solutions.",

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
