"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import { motion, AnimatePresence } from "framer-motion";

const heroMetrics = [
  {
    value: "14-Day",
    title: "Blueprint Guarantee",
    desc: "Complete architectural specs and database schemas signed off before sprint one.",
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
  },
  {
    value: "Bi-Weekly",
    title: "Staging Previews",
    desc: "Private Vercel preview environments tested with your real operational data.",
    icon: <PlayCircleOutlineRoundedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
  },
  {
    value: "100%",
    title: "Code & Data Sovereignty",
    desc: "Full transfer of GitHub repositories, database credentials, and production keys.",
    icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
  },
  {
    value: "0.0%",
    title: "Disruption / Data Loss",
    desc: "Dual-run parallel migration guarantees zero lost inquiries or operational pauses.",
    icon: <SpeedOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
  },
];

const showcaseTabs = [
  {
    id: "shadowing",
    label: "01. Operational Discovery",
    image: "/images/home/editorial-client-consultation.jpg",
    alt: "Operational shadowing session auditing customer intake and spreadsheet bottlenecks",
    phaseTag: "Phase 01 &bull; Discovery Audit",
    headline: "Shadowing Daily Workflows Before Writing a Single Line of Code",
    metric1: "100% Process Clarity",
    metric2: "Zero Guesswork",
  },
  {
    id: "architecture",
    label: "02. Systems Topology",
    image: "/images/home/hero-architecture.jpg",
    alt: "Aetibar system architecture blueprint and relational schema visualization",
    phaseTag: "Phase 02 &bull; Relational Blueprint",
    headline: "Relational PostgreSQL Topologies & Fail-Safe Webhooks",
    metric1: "Sub-Second P95 Latency",
    metric2: "Zero Architectural Debt",
  },
  {
    id: "staging",
    label: "03. Working Staging Sprints",
    image: "/images/home/hero-agency-showcase.jpg",
    alt: "Private Vercel staging engine with real client operational workflows",
    phaseTag: "Phase 03 &bull; Precision Sprints",
    headline: "Working Next.js Software Delivered to Private Staging Every 14 Days",
    metric1: "Core Web Vitals 98+",
    metric2: "Zero Dark Periods",
  },
];

export default function HowWeWorkHero() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentTab = showcaseTabs[activeTab];

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        pt: { xs: 16, sm: 19, md: 22 },
        pb: { xs: 10, md: 15 },
        background:
          "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.08) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
        overflow: "hidden",
        borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
      }}
    >
      {/* Ambient subtle warm lighting */}
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.14) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
        sx={{
          position: "absolute",
          top: "15%",
          left: "-10%",
          width: "460px",
          height: "460px",
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Centered Hero Typographic Core */}
        <Box
          sx={{
            maxWidth: "1020px",
            mx: "auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          {/* Status Pill */}
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
                px: 2.4,
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
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#F97316",
                  boxShadow: "0 0 10px #F97316",
                }}
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
                OUR METHODOLOGY &bull; OPERATIONAL AUDIT TO LIVE CUTOVER
              </Typography>
            </Box>
          </motion.div>

          {/* Main Headline - Generous Line-Height (Zero Text Overlap) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.1rem", sm: "2.9rem", md: "3.6rem", lg: "4.25rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.25, sm: 1.2, md: 1.18 },
                letterSpacing: { xs: "-0.02em", md: "-0.03em" },
                textAlign: "center",
                maxWidth: { xs: "100%", sm: 860, md: 1020, lg: 1140 },
                mx: "auto",
                mb: { xs: 3, md: 3.5 },
              }}
            >
              Turning operational chaos into{" "}
              <Box
                component="span"
                sx={{
                  display: { xs: "inline", sm: "block" },
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                precision digital systems.
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
                fontSize: { xs: "1.05rem", sm: "1.18rem", md: "1.25rem" },
                lineHeight: 1.8,
                color: "#52525B",
                maxWidth: 820,
                mx: "auto",
                textAlign: "center",
                mb: { xs: 4, md: 5 },
                fontWeight: 400,
              }}
            >
              We don&apos;t start with code or generic templates. We shadow how work and inquiries actually flow
              through your business, architect clean relational schemas, deliver working staging software every
              14 days, and guarantee zero-downtime data migration.
            </Typography>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
                alignItems: "center",
                mb: 4,
              }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      px: { xs: 3.5, sm: 4.5 },
                      py: { xs: 1.4, sm: 1.6 },
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      fontWeight: 700,
                      borderRadius: "9999px",
                      boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.38)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                        boxShadow: "0 15px 30px -5px rgba(234, 88, 12, 0.5)",
                      },
                    }}
                  >
                    Schedule an Operational Discovery Call
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a href="#lifecycle-engine" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowDownwardRoundedIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      color: "#18181B",
                      borderColor: "rgba(24, 24, 27, 0.2)",
                      bgcolor: "rgba(255, 255, 255, 0.85)",
                      backdropFilter: "blur(10px)",
                      px: { xs: 3.5, sm: 4 },
                      py: { xs: 1.4, sm: 1.55 },
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      fontWeight: 600,
                      borderRadius: "9999px",
                      boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#EA580C",
                        color: "#EA580C",
                        bgcolor: "rgba(249, 115, 22, 0.05)",
                      },
                    }}
                  >
                    Explore the 5 Stages
                  </Button>
                </a>
              </motion.div>
            </Box>
          </motion.div>

          {/* Sub-CTA Trust Checkmarks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: { xs: 2, sm: 3.5 },
                alignItems: "center",
              }}
            >
              {["14-Day Blueprint Guarantee", "Zero Disruption Cutover", "100% Code Sovereignty"].map(
                (badge, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CheckCircleOutlinedIcon sx={{ fontSize: 17, color: "#EA580C" }} />
                    <Typography sx={{ fontSize: "0.85rem", color: "#52525B", fontWeight: 600 }}>
                      {badge}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </motion.div>
        </Box>

        {/* Centerpiece Showcase Image Frame (Clean, High-Performance Image Instead of 3D) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "1160px",
              mx: "auto",
              mb: { xs: 6, md: 8 },
            }}
          >
            {/* Ambient Warm Glow behind frame */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "94%",
                height: "85%",
                background:
                  "radial-gradient(ellipse, rgba(249, 115, 22, 0.16) 0%, rgba(251, 146, 60, 0.06) 50%, transparent 75%)",
                filter: "blur(60px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Showcase Card Frame */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                p: { xs: 1.5, sm: 2 },
                bgcolor: "#FFFFFF",
                borderRadius: { xs: "22px", sm: "28px", md: "34px" },
                border: "1px solid rgba(228, 228, 231, 0.9)",
                boxShadow: "0 25px 70px -15px rgba(24, 24, 27, 0.08), 0 0 0 1px rgba(24, 24, 27, 0.03)",
                overflow: "hidden",
                transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  boxShadow: "0 35px 85px -15px rgba(234, 88, 12, 0.2)",
                  borderColor: "rgba(249, 115, 22, 0.4)",
                },
              }}
            >
              {/* Interactive Inspector Tabs Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 1.5,
                  px: { xs: 1.5, sm: 2 },
                  py: 1.2,
                  mb: 1.5,
                  borderRadius: "16px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.8)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "#22C55E",
                      boxShadow: "0 0 8px #22C55E",
                    }}
                  />
                  <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, color: "#18181B" }}>
                    Operational Blueprint Console:
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {showcaseTabs.map((tab, idx) => {
                    const isActive = activeTab === idx;
                    return (
                      <Button
                        key={tab.id}
                        size="small"
                        onClick={() => setActiveTab(idx)}
                        sx={{
                          borderRadius: "9999px",
                          px: 2.2,
                          py: 0.6,
                          fontSize: "0.785rem",
                          fontWeight: 700,
                          textTransform: "none",
                          bgcolor: isActive ? "#EA580C" : "#FFFFFF",
                          color: isActive ? "#FFFFFF" : "#52525B",
                          border: "1px solid",
                          borderColor: isActive ? "#EA580C" : "rgba(228, 228, 231, 0.9)",
                          boxShadow: isActive ? "0 4px 12px rgba(234, 88, 12, 0.3)" : "none",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            bgcolor: isActive ? "#C2410C" : "rgba(249, 115, 22, 0.08)",
                          },
                        }}
                      >
                        {tab.label}
                      </Button>
                    );
                  })}
                </Box>
              </Box>

              {/* Cinematic Image Viewport */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 260, sm: 420, md: 520, lg: 580 },
                  borderRadius: { xs: "16px", sm: "22px", md: "26px" },
                  overflow: "hidden",
                  bgcolor: "#18181B",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTab.id}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <Image
                      src={currentTab.image}
                      alt={currentTab.alt}
                      fill
                      priority
                      sizes="(max-width: 1200px) 100vw, 1160px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center center",
                      }}
                    />

                    {/* Subtle Vignette Gradient Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(24, 24, 27, 0.15) 0%, rgba(24, 24, 27, 0.5) 100%)",
                        pointerEvents: "none",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Floating Glassmorphic Pill 1: Top Left */}
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 14, sm: 20, md: 24 },
                    left: { xs: 14, sm: 20, md: 24 },
                    bgcolor: "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "16px",
                    p: { xs: 1.5, sm: 2 },
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "10px",
                      bgcolor: "rgba(249, 115, 22, 0.12)",
                      color: "#EA580C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BoltRoundedIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase" }}>
                      {currentTab.phaseTag}
                    </Typography>
                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, color: "#18181B" }}>
                      {currentTab.metric1}
                    </Typography>
                  </Box>
                </Box>

                {/* Floating Glassmorphic Pill 2: Bottom Right */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 14, sm: 20, md: 24 },
                    right: { xs: 14, sm: 20, md: 24 },
                    bgcolor: "rgba(24, 24, 27, 0.9)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "16px",
                    p: { xs: 1.5, sm: 2 },
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "10px",
                      bgcolor: "rgba(34, 197, 94, 0.15)",
                      color: "#22C55E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircleOutlinedIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#22C55E", textTransform: "uppercase" }}>
                      Operational Standard
                    </Typography>
                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF" }}>
                      {currentTab.metric2}
                    </Typography>
                  </Box>
                </Box>

                {/* Bottom Left Telemetry Status */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 14, sm: 20, md: 24 },
                    left: { xs: 14, sm: 20, md: 24 },
                    bgcolor: "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(12px)",
                    px: 2.2,
                    py: 0.9,
                    borderRadius: "9999px",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    maxWidth: { xs: "85%", sm: "60%" },
                  }}
                >
                  <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#EA580C", flexShrink: 0 }} />
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#18181B",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {currentTab.headline}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* 4-Item Executive Trust & Performance Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Grid container spacing={2.5}>
            {heroMetrics.map((metric, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    p: 2.8,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    boxShadow: "0 2px 8px rgba(24, 24, 27, 0.02)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "rgba(234, 88, 12, 0.35)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 10px 24px -4px rgba(24, 24, 27, 0.06)",
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
                      <Typography
                        sx={{
                          fontSize: "1.75rem",
                          fontWeight: 800,
                          color: "#EA580C",
                          letterSpacing: "-0.03em",
                          fontFamily: "monospace",
                        }}
                      >
                        {metric.value}
                      </Typography>
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: "8px",
                          bgcolor: "rgba(249, 115, 22, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {metric.icon}
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "#18181B",
                        mb: 0.8,
                      }}
                    >
                      {metric.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.825rem",
                        color: "#52525B",
                        lineHeight: 1.6,
                      }}
                    >
                      {metric.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
