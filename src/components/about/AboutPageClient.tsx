"use client";
import React from "react";
import { Box, Container, Typography, Grid, Button, Chip } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import { motion } from "framer-motion";

const studioPrinciples = [
  {
    num: "01",
    tag: "DIAGNOSTIC FIRST",
    title: "Understand before writing code",
    headline: "We diagnose the human handoffs before recommending React or Python.",
    narrative:
      "Most software failures happen because developers rush to build before understanding daily operational nuances. We shadow how customer leads arrive, how inventory moves, and where spreadsheet errors leak money. The technology must serve your business workflow, never the reverse.",
    icon: TerminalRoundedIcon,
    metric: "0 Lines of Blind Code",
  },
  {
    num: "02",
    tag: "SIMPLICITY",
    title: "Reduce complexity over adding SaaS",
    headline: "Connecting two existing tools beats selling you another $150/user tax.",
    narrative:
      "The default reaction of traditional agencies is to sell you another monolithic software subscription. We frequently find that connecting your existing WhatsApp stream, QuickBooks, and spreadsheets via automated webhooks creates 10x more leverage than building an expensive, bloated system.",
    icon: BoltRoundedIcon,
    metric: "10x Operational Leverage",
  },
  {
    num: "03",
    tag: "TALENT INTEGRITY",
    title: "Zero junior bait-and-switch",
    headline: "You speak directly to the senior engineers building your database.",
    narrative:
      "You will never be pitched by charismatic agency directors only to have your project handed off to fresh junior interns or outsourced offshore teams. You communicate directly with the senior full-stack architects and systems engineers designing your database and writing your code.",
    icon: EngineeringOutlinedIcon,
    metric: "Senior Architects Only",
  },
  {
    num: "04",
    tag: "SOVEREIGNTY",
    title: "100% Code & Asset Sovereignty",
    headline: "No proprietary lock-in. You own every line of code from Day 1.",
    narrative:
      "We transfer complete GitHub repositories, raw PostgreSQL database schemas, and cloud deployment keys directly to your organization. Zero proprietary agency hosting traps, zero hostage code, and zero ongoing monthly per-seat licensing taxes.",
    icon: LockOutlinedIcon,
    metric: "100% Clean Code Handover",
  },
  {
    num: "05",
    tag: "TRANSPARENCY",
    title: "Clickable builds every 14 days",
    headline: "You never wait months wondering what is being built behind closed doors.",
    narrative:
      "From Sprint 1, we deploy private Vercel staging preview links. Your team tests working software populated with your real operational data every two weeks, accompanied by a 3-minute async video demo. If you cannot click it and test it, it is not marked done.",
    icon: SpeedRoundedIcon,
    metric: "14-Day Staging Cadence",
  },
  {
    num: "06",
    tag: "SAFETY",
    title: "Dual-run migration safety net",
    headline: "We never cut over blindly or risk Monday morning operational chaos.",
    narrative:
      "Switching operational software should never cause panic. We run your existing tools and the new platform simultaneously for at least 7 days until 100% of historical transactions match with zero variance. If anything falters, our 1-click rollback restores operations instantly.",
    icon: ShieldRoundedIcon,
    metric: "0 Data Loss Record",
  },
];

const techStackHighlights = [
  {
    category: "FRONTEND & EDGE",
    tech: "Next.js 16 (App Router) • React 19 • TypeScript • Tailwind CSS • MUI",
    desc: "Sub-second edge rendering, Core Web Vitals 95+, and high-utility mobile layouts.",
  },
  {
    category: "DATABASE & TOPO",
    tech: "PostgreSQL • Supabase • Prisma ORM • Redis Cache • SQLite Offline",
    desc: "ACID transactional guarantees, zero per-seat licensing taxes, and rock-solid relational integrity.",
  },
  {
    category: "APIs & AUTOMATION",
    tech: "Node.js • Python / FastAPI • WhatsApp Cloud API • Fail-Safe Webhooks",
    desc: "Direct integration between customer chat, accounting entries, and internal quoting tools.",
  },
];

export default function AboutPageClient() {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", overflow: "hidden" }}>
      {/* ========================================================================= */}
      {/* 1. EDITORIAL HERO SECTION                                                 */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, sm: 18, md: 22 },
          pb: { xs: 10, md: 14 },
          bgcolor: "#FAF8F5",
          borderBottom: "1px solid rgba(228, 228, 231, 0.9)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Architectural Grid Lines */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(24, 24, 27, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 24, 27, 0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            pointerEvents: "none",
          }}
        />

        {/* Ambient Warm Gradient Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(250, 248, 245, 0) 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 960, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
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
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    bgcolor: "#F97316",
                    boxShadow: "0 0 10px #F97316",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  AETIBAR STUDIO // SOFTWARE &amp; SYSTEMS ARCHITECTURE
                </Typography>
              </Box>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.3rem", sm: "3.2rem", md: "4rem", lg: "4.5rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  letterSpacing: "-0.035em",
                  lineHeight: { xs: 1.15, sm: 1.1, md: 1.06 },
                  mb: 3,
                }}
              >
                Technology is easy to buy. <br />
                Making it work together{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  is engineering.
                </Box>
              </Typography>

              {/* Narrative */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.22rem" },
                  color: "#52525B",
                  lineHeight: 1.8,
                  maxWidth: 820,
                  mx: "auto",
                  mb: 5,
                }}
              >
                Most growing businesses don&apos;t suffer from a lack of software—they suffer from fragmentation. We are a
                specialized systems engineering studio based in Udaipur, India, helping founders and operational leaders
                replace spreadsheet chaos and disconnected SaaS tools with reliable, custom digital assets.
              </Typography>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, flexWrap: "wrap", mb: 6 }}>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      py: 1.5,
                      px: 3.5,
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      textTransform: "none",
                      boxShadow: "0 8px 24px -4px rgba(234, 88, 12, 0.4)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                        boxShadow: "0 12px 30px -4px rgba(234, 88, 12, 0.6)",
                      },
                    }}
                  >
                    Start a Conversation
                  </Button>
                </Link>

                <Link href="/work" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      py: 1.4,
                      px: 3.2,
                      borderRadius: "14px",
                      bgcolor: "#FFFFFF",
                      color: "#18181B",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      textTransform: "none",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      boxShadow: "0 2px 6px rgba(24, 24, 27, 0.03)",
                      "&:hover": {
                        bgcolor: "#FAF8F5",
                        borderColor: "#EA580C",
                        color: "#EA580C",
                      },
                    }}
                  >
                    Explore Production Systems
                  </Button>
                </Link>
              </Box>
            </motion.div>
          </Box>

          {/* Editorial Visual Showcase Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 1100,
                mx: "auto",
                height: { xs: 260, sm: 380, md: 460 },
                borderRadius: { xs: "20px", md: "32px" },
                overflow: "hidden",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                boxShadow: "0 24px 60px -15px rgba(24, 24, 27, 0.08)",
                mb: 6,
              }}
            >
              <Image
                src="/images/home/editorial-craft-operations.jpg"
                alt="Aetibar Systems Studio Environment"
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1200px) 100vw, 1100px"
              />

              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(24, 24, 27, 0.75) 0%, rgba(24, 24, 27, 0.2) 50%, transparent 100%)",
                }}
              />

              {/* Bottom Left Coordinate Chip */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 16, sm: 24 },
                  left: { xs: 16, sm: 24 },
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.8,
                  borderRadius: "10px",
                  bgcolor: "rgba(24, 24, 27, 0.85)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <LocationOnOutlinedIcon sx={{ fontSize: 16, color: "#FB923C" }} />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: { xs: "0.7rem", sm: "0.75rem" },
                    color: "#FFFFFF",
                    letterSpacing: "0.06em",
                  }}
                >
                  STUDIO // 24.5854° N, 73.7125° E • UDAIPUR, RAJASTHAN
                </Typography>
              </Box>

              {/* Top Right Floating Talent Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 14, sm: 20 },
                  right: { xs: 14, sm: 20 },
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  gap: 0.8,
                  px: 1.6,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(24, 24, 27, 0.85)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(249, 115, 22, 0.35)",
                }}
              >
                <VerifiedRoundedIcon sx={{ fontSize: 15, color: "#22C55E" }} />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "0.04em",
                  }}
                >
                  100% NAMED SENIOR ARCHITECTS
                </Typography>
              </Box>
            </Box>

            {/* 4-Stat Proof Metrics Strip */}
            <Grid container spacing={2.5} sx={{ maxWidth: 1100, mx: "auto" }}>
              {[
                {
                  icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "100%",
                  label: "Code & DB Sovereignty",
                  desc: "Complete GitHub & schema handover",
                },
                {
                  icon: <SpeedRoundedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "14 Days",
                  label: "Staging Release Slices",
                  desc: "Clickable preview builds every 2 weeks",
                },
                {
                  icon: <ShieldRoundedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "< 300ms",
                  label: "Server Latency SLA",
                  desc: "Sub-second edge performance",
                },
                {
                  icon: <VerifiedRoundedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "$0 / Mo",
                  label: "Per-Seat User Taxes",
                  desc: "Zero recurring SaaS license fees",
                },
              ].map((m, idx) => (
                <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                  <Box
                    sx={{
                      p: { xs: 2, sm: 2.5 },
                      borderRadius: "18px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      boxShadow: "0 2px 10px rgba(24, 24, 27, 0.02)",
                      textAlign: "center",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "rgba(234, 88, 12, 0.35)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px -4px rgba(234, 88, 12, 0.08)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0.8, mb: 0.5 }}>
                      {m.icon}
                      <Typography
                        sx={{
                          fontSize: { xs: "1.3rem", sm: "1.5rem" },
                          fontWeight: 800,
                          color: "#18181B",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {m.val}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "0.82rem", fontWeight: 700, color: "#27272A", mb: 0.2 }}>
                      {m.label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.72rem", color: "#71717A" }}>
                      {m.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 2. THE OPERATIONAL DIAGNOSTIC: THE FRAGMENTATION TRAP                     */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 12, md: 18 }, bgcolor: "#FFFFFF", position: "relative" }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "center" }}>
            {/* Left Narrative Column */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 2.5 }}>
                <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#EA580C" }} />
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    color: "#EA580C",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  WHY AETIBAR EXISTS
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.8rem", md: "3.2rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                  mb: 3,
                }}
              >
                More software subscriptions rarely create a{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  more productive company.
                </Box>
              </Typography>

              <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "1.05rem", mb: 3 }}>
                Every tool your business subscribes to comes with an invisible operational tax: another password to manage,
                another notification badge to check, another $150/user/month bill, and another siloed database that fails
                to speak to your accounting software or customer inbox.
              </Typography>

              <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "1.05rem", mb: 4 }}>
                We founded Aetibar to reverse this entropy. We don&apos;t start by selling you software. We shadow your team&apos;s
                daily operations, identify where manual copy-pasting or spreadsheet errors leak revenue, and engineer clean,
                interconnected digital systems that simplify your workflow.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  "We diagnose the operational bottleneck before writing a single line of code.",
                  "We connect existing WhatsApp, QuickBooks, or spreadsheets with automated webhooks.",
                  "We deploy custom internal portals that eliminate 15+ hours of manual weekly work.",
                ].map((pt, pIdx) => (
                  <Box key={pIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                    <CheckCircleRoundedIcon sx={{ color: "#EA580C", fontSize: 20, mt: 0.2, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: "0.95rem", color: "#27272A", fontWeight: 600, lineHeight: 1.6 }}>
                      {pt}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Right Contrast Card: Traditional Agency vs Aetibar Studio */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 5 },
                  borderRadius: "28px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 14px 40px -10px rgba(24, 24, 27, 0.05)",
                }}
              >
                {/* Agency Trap Block */}
                <Box sx={{ pb: 3.5, borderBottom: "1px solid rgba(228, 228, 231, 0.8)", mb: 3.5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <CloseRoundedIcon sx={{ color: "#DC2626", fontSize: 20 }} />
                    <Typography
                      sx={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        color: "#DC2626",
                        letterSpacing: "0.06em",
                        fontFamily: "monospace",
                        textTransform: "uppercase",
                      }}
                    >
                      THE TRADITIONAL SOFTWARE HOUSE MODEL
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                    {[
                      "Disappears for 4 to 6 months into a black box, showing only static slides.",
                      "Pitched by senior directors, then delegated to junior interns who play telephone.",
                      "Holds repository keys hostage or charges recurring per-user software taxes.",
                      "Overnight 'big-bang' cutovers that cause customer panic on Monday morning.",
                    ].map((trap, tIdx) => (
                      <Box key={tIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                        <Typography sx={{ color: "#DC2626", fontWeight: 700, fontSize: "0.85rem" }}>&bull;</Typography>
                        <Typography sx={{ fontSize: "0.88rem", color: "#71717A", lineHeight: 1.55 }}>
                          {trap}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* The Aetibar Studio Model */}
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <CheckCircleRoundedIcon sx={{ color: "#16A34A", fontSize: 20 }} />
                    <Typography
                      sx={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        color: "#16A34A",
                        letterSpacing: "0.06em",
                        fontFamily: "monospace",
                        textTransform: "uppercase",
                      }}
                    >
                      THE AETIBAR SYSTEMS STUDIO MODEL
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                    {[
                      "Clickable Vercel staging builds delivered every 14 days with 3-min video demos.",
                      "Direct Slack & WhatsApp channel to the lead systems architects building your code.",
                      "100% source code, PostgreSQL schemas, and cloud keys transferred to you on Day 1.",
                      "7-day parallel dual-run migration ensuring 100% data match and zero downtime.",
                    ].map((pact, pIdx) => (
                      <Box key={pIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                        <Typography sx={{ color: "#16A34A", fontWeight: 700, fontSize: "0.85rem" }}>&bull;</Typography>
                        <Typography sx={{ fontSize: "0.88rem", color: "#18181B", fontWeight: 600, lineHeight: 1.55 }}>
                          {pact}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 3. SIX CORE ENGINEERING PRINCIPLES (BENTO GRID)                           */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 18 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.9)",
          borderBottom: "1px solid rgba(228, 228, 231, 0.9)",
        }}
      >
        <Container maxWidth="xl">
          {/* Header */}
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 7, md: 9 } }}>
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
              <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }} />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                  fontWeight: 700,
                  fontFamily: "monospace",
                }}
              >
                OUR OPERATIONAL CREED
              </Typography>
            </Box>

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
              Six engineering principles we{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                never compromise on.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: 760,
                mx: "auto",
              }}
            >
              These are not aspirational marketing values. They are the strict engineering standards that govern how we
              evaluate client problems, structure our sprints, and ship software.
            </Typography>
          </Box>

          {/* 6 Bento Principle Cards */}
          <Grid container spacing={3.5}>
            {studioPrinciples.map((pr, idx) => {
              const IconComp = pr.icon;
              return (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={pr.num}>
                  <Box
                    sx={{
                      p: { xs: 3.5, sm: 4.5 },
                      borderRadius: "26px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      boxShadow: "0 6px 20px -6px rgba(24, 24, 27, 0.04)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "rgba(234, 88, 12, 0.45)",
                        boxShadow: "0 20px 48px -12px rgba(234, 88, 12, 0.12)",
                      },
                    }}
                  >
                    <Box>
                      {/* Top Row: Icon + Number */}
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                        <Box
                          sx={{
                            width: 44,
                            height: 44,
                            borderRadius: "12px",
                            bgcolor: "rgba(249, 115, 22, 0.08)",
                            color: "#EA580C",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <IconComp sx={{ fontSize: 22 }} />
                        </Box>

                        <Box
                          sx={{
                            px: 1.4,
                            py: 0.3,
                            borderRadius: "9999px",
                            bgcolor: "#FAF8F5",
                            border: "1px solid rgba(228, 228, 231, 0.9)",
                            fontFamily: "monospace",
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: "#EA580C",
                            letterSpacing: "0.06em",
                          }}
                        >
                          PRINCIPLE {pr.num}
                        </Box>
                      </Box>

                      {/* Title & Headline */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.3rem", sm: "1.45rem" },
                          fontWeight: 700,
                          color: "#18181B",
                          letterSpacing: "-0.02em",
                          mb: 1.2,
                        }}
                      >
                        {pr.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.92rem",
                          fontWeight: 600,
                          color: "#EA580C",
                          lineHeight: 1.45,
                          mb: 2,
                        }}
                      >
                        {pr.headline}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.88rem",
                          color: "#52525B",
                          lineHeight: 1.7,
                          mb: 3,
                        }}
                      >
                        {pr.narrative}
                      </Typography>
                    </Box>

                    {/* Bottom Metric Tag */}
                    <Box
                      sx={{
                        pt: 2,
                        borderTop: "1px solid rgba(228, 228, 231, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.8,
                      }}
                    >
                      <CheckCircleRoundedIcon sx={{ color: "#16A34A", fontSize: 16 }} />
                      <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#18181B" }}>
                        {pr.metric}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 4. STUDIO ROOTS, CULTURE & TECHNOLOGY STANDARDS                           */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 12, md: 18 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "stretch" }}>
            {/* Left: Studio Roots Photo & Physical Culture */}
            <Grid size={{ xs: 12, lg: 6 }} sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 340, sm: 440, lg: "100%" },
                  minHeight: { lg: "100%" },
                  flex: { lg: 1 },
                  borderRadius: "28px",
                  overflow: "hidden",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 20px 50px -10px rgba(24, 24, 27, 0.08)",
                }}
              >
                <Image
                  src="/images/home/editorial-client-consultation.jpg"
                  alt="Aetibar Engineering Architecture Discussion"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1200px) 100vw, 50vw"
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(24, 24, 27, 0.8) 0%, rgba(24, 24, 27, 0.1) 60%, transparent 100%)",
                  }}
                />

                {/* Studio Roots Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 24,
                    left: 24,
                    right: 24,
                    p: 2.5,
                    borderRadius: "16px",
                    bgcolor: "rgba(24, 24, 27, 0.85)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                    <LocationOnOutlinedIcon sx={{ color: "#FB923C", fontSize: 18 }} />
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#FB923C",
                        letterSpacing: "0.06em",
                      }}
                    >
                      UDAIPUR, RAJASTHAN &bull; WORLDWIDE CLIENTS
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "0.85rem", color: "#D4D4D8", lineHeight: 1.55 }}>
                    We operate from Udaipur, India, engineering platforms for ambitious organizations across the United
                    States, Europe, and Asia. Transparent async updates, direct Slack collaboration, and zero corporate bloat.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right: Technical Foundations & Engineering Stack */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 2 }}>
                <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#EA580C" }} />
                <Typography
                  sx={{
                    fontSize: "0.78rem",
                    fontWeight: 800,
                    color: "#EA580C",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  ENGINEERING FOUNDATIONS
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.18,
                  mb: 3,
                }}
              >
                Built on battle-tested, open technologies that you{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  own completely.
                </Box>
              </Typography>

              <Typography sx={{ color: "#52525B", lineHeight: 1.75, fontSize: "1rem", mb: 4 }}>
                We do not build on closed, proprietary agency frameworks where you are forced to pay ongoing maintenance
                retainers forever. Every architecture is built on mainstream, enterprise-standard open source frameworks
                that any capable full-stack developer in the world can maintain.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {techStackHighlights.map((stack, sIdx) => (
                  <Box
                    key={sIdx}
                    sx={{
                      p: 2.5,
                      borderRadius: "16px",
                      bgcolor: "#FAF8F5",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        color: "#EA580C",
                        fontFamily: "monospace",
                        letterSpacing: "0.06em",
                        mb: 0.5,
                      }}
                    >
                      {stack.category}
                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B", mb: 0.5 }}>
                      {stack.tech}
                    </Typography>
                    <Typography sx={{ fontSize: "0.85rem", color: "#52525B", lineHeight: 1.55 }}>
                      {stack.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 5. CENTERPIECE TRUST & DIRECT ARCHITECT CTA                               */}
      {/* ========================================================================= */}
      <Box sx={{ pb: { xs: 12, md: 18 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              p: { xs: 4, sm: 6, md: 8 },
              borderRadius: "32px",
              bgcolor: "#18181B",
              color: "#FFFFFF",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 24px 60px -15px rgba(24, 24, 27, 0.4)",
            }}
          >
            {/* Ambient Glow */}
            <Box
              sx={{
                position: "absolute",
                top: -80,
                right: -80,
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(234, 88, 12, 0.3) 0%, rgba(24, 24, 27, 0) 70%)",
                filter: "blur(70px)",
                pointerEvents: "none",
              }}
            />

            <Grid container spacing={4} sx={{ alignItems: "center" }}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 2 }}>
                  <VerifiedRoundedIcon sx={{ color: "#EA580C", fontSize: 20 }} />
                  <Typography
                    sx={{
                      fontSize: "0.82rem",
                      fontWeight: 800,
                      color: "#FB923C",
                      letterSpacing: "0.08em",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                    }}
                  >
                    DIRECT ARCHITECT ACCESS // NO SALES MIDDLEMEN
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3rem" },
                    fontWeight: 700,
                    lineHeight: 1.15,
                    letterSpacing: "-0.03em",
                    mb: 2,
                  }}
                >
                  Let&apos;s think through your operational{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    bottleneck together.
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.98rem", md: "1.1rem" },
                    color: "#A1A1AA",
                    lineHeight: 1.75,
                    maxWidth: 680,
                  }}
                >
                  Tell us where your current operations feel slow, repetitive, or disconnected. In a focused 30-minute
                  architecture session, we can evaluate whether custom software makes practical commercial sense for your business.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, lg: 4 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Button
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowForwardRoundedIcon />}
                      sx={{
                        py: 1.6,
                        borderRadius: "14px",
                        background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        textTransform: "none",
                        color: "#FFFFFF",
                        boxShadow: "0 8px 24px -4px rgba(234, 88, 12, 0.4)",
                        "&:hover": {
                          background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                          boxShadow: "0 12px 30px -4px rgba(234, 88, 12, 0.6)",
                        },
                      }}
                    >
                      Schedule Architecture Discovery
                    </Button>
                  </Link>

                  <Link href="/how-we-work" style={{ textDecoration: "none" }}>
                    <Button
                      fullWidth
                      sx={{
                        py: 1.4,
                        borderRadius: "14px",
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                        color: "#FFFFFF",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        textTransform: "none",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.14)",
                          borderColor: "rgba(255, 255, 255, 0.3)",
                        },
                      }}
                    >
                      Explore 5-Stage Engineering Lifecycle
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
