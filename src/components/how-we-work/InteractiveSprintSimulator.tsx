"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectArchetype {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  baseWeeks: number;
  icon: React.ReactNode;
  team: string;
  stages: { period: string; title: string; output: string }[];
  keyBenefit: string;
  expectedRoi: string;
  hoursSaved: string;
}

const archetypes: ProjectArchetype[] = [
  {
    id: "lead-system",
    name: "Customer Lead System",
    badge: "2–3 Weeks Base",
    tagline: "A fast website connected directly to WhatsApp and your CRM so no inquiry is ever lost.",
    baseWeeks: 3,
    icon: <BoltRoundedIcon sx={{ fontSize: 22 }} />,
    team: "3 Specialists (Lead Architect, Next.js Engineer, UI Designer)",
    stages: [
      { period: "Week 1", title: "Inquiry Review & Simple Buyer Forms", output: "Clear lead capture forms designed for high mobile conversion" },
      { period: "Week 2", title: "Fast Website Build & WhatsApp Alerts", output: "Private staging link where you can test real inquiry submissions" },
      { period: "Week 3", title: "Lead Routing Verification & Live Launch", output: "Live platform with automated WhatsApp confirmations enabled" },
    ],
    keyBenefit: "Captures 100% of customer inquiries within 30 seconds so leads never slip away to competitors.",
    expectedRoi: "Zero lost leads across WhatsApp, website, and email with instant automated replies.",
    hoursSaved: "12+ hours saved every week across sales",
  },
  {
    id: "internal-portal",
    name: "Team Quoting Portal",
    badge: "4–5 Weeks Base",
    tagline: "A private web app where sales can create quotes in 4 minutes and staff track daily jobs.",
    baseWeeks: 5,
    icon: <BuildCircleOutlinedIcon sx={{ fontSize: 22 }} />,
    team: "3 Specialists (Principal Architect, Full-Stack Engineer, Database Specialist)",
    stages: [
      { period: "Week 1", title: "Spreadsheet & Pricing Rules Audit", output: "A clear plan detailing your exact pricing formulas and quoting steps" },
      { period: "Week 2", title: "Database Setup & Role Permissions", output: "Secure company database with custom access for sales and operations" },
      { period: "Weeks 3–4", title: "Dynamic Quoting Tool & Testing Sprints", output: "Working quoting tool tested with your real products and services" },
      { period: "Week 5", title: "Data Import, Staff Video Guides & Live Switch", output: "All past customer files safely imported and short staff video guides" },
    ],
    keyBenefit: "Staff stop copy-pasting numbers between spreadsheets. Client proposals take minutes, not days.",
    expectedRoi: "Quote delivery cut from 72 hours down to 4 minutes, protecting your profit margins from human errors.",
    hoursSaved: "20+ hours saved every week per employee",
  },
  {
    id: "ops-core",
    name: "Complete Operations Engine",
    badge: "6–7 Weeks Base",
    tagline: "One central system connecting customer intake, job scheduling, inventory, and invoices.",
    baseWeeks: 7,
    icon: <CalendarTodayOutlinedIcon sx={{ fontSize: 22 }} />,
    team: "4 Specialists (Solutions Architect, 2 Senior Engineers, Integrator)",
    stages: [
      { period: "Weeks 1–2", title: "Company Workflow Mapping", output: "A complete step-by-step roadmap showing how work flows across departments" },
      { period: "Weeks 3–4", title: "Central Database & Real-Time Data Sync", output: "Automatic background sync between customer inquiries, jobs, and invoices" },
      { period: "Weeks 5–6", title: "Departmental Portals & Team Testing", output: "Private testing links for sales, field dispatch, and accounting staff" },
      { period: "Week 7", title: "Safe Parallel Launch & Staff Training", output: "7-day safe transition running side-by-side with your old tools" },
    ],
    keyBenefit: "Replaces 5+ disconnected monthly software subscriptions with one central platform you own forever.",
    expectedRoi: "Total business clarity from a single dashboard with zero per-user monthly software fees.",
    hoursSaved: "45+ hours saved every week across all departments",
  },
  {
    id: "api-bridge",
    name: "Connect Existing Tools",
    badge: "1–2 Weeks Base",
    tagline: "An automatic background bridge that syncs data between your CRM, WhatsApp, and accounting.",
    baseWeeks: 2,
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 22 }} />,
    team: "2 Specialists (Integration Architect, Backend Engineer)",
    stages: [
      { period: "Week 1", title: "Software Connections & Data Rules", output: "A clear map of how data will automatically pass between your tools" },
      { period: "Week 2", title: "Background Sync Testing & Live Activation", output: "Live automatic data flow with error-prevention guards in place" },
    ],
    keyBenefit: "Connects your existing software tools so customer data moves automatically without manual re-typing.",
    expectedRoi: "Eliminates 100% of administrative copy-pasting between your CRM, WhatsApp, and accounting.",
    hoursSaved: "15+ hours saved every week on manual re-typing",
  },
];

const teamScales = [
  { id: "compact", label: "1–10 Staff", desc: "Single Location / Compact Team", multiplier: 1 },
  { id: "growing", label: "10–50 Staff", desc: "Growing Team with Multiple Roles", multiplier: 1.15 },
  { id: "scale", label: "50+ Staff", desc: "Multi-Branch Business", multiplier: 1.3 },
];

const sprintPaces = [
  { id: "standard", label: "Standard (Every 2 Weeks)", factor: 1 },
  { id: "accelerated", label: "Fast-Track Sprint", factor: 0.85 },
];

export default function InteractiveSprintSimulator() {
  const [selectedArchetypeId, setSelectedArchetypeId] = useState<string>("internal-portal");
  const [selectedScaleId, setSelectedScaleId] = useState<string>("growing");
  const [selectedPaceId, setSelectedPaceId] = useState<string>("standard");

  const currentArchetype = archetypes.find((a) => a.id === selectedArchetypeId) || archetypes[0];
  const currentScale = teamScales.find((s) => s.id === selectedScaleId) || teamScales[0];
  const currentPace = sprintPaces.find((p) => p.id === selectedPaceId) || sprintPaces[0];

  const calculatedWeeks = Math.max(
    2,
    Math.round(currentArchetype.baseWeeks * currentScale.multiplier * currentPace.factor)
  );

  return (
    <Box
      component="section"
      id="sprint-simulator"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Centered Section Header */}
        <Box sx={{ maxWidth: 860, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
                PROJECT ROADMAP ESTIMATOR
              </Typography>
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
                fontSize: { xs: "2.2rem", sm: "3.2rem", md: "3.8rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.035em",
                lineHeight: { xs: 1.15, md: 1.1 },
                mb: 2.5,
              }}
            >
              See how fast we can build{" "}
              <Box
                component="span"
                sx={{
                  display: { xs: "inline", sm: "block" },
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                and launch your system.
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.75,
                maxWidth: 760,
                mx: "auto",
              }}
            >
              Pick what your business needs below. We will show you the exact timeline, what happens each
              week, and how many hours your team gets back.
            </Typography>
          </motion.div>
        </Box>

        {/* Step 1: 4 System Choices in a Clean Row */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#71717A",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              textAlign: "center",
              mb: 2.5,
            }}
          >
            1. WHAT DOES YOUR BUSINESS NEED?
          </Typography>

          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {archetypes.map((arch) => {
              const isSelected = selectedArchetypeId === arch.id;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={arch.id}>
                  <Box
                    onClick={() => setSelectedArchetypeId(arch.id)}
                    sx={{
                      p: { xs: 2.5, sm: 3 },
                      borderRadius: "18px",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      bgcolor: isSelected ? "#FFFFFF" : "#FAF8F5",
                      border: "2px solid",
                      borderColor: isSelected ? "#EA580C" : "rgba(24, 24, 27, 0.08)",
                      boxShadow: isSelected ? "0 12px 28px -8px rgba(234, 88, 12, 0.22)" : "none",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        bgcolor: "#FFFFFF",
                        borderColor: isSelected ? "#EA580C" : "rgba(234, 88, 12, 0.4)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.8 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "10px",
                            bgcolor: isSelected ? "#EA580C" : "rgba(249, 115, 22, 0.1)",
                            color: isSelected ? "#FFFFFF" : "#EA580C",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {arch.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: isSelected ? "#EA580C" : "#71717A",
                          }}
                        >
                          {arch.badge}
                        </Typography>
                      </Box>

                      <Typography sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#18181B", mb: 0.8 }}>
                        {arch.name}
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem", color: "#52525B", lineHeight: 1.55 }}>
                        {arch.tagline}
                      </Typography>
                    </Box>

                    {isSelected && (
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mt: 2 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#EA580C" }} />
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C" }}>
                          Selected
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Step 2: Simplified Parameters (Team Size & Speed) */}
        <Box
          sx={{
            p: { xs: 2.5, sm: 3 },
            borderRadius: "18px",
            bgcolor: "#FAF8F5",
            border: "1px solid rgba(24, 24, 27, 0.08)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
            mb: { xs: 5, md: 7 },
          }}
        >
          {/* Organization Scale */}
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { sm: "center" }, gap: 1.5, width: { xs: "100%", md: "auto" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
              <GroupOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
              <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, color: "#18181B", textTransform: "uppercase" }}>
                Your Team Size:
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
              {teamScales.map((scale) => {
                const isSelected = selectedScaleId === scale.id;
                return (
                  <Button
                    key={scale.id}
                    size="small"
                    onClick={() => setSelectedScaleId(scale.id)}
                    sx={{
                      px: 2,
                      py: 0.7,
                      borderRadius: "9999px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "none",
                      bgcolor: isSelected ? "#18181B" : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : "#52525B",
                      border: "1px solid",
                      borderColor: isSelected ? "#18181B" : "rgba(24, 24, 27, 0.1)",
                      "&:hover": {
                        bgcolor: isSelected ? "#18181B" : "rgba(24, 24, 27, 0.04)",
                      },
                    }}
                  >
                    {scale.label}
                  </Button>
                );
              })}
            </Box>
          </Box>

          {/* Delivery Speed */}
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { sm: "center" }, gap: 1.5, width: { xs: "100%", md: "auto" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
              <SpeedRoundedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
              <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, color: "#18181B", textTransform: "uppercase" }}>
                Delivery Speed:
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
              {sprintPaces.map((pace) => {
                const isSelected = selectedPaceId === pace.id;
                return (
                  <Button
                    key={pace.id}
                    size="small"
                    onClick={() => setSelectedPaceId(pace.id)}
                    sx={{
                      px: 2,
                      py: 0.7,
                      borderRadius: "9999px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "none",
                      bgcolor: isSelected ? "#EA580C" : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : "#52525B",
                      border: "1px solid",
                      borderColor: isSelected ? "#EA580C" : "rgba(24, 24, 27, 0.1)",
                      "&:hover": {
                        bgcolor: isSelected ? "#C2410C" : "rgba(24, 24, 27, 0.04)",
                      },
                    }}
                  >
                    {pace.label}
                  </Button>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* Step 3: Simple & Clear Results Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedArchetypeId}-${selectedScaleId}-${selectedPaceId}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Box
              sx={{
                p: { xs: 3.5, sm: 5, md: 6 },
                borderRadius: { xs: "22px", md: "28px" },
                bgcolor: "#FAF8F5",
                border: "1.5px solid rgba(234, 88, 12, 0.3)",
                boxShadow: "0 18px 45px -12px rgba(234, 88, 12, 0.12)",
              }}
            >
              {/* Top Result Banner */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  justifyContent: "space-between",
                  gap: 3,
                  pb: 3.5,
                  mb: 4,
                  borderBottom: "1px solid rgba(24, 24, 27, 0.08)",
                }}
              >
                {/* Projected Weeks */}
                <Box>
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.06em", mb: 0.5 }}>
                    PROJECTED TIMELINE TO LAUNCH:
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "2.4rem", sm: "3.2rem" },
                        fontWeight: 700,
                        color: "#18181B",
                        lineHeight: 1,
                        fontFamily: "monospace",
                      }}
                    >
                      {calculatedWeeks} Weeks
                    </Typography>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#16A34A" }}>
                      &bull; Fixed Scope Guarantee
                    </Typography>
                  </Box>
                </Box>

                {/* 3 Quick Benefit Chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                      Time Saved for Staff:
                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#15803D" }}>
                      {currentArchetype.hoursSaved}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                      Your Dedicated Team:
                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B" }}>
                      {currentArchetype.team}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                      Software Ownership:
                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#EA580C" }}>
                      100% Yours (Zero Seat Fees)
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Plain-English Business Advantage Box */}
              <Box
                sx={{
                  p: 2.8,
                  borderRadius: "16px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(24, 24, 27, 0.08)",
                  mb: 4,
                }}
              >
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase", mb: 0.6 }}>
                  WHY THIS HELPS YOUR BUSINESS:
                </Typography>
                <Typography sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#18181B", mb: 0.8, lineHeight: 1.5 }}>
                  {currentArchetype.keyBenefit}
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.6 }}>
                  <strong>The bottom line:</strong> {currentArchetype.expectedRoi}
                </Typography>
              </Box>

              {/* What Happens Week by Week */}
              <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#18181B", textTransform: "uppercase", letterSpacing: "0.06em", mb: 2 }}>
                WHAT HAPPENS WEEK BY WEEK:
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 4.5 }}>
                {currentArchetype.stages.map((stg, sIdx) => (
                  <Box
                    key={sIdx}
                    sx={{
                      p: 2.4,
                      borderRadius: "16px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "flex-start", sm: "center" },
                      justifyContent: "space-between",
                      gap: 2,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "#EA580C",
                        boxShadow: "0 6px 18px -4px rgba(234, 88, 12, 0.1)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
                      <Box
                        sx={{
                          px: 1.6,
                          py: 0.6,
                          borderRadius: "8px",
                          bgcolor: "rgba(249, 115, 22, 0.1)",
                          color: "#EA580C",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          fontFamily: "monospace",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {stg.period}
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: "0.95rem", fontWeight: 600, color: "#18181B", mb: 0.3 }}>
                          {stg.title}
                        </Typography>
                        <Typography sx={{ fontSize: "0.85rem", color: "#52525B" }}>
                          You receive: <strong>{stg.output}</strong>
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, alignSelf: { xs: "flex-end", sm: "center" } }}>
                      <CheckCircleRoundedIcon sx={{ fontSize: 18, color: "#16A34A" }} />
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#166534" }}>
                        Verified Milestone
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Bottom Action Strip */}
              <Box
                sx={{
                  pt: 3,
                  borderTop: "1px solid rgba(24, 24, 27, 0.08)",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 600, color: "#18181B" }}>
                    Want to see the exact timeline for your business?
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "#71717A" }}>
                    Book a 20-minute call. We will review your workflow and give you a confirmed timeline in 48 hours.
                  </Typography>
                </Box>

                <Link href="/contact" style={{ textDecoration: "none", flexShrink: 0 }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      bgcolor: "#EA580C",
                      color: "#FFFFFF",
                      px: 3.2,
                      py: 1.2,
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      borderRadius: "9999px",
                      textTransform: "none",
                      boxShadow: "none",
                      "&:hover": {
                        bgcolor: "#C2410C",
                        boxShadow: "0 6px 20px -4px rgba(234, 88, 12, 0.4)",
                      },
                    }}
                  >
                    Book a Free Discovery Call
                  </Button>
                </Link>
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
