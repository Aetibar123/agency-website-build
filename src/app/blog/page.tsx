import React from "react";
import { Metadata } from "next";
import BlogListingClient from "../../components/blog/BlogListingClient";

export const metadata: Metadata = {
  title: "Technical Journal & Insights | Web Development, Mobile Apps & Software | Aetibar",
  description:
    "Read engineering perspectives, web development guides, mobile app architecture patterns, and digital marketing insights from the Aetibar studio in Udaipur, India.",
  keywords: [
    "Aetibar journal",
    "web development blog",
    "mobile app development articles",
    "digital marketing insights",
    "software engineering blog",
    "custom software development Udaipur",
    "Next.js best practices",
    "AI automation strategies",
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
    canonical: "https://www.aetibar.in/blog",
  },
  openGraph: {
    title: "Technical Journal & Insights | Web Development, Mobile Apps & Software | Aetibar",
    description:
      "Explore engineering perspectives, web architecture blueprints, mobile apps, and custom software strategy from the Aetibar studio.",
    url: "https://www.aetibar.in/blog",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/images/home/hero-architecture.jpg",
        width: 1200,
        height: 630,
        alt: "Aetibar Journal - Engineering Insights and Technical Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Journal & Insights | Aetibar",
    description:
      "Explore engineering perspectives, web architecture blueprints, mobile apps, and custom software strategy from the Aetibar studio.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/images/home/hero-architecture.jpg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Aetibar Journal",
  url: "https://www.aetibar.in/blog",
  description:
    "Engineering insights, web development architecture, mobile app patterns, and software strategy from Aetibar.",
  publisher: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
};

export default function BlogPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <BlogListingClient />
    </main>
  );
}
