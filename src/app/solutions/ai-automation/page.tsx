import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SolutionsCta from "../../../components/solutions/SolutionsCta";

export const metadata: Metadata = {
  title: "AI & Practical Automation | Pragmatic Problem-First Workflow Engineering | Aetibar",
  description:
    "AI should solve a real problem before it becomes part of your workflow. We engineer targeted document parsers, webhook bridges, and human-verified automation.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions/ai-automation",
  },
  openGraph: {
    title: "AI & Practical Automation | Aetibar",
    description:
      "Targeted language models and webhook bridges where manual administrative friction drains hours. 99.4% precision and human verification gates.",
    url: "https://www.aetibar.in/solutions/ai-automation",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Aetibar AI & Automation",
      },
    ],
  },
};

const practicalUseCases = [
  {
    title: "Repetitive Workflow Automation",
    desc: "Connecting disconnected business software via webhooks and APIs to automatically transfer customer data, sync invoice line-items, and trigger team notifications without manual copying.",
    icon: <SyncAltOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Unstructured Information Processing",
    desc: "Extracting structured data from PDF estimates, supplier spec sheets, scanned receipts, and multi-page contracts directly into database fields for instant review.",
    icon: <DynamicFeedOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Inbound Inquiry & Ticket Triage",
    desc: "Analyzing incoming support or quotation emails to extract customer intent, score urgency, and prepare suggested answers for a human team member to approve with one click.",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
  {
    title: "Internal Knowledge Retrieval",
    desc: "Equipping operations and customer service reps with a private assistant that searches company procedures, product catalogs, and historical projects to surface instant, verified answers.",
    icon: <SecurityOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
  },
];

const telemetryStats = [
  { value: "85%", label: "Manual Hours Saved", desc: "Automating data re-entry across invoice pipelines" },
  { value: "99.4%", label: "Extraction Precision", desc: "Trained vision models on structured tables & forms" },
  { value: "100%", label: "Human Verification Gate", desc: "Critical actions require explicit team sign-off" },
  { value: "0%", label: "Chatbot Hallucination", desc: "No unverified AI bots facing high-value clients" },
];

export default function AiAutomationPage() {
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
                SOLUTION DOMAIN 04 &bull; TARGETED LEVERAGE
              </Typography>
            </Box>

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
              AI should solve a real problem before it becomes{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                part of your workflow.
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
              We don&apos;t pitch AI as magical dust to sprinkle over your business. We implement automation and language models
              strictly where repetitive manual friction drains hours of human effort every single week—with human-in-the-loop safeguards.
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
                  Evaluate Automation Feasibility
                </Button>
              </Link>

              <Link href="/solutions" style={{ textDecoration: "none" }}>
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
                  All 4 Solutions
                </Button>
              </Link>
            </Box>

            {/* Telemetry Strip */}
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

      {/* 2. Honest AI Principles: When to Use vs When NOT to Use */}
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
              <AutoAwesomeOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                OUR HONEST AI CODE OF ETHICS
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
              AI is not the answer to every business problem
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Most operational friction is solved with clean database design and standard API webhooks. Adding complex AI to a
              broken process only creates faster chaos.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* When to use AI */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 5 },
                  borderRadius: "20px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(249, 115, 22, 0.3)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                  <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 26 }} />
                  <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#18181B" }}>
                    When AI is the Right Tool
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.2 }}>
                  {[
                    "When data arrives in unstructured formats (PDF invoices, supplier spec sheets, scanned receipts)",
                    "When human team members spend 10+ hours weekly on manual classification and copy-pasting",
                    "When staff need rapid semantic search over thousands of internal policy documents",
                    "When AI acts as an assistant preparing drafts with human approval before sending",
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#EA580C", mt: 0.8, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.925rem", color: "#27272A", lineHeight: 1.6, fontWeight: 500 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* When NOT to use AI */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 5 },
                  borderRadius: "20px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(239, 68, 68, 0.25)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                  <CancelOutlinedIcon sx={{ color: "#DC2626", fontSize: 26 }} />
                  <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#18181B" }}>
                    When AI is the Wrong Tool
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.2 }}>
                  {[
                    "When exact deterministic math or financial accounting calculations are required",
                    "When autonomous bots are placed in front of high-value clients without human oversight",
                    "When the underlying business workflow has not yet been mapped or standardized",
                    "When a simple automated webhook trigger can accomplish the same task in 2 milliseconds",
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#DC2626", mt: 0.8, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.6 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Practical Automations We Build */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FAF8F5", borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
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
                PROVEN IMPLEMENTATIONS
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
              Practical Automations We Build
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Tested, reliable implementations focused strictly on operational return on time.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {practicalUseCases.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#EA580C",
                      transform: "translateY(-3px)",
                      boxShadow: "0 12px 30px rgba(24, 24, 27, 0.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      bgcolor: "rgba(249, 115, 22, 0.08)",
                      border: "1px solid rgba(249, 115, 22, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. Flagship CTA */}
      <SolutionsCta
        badge="PRACTICAL LEVERAGE"
        headline="Ready to eliminate repetitive manual data entry from your workflow?"
        description="Book an automation feasibility audit with an engineer. We will review your unstructured documents and show you what can be reliably automated."
        primaryButtonText="Schedule Architecture Diagnostic"
        secondaryButtonText="All Solution Domains"
        primaryLink="/contact"
        secondaryLink="/solutions"
      />
    </main>
  );
}
