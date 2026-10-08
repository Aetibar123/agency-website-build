import React from "react";
import { Metadata } from "next";
import ContactPageClient from "../../components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Aetibar | Discuss Your Business Needs",
  description:
    "Get in touch with Aetibar to discuss web development, mobile apps, SEO, social media marketing, paid advertising, or AI automation for your business.",
  keywords: [
    "contact Aetibar",
    "web development company in Udaipur",
    "mobile app development company",
    "SEO company in Udaipur",
    "social media marketing company",
    "paid advertising company",
    "AI automation company",
    "digital services for businesses",
    "Aetibar",
  ],
  authors: [{ name: "Aetibar", url: "https://www.aetibar.in" }],
  creator: "Aetibar",
  publisher: "Aetibar",
  category: "technology",
  classification:
    "Web Development, Mobile App Development, SEO, Social Media Marketing, Paid Advertising, AI Automation",
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
    canonical: "https://www.aetibar.in/contact",
  },
  openGraph: {
    title: "Contact Aetibar | Discuss Your Business Needs",
    description:
      "Get in touch with Aetibar to discuss web development, mobile apps, SEO, marketing, advertising, or AI automation.",
    url: "https://www.aetibar.in/contact",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Aetibar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Aetibar | Discuss Your Business Needs",
    description:
      "Get in touch with Aetibar to discuss your business needs across web development, apps, SEO, marketing, advertising, and AI automation.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    ICBM: "24.5854, 73.7125",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Aetibar",
  url: "https://www.aetibar.in/contact",
  description:
    "Contact Aetibar to discuss web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation.",
  mainEntity: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
    logo: "https://www.aetibar.in/logo.jpeg",
    email: "hello.aetibar@gmail.com",
  },
};
export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <ContactPageClient />
    </main>
  );
}
