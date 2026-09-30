import React from "react";
import { Metadata } from "next";
import HomeScrollProgress from "../../components/home/HomeScrollProgress";
import ServicesPageClient from "../../components/services/ServicesPageClient";

export const metadata: Metadata = {
  title: "Digital Services | Graphic Design, Marketing, SEO, Websites & AI Automation | Aetibar",
  description:
    "Explore Aetibar's complete digital services for growing businesses: Graphic Design & Branding, Social Media Marketing, SEO Services, Targeted Paid Advertising, Custom Web Development, Mobile Apps, and AI Automation. Clear, jargon-free solutions built for real results.",
  keywords: [
    "Digital Services for Businesses",
    "Graphic Design Services",
    "Brand Identity Design",
    "Logo Design",
    "UI UX Design",
    "Social Media Marketing Services",
    "Social Media Management",
    "SEO Services",
    "Search Engine Optimization",
    "Local SEO Udaipur",
    "Google Ads Management",
    "Meta Ads Management",
    "Paid Advertising Services",
    "Custom Web Development",
    "Website Development Services",
    "E-commerce Website Development",
    "Mobile App Development",
    "iPhone and Android App Development",
    "AI Automation Services",
    "Business Workflow Automation",
    "Digital Marketing Agency Udaipur",
    "Aetibar Services",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services",
  },
  openGraph: {
    title: "Digital Services | Graphic Design, Marketing, SEO, Websites & AI | Aetibar",
    description:
      "Explore Aetibar's complete digital services for growing businesses: Graphic Design & Branding, Social Media Marketing, SEO Services, Targeted Paid Advertising, Custom Web Development, Mobile Apps, and AI Automation.",
    url: "https://www.aetibar.in/services",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Digital Services for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services | Graphic Design, Marketing, SEO, Websites & AI | Aetibar",
    description:
      "Explore Aetibar's complete digital services for growing businesses: Graphic Design, Social Media, SEO, Paid Ads, Web Development, Mobile Apps, and AI Automation.",
    images: ["https://www.aetibar.in/logo.jpeg"],
  },
};

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.aetibar.in/services#webpage",
      "url": "https://www.aetibar.in/services",
      "name": "Digital Services | Graphic Design, Marketing, SEO, Websites & AI Automation | Aetibar",
      "description":
        "Explore Aetibar's complete digital services: Graphic Design & Branding, Social Media Marketing, SEO Services, Targeted Paid Advertising, Custom Web Development, Mobile Apps, and AI Automation.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.aetibar.in/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.aetibar.in/services",
          },
        ],
      },
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.aetibar.in/#website",
        "url": "https://www.aetibar.in/",
        "name": "Aetibar",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.aetibar.in/#organization",
      "name": "Aetibar Technologies",
      "url": "https://www.aetibar.in/",
      "logo": "https://www.aetibar.in/logo.jpeg",
      "image": "https://www.aetibar.in/logo.jpeg",
      "description":
        "Aetibar helps businesses build strong brands, rank high on Google, generate qualified leads through paid advertising and social media, develop fast websites and apps, and automate daily office tasks with AI.",
      "email": "hello.aetibar@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Udaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Aetibar Complete Digital Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Graphic Design & Brand Identity",
              "description":
                "Professional logo design, brand guidelines, UI/UX designs, social media templates, and marketing graphics.",
              "url": "https://www.aetibar.in/services/social-media-marketing",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing & Management",
              "description":
                "Monthly content planning, branded graphic posts, customer engagement, and trust building on Instagram, Facebook, and LinkedIn.",
              "url": "https://www.aetibar.in/services/social-media-marketing",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO & Google Search Optimization",
              "description":
                "Local SEO and Google ranking optimization to attract qualified buyers without high advertising costs.",
              "url": "https://www.aetibar.in/services/seo",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Targeted Paid Advertising (Google & Meta Ads)",
              "description":
                "High-ROI Google Search Ads and Meta campaigns focused on verified customer calls and direct WhatsApp inquiries.",
              "url": "https://www.aetibar.in/services/paid-advertising",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Web Development",
              "description":
                "Fast, mobile-friendly business websites and e-commerce stores designed to capture inquiries and sell products.",
              "url": "https://www.aetibar.in/services/web-development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development",
              "description":
                "Simple iOS and Android applications for customers, bookings, deliveries, and team operations.",
              "url": "https://www.aetibar.in/services/app-development",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Smart Workflow Automation",
              "description":
                "Practical automated tools connecting WhatsApp, email, and spreadsheets to save 10+ hours of team busywork weekly.",
              "url": "https://www.aetibar.in/services/ai-automation",
            },
          },
        ],
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <main>
      {/* High-Performance Sunset Scroll Progress Bar */}
      <HomeScrollProgress />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesPageSchema),
        }}
      />

      {/* Main Animated Client Content */}
      <ServicesPageClient />
    </main>
  );
}
