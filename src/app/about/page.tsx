import React from "react";
import { Metadata } from "next";
import AboutPageClient from "../../components/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About Aetibar | Problem-First Systems & Software Engineering Studio",
  description:
    "We help growing businesses replace fragmented SaaS apps and spreadsheet chaos with custom, reliable digital systems. Learn about our philosophy, engineering standards, and ethos.",
  alternates: {
    canonical: "https://www.aetibar.in/about",
  },
  openGraph: {
    title: "About Aetibar | Problem-First Systems & Software Engineering",
    description:
      "We help growing businesses replace fragmented SaaS apps and spreadsheet chaos with custom, reliable digital systems. Learn about our philosophy, engineering standards, and ethos.",
    url: "https://www.aetibar.in/about",
    siteName: "Aetibar",
    type: "website",
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
    title: "About Aetibar | Problem-First Systems & Software Engineering",
    description:
      "We help growing businesses replace fragmented SaaS apps and spreadsheet chaos with custom, reliable digital systems.",
    images: ["https://www.aetibar.in/images/home/editorial-craft-operations.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageClient />
    </main>
  );
}
