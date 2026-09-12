"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button, Slider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface SolutionOption {
  id: string;
  problemTitle: string;
  problemSummary: string;
  impactTag: string;
  impactColor: string;
  solutionTitle: string;
  solutionSummary: string;
  deliverables: string[];
  timeframe: string;
  impact: string;
}

const solutionOptions: SolutionOption[] = [
  {
    id: "leads",
    problemTitle: "Lost Leads on WhatsApp & Web Forms",
    problemSummary: "Inquiries sit in personal chats or unmonitored email inboxes with no fast follow-up.",
    impactTag: "Revenue Speed",
    impactColor: "#EF4444",
    solutionTitle: "Central Lead Hub & Instant 30s Auto-Responder",
    solutionSummary:
      "We connect your website, forms, and WhatsApp into one unified inbox that answers buyers in seconds and alerts your available sales reps immediately.",
    deliverables: [
      "One central dashboard tracking all WhatsApp, web form, and social inquiries",
      "Instant automated personalized welcome reply sent in under 30 seconds",
      "Smart routing that alerts available sales reps on their phone with full brief",
      "Real-time pipeline tracker showing every lead from first contact to signed deal",
    ],
    timeframe: "10–14 Days",
    impact: "100% of leads captured • Under 45-second response time",
  },
  {
    id: "quoting",
    problemTitle: "Slow Pricing & 3-Day Quotation Delays",
    problemSummary: "Sales reps spend days looking up PDF price lists and hand-formatting Word quotes.",
    impactTag: "Sales Velocity",
    impactColor: "#F97316",
    solutionTitle: "Interactive Pricing & 1-Click Proposal Generator",
    solutionSummary:
      "A custom quote builder that calculates costs, enforces profit margins, and generates branded proposals with digital signing in under 2 minutes.",
    deliverables: [
      "Interactive pricing calculator tailored to your exact margin rules",
      "Instant branded PDF proposal generation with a single click",
      "Integrated digital e-signatures and online deposit payments",
      "Automatic price locks that protect your company from accidental underpricing",
    ],
    timeframe: "2–3 Weeks",
    impact: "Quotes delivered in 2 minutes instead of 3 days • Protected profit margins",
  },
  {
    id: "spreadsheets",
    problemTitle: "Staff Drowning in Manual Data Entry",
    problemSummary: "Employees spend hours each day re-typing web orders into fulfillment sheets and accounting.",
    impactTag: "Payroll Waste",
    impactColor: "#F97316",
    solutionTitle: "Automated Multi-Tool Sync & Central Database",
    solutionSummary:
      "We link your business tools so that an order or contract in one system automatically updates your CRM, spreadsheets, and accounting with zero manual typing.",
    deliverables: [
      "Direct real-time connection between your website, CRM, and accounting software",
      "One centralized company database that updates everywhere in milliseconds",
      "Clean role-based dashboards for dispatch, fulfillment, and finance",
      "Automatic alerts for any errors, inventory shifts, or duplicate orders",
    ],
    timeframe: "2–4 Weeks",
    impact: "18+ hours saved weekly per employee • 100% elimination of manual re-typing",
  },
  {
    id: "field",
    problemTitle: "Disconnected Field Teams & Paper Clipboards",
    problemSummary: "Field technicians call the office 10 times a day and use paper receipts that delay billing.",
    impactTag: "Cash Flow Speed",
    impactColor: "#EA580C",
    solutionTitle: "Mobile Field App & Same-Day Invoicing Portal",
    solutionSummary:
      "A simple smartphone web app for your field staff to access daily jobs, gate codes, customer notes, photo proofs, and client signatures on the road.",
    deliverables: [
      "Lightweight mobile web app that works on any phone, even offline",
      "Digital customer signature capture and job completion photo uploads",
      "Turn-by-turn route notes, customer history, and gate access codes",
      "Automated invoice staging the moment a technician taps 'Job Complete'",
    ],
    timeframe: "3–4 Weeks",
    impact: "Invoices sent same-day • Zero phone tag between office and road",
  },
  {
    id: "documents",
    problemTitle: "Manual Invoice & Document Processing",
    problemSummary: "Staff spend hours typing numbers from supplier PDFs, packing slips, and contracts.",
    impactTag: "Operational Labor",
    impactColor: "#F59E0B",
    solutionTitle: "Automated Document Reading & Extraction Pipeline",
    solutionSummary:
      "Intelligent software that reads supplier bills and client PDFs automatically, pulling line items, totals, and invoice numbers directly into your software.",
    deliverables: [
      "Automatic parsing of incoming supplier PDFs, receipts, and order forms",
      "Instant line-item and total extraction with 99%+ accuracy",
      "Simple 1-click human verification screen for quick spot checks",
      "Direct automated push into QuickBooks, Xero, or your custom ERP",
    ],
    timeframe: "2–3 Weeks",
    impact: "85% reduction in paperwork data-entry • Zero human typing errors",
  },
];

export default function InteractiveDiagnosticTool() {
  const [selectedId, setSelectedId] = useState<string>(solutionOptions[0].id);
  const [teamSize, setTeamSize] = useState<number>(12);

  const selected = solutionOptions.find((opt) => opt.id === selectedId) || solutionOptions[0];

  // Calculations for interactive ROI bench (3.5 hrs/week per employee saved)
  const weeklyHoursLost = Math.round(teamSize * 3.5);
  const annualHoursReclaimed = Math.round(weeklyHoursLost * 48);
  const annualValueRecovered = (annualHoursReclaimed * 38).toLocaleString();

  return (
    <Box
      component="section"
      id="solution-finder"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FAF8F5",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
      }}
    >
      <Container maxWidth="xl">
        {/* Header: Clear, Inviting & Understandable (Left-Aligned) */}
        <Box sx={{ maxWidth: 900, ml: 0, mr: "auto", textAlign: "left", mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(234, 88, 12, 0.08)",
                  border: "1px solid rgba(234, 88, 12, 0.25)",
                  mb: 2.5,
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#EA580C" }}
                />
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                    fontWeight: 700,
                  }}
                >
                  INTERACTIVE SOLUTION & SAVINGS FINDER
                </Typography>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.5rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                textAlign: "left",
                mb: 2.5,
              }}
            >
              What challenge does your team want to solve first?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.75,
                maxWidth: 820,
                ml: 0,
                mr: "auto",
                textAlign: "left",
              }}
            >
              Select a workflow problem below to see the custom system we engineer, how fast we deploy
              it, and how many hours your company saves every year.
            </Typography>
          </motion.div>
        </Box>

        {/* Two-Column Interactive Layout */}
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: "stretch" }}>
          {/* Left Column: Problem Picker (Clear, Clean, Recognizable) */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, height: "100%" }}>
              <Typography sx={{ fontSize: "0.8rem", fontWeight: 800, color: "#71717A", textTransform: "uppercase", letterSpacing: "0.06em", px: 0.5 }}>
                1. Select your primary bottleneck:
              </Typography>

              {solutionOptions.map((opt) => {
                const isSelected = opt.id === selectedId;
                return (
                  <Box
                    key={opt.id}
                    onClick={() => setSelectedId(opt.id)}
                    sx={{
                      p: 2.8,
                      borderRadius: "18px",
                      bgcolor: isSelected ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                      border: isSelected
                        ? "2px solid #EA580C"
                        : "1px solid rgba(24, 24, 27, 0.08)",
                      boxShadow: isSelected
                        ? "0 12px 28px -6px rgba(234, 88, 12, 0.16)"
                        : "0 2px 6px rgba(24, 24, 27, 0.02)",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        bgcolor: "#FFFFFF",
                        borderColor: isSelected ? "#EA580C" : "rgba(234, 88, 12, 0.4)",
                        boxShadow: "0 6px 18px rgba(24, 24, 27, 0.05)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.8 }}>
                      <Typography sx={{ fontSize: "1.05rem", fontWeight: 700, color: isSelected ? "#18181B" : "#334155" }}>
                        {opt.problemTitle}
                      </Typography>
                      <Box
                        sx={{
                          px: 1,
                          py: 0.25,
                          borderRadius: "4px",
                          bgcolor: `${opt.impactColor}12`,
                          border: `1px solid ${opt.impactColor}30`,
                        }}
                      >
                        <Typography sx={{ fontSize: "0.65rem", fontWeight: 800, color: opt.impactColor }}>
                          {opt.impactTag}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ fontSize: "0.85rem", color: "#64748B", lineHeight: 1.5 }}>
                      {opt.problemSummary}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>

          {/* Right Column: Recommended System & Interactive ROI Calculator */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3.5, sm: 4.5, md: 5 },
                    borderRadius: "24px",
                    bgcolor: "#FFFFFF",
                    border: "1.5px solid rgba(234, 88, 12, 0.35)",
                    boxShadow: "0 20px 48px -12px rgba(234, 88, 12, 0.12)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  <Box>
                    {/* Header: What Aetibar Builds */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "12px",
                          bgcolor: "rgba(234, 88, 12, 0.1)",
                          color: "#EA580C",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <TroubleshootOutlinedIcon sx={{ fontSize: 24 }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#EA580C", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          CUSTOM SYSTEM WE BUILD FOR YOU
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "1.2rem", sm: "1.35rem" }, fontWeight: 700, color: "#18181B" }}>
                          {selected.solutionTitle}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Plain English Explanation */}
                    <Typography sx={{ fontSize: "0.95rem", color: "#334155", lineHeight: 1.7, mb: 3.5 }}>
                      {selected.solutionSummary}
                    </Typography>

                    {/* What is Included in this Build */}
                    <Typography sx={{ fontSize: "0.775rem", fontWeight: 800, color: "#18181B", textTransform: "uppercase", mb: 1.5, letterSpacing: "0.05em" }}>
                      KEY SYSTEM DELIVERABLES:
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4 }}>
                      {selected.deliverables.map((item, idx) => (
                        <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}>
                          <CheckCircleRoundedIcon sx={{ fontSize: 18, color: "#EA580C", mt: 0.25, flexShrink: 0 }} />
                          <Typography sx={{ fontSize: "0.9rem", color: "#18181B", fontWeight: 500, lineHeight: 1.5 }}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Interactive Team Size & Time Savings Calculator */}
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: "16px",
                        bgcolor: "#FAF8F5",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        mb: 3.5,
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <CalculateOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
                          <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#18181B" }}>
                            Calculate Your Team&apos;s Savings:
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.4,
                            borderRadius: "9999px",
                            bgcolor: "rgba(234, 88, 12, 0.1)",
                            border: "1px solid rgba(234, 88, 12, 0.25)",
                          }}
                        >
                          <Typography sx={{ fontSize: "0.85rem", fontWeight: 800, color: "#EA580C" }}>
                            {teamSize} Team Members
                          </Typography>
                        </Box>
                      </Box>

                      <Slider
                        value={teamSize}
                        onChange={(_, val) => setTeamSize(val as number)}
                        min={3}
                        max={60}
                        step={1}
                        sx={{
                          color: "#EA580C",
                          height: 6,
                          mb: 1.5,
                          "& .MuiSlider-thumb": {
                            width: 18,
                            height: 18,
                            bgcolor: "#FFFFFF",
                            border: "3px solid #EA580C",
                          },
                        }}
                      />

                      <Grid container spacing={2}>
                        <Grid size={{ xs: 6 }}>
                          <Box sx={{ p: 2, borderRadius: "12px", bgcolor: "#FFFFFF", border: "1px solid rgba(24, 24, 27, 0.06)" }}>
                            <Typography sx={{ fontSize: "0.725rem", color: "#71717A", fontWeight: 700, textTransform: "uppercase", mb: 0.5 }}>
                              Hours Saved / Year:
                            </Typography>
                            <Typography sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: 800, color: "#18181B" }}>
                              ~{annualHoursReclaimed.toLocaleString()} hrs
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <Box sx={{ p: 2, borderRadius: "12px", bgcolor: "#FFFFFF", border: "1px solid rgba(24, 24, 27, 0.06)" }}>
                            <Typography sx={{ fontSize: "0.725rem", color: "#71717A", fontWeight: 700, textTransform: "uppercase", mb: 0.5 }}>
                              Est. Value Reclaimed:
                            </Typography>
                            <Typography sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: 800, color: "#059669" }}>
                              ${annualValueRecovered}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>

                      <Typography sx={{ fontSize: "0.75rem", color: "#71717A", mt: 1.5, lineHeight: 1.4 }}>
                        * Based on eliminating ~3.5 hours of manual data entry, quotation paperwork, and status phone calls per team member each week.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Impact & Direct Action Bar */}
                  <Box>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: "12px",
                            bgcolor: "rgba(234, 88, 12, 0.05)",
                            border: "1px solid rgba(234, 88, 12, 0.2)",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 0.5 }}>
                            <AccessTimeRoundedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                            <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase" }}>
                              DEPLOYMENT TIMEFRAME:
                            </Typography>
                          </Box>
                          <Typography sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#18181B" }}>
                            {selected.timeframe}
                          </Typography>
                        </Box>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: "12px",
                            bgcolor: "rgba(16, 185, 129, 0.06)",
                            border: "1px solid rgba(16, 185, 129, 0.2)",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 0.5 }}>
                            <TrendingUpRoundedIcon sx={{ fontSize: 16, color: "#059669" }} />
                            <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#059669", textTransform: "uppercase" }}>
                              EXPECTED OUTCOME:
                            </Typography>
                          </Box>
                          <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#059669" }}>
                            {selected.impact}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* Direct Contact Button */}
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                        sx={{
                          background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                          color: "#FFFFFF",
                          py: 1.6,
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          borderRadius: "9999px",
                          boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.38)",
                          transition: "all 0.25s ease",
                          "&:hover": {
                            background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                            boxShadow: "0 12px 30px -4px rgba(234, 88, 12, 0.48)",
                          },
                        }}
                      >
                        Discuss This Solution With Our Team
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
