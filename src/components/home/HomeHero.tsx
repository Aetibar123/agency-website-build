"use client";
import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const ThreeHeroCanvas = dynamic(() => import("./ThreeHeroCanvas"), {
  ssr: false,
  loading: () => null,
});

const heroMetrics = [
  {
    value: "Fixed",
    title: "Upfront Budget Guarantee",
    desc: "Itemized scope specifications and fixed project investment agreed upon before kickoff. Zero surprise bills.",
    icon: <VerifiedOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
  },
  {
    value: "All-in-1",
    title: "Integrated Growth Suite",
    desc: "Visual identity, digital platforms, audience acquisition, and back-office tools coordinated under one roof.",
    icon: <CampaignOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
  },
  {
    value: "100%",
    title: "Total Asset Sovereignty",
    desc: "Transfer of all creative master files, source code, ad platforms, and live hosting credentials to you from day one.",
    icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
  },
  {
    value: "Direct",
    title: "Dedicated Specialist Access",
    desc: "Collaborate directly with the senior creators and strategists actively building your commercial solution.",
    icon: <SpeedOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
  },
];

export default function HomeHero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "96vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: { xs: 16, sm: 18, md: 20 },
        pb: { xs: 10, md: 14 },
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

      {/* Three.js Flowing 3D Silk Wave Background */}
      <ThreeHeroCanvas />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Centered Hero Typographic Core with Smooth Stagger */}
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: 840, md: 960 },
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
            initial={{ opacity: 0, y: -24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: { xs: 1.8, sm: 2.2 },
                py: { xs: 0.6, sm: 0.8 },
                borderRadius: { xs: "16px", sm: "9999px" },
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                backdropFilter: "blur(12px)",
                maxWidth: "100%",
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
                  flexShrink: 0,
                  display: { xs: "none", sm: "block" },
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "0.72rem", sm: "0.825rem" },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#EA580C",
                  textTransform: "uppercase",
                  lineHeight: 1.35,
                  textAlign: "center",
                }}
              >
                FULL-SERVICE DIGITAL AGENCY &bull; BRANDING &bull; MARKETING &bull; WEBSITES &bull; AI
              </Typography>
            </Box>
          </motion.div>

          {/* Main Headline with Sunset Orange Accent */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.35rem", md: "2.85rem", lg: "3.25rem" },
                fontWeight: 700,
                color: "#18181B",
                lineHeight: { xs: 1.25, sm: 1.2, md: 1.18 },
                letterSpacing: { xs: "-0.02em", md: "-0.03em" },
                textWrap: "balance",
                mb: { xs: 2.5, md: 3 },
              }}
            >
              Websites, Marketing, Branding &amp; AI —{" "}
              <Box
                component="span"
                sx={{
                  display: "inline",
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Built to Grow Your Business.
              </Box>
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.025rem", sm: "1.125rem", md: "1.2rem" },
                lineHeight: 1.75,
                color: "#52525B",
                maxWidth: { xs: "100%", md: 760, lg: 800 },
                mb: { xs: 4, md: 4.5 },
                fontWeight: 400,
              }}
            >
              Stop losing potential clients to outdated branding, invisible Google rankings, and slow websites. We craft memorable brand designs, build fast business websites and mobile apps, run high-ROI Google and social ads, and automate repetitive office tasks with AI—delivering real customer inquiries straight to your phone.
            </Typography>
          </motion.div>

          {/* High-Impact CTA Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
                alignItems: "center",
                mb: 3.5,
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
                    Get a Free Consultation
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="#services" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#18181B",
                      borderColor: "rgba(24, 24, 27, 0.2)",
                      bgcolor: "rgba(255, 255, 255, 0.8)",
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
                        bgcolor: "rgba(249, 115, 22, 0.04)",
                        color: "#EA580C",
                      },
                    }}
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </motion.div>
            </Box>
          </motion.div>

          {/* Sub-CTA Trust Indicators */}
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
                alignItems: "center",
                gap: { xs: 2, sm: 3 },
              }}
            >
              {[
                "Comprehensive Digital Capabilities",
                "Guaranteed Fixed Budgets",
                "Complete Asset Sovereignty",
              ].map((text, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                  <Typography sx={{ fontSize: "0.85rem", color: "#52525B", fontWeight: 500 }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Centerpiece Showcase Image Frame — Stable, Rock-Solid with Smooth Lift & Glow on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.05, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "1160px",
              mx: "auto",
            }}
          >
            {/* Warm Ambient Glow behind frame */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "94%",
                height: "85%",
                background:
                  "radial-gradient(ellipse, rgba(249, 115, 22, 0.18) 0%, rgba(251, 146, 60, 0.08) 50%, transparent 75%)",
                filter: "blur(60px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Stable Showcase Card with Smooth Hover Lift & Warm Glow */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                p: { xs: 1, sm: 1.5 },
                bgcolor: "#FFFFFF",
                borderRadius: { xs: "20px", sm: "26px", md: "32px" },
                border: "1px solid rgba(228, 228, 231, 0.9)",
                boxShadow: "0 25px 70px -15px rgba(24, 24, 27, 0.1), 0 0 0 1px rgba(24, 24, 27, 0.03)",
                overflow: "hidden",
                transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 35px 85px -15px rgba(234, 88, 12, 0.22), 0 0 0 1px rgba(249, 115, 22, 0.25)",
                  borderColor: "rgba(249, 115, 22, 0.35)",
                },
              }}
            >
              {/* Cinematic Image Viewport */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 260, sm: 400, md: 520, lg: 580 },
                  borderRadius: { xs: "16px", sm: "22px", md: "26px" },
                  overflow: "hidden",
                  bgcolor: "#18181B",
                }}
              >
                <Image
                  src="/images/home/modern-agency-hero.jpg"
                  alt="Modern systems engineering agency studio with active workflow dashboards and sunset amber lighting"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1160px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />

                {/* Subtle Contrast Gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(24, 24, 27, 0.05) 0%, rgba(24, 24, 27, 0.35) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Floating Glassmorphic Pill 1 (Top Left) */}
                <Box
                  component={motion.div}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  sx={{
                    position: "absolute",
                    top: { xs: 12, sm: 20, md: 24 },
                    left: { xs: 12, sm: 20, md: 24 },
                    right: { xs: 12, sm: "auto" },
                    maxWidth: { xs: "calc(100% - 24px)", sm: 420 },
                    bgcolor: "rgba(255, 255, 255, 0.92)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "16px",
                    px: { xs: 1.5, sm: 2.4 },
                    py: { xs: 1, sm: 1.4 },
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      bgcolor: "#F97316",
                      boxShadow: "0 0 0 3px rgba(249, 115, 22, 0.25)",
                      flexShrink: 0,
                    }}
                  />
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.68rem", sm: "0.75rem" },
                        fontWeight: 700,
                        color: "#EA580C",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        fontFamily: "monospace",
                      }}
                    >
                      COMMERCIAL RESULTS
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.78rem", sm: "0.875rem" },
                        fontWeight: 700,
                        color: "#18181B",
                        lineHeight: 1.3,
                      }}
                    >
                      Turning web visitors into verified customer inquiries
                    </Typography>
                  </Box>
                </Box>

                {/* Floating Glassmorphic Pill 2 (Bottom Right) */}
                <Box
                  component={motion.div}
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, delay: 0.6, ease: "easeInOut" }}
                  sx={{
                    position: "absolute",
                    bottom: { xs: 14, sm: 20, md: 24 },
                    right: { xs: 14, sm: 20, md: 24 },
                    bgcolor: "rgba(24, 24, 27, 0.88)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "16px",
                    px: { xs: 1.8, sm: 2.4 },
                    py: { xs: 1.2, sm: 1.4 },
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25)",
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    gap: 1.5,
                    color: "#FFFFFF",
                  }}
                >
                  <AutoAwesomeOutlinedIcon sx={{ fontSize: 20, color: "#FB923C" }} />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.725rem",
                        fontWeight: 700,
                        color: "#FB923C",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontFamily: "monospace",
                      }}
                    >
                      MULTI-DISCIPLINARY CRAFT
                    </Typography>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
                      Design systems &bull; Web platforms &bull; Search media &bull; Automations
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* 4-Item Executive Trust & Performance Strip with Staggered Cascading Reveal */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Grid container spacing={2.5}>
            {heroMetrics.map((metric, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.65 + idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      p: 2.8,
                      borderRadius: "20px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      boxShadow: "0 2px 8px rgba(24, 24, 27, 0.02)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(234, 88, 12, 0.4)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 18px 36px -12px rgba(234, 88, 12, 0.12)",
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
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
