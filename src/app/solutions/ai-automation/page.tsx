import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid, Chip, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

export const metadata: Metadata = {
  title: "AI & Automation | Pragmatic Problem-First Workflow Engineering",
  description:
    "AI should solve a real problem before it becomes part of your workflow. We build practical automations, document parsers, and assisted workflows with human verification.",
  alternates: {
    canonical: "https://www.aetibar.in/solutions/ai-automation",
  },
};

const practicalUseCases = [
  {
    title: "Repetitive Workflow Automation",
    desc: "Connecting disconnected business software via webhooks and APIs to automatically transfer customer data, sync invoice line-items, and trigger team notifications without manual copying.",
    icon: <SyncAltOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
  },
  {
    title: "Unstructured Information Processing",
    desc: "Extracting structured data from PDF estimates, supplier spec sheets, scanned receipts, and multi-page contracts directly into database fields for instant review.",
    icon: <DynamicFeedOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
  },
  {
    title: "Inbound Inquiry & Ticket Triage",
    desc: "Analyzing incoming support or quotation emails to extract customer intent, score urgency, and prepare suggested answers for a human team member to approve with one click.",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
  },
  {
    title: "Internal Knowledge Retrieval",
    desc: "Equipping operations and customer service reps with a private assistant that searches company procedures, product catalogs, and historical projects to surface instant, verified answers.",
    icon: <SecurityOutlinedIcon sx={{ fontSize: 26, color: "#0E7490" }} />,
  },
];

export default function AiAutomationPage() {
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
              label="Solution Area &bull; Pragmatic Automation"
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
              AI should solve a real problem before it becomes part of your workflow.
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
              We don&apos;t pitch AI as magic dust to sprinkle over your company. We implement automation and language models only where repetitive manual friction drains hours of human effort every single week.
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
              Evaluate Automation Feasibility
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* Honest AI Principles: When to Use vs When NOT to Use */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mb: { xs: 6, md: 8 } }}>
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
              Our Philosophy: AI is Not the Answer to Everything
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.75 }}>
              Most operational problems are solved with clean database design and standard API webhooks. Adding complex AI to a broken process only creates faster chaos.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* When to use AI */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 5 },
                  borderRadius: "16px",
                  bgcolor: "#FAF9F5",
                  border: "1px solid rgba(14, 116, 144, 0.2)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2.5 }}>
                  <CheckCircleOutlinedIcon sx={{ color: "#0E7490", fontSize: 26 }} />
                  <Typography sx={{ fontSize: "1.25rem", fontWeight: 800, color: "#0E172A" }}>
                    When AI is the Right Tool
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    "When data arrives in unstructured formats (handwritten scans, conversational emails, PDFs)",
                    "When human team members spend hours on manual classification and sorting",
                    "When staff need rapid search over thousands of internal policy documents",
                    "When AI acts as an assistant preparing drafts with human approval before sending",
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#0E7490", mt: 0.8, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.875rem", color: "#334155", lineHeight: 1.6 }}>
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
                  borderRadius: "16px",
                  bgcolor: "#FAF9F7",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 2.5 }}>
                  <CancelOutlinedIcon sx={{ color: "#DC2626", fontSize: 26 }} />
                  <Typography sx={{ fontSize: "1.25rem", fontWeight: 800, color: "#0E172A" }}>
                    When AI is the Wrong Tool
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    "When exact deterministic math or financial accounting calculations are required",
                    "When autonomous bots are placed in front of high-value clients without human oversight",
                    "When the underlying business workflow has not yet been mapped or standardized",
                    "When a simple automated webhook trigger can accomplish the same task in 2 milliseconds",
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#DC2626", mt: 0.8, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.875rem", color: "#334155", lineHeight: 1.6 }}>
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

      {/* Practical Use Cases */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FAF9F5", borderTop: "1px solid rgba(17, 18, 21, 0.06)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 780, mb: { xs: 6, md: 8 } }}>
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
              Practical Automations We Build
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.75 }}>
              Tested, reliable implementations focused strictly on operational return on time.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {practicalUseCases.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: "14px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      bgcolor: "rgba(14, 116, 144, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontSize: "1.15rem", fontWeight: 600, color: "#0E172A", mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
}
