"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import { motion, AnimatePresence } from "framer-motion";

interface SolutionZone {
  num: string;
  badge: string;
  title: string;
  subtitle: string;
  headline: string;
  narrative: string;
  capabilities: string[];
  metrics: { primary: string; primaryLabel: string; secondary: string; secondaryLabel: string };
  badgeFloatTop: string;
  badgeFloatBottom: string;
  path: string;
  image: string;
  icon: React.ReactNode;
}

const zones: SolutionZone[] = [
  {
    num: "01",
    badge: "WEB DEVELOPMENT",
    title: "Websites & Web Apps",
    subtitle: "Custom Web Development & Modern Platforms",
    headline: "Fast, responsive websites and custom web applications built for clarity and search visibility.",
    narrative:
      "A great business website or web application should explain what you solve and make taking action effortless. We provide custom web development, business websites, eCommerce platforms, and web applications built with clean code, fast loading speeds, and SEO-friendly structure that drives organic discovery.",
    capabilities: [
      "Responsive web development optimized for mobile, tablet, and desktop",
      "Clear positioning, intuitive navigation, and high-performance design",
      "Structured inquiry intake, quote forms, and customer onboarding",
      "Technical SEO architecture and on-page optimization for search visibility",
    ],
    metrics: {
      primary: "Fast",
      primaryLabel: "Page Performance",
      secondary: "Clean",
      secondaryLabel: "Modern Architecture",
    },
    badgeFloatTop: "Mobile & Desktop Optimized",
    badgeFloatBottom: "Modern React & Next.js Architecture",
    path: "/solutions/business-website-development",
    image: "/images/portfolio/ecommerce.png",
    icon: <WebAssetOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "02",
    badge: "INQUIRY MANAGEMENT",
    title: "CRM & Lead Systems",
    subtitle: "Custom CRM Software & Sales Pipelines",
    headline: "Capture, route, and organize leads across web, email, and messaging channels.",
    narrative:
      "When inquiries come in through website forms, direct emails, and messaging apps, details easily slip through the cracks. We engineer centralized lead capture systems, automated notifications, and client portals that keep communication organized and speed up response times.",
    capabilities: [
      "Multi-channel lead intake across websites, forms, and digital campaigns",
      "Instant team notifications and automated customer confirmations",
      "Dedicated client portals for milestone visibility and file exchange",
      "Seamless API and CRM integrations connecting your tools",
    ],
    metrics: {
      primary: "Centralized",
      primaryLabel: "Inquiry Organization",
      secondary: "Direct",
      secondaryLabel: "Team Notification",
    },
    badgeFloatTop: "Organized Intake",
    badgeFloatBottom: "Instant Email & Notification Dispatch",
    path: "/solutions/crm-lead-management",
    image: "/images/portfolio/aiCostomer.png",
    icon: <HubOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "03",
    badge: "INTERNAL TOOLS",
    title: "Internal Business Tools",
    subtitle: "Custom Business Software & Dashboards",
    headline: "Custom business software and operational dashboards that replace tangled spreadsheets.",
    narrative:
      "Running day-to-day operations on fragile, disconnected spreadsheets leads to lost records and manual mistakes. We build custom software, management dashboards, and workflow tools tailored precisely to how your business operates.",
    capabilities: [
      "Custom operational dashboards and management reporting tools",
      "Job scheduling, field dispatch, and mobile task coordination",
      "Standardized quote builders, proposal generators, and invoicing tools",
      "Secure database architecture replacing fragile, shared spreadsheets",
    ],
    metrics: {
      primary: "Tailored",
      primaryLabel: "Built to Your Workflow",
      secondary: "Reliable",
      secondaryLabel: "Structured Data",
    },
    badgeFloatTop: "Structured Database",
    badgeFloatBottom: "Custom Workflows & Role-Based Access",
    path: "/solutions/custom-business-software",
    image: "/images/portfolio/fintechDashboard.png",
    icon: <PrecisionManufacturingOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "04",
    badge: "PRACTICAL AUTOMATION",
    title: "Practical AI & Automation",
    subtitle: "Workflow Automation & Smart Document Processing",
    headline: "Practical AI development and automated workflows that eliminate repetitive admin work.",
    narrative:
      "We build custom AI applications and business process automation strictly where repetitive administrative tasks waste real hours — such as extracting structured data from documents, routing customer inquiries, or connecting separate software tools with human oversight.",
    capabilities: [
      "Automated document intake and data extraction into structured records",
      "Inbound inquiry classification and automatic team routing",
      "Human review checkpoints ensuring complete accuracy before actions are taken",
      "Reliable API and webhook integrations connecting your software systems",
    ],
    metrics: {
      primary: "Focused",
      primaryLabel: "Practical Application",
      secondary: "Supervised",
      secondaryLabel: "Human-in-the-Loop",
    },
    badgeFloatTop: "Human Review Guard",
    badgeFloatBottom: "Automated Extraction with Manual Verification",
    path: "/solutions/ai-automation",
    image: "/images/portfolio/aiInvoice.png",
    icon: <PsychologyOutlinedIcon sx={{ fontSize: 20 }} />,
  },
];

export default function SolutionAreasSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current = zones[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % zones.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + zones.length) % zones.length);
  };

  return (
    <Box
      component="section"
      id="solutions-overview"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: { xs: "100%", lg: "84%" } }}>
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
                What We Build
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
              Software and digital systems{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                built for practical business needs.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.75,
                maxWidth: 780,
                fontWeight: 400,
              }}
            >
              We don&apos;t force your business into rigid templates. From custom web development and business software to mobile apps and practical AI automation, we build digital solutions tailored to how your team actually works.
            </Typography>
          </Box>
        </motion.div>

        {/* Top Control Rail: Real-time Synchronized Domain Pills + Next/Prev Arrows */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            mb: 4,
          }}
        >
          {/* Domain Pills with Fluid Synchronized Spring Bubble */}
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
            }}
          >
            {zones.map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <Box
                  key={item.num}
                  onClick={() => setActiveIdx(idx)}
                  sx={{
                    position: "relative",
                    px: 2.6,
                    py: 1.2,
                    borderRadius: "9999px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    color: isSelected ? "#FFFFFF" : "#52525B",
                    transition: "color 0.2s ease",
                    zIndex: 1,
                  }}
                >
                  {/* Synchronized Spring Gliding Indicator */}
                  {isSelected && (
                    <Box
                      component={motion.div}
                      layoutId="activeDomainPillIndicator"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "9999px",
                        bgcolor: "#18181B",
                        boxShadow: "0 8px 22px -4px rgba(24, 24, 27, 0.35)",
                        zIndex: -1,
                      }}
                    />
                  )}

                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: isSelected ? "#FB923C" : "#A1A1AA",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.num}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* Navigation Arrows */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <IconButton
              onClick={handlePrev}
              aria-label="Previous domain"
              sx={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                bgcolor: "#FFFFFF",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                color: "#18181B",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
                "&:hover": {
                  borderColor: "#EA580C",
                  color: "#EA580C",
                  bgcolor: "rgba(249, 115, 22, 0.05)",
                  transform: "translateX(-2px)",
                },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
            </IconButton>

            <IconButton
              onClick={handleNext}
              aria-label="Next domain"
              sx={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                bgcolor: "#FFFFFF",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                color: "#18181B",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
                "&:hover": {
                  borderColor: "#EA580C",
                  color: "#EA580C",
                  bgcolor: "rgba(249, 115, 22, 0.05)",
                  transform: "translateX(2px)",
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Panoramic Cinematic Showcase Stage with 3D Depth & Optical Aperture Reveal */}
        <Box
          sx={{
            borderRadius: { xs: "24px", md: "32px" },
            bgcolor: "#111218",
            backgroundImage: `radial-gradient(ellipse at ${60 + activeIdx * 10}% 25%, rgba(234, 88, 12, 0.2) 0%, transparent 65%)`,
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 30px 80px -20px rgba(0, 0, 0, 0.45)",
            overflow: "hidden",
            position: "relative",
            perspective: 1400,
            transition: "background-image 0.5s ease",
          }}
        >
          <Box
            key={activeIdx}
            sx={{ padding: "clamp(28px, 5vw, 52px)" }}
          >
            <Grid container spacing={{ xs: 5, lg: 7 }} sx={{ alignItems: "center" }}>
              {/* Left Column: Cascading Optical Stagger Animation */}
              <Grid size={{ xs: 12, lg: 6 }}>
                {/* Zone Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                      px: 1.6,
                      py: 0.4,
                      borderRadius: "8px",
                      bgcolor: "rgba(234, 88, 12, 0.15)",
                      border: "1px solid rgba(234, 88, 12, 0.3)",
                      mb: 2.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#FB923C",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {current.badge}
                    </Typography>
                  </Box>
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.85rem", sm: "2.35rem", md: "2.75rem" },
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: 1.2,
                      letterSpacing: "-0.03em",
                      mb: 2,
                    }}
                  >
                    {current.title}
                  </Typography>
                </motion.div>

                {/* Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1.05rem", sm: "1.18rem" },
                      fontWeight: 500,
                      color: "#FB923C",
                      lineHeight: 1.45,
                      mb: 2.5,
                    }}
                  >
                    {current.headline}
                  </Typography>
                </motion.div>

                {/* Narrative */}
                <motion.div
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.42, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.95rem", md: "1.02rem" },
                      color: "#A1A1AA",
                      lineHeight: 1.75,
                      mb: 3.5,
                    }}
                  >
                    {current.narrative}
                  </Typography>
                </motion.div>

                {/* 4 Capabilities Clean Checklist */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4.5 }}>
                    {current.capabilities.map((cap, cIdx) => (
                      <Box key={cIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                        <CheckCircleOutlinedIcon
                          sx={{ fontSize: 18, color: "#EA580C", mt: 0.25, flexShrink: 0 }}
                        />
                        <Typography
                          sx={{
                            fontSize: "0.925rem",
                            color: "#E4E4E7",
                            fontWeight: 500,
                            lineHeight: 1.5,
                          }}
                        >
                          {cap}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </motion.div>

                {/* Metrics Strip + Primary Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 4,
                      pt: 2,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <Link href={current.path} style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                        sx={{
                          background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                          color: "#FFFFFF",
                          px: 3.8,
                          py: 1.45,
                          fontSize: "0.925rem",
                          fontWeight: 600,
                          borderRadius: "9999px",
                          boxShadow: "0 10px 24px rgba(234, 88, 12, 0.35)",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                            boxShadow: "0 14px 30px rgba(234, 88, 12, 0.45)",
                            transform: "translateY(-1px)",
                          },
                        }}
                      >
                        Explore {current.title}
                      </Button>
                    </Link>

                    {/* Verified Metrics */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 3.5 }}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "1.45rem", sm: "1.75rem" },
                            fontWeight: 700,
                            color: "#FFFFFF",
                            lineHeight: 1,
                          }}
                        >
                          {current.metrics.primary}
                        </Typography>
                        <Typography sx={{ fontSize: "0.75rem", color: "#A1A1AA", mt: 0.4 }}>
                          {current.metrics.primaryLabel}
                        </Typography>
                      </Box>

                      <Box sx={{ width: 1, height: 32, bgcolor: "rgba(255, 255, 255, 0.15)" }} />

                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "1.45rem", sm: "1.75rem" },
                            fontWeight: 700,
                            color: "#FB923C",
                            lineHeight: 1,
                          }}
                        >
                          {current.metrics.secondary}
                        </Typography>
                        <Typography sx={{ fontSize: "0.75rem", color: "#A1A1AA", mt: 0.4 }}>
                          {current.metrics.secondaryLabel}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>

              {/* Right Column: 3D Perspective Device Reveal with Scale & Depth Rotation */}
              <Grid size={{ xs: 12, lg: 6 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, rotateY: 10, x: 25, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.52, ease: [0.19, 1, 0.22, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "22px",
                      bgcolor: "rgba(24, 24, 27, 0.8)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.6)",
                      overflow: "hidden",
                    }}
                  >
                    {/* Browser Frame Chrome */}
                    <Box
                      sx={{
                        px: 2.5,
                        py: 1.5,
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                        bgcolor: "rgba(255, 255, 255, 0.03)",
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
                          gap: 1,
                          px: 2,
                          py: 0.4,
                          borderRadius: "6px",
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                        }}
                      >
                        <LockOutlinedIcon sx={{ fontSize: 12, color: "#22C55E" }} />
                        <Typography sx={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#A1A1AA" }}>
                          aetibar.com/{current.path.replace("/solutions/", "")}
                        </Typography>
                      </Box>

                      <Box sx={{ width: 40 }} />
                    </Box>

                    {/* Screenshot Preview Image */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 290, sm: 380, md: 450 },
                        bgcolor: "#000000",
                      }}
                    >
                      <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        sizes="(max-width: 1200px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                        priority
                      />

                      {/* Floating Top Telemetry Badge with Pulse */}
                      <Box
                        component={motion.div}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
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
                        {current.badgeFloatTop}
                      </Box>

                      {/* Floating Bottom Telemetry Badge */}
                      <Box
                        component={motion.div}
                        animate={{ y: [0, 2, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                        sx={{
                          position: "absolute",
                          bottom: 16,
                          left: 16,
                          right: 16,
                          p: 1.8,
                          borderRadius: "14px",
                          bgcolor: "rgba(24, 24, 27, 0.85)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255, 255, 255, 0.15)",
                          color: "#FFFFFF",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.825rem",
                            fontWeight: 500,
                            lineHeight: 1.4,
                          }}
                          dangerouslySetInnerHTML={{ __html: current.badgeFloatBottom }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
