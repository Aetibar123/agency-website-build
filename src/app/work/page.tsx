import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
import WorkPageClient from "../../components/work/WorkPageClient";

export const metadata: Metadata = {
  title: "Our Work | Web Development, Mobile Apps & Digital Marketing Portfolio | Aetibar",
  description:
    "Explore selected case studies across custom web development, mobile app development, digital marketing, and business software systems built by Aetibar in Udaipur, India.",
  keywords: [
    "Aetibar portfolio",
    "web development portfolio",
    "mobile app development case study",
    "digital marketing portfolio",
    "custom software development projects",
    "web application development",
    "custom business software",
    "software development company in Udaipur",
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
    canonical: "https://www.aetibar.in/work",
  },
  openGraph: {
    title: "Our Work | Web Development, Mobile Apps & Digital Marketing Portfolio | Aetibar",
    description:
      "Explore selected web development projects, mobile applications, digital marketing results, and custom software systems built by Aetibar.",
    url: "https://www.aetibar.in/work",
    siteName: "Aetibar",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.aetibar.in/images/home/hero-agency-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Selected Work and Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Web Development, Mobile Apps & Digital Marketing Portfolio | Aetibar",
    description:
      "Explore selected web development projects, mobile applications, digital marketing results, and custom software systems built by Aetibar.",
    creator: "@Aetibar_",
    images: ["https://www.aetibar.in/images/home/hero-agency-showcase.jpg"],
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Udaipur",
    "geo.position": "24.5854;73.7125",
    "ICBM": "24.5854, 73.7125",
  },
};

const workPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Work - Aetibar Portfolio",
  url: "https://www.aetibar.in/work",
  description:
    "Explore case studies in web development, mobile app development, digital marketing, and custom business software by Aetibar.",
  publisher: {
    "@type": "Organization",
    name: "Aetibar",
    url: "https://www.aetibar.in",
  },
};

export default function WorkPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workPageSchema),
        }}
      />
      {/* Simple, Clean & Focused Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 15, sm: 17, md: 21 },
          pb: { xs: 3, sm: 4, md: 5 },
          bgcolor: "#FAF8F5",
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mx: "auto" }}>
            {/* Status Pill Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: "#EA580C",
                  textTransform: "uppercase",
                }}
              >
                Client Work &bull; Real Case Studies
              </Typography>
            </Box>

            {/* Main Title */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.2rem", sm: "3rem", md: "3.75rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                lineHeight: { xs: 1.2, md: 1.15 },
                mb: 2.5,
              }}
            >
              Explore Our Work &amp; What We Build for Businesses
            </Typography>

            {/* Clear Explanation */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", sm: "1.18rem" },
                color: "#52525B",
                lineHeight: 1.8,
                maxWidth: 760,
                mx: "auto",
              }}
            >
              This page showcases real websites, mobile applications, AI workflows, and digital marketing systems we build and manage for businesses.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Interactive Project Showcase */}
      <WorkPageClient />
    </main>
  );
}
