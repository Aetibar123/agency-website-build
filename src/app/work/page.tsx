import React from "react";
import { Metadata } from "next";
import WorkPageClient from "../../components/work/WorkPageClient";


export const metadata: Metadata = {
  title:
    "Our Work | Web Development, Mobile Apps, SEO & Digital Marketing Portfolio | Aetibar",

  description:
    "Explore selected websites, mobile apps, SEO and digital marketing projects, AI automation workflows, and custom digital solutions built by Aetibar for businesses.",

  keywords: [
    // Portfolio
    "Aetibar portfolio",
    "Aetibar projects",
    "Aetibar work",
    "digital agency portfolio",
    "digital solutions portfolio",
    "digital projects portfolio",
    "web development portfolio",
    "software development portfolio",

    // Web development
    "web development projects",
    "web development case studies",
    "website development projects",
    "custom website projects",
    "business website portfolio",
    "ecommerce website projects",
    "ecommerce development portfolio",
    "web application projects",
    "custom web application development",

    // Mobile apps
    "mobile app development portfolio",
    "mobile app projects",
    "mobile application case studies",
    "iOS app development projects",
    "Android app development projects",
    "custom mobile app portfolio",
    "business mobile app projects",

    // SEO & digital marketing
    "SEO portfolio",
    "SEO case studies",
    "search engine optimization projects",
    "local SEO projects",
    "digital marketing portfolio",
    "digital marketing projects",
    "social media marketing portfolio",
    "social media marketing projects",
    "Google Ads projects",
    "Google Ads campaign portfolio",
    "Meta Ads projects",
    "paid advertising portfolio",

    // AI & automation
    "AI automation projects",
    "AI automation portfolio",
    "AI workflow automation projects",
    "business automation projects",
    "workflow automation case studies",
    "AI integration projects",
    "CRM automation projects",
    "business process automation",

    // Business / software
    "custom software projects",
    "custom business software",
    "business software solutions",
    "business application development",
    "digital solutions for businesses",
    "custom digital solutions",

    // Local intent
    "software development company in Udaipur",
    "web development company in Udaipur",
    "mobile app development company in Udaipur",
    "SEO company in Udaipur",
    "digital marketing company in Udaipur",
    "digital agency Udaipur",
    "software development Udaipur",
    "web development Udaipur",
    "app development Udaipur",
    "SEO services Udaipur",
    "digital marketing Udaipur",
    "AI automation Udaipur",
    "digital agency Rajasthan",
  ],

  authors: [
    {
      name: "Aetibar",
      url: "https://www.aetibar.in",
    },
  ],

  creator: "Aetibar",
  publisher: "Aetibar",
  category: "technology",

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
    title:
      "Our Work | Web Development, Mobile Apps, SEO & Digital Marketing Portfolio | Aetibar",

    description:
      "Explore selected websites, mobile applications, SEO, digital marketing, and AI automation projects built by Aetibar for businesses.",

    url: "https://www.aetibar.in/work",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.aetibar.in/images/home/hero-agency-showcase.jpg",
        width: 1200,
        height: 630,
        alt:
          "Aetibar Portfolio - Web Development, Mobile Apps, Digital Marketing and AI Automation Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Our Work | Web Development, Mobile Apps, SEO & Digital Marketing Portfolio | Aetibar",

    description:
      "Explore selected websites, mobile apps, SEO, digital marketing, and AI automation projects built by Aetibar.",

    creator: "@Aetibar_",

    images: [
      "https://www.aetibar.in/images/home/hero-agency-showcase.jpg",
    ],
  },

  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    ICBM: "24.5854, 73.7125",
  },
};



const workPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",

  "@id": "https://www.aetibar.in/work#collection",

  name: "Our Work | Aetibar Portfolio",

  url: "https://www.aetibar.in/work",

  description:
    "Explore websites, mobile applications, SEO and digital marketing projects, AI automation workflows, and custom digital solutions built by Aetibar for businesses.",

  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.aetibar.in/#website",
  },

  publisher: {
    "@type": "Organization",
    "@id": "https://www.aetibar.in/#organization",
    name: "Aetibar",
    url: "https://www.aetibar.in/",
  },

  inLanguage: "en-IN",
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
