import React from "react";
import { Metadata } from "next";
import WorkPageClient from "../../components/work/WorkPageClient";

export const metadata: Metadata = {
  title: "Our Work | Web Development, Mobile Apps & Digital Marketing Portfolio | Aetibar",
  description:
    "Explore selected case studies across custom web development, mobile app development, digital marketing, and business software systems built by Aetibar.",
  keywords: [
    "Aetibar portfolio",
    "web development portfolio",
    "mobile app development case study",
    "digital marketing portfolio",
    "custom software development projects",
    "web application development",
    "custom business software",
    "software development company in Udaipur",
    "Aetibar Technologies",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "Web Development, Mobile App Development, Digital Marketing",
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
    canonical: "https://www.aetibar.in/work",
  },
  openGraph: {
    title: "Our Work | Web Development, Mobile Apps & Digital Marketing Portfolio | Aetibar",
    description:
      "Explore selected web development projects, mobile applications, digital marketing results, and custom software systems built by Aetibar.",
    url: "https://www.aetibar.in/work",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/images/home/hero-agency-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Selected Work and Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Web Development, Mobile Apps & Digital Marketing Portfolio | Aetibar",
    description:
      "Explore selected web development projects, mobile applications, digital marketing results, and custom software systems built by Aetibar.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/images/home/hero-agency-showcase.jpg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const workPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Work - Aetibar Portfolio",
  url: "https://www.aetibar.in/work",
  description:
    "Explore case studies in web development, mobile app development, digital marketing, and custom business software by Aetibar.",
  publisher: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
};

export default function WorkPage() {
  return (
    <main style={{ backgroundColor: "#FFFFFF" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workPageSchema),
        }}
      />
      {/* Interactive Project Showcase with Home Page Fonts, Colors, and Animations */}
      <WorkPageClient />
    </main>
  );
}
