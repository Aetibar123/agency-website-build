"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DiagnosticPath {
  id: string;
  step: string;
  badge: string;
  ruleTitle: string;
  question: string;
  icon: React.ReactNode;
  theSymptom: string;
  honestAdvice: string;
  whatWeBuild: string;
  whatYouAvoid: string[];
  deliverables: string[];
  timeline: string;
  complexity: string;
  roiHighlight: string;
  link: string;
}

const diagnosticPaths: DiagnosticPath[] = [
  {
    id: "connect",
    step: "01",
    badge: "PATH 01 • INTEGRATION & API BRIDGES",
    ruleTitle: "Connect, Don't Replace",
    question: "Do your existing tools work well, but refuse to share data?",
    icon: <HubOutlinedIcon sx={{ fontSize: 24 }} />,
    theSymptom:
      "Your team likes your current accounting software, CRM, and communication tools. The only problem is they don't share data. Someone spends significant time every day manually copying contact details, invoices, and order status back and forth by hand.",
    honestAdvice:
      "Avoid buying an expensive all-in-one enterprise software suite when you only need a bridge. We don't touch what already works — we build an automatic integration between your tools so data moves without manual re-typing.",
    whatWeBuild:
      "A reliable API integration and automated sync. When a customer signs an agreement or an order is submitted, your CRM, accounting records, and internal team channels update automatically.",
    whatYouAvoid: [
      "Retraining your team on completely new software",
      "Paying for unnecessary enterprise software modules",
      "Disruptive transitions or risky data migrations",
    ],
    deliverables: ["Automated System Integration", "Team Workflow Alerts", "Duplicate Entry Prevention", "Reliable Retry Workflows"],
    timeline: "Streamlined Implementation",
    complexity: "Targeted Integration",
    roiHighlight: "Reduces repetitive manual copy-pasting across tools",
    link: "/solutions/customer-lead-systems",
  },
  {
    id: "frontdoor",
    step: "02",
    badge: "PATH 02 • CUSTOM WEB PLATFORM",
    ruleTitle: "When Templates Aren't Enough",
    question: "Is your website struggling to explain complex services or capture qualified inquiries?",
    icon: <WebAssetOutlinedIcon sx={{ fontSize: 24 }} />,
    theSymptom:
      "You offer specialized, high-value services, but your website was built on a generic template. It loads slowly, looks identical to competitors, and relies on a generic contact form that fails to capture the specifications your team needs.",
    honestAdvice:
      "Off-the-shelf website templates work well for simple businesses. But when your offering involves custom specifications, pricing tiers, or integrated workflows, a purpose-built web platform communicates your value more clearly and collects actionable project briefs.",
    whatWeBuild:
      "A fast, modern web application built with Next.js. Prospective clients can explore your capabilities, understand your offerings, and submit structured project requirements directly into your team's workflow.",
    whatYouAvoid: [
      "Slow-loading template plugins and update conflicts",
      "Generic layouts that fail to explain your capabilities",
      "Vague inquiries that require lengthy back-and-forth",
    ],
    deliverables: ["Fast Next.js Web Platform", "Interactive Project Intake", "Clear Problem-First Content", "Structured Inbound Capture"],
    timeline: "Purpose-Built Delivery",
    complexity: "Custom Web Application",
    roiHighlight: "Higher-quality inquiries with clear project specifications",
    link: "/solutions/business-websites",
  },
  {
    id: "operations",
    step: "03",
    badge: "PATH 03 • OPERATIONS HUB",
    ruleTitle: "Purpose-Built Internal Operations",
    question: "Have shared spreadsheets become a bottleneck for your daily operations?",
    icon: <PrecisionManufacturingOutlinedIcon sx={{ fontSize: 24 }} />,
    theSymptom:
      "As your team and project volume grow, shared spreadsheets become unwieldy. Formulas break, quoting takes too long, and managers lack clear visibility into project status and team handoffs.",
    honestAdvice:
      "Generic project management tools often force teams into rigid processes that don't match their actual work. A custom internal tool can be designed around how your team already operates, keeping quoting, scheduling, and project handoffs organized in one place.",
    whatWeBuild:
      "A custom internal web application and business dashboard. Your sales team can generate standardized quotes, operations can track project milestones, and role-based permissions ensure each person sees the information they need.",
    whatYouAvoid: [
      "Fragile spreadsheets with broken formulas",
      "Slow turnaround times on client proposals",
      "Disconnected tools that require constant status checks",
    ],
    deliverables: ["Custom Quoting Workflow", "Role-Based Team Access", "Centralized Project Database", "Operational Dashboards"],
    timeline: "Tailored Development",
    complexity: "Custom Web Application",
    roiHighlight: "Consistent proposal generation and clear operational status",
    link: "/solutions/internal-business-tools",
  },
  {
    id: "ai",
    step: "04",
    badge: "PATH 04 • PRACTICAL AI AUTOMATION",
    ruleTitle: "Practical AI & Workflow Automation",
    question: "Is your team spending valuable time manually processing documents and inquiries?",
    icon: <PsychologyOutlinedIcon sx={{ fontSize: 24 }} />,
    theSymptom:
      "Team members spend significant portions of their day reading incoming invoices, inquiries, or forms and manually typing details into internal tools and spreadsheets.",
    honestAdvice:
      "Rather than implementing generic AI chatbots that lack business context, we apply targeted AI and automation to practical tasks: extracting data from documents, categorizing incoming requests, and staging information for quick human review.",
    whatWeBuild:
      "An intelligent data processing and automation workflow. Incoming documents and customer requests are parsed, categorized, and presented on a review interface for fast verification before syncing to your database or accounting system.",
    whatYouAvoid: [
      "Unreliable AI tools without human review safeguards",
      "Repetitive manual data entry that drains team focus",
      "Transcription errors on numbers, dates, and order details",
    ],
    deliverables: ["Automated Document Processing", "Human Review & Verification Interface", "Smart Data Extraction", "Business System Integration"],
    timeline: "Focused Integration",
    complexity: "Intelligent Automation",
    roiHighlight: "Reduced manual data processing and faster review cycles",
    link: "/solutions/ai-automation",
  },
];

export default function DiagnosticMatrixSection() {
  // activeTab: "all" or specific path id
  const [activeTab, setActiveTab] = useState<string>("all");

  const activeIndex = diagnosticPaths.findIndex((p) => p.id === activeTab);
  const currentPath = activeIndex >= 0 ? diagnosticPaths[activeIndex] : null;

  const handleNext = () => {
    if (activeIndex >= 0 && activeIndex < diagnosticPaths.length - 1) {
      setActiveTab(diagnosticPaths[activeIndex + 1].id);
    } else {
      setActiveTab(diagnosticPaths[0].id);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveTab(diagnosticPaths[activeIndex - 1].id);
    } else {
      setActiveTab(diagnosticPaths[diagnosticPaths.length - 1].id);
    }
  };

  return (
    <Box
      component="section"
      id="diagnostic-matrix"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header (Left-Aligned) */}
        <Box sx={{ maxWidth: 880, ml: 0, mr: "auto", textAlign: "left", mb: { xs: 6, md: 8 } }}>
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
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2.5,
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }}
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
                  OUR DIAGNOSTIC PRINCIPLE
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
              How we figure out what your business{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                actually needs.
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
              We don&apos;t sell bloated software you don&apos;t need. Before writing a single line of code, we
              diagnose where your real bottleneck is and choose the cleanest, most reliable fix.
            </Typography>
          </motion.div>

          {/* 3 Core Guarantees Pill Bar */}
          <Box
            sx={{
              mt: 4,
              p: { xs: 2, sm: 2.5 },
              borderRadius: "16px",
              bgcolor: "#FAF8F5",
              border: "1px solid rgba(24, 24, 27, 0.07)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: { xs: 2, md: 4 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ShieldOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
              <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#18181B" }}>
                Never replace what already works
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TrendingUpRoundedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
              <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#18181B" }}>
                Built strictly around practical business value
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LightbulbOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
              <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#18181B" }}>
                Zero gimmicks or unnecessary complexity
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Interactive Filter / Tab Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            overflowX: "auto",
            pb: 2,
            mb: { xs: 5, md: 7 },
            gap: 1,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Button
            onClick={() => setActiveTab("all")}
            sx={{
              px: 2.4,
              py: 1,
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "none",
              whiteSpace: "nowrap",
              transition: "all 0.25s ease",
              bgcolor: activeTab === "all" ? "#18181B" : "rgba(24, 24, 27, 0.04)",
              color: activeTab === "all" ? "#FFFFFF" : "#52525B",
              border: "1px solid",
              borderColor: activeTab === "all" ? "#18181B" : "rgba(24, 24, 27, 0.08)",
              "&:hover": {
                bgcolor: activeTab === "all" ? "#18181B" : "rgba(24, 24, 27, 0.08)",
                color: activeTab === "all" ? "#FFFFFF" : "#18181B",
              },
            }}
          >
            All 4 Decisions at a Glance
          </Button>

          {diagnosticPaths.map((path) => {
            const isSelected = activeTab === path.id;
            return (
              <Button
                key={path.id}
                onClick={() => setActiveTab(path.id)}
                sx={{
                  px: 2.2,
                  py: 1,
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  transition: "all 0.25s ease",
                  bgcolor: isSelected ? "#EA580C" : "rgba(24, 24, 27, 0.04)",
                  color: isSelected ? "#FFFFFF" : "#52525B",
                  border: "1px solid",
                  borderColor: isSelected ? "#EA580C" : "rgba(24, 24, 27, 0.08)",
                  "&:hover": {
                    bgcolor: isSelected ? "#C2410C" : "rgba(24, 24, 27, 0.08)",
                    color: isSelected ? "#FFFFFF" : "#18181B",
                  },
                }}
              >
                {path.step}. {path.ruleTitle}
              </Button>
            );
          })}
        </Box>

        {/* View Mode 1: All 4 Decisions in a Clean 2x2 Grid */}
        {activeTab === "all" && (
          <Grid container spacing={{ xs: 3, md: 3.5 }} sx={{ alignItems: "stretch" }}>
            {diagnosticPaths.map((path, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={path.id}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      height: "100%",
                      p: { xs: 3.5, sm: 4.5 },
                      borderRadius: { xs: "20px", md: "24px" },
                      bgcolor: "#FAF8F5",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#EA580C",
                        boxShadow: "0 18px 36px -12px rgba(234, 88, 12, 0.12)",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    <Box>
                      {/* Top Badge & Icon */}
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2.5 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                          <Box
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: "12px",
                              bgcolor: "rgba(249, 115, 22, 0.1)",
                              color: "#EA580C",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {path.icon}
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                color: "#EA580C",
                                letterSpacing: "0.06em",
                              }}
                            >
                              {path.badge}
                            </Typography>
                            <Typography sx={{ fontSize: "1.2rem", fontWeight: 600, color: "#18181B" }}>
                              {path.ruleTitle}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {/* Relatable Question */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.15rem", sm: "1.25rem" },
                          fontWeight: 600,
                          color: "#18181B",
                          lineHeight: 1.4,
                          mb: 2.5,
                        }}
                      >
                        &ldquo;{path.question}&rdquo;
                      </Typography>

                      {/* The Symptom Box */}
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: "14px",
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(24, 24, 27, 0.06)",
                          mb: 2.5,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: "#DC2626",
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              color: "#71717A",
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                            }}
                          >
                            THE BOTTLENECK YOU EXPERIENCE:
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.65 }}>
                          {path.theSymptom}
                        </Typography>
                      </Box>

                      {/* The Honest Prescription Box */}
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: "14px",
                          bgcolor: "rgba(249, 115, 22, 0.04)",
                          border: "1px solid rgba(249, 115, 22, 0.2)",
                          mb: 3,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                          <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              color: "#EA580C",
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                            }}
                          >
                            OUR HONEST ADVICE:
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "0.92rem",
                            color: "#18181B",
                            fontWeight: 500,
                            lineHeight: 1.65,
                          }}
                        >
                          {path.honestAdvice}
                        </Typography>
                      </Box>

                      {/* Key Deliverables Chips */}
                      <Box sx={{ mb: 3.5 }}>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                          {path.deliverables.map((item, i) => (
                            <Box
                              key={i}
                              sx={{
                                px: 1.4,
                                py: 0.5,
                                borderRadius: "6px",
                                bgcolor: "#FFFFFF",
                                border: "1px solid rgba(24, 24, 27, 0.08)",
                              }}
                            >
                              <Typography sx={{ fontSize: "0.78rem", fontWeight: 600, color: "#3F3F46" }}>
                                {item}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>

                    {/* Bottom Card Footer */}
                    <Box
                      sx={{
                        pt: 2.5,
                        borderTop: "1px solid rgba(24, 24, 27, 0.08)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                        <AccessTimeRoundedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                        <Typography sx={{ fontSize: "0.825rem", fontWeight: 600, color: "#71717A" }}>
                          {path.timeline}
                        </Typography>
                      </Box>

                      <Button
                        size="small"
                        onClick={() => setActiveTab(path.id)}
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                        sx={{
                          color: "#EA580C",
                          fontWeight: 700,
                          fontSize: "0.825rem",
                          p: 0,
                          textTransform: "none",
                          "&:hover": { bgcolor: "transparent", color: "#C2410C" },
                        }}
                      >
                        Deep Dive
                      </Button>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {/* View Mode 2: In-Depth Single Decision Showcase */}
        {currentPath && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <Box
                sx={{
                  p: { xs: 3.5, sm: 5, md: 6 },
                  borderRadius: { xs: "20px", md: "28px" },
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(234, 88, 12, 0.3)",
                  boxShadow: "0 20px 45px -15px rgba(234, 88, 12, 0.12)",
                }}
              >
                {/* Active Path Sub-Header */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    justifyContent: "space-between",
                    gap: 2,
                    mb: 4,
                    pb: 3,
                    borderBottom: "1px solid rgba(24, 24, 27, 0.08)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "14px",
                        bgcolor: "#EA580C",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {currentPath.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.06em" }}>
                        {currentPath.badge}
                      </Typography>
                      <Typography variant="h3" sx={{ fontSize: { xs: "1.4rem", md: "1.8rem" }, fontWeight: 600, color: "#18181B" }}>
                        {currentPath.ruleTitle}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Navigation controls between the 4 paths */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, alignSelf: { xs: "stretch", sm: "auto" }, justifyContent: "space-between" }}>
                    <Button
                      size="small"
                      onClick={handlePrev}
                      startIcon={<ArrowBackIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        px: 2,
                        py: 0.8,
                        borderRadius: "9999px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(24, 24, 27, 0.1)",
                        color: "#18181B",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": { bgcolor: "rgba(24, 24, 27, 0.04)" },
                      }}
                    >
                      Previous
                    </Button>
                    <Button
                      size="small"
                      onClick={handleNext}
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        px: 2,
                        py: 0.8,
                        borderRadius: "9999px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(24, 24, 27, 0.1)",
                        color: "#18181B",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": { bgcolor: "rgba(24, 24, 27, 0.04)" },
                      }}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>

                {/* Main 2-Column Editorial Content */}
                <Grid container spacing={{ xs: 4, md: 5 }}>
                  {/* Left Column: The Problem & The Honest Perspective */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "1.25rem", md: "1.45rem" },
                        fontWeight: 600,
                        color: "#18181B",
                        lineHeight: 1.35,
                        mb: 3,
                      }}
                    >
                      &ldquo;{currentPath.question}&rdquo;
                    </Typography>

                    {/* Problem Block */}
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: "16px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        mb: 3,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.2 }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#DC2626" }} />
                        <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#DC2626", letterSpacing: "0.05em" }}>
                          WHEN THIS IS YOUR BUSINESS SITUATION
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "0.95rem", color: "#52525B", lineHeight: 1.75 }}>
                        {currentPath.theSymptom}
                      </Typography>
                    </Box>

                    {/* Honest Perspective Block */}
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: "16px",
                        bgcolor: "rgba(249, 115, 22, 0.05)",
                        border: "1px solid rgba(249, 115, 22, 0.22)",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.2 }}>
                        <LightbulbOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
                        <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.05em" }}>
                          WHAT WE HONESTLY RECOMMEND
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "0.95rem", color: "#18181B", fontWeight: 500, lineHeight: 1.75 }}>
                        {currentPath.honestAdvice}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Right Column: What We Build & Traps Avoided */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    {/* What We Build */}
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: "16px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        mb: 3,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.2 }}>
                        <CheckCircleRoundedIcon sx={{ fontSize: 18, color: "#16A34A" }} />
                        <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#16A34A", letterSpacing: "0.05em" }}>
                          WHAT WE ENGINEER FOR YOU
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "0.95rem", color: "#18181B", lineHeight: 1.75, mb: 2.5 }}>
                        {currentPath.whatWeBuild}
                      </Typography>

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                        {currentPath.deliverables.map((item, i) => (
                          <Box
                            key={i}
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              borderRadius: "8px",
                              bgcolor: "#FAF8F5",
                              border: "1px solid rgba(24, 24, 27, 0.08)",
                            }}
                          >
                            <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: "#3F3F46" }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    {/* What You Avoid Box */}
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: "16px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        mb: 3,
                      }}
                    >
                      <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#71717A", letterSpacing: "0.05em", mb: 1.5 }}>
                        TRAPS &amp; HEADACHES YOU AVOID:
                      </Typography>
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                        {currentPath.whatYouAvoid.map((item, i) => (
                          <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                            <CloseRoundedIcon sx={{ fontSize: 16, color: "#DC2626", mt: 0.2, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: "0.88rem", color: "#52525B", lineHeight: 1.5 }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    {/* Bottom Metadata & Link */}
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: "14px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: { xs: "flex-start", sm: "center" },
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 0.3 }}>
                          <AccessTimeRoundedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                          <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#18181B" }}>
                            {currentPath.timeline}
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "0.8rem", color: "#71717A" }}>
                          {currentPath.roiHighlight}
                        </Typography>
                      </Box>

                      <Link href={currentPath.link} style={{ textDecoration: "none" }}>
                        <Button
                          variant="contained"
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
                          sx={{
                            bgcolor: "#EA580C",
                            color: "#FFFFFF",
                            px: 2.8,
                            py: 1.1,
                            borderRadius: "9999px",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            textTransform: "none",
                            boxShadow: "none",
                            "&:hover": {
                              bgcolor: "#C2410C",
                              boxShadow: "0 6px 20px -4px rgba(234, 88, 12, 0.4)",
                            },
                          }}
                        >
                          Explore Solution Details
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Bottom Callout Banner */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            p: { xs: 4, md: 5 },
            borderRadius: { xs: "20px", md: "24px" },
            bgcolor: "#FAF8F5",
            border: "1px solid rgba(24, 24, 27, 0.08)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 720 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.45rem" },
                fontWeight: 600,
                color: "#18181B",
                mb: 1,
              }}
            >
              Not sure which intervention your business actually needs?
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "#52525B", lineHeight: 1.65 }}>
              That is what our diagnostic discovery session is for. We review your current workflow, identify
              where manual bottlenecks exist, and give you an honest recommendation on the best approach — whether custom software is needed or not.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, flexShrink: 0 }}>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: "#18181B",
                  color: "#FFFFFF",
                  px: 3,
                  py: 1.3,
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "#27272A",
                    boxShadow: "0 6px 20px -4px rgba(24, 24, 27, 0.3)",
                  },
                }}
              >
                Schedule Diagnostic Call
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
