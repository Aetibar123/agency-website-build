"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

interface ProcessStep {
  num: string;
  phase: string;
  title: string;
  desc: string;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    num: "01",
    phase: "PHASE: DISCOVERY",
    title: "Discovery & Strategic Alignment",
    desc: "We analyze your commercial model, customer journeys, technical debt, and revenue milestones. We establish non-negotiable architectural boundaries and performance metrics before touching code.",
    deliverables: [
      "Strategic Requirements Brief",
      "Technical Scope & Architecture Plan",
      "Milestone Commitments & Timeline",
    ],
  },
  {
    num: "02",
    phase: "PHASE: DEFINITION",
    title: "System Architecture & Data Modeling",
    desc: "We map domain models, REST/GraphQL endpoints, database schemas, third-party API dependencies, and infrastructure topology to eliminate runtime ambiguity and ensure clean sprint velocity.",
    deliverables: [
      "API & Schema Specifications",
      "Cloud Infrastructure Blueprint",
      "Security & Authentication Schema",
    ],
  },
  {
    num: "03",
    phase: "PHASE: DESIGN",
    title: "Scalable Design Systems & UI/UX",
    desc: "We craft modular Figma design tokens, WCAG-compliant design systems, and responsive interaction prototypes engineered for high-intent conversions and seamless cross-platform consistency.",
    deliverables: [
      "Full Figma Component System",
      "Interactive High-Fidelity Prototype",
      "Design Tokens & Asset Library",
    ],
  },
  {
    num: "04",
    phase: "PHASE: BUILD",
    title: "Bespoke Full-Stack Engineering",
    desc: "Our engineers write clean, strictly-typed Next.js, React, Node.js, and Python codebases. Every sprint includes continuous integration, automated unit testing, and edge deployment verification.",
    deliverables: [
      "Production-Grade Typed Codebase",
      "Automated CI/CD Pipelines",
      "Unit & Integration Test Coverage",
    ],
  },
  {
    num: "05",
    phase: "PHASE: LAUNCH",
    title: "Quality Assurance, SEO & Deployment",
    desc: "Comprehensive cross-device stress testing, sub-second Core Web Vitals optimization, semantic schema validation, and zero-downtime production deployment.",
    deliverables: [
      "Sub-Second Core Web Vitals Score",
      "Technical SEO & Schema Validation",
      "Verified Production Launch",
    ],
  },
  {
    num: "06",
    phase: "PHASE: SCALE",
    title: "Measurement, AI & Long-Term Growth",
    desc: "Post-launch telemetry analysis, organic search position tracking, AI agent capability upgrades, and proactive maintenance to support your ongoing business expansion.",
    deliverables: [
      "Real-Time Telemetry & Analytics",
      "Proactive Security & Cloud Upgrades",
      "Quarterly Roadmap Strategy",
    ],
  },
];

export default function ProcessSection() {
  return (
    <Box
      id="process"
      component="section"
      sx={{
        bgcolor: "#F2F0EB",
        py: { xs: 12, md: 18 },
        borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ mb: { xs: 8, md: 12 }, maxWidth: "840px" }}>
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
            STRUCTURED METHODOLOGY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#0E172A",
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.4rem" },
              fontWeight: 800,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            From Initial Hypothesis{" "}
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            <Box component="span" sx={{ color: "#0E7490" }}>
              To Predictable Scale.
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
            Predictable outcomes require disciplined execution. We follow a sequential, six-stage
            framework designed to keep stakeholders informed, reduce technical debt, and guarantee
            high-craft software that stands the test of commercial growth.
          </Typography>
        </Box>

        {/* Vertical Typographic Sequence */}
        <Box sx={{ borderBottom: "1px solid rgba(17, 18, 21, 0.1)" }}>
          {steps.map((step) => (
            <Box
              key={step.num}
              sx={{
                py: { xs: 4, sm: 5, md: 5.5 },
                px: { xs: 2, md: 3 },
                borderTop: "1px solid rgba(17, 18, 21, 0.1)",
                transition: "all 0.25s ease",
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.7)",
                },
              }}
            >
              <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: "flex-start" }}>
                {/* Stage Numeral & Phase Eyebrow */}
                <Grid size={{ xs: 12, md: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row", md: "column" },
                      alignItems: { xs: "baseline", md: "flex-start" },
                      gap: { xs: 2, md: 0.5 },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#0E7490",
                        fontSize: { xs: "1.8rem", md: "2.8rem" },
                        fontWeight: 800,
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {step.num}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#6B6E76",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {step.phase}
                    </Typography>
                  </Box>
                </Grid>

                {/* Stage Title & Narrative Description */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#0E172A",
                      fontSize: { xs: "1.25rem", md: "1.45rem" },
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      mb: 1.5,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#4A4D57",
                      lineHeight: 1.75,
                      fontSize: "0.98rem",
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Grid>

                {/* Stage Deliverables & Outcomes */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      bgcolor: "#FAF9F5",
                      p: 2.5,
                      borderRadius: "8px",
                      border: "1px solid rgba(17, 18, 21, 0.08)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#0E7490",
                        fontWeight: 800,
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        display: "block",
                        mb: 1.5,
                      }}
                    >
                      KEY DELIVERABLES & ARTIFACTS
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                      {step.deliverables.map((del, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              bgcolor: "#0E172A",
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              color: "#2C2E35",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                            }}
                          >
                            {del}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
