import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Chip, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export const metadata: Metadata = {
  title: "Solutions | Purpose-Built Digital Systems for Business Workflows",
  description:
    "Different problems need different systems. Aetibar engineers custom business websites, customer & lead pipelines, internal operational tools, and practical automation.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions",
  },
};

const solutions = [
  {
    slug: "business-websites",
    path: "/solutions/business-websites",
    title: "Business Websites",
    headline: "A website as part of the customer's business journey.",
    description:
      "We engineer websites that act as the strategic front door to your business — communicating your core value, structuring client inquiries, and converting qualified traffic into direct commercial conversations.",
    icon: <LanguageIcon sx={{ fontSize: 32, color: "#0E7490" }} />,
    keyPoints: [
      "Discovery-focused architecture and clear value articulation",
      "High-speed server rendering (Next.js) for instant page loads",
      "Custom intake forms capturing structured project scope",
      "Technical SEO foundations and semantic search markup",
    ],
    suitedFor: "Established businesses whose current website fails to reflect their real authority or capture qualified buyers.",
  },
  {
    slug: "customer-lead-systems",
    path: "/solutions/customer-lead-systems",
    title: "Customer & Lead Systems",
    headline: "Pipelines that help businesses manage enquiries, follow-up, and client communication.",
    description:
      "When leads arrive across emails, WhatsApp, and form submissions, inquiries get lost and follow-ups drag. We build unified lead intake pipelines and client portals tailored to how your sales team actually closes deals.",
    icon: <HubOutlinedIcon sx={{ fontSize: 32, color: "#0E7490" }} />,
    keyPoints: [
      "Multi-source inquiry consolidation into a single queue",
      "Automated follow-up triggers and reminder sequences",
      "Customer self-service tracking and document portals",
      "Pipeline stage visibility and conversion telemetry",
    ],
    suitedFor: "Companies receiving multi-channel inquiries who lose momentum due to manual spreadsheet tracking and delayed follow-ups.",
  },
  {
    slug: "internal-business-tools",
    path: "/solutions/internal-business-tools",
    title: "Internal Business Tools",
    headline: "Custom applications and dashboards for managing internal work and operations.",
    description:
      "Off-the-shelf SaaS often introduces 50 features you don't need while missing the 3 you rely on daily. We develop purpose-built internal dashboards, dispatch applications, and order workflows built around your specific roles.",
    icon: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 32, color: "#0E7490" }} />,
    keyPoints: [
      "Role-based operational dashboards for managers and staff",
      "Work order dispatch, scheduling, and mobile field logs",
      "Instant margin-aware quote calculators and PDF generators",
      "Secure centralized database replacing brittle spreadsheets",
    ],
    suitedFor: "Service and operations teams outgrowing spreadsheets and seeking software tailored exactly to their operational steps.",
  },
  {
    slug: "ai-automation",
    path: "/solutions/ai-automation",
    title: "AI & Automation",
    headline: "AI should solve a real problem before it becomes part of your workflow.",
    description:
      "We reject empty AI hype. We implement automation and language models only where repetitive friction drains human energy — such as parsing unstructured invoices, classifying support tickets, or syncing data between legacy tools.",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 32, color: "#0E7490" }} />,
    keyPoints: [
      "Inbound email and document categorization with confidence scoring",
      "Human-in-the-loop validation ensuring zero hallucinated actions",
      "Webhook and API bridges connecting disparate platforms",
      "Automated extraction of tables and forms into database fields",
    ],
    suitedFor: "Organizations with high transaction or inquiry volume where administrative data-entry creates an operational bottleneck.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 10, md: 14 },
          bgcolor: "#FAF9F5",
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(14, 116, 144, 0.04) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(14, 23, 42, 0.03) 0%, transparent 45%)
          `,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center" }}>
            <Chip
              label="Tailored Digital Architecture"
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
                fontSize: { xs: "2.5rem", sm: "3.25rem", md: "4rem" },
                fontWeight: 600,
                color: "#0E172A",
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                mb: 3,
              }}
            >
              Different problems need different systems.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", md: "1.25rem" },
                color: "#475569",
                lineHeight: 1.8,
                maxWidth: 720,
                mx: "auto",
                mb: 4,
              }}
            >
              Aetibar does not force every business into the same product or service package. We first diagnose where friction and disconnected information exist, then engineer the specific solution area that unlocks leverage.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Solutions Grid */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {solutions.map((item) => (
              <Grid size={{ xs: 12, md: 6 }} key={item.slug}>
                <Box
                  sx={{
                    bgcolor: "#FAF9F5",
                    borderRadius: "18px",
                    p: { xs: 3.5, sm: 5 },
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease-in-out",
                    "&:hover": {
                      borderColor: "rgba(14, 116, 144, 0.3)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 36px rgba(14, 23, 42, 0.05)",
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                      <Box
                        sx={{
                          width: 54,
                          height: 54,
                          borderRadius: "12px",
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(14, 116, 144, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                    </Box>

                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "1.5rem", sm: "1.75rem" },
                        fontWeight: 600,
                        color: "#0E172A",
                        letterSpacing: "-0.02em",
                        mb: 1.5,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#0E7490",
                        mb: 2,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.headline}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#475569",
                        lineHeight: 1.75,
                        fontSize: "0.925rem",
                        mb: 3.5,
                      }}
                    >
                      {item.description}
                    </Typography>

                    {/* Key capabilities */}
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#0E172A",
                        mb: 1.5,
                      }}
                    >
                      System Focus:
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25, mb: 3.5 }}>
                      {item.keyPoints.map((pt, idx) => (
                        <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
                          <CheckCircleOutlinedIcon sx={{ color: "#0E7490", fontSize: 18, mt: 0.2 }} />
                          <Typography sx={{ fontSize: "0.85rem", color: "#334155", lineHeight: 1.5 }}>
                            {pt}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box
                      sx={{
                        p: 2,
                        borderRadius: "8px",
                        bgcolor: "rgba(14, 23, 42, 0.03)",
                        borderLeft: "3px solid #0E7490",
                        mb: 4,
                      }}
                    >
                      <Typography sx={{ fontSize: "0.8rem", color: "#64748B" }}>
                        <strong style={{ color: "#0E172A" }}>Ideal Context:</strong> {item.suitedFor}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ pt: 3, borderTop: "1px solid rgba(17, 18, 21, 0.08)" }}>
                    <Link href={item.path} style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                        sx={{
                          bgcolor: "#0E172A",
                          color: "#FFFFFF",
                          px: 3,
                          py: 1.25,
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          borderRadius: "6px",
                          boxShadow: "none",
                          "&:hover": {
                            bgcolor: "#1E293B",
                          },
                        }}
                      >
                        Explore {item.title}
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
