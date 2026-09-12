"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import { motion, AnimatePresence } from "framer-motion";
import SolutionsCta from "./SolutionsCta";

interface SolutionDomain {
  id: string;
  num: string;
  badge: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  icon: React.ReactNode;
  capabilities: string[];
  metrics: {
    primary: string;
    primaryLabel: string;
    secondary: string;
    secondaryLabel: string;
  };
  idealFor: string;
  image: string;
  urlPath: string;
  floatingBadgeTop: string;
  floatingBadgeBottom: string;
}

const domains: SolutionDomain[] = [
  {
    id: "business-websites",
    num: "01",
    badge: "ZONE 01 // CUSTOMER FRONT DOOR",
    title: "Business Websites",
    subtitle: "High-Performance Web Platforms",
    headline: "Sub-second Next.js web applications engineered for instant credibility and conversion.",
    description:
      "Most agency websites look decent but fail to explain what the business actually solves. We design and engineer Next.js platforms as strategic customer journeys: establishing instant authority, structuring project intake, and converting qualified traffic into commercial conversations with sub-second page delivery.",
    icon: <LanguageIcon sx={{ fontSize: 22 }} />,
    capabilities: [
      "Sub-second edge rendering (Core Web Vitals 99+)",
      "Problem-first positioning and clear value articulation",
      "Dynamic qualification and interactive scope intake forms",
      "Technical SEO foundations and semantic schema markup",
      "Headless CMS integration for effortless client publishing",
    ],
    metrics: {
      primary: "0.38s",
      primaryLabel: "LCP Load Speed",
      secondary: "+240%",
      secondaryLabel: "Qualified Conversion",
    },
    idealFor:
      "Established businesses whose current website fails to reflect their real authority or capture qualified buyers.",
    image: "/images/portfolio/ecommerce.png",
    urlPath: "/solutions/business-websites",
    floatingBadgeTop: "Core Web Vitals: 99/100",
    floatingBadgeBottom: "Next.js 16 App Router &bull; Global Edge CDN",
  },
  {
    id: "customer-lead-systems",
    num: "02",
    badge: "ZONE 02 // INQUIRY INFRASTRUCTURE",
    title: "Customer & Lead Systems",
    subtitle: "Unified Pipelines & Client Portals",
    headline: "Turn scattered inquiries across web, email, and WhatsApp into accountable revenue pipelines.",
    description:
      "When leads arrive across fragmented channels, inquiries get lost and follow-ups drag. We engineer unified intake pipelines and dedicated client portals tailored to how your sales team operates—eliminating enterprise CRM bloat while ensuring every inquiry is answered in seconds.",
    icon: <HubOutlinedIcon sx={{ fontSize: 22 }} />,
    capabilities: [
      "Multi-channel webhook lead consolidation (Web, WhatsApp, Email)",
      "Automated follow-up triggers and immediate SMS/Email sequences",
      "Customer self-service tracking and document exchange portals",
      "Clean pipeline visibility without 200 unnecessary enterprise fields",
      "Instant SLA escalation rules for high-value inquiries",
    ],
    metrics: {
      primary: "< 45s",
      primaryLabel: "Avg Response Time",
      secondary: "0%",
      secondaryLabel: "Dropped Lead Ratio",
    },
    idealFor:
      "Companies receiving multi-channel inquiries who lose momentum due to manual spreadsheet tracking and delayed follow-ups.",
    image: "/images/portfolio/aiCostomer.png",
    urlPath: "/solutions/customer-lead-systems",
    floatingBadgeTop: "Intake Integrity: 100%",
    floatingBadgeBottom: "Instant WhatsApp & Email Dispatch Engine",
  },
  {
    id: "internal-business-tools",
    num: "03",
    badge: "ZONE 03 // OPERATIONAL BACKBONE",
    title: "Internal Business Tools",
    subtitle: "Custom Operations ERPs & Dashboards",
    headline: "Replace fragile spreadsheets with role-based operational dispatch and quoting engines.",
    description:
      "When core business operations run on 15 fragile spreadsheets, dropped tasks and double-bookings become inevitable. We build custom operational dashboards, field dispatch tools, and real-time quotation engines that give management complete clarity and protect profit margins.",
    icon: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 22 }} />,
    capabilities: [
      "Role-based operational dashboards for managers, field staff, and clients",
      "Work order scheduling, mobile dispatch, and digital photo sign-offs",
      "Margin-aware quotation generators and automated invoice staging",
      "Centralized PostgreSQL database replacing brittle spreadsheets",
      "Offline-first mobile field applications for on-site staff",
    ],
    metrics: {
      primary: "14+",
      primaryLabel: "Spreadsheets Replaced",
      secondary: "100%",
      secondaryLabel: "Margin Visibility",
    },
    idealFor:
      "Service and operations teams outgrowing spreadsheets and seeking software tailored exactly to their operational steps.",
    image: "/images/portfolio/fintechDashboard.png",
    urlPath: "/solutions/internal-business-tools",
    floatingBadgeTop: "PostgreSQL & Real-Time Sync",
    floatingBadgeBottom: "Automated Margin Guard: Protected Floor 32%",
  },
  {
    id: "ai-automation",
    num: "04",
    badge: "ZONE 04 // PRACTICAL LEVERAGE",
    title: "AI & Automation",
    subtitle: "Intelligent Document & Data Engines",
    headline: "Targeted language models and webhook bridges where manual administrative friction drains hours.",
    description:
      "We reject empty AI marketing and glowing gimmicks. We deploy automation and language models strictly where repetitive manual friction drains human effort—such as extracting unstructured invoices, classifying support tickets, or syncing legacy tools with human-in-the-loop oversight.",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 22 }} />,
    capabilities: [
      "Automated extraction of tables and invoices into structured database fields",
      "Inbound email and ticket categorization with confidence scoring",
      "Human-in-the-loop review queues preventing false autonomous actions",
      "Resilient webhook and API bridges connecting disparate platforms",
      "Private semantic document search for company knowledge bases",
    ],
    metrics: {
      primary: "85%",
      primaryLabel: "Manual Hours Saved",
      secondary: "99.4%",
      secondaryLabel: "Extraction Accuracy",
    },
    idealFor:
      "Organizations with high transaction or inquiry volume where administrative data-entry creates an operational bottleneck.",
    image: "/images/portfolio/aiInvoice.png",
    urlPath: "/solutions/ai-automation",
    floatingBadgeTop: "Confidence Score: 99.4%",
    floatingBadgeBottom: "Human Sign-off Guard Enabled",
  },
];

const diagnosticBottlenecks = [
  {
    id: "website",
    title: "Outdated / Slow Website",
    question: "Visitors bounce, website doesn't convert, and it feels like a brochure.",
    recommendedDomain: "Business Websites",
    recommendedPath: "/solutions/business-websites",
    timeframe: "2 - 4 Weeks",
    keyDeliverables: [
      "Next.js 16 high-performance edge platform",
      "Problem-first messaging and structured scope intake",
      "Sub-second Core Web Vitals & semantic SEO",
    ],
  },
  {
    id: "leads",
    title: "Lost Leads & Delayed Follow-Ups",
    question: "Inquiries arrive via WhatsApp, forms, and emails, and get lost in the shuffle.",
    recommendedDomain: "Customer & Lead Systems",
    recommendedPath: "/solutions/customer-lead-systems",
    timeframe: "3 - 5 Weeks",
    keyDeliverables: [
      "Unified multi-channel webhook queue",
      "Automated follow-up sequences & alerts",
      "Lightweight sales pipeline dashboard",
    ],
  },
  {
    id: "spreadsheets",
    title: "Spreadsheet Chaos & Double-Booking",
    question: "Core business runs on 10+ sheets, manual dispatch calls, and untracked jobs.",
    recommendedDomain: "Internal Business Tools",
    recommendedPath: "/solutions/internal-business-tools",
    timeframe: "4 - 7 Weeks",
    keyDeliverables: [
      "Centralized PostgreSQL database & admin console",
      "Mobile dispatch interface & job tracking",
      "Dynamic margin-aware quote & invoice generator",
    ],
  },
  {
    id: "manual-tasks",
    title: "Repetitive Data Entry & Invoicing",
    question: "Staff spend 15+ hours weekly copying invoices, PDFs, and sorting emails.",
    recommendedDomain: "AI & Practical Automation",
    recommendedPath: "/solutions/ai-automation",
    timeframe: "2 - 4 Weeks",
    keyDeliverables: [
      "Automated document OCR & table parsing engine",
      "Human-in-the-loop validation queue",
      "Direct webhook sync into accounting & ERP",
    ],
  },
];

const comparisonData = [
  {
    feature: "Architecture Approach",
    traditional: "Off-the-shelf WordPress themes or bloated $1,500/mo SaaS subscriptions",
    aetibar: "Custom-engineered Next.js & PostgreSQL platforms built around your exact workflow",
  },
  {
    feature: "Licensing & Recurring Fees",
    traditional: "Penalizing per-user monthly seat fees ($40 - $150/user/mo) that discourage scaling",
    aetibar: "Zero per-seat licensing tax. You own 100% of the software and data infrastructure",
  },
  {
    feature: "Page & Query Speed",
    traditional: "Heavy plugins causing 3.5s - 6s load times and frequent security patches",
    aetibar: "Sub-second edge rendering (0.38s LCP), zero plugin bloat, and enterprise security",
  },
  {
    feature: "Workflow Alignment",
    traditional: "Forces your team to adapt your physical operations to match rigid software fields",
    aetibar: "Engineered backwards from your actual daily stages, handoffs, and customer journeys",
  },
  {
    feature: "AI Implementation",
    traditional: "Hallucinating autonomous chatbots with no confidence checks or human review",
    aetibar: "Targeted document & triage engines with 99.4% precision and human verification gates",
  },
];

const faqs = [
  {
    q: "How does Aetibar determine which solution area our business needs?",
    a: "We never guess or push a predetermined package. We start with a 30-minute diagnostic session where we map your current customer touchpoints and internal handoffs. We identify precisely where manual time is lost, where inquiries slip through, or where spreadsheets create bottlenecks, and propose only the specific system that unlocks immediate leverage.",
  },
  {
    q: "Can these solutions integrate with our existing software and databases?",
    a: "Yes. Our systems are built API-first. Whether you use QuickBooks, Stripe, custom warehouse databases, Google Workspace, WhatsApp Business API, or legacy ERPs, we bridge your tools using robust webhooks and REST/GraphQL APIs so information flows seamlessly without double entry.",
  },
  {
    q: "Do we own the software and data after project completion?",
    a: "100% yes. You receive complete ownership of the repository, source code, database schemas, and documentation. You are never locked into monthly per-seat license taxes or proprietary vendor traps.",
  },
  {
    q: "How long does a typical solution implementation take?",
    a: "Focused web platforms and automation bridges typically launch in 2 to 4 weeks. Comprehensive operational tools and multi-channel lead pipelines generally require 4 to 7 weeks from architectural discovery to production deployment.",
  },
  {
    q: "What ongoing support and maintenance do you provide?",
    a: "Every project includes comprehensive deployment verification, staff walkthroughs, and guaranteed post-launch warranty support. We also provide ongoing architectural evolution retainers for businesses that require continuous feature additions as they scale.",
  },
];

export default function SolutionsHubClient() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [selectedBottleneck, setSelectedBottleneck] = useState<string>("leads");

  const current = domains[activeIdx];
  const activeBottleneck =
    diagnosticBottlenecks.find((b) => b.id === selectedBottleneck) || diagnosticBottlenecks[0];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % domains.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + domains.length) % domains.length);
  };

  return (
    <Box component="main" sx={{ bgcolor: "#FFFFFF", color: "#18181B" }}>
      {/* 1. Hero Section */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 18, sm: 20, md: 24 },
          pb: { xs: 12, md: 16 },
          background:
            "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.09) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
          overflow: "hidden",
        }}
      >
        {/* Architectural Subtle Grid */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(24, 24, 27, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 24, 27, 0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 960, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.2,
                  py: 0.8,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.28)",
                  mb: 3,
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#EA580C" }}
                />
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                  }}
                >
                  SYSTEM ARCHITECTURE // FOUR PURPOSE-BUILT DOMAINS
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.4rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.14, md: 1.06 },
                  letterSpacing: "-0.035em",
                  mb: 3,
                }}
              >
                Different problems need{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  different digital systems.
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.08rem", md: "1.25rem" },
                  color: "#52525B",
                  lineHeight: 1.8,
                  maxWidth: 780,
                  mx: "auto",
                  mb: 5,
                }}
              >
                Aetibar does not force your business into cookie-cutter templates or bloated software
                subscriptions. We diagnose where friction and disconnected information exist, then
                engineer the specific digital system that gives your team total operational leverage.
              </Typography>
            </motion.div>

            {/* Quick Benchmark Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  maxWidth: 880,
                  mx: "auto",
                  p: 2,
                  borderRadius: "20px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                }}
              >
                {[
                  { value: "0.38s", label: "Core Web Vitals LCP", icon: <SpeedOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} /> },
                  { value: "< 45s", label: "Multi-Channel Ingestion", icon: <HubOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} /> },
                  { value: "14+", label: "Spreadsheets Replaced", icon: <StorageOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} /> },
                  { value: "99.4%", label: "Document AI Precision", icon: <SecurityOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} /> },
                ].map((stat, idx) => (
                  <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                    <Box sx={{ p: 1.5, textAlign: "center" }}>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0.75, mb: 0.5 }}>
                        {stat.icon}
                        <Typography sx={{ fontSize: { xs: "1.25rem", sm: "1.45rem" }, fontWeight: 700, color: "#18181B" }}>
                          {stat.value}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "0.75rem", color: "#71717A", fontWeight: 500 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* 2. Panoramic Interactive Solution Showcase */}
      <Box
        component="section"
        id="solutions-explorer"
        sx={{
          py: { xs: 8, md: 14 },
          bgcolor: "#FFFFFF",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          {/* Domain Selection Tabs & Direction Controls */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
              mb: 4,
            }}
          >
            {/* Domain Pills */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 1.2,
                p: 0.8,
                borderRadius: "9999px",
                bgcolor: "#FAF8F5",
                border: "1px solid rgba(228, 228, 231, 0.85)",
              }}
            >
              {domains.map((item, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <Box
                    key={item.id}
                    onClick={() => setActiveIdx(idx)}
                    sx={{
                      position: "relative",
                      px: { xs: 2, sm: 2.6 },
                      py: 1.2,
                      borderRadius: "9999px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      color: isSelected ? "#FFFFFF" : "#52525B",
                      transition: "color 0.2s ease",
                      zIndex: 1,
                    }}
                  >
                    {isSelected && (
                      <Box
                        component={motion.div}
                        layoutId="activeHubDomainPill"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        sx={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "9999px",
                          bgcolor: "#18181B",
                          boxShadow: "0 8px 22px -4px rgba(24, 24, 27, 0.35)",
                          zIndex: -1,
                        }}
                      />
                    )}

                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: isSelected ? "#FB923C" : "#A1A1AA",
                      }}
                    >
                      {item.num}
                    </Typography>
                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            {/* Navigation Arrows */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              <IconButton
                onClick={handlePrev}
                aria-label="Previous domain"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  color: "#18181B",
                  boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
                  "&:hover": {
                    borderColor: "#EA580C",
                    color: "#EA580C",
                    bgcolor: "rgba(249, 115, 22, 0.05)",
                  },
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
              </IconButton>

              <IconButton
                onClick={handleNext}
                aria-label="Next domain"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  color: "#18181B",
                  boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
                  "&:hover": {
                    borderColor: "#EA580C",
                    color: "#EA580C",
                    bgcolor: "rgba(249, 115, 22, 0.05)",
                  },
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Box>
          </Box>

          {/* Panoramic Showcase Stage */}
          <Box
            sx={{
              borderRadius: { xs: "24px", md: "32px" },
              bgcolor: "#111218",
              backgroundImage: `radial-gradient(ellipse at ${60 + activeIdx * 10}% 25%, rgba(234, 88, 12, 0.2) 0%, transparent 65%)`,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 30px 80px -20px rgba(0, 0, 0, 0.45)",
              overflow: "hidden",
              position: "relative",
              transition: "background-image 0.5s ease",
            }}
          >
            <Box key={activeIdx} sx={{ padding: "clamp(28px, 5vw, 56px)" }}>
              <Grid container spacing={{ xs: 5, lg: 7 }} sx={{ alignItems: "center" }}>
                {/* Left Column: Solution Detail Content */}
                <Grid size={{ xs: 12, lg: 6 }}>
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        px: 1.8,
                        py: 0.5,
                        borderRadius: "8px",
                        bgcolor: "rgba(234, 88, 12, 0.15)",
                        border: "1px solid rgba(234, 88, 12, 0.3)",
                        mb: 2.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#FB923C",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {current.badge}
                      </Typography>
                    </Box>
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        fontWeight: 600,
                        color: "#FFFFFF",
                        lineHeight: 1.15,
                        letterSpacing: "-0.03em",
                        mb: 2,
                      }}
                    >
                      {current.title}
                    </Typography>
                  </motion.div>

                  {/* Headline */}
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.05rem", sm: "1.18rem" },
                        fontWeight: 500,
                        color: "#FB923C",
                        lineHeight: 1.5,
                        mb: 2.5,
                      }}
                    >
                      {current.headline}
                    </Typography>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.42, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "0.95rem", md: "1.02rem" },
                        color: "#A1A1AA",
                        lineHeight: 1.75,
                        mb: 3.5,
                      }}
                    >
                      {current.description}
                    </Typography>
                  </motion.div>

                  {/* Capabilities List */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4, mb: 4 }}>
                      {current.capabilities.map((cap, cIdx) => (
                        <Box key={cIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                          <CheckCircleOutlinedIcon
                            sx={{ fontSize: 18, color: "#EA580C", mt: 0.25, flexShrink: 0 }}
                          />
                          <Typography
                            sx={{
                              fontSize: "0.925rem",
                              color: "#E4E4E7",
                              fontWeight: 500,
                              lineHeight: 1.5,
                            }}
                          >
                            {cap}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </motion.div>

                  {/* Ideal For Callout */}
                  <Box
                    sx={{
                      p: 2.2,
                      borderRadius: "12px",
                      bgcolor: "rgba(255, 255, 255, 0.04)",
                      borderLeft: "3px solid #EA580C",
                      mb: 4,
                    }}
                  >
                    <Typography sx={{ fontSize: "0.85rem", color: "#A1A1AA", lineHeight: 1.6 }}>
                      <strong style={{ color: "#FFFFFF" }}>Best Fit:</strong> {current.idealFor}
                    </Typography>
                  </Box>

                  {/* Primary Action Button & Verified Metrics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 3.5,
                        pt: 3,
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <Link href={current.urlPath} style={{ textDecoration: "none" }}>
                        <Button
                          variant="contained"
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                          sx={{
                            background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                            color: "#FFFFFF",
                            px: 3.8,
                            py: 1.5,
                            fontSize: "0.925rem",
                            fontWeight: 700,
                            borderRadius: "9999px",
                            boxShadow: "0 10px 24px rgba(234, 88, 12, 0.35)",
                            "&:hover": {
                              background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                              boxShadow: "0 14px 32px rgba(234, 88, 12, 0.5)",
                              transform: "translateY(-1px)",
                            },
                          }}
                        >
                          Explore {current.title}
                        </Button>
                      </Link>

                      {/* Verified Metrics */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: { xs: "1.45rem", sm: "1.75rem" },
                              fontWeight: 700,
                              color: "#FFFFFF",
                              lineHeight: 1,
                            }}
                          >
                            {current.metrics.primary}
                          </Typography>
                          <Typography sx={{ fontSize: "0.75rem", color: "#A1A1AA", mt: 0.4 }}>
                            {current.metrics.primaryLabel}
                          </Typography>
                        </Box>

                        <Box sx={{ width: 1, height: 32, bgcolor: "rgba(255, 255, 255, 0.15)" }} />

                        <Box>
                          <Typography
                            sx={{
                              fontSize: { xs: "1.45rem", sm: "1.75rem" },
                              fontWeight: 700,
                              color: "#FB923C",
                              lineHeight: 1,
                            }}
                          >
                            {current.metrics.secondary}
                          </Typography>
                          <Typography sx={{ fontSize: "0.75rem", color: "#A1A1AA", mt: 0.4 }}>
                            {current.metrics.secondaryLabel}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>

                {/* Right Column: 3D Perspective Browser Frame Mockup */}
                <Grid size={{ xs: 12, lg: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.52, ease: [0.19, 1, 0.22, 1] }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: "22px",
                        bgcolor: "rgba(24, 24, 27, 0.85)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.6)",
                        overflow: "hidden",
                      }}
                    >
                      {/* Chrome Header */}
                      <Box
                        sx={{
                          px: 2.5,
                          py: 1.5,
                          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                          bgcolor: "rgba(255, 255, 255, 0.03)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 0.8 }}>
                          <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#EF4444" }} />
                          <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#EAB308" }} />
                          <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#22C55E" }} />
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2,
                            py: 0.4,
                            borderRadius: "6px",
                            bgcolor: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        >
                          <LockOutlinedIcon sx={{ fontSize: 12, color: "#22C55E" }} />
                          <Typography sx={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#A1A1AA" }}>
                            aetibar.in{current.urlPath}
                          </Typography>
                        </Box>

                        <Box sx={{ width: 40 }} />
                      </Box>

                      {/* Image Preview */}
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: { xs: 290, sm: 380, md: 450 },
                          bgcolor: "#000000",
                        }}
                      >
                        <Image
                          src={current.image}
                          alt={current.title}
                          fill
                          sizes="(max-width: 1200px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                          priority
                        />

                        {/* Floating Top Telemetry Badge */}
                        <Box
                          component={motion.div}
                          animate={{ y: [0, -3, 0] }}
                          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                          sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            px: 1.8,
                            py: 0.8,
                            borderRadius: "10px",
                            bgcolor: "rgba(24, 24, 27, 0.88)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            color: "#22C55E",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            fontFamily: "monospace",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
                          }}
                        >
                          <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#22C55E" }} />
                          {current.floatingBadgeTop}
                        </Box>

                        {/* Floating Bottom Telemetry Badge */}
                        <Box
                          component={motion.div}
                          animate={{ y: [0, 2, 0] }}
                          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                          sx={{
                            position: "absolute",
                            bottom: 16,
                            left: 16,
                            right: 16,
                            p: 1.8,
                            borderRadius: "14px",
                            bgcolor: "rgba(24, 24, 27, 0.88)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            color: "#FFFFFF",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.825rem",
                              fontWeight: 500,
                              lineHeight: 1.4,
                            }}
                            dangerouslySetInnerHTML={{ __html: current.floatingBadgeBottom }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 3. Interactive Bottleneck Diagnostic Navigator */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(234, 88, 12, 0.08)",
                border: "1px solid rgba(234, 88, 12, 0.25)",
                mb: 2,
              }}
            >
              <TuneOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#EA580C",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                INTERACTIVE BOTTLENECK DIAGNOSTIC
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.75rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Where is your business currently losing time and momentum?
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Select your biggest operational friction point below to see the exact engineered system
              we deploy to eliminate it.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
            {/* Left: Interactive Friction Options */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {diagnosticBottlenecks.map((item) => {
                  const isSelected = selectedBottleneck === item.id;
                  return (
                    <Box
                      key={item.id}
                      onClick={() => setSelectedBottleneck(item.id)}
                      sx={{
                        p: 3,
                        borderRadius: "16px",
                        bgcolor: isSelected ? "#18181B" : "#FFFFFF",
                        border: isSelected
                          ? "1px solid #EA580C"
                          : "1px solid rgba(228, 228, 231, 0.9)",
                        color: isSelected ? "#FFFFFF" : "#18181B",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        boxShadow: isSelected
                          ? "0 12px 32px rgba(24, 24, 27, 0.2)"
                          : "0 2px 8px rgba(24, 24, 27, 0.02)",
                        "&:hover": {
                          borderColor: "#EA580C",
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                        <Typography
                          sx={{
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: isSelected ? "#FB923C" : "#18181B",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Box
                          sx={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            border: isSelected ? "2px solid #EA580C" : "2px solid #D4D4D8",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: isSelected ? "#EA580C" : "transparent",
                          }}
                        >
                          {isSelected && <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#FFFFFF" }} />}
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.875rem",
                          color: isSelected ? "#D4D4D8" : "#71717A",
                          lineHeight: 1.55,
                        }}
                      >
                        {item.question}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Grid>

            {/* Right: Architectural Solution Blueprint */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <AnimatePresence mode="wait">
                <Box
                  component={motion.div}
                  key={activeBottleneck.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    height: "100%",
                    p: { xs: 4, sm: 5 },
                    borderRadius: "24px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    boxShadow: "0 16px 40px rgba(24, 24, 27, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                      <Box
                        sx={{
                          px: 2,
                          py: 0.6,
                          borderRadius: "8px",
                          bgcolor: "rgba(234, 88, 12, 0.1)",
                          color: "#EA580C",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                        }}
                      >
                        Recommended Architecture
                      </Box>
                      <Typography sx={{ fontSize: "0.85rem", color: "#71717A", fontWeight: 600 }}>
                        Turnaround: <strong style={{ color: "#18181B" }}>{activeBottleneck.timeframe}</strong>
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "1.75rem", sm: "2.1rem" },
                        fontWeight: 600,
                        color: "#18181B",
                        letterSpacing: "-0.025em",
                        mb: 2,
                      }}
                    >
                      {activeBottleneck.recommendedDomain}
                    </Typography>

                    <Typography sx={{ fontSize: "1rem", color: "#52525B", lineHeight: 1.7, mb: 4 }}>
                      We eliminate this friction by deploying a purpose-built system engineered directly
                      into your team&apos;s daily operations, ensuring zero dropped steps and full accountability.
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#18181B",
                        mb: 2,
                      }}
                    >
                      Primary Implementation Deliverables:
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.75, mb: 5 }}>
                      {activeBottleneck.keyDeliverables.map((del, dIdx) => (
                        <Box key={dIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                          <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 20, mt: 0.2 }} />
                          <Typography sx={{ fontSize: "0.95rem", color: "#27272A", fontWeight: 600 }}>
                            {del}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      pt: 3,
                      borderTop: "1px solid rgba(228, 228, 231, 0.8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 2,
                    }}
                  >
                    <Link href={activeBottleneck.recommendedPath} style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                        sx={{
                          background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                          color: "#FFFFFF",
                          px: 3.5,
                          py: 1.35,
                          borderRadius: "9999px",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                        }}
                      >
                        Deep-Dive {activeBottleneck.recommendedDomain}
                      </Button>
                    </Link>

                    <Link href="/contact" style={{ textDecoration: "none" }}>
                      <Button
                        variant="outlined"
                        sx={{
                          color: "#18181B",
                          borderColor: "rgba(24, 24, 27, 0.2)",
                          px: 3,
                          py: 1.35,
                          borderRadius: "9999px",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        Discuss This Scope
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </AnimatePresence>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. Comparison Table: Traditional Software vs Aetibar Engineered Systems */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 9 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.75rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Why custom-engineered systems outperform generic agency packages
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Compare the real architectural difference between typical agencies selling cookie-cutter
              SaaS versus Aetibar&apos;s tailored operational software.
            </Typography>
          </Box>

          <Box
            sx={{
              borderRadius: "24px",
              border: "1px solid rgba(228, 228, 231, 0.9)",
              overflow: "hidden",
              boxShadow: "0 12px 36px rgba(24, 24, 27, 0.04)",
            }}
          >
            {/* Table Header */}
            <Grid
              container
              sx={{
                bgcolor: "#18181B",
                color: "#FFFFFF",
                py: 2.5,
                px: { xs: 2.5, sm: 4 },
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Grid size={{ xs: 12, md: 3 }}>
                <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#A1A1AA" }}>
                  EVALUATION CRITERIA
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4.5 }}>
                <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F87171" }}>
                  TRADITIONAL AGENCIES / GENERIC SAAS
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4.5 }}>
                <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#FB923C" }}>
                  AETIBAR ENGINEERED SYSTEMS
                </Typography>
              </Grid>
            </Grid>

            {/* Table Rows */}
            {comparisonData.map((row, idx) => (
              <Grid
                container
                key={idx}
                sx={{
                  py: { xs: 3, md: 3 },
                  px: { xs: 2.5, sm: 4 },
                  bgcolor: idx % 2 === 0 ? "#FFFFFF" : "#FAF8F5",
                  borderTop: "1px solid rgba(228, 228, 231, 0.8)",
                  alignItems: "center",
                }}
              >
                <Grid size={{ xs: 12, md: 3 }} sx={{ mb: { xs: 1.5, md: 0 } }}>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B" }}>
                    {row.feature}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 4.5 }} sx={{ mb: { xs: 2, md: 0 }, pr: { md: 3 } }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                    <CancelOutlinedIcon sx={{ fontSize: 18, color: "#EF4444", mt: 0.25, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.6 }}>
                      {row.traditional}
                    </Typography>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 4.5 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                    <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: "#EA580C", mt: 0.25, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: "0.875rem", color: "#18181B", fontWeight: 600, lineHeight: 1.6 }}>
                      {row.aetibar}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 5. Frequently Asked Questions */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 760, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.6rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B" }}>
              Straightforward answers about how we design, engineer, and deploy business solutions.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 840, mx: "auto" }}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                disableGutters
                elevation={0}
                sx={{
                  mb: 2,
                  borderRadius: "14px !important",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  bgcolor: "#FFFFFF",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#EA580C" }} />}
                  sx={{ px: 3, py: 1.5 }}
                >
                  <Typography sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#18181B" }}>
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography sx={{ fontSize: "0.95rem", color: "#52525B", lineHeight: 1.75 }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 6. Flagship Solutions CTA */}
      <SolutionsCta
        badge="START WITH ARCHITECTURE"
        headline="Have a specific workflow bottleneck slowing down your business?"
        description="Book a 30-minute diagnostic session with an engineering founder. We'll map your current operational handoffs and tell you exactly what system is required."
        primaryButtonText="Schedule Architecture Diagnostic"
        secondaryButtonText="Explore Selected Work"
      />
    </Box>
  );
}
