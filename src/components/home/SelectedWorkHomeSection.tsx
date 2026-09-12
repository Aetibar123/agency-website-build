"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import { motion, AnimatePresence } from "framer-motion";

interface WorkFilterCategory {
  id: string;
  label: string;
  count: number;
}

const filterCategories: WorkFilterCategory[] = [
  { id: "all", label: "All Systems", count: 4 },
  { id: "digital-presence", label: "Digital Presence", count: 1 },
  { id: "internal-tools", label: "Internal Tools", count: 1 },
  { id: "ai-automation", label: "AI & Automation", count: 1 },
  { id: "customer-leads", label: "Customer & Lead", count: 1 },
];

export default function SelectedWorkHomeSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <Box
      component="section"
      id="selected-work"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Architectural Grid Lines in Background */}
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

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", lg: "flex-end" },
              gap: 4,
              mb: { xs: 6, md: 8 },
            }}
          >
            <Box sx={{ maxWidth: 780 }}>
              {/* Status Pill */}
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
                    fontWeight: 600,
                  }}
                >
                  Selected Work // Proven Production Systems
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.15, md: 1.08 },
                  letterSpacing: "-0.035em",
                  mb: 2.5,
                }}
              >
                Architecture in the real world.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  color: "#52525B",
                  lineHeight: 1.75,
                  fontWeight: 400,
                }}
              >
                No theoretical mockups or decorative templates. Every system below resolved a specific operational bottleneck—verified by real metrics, sub-second latencies, and automated production pipelines.
              </Typography>
            </Box>

            {/* Archive Link Button */}
            <Link href="/work" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  color: "#18181B",
                  borderColor: "rgba(24, 24, 27, 0.2)",
                  bgcolor: "#FAF8F5",
                  px: 3.5,
                  py: 1.4,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  whiteSpace: "nowrap",
                  boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#EA580C",
                    color: "#EA580C",
                    bgcolor: "rgba(249, 115, 22, 0.04)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                View Complete Archive (8+)
              </Button>
            </Link>
          </Box>

          {/* Interactive Domain Filter Rail */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1.2,
              p: 0.8,
              borderRadius: "9999px",
              bgcolor: "#FAF8F5",
              border: "1px solid rgba(228, 228, 231, 0.8)",
              width: "fit-content",
              mb: { xs: 6, md: 7 },
            }}
          >
            {filterCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <Box
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  sx={{
                    position: "relative",
                    px: { xs: 2, sm: 2.5 },
                    py: 1,
                    borderRadius: "9999px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: isSelected ? "#FFFFFF" : "#52525B",
                    transition: "color 0.2s ease",
                    zIndex: 1,
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
                        boxShadow: "0 6px 18px -3px rgba(24, 24, 27, 0.3)",
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
                    {cat.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: isSelected ? "#FB923C" : "#A1A1AA",
                    }}
                  >
                    ({cat.count})
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </motion.div>

        {/* ========================================================================= */}
        {/* CASE 01: THE FLAGSHIP ARCHITECTURAL SHOWCASE (Nexus Headless Commerce)    */}
        {/* ========================================================================= */}
        <AnimatePresence mode="popLayout">
          {(activeCategory === "all" || activeCategory === "digital-presence") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  bgcolor: "#FAF8F5",
                  borderRadius: { xs: "24px", md: "32px" },
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 20px 60px -15px rgba(24, 24, 27, 0.06)",
                  p: "clamp(24px, 4vw, 48px)",
                  mb: { xs: 5, md: 6 },
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    borderColor: "rgba(249, 115, 22, 0.35)",
                    boxShadow: "0 30px 80px -20px rgba(234, 88, 12, 0.12)",
                  },
                }}
              >
                <Grid container spacing={{ xs: 4, lg: 6 }} sx={{ alignItems: "center" }}>
                  {/* Left Column: Dossier Details */}
                  <Grid size={{ xs: 12, lg: 5.5 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      {/* Monospace Zone Pill & Timeline */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5, flexWrap: "wrap" }}>
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.8,
                            px: 1.6,
                            py: 0.4,
                            borderRadius: "9999px",
                            bgcolor: "rgba(234, 88, 12, 0.1)",
                            border: "1px solid rgba(234, 88, 12, 0.25)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              fontWeight: 700,
                              color: "#EA580C",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                            }}
                          >
                            CASE 01 // DIGITAL PRESENCE
                          </Typography>
                        </Box>

                        <Typography
                          sx={{
                            fontSize: "0.8rem",
                            color: "#71717A",
                            fontWeight: 600,
                          }}
                        >
                          Commercial Retailer • 10 Weeks
                        </Typography>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.4rem" },
                          fontWeight: 600,
                          color: "#18181B",
                          lineHeight: 1.2,
                          letterSpacing: "-0.03em",
                          mb: 2,
                        }}
                      >
                        Headless Commerce & Multi-Channel Inventory Sync
                      </Typography>

                      {/* Narrative */}
                      <Typography
                        sx={{
                          fontSize: { xs: "0.95rem", md: "1.05rem" },
                          color: "#52525B",
                          lineHeight: 1.7,
                          mb: 3.5,
                        }}
                      >
                        A fast-growing retail business managing over 4,000 SKUs was losing customers to 4-second legacy load times and 15 hours of weekly manual inventory re-entry. We replaced their monolithic stack with an edge-rendered Next.js storefront and automated webhook inventory sync.
                      </Typography>

                      {/* Verified Metrics HUD Strip */}
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                          gap: 2,
                          p: 2.5,
                          borderRadius: "18px",
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(228, 228, 231, 0.8)",
                          mb: 3.5,
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontSize: "1.45rem", fontWeight: 700, color: "#EA580C", lineHeight: 1.1 }}>
                            Sub-sec
                          </Typography>
                          <Typography sx={{ fontSize: "0.75rem", color: "#71717A", mt: 0.4, fontWeight: 500 }}>
                            Edge Page Delivery
                          </Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ fontSize: "1.45rem", fontWeight: 700, color: "#18181B", lineHeight: 1.1 }}>
                            15 hrs/wk
                          </Typography>
                          <Typography sx={{ fontSize: "0.75rem", color: "#71717A", mt: 0.4, fontWeight: 500 }}>
                            Manual Sync Eliminated
                          </Typography>
                        </Box>
                        <Box>
                          <Typography sx={{ fontSize: "1.45rem", fontWeight: 700, color: "#18181B", lineHeight: 1.1 }}>
                            4,000+
                          </Typography>
                          <Typography sx={{ fontSize: "0.75rem", color: "#71717A", mt: 0.4, fontWeight: 500 }}>
                            Live SKU Automation
                          </Typography>
                        </Box>
                      </Box>

                      {/* Tech Stack Pills */}
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                        {["Next.js SSR", "Node.js", "GraphQL", "PostgreSQL", "Redis", "TypeScript"].map((tech) => (
                          <Box
                            key={tech}
                            sx={{
                              px: 1.4,
                              py: 0.4,
                              borderRadius: "6px",
                              bgcolor: "#FFFFFF",
                              border: "1px solid rgba(228, 228, 231, 0.9)",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              color: "#3F3F46",
                            }}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>

                      {/* Action CTA */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Link href="/portfolio/nexus-ecommerce" style={{ textDecoration: "none" }}>
                          <Button
                            variant="contained"
                            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                            sx={{
                              background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                              color: "#FFFFFF",
                              px: 3.5,
                              py: 1.35,
                              fontSize: "0.9rem",
                              fontWeight: 600,
                              borderRadius: "9999px",
                              boxShadow: "0 8px 20px rgba(234, 88, 12, 0.3)",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                                boxShadow: "0 12px 26px rgba(234, 88, 12, 0.4)",
                                transform: "translateY(-1px)",
                              },
                            }}
                          >
                            Explore Architecture Deep Dive
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Right Column: Retina Browser Viewport Mockup */}
                  <Grid size={{ xs: 12, lg: 6.5 }}>
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: "22px",
                        bgcolor: "#18181B",
                        border: "1px solid rgba(24, 24, 27, 0.15)",
                        boxShadow: "0 25px 50px -12px rgba(24, 24, 27, 0.25)",
                        overflow: "hidden",
                        transition: "transform 0.4s ease, box-shadow 0.4s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 30px 60px -10px rgba(234, 88, 12, 0.2)",
                        },
                      }}
                    >
                      {/* Browser Frame Chrome */}
                      <Box
                        sx={{
                          px: 2.5,
                          py: 1.4,
                          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                          bgcolor: "rgba(255, 255, 255, 0.04)",
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
                            gap: 0.8,
                            px: 2,
                            py: 0.4,
                            borderRadius: "6px",
                            bgcolor: "rgba(255, 255, 255, 0.06)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        >
                          <LockOutlinedIcon sx={{ fontSize: 12, color: "#22C55E" }} />
                          <Typography sx={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#A1A1AA" }}>
                            aetibar.com/work/nexus-ecommerce
                          </Typography>
                        </Box>

                        <Box sx={{ width: 40 }} />
                      </Box>

                      {/* Mockup Frame Screen */}
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: { xs: 280, sm: 380, md: 440 },
                          bgcolor: "#000000",
                        }}
                      >
                        <Image
                          src="/images/portfolio/ecommerce.png"
                          alt="Nexus Headless Commerce"
                          fill
                          sizes="(max-width: 1200px) 100vw, 55vw"
                          style={{ objectFit: "cover" }}
                          priority
                        />

                        {/* Floating Top Telemetry Badge */}
                        <Box
                          component={motion.div}
                          animate={{ y: [0, -3, 0] }}
                          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
                          sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            px: 1.8,
                            py: 0.8,
                            borderRadius: "10px",
                            bgcolor: "rgba(24, 24, 27, 0.85)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            color: "#22C55E",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            fontFamily: "monospace",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                          }}
                        >
                          <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#22C55E" }} />
                          EDGE CACHED · 48ms TTFB
                        </Box>

                        {/* Floating Bottom Telemetry Badge */}
                        <Box
                          component={motion.div}
                          animate={{ y: [0, 2, 0] }}
                          transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.5 }}
                          sx={{
                            position: "absolute",
                            bottom: 16,
                            left: 16,
                            right: 16,
                            px: 2,
                            py: 1.2,
                            borderRadius: "12px",
                            bgcolor: "rgba(24, 24, 27, 0.88)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            color: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: 1,
                          }}
                        >
                          <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: "#FB923C" }}>
                            Core Web Vitals: 99/100
                          </Typography>
                          <Typography sx={{ fontSize: "0.75rem", color: "#A1A1AA", fontFamily: "monospace" }}>
                            0% DESYNC ERRORS
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* CASES 02 & 03: ASYMMETRICAL OPERATIONS & INTELLIGENCE DUO                 */}
        {/* ========================================================================= */}
        <Grid container spacing={{ xs: 4, lg: 5 }} sx={{ mb: { xs: 5, md: 6 } }}>
          {/* CASE 02: Logix Logistics Carrier (Obsidian Dark Operations Console) */}
          <AnimatePresence mode="popLayout">
            {(activeCategory === "all" || activeCategory === "internal-tools") && (
              <Grid size={{ xs: 12, lg: 6.5 }}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      bgcolor: "#111218",
                      borderRadius: { xs: "24px", md: "30px" },
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.4)",
                      p: "clamp(24px, 3.5vw, 40px)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.35s ease",
                      "&:hover": {
                        borderColor: "rgba(234, 88, 12, 0.4)",
                        boxShadow: "0 30px 70px -15px rgba(234, 88, 12, 0.15)",
                      },
                    }}
                  >
                    {/* Background Radial Glow */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: 280,
                        height: 280,
                        background: "radial-gradient(circle, rgba(234, 88, 12, 0.12) 0%, transparent 70%)",
                        pointerEvents: "none",
                      }}
                    />

                    <Box sx={{ position: "relative", zIndex: 1 }}>
                      {/* Badge Row */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2, flexWrap: "wrap" }}>
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.35,
                            borderRadius: "9999px",
                            bgcolor: "rgba(234, 88, 12, 0.15)",
                            border: "1px solid rgba(234, 88, 12, 0.3)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.725rem",
                              fontWeight: 700,
                              color: "#FB923C",
                              letterSpacing: "0.05em",
                            }}
                          >
                            CASE 02 // INTERNAL OPERATIONS
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "0.78rem", color: "#A1A1AA", fontWeight: 600 }}>
                          Regional Logistics Carrier • 8 Weeks
                        </Typography>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.5rem", sm: "1.85rem" },
                          fontWeight: 600,
                          color: "#FFFFFF",
                          letterSpacing: "-0.025em",
                          lineHeight: 1.25,
                          mb: 1.5,
                        }}
                      >
                        Fleet Dispatch & Real-Time Driver Operations System
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.925rem",
                          color: "#A1A1AA",
                          lineHeight: 1.7,
                          mb: 3,
                        }}
                      >
                        Replaced chaotic phone check-ins, WhatsApp dispatch threads, and physical delivery manifests across 45+ drivers with an offline-capable mobile app and head-office operations console.
                      </Typography>

                      {/* Verified Telemetry Strip */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          p: 2,
                          borderRadius: "14px",
                          bgcolor: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          mb: 3,
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#FB923C", lineHeight: 1 }}>
                            100% Offline
                          </Typography>
                          <Typography sx={{ fontSize: "0.72rem", color: "#A1A1AA", mt: 0.3 }}>
                            Route Checkpoint Sync
                          </Typography>
                        </Box>
                        <Box sx={{ width: 1, height: 28, bgcolor: "rgba(255, 255, 255, 0.1)" }} />
                        <Box>
                          <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}>
                            0 Phone Calls
                          </Typography>
                          <Typography sx={{ fontSize: "0.72rem", color: "#A1A1AA", mt: 0.3 }}>
                            Daily Check-in Overhead
                          </Typography>
                        </Box>
                      </Box>

                      {/* Mockup Frame */}
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: { xs: 220, sm: 280 },
                          borderRadius: "18px",
                          overflow: "hidden",
                          bgcolor: "#000000",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          mb: 3,
                        }}
                      >
                        <Image
                          src="/images/portfolio/logix.png"
                          alt="Fleet Dispatch Operations"
                          fill
                          sizes="(max-width: 900px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            px: 1.4,
                            py: 0.6,
                            borderRadius: "8px",
                            bgcolor: "rgba(24, 24, 27, 0.85)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            color: "#22C55E",
                            fontSize: "0.72rem",
                            fontFamily: "monospace",
                            fontWeight: 700,
                          }}
                        >
                          ● ROUTE VERIFIED · LOCAL SQLITE
                        </Box>
                      </Box>
                    </Box>

                    {/* Bottom Action Row */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        pt: 2,
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                        flexWrap: "wrap",
                        gap: 1.5,
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
                        {["React Native", "Offline SQLite", "PostgreSQL", "Tailwind"].map((tech) => (
                          <Box
                            key={tech}
                            sx={{
                              px: 1.2,
                              py: 0.3,
                              borderRadius: "6px",
                              bgcolor: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.08)",
                              fontSize: "0.72rem",
                              color: "#D4D4D8",
                              fontWeight: 500,
                            }}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>

                      <Link href="/portfolio/logix-driver-app" style={{ textDecoration: "none" }}>
                        <Button
                          size="small"
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                          sx={{
                            color: "#FB923C",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            p: 0,
                            "&:hover": { bgcolor: "transparent", color: "#EA580C" },
                          }}
                        >
                          View System Specs
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            )}
          </AnimatePresence>

          {/* CASE 03: Intelligent Inquiry Triage (Architectural High-Tech Bright) */}
          <AnimatePresence mode="popLayout">
            {(activeCategory === "all" || activeCategory === "ai-automation") && (
              <Grid size={{ xs: 12, lg: 5.5 }}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      bgcolor: "#FAF8F5",
                      borderRadius: { xs: "24px", md: "30px" },
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      boxShadow: "0 20px 50px -10px rgba(24, 24, 27, 0.05)",
                      p: "clamp(24px, 3.5vw, 40px)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.35s ease",
                      "&:hover": {
                        borderColor: "rgba(249, 115, 22, 0.35)",
                        boxShadow: "0 25px 60px -15px rgba(234, 88, 12, 0.12)",
                      },
                    }}
                  >
                    <Box>
                      {/* Badge Row */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2, flexWrap: "wrap" }}>
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.35,
                            borderRadius: "9999px",
                            bgcolor: "rgba(249, 115, 22, 0.1)",
                            border: "1px solid rgba(249, 115, 22, 0.25)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.725rem",
                              fontWeight: 700,
                              color: "#EA580C",
                              letterSpacing: "0.05em",
                            }}
                          >
                            CASE 03 // AI & AUTOMATION
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "0.78rem", color: "#71717A", fontWeight: 600 }}>
                          B2B Services Prototype
                        </Typography>
                      </Box>

                      {/* Title */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.5rem", sm: "1.85rem" },
                          fontWeight: 600,
                          color: "#18181B",
                          letterSpacing: "-0.025em",
                          lineHeight: 1.25,
                          mb: 1.5,
                        }}
                      >
                        Intelligent Inquiry Triage & Structured Routing Engine
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.925rem",
                          color: "#52525B",
                          lineHeight: 1.7,
                          mb: 3,
                        }}
                      >
                        A practical natural language processing engine that parses unstructured support emails, extracts structured account metadata, and prepares drafts for human agent sign-off.
                      </Typography>

                      {/* Verified Telemetry Strip */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          p: 2,
                          borderRadius: "14px",
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(228, 228, 231, 0.8)",
                          mb: 3,
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#EA580C", lineHeight: 1 }}>
                            Human-in-Loop
                          </Typography>
                          <Typography sx={{ fontSize: "0.72rem", color: "#71717A", mt: 0.3 }}>
                            Zero Hallucination Risk
                          </Typography>
                        </Box>
                        <Box sx={{ width: 1, height: 28, bgcolor: "rgba(228, 228, 231, 0.8)" }} />
                        <Box>
                          <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#18181B", lineHeight: 1 }}>
                            3x Velocity
                          </Typography>
                          <Typography sx={{ fontSize: "0.72rem", color: "#71717A", mt: 0.3 }}>
                            Faster Triage & Routing
                          </Typography>
                        </Box>
                      </Box>

                      {/* Mockup Frame */}
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: { xs: 220, sm: 280 },
                          borderRadius: "18px",
                          overflow: "hidden",
                          bgcolor: "#18181B",
                          border: "1px solid rgba(24, 24, 27, 0.12)",
                          mb: 3,
                        }}
                      >
                        <Image
                          src="/images/portfolio/aiCostomer.png"
                          alt="AI Inquiry Triage"
                          fill
                          sizes="(max-width: 900px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            px: 1.4,
                            py: 0.6,
                            borderRadius: "8px",
                            bgcolor: "rgba(24, 24, 27, 0.85)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            color: "#22C55E",
                            fontSize: "0.72rem",
                            fontFamily: "monospace",
                            fontWeight: 700,
                          }}
                        >
                          98.4% CLASSIFICATION CONFIDENCE
                        </Box>
                      </Box>
                    </Box>

                    {/* Bottom Action Row */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        pt: 2,
                        borderTop: "1px solid rgba(228, 228, 231, 0.8)",
                        flexWrap: "wrap",
                        gap: 1.5,
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
                        {["Python", "FastAPI", "Vector Embeddings", "OpenAI"].map((tech) => (
                          <Box
                            key={tech}
                            sx={{
                              px: 1.2,
                              py: 0.3,
                              borderRadius: "6px",
                              bgcolor: "#FFFFFF",
                              border: "1px solid rgba(228, 228, 231, 0.9)",
                              fontSize: "0.72rem",
                              color: "#3F3F46",
                              fontWeight: 600,
                            }}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>

                      <Link href="/portfolio/ai-customer-support" style={{ textDecoration: "none" }}>
                        <Button
                          size="small"
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                          sx={{
                            color: "#EA580C",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            p: 0,
                            "&:hover": { bgcolor: "transparent", color: "#C2410C" },
                          }}
                        >
                          View Prototype Logic
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            )}
          </AnimatePresence>
        </Grid>

        {/* ========================================================================= */}
        {/* CASE 04: WIDE PIPELINE BANNER (Multi-Channel Lead Intake & Quote Builder) */}
        {/* ========================================================================= */}
        <AnimatePresence mode="popLayout">
          {(activeCategory === "all" || activeCategory === "customer-leads") && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  bgcolor: "#FAF8F5",
                  borderRadius: { xs: "24px", md: "30px" },
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 20px 50px -10px rgba(24, 24, 27, 0.05)",
                  p: "clamp(24px, 4vw, 42px)",
                  mb: { xs: 6, md: 8 },
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    borderColor: "rgba(249, 115, 22, 0.35)",
                    boxShadow: "0 25px 60px -15px rgba(234, 88, 12, 0.12)",
                  },
                }}
              >
                <Grid container spacing={{ xs: 4, lg: 5 }} sx={{ alignItems: "center" }}>
                  {/* Left Column: Pipeline Description */}
                  <Grid size={{ xs: 12, lg: 5.5 }}>
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2, flexWrap: "wrap" }}>
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.35,
                            borderRadius: "9999px",
                            bgcolor: "rgba(249, 115, 22, 0.1)",
                            border: "1px solid rgba(249, 115, 22, 0.25)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.725rem",
                              fontWeight: 700,
                              color: "#EA580C",
                              letterSpacing: "0.05em",
                            }}
                          >
                            CASE 04 // CUSTOMER & LEAD SYSTEMS
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "0.78rem", color: "#71717A", fontWeight: 600 }}>
                          Commercial Equipment Provider • 6 Weeks
                        </Typography>
                      </Box>

                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.6rem", sm: "2rem" },
                          fontWeight: 600,
                          color: "#18181B",
                          letterSpacing: "-0.025em",
                          lineHeight: 1.25,
                          mb: 1.5,
                        }}
                      >
                        Multi-Channel Lead Intake & Instant Quote Builder
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.95rem",
                          color: "#52525B",
                          lineHeight: 1.7,
                          mb: 3,
                        }}
                      >
                        Unified scattered WhatsApp, email, and website form inquiries into a centralized triage queue. Integrated an internal quotation engine that computes margins and generates customized PDF proposals in minutes instead of days.
                      </Typography>

                      {/* Verified Telemetry Strip */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          p: 2,
                          borderRadius: "14px",
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(228, 228, 231, 0.8)",
                          mb: 3,
                        }}
                      >
                        <Box>
                          <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#EA580C", lineHeight: 1 }}>
                            Minutes vs Days
                          </Typography>
                          <Typography sx={{ fontSize: "0.72rem", color: "#71717A", mt: 0.3 }}>
                            Turnaround on Proposals
                          </Typography>
                        </Box>
                        <Box sx={{ width: 1, height: 28, bgcolor: "rgba(228, 228, 231, 0.8)" }} />
                        <Box>
                          <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#18181B", lineHeight: 1 }}>
                            Zero Lost Leads
                          </Typography>
                          <Typography sx={{ fontSize: "0.72rem", color: "#71717A", mt: 0.3 }}>
                            Central Accountable Queue
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap", mb: 3 }}>
                        {["Next.js", "Express.js", "PostgreSQL", "MUI", "PDFKit", "SendGrid"].map((tech) => (
                          <Box
                            key={tech}
                            sx={{
                              px: 1.2,
                              py: 0.3,
                              borderRadius: "6px",
                              bgcolor: "#FFFFFF",
                              border: "1px solid rgba(228, 228, 231, 0.9)",
                              fontSize: "0.72rem",
                              color: "#3F3F46",
                              fontWeight: 600,
                            }}
                          >
                            {tech}
                          </Box>
                        ))}
                      </Box>

                      <Link href="/portfolio" style={{ textDecoration: "none" }}>
                        <Button
                          variant="outlined"
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
                          sx={{
                            color: "#18181B",
                            borderColor: "rgba(24, 24, 27, 0.25)",
                            borderRadius: "9999px",
                            px: 3,
                            py: 1.1,
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            "&:hover": {
                              borderColor: "#EA580C",
                              color: "#EA580C",
                              bgcolor: "rgba(249, 115, 22, 0.04)",
                            },
                          }}
                        >
                          Explore Lead Pipeline Architecture
                        </Button>
                      </Link>
                    </Box>
                  </Grid>

                  {/* Right Column: High-Res Application Screen Frame */}
                  <Grid size={{ xs: 12, lg: 6.5 }}>
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 260, sm: 340, md: 380 },
                        borderRadius: "20px",
                        overflow: "hidden",
                        bgcolor: "#18181B",
                        border: "1px solid rgba(24, 24, 27, 0.12)",
                        boxShadow: "0 20px 45px -10px rgba(24, 24, 27, 0.2)",
                      }}
                    >
                      <Image
                        src="/images/portfolio/b2b.png"
                        alt="Lead Intake Pipeline"
                        fill
                        sizes="(max-width: 1200px) 100vw, 55vw"
                        style={{ objectFit: "cover" }}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 16,
                          left: 16,
                          right: 16,
                          px: 2,
                          py: 1,
                          borderRadius: "10px",
                          bgcolor: "rgba(24, 24, 27, 0.88)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: 1,
                        }}
                      >
                        <Typography sx={{ fontSize: "0.78rem", fontWeight: 600, color: "#FB923C" }}>
                          ● AUTOMATED MARGIN CALCULATION
                        </Typography>
                        <Typography sx={{ fontSize: "0.75rem", color: "#A1A1AA", fontFamily: "monospace" }}>
                          1-CLICK PDF DISPATCH
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* BOTTOM ARCHIVE INVITATION BANNER                                          */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              p: { xs: 3.5, sm: 4.5 },
              borderRadius: "22px",
              bgcolor: "#FAF8F5",
              border: "1px dashed rgba(24, 24, 27, 0.2)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box sx={{ maxWidth: 680 }}>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#18181B",
                  mb: 0.8,
                  letterSpacing: "-0.01em",
                }}
              >
                Looking for architecture specific to your industry or operational setup?
              </Typography>
              <Typography sx={{ fontSize: "0.925rem", color: "#52525B", lineHeight: 1.6 }}>
                We have engineered and deployed over 8 production web systems, private operational consoles, customer acquisition funnels, and automated data pipelines.
              </Typography>
            </Box>

            <Link href="/work" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  background: "linear-gradient(135deg, #18181B 0%, #27272A 100%)",
                  color: "#FFFFFF",
                  px: 3.8,
                  py: 1.4,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  whiteSpace: "nowrap",
                  boxShadow: "0 8px 20px rgba(24, 24, 27, 0.2)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    boxShadow: "0 10px 24px rgba(234, 88, 12, 0.35)",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                Browse Full Case Studies Archive
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
