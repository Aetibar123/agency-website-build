"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { motion, AnimatePresence } from "framer-motion";

interface ScenarioStep {
  badge: string;
  badgeColor: string;
  badgeBg: string;
  title: string;
  subtitle: string;
  points: string[];
  highlightMetric: string;
  highlightLabel: string;
  icon: React.ReactNode;
}

interface WorkflowScenario {
  id: string;
  tabLabel: string;
  headline: string;
  summary: string;
  step1: ScenarioStep;
  step2: ScenarioStep;
  step3: ScenarioStep;
}

const scenarios: WorkflowScenario[] = [
  {
    id: "inquiries",
    tabLabel: "1. Inbound Leads & Inquiries",
    headline: "How a customer inquiry turns into an instant action plan",
    summary:
      "Instead of leads sitting in an unread inbox or lost in personal WhatsApp chats, the website captures exact requirements and alerts your team within seconds.",
    step1: {
      badge: "STEP 1 // WHAT CUSTOMER DOES",
      badgeColor: "#EA580C",
      badgeBg: "rgba(234, 88, 12, 0.1)",
      title: "Customer Configures Scope",
      subtitle: "On your public Next.js website",
      points: [
        "Visits a fast, modern website that answers their buying questions.",
        "Selects project needs and budget through an intuitive configurator.",
        "Receives an instant, professional confirmation receipt.",
      ],
      highlightMetric: "< 0.4s",
      highlightLabel: "Fast page load on any phone",
      icon: <LanguageIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step2: {
      badge: "STEP 2 // THE AUTOMATIC SYNC",
      badgeColor: "#F97316",
      badgeBg: "rgba(249, 115, 22, 0.12)",
      title: "Data Connects Automatically",
      subtitle: "Without human copy-pasting",
      points: [
        "Lead data is checked, formatted, and categorized automatically.",
        "High-priority inquiries trigger instant team alerts via Slack or SMS.",
        "Zero data gets lost, forgotten, or stuck in personal email inboxes.",
      ],
      highlightMetric: "< 2 sec",
      highlightLabel: "Automatic handoff time",
      icon: <SyncAltOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step3: {
      badge: "STEP 3 // WHAT YOUR TEAM GETS",
      badgeColor: "#18181B",
      badgeBg: "rgba(24, 24, 27, 0.08)",
      title: "Your Team Gets Instant Action Brief",
      subtitle: "Inside your private operations dashboard",
      points: [
        "Assigned team member sees the exact customer brief ready to go.",
        "Customer record is automatically saved in your central database.",
        "A follow-up countdown begins so no prospect is ever left waiting.",
      ],
      highlightMetric: "100%",
      highlightLabel: "Accountability & zero lost leads",
      icon: <StorageIcon sx={{ fontSize: 24, color: "#18181B" }} />,
    },
  },
  {
    id: "quoting",
    tabLabel: "2. Quotations & Pricing",
    headline: "How proposals get created in 5 minutes instead of 3 days",
    summary:
      "Stop searching across three spreadsheets to calculate margins. Your system computes dynamic costs, protects your profit margin, and prepares a client-ready proposal with one click.",
    step1: {
      badge: "STEP 1 // WHAT CUSTOMER DOES",
      badgeColor: "#EA580C",
      badgeBg: "rgba(234, 88, 12, 0.1)",
      title: "Customer Selects Requirements",
      subtitle: "Through an interactive estimate builder",
      points: [
        "Customer selects features, volume, or services they need.",
        "Gets transparent, clear ballpark numbers upfront.",
        "Avoids waiting 3 business days just to understand general pricing.",
      ],
      highlightMetric: "Instant",
      highlightLabel: "Ballpark pricing clarity",
      icon: <CalculateOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step2: {
      badge: "STEP 2 // THE AUTOMATIC SYNC",
      badgeColor: "#F97316",
      badgeBg: "rgba(249, 115, 22, 0.12)",
      title: "Pricing & Margins Calculated",
      subtitle: "Enforcing minimum profit rules",
      points: [
        "System calculates real cost items and checks your profit floor.",
        "Prevents sales reps from offering unauthorized discounts.",
        "Prepares a customized, branded PDF quote with digital sign-off.",
      ],
      highlightMetric: "100%",
      highlightLabel: "Margin protection guaranteed",
      icon: <BoltRoundedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step3: {
      badge: "STEP 3 // WHAT YOUR TEAM GETS",
      badgeColor: "#18181B",
      badgeBg: "rgba(24, 24, 27, 0.08)",
      title: "1-Click Proposal Dispatch",
      subtitle: "Sent to client while they are still warm",
      points: [
        "Sales rep reviews the pre-calculated quote and adds custom notes.",
        "Sends a branded PDF proposal with digital signature link in 1 click.",
        "When signed, the project is automatically created in your system.",
      ],
      highlightMetric: "< 5 min",
      highlightLabel: "Proposal turnaround speed",
      icon: <SendRoundedIcon sx={{ fontSize: 24, color: "#18181B" }} />,
    },
  },
  {
    id: "delivery",
    tabLabel: "3. Project Delivery & Invoicing",
    headline: "How work completion triggers immediate billing",
    summary:
      "When technicians or team members finish work, status is verified with photos or digital signatures, and accounting receives a completed invoice automatically.",
    step1: {
      badge: "STEP 1 // WHAT CUSTOMER DOES",
      badgeColor: "#EA580C",
      badgeBg: "rgba(234, 88, 12, 0.1)",
      title: "Customer Signs Off On Work",
      subtitle: "On mobile screen or customer portal",
      points: [
        "Reviews completed work milestones or job deliverables.",
        "Signs their approval directly on a phone or client portal.",
        "Receives instant digital proof and warranty receipt.",
      ],
      highlightMetric: "0 Calls",
      highlightLabel: "No 'what is the status?' calls",
      icon: <PhoneIphoneRoundedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step2: {
      badge: "STEP 2 // THE AUTOMATIC SYNC",
      badgeColor: "#F97316",
      badgeBg: "rgba(249, 115, 22, 0.12)",
      title: "Verified Completion Triggers Invoice",
      subtitle: "Without office staff chasing receipts",
      points: [
        "Timestamped photo proof and customer signature are verified.",
        "System marks the job completed across all internal schedules.",
        "Completed work orders compile directly into accounting entries.",
      ],
      highlightMetric: "Real-time",
      highlightLabel: "Cross-system synchronization",
      icon: <SyncAltOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step3: {
      badge: "STEP 3 // WHAT YOUR TEAM GETS",
      badgeColor: "#18181B",
      badgeBg: "rgba(24, 24, 27, 0.08)",
      title: "Same-Day Invoicing & Paid Faster",
      subtitle: "Healthy cash flow without spreadsheet delays",
      points: [
        "Accounting sends the invoice the same day work is finished.",
        "Management sees complete job history and profit margins.",
        "Staff save 15+ hours weekly previously spent chasing paperwork.",
      ],
      highlightMetric: "Same-Day",
      highlightLabel: "Billing vs 2-week delay",
      icon: <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 24, color: "#18181B" }} />,
    },
  },
];

export default function TwoHalvesSection() {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("inquiries");

  const currentScenario =
    scenarios.find((s) => s.id === selectedScenarioId) || scenarios[0];

  return (
    <Box
      component="section"
      id="system-architecture"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header (Left-Aligned) */}
        <Box sx={{ maxWidth: 900, ml: 0, mr: "auto", textAlign: "left", mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill */}
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
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
                  Connected System Architecture
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.2rem", sm: "3.2rem", md: "3.85rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.035em",
                lineHeight: { xs: 1.15, md: 1.1 },
                textAlign: "left",
                mb: 2.5,
              }}
            >
              The Two Connected Halves of Modern Business
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
                fontWeight: 400,
              }}
            >
              A website shouldn&apos;t just look good—it needs to connect directly to how your business actually works. Here is what happens when your customer-facing front door and your daily internal operations talk to each other.
            </Typography>
          </motion.div>
        </Box>

        {/* Interactive Scenario Selector Rail (Left-Aligned) */}
        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: { xs: 5, md: 7 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1.2,
              p: 0.8,
              borderRadius: "9999px",
              bgcolor: "#FAF8F5",
              border: "1px solid rgba(228, 228, 231, 0.9)",
              width: "fit-content",
              boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
            }}
          >
            {scenarios.map((sc) => {
              const isSelected = selectedScenarioId === sc.id;
              return (
                <Box
                  key={sc.id}
                  onClick={() => setSelectedScenarioId(sc.id)}
                  sx={{
                    position: "relative",
                    px: { xs: 2.2, sm: 2.8 },
                    py: 1.1,
                    borderRadius: "9999px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: isSelected ? "#FFFFFF" : "#52525B",
                    transition: "color 0.2s ease",
                    zIndex: 1,
                  }}
                >
                  {isSelected && (
                    <Box
                      component={motion.div}
                      layoutId="activeScenarioPillIndicator"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "9999px",
                        bgcolor: "#18181B",
                        boxShadow: "0 6px 18px -3px rgba(24, 24, 27, 0.3)",
                        zIndex: -1,
                      }}
                    />
                  )}
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {sc.tabLabel}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* ========================================================================= */}
        {/* 3-STEP INTUITIVE STORY FLOW CANVAS (Clean, Visual, Friendly)               */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScenario.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Scenario Sub-Header (Left-Aligned) */}
            <Box sx={{ textAlign: "left", mb: { xs: 4, md: 5 }, maxWidth: 820, ml: 0, mr: "auto" }}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.45rem", sm: "1.75rem", md: "1.95rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  mb: 1.2,
                }}
              >
                {currentScenario.headline}
              </Typography>
              <Typography sx={{ fontSize: "0.95rem", color: "#52525B", lineHeight: 1.65 }}>
                {currentScenario.summary}
              </Typography>
            </Box>

            {/* 3 Connected Visual Cards (Left -> Center -> Right) */}
            <Grid container spacing={{ xs: 3, lg: 3.5 }} sx={{ alignItems: "stretch" }}>
              {/* CARD 1: Customer Front Door */}
              <Grid size={{ xs: 12, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: { xs: 3, sm: 3.5 },
                      borderRadius: "22px",
                      bgcolor: "#FAF8F5",
                      border: "1px solid rgba(228, 228, 231, 0.95)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 10px 30px -10px rgba(24, 24, 27, 0.04)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "rgba(234, 88, 12, 0.4)",
                        boxShadow: "0 15px 35px -10px rgba(234, 88, 12, 0.12)",
                      },
                    }}
                  >
                    <Box>
                      {/* Step Header */}
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                        <Box
                          sx={{
                            px: 1.4,
                            py: 0.35,
                            borderRadius: "9999px",
                            bgcolor: currentScenario.step1.badgeBg,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.725rem",
                              fontWeight: 700,
                              color: currentScenario.step1.badgeColor,
                              letterSpacing: "0.05em",
                            }}
                          >
                            {currentScenario.step1.badge}
                          </Typography>
                        </Box>

                        <Box sx={{ width: 40, height: 40, borderRadius: "10px", bgcolor: "#FFFFFF", border: "1px solid rgba(228, 228, 231, 0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {currentScenario.step1.icon}
                        </Box>
                      </Box>

                      <Box sx={{ minHeight: { md: 68 }, mb: 2.5 }}>
                        <Typography sx={{ fontSize: "1.25rem", fontWeight: 600, color: "#18181B", mb: 0.5 }}>
                          {currentScenario.step1.title}
                        </Typography>
                        <Typography sx={{ fontSize: "0.825rem", color: "#71717A", fontWeight: 500 }}>
                          {currentScenario.step1.subtitle}
                        </Typography>
                      </Box>

                      {/* Points List */}
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
                        {currentScenario.step1.points.map((pt, i) => (
                          <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                            <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#EA580C", mt: 0.25, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: "0.875rem", color: "#3F3F46", lineHeight: 1.55 }}>
                              {pt}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    {/* Bottom Stat Chip */}
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: "14px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(228, 228, 231, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.78rem", color: "#71717A" }}>
                        {currentScenario.step1.highlightLabel}
                      </Typography>
                      <Typography sx={{ fontSize: "1rem", fontWeight: 700, color: "#EA580C" }}>
                        {currentScenario.step1.highlightMetric}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* CARD 2: Automatic Sync (The Central Bridge) */}
              <Grid size={{ xs: 12, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.12 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: { xs: 3, sm: 3.5 },
                      borderRadius: "22px",
                      bgcolor: "#FFFFFF",
                      border: "2px solid rgba(234, 88, 12, 0.4)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 12px 35px -10px rgba(234, 88, 12, 0.12)",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#EA580C",
                        boxShadow: "0 18px 40px -10px rgba(234, 88, 12, 0.2)",
                      },
                    }}
                  >
                    {/* Top Animated Pulse Indicator */}
                    <Box
                      component={motion.div}
                      animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: "linear-gradient(90deg, #EA580C 0%, #FB923C 100%)",
                      }}
                    />

                    <Box>
                      {/* Step Header */}
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                        <Box
                          sx={{
                            px: 1.4,
                            py: 0.35,
                            borderRadius: "9999px",
                            bgcolor: currentScenario.step2.badgeBg,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.725rem",
                              fontWeight: 700,
                              color: currentScenario.step2.badgeColor,
                              letterSpacing: "0.05em",
                            }}
                          >
                            {currentScenario.step2.badge}
                          </Typography>
                        </Box>

                        <Box sx={{ width: 40, height: 40, borderRadius: "10px", bgcolor: "rgba(234, 88, 12, 0.08)", border: "1px solid rgba(234, 88, 12, 0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {currentScenario.step2.icon}
                        </Box>
                      </Box>

                      <Box sx={{ minHeight: { md: 68 }, mb: 2.5 }}>
                        <Typography sx={{ fontSize: "1.25rem", fontWeight: 600, color: "#18181B", mb: 0.5 }}>
                          {currentScenario.step2.title}
                        </Typography>
                        <Typography sx={{ fontSize: "0.825rem", color: "#71717A", fontWeight: 500 }}>
                          {currentScenario.step2.subtitle}
                        </Typography>
                      </Box>

                      {/* Points List */}
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
                        {currentScenario.step2.points.map((pt, i) => (
                          <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                            <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#EA580C", mt: 0.25, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: "0.875rem", color: "#3F3F46", lineHeight: 1.55 }}>
                              {pt}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    {/* Bottom Stat Chip */}
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: "14px",
                        bgcolor: "rgba(234, 88, 12, 0.06)",
                        border: "1px solid rgba(234, 88, 12, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.78rem", color: "#71717A" }}>
                        {currentScenario.step2.highlightLabel}
                      </Typography>
                      <Typography sx={{ fontSize: "1rem", fontWeight: 700, color: "#EA580C" }}>
                        {currentScenario.step2.highlightMetric}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* CARD 3: Your Operations Team */}
              <Grid size={{ xs: 12, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: { xs: 3, sm: 3.5 },
                      borderRadius: "22px",
                      bgcolor: "#FAF8F5",
                      border: "1px solid rgba(228, 228, 231, 0.95)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 10px 30px -10px rgba(24, 24, 27, 0.04)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "rgba(24, 24, 27, 0.35)",
                        boxShadow: "0 15px 35px -10px rgba(24, 24, 27, 0.1)",
                      },
                    }}
                  >
                    <Box>
                      {/* Step Header */}
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                        <Box
                          sx={{
                            px: 1.4,
                            py: 0.35,
                            borderRadius: "9999px",
                            bgcolor: currentScenario.step3.badgeBg,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.725rem",
                              fontWeight: 700,
                              color: currentScenario.step3.badgeColor,
                              letterSpacing: "0.05em",
                            }}
                          >
                            {currentScenario.step3.badge}
                          </Typography>
                        </Box>

                        <Box sx={{ width: 40, height: 40, borderRadius: "10px", bgcolor: "#FFFFFF", border: "1px solid rgba(228, 228, 231, 0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {currentScenario.step3.icon}
                        </Box>
                      </Box>

                      <Box sx={{ minHeight: { md: 68 }, mb: 2.5 }}>
                        <Typography sx={{ fontSize: "1.25rem", fontWeight: 600, color: "#18181B", mb: 0.5 }}>
                          {currentScenario.step3.title}
                        </Typography>
                        <Typography sx={{ fontSize: "0.825rem", color: "#71717A", fontWeight: 500 }}>
                          {currentScenario.step3.subtitle}
                        </Typography>
                      </Box>

                      {/* Points List */}
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
                        {currentScenario.step3.points.map((pt, i) => (
                          <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                            <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#18181B", mt: 0.25, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: "0.875rem", color: "#3F3F46", lineHeight: 1.55 }}>
                              {pt}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    {/* Bottom Stat Chip */}
                    <Box
                      sx={{
                        p: 1.8,
                        borderRadius: "14px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(228, 228, 231, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.78rem", color: "#71717A" }}>
                        {currentScenario.step3.highlightLabel}
                      </Typography>
                      <Typography sx={{ fontSize: "1rem", fontWeight: 700, color: "#18181B" }}>
                        {currentScenario.step3.highlightMetric}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* Clear Outcome Summary Callout */}
        <Box
          sx={{
            mt: 6,
            p: { xs: 3.5, sm: 4.5 },
            borderRadius: "22px",
            bgcolor: "#FAF8F5",
            border: "1px solid rgba(228, 228, 231, 0.9)",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: { xs: "flex-start", lg: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 720 }}>
            <Typography sx={{ fontSize: "1.1rem", fontWeight: 600, color: "#18181B", mb: 0.5 }}>
              The Result: No dropped leads, no spreadsheet chaos, and faster revenue.
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.65 }}>
              When both halves of your business run on one synchronized architecture, your team saves 15+ hours every week and your customers get instantaneous, professional service.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                  color: "#FFFFFF",
                  px: 3.6,
                  py: 1.35,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  boxShadow: "0 8px 22px rgba(234, 88, 12, 0.3)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                    boxShadow: "0 12px 26px rgba(234, 88, 12, 0.4)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Map Your Business Flow
              </Button>
            </Link>

            <Link href="/how-we-work" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  color: "#18181B",
                  borderColor: "rgba(24, 24, 27, 0.2)",
                  bgcolor: "#FFFFFF",
                  px: 3.2,
                  py: 1.3,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  "&:hover": {
                    borderColor: "#EA580C",
                    color: "#EA580C",
                    bgcolor: "rgba(249, 115, 22, 0.04)",
                  },
                }}
              >
                See Our Process
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
