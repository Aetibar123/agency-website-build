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
    value: "Clear",
    title: "Scope & Pricing",
    desc:
      "We agree on your requirements, deliverables, timeline, and pricing before work begins, so you know exactly what is included.",
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
  },
  {
    value: "Open",
    title: "Regular Updates",
    desc:
      "We keep you informed throughout the project, share relevant progress, and give you opportunities to provide feedback along the way.",
    icon: (
      <PlayCircleOutlineRoundedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />
    ),
  },
  {
    value: "Direct",
    title: "Easy Communication",
    desc:
      "Discuss requirements, feedback, questions, and changes directly with the people working on your website, marketing, app, or automation project.",
    icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
  },
  {
    value: "Ready",
    title: "Review Before Delivery",
    desc:
      "We review the agreed work with you before completion, make the required changes, and ensure the project or service is ready for the next stage.",
    icon: <SpeedOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
  },
];

const showcaseTabs = [
  {
    id: "discovery",
    label: "01. Understanding",
    image: "/images/home/editorial-client-consultation.jpg",
    alt:
      "Aetibar discussing business goals, customer needs, and project requirements with a client",
    phaseTag: "Phase 01 • Understand Your Business",
    headline:
      "We Start by Understanding Your Business, Goals & What You Need to Improve",
    metric1: "Clear Requirements",
    metric2: "Practical Recommendations",
  },
  {
    id: "planning",
    label: "02. Planning",
    image: "/images/home/hero-architecture.jpg",
    alt:
      "Aetibar planning a digital project around business goals, customer needs, and requirements",
    phaseTag: "Phase 02 • Plan the Right Approach",
    headline:
      "A Clear Plan That Matches Your Goals, Priorities & Budget",
    metric1: "Defined Scope",
    metric2: "Clear Timeline & Pricing",
  },
  {
    id: "implementation",
    label: "03. Implementation",
    image: "/images/home/hero-agency-showcase.jpg",
    alt:
      "Aetibar implementing and reviewing a digital project with regular client feedback",
    phaseTag: "Phase 03 • Implement the Plan",
    headline:
      "We Put the Plan Into Action While Keeping You Involved Along the Way",
    metric1: "Regular Progress",
    metric2: "Ongoing Feedback",
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
        pb: { xs: 10, md: 14 },
        bgcolor: "#183D35",
        color: "#FFFFFF",
        borderBottom: "1px solid rgba(216, 229, 213, 0.12)",
        overflow: "hidden",
      }}
    >
      {/* Ambient Emerald Lighting Glows */}
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(61, 118, 93, 0.35) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
        sx={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "480px",
          height: "480px",
          background: "radial-gradient(circle, rgba(216, 229, 213, 0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Left-Aligned Hero Core */}
        <Box
          sx={{
            maxWidth: "1040px",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
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
                gap: 1.2,
                px: 2.2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.28)",
                border: "1px solid rgba(216, 229, 213, 0.25)",
                mb: 3,
              }}
            >
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#D8E5D5",
                  boxShadow: "0 0 10px #D8E5D5",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "0.72rem", sm: "0.78rem" },
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#D8E5D5",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                OUR PROCESS • TRANSPARENT • PRACTICAL • RELIABLE
              </Typography>
            </Box>
          </motion.div>

          {/* Main Headline - DM Serif Display */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "2.35rem", sm: "3.2rem", md: "4.15rem" },
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: { xs: 1.18, md: 1.12 },
                letterSpacing: "-0.015em",
                textAlign: "left",
                maxWidth: { xs: "100%", md: 1040 },
                mb: 2.5,
              }}
            >
              We take the mystery out of technology projects —{" "}
              <Box
                component="span"
                sx={{
                  color: "#D8E5D5",
                  fontStyle: "italic",
                }}
              >
                with clear plans, regular updates & simple communication.
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
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                lineHeight: 1.75,
                color: "rgba(216, 229, 213, 0.88)",
                maxWidth: 860,
                textAlign: "left",
                mb: 4,
                fontWeight: 400,
              }}
            >
              Building a website, mobile app, marketing campaign, or AI automation workflow shouldn’t feel complicated. We start by understanding your business goals, define a clear plan around your requirements, keep you informed throughout the work, and review the agreed deliverables with you before completion.
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
                justifyContent: "flex-start",
                gap: 2,
                alignItems: "center",
                mb: 3.5,
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: "#3D765D",
                  color: "#FFFFFF",
                  px: { xs: 3.2, sm: 3.8 },
                  py: 1.4,
                  fontSize: "0.925rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  boxShadow: "none",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#D8E5D5",
                    color: "#183D35",
                  },
                }}
              >
                Start a Conversation About Your Business
              </Button>

              <Button
                component="a"
                href="#lifecycle-engine"
                variant="outlined"
                endIcon={<ArrowDownwardRoundedIcon sx={{ fontSize: 16 }} />}
                sx={{
                  borderColor: "rgba(216, 229, 213, 0.35)",
                  bgcolor: "rgba(255, 255, 255, 0.04)",
                  color: "#FFFFFF",
                  px: { xs: 3, sm: 3.5 },
                  py: 1.4,
                  fontSize: "0.925rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#D8E5D5",
                    bgcolor: "rgba(216, 229, 213, 0.1)",
                  },
                }}
              >
                Explore Our 5-Step Process
              </Button>
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
                justifyContent: "flex-start",
                gap: { xs: 2, sm: 3.5 },
                alignItems: "center",
              }}
            >
              {["Clear, Documented Scope", "Careful Staged Deployment", "Direct Code & Asset Ownership"].map(
                (badge, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CheckCircleOutlinedIcon sx={{ fontSize: 17, color: "#D8E5D5" }} />
                    <Typography sx={{ fontSize: "0.85rem", color: "rgba(216, 229, 213, 0.85)", fontWeight: 500 }}>
                      {badge}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </motion.div>
        </Box>

        {/* Centerpiece Showcase Image Frame */}
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
            {/* Showcase Card Frame */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                p: { xs: 1.5, sm: 2 },
                bgcolor: "rgba(255, 255, 255, 0.04)",
                borderRadius: { xs: "22px", sm: "28px" },
                border: "1px solid rgba(216, 229, 213, 0.18)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 25px 70px -15px rgba(0, 0, 0, 0.4)",
                overflow: "hidden",
                transition: "all 0.35s ease",
                "&:hover": {
                  borderColor: "rgba(216, 229, 213, 0.35)",
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
                  bgcolor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(216, 229, 213, 0.15)",
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
                  <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, color: "#D8E5D5", fontFamily: "monospace" }}>
                    Our Process:
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
                          bgcolor: isActive ? "#3D765D" : "rgba(255, 255, 255, 0.06)",
                          color: isActive ? "#FFFFFF" : "#D8E5D5",
                          border: "1px solid",
                          borderColor: isActive ? "#D8E5D5" : "rgba(216, 229, 213, 0.2)",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            bgcolor: isActive ? "#3D765D" : "rgba(255, 255, 255, 0.12)",
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
                  borderRadius: { xs: "16px", sm: "22px" },
                  overflow: "hidden",
                  bgcolor: "#183D35",
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
                          "linear-gradient(180deg, rgba(24, 61, 53, 0.15) 0%, rgba(24, 61, 53, 0.55) 100%)",
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
                    bgcolor: "rgba(24, 61, 53, 0.88)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "16px",
                    p: { xs: 1.5, sm: 2 },
                    border: "1px solid rgba(216, 229, 213, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
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
                      bgcolor: "rgba(61, 118, 93, 0.35)",
                      color: "#D8E5D5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BoltRoundedIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#D8E5D5", textTransform: "uppercase", fontFamily: "monospace" }}>
                      {currentTab.phaseTag}
                    </Typography>
                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF" }}>
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
                    bgcolor: "rgba(24, 61, 53, 0.92)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "16px",
                    p: { xs: 1.5, sm: 2 },
                    border: "1px solid rgba(216, 229, 213, 0.25)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
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
                      bgcolor: "rgba(34, 197, 94, 0.2)",
                      color: "#22C55E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircleOutlinedIcon sx={{ fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#22C55E", textTransform: "uppercase", fontFamily: "monospace" }}>
                      Our Standards
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
                    bgcolor: "rgba(24, 61, 53, 0.92)",
                    backdropFilter: "blur(12px)",
                    px: 2.2,
                    py: 0.9,
                    borderRadius: "9999px",
                    border: "1px solid rgba(216, 229, 213, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    maxWidth: { xs: "85%", sm: "60%" },
                  }}
                >
                  <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#D8E5D5", flexShrink: 0 }} />
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
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

        {/* 4-Item Executive Trust & Performance Strip (Glass Dark Theme) */}
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
                    p: 3,
                    borderRadius: "16px",
                    bgcolor: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(216, 229, 213, 0.12)",
                    backdropFilter: "blur(10px)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.07)",
                      borderColor: "rgba(216, 229, 213, 0.3)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
                      <Typography
                        sx={{
                          fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                          fontSize: "1.75rem",
                          fontWeight: 400,
                          color: "#D8E5D5",
                          letterSpacing: "-0.015em",
                        }}
                      >
                        {metric.value}
                      </Typography>
                      <Box
                        sx={{
                          width: 34,
                          height: 34,
                          borderRadius: "8px",
                          bgcolor: "rgba(61, 118, 93, 0.3)",
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
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: "1.08rem",
                        fontWeight: 400,
                        color: "#FFFFFF",
                        mb: 0.8,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {metric.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "rgba(216, 229, 213, 0.75)",
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
