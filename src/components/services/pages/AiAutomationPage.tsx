"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ServiceFaqSection from "../ServiceFaqSection";
import InteractiveServiceExplorer from "../InteractiveServiceExplorer";
import InteractiveScopeEstimator from "../InteractiveScopeEstimator";
import CtaSection from "../../home/CtaSection";
import Image from "next/image";
import Link from "next/link";

const autoFaqs = [
  {
    question: "What business workflows are best suited for AI automation?",
    answer:
      "Repetitive, document-heavy, or communication-intensive processes benefit most: customer support tier-1 inquiries, lead enrichment and routing, document indexing, appointment bookings, and automated CRM updates.",
  },
  {
    question: "Can custom AI agents integrate safely with our internal tools and databases?",
    answer:
      "Yes. We configure secure API connectors with role-based access, data encryption in transit and at rest, and deterministic guardrails so the AI models never hallucinate unauthorized actions.",
  },
  {
    question: "What is Retrieval-Augmented Generation (RAG) and why is it better than a basic chatbot?",
    answer:
      "A basic chatbot relies solely on generic model memory. A RAG system dynamically retrieves verified chunks of your proprietary business documentation, FAQs, and product catalogs to formulate factually grounded responses.",
  },
  {
    question: "How do you handle edge cases when the AI is unsure?",
    answer:
      "We implement confidence scoring thresholds. Whenever customer intent drops below a calibrated confidence score, the conversation automatically escalates to a human operator with full context pre-populated.",
  },
];

export default function AiAutomationPage({ service }: { service: ServiceDetail }) {
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
                <SmartToyOutlinedIcon sx={{ color: "#0E7490", fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#0E7490",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    fontSize: "0.78rem",
                  }}
                >
                  INTELLIGENT SYSTEMS &bull; RAG &bull; AGENTS
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  color: "#0E172A",
                  fontSize: { xs: "2.35rem", sm: "3.2rem", md: "4.2rem" },
                  fontWeight: 600,
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
                  Automate Your Workflows
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
                  Explore AI Methodology
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
                  p: 2,
                  border: "1px solid rgba(17, 18, 21, 0.12)",
                  boxShadow: "0 20px 40px rgba(17, 18, 21, 0.06)",
                }}
              >
                {/* AI Pipeline Architecture Monitor */}
                <Box
                  sx={{
                    pb: 1.5,
                    mb: 1.5,
                    borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#0E7490",
                      fontFamily: "monospace",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                    }}
                  >
                    AI_WORKFLOW_MONITOR // V3.2
                  </Typography>
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
                    ● AGENT LIVE
                  </Box>
                </Box>

                {/* Workflow Image Backdrop */}
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 200, sm: 240, md: 260 },
                    width: "100%",
                    borderRadius: "8px",
                    overflow: "hidden",
                    bgcolor: "#EBE8DF",
                    mb: 2,
                  }}
                >
                  <Image
                    src="/images/portfolio/ai-support.png"
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
                        "linear-gradient(180deg, rgba(14, 23, 42, 0.1) 0%, rgba(14, 23, 42, 0.45) 100%)",
                    }}
                  />
                </Box>

                {/* Real-time Telemetry Metrics */}
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1.5, textAlign: "center" }}>
                  <Box sx={{ p: 1, bgcolor: "#FAF9F5", borderRadius: "6px", border: "1px solid rgba(17, 18, 21, 0.06)" }}>
                    <Typography variant="caption" sx={{ color: "#5E6068", fontSize: "0.7rem", display: "block" }}>
                      CONFIDENCE
                    </Typography>
                    <Typography sx={{ color: "#0E7490", fontWeight: 800, fontSize: "0.95rem", fontFamily: "monospace" }}>
                      99.4%
                    </Typography>
                  </Box>
                  <Box sx={{ p: 1, bgcolor: "#FAF9F5", borderRadius: "6px", border: "1px solid rgba(17, 18, 21, 0.06)" }}>
                    <Typography variant="caption" sx={{ color: "#5E6068", fontSize: "0.7rem", display: "block" }}>
                      LATENCY
                    </Typography>
                    <Typography sx={{ color: "#0E7490", fontWeight: 800, fontSize: "0.95rem", fontFamily: "monospace" }}>
                      &lt; 350ms
                    </Typography>
                  </Box>
                  <Box sx={{ p: 1, bgcolor: "#FAF9F5", borderRadius: "6px", border: "1px solid rgba(17, 18, 21, 0.06)" }}>
                    <Typography variant="caption" sx={{ color: "#5E6068", fontSize: "0.7rem", display: "block" }}>
                      PRIVACY
                    </Typography>
                    <Typography sx={{ color: "#059669", fontWeight: 800, fontSize: "0.95rem", fontFamily: "monospace" }}>
                      100% PII
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
                AI &amp; AUTOMATION FRAMEWORKS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
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
                AI USE CASES &amp; DOMAINS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
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
      <ServiceFaqSection faqs={autoFaqs} />
      <CtaSection />
    </Box>
  );
}
