import React from "react";
import { Metadata } from "next";
import AboutPageClient from "../../components/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About Aetibar | Web Development, Mobile Apps & Digital Marketing Company in Udaipur",
  description:
    "Learn about Aetibar, a technology and software development company based in Udaipur, India. We deliver custom web development, mobile app development, digital marketing, and business software.",
  keywords: [
    "about Aetibar",
    "web development company in Udaipur",
    "mobile app development company",
    "digital marketing agency in Udaipur",
    "custom software development company",
    "software engineering studio India",
    "technology company Udaipur",
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
    canonical: "https://www.aetibar.in/about",
  },
  openGraph: {
    title: "About Aetibar | Web Development, Mobile Apps & Digital Marketing in Udaipur",
    description:
      "Learn about Aetibar, a technology and software development company based in Udaipur, India. We deliver custom web development, mobile app development, digital marketing, and business software.",
    url: "https://www.aetibar.in/about",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/images/home/editorial-craft-operations.jpg",
        width: 1200,
        height: 630,
        alt: "About Aetibar - Software & Systems Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aetibar | Web Development, Mobile Apps & Digital Marketing in Udaipur",
    description:
      "Learn about Aetibar, a technology and software development company based in Udaipur, India. We deliver custom web development, mobile app development, digital marketing, and business software.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/images/home/editorial-craft-operations.jpg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Aetibar",
  url: "https://www.aetibar.in/about",
  description:
    "Learn about Aetibar, a technology company in Udaipur delivering custom web development, mobile app development, digital marketing, and business software.",
  mainEntity: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
    logo: "https://www.aetibar.in/logo.jpeg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
};

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <AboutPageClient />
    </main>
  );
}
