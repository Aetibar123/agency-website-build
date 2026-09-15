import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SolutionsCta from "../../../components/solutions/SolutionsCta";

export const metadata: Metadata = {
  title: "Business Websites | Strategic Front Door for Modern Workflows | Aetibar",
  description:
    "We engineer sub-second Next.js web platforms that articulate your commercial value, qualify high-intent client inquiries, and integrate seamlessly into your sales pipeline.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions/business-websites",
  },
  openGraph: {
    title: "Business Websites | Strategic Front Door | Aetibar",
    description:
      "Sub-second Next.js web applications engineered for instant credibility and conversion. Problem-first positioning, dynamic scope intake, and technical SEO.",
    url: "https://www.aetibar.in/solutions/business-websites",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar Business Websites",
      },
    ],
  },
};

const journeyStages = [
  {
    stage: "01",
    title: "How Customers Find Information",
    icon: <VisibilityOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    summary: "Clear indexing, technical SEO, and instant visual relevance.",
    description:
      "A prospective buyer lands on your site looking for a solution to a specific pain point. If they are met with vague agency buzzwords or slow loading speeds, they bounce immediately. We structure search architecture and instant page delivery so visitors locate answers within three seconds.",
  },
  {
    stage: "02",
    title: "How They Understand Your Business",
    icon: <PsychologyOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    summary: "Transparent capability mapping and verifiable proof.",
    description:
      "Customers don't want generic lists of 'technologies'; they want to know whether you understand their operational problem. We organize your content around customer challenges, case context, and clear service boundaries so your value proposition is unmistakable.",
  },
  {
    stage: "03",
    title: "How They Submit Enquiries",
    icon: <SendOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    summary: "Structured intake replacing ambiguous contact forms.",
    description:
      "A generic form with 'Name / Email / Message' invites low-intent spam while forcing serious buyers to write essays. We design interactive qualification forms that gather project scope, current tools, and timeline upfront, saving hours of back-and-forth email.",
  },
  {
    stage: "04",
    title: "How They Move Toward Action",
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    summary: "Direct connection to your internal response workflow.",
    description:
      "The customer's inquiry does not get dumped into an unattended inbox. It syncs directly with your team's lead management queue, triggering instant confirmation to the customer and routing the lead with full context to the right specialist.",
  },
];

const capabilities = [
  "Custom Next.js 16 Frontend (Sub-0.4s Core Web Vitals on Edge CDN)",
  "Problem-First Information Architecture & High-Converting Copywriting",
  "Tailored Lead Qualification & Interactive Scope Intake Forms",
  "Automated Webhooks to Internal CRMs or Operations Tools (Slack/Email/Postgres)",
  "Complete Technical SEO, JSON-LD Schema & Semantic HTML Markup",
  "Accessibility Compliant (WCAG AA) & Precision Mobile UX",
];

const telemetryStats = [
  { value: "0.38s", label: "Edge LCP Speed", desc: "Sub-second initial paint eliminates visitor bounce" },
  { value: "99/100", label: "Lighthouse Score", desc: "Top tier performance, accessibility & SEO rank" },
  { value: "+240%", label: "Qualified Leads", desc: "Targeted intake filters high-intent inquiries upfront" },
  { value: "0%", label: "Plugin Bloat", desc: "Native code ensures zero WordPress crash vulnerability" },
];

export default function BusinessWebsitesPage() {
  return (
    <main>
      {/* 1. Hero */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 16, sm: 18, md: 22 },
          pb: { xs: 10, md: 14 },
          background:
            "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.09) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
          overflow: "hidden",
        }}
      >
        {/* Subtle Architectural Grid */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(24, 24, 27, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 24, 27, 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>
            {/* Status Pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.2,
                py: 0.8,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                backdropFilter: "blur(12px)",
                mb: 3.5,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#F97316",
                  boxShadow: "0 0 10px #F97316",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.825rem" },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#EA580C",
                  textTransform: "uppercase",
                }}
              >
                SOLUTION DOMAIN 01 &bull; CUSTOMER FRONT DOOR
              </Typography>
            </Box>

            {/* Main Headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.2rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.035em",
                lineHeight: { xs: 1.15, md: 1.08 },
                mb: 3,
              }}
            >
              A website engineered as the{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                front door to your business.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.8,
                maxWidth: 760,
                mx: "auto",
                mb: 5,
              }}
            >
              We do not build generic brochure websites that simply list services. We design and engineer Next.js
              platforms as the strategic entry point of your commercial pipeline—built around how buyers discover,
              evaluate, and commit to working with your company.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
                mb: 6,
              }}
            >
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: { xs: 3.5, sm: 4.5 },
                    py: { xs: 1.5, sm: 1.6 },
                    borderRadius: "9999px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    boxShadow: "0 10px 28px rgba(234, 88, 12, 0.35)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 14px 34px rgba(234, 88, 12, 0.5)",
                    },
                  }}
                >
                  Discuss Your Website Architecture
                </Button>
              </Link>

              <Link href="/portfolio" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#18181B",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.5, sm: 1.6 },
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    border: "1px solid rgba(24, 24, 27, 0.18)",
                    bgcolor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    "&:hover": {
                      bgcolor: "#FAF8F5",
                      borderColor: "rgba(24, 24, 27, 0.35)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  View Case Studies
                </Button>
              </Link>
            </Box>

            {/* Quick Telemetry Strip */}
            <Grid
              container
              spacing={2}
              sx={{
                p: 2.5,
                borderRadius: "20px",
                bgcolor: "#FAF8F5",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                textAlign: "center",
              }}
            >
              {telemetryStats.map((stat, idx) => (
                <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                  <Box sx={{ p: 1 }}>
                    <Typography sx={{ fontSize: { xs: "1.3rem", sm: "1.6rem" }, fontWeight: 700, color: "#18181B" }}>
                      {stat.value}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", mb: 0.5 }}>
                      {stat.label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.75rem", color: "#71717A" }}>
                      {stat.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 2. The 4 Stages of the Customer Journey */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                THE BUYER CONVERSION STAGES
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Beyond &ldquo;looking good&rdquo;: engineering the 4 buyer steps
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              A business website succeeds when it removes friction from the buyer&apos;s decision-making process at every step.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {journeyStages.map((stage) => (
              <Grid size={{ xs: 12, md: 6 }} key={stage.stage}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    borderRadius: "20px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#EA580C",
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.06)",
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "12px",
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(249, 115, 22, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {stage.icon}
                      </Box>
                      <Typography sx={{ fontSize: "1.25rem", fontWeight: 800, color: "#EA580C", fontFamily: "monospace" }}>
                        STAGE {stage.stage}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: "#18181B",
                        letterSpacing: "-0.02em",
                        mb: 1,
                      }}
                    >
                      {stage.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#EA580C",
                        mb: 2,
                      }}
                    >
                      {stage.summary}
                    </Typography>

                    <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.7 }}>
                      {stage.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. Engineering Foundations */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2.5,
                }}
              >
                <SpeedOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                  }}
                >
                  ENGINEERING STANDARDS
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.6rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  mb: 2.5,
                }}
              >
                Built for speed, durability, and commercial search visibility.
              </Typography>
              <Typography sx={{ color: "#52525B", lineHeight: 1.75, mb: 4 }}>
                We do not use bloated page-builder plugins that slow down your server or break when WordPress updates.
                We engineer lightweight Next.js platforms that load instantaneously, stay secure, and adapt cleanly as your service offerings evolve.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.75 }}>
                {capabilities.map((cap, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 20 }} />
                    <Typography sx={{ fontSize: "0.95rem", color: "#18181B", fontWeight: 600 }}>
                      {cap}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: { xs: 4, sm: 5 },
                  borderRadius: "24px",
                  bgcolor: "#18181B",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "-20%",
                    right: "-20%",
                    width: "300px",
                    height: "300px",
                    background: "radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#FB923C",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      mb: 1.5,
                    }}
                  >
                    Case in Point &bull; Nexus E-Commerce
                  </Typography>

                  <Typography sx={{ fontSize: "1.5rem", fontWeight: 600, color: "#FFFFFF", mb: 2 }}>
                    Sub-0.4s load speed + automatic inventory webhook sync
                  </Typography>

                  <Typography sx={{ fontSize: "0.95rem", color: "#A1A1AA", lineHeight: 1.75, mb: 4 }}>
                    When retail brand Nexus migrated to our headless Next.js edge architecture, initial page load dropped
                    to 0.38 seconds, and manual inventory updates between warehouse spreadsheets and the online catalog
                    were fully automated via webhook listeners.
                  </Typography>

                  <Link href="/portfolio" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                        color: "#FFFFFF",
                        px: 3.5,
                        py: 1.35,
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        borderRadius: "9999px",
                      }}
                    >
                      Explore Case Study
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. Flagship CTA */}
      <SolutionsCta
        badge="STRATEGIC FRONT DOOR"
        headline="Ready to turn your website into a qualified inquiry engine?"
        description="Schedule a 30-minute website architecture review. We will evaluate your current page load speed, search positioning, and scope intake workflow."
        primaryButtonText="Schedule Architecture Diagnostic"
        secondaryButtonText="All Solution Domains"
        primaryLink="/contact"
        secondaryLink="/solutions"
      />
    </main>
  );
}
