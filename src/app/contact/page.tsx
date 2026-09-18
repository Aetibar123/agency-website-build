import React from "react";
import { Metadata } from "next";
import ContactPageClient from "../../components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Aetibar | Web Development, Mobile Apps & Digital Marketing in Udaipur",
  description:
    "Get in touch with Aetibar in Udaipur, India. Reach out for custom web development, mobile app development, digital marketing, and business software consultations.",
  keywords: [
    "contact Aetibar",
    "web development company Udaipur contact",
    "hire mobile app developer",
    "digital marketing agency Udaipur contact",
    "custom software development Udaipur",
    "software engineering studio India",
    "Aetibar phone and email",
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
    canonical: "https://www.aetibar.in/contact",
  },
  openGraph: {
    title: "Contact Aetibar | Web Development, Mobile Apps & Digital Marketing in Udaipur",
    description:
      "Get in touch with Aetibar in Udaipur, India. Reach out for custom web development, mobile app development, digital marketing, and business software consultations.",
    url: "https://www.aetibar.in/contact",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Aetibar | Web Development, Mobile Apps & Digital Marketing in Udaipur",
    description:
      "Get in touch with Aetibar in Udaipur, India. Reach out for custom web development, mobile app development, digital marketing, and business software.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Aetibar",
  url: "https://www.aetibar.in/contact",
  description:
    "Contact Aetibar for custom web development, mobile app development, digital marketing, and business software inquiries.",
  mainEntity: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
    logo: "https://www.aetibar.in/logo.jpeg",
    email: "hello.aetibar@gmail.com",
    telephone: "+91-XXXXXXXXXX",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
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
