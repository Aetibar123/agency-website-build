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
    headline: "How customer inquiries connect directly to team action",
    summary:
      "Instead of inquiries sitting unread in individual inboxes or scattered chats, a structured web presence captures requirements and notifies the right team member promptly.",
    step1: {
      badge: "STEP 1 // WHAT CUSTOMER DOES",
      badgeColor: "#EA580C",
      badgeBg: "rgba(234, 88, 12, 0.1)",
      title: "Customer Specifies Project Needs",
      subtitle: "Through your business web portal",
      points: [
        "Visits a clear, modern website that explains your services.",
        "Submits project needs or inquiries through a structured intake form.",
        "Receives an immediate confirmation that their inquiry was received.",
      ],
      highlightMetric: "Clear Scope",
      highlightLabel: "Structured requirements",
      icon: <LanguageIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step2: {
      badge: "STEP 2 // THE AUTOMATIC SYNC",
      badgeColor: "#F97316",
      badgeBg: "rgba(249, 115, 22, 0.12)",
      title: "Data Connects Automatically",
      subtitle: "Without manual copy-pasting",
      points: [
        "Inquiry information is formatted and categorized automatically.",
        "Notifications route directly to team communication channels.",
        "Reduces duplicate entry and the risk of overlooked messages.",
      ],
      highlightMetric: "Automated",
      highlightLabel: "Direct system handoff",
      icon: <SyncAltOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step3: {
      badge: "STEP 3 // WHAT YOUR TEAM GETS",
      badgeColor: "#18181B",
      badgeBg: "rgba(24, 24, 27, 0.08)",
      title: "Your Team Gets an Organized Brief",
      subtitle: "Inside your operations dashboard",
      points: [
        "Assigned team members see the complete customer context in one place.",
        "Customer records are saved directly in your database or CRM.",
        "Enables prompt, consistent follow-up across your team.",
      ],
      highlightMetric: "Organized",
      highlightLabel: "Centralized inquiry tracking",
      icon: <StorageIcon sx={{ fontSize: 24, color: "#18181B" }} />,
    },
  },
  {
    id: "quoting",
    tabLabel: "2. Quotations & Pricing",
    headline: "How custom software streamlines proposal generation",
    summary:
      "Instead of searching across disconnected spreadsheets to calculate pricing, a custom quoting workflow applies consistent margin rules and prepares clear proposals.",
    step1: {
      badge: "STEP 1 // WHAT CUSTOMER DOES",
      badgeColor: "#EA580C",
      badgeBg: "rgba(234, 88, 12, 0.1)",
      title: "Customer Selects Requirements",
      subtitle: "Through an interactive estimate builder",
      points: [
        "Customer selects features, volume, or services required.",
        "Receives transparent, upfront scope specifications.",
        "Reduces unnecessary back-and-forth emails to clarify baseline requirements.",
      ],
      highlightMetric: "Transparent",
      highlightLabel: "Upfront scope clarity",
      icon: <CalculateOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step2: {
      badge: "STEP 2 // THE AUTOMATIC SYNC",
      badgeColor: "#F97316",
      badgeBg: "rgba(249, 115, 22, 0.12)",
      title: "Pricing & Margin Rules Applied",
      subtitle: "Standardizing pricing logic",
      points: [
        "Applies predefined pricing and margin rules automatically.",
        "Maintains consistent pricing across different sales team members.",
        "Prepares a customized proposal document for internal review.",
      ],
      highlightMetric: "Consistent",
      highlightLabel: "Standardized pricing rules",
      icon: <BoltRoundedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step3: {
      badge: "STEP 3 // WHAT YOUR TEAM GETS",
      badgeColor: "#18181B",
      badgeBg: "rgba(24, 24, 27, 0.08)",
      title: "Structured Proposal Dispatch",
      subtitle: "Ready for client review and sign-off",
      points: [
        "Sales team reviews pre-calculated figures and adds project-specific notes.",
        "Dispatches a clean proposal with digital approval links.",
        "When approved, project details transition directly into operations.",
      ],
      highlightMetric: "Streamlined",
      highlightLabel: "Faster proposal turnaround",
      icon: <SendRoundedIcon sx={{ fontSize: 24, color: "#18181B" }} />,
    },
  },
  {
    id: "delivery",
    tabLabel: "3. Project Delivery & Invoicing",
    headline: "How completed milestones connect directly to billing",
    summary:
      "When project deliverables or milestones are finished, status updates verify the work and stage invoices for accounting without manual delays.",
    step1: {
      badge: "STEP 1 // WHAT CUSTOMER DOES",
      badgeColor: "#EA580C",
      badgeBg: "rgba(234, 88, 12, 0.1)",
      title: "Customer or Team Milestone Sign-Off",
      subtitle: "On mobile screen or client portal",
      points: [
        "Reviews completed project milestones or work deliverables.",
        "Provides digital approval or feedback through an intuitive interface.",
        "Receives clear confirmation and documentation of delivered work.",
      ],
      highlightMetric: "Clear Status",
      highlightLabel: "Transparent milestone tracking",
      icon: <PhoneIphoneRoundedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step2: {
      badge: "STEP 2 // THE AUTOMATIC SYNC",
      badgeColor: "#F97316",
      badgeBg: "rgba(249, 115, 22, 0.12)",
      title: "Completion Triggers Billing Workflow",
      subtitle: "Without office staff chasing updates",
      points: [
        "Verified milestone sign-off updates schedules and project tracking.",
        "Reduces internal back-and-forth to confirm project completion.",
        "Prepares draft billing entries directly for accounting.",
      ],
      highlightMetric: "Connected",
      highlightLabel: "System synchronization",
      icon: <SyncAltOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    },
    step3: {
      badge: "STEP 3 // WHAT YOUR TEAM GETS",
      badgeColor: "#18181B",
      badgeBg: "rgba(24, 24, 27, 0.08)",
      title: "Prompt Invoicing & Visibility",
      subtitle: "Smooth cash flow without spreadsheet delays",
      points: [
        "Accounting can review and issue invoices promptly upon milestone completion.",
        "Leadership maintains full visibility into delivery progress and project margins.",
        "Reduces hours spent manually reconciling timesheets and spreadsheets.",
      ],
      highlightMetric: "Timely Billing",
      highlightLabel: "Reduced invoice turnaround lag",
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
                fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.15, md: 1.08 },
                letterSpacing: "-0.035em",
                textAlign: "left",
                mb: 2.5,
              }}
            >
              The two connected halves of{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                modern business.
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
              The Result: Better organization, reduced manual work, and faster delivery.
            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.65 }}>
              When the customer-facing side of your business and your internal operations work together, your team spends less time on manual administration and customers experience smoother, more reliable service.
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
