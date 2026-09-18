
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../../../data/detailedServices";
import AiAutomationPage from "../../../components/services/pages/AiAutomationPage";
import ServiceBackButton from "../../../components/services/ServiceBackButton";


export const metadata: Metadata = {
  title: {
    absolute: "AI Automation Services in Udaipur | AI Automation Agency | Aetibar",
  },

  description:
    "Aetibar provides AI automation services in Udaipur to help businesses automate repetitive tasks, streamline workflows, integrate AI agents, and build custom AI-powered solutions that improve productivity and growth.",

  keywords: [
    // Primary Keywords
    "AI Automation",
    "AI Automation Services in Udaipur",
    "AI Automation Company in Udaipur",
    "AI Automation Agency in Udaipur",
    "AI Automation Services",
    "AI Automation Company",
    "AI Automation Agency",
    "Business AI Automation",
    "Custom AI Automation",

    // AI Agents & Solutions
    "AI Agent Development",
    "AI Agents for Business",
    "Custom AI Agents",
    "AI Agent Development Company",
    "AI Powered Solutions",
    "Custom AI Solutions",
    "AI Software Development",
    "AI Application Development",

    // Workflow & Process Automation
    "Business Process Automation",
    "Workflow Automation Services",
    "AI Workflow Automation",
    "Business Workflow Automation",
    "Intelligent Process Automation",
    "Process Automation Services",
    "Automated Business Workflows",
    "AI Business Automation",

    // Business Use Cases
    "AI Automation for Businesses",
    "AI Automation for Small Business",
    "AI Automation for Startups",
    "AI Solutions for Businesses",
    "Business Automation Solutions",
    "AI Productivity Solutions",
    "AI Customer Support Automation",
    "AI Lead Generation Automation",

    // Integration & Development
    "AI API Integration",
    "AI Integration Services",
    "Custom AI Integration",
    "AI Chatbot Development",
    "AI Chatbot Automation",
    "CRM Automation",
    "AI SaaS Development",

    // Local Keywords
    "AI Automation Company Udaipur",
    "AI Automation Agency Udaipur",
    "AI Solutions Company in Udaipur",
    "AI Development Company in Udaipur",

    // Brand
    "Aetibar AI Automation",
    "Aetibar AI Solutions",
    "Aetibar AI Automation Services",
  ],

  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "Artificial Intelligence and Automation",
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
    canonical: "https://www.aetibar.in/services/ai-automation",
  },

  openGraph: {
    title: "AI Automation Services in Udaipur | Aetibar",

    description:
      "Automate repetitive work and build smarter business workflows with Aetibar's AI automation services, AI agents, custom AI solutions, and intelligent integrations.",

    url: "https://www.aetibar.in/services/ai-automation",

    siteName: "Aetibar",

    type: "website",

    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar AI Automation Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "AI Automation Services in Udaipur | Aetibar",

    description:
      "Build smarter workflows with AI automation, AI agents, custom AI solutions, and business process automation from Aetibar.",

    images: ["https://www.aetibar.in/logo.jpeg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const aiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation Services",
  serviceType: "Artificial Intelligence & Workflow Automation",
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
    "Custom AI automation, autonomous AI agents, workflow intelligence, and business process automation by Aetibar.",
};

export default function Page() {
  const service = getServiceBySlug("ai-automation");
  if (!service) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiServiceSchema),
        }}
      />
      <ServiceBackButton />
      <AiAutomationPage service={service} />
    </>
  );
}
