import React from "react";
import { Metadata } from "next";
import ContactPageClient from "../../components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Aetibar | Direct Senior Engineering & Architectural Access",
  description:
    "Skip the intake forms and sales reps. Connect directly with Aetibar's senior software architects for web development, AI automation, and custom business systems. 24-hour response SLA.",
  keywords: [
    "Contact Aetibar",
    "Software Engineering Studio",
    "Web Development Agency",
    "Custom Business Software",
    "AI Automation Consultation",
    "Udaipur Tech Studio",
  ],
  alternates: {
    canonical: "https://www.aetibar.in/contact",
  },
  openGraph: {
    title: "Contact Aetibar | Direct Senior Engineering & Architectural Access",
    description:
      "Skip the forms and sales reps. Speak directly with the engineers building your systems. 24-hour response SLA.",
    url: "https://www.aetibar.in/contact",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 512,
        height: 512,
        alt: "Aetibar Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Aetibar | Direct Senior Engineering Access",
    description:
      "Skip the forms and sales reps. Speak directly with the engineers building your systems.",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageClient />
    </main>
  );
}
