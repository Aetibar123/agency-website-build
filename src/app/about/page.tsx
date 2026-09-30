import React from "react";
import { Metadata } from "next";
import AboutPageClient from "../../components/about/AboutPageClient";
import HomeScrollProgress from "../../components/home/HomeScrollProgress";

export const metadata: Metadata = {
  title: "About Aetibar | Web Development, Mobile Apps, SEO & Digital Marketing Agency",
  description:
    "Learn about Aetibar, a trusted digital agency in Udaipur, India. We deliver high-converting business websites, custom mobile apps, SEO, targeted paid ads, and practical AI automation.",
  keywords: [
    "about Aetibar",
    "web development company in Udaipur",
    "digital marketing agency in Udaipur",
    "SEO company in Udaipur",
    "custom web development company",
    "mobile app development company",
    "Google ads agency Udaipur",
    "social media marketing agency",
    "graphic design and branding",
    "AI automation services",
    "trusted digital agency India",
    "Aetibar Technologies",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  category: "technology",
  classification: "Web Development, Mobile App Development, SEO, Digital Marketing, AI Automation",
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
    title: "About Aetibar | Web Development, Mobile Apps, SEO & Digital Marketing",
    description:
      "Learn about Aetibar, a trusted digital agency in Udaipur, India. We deliver high-converting business websites, custom mobile apps, SEO, targeted paid ads, and practical AI automation.",
    url: "https://www.aetibar.in/about",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/images/home/editorial-craft-operations.jpg",
        width: 1200,
        height: 630,
        alt: "About Aetibar - Trusted Web Development, Mobile Apps, SEO & Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aetibar | Web Development, Mobile Apps, SEO & Digital Marketing",
    description:
      "Learn about Aetibar, a trusted digital agency in Udaipur, India. We deliver high-converting business websites, custom mobile apps, SEO, targeted paid ads, and practical AI automation.",
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
    "Learn about Aetibar, a trusted digital agency in Udaipur delivering high-converting business websites, custom mobile apps, SEO, paid advertising, and AI automation.",
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
    knowsAbout: [
      "Custom Web Development",
      "Mobile App Development",
      "Search Engine Optimization (SEO)",
      "Targeted Paid Advertising (Google & Meta Ads)",
      "Social Media Marketing & Brand Design",
      "AI Workflow Automation",
    ],
  },
};

export default function AboutPage() {
  return (
    <main>
      <HomeScrollProgress />
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
