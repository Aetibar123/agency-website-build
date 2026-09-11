"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const capabilityTracks = [
  {
    num: "01",
    tag: "STRATEGY",
    title: "Systems & Architecture",
    desc: "Architectural scoping that prevents technical debt before it starts.",
    items: [
      "Legacy Codebase Decoupling & Modernization",
      "API Orchestration & Third-Party Integrations",
      "Database Modeling & Scalable Schemas",
      "Technical Due Diligence & Architecture Audits",
    ],
  },
  {
    num: "02",
    tag: "BUILD",
    title: "Full-Stack Engineering",
    desc: "Modern, strictly-typed frontends and resilient cloud microservices.",
    items: [
      "Next.js App Router & React Server Components",
      "TypeScript End-to-End Type Safety",
      "Sub-Second First Contentful Paint (FCP)",
      "Edge Middleware & Incremental Regeneration",
    ],
  },
  {
    num: "03",
    tag: "INTELLIGENCE",
    title: "Applied AI Automation",
    desc: "Deterministic workflows and autonomous business agents.",
    items: [
      "Domain-Specific RAG Knowledge Retrieval",
      "Autonomous Multi-Agent Task Orchestration",
      "Vector Embeddings & Semantic Search",
      "Policy Guardrails & Hallucination Prevention",
    ],
  },
  {
    num: "04",
    tag: "GROWTH",
    title: "Search & Telemetry",
    desc: "Data-driven organic search architecture and performance metrics.",
    items: [
      "Large-Scale 301 Migration Governance",
      "Sub-Second Core Web Vitals Compliance",
      "Schema.org Semantic Knowledge Graphs",
      "Real-Time Telemetry & Conversion Tracking",
    ],
  },
];

const pipelineSteps = [
  {
    stage: "01 // INGESTION",
    title: "Input & Event Trigger",
    detail: "Unstructured business input, webhook, or user query received via secure endpoint.",
    badge: "OAuth 2.0 / SSL",
  },
  {
    stage: "02 // RETRIEVAL (RAG)",
    title: "Vector Search & Context",
    detail: "Queries private vector store for verified documentation and historical company records.",
    badge: "Vector DB / Cosine",
  },
  {
    stage: "03 // SYNTHESIS",
    title: "LLM Reasoning Engine",
    detail: "Generates factually grounded solutions within calibrated schema constraints.",
    badge: "Claude / GPT-4o",
  },
  {
    stage: "04 // GUARDRAILS",
    title: "Deterministic Validation",
    detail: "Validates against confidence scores, policy rules, and PII protection filters.",
    badge: "Zero-Hallucination",
  },
  {
    stage: "05 // EXECUTION",
    title: "Automated Action Dispatch",
    detail: "Executes verified task, updates internal CRM/database, or routes to human agent.",
    badge: "Webhook / DB Write",
  },
];

export default function TechCapabilitiesSection() {
  return (
    <Box
      id="technology"
      component="section"
      sx={{
        bgcolor: "#FAF9F5",
        py: { xs: 12, md: 18 },
        borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 12 }, maxWidth: "880px" }}>
          <Typography
            variant="caption"
            sx={{
              color: "#0E7490",
              fontWeight: 700,
              letterSpacing: "0.14em",
              display: "block",
              mb: 2,
            }}
          >
            TECHNICAL CAPABILITIES & SYSTEMS ARCHITECTURE
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#0E172A",
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" },
              fontWeight: 800,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            Engineering Rigor For{" "}
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            <Box component="span" sx={{ color: "#0E7490" }}>
              Intelligent Digital Systems.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#4A4D57",
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 1.8,
            }}
          >
            We don&apos;t use tech buzzwords to impress. We organize engineering capabilities under four
            disciplined tracks that prioritize performance, security, and developer productivity for your
            business today and years into the future.
          </Typography>
        </Box>

        {/* 4 Grouped Typography Tracks */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 10, md: 14 } }}>
          {capabilityTracks.map((track) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={track.num}>
              <Box
                sx={{
                  pt: 2.5,
                  borderTop: "2px solid #0E7490",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5, mb: 1.5 }}>
                    <Typography
                      sx={{
                        color: "#0E7490",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {track.num}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#5E6068",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "0.12em",
                      }}
                    >
                      TRACK // {track.tag}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      color: "#0E172A",
                      fontSize: { xs: "1.25rem", md: "1.45rem" },
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      mb: 1.5,
                    }}
                  >
                    {track.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#5E6068",
                      lineHeight: 1.6,
                      fontSize: "0.9rem",
                      mb: 3,
                    }}
                  >
                    {track.desc}
                  </Typography>
                </Box>

                {/* Bulleted Track Capabilities */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.2,
                    pt: 2,
                    borderTop: "1px solid rgba(17, 18, 21, 0.08)",
                  }}
                >
                  {track.items.map((item, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}>
                      <Box
                        sx={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          bgcolor: "#0E7490",
                          mt: "7px",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#2C2E35",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Diagrammatic UI: Applied AI & Automation Pipeline */}
        <Box
          sx={{
            bgcolor: "#F2F0EB",
            p: { xs: 3.5, sm: 4, md: 5 },
            borderRadius: "12px",
            border: "1px solid rgba(17, 18, 21, 0.1)",
          }}
        >
          {/* Header of Diagram */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2,
              mb: 4,
              pb: 3,
              borderBottom: "1px solid rgba(17, 18, 21, 0.1)",
            }}
          >
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  display: "block",
                  mb: 0.5,
                }}
              >
                SYSTEM DIAGRAM // AETIBAR_AI_PIPELINE_V3.2
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#0E172A",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                Production RAG &amp; Agent Workflow Architecture
              </Typography>
            </Box>

            <Box
              sx={{
                px: 1.8,
                py: 0.6,
                bgcolor: "#FFFFFF",
                borderRadius: "4px",
                border: "1px solid rgba(17, 18, 21, 0.1)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#0E172A",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                }}
              >
                STATUS: DETERMINISTIC • 99.9% UPTIME
              </Typography>
            </Box>
          </Box>

          {/* 5-Stage Diagrammatic Sequence */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(5, 1fr)",
              },
              gap: 2.5,
            }}
          >
            {pipelineSteps.map((step, idx) => (
              <Box
                key={step.stage}
                sx={{
                  bgcolor: "#FFFFFF",
                  p: 2.5,
                  borderRadius: "8px",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: { sm: 190 },
                  position: "relative",
                  ...(idx === 4 && {
                    gridColumn: { sm: "span 2", lg: "span 1" },
                  }),
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#0E7490",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#0E7490",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      letterSpacing: "0.08em",
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {step.stage}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#0E172A",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#5E6068",
                      fontSize: "0.8125rem",
                      lineHeight: 1.5,
                      mb: 2,
                    }}
                  >
                    {step.detail}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    pt: 1.5,
                    borderTop: "1px dashed rgba(17, 18, 21, 0.1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#0E172A",
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                    }}
                  >
                    {step.badge}
                  </Typography>

                  {idx < pipelineSteps.length - 1 && (
                    <ArrowForwardIcon
                      sx={{
                        fontSize: 14,
                        color: "#0E7490",
                        display: { xs: "none", lg: "block" },
                      }}
                    />
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
