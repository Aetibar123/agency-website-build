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
    category: "PROJECT VISIBILITY",
    filterCategory: "visibility",
    title: "Visible Progress Throughout Development",
    headline: "Working software previews you can review as features are built.",
    promise:
      "Instead of waiting months to see what has been built, you receive working preview links throughout development. You and your team can test actual screens, try workflows with representative data, and provide direct feedback so the final product aligns with your expectations.",
    trapTitle: "The Multi-Month Black Box",
    trapText:
      "Development happens behind closed doors for months with little to no visibility until launch day, making adjustments stressful and expensive.",
    slaClause:
      "Standard Practice — Regular working previews throughout development with clear demo walkthroughs.",
    artifactType: "STAGING ENVIRONMENT PREVIEW",
    artifactDetail: "Active Staging Environment Preview Link",
    artifactStatus: "Working Preview • Ready for Review",
    icon: VisibilityOutlinedIcon,
    metrics: ["Working Staging Previews", "Video Walkthroughs", "Continuous Alignment"],
  },
  {
    num: "02",
    category: "CODE & ASSET ACCESS",
    filterCategory: "ownership",
    title: "Clear Ownership and Access",
    headline: "Source code, database access, and credentials clearly transferred.",
    promise:
      "We believe your software should belong to your business. We provide clear handover of code repositories, database access, documentation, and deployment configurations as defined in our project agreement, giving you complete long-term control over your digital assets.",
    trapTitle: "Proprietary Lock-in & Withheld Code",
    trapText:
      "Agencies or vendors holding code or database access hostage, or forcing you into closed proprietary systems where you cannot easily modify your own tools.",
    slaClause:
      "Standard Agreement — Full handover of designated source repositories, database access, and technical documentation upon milestone completion.",
    artifactType: "CODEBASE & CREDENTIALS HANDOVER",
    artifactDetail: "github.com/your-business/platform (Full Access Handover)",
    artifactStatus: "Documented Handover • Complete Access",
    icon: LockOutlinedIcon,
    metrics: ["Full Code Handover", "Database Access", "Clear Technical Documentation"],
  },
  {
    num: "03",
    category: "TEAM ACCESS",
    filterCategory: "visibility",
    title: "Direct Access to Engineers",
    headline: "Direct communication with the people designing and building your software.",
    promise:
      "You can communicate directly with the developers and designers working on your project. Questions, suggestions, and feedback don't have to pass through unnecessary layers or non-technical intermediaries, keeping communication fast and precise.",
    trapTitle: "The Layered Telephone Game",
    trapText:
      "Briefings and feedback passing through multiple intermediaries who don't understand the underlying technical nuances, leading to misunderstandings and delayed answers.",
    slaClause:
      "Direct Collaboration — Dedicated communication channel connecting your stakeholders directly with our development team.",
    artifactType: "COLLABORATIVE WORKSPACE CHANNEL",
    artifactDetail: "Direct Slack / WhatsApp Channel (Engineering Team Available)",
    artifactStatus: "Direct Collaboration • Responsive Support",
    icon: EngineeringOutlinedIcon,
    metrics: ["Direct Team Access", "Clear Communication Channels", "Fast Feedback Loops"],
  },
  {
    num: "04",
    category: "LAUNCH SAFETY",
    filterCategory: "ownership",
    title: "Controlled & Careful Launch",
    headline: "Staged rollout, data validation, and rollback planning.",
    promise:
      "Switching to a new digital system should never disrupt daily business. We plan migrations carefully, validate historical customer records, and test all critical workflows. Where appropriate, we use staged deployment and rollback preparations to minimize risk when going live.",
    trapTitle: "The Rushed, Unplanned Cutover",
    trapText:
      "Rushed overnight launches with untested data imports, leading to corrupted customer records, dropped inquiries, and Monday morning operational chaos.",
    slaClause:
      "Launch Protocol — Thorough pre-launch staging verification, data validation check, and staged deployment protocol.",
    artifactType: "DATA VALIDATION PROTOCOL",
    artifactDetail: "All Key Business Records & Workflows Verified Pre-Launch",
    artifactStatus: "Pre-Launch Audited • Rollback Planned",
    icon: ShieldOutlinedIcon,
    metrics: ["Staged Deployment", "Data Validation Checks", "Rollback Planning"],
  },
  {
    num: "05",
    category: "SCOPE & PRICING",
    filterCategory: "performance",
    title: "Clear Scope and Transparent Pricing",
    headline: "Agreed deliverables, clear milestones, and transparent change handling.",
    promise:
      "We define the project scope, milestones, and deliverables clearly before development begins. If your team identifies new requirements along the way, we evaluate their impact on timeline and cost openly, ensuring you are never surprised by unexpected invoices.",
    trapTitle: "Unclear Scope & Surprise Change Orders",
    trapText:
      "Vague initial proposals followed by surprise invoices and disputes whenever minor adjustments are required during the build.",
    slaClause:
      "Transparent Billing — Clear milestone deliverables with upfront scope agreement and collaborative priority management.",
    artifactType: "MILESTONE SCOPE AGREEMENT",
    artifactDetail: "Agreed Deliverables & Milestone Breakdown",
    artifactStatus: "Transparent Scope • No Hidden Fees",
    icon: ReceiptLongOutlinedIcon,
    metrics: ["Documented Deliverables", "Clear Milestones", "Upfront Scope Alignment"],
  },
  {
    num: "06",
    category: "PERFORMANCE FOCUS",
    filterCategory: "performance",
    title: "Performance-Focused Development",
    headline: "Fast load times, responsive layouts, and efficient database queries.",
    promise:
      "Whether building a customer-facing website, an internal operations portal, or an automation pipeline, we engineer for speed and dependability. We optimize queries, structure clean code, and test on both mobile and desktop so your users enjoy a responsive experience.",
    trapTitle: "Bloated, Sluggish Applications",
    trapText:
      "Heavy, bloated templates and inefficient queries that load slowly, crash under concurrent use, and degrade on mobile devices in the field.",
    slaClause:
      "Quality Standard — Performance-tested routes, responsive mobile layouts, and modern architecture.",
    artifactType: "PERFORMANCE & QUALITY CHECK",
    artifactDetail: "Performance Audited | Responsive Across Devices",
    artifactStatus: "Quality Audited • Production Ready",
    icon: SpeedOutlinedIcon,
    metrics: ["Fast Loading Speeds", "Mobile & Desktop Tested", "Clean Semantic Code"],
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
                OUR APPROACH & COMMITMENTS // WHAT YOU CAN EXPECT
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
              Six practical commitments you can{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                expect from Aetibar.
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
              Working with a development partner should feel predictable and transparent. We work with visible milestone previews, direct engineering communication, documented scope, and complete client ownership.
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
                <span>What You Can Expect</span>
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
                  COMMITMENTS
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
                <span>Common Project Pitfalls</span>
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
                  WHAT WE AVOID
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
                { id: "all", label: "All Commitments (6)" },
                { id: "visibility", label: "Visibility & Direct Team" },
                { id: "ownership", label: "Ownership & Safe Launch" },
                { id: "performance", label: "Scope & Performance" },
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
                      ENGINEERING ACCOUNTABILITY // OUR WORKING COMMITMENT
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
                    A transparent approach from{" "}
                    <Box
                      component="span"
                      sx={{
                        background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      start to finish.
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
                    Every project is built on clear communication, documented scope, and dependable execution. You get regular milestone reviews, direct access to the engineers working on your product, and complete ownership of your codebase and digital assets upon completion.
                  </Typography>

                  {/* 4 Qualitative Commitment Badges */}
                  <Grid container spacing={2}>
                    {[
                      { val: "Clear", lbl: "Documented Scope & Deliverables" },
                      { val: "Visible", lbl: "Regular Working Previews" },
                      { val: "Careful", lbl: "Tested Staged Deployment" },
                      { val: "Direct", lbl: "Code & Credential Handover" },
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
                      Ready to discuss your project?
                    </Typography>
                    <Typography sx={{ fontSize: "0.9rem", color: "#A1A1AA", lineHeight: 1.6, mb: 3 }}>
                      Reach out to our team to discuss your operational workflows, current bottlenecks, and how custom software or automation can help.
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
                          Start a Conversation
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
                          Explore the 5 Stages
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
