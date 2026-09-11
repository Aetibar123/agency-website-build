
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../../../data/detailedServices";
import AppDevelopmentPage from "../../../components/services/pages/AppDevelopmentPage";
import ServiceBackButton from "../../../components/services/ServiceBackButton";


export const metadata: Metadata = {
  title: {
    absolute: "Mobile App Development Company in Udaipur | Aetibar",
  },

  description:
    "Aetibar provides professional mobile app development services in Udaipur, building custom Android and iOS apps, cross-platform applications, and scalable mobile solutions for businesses.",

  keywords: [
    // Primary Keywords
    "Mobile App Development Company in Udaipur",
    "Mobile App Development Services in Udaipur",
    "Mobile App Development Company",
    "Mobile App Development Services",
    "Mobile Application Development",
    "Custom Mobile App Development",

    // Platform Keywords
    "Android App Development",
    "Android App Development Company",
    "iOS App Development",
    "iOS App Development Company",
    "Cross Platform App Development",
    "Flutter App Development",
    "React Native App Development",

    // Service Keywords
    "Custom App Development",
    "Business App Development",
    "Enterprise Mobile App Development",
    "Startup App Development",
    "Mobile Application Design",
    "Mobile App UI UX Design",
    "App Development Services",
    "Scalable Mobile App Development",

    // Business Intent Keywords
    "Mobile App Development for Businesses",
    "Mobile App Development for Startups",
    "Custom Business Mobile App",
    "Professional Mobile App Development",

    // Local Keywords
    "Mobile App Development Agency in Udaipur",
    "Android App Development Company in Udaipur",
    "iOS App Development Company in Udaipur",
    "App Development Company in Udaipur",

    // Brand
    "Aetibar Mobile App Development",
    "Aetibar App Development",
  ],

  alternates: {
    canonical: "https://www.aetibar.in/services/mobile-app-development",
  },

  openGraph: {
    title: "Mobile App Development Company in Udaipur | Aetibar",

    description:
      "Build powerful mobile applications with Aetibar. We develop custom Android, iOS, and cross-platform apps designed to help businesses launch, grow, and scale.",

    url: "https://www.aetibar.in/services/mobile-app-development",

    siteName: "Aetibar",

    type: "website",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Mobile App Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Mobile App Development Company in Udaipur | Aetibar",

    description:
      "Custom Android, iOS, and cross-platform mobile app development services for businesses and startups.",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};



export default function Page() {
  const service = getServiceBySlug("mobile-app-development");
  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceBackButton />
      <AppDevelopmentPage service={service} />
    </>
  );
}
