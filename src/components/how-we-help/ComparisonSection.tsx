"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ComparisonScenario {
  id: string;
  tabLabel: string;
  icon: React.ReactNode;
  questionTitle: string;
  whyItMatters: string;
  agencyVerdict: {
    badge: string;
    description: string;
    costOrSpeed: string;
  };
  saasVerdict: {
    badge: string;
    description: string;
    costOrSpeed: string;
  };
  aetibarVerdict: {
    badge: string;
    description: string;
    costOrSpeed: string;
    highlight: string;
  };
}

const scenarios: ComparisonScenario[] = [
  {
    id: "cost",
    tabLabel: "3-Year True Cost",
    icon: <AttachMoneyRoundedIcon sx={{ fontSize: 18 }} />,
    questionTitle: "How much will you actually spend over the next 3 years?",
    whyItMatters:
      "Software costs don't end at launch. Per-user seat licenses, consultant fees, and required rebuilds quietly eat away tens of thousands in company profits.",
    agencyVerdict: {
      badge: "Rebuild Every 2 Years",
      description:
        "Initial $8k–$15k build, but depends on 12+ third-party WordPress plugins. Breaks on major updates and requires a complete redesign from scratch every 2–3 years.",
      costOrSpeed: "Total 3-Yr Cost: $25,000–$40,000+",
    },
    saasVerdict: {
      badge: "Per-User Monthly Tax",
      description:
        "Starts at $150/user/month. When your team grows to 15 people, you pay $2,250 every month ($81,000 over 3 years) just to access your own operational records.",
      costOrSpeed: "Total 3-Yr Cost: $85,000–$120,000+",
    },
    aetibarVerdict: {
      badge: "Fixed Asset You Own",
      description:
        "One fixed engineering investment. Zero per-seat monthly fees. Minimal serverless hosting (~$20/mo). You own the code and database permanently as a company asset.",
      costOrSpeed: "Total 3-Yr Cost: Fixed Build + ~$720 Hosting",
      highlight: "Saves $60,000+ compared to recurring enterprise software",
    },
  },
  {
    id: "speed",
    tabLabel: "Lead Response Speed",
    icon: <BoltRoundedIcon sx={{ fontSize: 18 }} />,
    questionTitle: "How fast do new customer inquiries get an answer?",
    whyItMatters:
      "78% of customers buy from the company that responds first. Delays of even 30 minutes slash your chance of closing a high-value project by half.",
    agencyVerdict: {
      badge: "Unmonitored Inbox Form",
      description:
        "Standard website form dumps unformatted messages into a shared general email inbox. Leads sit unread for 4–6 hours while customers message your competitors.",
      costOrSpeed: "Average Response: 4 to 24 Hours",
    },
    saasVerdict: {
      badge: "40-Field Friction Form",
      description:
        "Generic CRM forms ask 20 mandatory questions before letting buyers submit. 60%+ of high-intent mobile visitors abandon the page without completing it.",
      costOrSpeed: "High Form Drop-off Rate (60%+)",
    },
    aetibarVerdict: {
      badge: "Instant 30s Multi-Channel Sync",
      description:
        "Sub-second webhook intake sends an immediate, personalized WhatsApp confirmation to the buyer and rings the assigned sales rep with full project specifications.",
      costOrSpeed: "Average Response: Under 45 Seconds",
      highlight: "100% lead capture with instant automated buyer welcome",
    },
  },
  {
    id: "quoting",
    tabLabel: "Custom Quoting & Margins",
    icon: <CalculateOutlinedIcon sx={{ fontSize: 18 }} />,
    questionTitle: "Can the system calculate complex pricing and generate proposals?",
    whyItMatters:
      "When quoting takes 3 days, sales momentum dies. When formulas are hidden in personal spreadsheets, employees accidentally under-quote and destroy your profit margins.",
    agencyVerdict: {
      badge: "Static 'Contact Us' Form",
      description:
        "Static pricing tables or a generic button with zero calculation logic. Your sales team must manually do math in Excel and hand-type Word documents.",
      costOrSpeed: "Proposal Turnaround: 2 to 4 Days",
    },
    saasVerdict: {
      badge: "Rigid $30k CPQ Add-On",
      description:
        "Requires expensive enterprise CPQ modules and specialized consultants to configure. Still rigid and difficult for sales reps to customize in the field.",
      costOrSpeed: "Turnaround: 4–6 Hours (High Friction)",
    },
    aetibarVerdict: {
      badge: "4-Minute Automated Quoting",
      description:
        "Dynamic margin engine tailored to your real pricing rules. Sales reps enter specifications on their phone; a branded PDF proposal is ready for client e-sign in 4 minutes.",
      costOrSpeed: "Proposal Turnaround: Under 4 Minutes",
      highlight: "Enforces minimum profit margins so quotes are always profitable",
    },
  },
  {
    id: "sync",
    tabLabel: "Daily Workflow Sync",
    icon: <SyncAltRoundedIcon sx={{ fontSize: 18 }} />,
    questionTitle: "Does data flow automatically between your website and internal team?",
    whyItMatters:
      "When software is disconnected, employees spend hours copying data back and forth. Typos in addresses, quantities, and phone numbers lead to costly delivery mistakes.",
    agencyVerdict: {
      badge: "Completely Disconnected",
      description:
        "Agencies only care about the front website. They have no interest in your accounting software, field dispatch, or inventory tracking behind the scenes.",
      costOrSpeed: "2+ Hours Wasted Daily on Copy-Pasting",
    },
    saasVerdict: {
      badge: "Fragile Third-Party Connectors",
      description:
        "Rely on brittle third-party zaps between different software tools. When an API updates without notice, zaps break silently and corrupt your database records.",
      costOrSpeed: "Frequent Silent Sync Failures",
    },
    aetibarVerdict: {
      badge: "Unified Automated Pipeline",
      description:
        "Direct webhook bridges connect website inquiries, team WhatsApp groups, project management, and invoicing into one single source of truth.",
      costOrSpeed: "Zero Manual Re-Typing (Real-Time Sync)",
      highlight: "Eliminates human error across customer intake and operations",
    },
  },
  {
    id: "ownership",
    tabLabel: "Code & Data Ownership",
    icon: <LockOutlinedIcon sx={{ fontSize: 18 }} />,
    questionTitle: "Who actually owns the software, database, and intellectual property?",
    whyItMatters:
      "Renting your core business engine leaves you vulnerable. If a SaaS provider raises prices 40% or closes your account, your entire business operations grind to a halt.",
    agencyVerdict: {
      badge: "Plugin Dependency Trap",
      description:
        "You own design layout files, but depend on 15+ external commercial plugins with separate renewal licenses that can conflict and crash your website.",
      costOrSpeed: "Vendor & Plugin Lock-in",
    },
    saasVerdict: {
      badge: "Zero Ownership (Permanent Rental)",
      description:
        "You own nothing. You rent access to their servers. If you cancel your subscription, your historical analytics, workflows, and tools are instantly locked.",
      costOrSpeed: "100% Locked Inside Their Platform",
    },
    aetibarVerdict: {
      badge: "100% Permanent Company IP",
      description:
        "Full intellectual property ownership from day one. Clean TypeScript and PostgreSQL code running on your private cloud. You can modify or host it anywhere forever.",
      costOrSpeed: "100% Owned Business Asset",
      highlight: "Builds tangible equity and valuation into your company",
    },
  },
];

export default function ComparisonSection() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("cost");

  const currentScenario =
    scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <Box
      component="section"
      id="architectural-difference"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header (Left-Aligned) */}
        <Box sx={{ maxWidth: 900, ml: 0, mr: "auto", textAlign: "left", mb: { xs: 7, md: 9 } }}>
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
                  THE ARCHITECTURAL DIFFERENCE
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
                fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.4rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                lineHeight: 1.18,
                textAlign: "left",
                mb: 2.5,
              }}
            >
              Why custom connected systems beat marketing agencies and rented SaaS
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
              Most companies get stuck between a marketing agency that only designs a pretty brochure,
              or bloated enterprise software that charges thousands in monthly seat taxes.
              Here is how purpose-built connected architecture changes everything.
            </Typography>
          </motion.div>
        </Box>

        {/* 3 Model Overview Cards (Clean, Readable, High Contrast) */}
        <Grid container spacing={{ xs: 3, md: 3.5 }} sx={{ alignItems: "stretch", mb: { xs: 8, md: 10 } }}>
          {/* Card 1: Traditional Web Agencies */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: { xs: 3.5, sm: 4.5 },
                borderRadius: { xs: "20px", md: "24px" },
                bgcolor: "#FAF8F5",
                border: "1px solid rgba(24, 24, 27, 0.08)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "rgba(220, 38, 38, 0.4)",
                  boxShadow: "0 14px 30px -10px rgba(220, 38, 38, 0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Box>
                {/* Header Badge */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                  <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#71717A", letterSpacing: "0.06em" }}>
                    OPTION 01 &bull; SURFACE ONLY
                  </Typography>
                  <Box
                    sx={{
                      px: 1.2,
                      py: 0.3,
                      borderRadius: "6px",
                      bgcolor: "rgba(220, 38, 38, 0.08)",
                      border: "1px solid rgba(220, 38, 38, 0.2)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, color: "#DC2626" }}>
                      DISCONNECTED
                    </Typography>
                  </Box>
                </Box>

                <Typography sx={{ fontSize: "1.35rem", fontWeight: 600, color: "#18181B", mb: 1.2 }}>
                  Marketing &amp; Web Agencies
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.65, mb: 3 }}>
                  Focus solely on visual graphics and copywriting. Once design mockups are approved,
                  they disappear — leaving your internal team with the same manual chaos.
                </Typography>

                {/* Reality Check Bullets */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 3.5 }}>
                  {[
                    "Website is an isolated brochure that doesn't talk to your tools",
                    "Customer leads get dumped into an unmonitored general email inbox",
                    "Zero understanding of pricing margins, quoting logic, or dispatch",
                    "Breaks when WordPress plugins conflict on routine updates",
                  ].map((pt, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CloseRoundedIcon sx={{ fontSize: 18, color: "#DC2626", mt: 0.2, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.5 }}>
                        {pt}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Bottom Cost & Verdict */}
              <Box sx={{ pt: 3, borderTop: "1px solid rgba(24, 24, 27, 0.08)" }}>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase", mb: 0.5 }}>
                  3-YEAR FINANCIAL REALITY:
                </Typography>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#18181B", mb: 1.5 }}>
                  $8k–$15k build + $250/mo in fragile plugins (Rebuilt every 2 yrs)
                </Typography>
                <Box
                  sx={{
                    p: 1.6,
                    borderRadius: "10px",
                    bgcolor: "rgba(220, 38, 38, 0.05)",
                    border: "1px solid rgba(220, 38, 38, 0.18)",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", color: "#DC2626", fontWeight: 600, lineHeight: 1.4 }}>
                    Verdict: A pretty digital face, but zero relief for daily operations.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Card 2: Off-The-Shelf SaaS Platforms */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: { xs: 3.5, sm: 4.5 },
                borderRadius: { xs: "20px", md: "24px" },
                bgcolor: "#FAF8F5",
                border: "1px solid rgba(24, 24, 27, 0.08)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "rgba(234, 88, 12, 0.4)",
                  boxShadow: "0 14px 30px -10px rgba(234, 88, 12, 0.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Box>
                {/* Header Badge */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                  <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#71717A", letterSpacing: "0.06em" }}>
                    OPTION 02 &bull; RENTED SOFTWARE
                  </Typography>
                  <Box
                    sx={{
                      px: 1.2,
                      py: 0.3,
                      borderRadius: "6px",
                      bgcolor: "rgba(249, 115, 22, 0.08)",
                      border: "1px solid rgba(249, 115, 22, 0.25)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.68rem", fontWeight: 700, color: "#EA580C" }}>
                      RECURRING TAX
                    </Typography>
                  </Box>
                </Box>

                <Typography sx={{ fontSize: "1.35rem", fontWeight: 600, color: "#18181B", mb: 1.2 }}>
                  Off-The-Shelf SaaS Platforms
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.65, mb: 3 }}>
                  Pre-packaged software packed with 200 bloated features you never touch.
                  Charges heavy per-user monthly fees while forcing staff into rigid software rules.
                </Typography>

                {/* Reality Check Bullets */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 3.5 }}>
                  {[
                    "$150–$250/user/month seat fees that escalate every time you hire",
                    "Clunky menus staff hate, causing them to secretly revert to Excel",
                    "Rigid workflows that cannot be adapted to your unique pricing rules",
                    "Zero ownership: cancel your monthly subscription and data is locked",
                  ].map((pt, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CloseRoundedIcon sx={{ fontSize: 18, color: "#DC2626", mt: 0.2, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.5 }}>
                        {pt}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Bottom Cost & Verdict */}
              <Box sx={{ pt: 3, borderTop: "1px solid rgba(24, 24, 27, 0.08)" }}>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase", mb: 0.5 }}>
                  3-YEAR FINANCIAL REALITY:
                </Typography>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#18181B", mb: 1.5 }}>
                  $27k–$45k/year for a team of 15 ($85k–$120k+ over 3 years)
                </Typography>
                <Box
                  sx={{
                    p: 1.6,
                    borderRadius: "10px",
                    bgcolor: "rgba(249, 115, 22, 0.06)",
                    border: "1px solid rgba(249, 115, 22, 0.2)",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", color: "#EA580C", fontWeight: 600, lineHeight: 1.4 }}>
                    Verdict: Expensive recurring monthly tax with low internal adoption.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Card 3: Aetibar Connected Systems (Featured Clean Architectural Style) */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: { xs: 3.5, sm: 4.5 },
                borderRadius: { xs: "20px", md: "24px" },
                bgcolor: "#FFFFFF",
                border: "2px solid #EA580C",
                boxShadow: "0 18px 40px -12px rgba(234, 88, 12, 0.18)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "all 0.25s ease",
                "&:hover": {
                  boxShadow: "0 22px 48px -12px rgba(234, 88, 12, 0.25)",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <Box>
                {/* Header Badge */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                  <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.06em" }}>
                    OPTION 03 &bull; PURPOSE-BUILT ASSET
                  </Typography>
                  <Box
                    sx={{
                      px: 1.4,
                      py: 0.3,
                      borderRadius: "6px",
                      bgcolor: "#EA580C",
                      color: "#FFFFFF",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.68rem", fontWeight: 700 }}>
                      RECOMMENDED
                    </Typography>
                  </Box>
                </Box>

                <Typography sx={{ fontSize: "1.35rem", fontWeight: 600, color: "#18181B", mb: 1.2 }}>
                  Aetibar Connected Architecture
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.65, mb: 3 }}>
                  A unified system connecting your customer front door directly into your internal operations.
                  Tailored strictly around your workflow with zero monthly seat fees.
                </Typography>

                {/* Reality Check Bullets */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 3.5 }}>
                  {[
                    "100% purpose-built for your company's exact quoting and delivery rules",
                    "Instant WhatsApp & CRM qualification within 30 seconds of an inquiry",
                    "Direct automatic sync between customer orders, field dispatch, and invoices",
                    "Zero per-seat recurring fees: you own 100% of the code and database",
                  ].map((pt, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                      <CheckRoundedIcon sx={{ fontSize: 18, color: "#16A34A", mt: 0.2, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.875rem", color: "#18181B", fontWeight: 500, lineHeight: 1.5 }}>
                        {pt}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Bottom Cost & Verdict */}
              <Box sx={{ pt: 3, borderTop: "1px solid rgba(24, 24, 27, 0.08)" }}>
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase", mb: 0.5 }}>
                  3-YEAR FINANCIAL REALITY:
                </Typography>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#18181B", mb: 1.5 }}>
                  Fixed one-time build &bull; ~$20/mo hosting &bull; Permanent company equity
                </Typography>
                <Box
                  sx={{
                    p: 1.6,
                    borderRadius: "10px",
                    bgcolor: "rgba(22, 163, 74, 0.08)",
                    border: "1px solid rgba(22, 163, 74, 0.25)",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", color: "#15803D", fontWeight: 600, lineHeight: 1.4 }}>
                    &check; Verdict: A permanent asset that saves 15+ hours weekly and grows your valuation.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Interactive Dimension Explorer: "Compare What Matters to Your Business" */}
        <Box
          sx={{
            p: { xs: 3.5, sm: 5, md: 6 },
            borderRadius: { xs: "20px", md: "28px" },
            bgcolor: "#FAF8F5",
            border: "1px solid rgba(24, 24, 27, 0.08)",
          }}
        >
          <Box sx={{ textAlign: "left", mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.35rem", sm: "1.7rem", md: "2rem" },
                fontWeight: 600,
                color: "#18181B",
                mb: 1.2,
                textAlign: "left",
              }}
            >
              Side-by-side comparison across real business needs
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "#71717A", maxWidth: 680, ml: 0, mr: "auto", textAlign: "left" }}>
              Select any question below to see exactly how each approach handles your everyday operational reality.
            </Typography>
          </Box>

          {/* Interactive Dimension Selector Tabs */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              overflowX: "auto",
              pb: 2,
              mb: { xs: 4, md: 5 },
              gap: 1.2,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {scenarios.map((scenario) => {
              const isSelected = activeScenarioId === scenario.id;
              return (
                <Button
                  key={scenario.id}
                  onClick={() => setActiveScenarioId(scenario.id)}
                  startIcon={scenario.icon}
                  sx={{
                    px: 2.2,
                    py: 1,
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    transition: "all 0.25s ease",
                    bgcolor: isSelected ? "#EA580C" : "#FFFFFF",
                    color: isSelected ? "#FFFFFF" : "#52525B",
                    border: "1px solid",
                    borderColor: isSelected ? "#EA580C" : "rgba(24, 24, 27, 0.09)",
                    boxShadow: isSelected ? "0 4px 14px rgba(234, 88, 12, 0.3)" : "none",
                    "&:hover": {
                      bgcolor: isSelected ? "#C2410C" : "rgba(24, 24, 27, 0.04)",
                    },
                  }}
                >
                  {scenario.tabLabel}
                </Button>
              );
            })}
          </Box>

          {/* Active Scenario Direct 3-Way Comparison Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScenario.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Question Header */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(24, 24, 27, 0.07)",
                  mb: 3.5,
                  textAlign: "left",
                }}
              >
                <Typography sx={{ fontSize: "1.2rem", fontWeight: 600, color: "#18181B", mb: 0.5, textAlign: "left" }}>
                  &ldquo;{currentScenario.questionTitle}&rdquo;
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#71717A", maxWidth: 740, ml: 0, mr: "auto", textAlign: "left" }}>
                  {currentScenario.whyItMatters}
                </Typography>
              </Box>

              {/* 3 Columns: Agency vs SaaS vs Aetibar */}
              <Grid container spacing={{ xs: 2.5, md: 3 }} sx={{ alignItems: "stretch" }}>
                {/* Agency Column */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: "16px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(220, 38, 38, 0.2)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <CloseRoundedIcon sx={{ fontSize: 18, color: "#DC2626" }} />
                        <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#DC2626", textTransform: "uppercase" }}>
                          WEB AGENCY OUTCOME
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "1rem", fontWeight: 600, color: "#18181B", mb: 1 }}>
                        {currentScenario.agencyVerdict.badge}
                      </Typography>
                      <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.6, mb: 2 }}>
                        {currentScenario.agencyVerdict.description}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        pt: 2,
                        borderTop: "1px solid rgba(24, 24, 27, 0.06)",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, color: "#DC2626" }}>
                        {currentScenario.agencyVerdict.costOrSpeed}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* SaaS Column */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: "16px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(249, 115, 22, 0.25)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <CloseRoundedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
                        <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase" }}>
                          GENERIC SAAS OUTCOME
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "1rem", fontWeight: 600, color: "#18181B", mb: 1 }}>
                        {currentScenario.saasVerdict.badge}
                      </Typography>
                      <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.6, mb: 2 }}>
                        {currentScenario.saasVerdict.description}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        pt: 2,
                        borderTop: "1px solid rgba(24, 24, 27, 0.06)",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, color: "#EA580C" }}>
                        {currentScenario.saasVerdict.costOrSpeed}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Aetibar Column (Highlighted) */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: "16px",
                      bgcolor: "#FFFFFF",
                      border: "2px solid #16A34A",
                      boxShadow: "0 8px 24px -6px rgba(22, 163, 74, 0.15)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <CheckRoundedIcon sx={{ fontSize: 18, color: "#16A34A" }} />
                        <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#16A34A", textTransform: "uppercase" }}>
                          AETIBAR ADVANTAGE
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "1rem", fontWeight: 600, color: "#18181B", mb: 1 }}>
                        {currentScenario.aetibarVerdict.badge}
                      </Typography>
                      <Typography sx={{ fontSize: "0.875rem", color: "#18181B", fontWeight: 500, lineHeight: 1.6, mb: 2 }}>
                        {currentScenario.aetibarVerdict.description}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        pt: 2,
                        borderTop: "1px solid rgba(22, 163, 74, 0.2)",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, color: "#16A34A", mb: 0.3 }}>
                        {currentScenario.aetibarVerdict.costOrSpeed}
                      </Typography>
                      <Typography sx={{ fontSize: "0.78rem", color: "#52525B", fontWeight: 500 }}>
                        &bull; {currentScenario.aetibarVerdict.highlight}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Bottom Strategic Summary Bar */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            p: { xs: 4, sm: 5 },
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
          <Box sx={{ maxWidth: 820 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.45rem" },
                fontWeight: 600,
                color: "#18181B",
                mb: 1,
              }}
            >
              Ready to replace disconnected tools with a permanent company asset?
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "#52525B", lineHeight: 1.65 }}>
              We build custom software that your company owns completely. No monthly user licensing fees,
              no forced templates, and no software vendor lock-in.
            </Typography>
          </Box>

          <Link href="/contact" style={{ textDecoration: "none", flexShrink: 0 }}>
            <Button
              variant="contained"
              size="medium"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: "#EA580C",
                color: "#FFFFFF",
                px: 3.5,
                py: 1.3,
                fontWeight: 600,
                fontSize: "0.875rem",
                borderRadius: "9999px",
                boxShadow: "none",
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  bgcolor: "#C2410C",
                  boxShadow: "0 6px 20px -4px rgba(234, 88, 12, 0.4)",
                },
              }}
            >
              Discuss Your Architecture
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
