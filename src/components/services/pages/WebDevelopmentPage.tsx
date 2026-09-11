"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ServiceFaqSection from "../ServiceFaqSection";
import InteractiveServiceExplorer from "../InteractiveServiceExplorer";
import InteractiveScopeEstimator from "../InteractiveScopeEstimator";
import CtaSection from "../../home/CtaSection";
import Image from "next/image";
import Link from "next/link";

const webDevFaqs = [
  {
    question: "Do you build custom websites or use WordPress templates?",
    answer:
      "We build 100% custom web applications and websites using Next.js, React, and TypeScript. We avoid bloated pre-made templates and fragile page builders so your site remains fast, secure, and fully owned by you.",
  },
  {
    question: "How do you ensure sub-second page load times and strong Core Web Vitals?",
    answer:
      "We utilize Server-Side Rendering (SSR), Static Site Generation (SSG), automatic image optimization, edge caching, and bundle tree-shaking to ensure perfect Lighthouse scores and instantaneous navigation.",
  },
  {
    question: "Can you integrate our existing third-party systems and APIs?",
    answer:
      "Yes. We regularly integrate custom databases, headless CMS platforms (Sanity, Strapi), payment processors (Stripe, Razorpay), CRMs (HubSpot, Salesforce), and ERP APIs with secure authentication.",
  },
  {
    question: "Will our website be fully responsive on mobile and tablet devices?",
    answer:
      "Every layout is architected mobile-first. We test extensively across iOS and Android devices, tablets, and high-resolution desktop viewports to ensure seamless touch navigation and visual perfection.",
  },
];

export default function WebDevelopmentPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: "#FAF9F5", color: "#111215", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 10, md: 14 },
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 7 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 3,
                  px: 1.8,
                  py: 0.6,
                  borderRadius: "4px",
                  bgcolor: "rgba(14, 116, 144, 0.08)",
                  border: "1px solid rgba(14, 116, 144, 0.18)",
                }}
              >
                <CodeIcon sx={{ color: "#0E7490", fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#0E7490",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    fontSize: "0.78rem",
                  }}
                >
                  FULL-STACK WEB ENGINEERING
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  color: "#0E172A",
                  fontSize: { xs: "2.35rem", sm: "3.2rem", md: "4.2rem" },
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: { xs: 1.1, md: 1.05 },
                  textTransform: "uppercase",
                  mb: 3,
                }}
              >
                {service.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#4A4D57",
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  lineHeight: 1.8,
                  maxWidth: 680,
                  mb: 4,
                }}
              >
                {service.description}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    bgcolor: "#0E172A",
                    color: "#FFFFFF",
                    px: 3.5,
                    py: 1.4,
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    borderRadius: "6px",
                    boxShadow: "0 6px 20px rgba(14, 23, 42, 0.12)",
                    "&:hover": {
                      bgcolor: "#1E293B",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Start a Project
                </Button>

                <Button
                  component="a"
                  href="#methodology"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(17, 18, 21, 0.2)",
                    color: "#0E172A",
                    px: 3,
                    py: 1.4,
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    borderRadius: "6px",
                    "&:hover": {
                      borderColor: "#0E172A",
                      bgcolor: "rgba(14, 23, 42, 0.04)",
                    },
                  }}
                >
                  Explore Methodology
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  bgcolor: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid rgba(17, 18, 21, 0.12)",
                  boxShadow: "0 20px 40px rgba(17, 18, 21, 0.06)",
                  overflow: "hidden",
                }}
              >
                {/* Browser Interface Header */}
                <Box
                  sx={{
                    px: 2,
                    py: 1.2,
                    bgcolor: "#F2F0EB",
                    borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ display: "flex", gap: 0.8 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#E2E8F0" }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#CBD5E1" }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#94A3B8" }} />
                  </Box>

                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.3,
                      bgcolor: "#FFFFFF",
                      borderRadius: "4px",
                      border: "1px solid rgba(17, 18, 21, 0.06)",
                      fontSize: "0.72rem",
                      fontFamily: "monospace",
                      color: "#5E6068",
                    }}
                  >
                    https://platform.aetibar.in
                  </Box>

                  <Box
                    sx={{
                      px: 1,
                      py: 0.2,
                      bgcolor: "rgba(16, 185, 129, 0.1)",
                      borderRadius: "3px",
                      color: "#059669",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      fontFamily: "monospace",
                    }}
                  >
                    ⚡ FCP 0.38s
                  </Box>
                </Box>

                {/* Main Product Visual */}
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 240, sm: 300, md: 360 },
                    width: "100%",
                    bgcolor: "#EBE8DF",
                  }}
                >
                  <Image
                    src="/images/portfolio/ecommerce.png"
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(14, 23, 42, 0.02) 0%, rgba(14, 23, 42, 0.35) 100%)",
                    }}
                  />

                  {/* Telemetry Indicators Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      right: 12,
                      bgcolor: "rgba(250, 249, 245, 0.95)",
                      backdropFilter: "blur(6px)",
                      px: 2,
                      py: 1,
                      borderRadius: "6px",
                      border: "1px solid rgba(17, 18, 21, 0.08)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#0E172A",
                        fontWeight: 700,
                        fontFamily: "monospace",
                        fontSize: "0.72rem",
                      }}
                    >
                      LIGHTHOUSE 100/100 • SSR HYDRATION &lt; 120ms
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#0E7490",
                        fontWeight: 800,
                        fontSize: "0.72rem",
                      }}
                    >
                      NEXT.JS 15+
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. INTERACTIVE METHODOLOGY EXPLORER */}
      <Box id="methodology" sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="xl">
          <InteractiveServiceExplorer
            detailedContent={service.detailedContent}
            features={service.features}
            serviceTitle={service.title}
          />
        </Container>
      </Box>

      {/* 3. INTERACTIVE SCOPE & TIMELINE ESTIMATOR */}
      <Box sx={{ bgcolor: "#F2F0EB", py: { xs: 10, md: 16 }, borderTop: "1px solid rgba(17, 18, 21, 0.08)", borderBottom: "1px solid rgba(17, 18, 21, 0.08)" }}>
        <Container maxWidth="xl">
          <InteractiveScopeEstimator
            serviceTitle={service.title}
            serviceSlug={service.slug}
          />
        </Container>
      </Box>

      {/* 4. TECH STACK & INDUSTRIES SERVED */}
      <Box
        sx={{
          bgcolor: "#FAF9F5",
          py: { xs: 10, md: 16 },
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, lg: 8 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  display: "block",
                  mb: 1.5,
                }}
              >
                ENGINEERING TOOLS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: "#0E172A",
                  fontSize: { xs: "1.8rem", md: "2.3rem" },
                  letterSpacing: "-0.02em",
                }}
              >
                Technologies We Use
              </Typography>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 1.5 }}>
                {service.technologies.map((tech, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      bgcolor: "#FFFFFF",
                      p: 2,
                      borderRadius: "8px",
                      border: "1px solid rgba(17, 18, 21, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "#0E7490",
                        transform: "translateX(3px)",
                      },
                    }}
                  >
                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#0E7490" }} />
                    <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#0E172A" }}>
                      {tech}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  display: "block",
                  mb: 1.5,
                }}
              >
                MARKET SECTORS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: "#0E172A",
                  fontSize: { xs: "1.8rem", md: "2.3rem" },
                  letterSpacing: "-0.02em",
                }}
              >
                Industries Served
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {service.domains.map((domain, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      bgcolor: "#FFFFFF",
                      p: 2.5,
                      borderRadius: "8px",
                      border: "1px solid rgba(17, 18, 21, 0.08)",
                      borderLeft: "3px solid #0E7490",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        boxShadow: "0 6px 16px rgba(17, 18, 21, 0.04)",
                      },
                    }}
                  >
                    <Typography
                      sx={{ color: "#0E172A", mb: 0.5, fontWeight: 700, fontSize: "1.05rem" }}
                    >
                      {domain.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#5E6068", lineHeight: 1.6 }}>
                      {domain.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. INTERACTIVE FAQS & CTA */}
      <ServiceFaqSection faqs={webDevFaqs} />
      <CtaSection />
    </Box>
  );
}
