import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Chip, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

export const metadata: Metadata = {
  title: "Business Websites | The Strategic Front Door to Your Customer Journey",
  description:
    "We don't build generic brochure websites. We engineer websites as the strategic starting point of your customer journey — from discovery to structured inquiry.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions/business-websites",
  },
};

const journeyStages = [
  {
    stage: "01",
    title: "How Customers Find Information",
    icon: <VisibilityOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
    summary: "Clear indexing, technical SEO, and immediate visual relevance.",
    description:
      "A prospective buyer lands on your site looking for a solution to a specific pain point. If they are met with vague agency buzzwords or slow loading speeds, they bounce immediately. We structure search architecture and instant page delivery so visitors locate answers within three seconds.",
  },
  {
    stage: "02",
    title: "How They Understand Your Business",
    icon: <PsychologyOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
    summary: "Transparent capability mapping and verifiable proof.",
    description:
      "Customers don't want generic lists of 'technologies'; they want to know whether you understand their operational problem. We organize your content around customer challenges, case context, and clear service boundaries so the value proposition is unmistakable.",
  },
  {
    stage: "03",
    title: "How They Submit Enquiries",
    icon: <SendOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
    summary: "Structured intake replacing ambiguous contact forms.",
    description:
      "A generic form with 'Name / Email / Message' invites low-intent spam while forcing serious buyers to write essays. We design interactive qualification forms that gather project scope, current tools, and timeline upfront, saving hours of back-and-forth email.",
  },
  {
    stage: "04",
    title: "How They Move Toward Action",
    icon: <TrendingUpOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
    summary: "Direct connection to your internal response workflow.",
    description:
      "The customer's inquiry does not get dumped into an unattended inbox. It syncs directly with your team's lead management queue, triggering instant confirmation to the customer and routing the lead with full context to the right specialist.",
  },
];

const capabilities = [
  "Custom Next.js Frontend (Sub-second Core Web Vitals)",
  "Problem-First Information Architecture & Copywriting",
  "Tailored Lead Qualification & Scope Intake Forms",
  "Automated Webhooks to Internal CRMs or Operations Tools",
  "Complete Technical SEO & Semantic Schema Markup",
  "Accessibility Compliant (WCAG AA) & Mobile-First UX",
];

export default function BusinessWebsitesPage() {
  return (
    <main>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 10, md: 14 },
          bgcolor: "#FAF9F5",
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 860, mx: "auto", textAlign: "center" }}>
            <Chip
              label="Solution Area &bull; Digital Presence"
              size="small"
              sx={{
                bgcolor: "rgba(14, 116, 144, 0.08)",
                color: "#0E7490",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                borderRadius: "6px",
                mb: 3,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
                fontWeight: 600,
                color: "#0E172A",
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                mb: 3,
              }}
            >
              A website as part of your customer&apos;s business journey.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#475569",
                lineHeight: 1.8,
                maxWidth: 720,
                mx: "auto",
                mb: 5,
              }}
            >
              We do not build generic brochure websites that simply list services. We design and engineer websites as the strategic entry point of your commercial pipeline — built around how buyers discover, evaluate, and engage with your business.
            </Typography>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />
                }
              sx={{
                bgcolor: "#0E172A",
                color: "#FFFFFF",
                px: 4,
                py: 1.6,
                fontWeight: 700,
                fontSize: "0.95rem",
                borderRadius: "8px",
                boxShadow: "none",
                "&:hover": { bgcolor: "#1E293B" },
              }}
            >
              Discuss Your Website Strategy
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* The 4 Stages of the Customer Journey */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mb: { xs: 6, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem" },
                fontWeight: 600,
                color: "#0E172A",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Beyond &ldquo;Looking Good&rdquo;: The Four Core Stages
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.75 }}>
              A business website succeeds when it removes friction from the buyer&apos;s decision-making process at every step.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {journeyStages.map((stage) => (
              <Grid size={{ xs: 12, md: 6 }} key={stage.stage}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    borderRadius: "16px",
                    bgcolor: "#FAF9F5",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "10px",
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(14, 116, 144, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {stage.icon}
                      </Box>
                      <Typography sx={{ fontSize: "1.25rem", fontWeight: 900, color: "#94A3B8" }}>
                        {stage.stage}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.3rem",
                        fontWeight: 600,
                        color: "#0E172A",
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
                        color: "#0E7490",
                        mb: 2,
                      }}
                    >
                      {stage.summary}
                    </Typography>

                    <Typography sx={{ fontSize: "0.925rem", color: "#475569", lineHeight: 1.7 }}>
                      {stage.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Engineering Foundations */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FAF9F5",
          borderTop: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                label="Engineering Standards"
                size="small"
                sx={{
                  bgcolor: "rgba(14, 116, 144, 0.08)",
                  color: "#0E7490",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  mb: 2,
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.85rem", sm: "2.4rem" },
                  fontWeight: 600,
                  color: "#0E172A",
                  letterSpacing: "-0.03em",
                  mb: 2,
                }}
              >
                Built for performance, longevity, and search visibility.
              </Typography>
              <Typography sx={{ color: "#475569", lineHeight: 1.75, mb: 4 }}>
                We do not use bloated page-builder plugins that slow down your server or break when WordPress updates. We engineer lightweight Next.js platforms that load instantaneously, stay secure, and adapt cleanly as your service offerings evolve.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {capabilities.map((cap, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                    <CheckCircleOutlinedIcon sx={{ color: "#0E7490", fontSize: 18 }} />
                    <Typography sx={{ fontSize: "0.9rem", color: "#334155", fontWeight: 600 }}>
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
                  borderRadius: "16px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(14, 116, 144, 0.2)",
                  boxShadow: "0 16px 40px rgba(14, 23, 42, 0.04)",
                }}
              >
                <Typography sx={{ fontSize: "1.25rem", fontWeight: 600, color: "#0E172A", mb: 2 }}>
                  Case in Point: Nexus E-Commerce
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, mb: 3 }}>
                  When retail brand Nexus moved to our headless Next.js architecture, initial page load dropped to 0.38 seconds, and manual inventory updates between warehouse sheets and the online catalog were fully automated through webhooks.
                </Typography>
                <Link href="/work" style={{ textDecoration: "none" }}>
              <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />
                }
                  sx={{
                    color: "#0E172A",
                    borderColor: "rgba(14, 23, 42, 0.2)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    borderRadius: "6px",
                  }}
                >
                  View Case Study
              </Button>
            </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
