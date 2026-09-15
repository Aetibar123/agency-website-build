"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button, IconButton, Chip } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ClientPromise {
  num: string;
  category: string;
  filterCategory: "visibility" | "ownership" | "performance";
  title: string;
  headline: string;
  promise: string;
  trapTitle: string;
  trapText: string;
  slaClause: string;
  artifactType: string;
  artifactDetail: string;
  artifactStatus: string;
  icon: React.ElementType;
  metrics: string[];
}

const clientPromises: ClientPromise[] = [
  {
    num: "01",
    category: "SPRINT VISIBILITY",
    filterCategory: "visibility",
    title: "Zero Dark Periods",
    headline: "Clickable staging builds delivered every 14 days.",
    promise:
      "Most agencies go dark for 3 to 6 months before revealing buggy software. From Sprint 1, we deploy private Vercel staging preview URLs. You test working screens populated with real operational data every two weeks, accompanied by a 3-minute async video walkthrough. If you can't click it and test it, it's not done.",
    trapTitle: "The 4-Month Black Box Trap",
    trapText:
      "Traditional agencies disappear for months behind closed doors, billing monthly while showing static slide decks until a chaotic, broken launch day.",
    slaClause:
      "MSA §4.2 — Working staging previews guaranteed every 14 calendar days; failure to deploy triggers an automatic 15% sprint credit.",
    artifactType: "VERCEL STAGING PREVIEW",
    artifactDetail: "https://staging.aetibar.internal/preview-sprint-02",
    artifactStatus: "Active Build • 0 Errors",
    icon: VisibilityOutlinedIcon,
    metrics: ["14-Day Staging Cycles", "3-Min Video Demos", "No Slide-Deck Illusions"],
  },
  {
    num: "02",
    category: "IP SOVEREIGNTY",
    filterCategory: "ownership",
    title: "100% Code & Asset Sovereignty",
    headline: "You own 100% of the code, database schemas, and keys.",
    promise:
      "Unlike enterprise SaaS platforms that tax you $150/user/month, or agencies holding source code hostage, we transfer complete GitHub repositories, raw PostgreSQL database schemas, and deployment configurations directly to your team. Zero proprietary lock-in, zero monthly user taxes.",
    trapTitle: "The Hostage Code & Per-Seat Tax",
    trapText:
      "Agencies holding repository access hostage over disputed invoices or building on proprietary CMS platforms where you pay escalating monthly seat fees forever.",
    slaClause:
      "MSA §8.1 — Full intellectual property, GitHub source repositories, and raw database schemas assign to client upon milestone completion.",
    artifactType: "GITHUB REPO TRANSFER",
    artifactDetail: "github.com/your-org/platform (Admin Transferred)",
    artifactStatus: "Transferred • Full Ownership",
    icon: LockOutlinedIcon,
    metrics: ["Full GitHub Repo Transfer", "Zero Monthly Seat Taxes", "Direct Cloud Account Access"],
  },
  {
    num: "03",
    category: "TALENT INTEGRITY",
    filterCategory: "visibility",
    title: "Direct Senior Architect Line",
    headline: "Direct Slack & WhatsApp channel with lead system engineers.",
    promise:
      "Zero junior bait-and-switch. You communicate directly with the senior full-stack architects and systems engineers designing your database and writing your code. One dedicated Slack/WhatsApp channel with no non-technical account managers acting as filters, no misunderstood briefs, and zero telephone games.",
    trapTitle: "The Account Manager Telephone Game",
    trapText:
      "Pitched by senior founders, then silently delegated to junior interns or offshore subcontractors who don't understand your core business workflows.",
    slaClause:
      "MSA §3.4 — Dedicated named senior systems engineers assigned directly; zero unannounced junior delegation or offshore outsourcing.",
    artifactType: "DIRECT ARCHITECT CHANNEL",
    artifactDetail: "Slack #client-aetibar-engineering (Lead Architect Online)",
    artifactStatus: "Direct Access • < 2hr Response",
    icon: EngineeringOutlinedIcon,
    metrics: ["Senior Engineers Only", "Direct Slack / WhatsApp", "Zero Junior Telephone Games"],
  },
  {
    num: "04",
    category: "OPERATIONAL SAFETY",
    filterCategory: "ownership",
    title: "Dual-Run Zero-Downtime Migration",
    headline: "Parallel dual-run testing with 1-click rollback guard.",
    promise:
      "Switching core business systems should never cause panic on a Monday morning. We run your existing tools and the new platform concurrently until 100% of historical records match and your employees are completely confident. If anything falters, our 1-click rollback restores operations instantly.",
    trapTitle: "The Risky Overnight Cutover",
    trapText:
      "A rushed 'big-bang' Sunday night launch leads to corrupted customer records, dropped orders, and complete employee panic on Monday morning.",
    slaClause:
      "MSA §6.3 — Dual-run parallel sync required with 100% verified record reconciliation before DNS cutover; 1-click rollback armed.",
    artifactType: "DATA RECONCILIATION PIPELINE",
    artifactDetail: "14,820 / 14,820 records verified (0 drift)",
    artifactStatus: "Reconciled • Rollback Armed",
    icon: ShieldOutlinedIcon,
    metrics: ["7-Day Dual-Run Sync", "100% Historical Data Verified", "1-Click Rollback Guard"],
  },
  {
    num: "05",
    category: "BUDGET INTEGRITY",
    filterCategory: "performance",
    title: "Fixed-Sprint Scope Certainty",
    headline: "Agreed sprint scopes with flexible backlog priority swapping.",
    promise:
      "Every two-week sprint has a locked scope and flat investment. If an operational nuance is discovered during staging testing, we simply swap features of equal engineering weight in the backlog. You never get blindsided by unexpected invoices for basic operational adjustments.",
    trapTitle: "The Lowball Quote & Change-Order Trap",
    trapText:
      "An agency quotes an artificially low price to win the contract, then hits you with endless surprise 'Change Order' invoices for basic requirements.",
    slaClause:
      "MSA §5.1 — Sprint pricing is fixed; emerging requirements are accommodated via balanced backlog item swapping at zero penalty fee.",
    artifactType: "SPRINT SCOPE CONTRACT",
    artifactDetail: "Sprint 03 Backlog: 100% Scope Locked",
    artifactStatus: "Agreed • $0.00 Hidden Fees",
    icon: ReceiptLongOutlinedIcon,
    metrics: ["Fixed Sprint Investment", "Flexible Backlog Swapping", "Zero Surprise Invoices"],
  },
  {
    num: "06",
    category: "PERFORMANCE SLA",
    filterCategory: "performance",
    title: "Sub-Second Latency & Core Web Vitals SLA",
    headline: "Sub-300ms server response times & Core Web Vitals 95+.",
    promise:
      "Internal operational tools and customer portals must feel instant. We optimize every relational query, API route, and responsive layout to maintain sub-300ms server response times and Core Web Vitals 95+. Your staff never stare at spinning wheels, whether on desktop or in the field.",
    trapTitle: "The Bloated, Sluggish Web App",
    trapText:
      "Clunky, bloated templates that take 5+ seconds to load, freeze under concurrent load, and break completely on mobile phones in the field.",
    slaClause:
      "MSA §9.2 — Sub-300ms P95 API response times and Core Web Vitals 95+ audited in production environment prior to final sign-off.",
    artifactType: "LIGHTHOUSE & P95 TELEMETRY",
    artifactDetail: "Server P95: 218ms | Core Web Vitals: 98/100",
    artifactStatus: "Audited • Mobile Responsive",
    icon: SpeedOutlinedIcon,
    metrics: ["< 300ms Server Latency", "Core Web Vitals 95+", "Fail-Safe Crash Telemetry"],
  },
];

export default function TransparencyGuaranteesSection() {
  // Mode switcher: "promise" vs "trap"
  const [viewMode, setViewMode] = useState<"promise" | "trap">("promise");
  // Category filter
  const [activeCategory, setActiveCategory] = useState<"all" | "visibility" | "ownership" | "performance">("all");
  // Expanded inspector cards
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleInspector = (num: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  const filteredPromises = clientPromises.filter((item) => {
    if (activeCategory === "all") return true;
    return item.filterCategory === activeCategory;
  });

  const handleScrollToLifecycle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("lifecycle-engine");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="section"
      id="client-promise"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FAF8F5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Ambient Blobs */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 500,
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, rgba(250, 248, 245, 0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ maxWidth: 940, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
          {/* Badge */}
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
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                  fontWeight: 700,
                  fontFamily: "monospace",
                }}
              >
                OUR CLIENT PROMISE // THE IRONCLAD PLEDGE
              </Typography>
            </Box>
          </motion.div>

          {/* Main Title */}
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
                lineHeight: { xs: 1.15, md: 1.1 },
                letterSpacing: "-0.035em",
                mb: 2.5,
              }}
            >
              Six engineering commitments we{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                write into your contract.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: 780,
                mx: "auto",
                mb: 4.5,
              }}
            >
              Hiring an engineering partner shouldn&apos;t feel like a leap of faith. We eliminate the traditional agency
              black-box playbook with bi-weekly working builds, senior-only execution, and contractual skin in the game.
            </Typography>
          </motion.div>

          {/* Interactive Perspective Mode Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              sx={{
                display: "inline-flex",
                p: 0.6,
                borderRadius: "16px",
                bgcolor: "#FFFFFF",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                boxShadow: "0 4px 20px -4px rgba(24, 24, 27, 0.05)",
                gap: 1,
                mb: 3,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => setViewMode("promise")}
                sx={{
                  px: { xs: 2, sm: 3 },
                  py: 1.2,
                  borderRadius: "12px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  bgcolor: viewMode === "promise" ? "#EA580C" : "transparent",
                  color: viewMode === "promise" ? "#FFFFFF" : "#52525B",
                  boxShadow: viewMode === "promise" ? "0 4px 14px rgba(234, 88, 12, 0.35)" : "none",
                  "&:hover": {
                    bgcolor: viewMode === "promise" ? "#C2410C" : "rgba(234, 88, 12, 0.06)",
                    color: viewMode === "promise" ? "#FFFFFF" : "#EA580C",
                  },
                }}
              >
                <VerifiedRoundedIcon sx={{ fontSize: 18 }} />
                <span>The Aetibar Guarantees</span>
                <Box
                  sx={{
                    px: 1,
                    py: 0.2,
                    borderRadius: "9999px",
                    bgcolor: viewMode === "promise" ? "rgba(255, 255, 255, 0.25)" : "rgba(22, 163, 74, 0.12)",
                    color: viewMode === "promise" ? "#FFFFFF" : "#16A34A",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                  }}
                >
                  CONTRACTUAL
                </Box>
              </Button>

              <Button
                onClick={() => setViewMode("trap")}
                sx={{
                  px: { xs: 2, sm: 3 },
                  py: 1.2,
                  borderRadius: "12px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textTransform: "none",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  bgcolor: viewMode === "trap" ? "#DC2626" : "transparent",
                  color: viewMode === "trap" ? "#FFFFFF" : "#52525B",
                  boxShadow: viewMode === "trap" ? "0 4px 14px rgba(220, 38, 38, 0.3)" : "none",
                  "&:hover": {
                    bgcolor: viewMode === "trap" ? "#B91C1C" : "rgba(220, 38, 38, 0.06)",
                    color: viewMode === "trap" ? "#FFFFFF" : "#DC2626",
                  },
                }}
              >
                <WarningAmberRoundedIcon sx={{ fontSize: 18 }} />
                <span>The Agency Traps We Ban</span>
                <Box
                  sx={{
                    px: 1,
                    py: 0.2,
                    borderRadius: "9999px",
                    bgcolor: viewMode === "trap" ? "rgba(255, 255, 255, 0.25)" : "rgba(220, 38, 38, 0.12)",
                    color: viewMode === "trap" ? "#FFFFFF" : "#DC2626",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                  }}
                >
                  INDUSTRY TRAPS
                </Box>
              </Button>
            </Box>

            {/* Quick Filter Tabs */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                flexWrap: "wrap",
                mt: 1,
              }}
            >
              {[
                { id: "all", label: "All Guarantees (6)" },
                { id: "visibility", label: "Sprint Visibility & Senior Team" },
                { id: "ownership", label: "Code Ownership & Safe Cutover" },
                { id: "performance", label: "Fixed Budget & Speed SLA" },
              ].map((tab) => {
                const isSelected = activeCategory === tab.id;
                return (
                  <Chip
                    key={tab.id}
                    label={tab.label}
                    onClick={() => setActiveCategory(tab.id as any)}
                    clickable
                    sx={{
                      px: 0.5,
                      py: 2.2,
                      borderRadius: "10px",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      bgcolor: isSelected ? "#18181B" : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : "#52525B",
                      border: "1px solid",
                      borderColor: isSelected ? "#18181B" : "rgba(228, 228, 231, 0.8)",
                      boxShadow: isSelected ? "0 2px 8px rgba(24, 24, 27, 0.15)" : "none",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: isSelected ? "#27272A" : "rgba(24, 24, 27, 0.05)",
                      },
                    }}
                  />
                );
              })}
            </Box>
          </motion.div>
        </Box>

        {/* 6 Guarantee Cards Grid */}
        <Grid container spacing={3.5}>
          {filteredPromises.map((item, idx) => {
            const IconComponent = item.icon;
            const isExpanded = !!expandedCards[item.num];
            const isTrapView = viewMode === "trap";

            return (
              <Grid size={{ xs: 12, md: 6 }} key={item.num}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      p: { xs: 3.5, sm: 4.5 },
                      borderRadius: "24px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid",
                      borderColor: isTrapView ? "rgba(220, 38, 38, 0.3)" : "rgba(228, 228, 231, 0.9)",
                      boxShadow: isTrapView
                        ? "0 8px 24px -6px rgba(220, 38, 38, 0.08)"
                        : "0 6px 24px -6px rgba(24, 24, 27, 0.04)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: isTrapView ? "#DC2626" : "rgba(234, 88, 12, 0.45)",
                        boxShadow: isTrapView
                          ? "0 20px 40px -10px rgba(220, 38, 38, 0.15)"
                          : "0 20px 40px -10px rgba(234, 88, 12, 0.14)",
                      },
                    }}
                  >
                    {/* Top Accent Light Bar */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        bgcolor: isTrapView ? "#DC2626" : "#EA580C",
                        opacity: 0.85,
                      }}
                    />

                    <Box>
                      {/* Top Row: Icon + Standard Label + Tag Badge */}
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                          <Box
                            sx={{
                              width: 46,
                              height: 46,
                              borderRadius: "14px",
                              bgcolor: isTrapView ? "rgba(220, 38, 38, 0.08)" : "rgba(249, 115, 22, 0.08)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: isTrapView ? "#DC2626" : "#EA580C",
                              transition: "all 0.25s ease",
                            }}
                          >
                            <IconComponent sx={{ fontSize: 24 }} />
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: "0.78rem",
                                fontWeight: 800,
                                color: isTrapView ? "#DC2626" : "#EA580C",
                                fontFamily: "monospace",
                                letterSpacing: "0.06em",
                              }}
                            >
                              STANDARD {item.num}
                            </Typography>
                            <Typography sx={{ fontSize: "0.72rem", color: "#71717A", fontWeight: 600 }}>
                              {item.category}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.4,
                            borderRadius: "9999px",
                            bgcolor: isTrapView ? "rgba(220, 38, 38, 0.08)" : "#FAF8F5",
                            border: "1px solid",
                            borderColor: isTrapView ? "rgba(220, 38, 38, 0.2)" : "rgba(228, 228, 231, 0.9)",
                            fontSize: "0.725rem",
                            fontWeight: 700,
                            color: isTrapView ? "#DC2626" : "#52525B",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {isTrapView ? "TRAP ELIMINATED" : "GUARANTEED"}
                        </Box>
                      </Box>

                      {/* Card Title & Headline */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.35rem", sm: "1.6rem" },
                          fontWeight: 700,
                          color: "#18181B",
                          letterSpacing: "-0.02em",
                          mb: 1.2,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.98rem",
                          fontWeight: 600,
                          color: isTrapView ? "#DC2626" : "#EA580C",
                          mb: 2.2,
                          lineHeight: 1.45,
                        }}
                      >
                        {isTrapView ? item.trapTitle : item.headline}
                      </Typography>

                      {/* Side-by-Side Context Strip */}
                      <Box
                        sx={{
                          p: 1.8,
                          borderRadius: "12px",
                          bgcolor: isTrapView ? "rgba(220, 38, 38, 0.04)" : "rgba(249, 115, 22, 0.04)",
                          border: "1px solid",
                          borderColor: isTrapView ? "rgba(220, 38, 38, 0.15)" : "rgba(249, 115, 22, 0.12)",
                          mb: 2.5,
                        }}
                      >
                        {isTrapView ? (
                          <Box sx={{ display: "flex", gap: 1.2, alignItems: "flex-start" }}>
                            <CloseRoundedIcon sx={{ fontSize: 18, color: "#DC2626", mt: 0.2, flexShrink: 0 }} />
                            <Box>
                              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#DC2626", mb: 0.3 }}>
                                TYPICAL AGENCY TRAP:
                              </Typography>
                              <Typography sx={{ fontSize: "0.85rem", color: "#52525B", lineHeight: 1.55 }}>
                                {item.trapText}
                              </Typography>
                            </Box>
                          </Box>
                        ) : (
                          <Box sx={{ display: "flex", gap: 1.2, alignItems: "flex-start" }}>
                            <CheckCircleRoundedIcon sx={{ fontSize: 18, color: "#16A34A", mt: 0.2, flexShrink: 0 }} />
                            <Box>
                              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#16A34A", mb: 0.3 }}>
                                THE AETIBAR PACT:
                              </Typography>
                              <Typography sx={{ fontSize: "0.85rem", color: "#52525B", lineHeight: 1.55 }}>
                                {item.promise}
                              </Typography>
                            </Box>
                          </Box>
                        )}
                      </Box>
                    </Box>

                    {/* Bottom Section: Metric Chips & Expandable Proof Drawer */}
                    <Box sx={{ pt: 2, borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
                      {/* Metric Pills */}
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                        {item.metrics.map((m, mIdx) => (
                          <Box
                            key={mIdx}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.8,
                              px: 1.3,
                              py: 0.45,
                              borderRadius: "8px",
                              bgcolor: "#FAF8F5",
                              border: "1px solid rgba(228, 228, 231, 0.8)",
                            }}
                          >
                            <CheckCircleRoundedIcon sx={{ fontSize: 14, color: "#16A34A" }} />
                            <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#27272A" }}>
                              {m}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Interactive Drawer Toggle Button */}
                      <Button
                        onClick={() => toggleInspector(item.num)}
                        endIcon={
                          <KeyboardArrowDownRoundedIcon
                            sx={{
                              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.25s ease",
                            }}
                          />
                        }
                        sx={{
                          width: "100%",
                          py: 1,
                          justifyContent: "space-between",
                          textTransform: "none",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: isExpanded ? "#EA580C" : "#52525B",
                          bgcolor: isExpanded ? "rgba(249, 115, 22, 0.06)" : "#F4F4F5",
                          borderRadius: "10px",
                          px: 2,
                          "&:hover": {
                            bgcolor: "rgba(249, 115, 22, 0.1)",
                            color: "#EA580C",
                          },
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <TerminalRoundedIcon sx={{ fontSize: 16 }} />
                          <span>{isExpanded ? "Hide Verification & SLA" : "Inspect Verification & Contract Clause"}</span>
                        </Box>
                      </Button>

                      {/* Collapsible Inspector Drawer */}
                      <AnimatePresence>
                        {isExpanded && (
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            sx={{ overflow: "hidden", mt: 1.8 }}
                          >
                            <Box
                              sx={{
                                p: 2.2,
                                borderRadius: "14px",
                                bgcolor: "#18181B",
                                color: "#F4F4F5",
                                border: "1px solid #27272A",
                              }}
                            >
                              {/* Simulated Proof Header */}
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  borderBottom: "1px solid #27272A",
                                  pb: 1.2,
                                  mb: 1.5,
                                }}
                              >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                  <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#22C55E" }} />
                                  <Typography
                                    sx={{
                                      fontFamily: "monospace",
                                      fontSize: "0.72rem",
                                      color: "#A1A1AA",
                                      letterSpacing: "0.05em",
                                    }}
                                  >
                                    ARTIFACT // {item.artifactType}
                                  </Typography>
                                </Box>
                                <Typography
                                  sx={{
                                    fontSize: "0.7rem",
                                    fontWeight: 700,
                                    color: "#22C55E",
                                    bgcolor: "rgba(34, 197, 94, 0.12)",
                                    px: 1,
                                    py: 0.2,
                                    borderRadius: "4px",
                                  }}
                                >
                                  {item.artifactStatus}
                                </Typography>
                              </Box>

                              {/* Artifact Detail Value */}
                              <Box
                                sx={{
                                  p: 1.2,
                                  bgcolor: "#09090B",
                                  borderRadius: "8px",
                                  border: "1px solid #27272A",
                                  mb: 1.8,
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: "monospace",
                                    fontSize: "0.78rem",
                                    color: "#FB923C",
                                    wordBreak: "break-all",
                                  }}
                                >
                                  {item.artifactDetail}
                                </Typography>
                              </Box>

                              {/* Contract Clause Box */}
                              <Box>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 0.6 }}>
                                  <ArticleOutlinedIcon sx={{ fontSize: 14, color: "#EA580C" }} />
                                  <Typography
                                    sx={{
                                      fontSize: "0.72rem",
                                      fontWeight: 800,
                                      color: "#EA580C",
                                      letterSpacing: "0.04em",
                                    }}
                                  >
                                    LEGAL ENFORCEMENT (MSA PLEDGE):
                                  </Typography>
                                </Box>
                                <Typography
                                  sx={{
                                    fontSize: "0.8rem",
                                    color: "#D4D4D8",
                                    lineHeight: 1.6,
                                    fontStyle: "italic",
                                  }}
                                >
                                  &ldquo;{item.slaClause}&rdquo;
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        )}
                      </AnimatePresence>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* Centerpiece Trust & Contractual Skin-In-The-Game Banner */}
        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                p: { xs: 4, sm: 6, md: 7 },
                borderRadius: "32px",
                bgcolor: "#18181B",
                color: "#FFFFFF",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 24px 60px -15px rgba(24, 24, 27, 0.4)",
              }}
            >
              {/* Glow Accent */}
              <Box
                sx={{
                  position: "absolute",
                  top: -80,
                  right: -80,
                  width: 380,
                  height: 380,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(234, 88, 12, 0.25) 0%, rgba(24, 24, 27, 0) 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />

              <Grid container spacing={4} sx={{ alignItems: "center" }}>
                {/* Left Side: Assurance Statement */}
                <Grid size={{ xs: 12, lg: 7 }}>
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
                      THE 100% SKIN-IN-THE-GAME PLEDGE
                    </Typography>
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.85rem", sm: "2.5rem", md: "2.8rem" },
                      fontWeight: 700,
                      lineHeight: 1.15,
                      letterSpacing: "-0.03em",
                      mb: 2,
                    }}
                  >
                    We put our engineering fees{" "}
                    <Box
                      component="span"
                      sx={{
                        background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      on the line.
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "0.98rem", md: "1.1rem" },
                      color: "#A1A1AA",
                      lineHeight: 1.75,
                      maxWidth: 640,
                      mb: 3.5,
                    }}
                  >
                    Every commitment listed above is an enforceable clause in our Master Services Agreement (MSA). If we
                    miss a scheduled bi-weekly staging preview or compromise your live business cutover, you receive
                    direct sprint credits. We believe engineering accountability should be contractual, not aspirational.
                  </Typography>

                  {/* 4 Quantitative SLA Badges */}
                  <Grid container spacing={2}>
                    {[
                      { val: "100%", lbl: "Code & Schema Sovereignty" },
                      { val: "14 Days", lbl: "Max Staging Release Window" },
                      { val: "< 300ms", lbl: "Server Latency SLA" },
                      { val: "0 Risk", lbl: "Dual-Run Migration Net" },
                    ].map((badge, bIdx) => (
                      <Grid size={{ xs: 6, sm: 3 }} key={bIdx}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: "16px",
                            bgcolor: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: "1.3rem", sm: "1.5rem" },
                              fontWeight: 800,
                              color: "#FFFFFF",
                              letterSpacing: "-0.02em",
                              lineHeight: 1,
                              mb: 0.6,
                            }}
                          >
                            {badge.val}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "0.72rem",
                              color: "#A1A1AA",
                              fontWeight: 500,
                              lineHeight: 1.3,
                            }}
                          >
                            {badge.lbl}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                {/* Right Side: Direct Action Block */}
                <Grid size={{ xs: 12, lg: 5 }}>
                  <Box
                    sx={{
                      p: { xs: 3.5, sm: 4.5 },
                      borderRadius: "24px",
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, color: "#FFFFFF", mb: 1 }}>
                      Ready to build with radical transparency?
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", color: "#A1A1AA", lineHeight: 1.6, mb: 3 }}>
                      Schedule a 30-minute discovery call directly with a lead systems architect to review your operational
                      workflows and obtain a fixed-sprint roadmap.
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                      <Link href="/contact" style={{ textDecoration: "none" }}>
                        <Button
                          fullWidth
                          variant="contained"
                          endIcon={<ArrowForwardRoundedIcon />}
                          sx={{
                            py: 1.5,
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
                          Schedule Architecture Call
                        </Button>
                      </Link>

                      <a
                        href="#lifecycle-engine"
                        onClick={handleScrollToLifecycle}
                        style={{ textDecoration: "none" }}
                      >
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
                          Explore Our 5-Stage Lifecycle
                        </Button>
                      </a>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
