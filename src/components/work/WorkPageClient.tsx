"use client";
import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { workProjects, WorkProject } from "../../data/workData";
import { motion, AnimatePresence } from "framer-motion";

// Known portfolio detail pages
const dedicatedPortfolioSlugs = new Set([
  "nexus-ecommerce",
  "logix-driver-app",
  "ai-customer-support",
  "dtc-brand-scaling",
  "enterprise-seo-migration",
  "rebranding-fintech-identity",
]);

// Hand-curated 3-stat HUD metrics for maximum commercial scannability
const projectHudStats: Record<
  string,
  Array<{ val: string; lbl: string; highlight?: boolean }>
> = {
  "nexus-ecommerce": [
    { val: "Sub-sec", lbl: "Edge Page Delivery", highlight: true },
    { val: "15 hrs/wk", lbl: "Manual Sync Cut" },
    { val: "4,000+", lbl: "Live SKUs Automated" },
  ],
  "logix-driver-app": [
    { val: "100%", lbl: "Offline Route Sync", highlight: true },
    { val: "45 Routes", lbl: "Fleet Drivers Live" },
    { val: "0 Calls", lbl: "Phone Checks Cut" },
  ],
  "service-lead-pipeline": [
    { val: "10 Mins", lbl: "Quote Turnaround", highlight: true },
    { val: "100%", lbl: "Lead Intake Capture" },
    { val: "1-Click", lbl: "Branded PDF Quotes" },
  ],
  "ai-customer-support": [
    { val: "Human-in-Loop", lbl: "Verified Routing", highlight: true },
    { val: "100%", lbl: "Structured JSON Data" },
    { val: "< 30s", lbl: "Inbound Triage Time" },
  ],
  "internal-ops-portal": [
    { val: "Same-Day", lbl: "Work Order Billing", highlight: true },
    { val: "30 Techs", lbl: "Mobile Dispatch" },
    { val: "80+ Sites", lbl: "Photo Proof Logs" },
  ],
  "dtc-brand-scaling": [
    { val: "3.4x LTV", lbl: "Repeat Purchase Lift", highlight: true },
    { val: "80%", lbl: "Smart Replenishment" },
    { val: "0 Batch", lbl: "Tailored Education" },
  ],
  "enterprise-seo-migration": [
    { val: "400,000+", lbl: "Indexed URLs Migrated", highlight: true },
    { val: "< 5ms", lbl: "Edge Redirections" },
    { val: "65% Cut", lbl: "Server Response TTFB" },
  ],
  "rebranding-fintech-identity": [
    { val: "60+ Tokens", lbl: "Atomic UI Library", highlight: true },
    { val: "100%", lbl: "WCAG AA Compliance" },
    { val: "0 Drift", lbl: "Engineer Handoff" },
  ],
};

interface FilterTab {
  id: string;
  label: string;
  count: number;
}

export default function WorkPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSlugs, setExpandedSlugs] = useState<Record<string, boolean>>({});

  const toggleExpand = (slug: string) => {
    setExpandedSlugs((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const filterTabs: FilterTab[] = useMemo(() => {
    return [
      { id: "all", label: "All Systems", count: workProjects.length },
      {
        id: "business-websites",
        label: "Digital Storefronts",
        count: workProjects.filter((p) => p.solutionAreaSlug === "business-websites").length,
      },
      {
        id: "internal-business-tools",
        label: "Internal Tools",
        count: workProjects.filter((p) => p.solutionAreaSlug === "internal-business-tools").length,
      },
      {
        id: "customer-lead-systems",
        label: "Customer & Leads",
        count: workProjects.filter((p) => p.solutionAreaSlug === "customer-lead-systems").length,
      },
      {
        id: "ai-automation",
        label: "AI & Automation",
        count: workProjects.filter((p) => p.solutionAreaSlug === "ai-automation").length,
      },
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    return workProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.solutionAreaSlug === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.clientType.toLowerCase().includes(q) ||
        project.technology.some((tech) => tech.toLowerCase().includes(q)) ||
        project.outcome.some((out) => out.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 14 }, bgcolor: "#FAF8F5", position: "relative" }}>
      <Container maxWidth="xl">
        {/* ========================================================================= */}
        {/* ULTRA-PREMIUM TABS RAIL & SEARCH                                          */}
        {/* ========================================================================= */}
        <Box sx={{ mb: { xs: 7, md: 9 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            {/* Sliding Spring Filter Rail */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 0.8,
                p: 0.8,
                borderRadius: "9999px",
                bgcolor: "#FFFFFF",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                boxShadow: "0 2px 10px rgba(24, 24, 27, 0.03)",
                width: { xs: "100%", md: "fit-content" },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {filterTabs.map((tab) => {
                const isSelected = selectedCategory === tab.id;
                return (
                  <Box
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    sx={{
                      position: "relative",
                      px: { xs: 2, sm: 2.5 },
                      py: 1.1,
                      borderRadius: "9999px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                      color: isSelected ? "#FFFFFF" : "#52525B",
                      transition: "color 0.2s ease",
                      zIndex: 1,
                      userSelect: "none",
                    }}
                  >
                    {isSelected && (
                      <Box
                        component={motion.div}
                        layoutId="activeWorkFilterPill"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        sx={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "9999px",
                          bgcolor: "#18181B",
                          boxShadow: "0 6px 18px -3px rgba(24, 24, 27, 0.25)",
                          zIndex: -1,
                        }}
                      />
                    )}
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {tab.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: isSelected ? "#FB923C" : "#A1A1AA",
                      }}
                    >
                      ({tab.count})
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            {/* Clean Minimalist Search Input */}
            <Box sx={{ width: { xs: "100%", sm: 320, md: 340 } }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search by keyword, tech, or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchRoundedIcon sx={{ color: "#EA580C", fontSize: 20 }} />
                      </InputAdornment>
                    ),
                    endAdornment: searchQuery ? (
                      <InputAdornment position="end">
                        <Box
                          onClick={() => setSearchQuery("")}
                          sx={{ cursor: "pointer", display: "flex", color: "#A1A1AA", "&:hover": { color: "#18181B" } }}
                        >
                          <CloseRoundedIcon sx={{ fontSize: 16 }} />
                        </Box>
                      </InputAdornment>
                    ) : null,
                    sx: {
                      bgcolor: "#FFFFFF",
                      borderRadius: "9999px",
                      fontSize: "0.85rem",
                      px: 1.5,
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      boxShadow: "0 2px 8px rgba(24, 24, 27, 0.02)",
                      "& fieldset": { border: "none" },
                      "&:hover": {
                        boxShadow: "0 4px 12px rgba(24, 24, 27, 0.06)",
                      },
                      "&.Mui-focused": {
                        boxShadow: "0 0 0 2px rgba(234, 88, 12, 0.35)",
                      },
                    },
                  },
                }}
              />
            </Box>
          </Box>

          {/* Active Count & Clear Query */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2.5,
              px: 1,
            }}
          >
            <Typography sx={{ fontSize: "0.82rem", color: "#71717A", fontWeight: 500 }}>
              Displaying <strong>{filteredProjects.length}</strong> of <strong>{workProjects.length}</strong> production architectures
            </Typography>
            {searchQuery && (
              <Typography
                onClick={() => setSearchQuery("")}
                sx={{
                  color: "#EA580C",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Clear Search Filter
              </Typography>
            )}
          </Box>
        </Box>

        {/* ========================================================================= */}
        {/* EMPTY STATE                                                               */}
        {/* ========================================================================= */}
        {filteredProjects.length === 0 && (
          <Box
            sx={{
              p: 8,
              textAlign: "center",
              borderRadius: "28px",
              bgcolor: "#FFFFFF",
              border: "1px dashed rgba(228, 228, 231, 0.9)",
              my: 4,
            }}
          >
            <SpeedRoundedIcon sx={{ fontSize: 44, color: "#EA580C", mb: 1.5 }} />
            <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#18181B", mb: 0.5 }}>
              No production architectures match your filter
            </Typography>
            <Typography sx={{ fontSize: "0.92rem", color: "#71717A", mb: 3 }}>
              No case studies match your query &ldquo;{searchQuery}&rdquo;. Try another term or reset filters.
            </Typography>
            <Button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              variant="contained"
              sx={{
                bgcolor: "#18181B",
                color: "#FFFFFF",
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                "&:hover": { bgcolor: "#27272A" },
              }}
            >
              Reset Filters
            </Button>
          </Box>
        )}

        {/* ========================================================================= */}
        {/* LUXURIOUS 2-COLUMN CASE STUDY CARDS                                       */}
        {/* ========================================================================= */}
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {filteredProjects.map((project: WorkProject, idx: number) => {
            const isExpanded = !!expandedSlugs[project.slug];
            const hasDedicatedPage = dedicatedPortfolioSlugs.has(project.slug);
            const hudStats = projectHudStats[project.slug] || [
              { val: project.primaryMetric, lbl: project.primaryMetricLabel, highlight: true },
              { val: project.timeline, lbl: "Sprint Duration" },
              { val: "100%", lbl: "Code Handover" },
            ];

            return (
              <Grid size={{ xs: 12, lg: 6 }} key={project.slug}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      borderRadius: "32px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      boxShadow: "0 10px 30px -8px rgba(24, 24, 27, 0.04)",
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      position: "relative",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(234, 88, 12, 0.4)",
                        boxShadow: "0 28px 64px -16px rgba(234, 88, 12, 0.14)",
                        "& .case-study-visual": {
                          transform: "scale(1.03)",
                        },
                      },
                    }}
                  >
                    <Box>
                      {/* 1. Sleek Browser Viewport Mockup Header */}
                      <Box
                        sx={{
                          position: "relative",
                          bgcolor: "#18181B",
                          borderBottom: "1px solid #27272A",
                          overflow: "hidden",
                        }}
                      >
                        {/* Browser Top Navigation Bar */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            px: 2.8,
                            py: 1.4,
                            bgcolor: "#111113",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
                          }}
                        >
                          {/* 3 macOS Window Dots */}
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                            <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#EF4444" }} />
                            <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#F59E0B" }} />
                            <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#10B981" }} />
                          </Box>

                          {/* Domain Pill */}
                          <Box
                            sx={{
                              px: 1.6,
                              py: 0.25,
                              borderRadius: "6px",
                              bgcolor: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                              display: "flex",
                              alignItems: "center",
                              gap: 0.8,
                            }}
                          >
                            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#22C55E" }} />
                            <Typography
                              sx={{
                                fontFamily: "monospace",
                                fontSize: "0.72rem",
                                color: "#A1A1AA",
                                letterSpacing: "0.02em",
                              }}
                            >
                              aetibar.com/work/{project.slug}
                            </Typography>
                          </Box>

                          {/* Status Pill */}
                          <Box
                            sx={{
                              px: 1.2,
                              py: 0.25,
                              borderRadius: "4px",
                              bgcolor:
                                project.projectType === "Client Project"
                                  ? "rgba(34, 197, 94, 0.15)"
                                  : "rgba(249, 115, 22, 0.15)",
                              color: project.projectType === "Client Project" ? "#22C55E" : "#FB923C",
                              fontSize: "0.7rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                            }}
                          >
                            {project.projectType === "Client Project" ? "LIVE SYSTEM" : "CONCEPT DEMO"}
                          </Box>
                        </Box>

                        {/* High-Resolution Screenshot Viewport */}
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: { xs: 230, sm: 300, md: 320 },
                            bgcolor: "#09090B",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="case-study-visual"
                            style={{
                              objectFit: "cover",
                              transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                          />

                          {/* Floating Primary Metric Badge */}
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 16,
                              right: 16,
                              px: 2,
                              py: 0.8,
                              borderRadius: "12px",
                              bgcolor: "rgba(24, 24, 27, 0.9)",
                              backdropFilter: "blur(12px)",
                              border: "1px solid rgba(249, 115, 22, 0.45)",
                              boxShadow: "0 10px 24px rgba(0, 0, 0, 0.5)",
                              display: "flex",
                              alignItems: "center",
                              gap: 1.2,
                            }}
                          >
                            <SpeedRoundedIcon sx={{ fontSize: 18, color: "#F97316" }} />
                            <Box>
                              <Typography sx={{ fontSize: "0.88rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1 }}>
                                {project.primaryMetric}
                              </Typography>
                              <Typography sx={{ fontSize: "0.68rem", color: "#D4D4D8", fontWeight: 600 }}>
                                {project.primaryMetricLabel}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>

                      {/* 2. Editorial Case Details Container */}
                      <Box sx={{ p: { xs: 3.5, sm: 4.5 } }}>
                        {/* Monospace Case Pill & Timeline Strip */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 2,
                            flexWrap: "wrap",
                            gap: 1,
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Box
                              sx={{
                                px: 1.4,
                                py: 0.35,
                                borderRadius: "6px",
                                bgcolor: "rgba(249, 115, 22, 0.08)",
                                border: "1px solid rgba(249, 115, 22, 0.2)",
                                fontSize: "0.72rem",
                                fontWeight: 800,
                                color: "#EA580C",
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                                fontFamily: "monospace",
                              }}
                            >
                              CASE {String(idx + 1).padStart(2, "0")} // {project.solutionArea.toUpperCase()}
                            </Box>

                            <Typography sx={{ fontSize: "0.78rem", color: "#71717A", fontWeight: 600 }}>
                              {project.clientType}
                            </Typography>
                          </Box>

                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                            <AccessTimeRoundedIcon sx={{ fontSize: 15, color: "#71717A" }} />
                            <Typography sx={{ fontSize: "0.78rem", color: "#71717A", fontWeight: 600 }}>
                              {project.timeline}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Project Title */}
                        <Typography
                          variant="h2"
                          sx={{
                            fontSize: { xs: "1.45rem", sm: "1.75rem", md: "1.85rem" },
                            fontWeight: 700,
                            color: "#18181B",
                            letterSpacing: "-0.025em",
                            lineHeight: 1.25,
                            mb: 1.8,
                          }}
                        >
                          {project.title}
                        </Typography>

                        {/* Executive Narrative Paragraph */}
                        <Typography
                          sx={{
                            fontSize: "0.95rem",
                            color: "#52525B",
                            lineHeight: 1.75,
                            mb: 3.5,
                          }}
                        >
                          {project.summary}
                        </Typography>

                        {/* 3-Stat Metric HUD Strip (Replacing Clunky Alert Boxes!) */}
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 1.5,
                            p: 2.2,
                            borderRadius: "18px",
                            bgcolor: "#FAF8F5",
                            border: "1px solid rgba(228, 228, 231, 0.9)",
                            mb: 3.5,
                          }}
                        >
                          {hudStats.map((stat, sIdx) => (
                            <Box key={sIdx} sx={{ textAlign: "center" }}>
                              <Typography
                                sx={{
                                  fontSize: { xs: "1.2rem", sm: "1.35rem" },
                                  fontWeight: 800,
                                  color: stat.highlight ? "#EA580C" : "#18181B",
                                  lineHeight: 1.1,
                                  mb: 0.4,
                                  letterSpacing: "-0.02em",
                                }}
                              >
                                {stat.val}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "0.72rem",
                                  color: "#71717A",
                                  fontWeight: 600,
                                  lineHeight: 1.25,
                                }}
                              >
                                {stat.lbl}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        {/* Core Deliverables / Impact Points */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, mb: 3.5 }}>
                          {project.outcome.slice(0, 2).map((outcome, oIdx) => (
                            <Box key={oIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                              <CheckCircleRoundedIcon sx={{ color: "#16A34A", fontSize: 18, mt: 0.2, flexShrink: 0 }} />
                              <Typography sx={{ fontSize: "0.88rem", color: "#27272A", fontWeight: 500, lineHeight: 1.5 }}>
                                {outcome}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        {/* Tech Stack Pills */}
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                          {project.technology.map((tech) => (
                            <Chip
                              key={tech}
                              label={tech}
                              size="small"
                              sx={{
                                bgcolor: "#FAF8F5",
                                border: "1px solid rgba(228, 228, 231, 0.9)",
                                color: "#52525B",
                                fontSize: "0.74rem",
                                fontWeight: 600,
                                height: 26,
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>

                    {/* 3. Action Footer Bar */}
                    <Box
                      sx={{
                        p: { xs: 2.8, sm: 3.5 },
                        bgcolor: "#FAF8F5",
                        borderTop: "1px solid rgba(228, 228, 231, 0.9)",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
                        {/* Inspect Technical Blueprint Button */}
                        <Button
                          onClick={() => toggleExpand(project.slug)}
                          endIcon={
                            <KeyboardArrowDownRoundedIcon
                              sx={{
                                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.25s ease",
                              }}
                            />
                          }
                          sx={{
                            flex: 1,
                            py: 1.1,
                            px: 2.2,
                            borderRadius: "12px",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            textTransform: "none",
                            bgcolor: isExpanded ? "#18181B" : "#FFFFFF",
                            color: isExpanded ? "#FFFFFF" : "#18181B",
                            border: "1px solid",
                            borderColor: isExpanded ? "#18181B" : "rgba(228, 228, 231, 0.9)",
                            boxShadow: "0 2px 6px rgba(24, 24, 27, 0.03)",
                            "&:hover": {
                              bgcolor: isExpanded ? "#27272A" : "rgba(234, 88, 12, 0.06)",
                              borderColor: isExpanded ? "#27272A" : "#EA580C",
                              color: isExpanded ? "#FFFFFF" : "#EA580C",
                            },
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                            <TerminalRoundedIcon sx={{ fontSize: 16 }} />
                            <span>{isExpanded ? "Hide Architecture" : "Inspect Architecture"}</span>
                          </Box>
                        </Button>

                        {/* Dedicated Case Study Page Link */}
                        {hasDedicatedPage ? (
                          <Link href={`/portfolio/${project.slug}`} style={{ textDecoration: "none" }}>
                            <Button
                              variant="contained"
                              endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                              sx={{
                                py: 1.1,
                                px: 2.5,
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                                color: "#FFFFFF",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                textTransform: "none",
                                boxShadow: "0 4px 14px rgba(234, 88, 12, 0.3)",
                                "&:hover": {
                                  background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                                  boxShadow: "0 6px 20px rgba(234, 88, 12, 0.45)",
                                },
                              }}
                            >
                              Deep-Dive
                            </Button>
                          </Link>
                        ) : (
                          <Link href="/contact" style={{ textDecoration: "none" }}>
                            <Button
                              variant="contained"
                              endIcon={<LaunchRoundedIcon sx={{ fontSize: 16 }} />}
                              sx={{
                                py: 1.1,
                                px: 2.5,
                                borderRadius: "12px",
                                bgcolor: "#18181B",
                                color: "#FFFFFF",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                textTransform: "none",
                                "&:hover": {
                                  bgcolor: "#27272A",
                                },
                              }}
                            >
                              Inquire
                            </Button>
                          </Link>
                        )}
                      </Box>

                      {/* Collapsible Architecture Specification Drawer */}
                      <AnimatePresence>
                        {isExpanded && (
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            sx={{ overflow: "hidden", mt: 2.5 }}
                          >
                            <Box
                              sx={{
                                p: 3,
                                borderRadius: "20px",
                                bgcolor: "#18181B",
                                color: "#F4F4F5",
                                border: "1px solid #27272A",
                              }}
                            >
                              {/* Organizational Context */}
                              <Box sx={{ mb: 2.5 }}>
                                <Typography
                                  sx={{
                                    fontSize: "0.72rem",
                                    fontWeight: 800,
                                    color: "#FB923C",
                                    letterSpacing: "0.08em",
                                    fontFamily: "monospace",
                                    mb: 0.6,
                                  }}
                                >
                                  ORGANIZATIONAL CONTEXT:
                                </Typography>
                                <Typography sx={{ fontSize: "0.85rem", color: "#D4D4D8", lineHeight: 1.7 }}>
                                  {project.context}
                                </Typography>
                              </Box>

                              {/* Challenge Breakdown */}
                              <Box sx={{ mb: 2.5 }}>
                                <Typography
                                  sx={{
                                    fontSize: "0.72rem",
                                    fontWeight: 800,
                                    color: "#EF4444",
                                    letterSpacing: "0.08em",
                                    fontFamily: "monospace",
                                    mb: 0.8,
                                  }}
                                >
                                  THE OPERATIONAL CHALLENGE:
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
                                  {project.challenge.map((ch, cIdx) => (
                                    <Box key={cIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                                      <Typography sx={{ color: "#EF4444", fontSize: "0.85rem", fontWeight: 700 }}>
                                        &bull;
                                      </Typography>
                                      <Typography sx={{ fontSize: "0.82rem", color: "#A1A1AA", lineHeight: 1.6 }}>
                                        {ch}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Box>
                              </Box>

                              {/* Architectural Approach */}
                              <Box sx={{ mb: 2.5 }}>
                                <Typography
                                  sx={{
                                    fontSize: "0.72rem",
                                    fontWeight: 800,
                                    color: "#38BDF8",
                                    letterSpacing: "0.08em",
                                    fontFamily: "monospace",
                                    mb: 0.8,
                                  }}
                                >
                                  ENGINEERING BLUEPRINT & APPROACH:
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
                                  {project.approach.map((ap, aIdx) => (
                                    <Box key={aIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                                      <Typography sx={{ color: "#38BDF8", fontSize: "0.85rem", fontWeight: 700 }}>
                                        &bull;
                                      </Typography>
                                      <Typography sx={{ fontSize: "0.82rem", color: "#A1A1AA", lineHeight: 1.6 }}>
                                        {ap}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Box>
                              </Box>

                              {/* Deployed Solution Deliverables */}
                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: "0.72rem",
                                    fontWeight: 800,
                                    color: "#4ADE80",
                                    letterSpacing: "0.08em",
                                    fontFamily: "monospace",
                                    mb: 0.8,
                                  }}
                                >
                                  DEPLOYED CODE & ARTIFACTS:
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
                                  {project.solution.map((sol, sIdx) => (
                                    <Box key={sIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                                      <CheckCircleRoundedIcon sx={{ color: "#4ADE80", fontSize: 15, mt: 0.2 }} />
                                      <Typography sx={{ fontSize: "0.82rem", color: "#D4D4D8", lineHeight: 1.6 }}>
                                        {sol}
                                      </Typography>
                                    </Box>
                                  ))}
                                </Box>
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

        {/* ========================================================================= */}
        {/* CENTERPIECE DISCOVERY & ARCHITECTURE CALLOUT BANNER                       */}
        {/* ========================================================================= */}
        <Box sx={{ mt: { xs: 10, md: 16 } }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
              {/* Radial Ambient Glow */}
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
                      CUSTOM SOFTWARE // ZERO SPECULATIVE RISK
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
                    Ready to engineer software tailored to your{" "}
                    <Box
                      component="span"
                      sx={{
                        background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      exact business workflows?
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
                    We shadow your team&apos;s daily operations, eliminate manual copy-pasting, architect resilient PostgreSQL
                    databases, and deliver working staging builds every 14 days. Zero dark periods, zero hostage source code.
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
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
