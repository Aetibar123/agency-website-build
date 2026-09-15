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
    tabLabel: "Long-Term Cost & Control",
    icon: <AttachMoneyRoundedIcon sx={{ fontSize: 18 }} />,
    questionTitle: "How do ongoing software costs and system control compare?",
    whyItMatters:
      "Understanding long-term software commitments helps businesses choose between recurring subscription overhead and purpose-built solutions.",
    agencyVerdict: {
      badge: "Template Maintenance",
      description:
        "Lower initial cost, but ongoing plugin renewals and theme updates often require routine maintenance to remain secure and functional.",
      costOrSpeed: "Ongoing plugin subscriptions & updates",
    },
    saasVerdict: {
      badge: "Per-User Subscription Model",
      description:
        "Monthly per-user licensing fees accumulate as your team expands, and custom workflow logic often requires expensive enterprise tiers.",
      costOrSpeed: "Ongoing per-user monthly licensing",
    },
    aetibarVerdict: {
      badge: "Custom Engineering Model",
      description:
        "Engineered specifically around your business. You maintain full control over your software and data, avoiding unnecessary per-user seat fees.",
      costOrSpeed: "Custom development with controllable infrastructure",
      highlight: "Avoids unnecessary per-user licensing fees as your team grows",
    },
  },
  {
    id: "speed",
    tabLabel: "Inquiry Handling",
    icon: <BoltRoundedIcon sx={{ fontSize: 18 }} />,
    questionTitle: "How are incoming customer inquiries captured and routed?",
    whyItMatters:
      "Prompt, organized responses help businesses engage prospective clients while their interest is highest.",
    agencyVerdict: {
      badge: "Standard Contact Form",
      description:
        "Website forms typically send unformatted emails to a shared inbox where inquiries can sit without clear team ownership.",
      costOrSpeed: "Unstructured email notifications",
    },
    saasVerdict: {
      badge: "Standardized Intake Form",
      description:
        "Standard CRM forms often include many mandatory fields that create friction for prospective clients without capturing specific project needs.",
      costOrSpeed: "Generic form fields",
    },
    aetibarVerdict: {
      badge: "Structured Inbound Intake",
      description:
        "Captures detailed project requirements, triggers immediate customer confirmation, and notifies the right team members with structured briefs.",
      costOrSpeed: "Automated intake & team notification",
      highlight: "Organized inquiry tracking and prompt customer confirmation",
    },
  },
  {
    id: "quoting",
    tabLabel: "Quoting & Pricing Logic",
    icon: <CalculateOutlinedIcon sx={{ fontSize: 18 }} />,
    questionTitle: "Can the system calculate complex pricing and generate proposals?",
    whyItMatters:
      "When pricing calculations are manual, preparing proposals takes valuable time and creates risks of inconsistent margins.",
    agencyVerdict: {
      badge: "Static Pricing Tables",
      description:
        "Website templates provide static forms without calculation logic, requiring teams to manually compute quotes across external spreadsheets.",
      costOrSpeed: "Manual calculations in separate files",
    },
    saasVerdict: {
      badge: "Standardized Quoting Modules",
      description:
        "Pre-packaged CPQ tools can be rigid and difficult to configure around specialized service workflows and custom pricing rules.",
      costOrSpeed: "Standardized calculation rules",
    },
    aetibarVerdict: {
      badge: "Tailored Estimation Workflow",
      description:
        "Quoting logic built around your approved pricing rules, generating clean proposals ready for review and delivery.",
      costOrSpeed: "Standardized pricing calculation",
      highlight: "Applies consistent pricing rules across team members",
    },
  },
  {
    id: "sync",
    tabLabel: "Workflow & Tool Integration",
    icon: <SyncAltRoundedIcon sx={{ fontSize: 18 }} />,
    questionTitle: "Does data flow automatically between your website and internal team?",
    whyItMatters:
      "When tools are disconnected, staff must re-enter information manually, which slows operations and causes transcription errors.",
    agencyVerdict: {
      badge: "Disconnected Front-End",
      description:
        "Focuses strictly on the public website with no connection to internal databases, scheduling, or accounting tools.",
      costOrSpeed: "Manual data transfer between systems",
    },
    saasVerdict: {
      badge: "Third-Party Connectors",
      description:
        "Often requires separate connector tools and middleware subscriptions to move data between different vendor platforms.",
      costOrSpeed: "Dependent on multiple connector services",
    },
    aetibarVerdict: {
      badge: "Direct System Integration",
      description:
        "Direct integrations link your web forms, CRM, project tracking, and invoicing into a cohesive operational workflow.",
      costOrSpeed: "Direct data synchronization",
      highlight: "Reduces duplicate entry across customer touchpoints and operations",
    },
  },
  {
    id: "ownership",
    tabLabel: "System Control & Flexibility",
    icon: <LockOutlinedIcon sx={{ fontSize: 18 }} />,
    questionTitle: "How much control does your business maintain over its software and data?",
    whyItMatters:
      "Businesses need the flexibility to adapt their tools as their processes evolve, without being locked into rigid third-party platforms.",
    agencyVerdict: {
      badge: "Theme & Plugin Dependencies",
      description:
        "Dependent on third-party themes and commercial plugins with varying update cycles and licensing requirements.",
      costOrSpeed: "Dependent on external plugin ecosystems",
    },
    saasVerdict: {
      badge: "Proprietary Platform",
      description:
        "Workflows, data models, and features are hosted on a vendor's proprietary system, limiting customization and export flexibility.",
      costOrSpeed: "Hosted within vendor ecosystem",
    },
    aetibarVerdict: {
      badge: "Custom Operational Control",
      description:
        "Tailored software architecture built on modern technologies like Next.js and TypeScript, giving your business full control over data and workflows.",
      costOrSpeed: "High flexibility and system control",
      highlight: "Gives your business greater control over how data and workflows are managed",
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
                  STRATEGIC SYSTEM APPROACH
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
              When off-the-shelf tools aren't enough for{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                your operations.
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
              Templates and generic SaaS are great for standard early-stage needs. But as operations mature,
              disconnected tools create data silos and manual workarounds.
              Here is how purpose-built connected architecture delivers long-term operational leverage.
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
                    OPTION 01 &bull; SURFACE-LEVEL SITES
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
                  Website Templates &amp; Basic Portfolios
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.65, mb: 3 }}>
                  Focus primarily on front-facing visual presentation. Effective for basic online visibility,
                  but completely disconnected from internal business processes and workflow tools.
                </Typography>

                {/* Reality Check Bullets */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 3.5 }}>
                  {[
                    "Standalone marketing pages that do not communicate with internal software",
                    "Customer inquiries require manual re-entry across spreadsheets and messaging apps",
                    "Limited capacity to reflect specialized pricing tiers, logic, or scheduling rules",
                    "Frequent reliance on conflicting third-party plugins that require regular maintenance",
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
                  PRACTICAL TRADE-OFF:
                </Typography>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#18181B", mb: 1.5 }}>
                  Low initial setup cost &bull; High ongoing manual coordination
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
                    Verdict: Good for initial visibility, but leaves internal operations dependent on manual labor.
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
                    OPTION 02 &bull; STANDARDIZED SAAS
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
                      STANDARDIZED
                    </Typography>
                  </Box>
                </Box>

                <Typography sx={{ fontSize: "1.35rem", fontWeight: 600, color: "#18181B", mb: 1.2 }}>
                  Generic SaaS &amp; Subscription Platforms
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.65, mb: 3 }}>
                  Standardized platforms built for general market workflows. Fast to deploy, but can
                  become inflexible and cost-heavy when your business operates with proprietary rules.
                </Typography>

                {/* Reality Check Bullets */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 3.5 }}>
                  {[
                    "Recurring monthly seat fees that scale continuously as team headcount grows",
                    "Rigid software workflows that force your staff into generic, one-size-fits-all processes",
                    "Data fragmented across multiple disparate subscription tools with separate silos",
                    "Complete reliance on vendor roadmaps, policy changes, and export limitations",
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
                  PRACTICAL TRADE-OFF:
                </Typography>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#18181B", mb: 1.5 }}>
                  Fast deployment &bull; Ongoing subscription overhead &amp; rigid constraints
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
                    Verdict: Excellent for generic workflows, but restrictive when operational differentiation matters.
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
                      PURPOSE-BUILT
                    </Typography>
                  </Box>
                </Box>

                <Typography sx={{ fontSize: "1.35rem", fontWeight: 600, color: "#18181B", mb: 1.2 }}>
                  Aetibar Connected Architecture
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.65, mb: 3 }}>
                  A unified system engineered specifically around your operating model, connecting
                  customer touchpoints directly into your internal execution workflows.
                </Typography>

                {/* Reality Check Bullets */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 3.5 }}>
                  {[
                    "Engineered specifically around your company's quoting rules and operational handoffs",
                    "Immediate customer intake routing and automated team notifications",
                    "Direct synchronization between intake, project delivery, and billing milestones",
                    "Full system ownership: complete control of your codebase, data schema, and business logic",
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
                  LONG-TERM VALUE:
                </Typography>
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 600, color: "#18181B", mb: 1.5 }}>
                  Tailored architecture &bull; Full system control &bull; Permanent company asset
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
                    &check; Verdict: A durable operational asset designed for workflow clarity, efficiency, and scale.
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
              Ready to connect your customer touchpoints and internal operations?
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "#52525B", lineHeight: 1.65 }}>
              We engineer custom software and workflow integrations tailored to how your business actually runs.
              Enjoy complete system ownership, direct database control, and solutions built for long-term reliability.
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
