import React from "react";
import { Metadata } from "next";
import BlogListingClient from "../../components/blog/BlogListingClient";

export const metadata: Metadata = {
  title: "Journal & Technical Insights | Web Architecture, AI & Software Engineering | Aetibar",
  description:
    "Explore engineering perspectives, technical architecture blueprints, workflow automation breakdowns, and custom software strategy from the Aetibar studio.",
  keywords: [
    "Aetibar journal",
    "software engineering blog",
    "web architecture insights",
    "Next.js best practices",
    "internal business tools guide",
    "AI automation strategies",
    "custom software development Udaipur",
    "full-stack engineering articles",
    "SaaS sprawl elimination",
    "offline-first mobile architecture",
  ],
  alternates: {
    canonical: "https://www.aetibar.in/blog",
  },
  openGraph: {
    title: "Journal & Technical Insights | Web Architecture & Software Engineering | Aetibar",
    description:
      "Explore engineering perspectives, technical architecture blueprints, workflow automation breakdowns, and custom software strategy from the Aetibar studio.",
    url: "https://www.aetibar.in/blog",
    siteName: "Aetibar",
    type: "website",
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
    title: "Journal & Technical Insights | Aetibar",
    description:
      "Explore engineering perspectives, technical architecture blueprints, workflow automation breakdowns, and custom software strategy from the Aetibar studio.",
    images: ["https://www.aetibar.in/images/home/hero-architecture.jpg"],
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogListingClient />
    </main>
  );
}
