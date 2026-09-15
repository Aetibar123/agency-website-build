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
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import { motion, AnimatePresence } from "framer-motion";
import SolutionsCta from "./SolutionsCta";

interface SolutionDomain {
  id: string;
  num: string;
  badge: string;
  title: string;
  tagline: string;
  subtitle: string;
  headline: string;
  problem: string;
  solution: string;
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
    tagline: "The Customer Front Door",
    subtitle: "High-Performance Next.js Web Platforms",
    headline: "Sub-second Next.js web applications engineered for instant credibility and conversion.",
    problem:
      "Generic brochure websites take 4+ seconds to load, bury your actual value under vague buzzwords, and lose 60%+ of qualified buyers before they even reach out.",
    solution:
      "We engineer websites as the strategic starting point of your customer journey: sub-second edge rendering, clear problem-first messaging, and interactive scope intake forms.",
    description:
      "Most agency websites look decent but fail to explain what the business actually solves. We design and engineer Next.js platforms as strategic customer journeys: establishing instant authority, answering complex buying questions, and capturing qualified project scopes with sub-second page delivery.",
    icon: <LanguageIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    capabilities: [
      "Sub-0.4s Core Web Vitals (LCP < 380ms) on global edge CDN",
      "Problem-first positioning and clear commercial value articulation",
      "Interactive scope intake forms that qualify client budgets upfront",
      "Semantic SEO architecture, JSON-LD schema & instant indexing",
      "Headless CMS integration for effortless client publishing without code",
    ],
    metrics: {
      primary: "0.38s",
      primaryLabel: "Edge LCP Load Speed",
      secondary: "+240%",
      secondaryLabel: "Qualified Inquiries",
    },
    idealFor:
      "Established B2B, industrial, and service companies whose current website fails to reflect their real authority or capture qualified buyers.",
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
    tagline: "The Inquiry Engine",
    subtitle: "Unified Multi-Channel Pipelines & Client Portals",
    headline: "Turn scattered inquiries across web, email, and WhatsApp into accountable revenue pipelines.",
    problem:
      "Leads arrive across WhatsApp, email, and web forms into disparate spreadsheets. Response times drag past 24 hours, follow-ups fall through the cracks, and high-value deals are lost.",
    solution:
      "A centralized webhook pipeline that consolidates every inquiry instantly, sends automated confirmations, and routes leads to the right specialist in under 45 seconds.",
    description:
      "When leads arrive across fragmented channels, inquiries get lost and follow-ups drag. We engineer unified intake pipelines and dedicated client portals tailored to how your sales team operates—eliminating enterprise CRM bloat while ensuring every inquiry is answered in seconds.",
    icon: <HubOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
    capabilities: [
      "Multi-channel webhook lead consolidation (WhatsApp, Web, Email)",
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
    tagline: "The Operational Backbone",
    subtitle: "Custom Operations ERPs, Dispatch & Quoting Engines",
    headline: "Replace fragile spreadsheets with role-based operational dispatch and quoting engines.",
    problem:
      "Core operations run on 15 fragile spreadsheets, staff double-book jobs, quotes are manually calculated with errors, and leadership has zero real-time visibility into project margins.",
    solution:
      "Custom internal web applications and dashboards built around your exact daily workflow—with automated margin guards, mobile field dispatch, and a centralized database.",
    description:
      "When core business operations run on 15 fragile spreadsheets, dropped tasks and double-bookings become inevitable. We build custom operational dashboards, field dispatch tools, and real-time quotation engines that give management complete clarity and protect profit margins.",
    icon: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
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
      secondaryLabel: "Margin Floor Guard",
    },
    idealFor:
      "Service, logistics, and operations teams outgrowing spreadsheets and seeking software tailored exactly to their operational steps.",
    image: "/images/portfolio/fintechDashboard.png",
    urlPath: "/solutions/internal-business-tools",
    floatingBadgeTop: "PostgreSQL & Real-Time Sync",
    floatingBadgeBottom: "Automated Margin Guard: Protected Floor 32%",
  },
  {
    id: "ai-automation",
    num: "04",
    badge: "ZONE 04 // TARGETED LEVERAGE",
    title: "AI & Practical Automation",
    tagline: "Targeted Workflow Leverage",
    subtitle: "Intelligent Document & Data Engines",
    headline: "Targeted language models and webhook bridges where manual administrative friction drains hours.",
    problem:
      "Staff waste 15 to 25 hours every week manually copying invoice numbers, re-entering customer records between tools, and sorting repetitive email requests.",
    solution:
      "Zero-fluff document extraction and API bridges that automatically parse unstructured invoices and sync records across your tools—with human-in-the-loop verification.",
    description:
      "We reject empty AI marketing and glowing gimmicks. We deploy automation and language models strictly where repetitive manual friction drains human effort—such as extracting unstructured invoices, classifying support tickets, or syncing legacy tools with human-in-the-loop oversight.",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 24, color: "#EA580C" }} />,
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
      secondaryLabel: "Extraction Precision",
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
    question: "Visitors bounce, website doesn't convert, and it feels like an outdated brochure.",
    recommendedDomain: "Business Websites",
    recommendedPath: "/solutions/business-websites",
    timeframe: "2 - 4 Weeks",
    keyDeliverables: [
      "Next.js high-performance edge platform (sub-0.4s LCP)",
      "Problem-first positioning and structured scope intake form",
      "Semantic technical SEO & automated lead notification hooks",
    ],
    expectedOutcome: "Immediate credibility, zero bounce from slow load times, and higher inquiry qualification.",
  },
  {
    id: "leads",
    title: "Lost Leads & Delayed Follow-Ups",
    question: "Inquiries arrive via WhatsApp, web forms, and emails, getting lost in the shuffle.",
    recommendedDomain: "Customer & Lead Systems",
    recommendedPath: "/solutions/customer-lead-systems",
    timeframe: "3 - 5 Weeks",
    keyDeliverables: [
      "Unified multi-channel webhook queue (WhatsApp, Email, Web)",
      "Automated instant response sequences & SLA escalation alerts",
      "Lightweight sales pipeline dashboard and customer portal",
    ],
    expectedOutcome: "Sub-45s average response speed and 0% lost inquiries across all communication channels.",
  },
  {
    id: "spreadsheets",
    title: "Spreadsheet Chaos & Double-Booking",
    question: "Core operations run on 10+ sheets, manual dispatch calls, and untracked jobs.",
    recommendedDomain: "Internal Business Tools",
    recommendedPath: "/solutions/internal-business-tools",
    timeframe: "4 - 7 Weeks",
    keyDeliverables: [
      "Centralized PostgreSQL database & role-based admin console",
      "Mobile dispatch interface & digital job completion sign-offs",
      "Dynamic margin-aware quote & invoice calculation engine",
    ],
    expectedOutcome: "Single source of operational truth, protected profit margins, and zero double-booking.",
  },
  {
    id: "manual-tasks",
    title: "Repetitive Data Entry & Invoicing",
    question: "Staff spend 15+ hours weekly copying invoices, PDFs, and sorting emails.",
    recommendedDomain: "AI & Practical Automation",
    recommendedPath: "/solutions/ai-automation",
    timeframe: "2 - 4 Weeks",
    keyDeliverables: [
      "Automated document OCR & table parsing engine (99.4% accuracy)",
      "Human-in-the-loop review queue for anomalous documents",
      "Direct API sync into accounting (QuickBooks/Xero) & ERP",
    ],
    expectedOutcome: "85% reduction in manual data entry time with 100% verified transactional integrity.",
  },
];

const comparisonData = [
  {
    feature: "Architecture & Ownership",
    traditional: "Off-the-shelf WordPress themes or bloated $150/user/mo SaaS subscriptions where you never own the source code.",
    aetibar: "Custom-engineered Next.js & PostgreSQL platforms. You own 100% of the code, database, and infrastructure with zero per-seat tax.",
  },
  {
    feature: "Workflow Alignment",
    traditional: "Forces your team to change daily habits to match rigid software fields and generic multi-tenant templates.",
    aetibar: "Engineered backwards from your actual daily stages, handoffs, and customer journeys for natural team adoption.",
  },
  {
    feature: "Speed & Performance",
    traditional: "Heavy plugin stacks causing 3.5s - 6s load times, frequent security crashes, and high user churn.",
    aetibar: "Sub-second edge rendering (0.38s LCP), zero third-party plugin bloat, and enterprise-grade reliability.",
  },
  {
    feature: "Data Flow & Integrations",
    traditional: "Fragile Zapier zaps that break silently, creating disconnected data silos and missed lead notifications.",
    aetibar: "Resilient server-side webhooks and dedicated REST/GraphQL bridges ensuring seamless information flow.",
  },
  {
    feature: "AI Implementation",
    traditional: "Hallucinating autonomous chatbots with no confidence checks or human review safeguards.",
    aetibar: "Targeted document & triage engines with 99.4% precision, confidence scoring, and human verification gates.",
  },
];

const ecosystemSteps = [
  {
    step: "01",
    name: "Customer Front Door",
    domain: "Business Websites",
    action: "Attracts & Qualifies",
    detail: "High-speed Next.js platform delivers instant authority and captures structured project scope.",
    metric: "0.38s Edge Load",
    color: "#EA580C",
  },
  {
    step: "02",
    name: "Inquiry Infrastructure",
    domain: "Customer & Lead Systems",
    action: "Captures & Triages",
    detail: "Multi-channel webhook engine routes inquiries from Web, WhatsApp & Email into an accountable queue.",
    metric: "< 45s SLA Response",
    color: "#F97316",
  },
  {
    step: "03",
    name: "Operational Backbone",
    domain: "Internal Business Tools",
    action: "Executes & Tracks",
    detail: "Custom dashboard manages scheduling, mobile field dispatch, and dynamic margin-protected quotes.",
    metric: "14+ Sheets Replaced",
    color: "#FB923C",
  },
  {
    step: "04",
    name: "Targeted Automation",
    domain: "AI & Automation",
    action: "Syncs & Eliminates Toil",
    detail: "Parses inbound invoices and syncs data to accounting with human-in-the-loop verification.",
    metric: "85% Hours Saved",
    color: "#EA580C",
  },
];

const implementationStages = [
  {
    phase: "Week 01",
    title: "Diagnostic & Workflow Audit",
    desc: "We analyze your customer touchpoints, lead flow, and operational handoffs to pinpoint exact bottlenecks.",
  },
  {
    phase: "Week 02",
    title: "Architecture & Interactive Prototype",
    desc: "We design the data schema, API contract, and clickable high-fidelity interface for team validation.",
  },
  {
    phase: "Weeks 03 - 04",
    title: "Full-Stack Engineering & System Bridges",
    desc: "Production code built with Next.js, PostgreSQL, and resilient webhooks connecting your external tools.",
  },
  {
    phase: "Week 05",
    title: "Deployment, Training & Code Handoff",
    desc: "Rigorous staging verification, staff walkthrough sessions, and complete repository ownership transfer.",
  },
];

const faqs = [
  {
    q: "How does Aetibar determine which solution area our business needs?",
    a: "We never guess or push a predetermined package. We start with a 30-minute diagnostic session where we map your current customer touchpoints and internal handoffs. We identify precisely where manual time is lost, where inquiries slip through, or where spreadsheets create bottlenecks, and propose only the specific system that unlocks immediate leverage.",
  },
  {
    q: "Can these solutions integrate with our existing software and tools?",
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box component="main" sx={{ bgcolor: "#FFFFFF", color: "#18181B" }}>
      {/* 1. HERO SECTION: "Understand In One Glance" */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 16, sm: 18, md: 22 },
          pb: { xs: 10, md: 14 },
          background:
            "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.09) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
          overflow: "hidden",
        }}
      >
        {/* Subtle Architectural Grid */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(24, 24, 27, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 24, 27, 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          {/* Centered Hero Header */}
          <Box sx={{ maxWidth: 980, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            {/* Status Pill matching Home Page */}
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2.2,
                  py: 0.8,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                  backdropFilter: "blur(12px)",
                  mb: { xs: 3, md: 3.5 },
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#F97316", boxShadow: "0 0 10px #F97316" }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.825rem" },
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#EA580C",
                    textTransform: "uppercase",
                  }}
                >
                  DIGITAL ARCHITECTURE &bull; FOUR PURPOSE-BUILT DOMAINS
                </Typography>
              </Box>
            </motion.div>

            {/* Main Headline with Sunset Orange Gradient Accent */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3.5rem", md: "4.5rem", lg: "5.2rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.12, md: 1.05 },
                  letterSpacing: { xs: "-0.03em", md: "-0.04em" },
                  mb: { xs: 3, md: 3.5 },
                }}
              >
                Different business problems need{" "}
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

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.25rem" },
                  lineHeight: 1.75,
                  color: "#52525B",
                  maxWidth: 820,
                  mx: "auto",
                  mb: { xs: 4, md: 5 },
                  fontWeight: 400,
                }}
              >
                Stop forcing your business into rigid generic SaaS templates or paying endless per-seat license taxes.
                We engineer four dedicated digital engines tailored to how your company actually operates—from customer
                discovery to back-office execution.
              </Typography>
            </motion.div>

            {/* Fast Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 2,
                  mb: { xs: 6, md: 8 },
                }}
              >
                <Button
                  onClick={() => scrollToSection("solutions-showcase")}
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: { xs: 3.5, sm: 4.5 },
                    py: { xs: 1.5, sm: 1.6 },
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    boxShadow: "0 10px 28px rgba(234, 88, 12, 0.35)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 14px 34px rgba(234, 88, 12, 0.5)",
                    },
                  }}
                >
                  Explore 4 Solution Engines
                </Button>

                <Button
                  onClick={() => scrollToSection("bottleneck-diagnostic")}
                  variant="outlined"
                  sx={{
                    color: "#18181B",
                    px: { xs: 3, sm: 4 },
                    py: { xs: 1.5, sm: 1.6 },
                    borderRadius: "9999px",
                    fontWeight: 600,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    border: "1px solid rgba(24, 24, 27, 0.18)",
                    bgcolor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    "&:hover": {
                      bgcolor: "#FAF8F5",
                      borderColor: "rgba(24, 24, 27, 0.35)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Diagnose Your Bottleneck
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* "UNDERSTAND IN ONE LOOK": 4-Pillar Fast Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                  mb: 3,
                }}
              >
                THE 4 CORE ARCHITECTURAL PILLARS AT A GLANCE
              </Typography>

              <Grid container spacing={2.5}>
                {domains.map((item, idx) => {
                  const isCurrent = activeIdx === idx;
                  return (
                    <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={item.id}>
                      <Box
                        onClick={() => {
                          setActiveIdx(idx);
                          scrollToSection("solutions-showcase");
                        }}
                        sx={{
                          p: 3,
                          borderRadius: "20px",
                          bgcolor: isCurrent ? "#18181B" : "#FFFFFF",
                          color: isCurrent ? "#FFFFFF" : "#18181B",
                          border: isCurrent
                            ? "1px solid #EA580C"
                            : "1px solid rgba(228, 228, 231, 0.9)",
                          boxShadow: isCurrent
                            ? "0 16px 36px -8px rgba(234, 88, 12, 0.25)"
                            : "0 4px 16px rgba(24, 24, 27, 0.03)",
                          cursor: "pointer",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          position: "relative",
                          overflow: "hidden",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            borderColor: "#EA580C",
                            boxShadow: "0 14px 30px rgba(24, 24, 27, 0.08)",
                          },
                        }}
                      >
                        {/* Top Indicator */}
                        <Box sx={{ mb: 2 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              mb: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 44,
                                height: 44,
                                borderRadius: "12px",
                                bgcolor: isCurrent ? "rgba(234, 88, 12, 0.15)" : "rgba(249, 115, 22, 0.08)",
                                border: isCurrent
                                  ? "1px solid rgba(234, 88, 12, 0.4)"
                                  : "1px solid rgba(249, 115, 22, 0.2)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {item.icon}
                            </Box>
                            <Typography
                              sx={{
                                fontFamily: "monospace",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                color: isCurrent ? "#FB923C" : "#A1A1AA",
                              }}
                            >
                              {item.num}
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              color: isCurrent ? "#FB923C" : "#EA580C",
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                              mb: 0.5,
                            }}
                          >
                            {item.tagline}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "1.2rem",
                              fontWeight: 700,
                              color: isCurrent ? "#FFFFFF" : "#18181B",
                              lineHeight: 1.3,
                              mb: 1.5,
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "0.85rem",
                              color: isCurrent ? "#A1A1AA" : "#52525B",
                              lineHeight: 1.6,
                            }}
                          >
                            {item.problem}
                          </Typography>
                        </Box>

                        {/* Bottom Highlight Metric */}
                        <Box
                          sx={{
                            pt: 2,
                            mt: 2,
                            borderTop: isCurrent
                              ? "1px solid rgba(255, 255, 255, 0.1)"
                              : "1px solid rgba(228, 228, 231, 0.8)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.8rem",
                              fontWeight: 700,
                              color: isCurrent ? "#FB923C" : "#18181B",
                            }}
                          >
                            {item.metrics.primary} &bull; {item.metrics.secondary}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              color: isCurrent ? "#EA580C" : "#71717A",
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            View &rarr;
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* 2. THE CONNECTED WORKFLOW BLUEPRINT: How the 4 Engines Work As One */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 880, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <SyncAltIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                THE CONNECTED ECOSYSTEM BLUEPRINT
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.2rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                lineHeight: 1.18,
                mb: 2.5,
              }}
            >
              Not isolated tools. A unified operational machine.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                color: "#52525B",
                lineHeight: 1.75,
              }}
            >
              Most agencies sell you an isolated website or leave you to duct-tape 10 disconnected tools.
              At Aetibar, front-stage customer experience connects seamlessly to back-stage operational software.
            </Typography>
          </Box>

          {/* Flow Stages */}
          <Grid container spacing={3}>
            {ecosystemSteps.map((stage, sIdx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={stage.step}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    boxShadow: "0 4px 18px rgba(24, 24, 27, 0.03)",
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                      <Box
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          color: "#EA580C",
                          bgcolor: "rgba(249, 115, 22, 0.1)",
                          px: 1.5,
                          py: 0.4,
                          borderRadius: "6px",
                        }}
                      >
                        STAGE {stage.step}
                      </Box>
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A" }}>
                        {stage.action}
                      </Typography>
                    </Box>

                    <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, color: "#18181B", mb: 0.5 }}>
                      {stage.name}
                    </Typography>

                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#EA580C", mb: 2 }}>
                      {stage.domain}
                    </Typography>

                    <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.65, mb: 3 }}>
                      {stage.detail}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      pt: 2,
                      borderTop: "1px solid rgba(228, 228, 231, 0.8)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <DoneAllOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#18181B" }}>
                      Benchmark: {stage.metric}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. PANORAMIC INTERACTIVE SHOWCASE (The 4 Flagship Pillars) */}
      <Box
        component="section"
        id="solutions-showcase"
        sx={{
          py: { xs: 10, md: 18 },
          bgcolor: "#FFFFFF",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          {/* Section Header */}
          <Box sx={{ maxWidth: 860, mb: { xs: 5, md: 7 } }}>
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
                  fontWeight: 700,
                }}
              >
                DEEP ARCHITECTURAL EXPLORER
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.2rem", sm: "3.2rem", md: "3.8rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.15, md: 1.08 },
                letterSpacing: "-0.035em",
                mb: 2,
              }}
            >
              Explore the four specialized domains.
            </Typography>

            <Typography sx={{ fontSize: { xs: "1.05rem", md: "1.2rem" }, color: "#52525B", lineHeight: 1.75 }}>
              Select a domain below to see its real-world problem, the engineered solution, key capabilities, and
              verified performance telemetry.
            </Typography>
          </Box>

          {/* Top Control Rail: Real-time Synchronized Domain Pills + Next/Prev Arrows */}
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
            {/* Domain Pills with Fluid Synchronized Spring Bubble */}
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
                      px: { xs: 2, sm: 2.8 },
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
                        layoutId="activeDomainPillIndicatorSolutions"
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
                        mb: 3,
                      }}
                    >
                      {current.headline}
                    </Typography>
                  </motion.div>

                  {/* Problem vs Solution Comparison Box */}
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: "14px",
                      bgcolor: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      mb: 3.5,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.75 }}>
                      <CancelOutlinedIcon sx={{ fontSize: 18, color: "#F87171", mt: 0.25, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.85rem", color: "#A1A1AA", lineHeight: 1.6 }}>
                        <strong style={{ color: "#F87171" }}>The Real Problem:</strong> {current.problem}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: "#EA580C", mt: 0.25, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.85rem", color: "#E4E4E7", lineHeight: 1.6 }}>
                        <strong style={{ color: "#FB923C" }}>Engineered System:</strong> {current.solution}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Capabilities List */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.3, mb: 3.5 }}>
                      {current.capabilities.map((cap, cIdx) => (
                        <Box key={cIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                          <CheckCircleOutlinedIcon
                            sx={{ fontSize: 18, color: "#EA580C", mt: 0.25, flexShrink: 0 }}
                          />
                          <Typography
                            sx={{
                              fontSize: "0.9rem",
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
                      p: 2,
                      borderRadius: "10px",
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
                          height: { xs: 300, sm: 400, md: 480 },
                          bgcolor: "#090A0E",
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

      {/* 4. INTERACTIVE BOTTLENECK DIAGNOSTIC: "Where is your business losing momentum?" */}
      <Box
        component="section"
        id="bottleneck-diagnostic"
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
              Where is your business currently losing time and revenue?
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Click your most pressing operational friction point below to see the exact engineered system we deploy to eliminate it.
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

            {/* Right: Architectural Solution Prescription */}
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

                    <Typography sx={{ fontSize: "1rem", color: "#52525B", lineHeight: 1.7, mb: 3.5 }}>
                      {activeBottleneck.expectedOutcome}
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

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.75, mb: 4 }}>
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
                          "&:hover": {
                            borderColor: "#EA580C",
                            color: "#EA580C",
                          },
                        }}
                      >
                        Schedule Diagnostic for This Scope
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </AnimatePresence>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. COMPARISON TABLE: Generic SaaS Bloat vs Aetibar Custom Systems */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 9 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <LayersOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                THE ARCHITECTURAL DIFFERENCE
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
              Why custom-engineered systems outperform generic agency packages
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Compare the real architectural difference between typical agencies selling cookie-cutter WordPress themes
              or $150/user/month subscriptions versus Aetibar&apos;s tailored operational software.
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
                  TRADITIONAL AGENCIES &amp; GENERIC SAAS
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4.5 }}>
                <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#FB923C" }}>
                  AETIBAR PURPOSE-BUILT SYSTEMS
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

      {/* 6. THE 4-STAGE IMPLEMENTATION SPRINT */}
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
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2.5,
              }}
            >
              <TrendingUpOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                PREDICTABLE DELIVERY BLUEPRINT
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
              From friction diagnostic to live deployment in 30 days
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              We follow a strict, engineering-first delivery framework that minimizes disruption to your daily operations.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {implementationStages.map((stage, iIdx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={stage.phase}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 16px rgba(24, 24, 27, 0.02)",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "inline-block",
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#EA580C",
                        bgcolor: "rgba(249, 115, 22, 0.08)",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "6px",
                        mb: 2,
                      }}
                    >
                      {stage.phase}
                    </Box>
                    <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}>
                      {stage.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.65 }}>
                      {stage.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FFFFFF",
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
                  bgcolor: "#FAF8F5",
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

      {/* 8. FLAGSHIP SOLUTIONS CTA (Home Page Theme) */}
      <SolutionsCta
        badge="START WITH AN ARCHITECTURE AUDIT"
        headline="Have a specific workflow bottleneck slowing down your business?"
        description="Book a 30-minute diagnostic session with an engineering founder. We'll map your current operational handoffs and show you exactly which digital system will unlock immediate leverage."
        primaryButtonText="Schedule Architecture Diagnostic"
        secondaryButtonText="Explore Selected Work"
        primaryLink="/contact"
        secondaryLink="/portfolio"
      />
    </Box>
  );
}
