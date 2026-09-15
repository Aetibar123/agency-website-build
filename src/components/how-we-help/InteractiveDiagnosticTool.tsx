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
    problemTitle: "Scattered Inquiries Across Multiple Channels",
    problemSummary: "Inquiries sit across personal chats, web forms, and email without centralized tracking.",
    impactTag: "Response Speed",
    impactColor: "#EF4444",
    solutionTitle: "Centralized Inquiry Intake & Notification Hub",
    solutionSummary:
      "We connect your website, forms, and digital communication channels into a unified workflow that organizes incoming requests and alerts the right team members.",
    deliverables: [
      "Centralized dashboard organizing inquiries across forms and channels",
      "Automated confirmation sent promptly to prospective clients",
      "Structured routing that notifies team members with full project details",
      "Clear status tracking showing every inquiry from intake to follow-up",
    ],
    timeframe: "Iterative Sprint Delivery",
    impact: "Centralized inquiry tracking • Prompt team follow-up",
  },
  {
    id: "quoting",
    problemTitle: "Slow, Inconsistent Proposal Preparation",
    problemSummary: "Teams spend valuable time manually recalculating line items in spreadsheets and formatting documents.",
    impactTag: "Sales Efficiency",
    impactColor: "#F97316",
    solutionTitle: "Standardized Estimation & Proposal Workflow",
    solutionSummary:
      "A tailored quotation tool that calculates costs with approved margin logic and creates clean, professional proposals ready for review and delivery.",
    deliverables: [
      "Structured pricing tool aligned with your business and margin rules",
      "Automated proposal generation with formatted project specifications",
      "Integrated digital sign-off and approval tracking",
      "Standardized pricing guidelines to ensure quote consistency",
    ],
    timeframe: "Purpose-Built Delivery",
    impact: "Consistent pricing rules • Streamlined proposal turnaround",
  },
  {
    id: "spreadsheets",
    problemTitle: "Repetitive Copy-Pasting Across Separate Systems",
    problemSummary: "Team members re-enter client and project details across spreadsheets, databases, and accounting tools.",
    impactTag: "Operational Time",
    impactColor: "#F97316",
    solutionTitle: "System Integration & Centralized Data Hub",
    solutionSummary:
      "We link your core business tools so project updates and client records sync automatically across your organization without manual re-typing.",
    deliverables: [
      "API integrations connecting your website, CRM, and accounting software",
      "Central operational database providing consistent records across tools",
      "Role-tailored dashboards for project management and fulfillment",
      "Validation rules to prevent duplicate records and data mismatches",
    ],
    timeframe: "Custom System Build",
    impact: "Reduced manual data re-entry • Consistent cross-team records",
  },
  {
    id: "field",
    problemTitle: "Disconnected Frontline Teams & Operations",
    problemSummary: "Frontline staff or field teams rely on scattered chats or paper notes, delaying status updates and billing.",
    impactTag: "Workflow Sync",
    impactColor: "#EA580C",
    solutionTitle: "Mobile Operations Portal & Milestone Invoicing",
    solutionSummary:
      "A mobile-friendly web application for frontline staff to record milestone completions, notes, and approvals in real time.",
    deliverables: [
      "Mobile web interface accessible from smartphones and tablets",
      "Digital milestone sign-off, notes, and completion verification",
      "Shared project schedules, client requirements, and location details",
      "Direct handoff to accounting once milestones are marked complete",
    ],
    timeframe: "Tailored Engineering",
    impact: "Transparent milestone visibility • Reduced billing delays",
  },
  {
    id: "documents",
    problemTitle: "Manual Document & Invoice Data Entry",
    problemSummary: "Staff spend hours manually extracting line items from incoming supplier invoices, receipts, and PDFs.",
    impactTag: "Process Efficiency",
    impactColor: "#F59E0B",
    solutionTitle: "Intelligent Document Intake & Verification Pipeline",
    solutionSummary:
      "Intelligent software that reads incoming business documents, extracts key fields, and presents them for quick human verification.",
    deliverables: [
      "Automated parsing of incoming PDFs, supplier invoices, and order forms",
      "Extraction of key fields, totals, dates, and line items",
      "Clean review interface for one-click verification and corrections",
      "Direct integration into accounting or enterprise database systems",
    ],
    timeframe: "Targeted Integration",
    impact: "Reduced manual paperwork • Faster document verification",
  },
];

export default function InteractiveDiagnosticTool() {
  const [selectedId, setSelectedId] = useState<string>(solutionOptions[0].id);
  const [teamSize, setTeamSize] = useState<number>(12);

  const selected = solutionOptions.find((opt) => opt.id === selectedId) || solutionOptions[0];

  // Scale assessment dynamics based on organization size
  const workflowComplexity =
    teamSize <= 8
      ? "Direct Teams"
      : teamSize <= 22
      ? "Multi-Role Handshakes"
      : "Cross-Department Workflows";

  const automationPriority =
    teamSize <= 8
      ? "Intake & Proposal Automation"
      : teamSize <= 22
      ? "Central Operations Hub"
      : "Enterprise Workflow Pipeline";

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
                  INTERACTIVE WORKFLOW DIAGNOSTIC
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
                fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.15, md: 1.08 },
                letterSpacing: "-0.035em",
                textAlign: "left",
                mb: 2.5,
              }}
            >
              What operational challenge does your team{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                want to solve first?
              </Box>
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
              Select a common workflow friction point below to explore the custom system we engineer to eliminate manual data entry, connect disconnected tools, and keep your operations moving smoothly.
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
                            Workflow Scale Assessment:
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
                              Coordination Scale:
                            </Typography>
                            <Typography sx={{ fontSize: { xs: "1.05rem", sm: "1.25rem" }, fontWeight: 800, color: "#18181B" }}>
                              {workflowComplexity}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <Box sx={{ p: 2, borderRadius: "12px", bgcolor: "#FFFFFF", border: "1px solid rgba(24, 24, 27, 0.06)" }}>
                            <Typography sx={{ fontSize: "0.725rem", color: "#71717A", fontWeight: 700, textTransform: "uppercase", mb: 0.5 }}>
                              Automation Focus:
                            </Typography>
                            <Typography sx={{ fontSize: { xs: "1.05rem", sm: "1.25rem" }, fontWeight: 800, color: "#059669" }}>
                              {automationPriority}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>

                      <Typography sx={{ fontSize: "0.75rem", color: "#71717A", mt: 1.5, lineHeight: 1.4 }}>
                        * As team size expands, disconnected spreadsheets and manual handoffs create compounding delays. Custom systems keep information moving smoothly between roles.
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
