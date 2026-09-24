import React from "react";
import { Metadata } from "next";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export const metadata: Metadata = {
  title: "Aetibar Services | Web, App, AI & Marketing ",
  description:
    "Explore Aetibar's core digital services for businesses: Custom Web Development, Mobile App Development, AI Workflow Automation, SEO Services, Social Media Marketing, and Paid Advertising.",
  keywords: [
    "Digital Services for Businesses",
    "Custom Web Development",
    "Mobile App Development",
    "AI Workflow Automation",
    "SEO Services",
    "Social Media Marketing",
    "Google Ads Management",
    "Aetibar Services",
  ],
  authors: [{ name: "Aetibar Technologies", url: "https://www.aetibar.in" }],
  creator: "Aetibar Technologies",
  publisher: "Aetibar Technologies",
  alternates: {
    canonical: "https://www.aetibar.in/services",
  },
  openGraph: {
    title: "Digital Services for Businesses | Web, App, AI & Marketing | Aetibar",
    description:
      "Explore Aetibar's core digital services for businesses: Custom Web Development, Mobile App Development, AI Workflow Automation, SEO Services, Social Media Marketing, and Paid Advertising.",
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
};

const services = [
  {
    title: "Web Development",
    desc: "Fast, mobile-friendly websites, online stores, and customer web portals.",
    details:
      "We build custom business websites that load in under a second on mobile phones, establish immediate credibility, and route customer inquiries directly to your team's WhatsApp and email with zero recurring builder lock-in.",
    href: "/services/web-development",
    icon: <LanguageIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
    features: [
      "Custom business & corporate websites",
      "E-commerce stores with instant WhatsApp notifications",
      "Secure client portals & quotation dashboards",
      "Sub-second mobile loading & 100% code ownership",
    ],
  },
  {
    title: "App Development",
    desc: "Practical iOS and Android applications for operations and customers.",
    details:
      "Cross-platform mobile apps for iPhone and Android that keep field teams organized, capture signatures and photos, and work reliably even in basements and remote locations with zero cellular signal.",
    href: "/services/app-development",
    icon: <PhoneIphoneIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
    features: [
      "One unified codebase for iOS & Android",
      "Offline-first sync for low-connectivity environments",
      "Field service, logistics & operations apps",
      "Complete App Store & Google Play publishing support",
    ],
  },
  {
    title: "AI Automation & Integration",
    desc: "Practical automations that eliminate repetitive data entry and spreadsheet tasks.",
    details:
      "We connect your everyday business software—like WhatsApp, Google Sheets, Gmail, and CRM—to automate lead intake, extract invoice data, and assist support staff with strict human review safeguards.",
    href: "/services/ai-automation",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
    features: [
      "Instant lead capture & WhatsApp triage alerts",
      "Invoice & PDF data extraction into clean spreadsheets",
      "Human-in-the-loop verified response drafting",
      "Connecting your existing business tools safely",
    ],
  },
  {
    title: "SEO Services",
    desc: "Sustainable Google search visibility that attracts qualified organic buyers.",
    details:
      "We fix technical crawl errors, optimize mobile loading speeds, and structure your website content around the exact commercial queries prospective clients search for when looking to hire.",
    href: "/services/seo",
    icon: <SearchIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
    features: [
      "Technical crawl audits & Core Web Vitals speed",
      "Commercial keyword & search intent research",
      "Local SEO & Google Business Profile optimization",
      "Transparent Google Search Console monthly reports",
    ],
  },
  {
    title: "Social Media Marketing",
    desc: "Consistent, professional brand presentation and monthly content planning.",
    details:
      "We handle monthly editorial calendars, clear caption copywriting, and custom branded graphics so your business looks active, reputable, and authoritative without taking time away from operations.",
    href: "/services/social-media-marketing",
    icon: <ShareOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
    features: [
      "Platform focus (LinkedIn for B2B, Instagram/Facebook)",
      "Monthly editorial calendars with full client approval",
      "Custom branded visual templates & carousels",
      "Transparent reach & website referral reporting",
    ],
  },
  {
    title: "Paid Advertising",
    desc: "Targeted advertising campaigns with disciplined budget caps and lead tracking.",
    details:
      "Targeted Google Search Ads and Meta campaigns engineered with aggressive negative keyword filtering, strict daily budget caps, verified conversion tracking, and 100% direct platform billing transparency.",
    href: "/services/paid-advertising",
    icon: <AdsClickOutlinedIcon sx={{ fontSize: 26, color: "#EA580C" }} />,
    features: [
      "High-intent Google Search & Shopping campaigns",
      "Targeted Meta (Facebook & Instagram) ads",
      "Verified conversion tracking on calls and inquiries",
      "100% direct billing transparency & strict budget caps",
    ],
  },
];

export default function ServicesHubPage() {
  return (
    <Box sx={{ bgcolor: "#FAF8F5", color: "#18181B", minHeight: "100vh" }}>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 10, md: 14 },
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mx: "auto" }}>
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
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#EA580C",
                  textTransform: "uppercase",
                }}
              >
                What We Do
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.35rem", sm: "3.25rem", md: "4rem" },
                fontWeight: 700,
                color: "#18181B",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              Digital Solutions for Growing Businesses
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                lineHeight: 1.75,
                color: "#52525B",
                maxWidth: 760,
                mx: "auto",
                mb: 4,
              }}
            >
              We build fast, mobile-friendly websites and apps, automate repetitive office tasks with practical AI, and connect your business with paying customers through Google search, social media, and targeted advertising. Explore our dedicated service areas below.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={3.5}>
            {services.map((service, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    p: { xs: 3.5, sm: 4 },
                    borderRadius: "16px",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 14px 30px -8px rgba(24, 24, 27, 0.08)",
                      borderColor: "#EA580C",
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "12px",
                        bgcolor: "rgba(249, 115, 22, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: "#18181B",
                        mb: 1.2,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#EA580C",
                        mb: 1.5,
                        lineHeight: 1.5,
                      }}
                    >
                      {service.desc}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        color: "#52525B",
                        mb: 3,
                      }}
                    >
                      {service.details}
                    </Typography>

                    <Box sx={{ pt: 2, borderTop: "1px solid rgba(228, 228, 231, 0.8)", mb: 3 }}>
                      {service.features.map((feat, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1 }}>
                          <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#EA580C", mt: 0.3 }} />
                          <Typography sx={{ fontSize: "0.85rem", color: "#3F3F46", fontWeight: 500 }}>
                            {feat}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ pt: 2, borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
                    <Link href={service.href} style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                        fullWidth
                        sx={{
                          background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                          color: "#FFFFFF",
                          py: 1.3,
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          borderRadius: "9999px",
                          textTransform: "none",
                          boxShadow: "0 4px 12px rgba(234, 88, 12, 0.25)",
                          "&:hover": {
                            background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                          },
                        }}
                      >
                        Explore {service.title}
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF", borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: 960,
              mx: "auto",
              textAlign: "center",
              p: { xs: 4, sm: 6, md: 8 },
              bgcolor: "#18181B",
              borderRadius: "24px",
              boxShadow: "0 25px 60px -15px rgba(24, 24, 27, 0.4)",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.75rem", md: "3.25rem" },
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Have a Project in Mind?
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem" },
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: 680,
                mx: "auto",
                lineHeight: 1.75,
                mb: 4,
              }}
            >
              Tell us what your business needs. We&apos;ll discuss your goals and the right approach for your project.
            </Typography>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                sx={{
                  background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
                  color: "#18181B",
                  px: 4.5,
                  py: 1.6,
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: "9999px",
                  boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)",
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                  },
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
