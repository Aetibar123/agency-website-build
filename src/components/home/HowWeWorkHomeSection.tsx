"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import { motion, AnimatePresence } from "framer-motion";

interface MethodologyPhase {
  num: string;
  timeframe: string;
  phaseCode: string;
  name: string;
  headline: string;
  narrative: string;
  deliverable: string;
  gateCheck: string;
  tools: string[];
  icon: React.ReactNode;
}

const phases: MethodologyPhase[] = [
  {
    num: "01",
    timeframe: "Week 1",
    phaseCode: "PHASE 01 // OPERATIONAL DIAGNOSTIC",
    name: "Operational Shadowing & Friction Audit",
    headline: "We observe your day-to-day operations before writing a single line of code.",
    narrative:
      "Most agency projects fail because developers rush into code without understanding operational realities. We shadow your team, audit where inquiries get dropped across WhatsApp, email, and spreadsheets, and quantify the exact operational tax draining your revenue.",
    deliverable: "Operational Friction Matrix & Complete Data Flow Map",
    gateCheck: "Gate 01: All manual re-entries and bottlenecks quantified and signed off with founders.",
    tools: ["Workflow Shadowing", "Bottleneck Audit", "Spreadsheet Tax Calculation", "Tooling Inventory"],
    icon: <SearchOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "02",
    timeframe: "Weeks 2–3",
    phaseCode: "PHASE 02 // TECHNICAL BLUEPRINT",
    name: "Systems Architecture & Schema Design",
    headline: "Architecting the minimal, most reliable system topology.",
    narrative:
      "We design the complete technical foundation before engineering starts: PostgreSQL relational schemas, webhook event contracts, role-based auth boundaries, and API integrations. Validating data flows upfront eliminates scope bloat and guarantees sub-second performance.",
    deliverable: "Technical Specifications, Data Schemas & Interactive Wireframes",
    gateCheck: "Gate 02: API contracts and database schema approved with zero architectural ambiguity.",
    tools: ["PostgreSQL Schemas", "Webhook Topologies", "Role-Based Auth", "API Contracts"],
    icon: <AccountTreeOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "03",
    timeframe: "Weeks 4–6",
    phaseCode: "PHASE 03 // EDGE ENGINEERING",
    name: "Precision Sprints & Staging Previews",
    headline: "Bi-weekly working previews with test-driven precision.",
    narrative:
      "We engineer in tight, transparent 2-week iterations. You receive private Vercel staging preview links at every milestone to test real working software with your actual operational data—ensuring continuous feedback and zero end-of-project surprises.",
    deliverable: "Production Next.js Engine & Private Staging Deployments",
    gateCheck: "Gate 03: 100% automated test coverage and Core Web Vitals 95+ verified.",
    tools: ["Next.js 16 App Router", "Server Actions", "Automated E2E Tests", "Vercel Previews"],
    icon: <CodeOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "04",
    timeframe: "Week 7",
    phaseCode: "PHASE 04 // CONTROLLED ROLLOUT",
    name: "Zero-Disruption Cutover & Data Migration",
    headline: "Dual-run migration ensuring zero lost records or business downtime.",
    narrative:
      "Switching operational tools shouldn't halt your business. We orchestrate dual-run migrations where old spreadsheets and new systems run in parallel until your team is fully comfortable, supported by hands-on staff video training.",
    deliverable: "Migration Verification Audit & Video Staff Training Library",
    gateCheck: "Gate 04: Zero data mismatch across 100% of historical records.",
    tools: ["Zero-Downtime Cutover", "Data Integrity Sync", "Role-Based Training", "Rollback Guards"],
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "05",
    timeframe: "Ongoing",
    phaseCode: "PHASE 05 // OBSERVABILITY & SCALE",
    name: "Telemetry, Observability & SLAs",
    headline: "Continuous monitoring and proactive architectural evolution.",
    narrative:
      "Deployment is day one, not the finish line. We monitor error rates, API response times, and real user interactions with live telemetry. As your business scales, we proactively optimize performance and introduce intelligent automation.",
    deliverable: "Live Telemetry Dashboard & Dedicated Architect SLA",
    gateCheck: "Gate 05: P95 API response times under 200ms and 99.9% uptime compliance.",
    tools: ["Real-time Observability", "P95 Latency Audits", "Error Tracking", "Iterative Enhancements"],
    icon: <MonitorHeartOutlinedIcon sx={{ fontSize: 20 }} />,
  },
];

export default function HowWeWorkHomeSection() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <Box
      component="section"
      id="methodology"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FAF8F5",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header with Standard Alignment Matching All Other Sections */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              gap: 4,
              mb: { xs: 6, md: 9 },
            }}
          >
            <Box sx={{ maxWidth: { xs: "100%", lg: "84%" } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2.5,
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#EA580C" }}
                />
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                    fontWeight: 600,
                  }}
                >
                  Engineering Methodology
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.15, md: 1.08 },
                  letterSpacing: "-0.035em",
                  mb: 2.5,
                }}
              >
                From operational diagnosis to zero-downtime cutover.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  color: "#52525B",
                  lineHeight: 1.75,
                  maxWidth: 780,
                  fontWeight: 400,
                }}
              >
                A disciplined 5-stage engineering lifecycle. Every milestone produces a verified deliverable so you never face dark-period surprises.
              </Typography>
            </Box>

            <Link href="/how-we-work" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  color: "#18181B",
                  borderColor: "rgba(24, 24, 27, 0.25)",
                  bgcolor: "#FFFFFF",
                  px: 3.5,
                  py: 1.35,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  whiteSpace: "nowrap",
                  boxShadow: "0 2px 6px rgba(24, 24, 27, 0.03)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#EA580C",
                    color: "#EA580C",
                    bgcolor: "rgba(249, 115, 22, 0.04)",
                  },
                }}
              >
                Explore Full Lifecycle
              </Button>
            </Link>
          </Box>
        </motion.div>

        {/* Interactive Progress Timeline Scrubber */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(5, 1fr)" },
            gap: 1.5,
            p: 1.2,
            mb: 3,
            bgcolor: "#FFFFFF",
            borderRadius: "20px",
            border: "1px solid rgba(228, 228, 231, 0.9)",
            boxShadow: "0 4px 16px -4px rgba(24, 24, 27, 0.03)",
          }}
        >
          {phases.map((ph, idx) => {
            const isActive = activePhase === idx;
            const isCompleted = activePhase > idx;
            return (
              <Box
                key={ph.num}
                onClick={() => setActivePhase(idx)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 1.4,
                  borderRadius: "14px",
                  cursor: "pointer",
                  bgcolor: isActive ? "rgba(249, 115, 22, 0.08)" : "transparent",
                  border: isActive ? "1px solid rgba(234, 88, 12, 0.3)" : "1px solid transparent",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: isActive ? "rgba(249, 115, 22, 0.1)" : "rgba(24, 24, 27, 0.03)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    fontFamily: "monospace",
                    bgcolor: isActive ? "#EA580C" : isCompleted ? "#22C55E" : "#E4E4E7",
                    color: isActive || isCompleted ? "#FFFFFF" : "#71717A",
                    flexShrink: 0,
                  }}
                >
                  {isCompleted ? "✓" : ph.num}
                </Box>
                <Box sx={{ overflow: "hidden" }}>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "#EA580C" : "#27272A",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {ph.name.split("&")[0]}
                  </Typography>
                  <Typography sx={{ fontSize: "0.72rem", color: "#71717A" }}>
                    {ph.timeframe}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Architectural Phase Accordion Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mb: 5,
          }}
        >
          {phases.map((phase, idx) => {
            const isOpen = activePhase === idx;

            return (
              <Box
                key={phase.num}
                sx={{
                  borderRadius: "22px",
                  bgcolor: "#FFFFFF",
                  border: isOpen
                    ? "1px solid rgba(234, 88, 12, 0.5)"
                    : "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: isOpen
                    ? "0 14px 36px -10px rgba(234, 88, 12, 0.12), 0 2px 8px rgba(24, 24, 27, 0.04)"
                    : "0 2px 8px rgba(24, 24, 27, 0.02)",
                  overflow: "hidden",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Accordion Row Header */}
                <Box
                  onClick={() => setActivePhase(idx)}
                  sx={{
                    p: { xs: 2.6, sm: 3.2 },
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    bgcolor: isOpen ? "rgba(249, 115, 22, 0.03)" : "transparent",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      bgcolor: isOpen ? "rgba(249, 115, 22, 0.04)" : "rgba(249, 115, 22, 0.02)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, sm: 2.8 } }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: isOpen ? "#18181B" : "rgba(24, 24, 27, 0.05)",
                        color: isOpen ? "#FB923C" : "#52525B",
                        transition: "all 0.2s ease",
                        flexShrink: 0,
                      }}
                    >
                      {phase.icon}
                    </Box>

                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 0.3 }}>
                        <Typography
                          sx={{
                            fontFamily: "monospace",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: isOpen ? "#EA580C" : "#71717A",
                          }}
                        >
                          STAGE {phase.num}
                        </Typography>
                        <Box sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: "#D4D4D8" }} />
                        <Typography
                          sx={{
                            fontSize: "0.78rem",
                            color: isOpen ? "#EA580C" : "#71717A",
                            fontWeight: 600,
                          }}
                        >
                          {phase.timeframe}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          fontSize: { xs: "1.1rem", sm: "1.25rem" },
                          fontWeight: 600,
                          color: "#18181B",
                          letterSpacing: "-0.015em",
                        }}
                      >
                        {phase.name}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Toggle Indicator Button */}
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: isOpen ? "#EA580C" : "#F4F4F5",
                      color: isOpen ? "#FFFFFF" : "#71717A",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                    }}
                  >
                    {isOpen ? <RemoveIcon sx={{ fontSize: 20 }} /> : <AddIcon sx={{ fontSize: 20 }} />}
                  </Box>
                </Box>

                {/* Accordion Expanded Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Box
                        sx={{
                          px: { xs: 2.6, sm: 3.8 },
                          pb: { xs: 3.2, sm: 4 },
                          pt: 1.5,
                          borderTop: "1px solid rgba(228, 228, 231, 0.6)",
                        }}
                      >
                        <Grid container spacing={{ xs: 3, md: 5 }}>
                          {/* Left: Narrative & Strategy */}
                          <Grid size={{ xs: 12, md: 7 }}>
                            <Typography
                              sx={{
                                fontSize: { xs: "1.15rem", sm: "1.35rem" },
                                fontWeight: 600,
                                color: "#18181B",
                                lineHeight: 1.35,
                                letterSpacing: "-0.02em",
                                mb: 1.8,
                              }}
                            >
                              {phase.headline}
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: "0.98rem",
                                color: "#52525B",
                                lineHeight: 1.75,
                                mb: 3,
                              }}
                            >
                              {phase.narrative}
                            </Typography>

                            {/* Tooling Tags */}
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                              {phase.tools.map((tag, tIdx) => (
                                <Box
                                  key={tIdx}
                                  sx={{
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: "8px",
                                    bgcolor: "#F4F4F5",
                                    color: "#52525B",
                                    fontSize: "0.75rem",
                                    fontWeight: 500,
                                  }}
                                >
                                  {tag}
                                </Box>
                              ))}
                            </Box>
                          </Grid>

                          {/* Right: Concrete Deliverable & Gate Check */}
                          <Grid size={{ xs: 12, md: 5 }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, height: "100%", justifyContent: "center" }}>
                              {/* Deliverable Pill */}
                              <Box
                                sx={{
                                  p: 2.4,
                                  borderRadius: "16px",
                                  bgcolor: "#FAF8F5",
                                  border: "1px solid rgba(228, 228, 231, 0.9)",
                                }}
                              >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                                  <AssignmentOutlinedIcon sx={{ fontSize: 17, color: "#EA580C" }} />
                                  <Typography
                                    sx={{
                                      fontSize: "0.75rem",
                                      fontWeight: 700,
                                      color: "#EA580C",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.06em",
                                    }}
                                  >
                                    Tangible Client Deliverable
                                  </Typography>
                                </Box>
                                <Typography sx={{ fontSize: "0.925rem", fontWeight: 600, color: "#18181B", lineHeight: 1.45 }}>
                                  {phase.deliverable}
                                </Typography>
                              </Box>

                              {/* Verification Gate Pill */}
                              <Box
                                sx={{
                                  p: 2.4,
                                  borderRadius: "16px",
                                  bgcolor: "rgba(34, 197, 94, 0.05)",
                                  border: "1px solid rgba(34, 197, 94, 0.2)",
                                }}
                              >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                                  <CheckCircleOutlinedIcon sx={{ fontSize: 17, color: "#22C55E" }} />
                                  <Typography
                                    sx={{
                                      fontSize: "0.75rem",
                                      fontWeight: 700,
                                      color: "#166534",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.06em",
                                    }}
                                  >
                                    Milestone Verification Gate
                                  </Typography>
                                </Box>
                                <Typography sx={{ fontSize: "0.875rem", fontWeight: 500, color: "#15803D", lineHeight: 1.45 }}>
                                  {phase.gateCheck}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>

                        {/* Next Stage Stepper Link */}
                        {idx < phases.length - 1 && (
                          <Box sx={{ mt: 3, pt: 2, borderTop: "1px solid rgba(228, 228, 231, 0.6)", display: "flex", justifyContent: "flex-end" }}>
                            <Button
                              size="small"
                              onClick={() => setActivePhase(idx + 1)}
                              endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                              sx={{
                                color: "#EA580C",
                                fontWeight: 600,
                                fontSize: "0.825rem",
                                textTransform: "none",
                                "&:hover": { bgcolor: "rgba(249, 115, 22, 0.08)" },
                              }}
                            >
                              Next: Stage 0{idx + 2} &rarr;
                            </Button>
                          </Box>
                        )}
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            );
          })}
        </Box>

        {/* Single-Row Executive Trust Strip with Full-Width XL Alignment */}
        <Box
          sx={{
            p: { xs: 2.4, md: 3 },
            borderRadius: "20px",
            bgcolor: "#FFFFFF",
            border: "1px solid rgba(228, 228, 231, 0.9)",
            boxShadow: "0 4px 16px -4px rgba(24, 24, 27, 0.03)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: { xs: 2.5, md: 5 } }}>
            {[
              { icon: <VerifiedOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />, text: "Direct Access to Engineers" },
              { icon: <LockOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />, text: "100% Code & Schema Ownership" },
              { icon: <SpeedOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />, text: "Zero-Downtime Migration Record" },
            ].map((item, idx) => (
              <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                {item.icon}
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#27272A" }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Link href="/contact" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#EA580C",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 0.6,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Request Architecture Audit &rarr;
            </Typography>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
