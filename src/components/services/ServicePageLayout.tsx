"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { motion } from "framer-motion";
import { WorkProject } from "../../data/workData";
import HomeScrollProgress from "../home/HomeScrollProgress";

export interface ServicePageProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  heroHighlights?: {
    value: string;
    title: string;
    desc: string;
  }[];
  whoIsItFor: {
    title: string;
    desc: string;
  }[];
  problemsAddressed: {
    problem: string;
    howWeHelp: string;
  }[];
  deliverables: {
    title: string;
    desc: string;
    items?: string[];
  }[];
  benefits: {
    title: string;
    desc: string;
  }[];
  processSteps: {
    num: string;
    title: string;
    desc: string;
  }[];
  relevantProjects?: WorkProject[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaTitle?: string;
  ctaTitleHighlight?: string;
  ctaDescription?: string;
}

export default function ServicePageLayout({
  badge,
  title,
  titleHighlight,
  tagline,
  description,
  icon,
  heroHighlights,
  whoIsItFor,
  problemsAddressed,
  deliverables,
  benefits,
  processSteps,
  relevantProjects = [],
  faqs,
  ctaTitle = "Ready to Upgrade Your Business?",
  ctaTitleHighlight = "Attract More Customers",
  ctaDescription = "Whether you want to build from scratch or revamp your current setup, we'll give you honest guidance, clear timelines, and fixed pricing without high-pressure sales.",
}: ServicePageProps) {
  const defaultHighlights = [
    {
      value: "Fixed",
      title: "Clear Upfront Pricing",
      desc: "No hidden surprises. We agree on deliverables, milestones, and price before any work starts.",
      icon: <VerifiedOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
    },
    {
      value: "< 1s",
      title: "Ultra-Fast on Phones",
      desc: "Pages load in a fraction of a second on smartphones so impatient customers never leave.",
      icon: <SpeedOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
    },
    {
      value: "100%",
      title: "Full Code Ownership",
      desc: "You own all code, domains, logins, and accounts completely with zero proprietary lock-in.",
      icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
    },
    {
      value: "Direct",
      title: "WhatsApp & Call Leads",
      desc: "New inquiries land directly on your phone and email in seconds so you never miss a sale.",
      icon: <PhoneInTalkOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
    },
  ];

  const highlights = heroHighlights && heroHighlights.length > 0
    ? heroHighlights.map((h, i) => ({
        ...h,
        icon: defaultHighlights[i % defaultHighlights.length].icon,
      }))
    : defaultHighlights;

  return (
    <Box sx={{ bgcolor: "#FFFFFF", color: "#18181B", minHeight: "100vh", overflowX: "hidden" }}>
      {/* High-Performance Sunset Scroll Progress Bar */}
      <HomeScrollProgress />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 15, sm: 18, md: 21 },
          pb: { xs: 10, md: 14 },
          background:
            "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.09) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
          overflow: "hidden",
        }}
      >
        {/* Ambient Warm Glowing Background Orbs */}
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          sx={{
            position: "absolute",
            top: "-12%",
            right: "-6%",
            width: "520px",
            height: "520px",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.16) 0%, transparent 70%)",
            filter: "blur(75px)",
            pointerEvents: "none",
          }}
        />
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
          sx={{
            position: "absolute",
            top: "20%",
            left: "-10%",
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(251, 146, 60, 0.14) 0%, transparent 70%)",
            filter: "blur(75px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          {/* Back Navigation Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ mb: 3.5, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Link
                href="/services"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#52525B",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  padding: "6px 14px",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(24, 24, 27, 0.03)",
                  border: "1px solid rgba(24, 24, 27, 0.08)",
                  transition: "all 0.2s ease",
                }}
              >
                <ArrowBackIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                <span>All Digital Services</span>
              </Link>
            </Box>
          </motion.div>

          <Box
            sx={{
              maxWidth: "960px",
              mx: "auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: { xs: 6, md: 8 },
            }}
          >
            {/* Status Pill Badge with Pulsing Orange Dot */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: { xs: 2, sm: 2.4 },
                  py: 0.7,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                  backdropFilter: "blur(12px)",
                  mb: 3,
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
                  }}
                />
                <Box sx={{ display: "flex", alignItems: "center", color: "#EA580C" }}>{icon}</Box>
                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.825rem" },
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#EA580C",
                    textTransform: "uppercase",
                  }}
                >
                  {badge}
                </Typography>
              </Box>
            </motion.div>

            {/* Main Headline H1 with Sunset Gradient Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.65rem", sm: "2.25rem", md: "2.85rem", lg: "3.25rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, sm: 1.2, md: 1.18 },
                  letterSpacing: { xs: "-0.02em", md: "-0.035em" },
                  maxWidth: { xs: "100%", md: 1040, lg: 1160 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2.5,
                }}
              >
                {title}{" "}
                {titleHighlight && (
                  <Box
                    component="span"
                    sx={{
                      display: "inline",
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {titleHighlight}
                  </Box>
                )}
              </Typography>
            </motion.div>

            {/* Clear Spoken English Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.25rem" },
                  fontWeight: 600,
                  color: "#EA580C",
                  lineHeight: 1.5,
                  mb: 2,
                  maxWidth: 780,
                  mx: "auto",
                }}
              >
                {tagline}
              </Typography>
            </motion.div>

            {/* Friendly, Jargon-Free Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.125rem", md: "1.18rem" },
                  lineHeight: 1.8,
                  color: "#52525B",
                  maxWidth: 820,
                  mx: "auto",
                  mb: 4.5,
                  fontWeight: 400,
                }}
              >
                {description}
              </Typography>
            </motion.div>

            {/* Primary & Secondary Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
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
                  <Link href="#deliverables" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#18181B",
                        borderColor: "rgba(24, 24, 27, 0.2)",
                        bgcolor: "rgba(255, 255, 255, 0.9)",
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
                      What&apos;s Included
                    </Button>
                  </Link>
                </motion.div>
              </Box>
            </motion.div>

            {/* Sub-CTA Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
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
                  "100% Code & Asset Ownership",
                  "Fixed Price & No Hidden Charges",
                  "Direct Access to Dedicated Builders",
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

          {/* 4-Item Executive Trust & Performance Strip */}
          <Box sx={{ mt: { xs: 5, md: 7 } }}>
            <Grid container spacing={2.5}>
              {highlights.map((item, idx) => (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.55 + idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        p: 2.8,
                        borderRadius: "20px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        boxShadow: "0 2px 10px rgba(24, 24, 27, 0.02)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          borderColor: "rgba(234, 88, 12, 0.4)",
                          transform: "translateY(-4px)",
                          boxShadow: "0 18px 36px -12px rgba(234, 88, 12, 0.14)",
                        },
                      }}
                    >
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.5 }}>
                          <Typography
                            sx={{
                              fontSize: "1.65rem",
                              fontWeight: 800,
                              color: "#EA580C",
                              letterSpacing: "-0.03em",
                              fontFamily: "monospace",
                            }}
                          >
                            {item.value}
                          </Typography>
                          <Box
                            sx={{
                              width: 34,
                              height: 34,
                              borderRadius: "10px",
                              bgcolor: "rgba(249, 115, 22, 0.08)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {item.icon}
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
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            color: "#52525B",
                            lineHeight: 1.6,
                          }}
                        >
                          {item.desc}
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

      {/* ========================================================================= */}
      {/* 2. WHO THIS IS FOR (IS THIS RIGHT FOR YOU?) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="who-it-is-for"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FAFAFA",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }}
                />
                <Typography
                  sx={{
                    color: "#EA580C",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  WHO IS THIS FOR?
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, md: 1.18 },
                  letterSpacing: "-0.03em",
                  maxWidth: { xs: "100%", md: 980, lg: 1100 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2,
                }}
              >
                Is This the Right Fit for Your Business?
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: { xs: "1rem", sm: "1.125rem" }, lineHeight: 1.75, maxWidth: 740, mx: "auto" }}>
                You don&apos;t need to be a technical expert. We work directly with everyday business owners, managers, and founders who want real results.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3.5} sx={{ justifyContent: "center" }}>
            {whoIsItFor.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      p: 3.5,
                      bgcolor: "#FFFFFF",
                      borderRadius: "20px",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: "linear-gradient(90deg, #EA580C, #F97316, #FB923C)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(234, 88, 12, 0.4)",
                        boxShadow: "0 18px 36px -10px rgba(234, 88, 12, 0.16)",
                        "&::before": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: "12px",
                        bgcolor: "rgba(249, 115, 22, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                      }}
                    >
                      <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 22 }} />
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#18181B", mb: 1.2 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#52525B", fontSize: "0.925rem", lineHeight: 1.65 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 3. BUSINESS PROBLEMS IT HELPS ADDRESS (HEADACHE VS FIX) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="problems"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }}
                />
                <Typography
                  sx={{
                    color: "#EA580C",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  THE HEADACHE VS THE FIX
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, md: 1.18 },
                  letterSpacing: "-0.03em",
                  maxWidth: { xs: "100%", md: 980, lg: 1100 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2,
                }}
              >
                Real Problems We Solve for You
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: { xs: "1rem", sm: "1.125rem" }, lineHeight: 1.75, maxWidth: 740, mx: "auto" }}>
                Here are the most common bottlenecks stopping businesses from growing online—and exactly how we make them easy.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3.5} sx={{ justifyContent: "center" }}>
            {problemsAddressed.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      p: { xs: 3.5, sm: 4 },
                      bgcolor: "#FFFFFF",
                      borderRadius: "20px",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      boxShadow: "0 2px 12px rgba(24, 24, 27, 0.03)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "rgba(234, 88, 12, 0.35)",
                        boxShadow: "0 20px 40px -12px rgba(234, 88, 12, 0.12)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.8,
                          px: 1.4,
                          py: 0.4,
                          borderRadius: "6px",
                          bgcolor: "rgba(239, 68, 68, 0.08)",
                          color: "#DC2626",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          mb: 1.5,
                        }}
                      >
                        The Problem
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{ fontSize: "1.18rem", fontWeight: 700, color: "#18181B", lineHeight: 1.4 }}
                      >
                        {item.problem}
                      </Typography>
                    </Box>

                    <Box sx={{ pt: 2.5, borderTop: "1px dashed rgba(24, 24, 27, 0.1)" }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.8,
                          px: 1.4,
                          py: 0.4,
                          borderRadius: "6px",
                          bgcolor: "rgba(22, 163, 74, 0.08)",
                          color: "#16A34A",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          mb: 1.2,
                        }}
                      >
                        How We Fix It
                      </Box>
                      <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.75 }}>
                        {item.howWeHelp}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 4. SPECIFIC SERVICES & DELIVERABLES (WHAT YOU GET) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="deliverables"
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: "#FAFAFA",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }}
                />
                <Typography
                  sx={{
                    color: "#EA580C",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  WHAT&apos;S INCLUDED
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, md: 1.18 },
                  letterSpacing: "-0.03em",
                  maxWidth: { xs: "100%", md: 980, lg: 1100 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2,
                }}
              >
                Everything Included in Our Service
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: { xs: "1rem", sm: "1.125rem" }, lineHeight: 1.75, maxWidth: 740, mx: "auto" }}>
                Clear, practical deliverables built around your business goals. No confusing technical speak, and no hidden surprises.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3.5} sx={{ justifyContent: "center" }}>
            {deliverables.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      p: { xs: 3.5, sm: 4 },
                      bgcolor: "#FFFFFF",
                      borderRadius: "20px",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: "linear-gradient(90deg, #EA580C, #F97316, #FB923C)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                      },
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(234, 88, 12, 0.4)",
                        boxShadow: "0 20px 40px -12px rgba(234, 88, 12, 0.16)",
                        "&::before": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ fontSize: "1.22rem", fontWeight: 700, color: "#18181B", mb: 1.5, lineHeight: 1.35 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#52525B", fontSize: "0.925rem", lineHeight: 1.7, mb: 3 }}>
                      {item.desc}
                    </Typography>

                    {item.items && item.items.length > 0 && (
                      <Box sx={{ mt: "auto", pt: 2.5, borderTop: "1px solid rgba(24, 24, 27, 0.06)" }}>
                        {item.items.map((subItem, i) => (
                          <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2, mb: 1.2 }}>
                            <CheckCircleOutlinedIcon sx={{ fontSize: 17, color: "#EA580C", mt: 0.3, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: "0.875rem", color: "#3F3F46", fontWeight: 500, lineHeight: 1.5 }}>
                              {subItem}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 5. BUSINESS BENEFITS, EXPLAINED REALISTICALLY (WHY THIS HELPS YOU GROW) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="benefits"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }}
                />
                <Typography
                  sx={{
                    color: "#EA580C",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  REAL RESULTS
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, md: 1.18 },
                  letterSpacing: "-0.03em",
                  maxWidth: { xs: "100%", md: 980, lg: 1100 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2,
                }}
              >
                How This Helps Your Business Grow &amp; Make Money
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: { xs: "1rem", sm: "1.125rem" }, lineHeight: 1.75, maxWidth: 740, mx: "auto" }}>
                No exaggerated gimmicks. Just honest, practical business advantages that save you time and bring in more paying clients.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={3.5} sx={{ justifyContent: "center" }}>
            {benefits.map((benefit, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      p: { xs: 3.5, sm: 4 },
                      bgcolor: "#FFFFFF",
                      borderRadius: "20px",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
                      height: "100%",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "rgba(234, 88, 12, 0.4)",
                        boxShadow: "0 18px 36px -10px rgba(234, 88, 12, 0.14)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                      <Box
                        sx={{
                          width: 36,
                          height: 36,
                          borderRadius: "10px",
                          bgcolor: "rgba(249, 115, 22, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <VerifiedOutlinedIcon sx={{ color: "#EA580C", fontSize: 20 }} />
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{ fontSize: "1.2rem", fontWeight: 700, color: "#18181B" }}
                      >
                        {benefit.title}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.75, pl: { sm: 6 } }}>
                      {benefit.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 6. SIMPLE PROCESS (HOW WE WORK TOGETHER) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="process"
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: "#FAFAFA",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }}
                />
                <Typography
                  sx={{
                    color: "#EA580C",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  HOW WE WORK
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, md: 1.18 },
                  letterSpacing: "-0.03em",
                  maxWidth: { xs: "100%", md: 980, lg: 1100 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2,
                }}
              >
                How We Work Together (In 5 Simple Steps)
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: { xs: "1rem", sm: "1.125rem" }, lineHeight: 1.75, maxWidth: 740, mx: "auto" }}>
                Direct communication, zero confusing technical jargon, and complete visibility from day one to launch.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={2.5}>
            {processSteps.map((step, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                      p: 3.2,
                      bgcolor: "#FFFFFF",
                      borderRadius: "20px",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "rgba(234, 88, 12, 0.4)",
                        boxShadow: "0 18px 36px -12px rgba(234, 88, 12, 0.14)",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "1.75rem",
                        fontWeight: 800,
                        color: "#EA580C",
                        mb: 1.5,
                      }}
                    >
                      {step.num}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ fontSize: "1.08rem", fontWeight: 700, color: "#18181B", mb: 1.2 }}
                    >
                      {step.title}
                    </Typography>
                    <Typography sx={{ color: "#52525B", fontSize: "0.875rem", lineHeight: 1.65 }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 7. RELEVANT EXISTING PROJECTS (REAL EXAMPLES & WORK) */}
      {/* ========================================================================= */}
      {relevantProjects.length > 0 && (
        <Box
          component="section"
          id="projects"
          sx={{
            py: { xs: 10, md: 15 },
            bgcolor: "#FFFFFF",
            borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                    animate={{ scale: [1, 1.35, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }}
                  />
                  <Typography
                    sx={{
                      color: "#EA580C",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    REAL WORK &amp; EXAMPLES
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                    fontWeight: 600,
                    color: "#18181B",
                    lineHeight: { xs: 1.25, md: 1.18 },
                    letterSpacing: "-0.03em",
                    maxWidth: { xs: "100%", md: 980, lg: 1100 },
                    mx: "auto",
                    textWrap: "balance",
                    mb: 2,
                  }}
                >
                  See What We&apos;ve Built
                </Typography>
                <Typography sx={{ color: "#52525B", fontSize: { xs: "1rem", sm: "1.125rem" }, lineHeight: 1.75, maxWidth: 740, mx: "auto" }}>
                  Real systems and websites we have built that solve problems and drive commercial growth.
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={3.5}>
              {relevantProjects.map((project, idx) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.slug}>
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.75, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#FFFFFF",
                        borderRadius: "20px",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        overflow: "hidden",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
                        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          borderColor: "rgba(234, 88, 12, 0.4)",
                          boxShadow: "0 20px 40px -12px rgba(234, 88, 12, 0.18)",
                        },
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: 220,
                            bgcolor: "#18181B",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                          <Box sx={{ position: "absolute", top: 14, right: 14 }}>
                            <Chip
                              label={project.projectType}
                              size="small"
                              sx={{
                                bgcolor:
                                  project.projectType === "Production Build"
                                    ? "#16A34A"
                                    : "#EA580C",
                                color: "#FFFFFF",
                                fontWeight: 700,
                                fontSize: "0.72rem",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                              }}
                            />
                          </Box>
                        </Box>

                        <Box sx={{ p: 3.5 }}>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#EA580C",
                              fontWeight: 700,
                              fontSize: "0.75rem",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              display: "block",
                              mb: 0.8,
                            }}
                          >
                            {project.clientType}
                          </Typography>
                          <Typography
                            variant="h3"
                            sx={{ fontSize: "1.2rem", fontWeight: 700, color: "#18181B", mb: 1.2, lineHeight: 1.35 }}
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            sx={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.65, mb: 2.5 }}
                          >
                            {project.summary}
                          </Typography>

                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                            {project.technology.slice(0, 3).map((tech, i) => (
                              <Typography
                                key={i}
                                variant="caption"
                                sx={{
                                  px: 1.2,
                                  py: 0.4,
                                  borderRadius: "6px",
                                  bgcolor: "rgba(24, 24, 27, 0.04)",
                                  color: "#52525B",
                                  fontSize: "0.75rem",
                                  fontWeight: 600,
                                }}
                              >
                                {tech}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      </Box>

                      <Box sx={{ px: 3.5, pb: 3.5 }}>
                        <Link href={`/work/${project.slug}`} style={{ textDecoration: "none" }}>
                          <Button
                            variant="text"
                            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                            sx={{
                              p: 0,
                              color: "#18181B",
                              fontWeight: 700,
                              fontSize: "0.9rem",
                              textTransform: "none",
                              "&:hover": {
                                color: "#EA580C",
                                bgcolor: "transparent",
                              },
                            }}
                          >
                            Read Case Study
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* View All Case Studies Button */}
            <Box sx={{ mt: { xs: 5, md: 7 }, textAlign: "center" }}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-block" }}>
                <Link href="/work" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      color: "#18181B",
                      borderColor: "rgba(24, 24, 27, 0.2)",
                      bgcolor: "#FFFFFF",
                      borderRadius: "9999px",
                      px: 4,
                      py: 1.4,
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#EA580C",
                        color: "#EA580C",
                        bgcolor: "rgba(249, 115, 22, 0.04)",
                      },
                    }}
                  >
                    View All Projects &amp; Case Studies
                  </Button>
                </Link>
              </motion.div>
            </Box>
          </Container>
        </Box>
      )}

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="faqs"
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: "#FAFAFA",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ maxWidth: 840, mx: "auto", mb: { xs: 6, md: 8 }, textAlign: "center" }}>
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
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }}
                />
                <Typography
                  sx={{
                    color: "#EA580C",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  GOT QUESTIONS?
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, md: 1.18 },
                  letterSpacing: "-0.03em",
                  maxWidth: { xs: "100%", md: 980, lg: 1100 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2,
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: { xs: "1rem", sm: "1.125rem" }, lineHeight: 1.75 }}>
                Direct, honest answers to the common questions business owners ask before starting.
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ maxWidth: 860, mx: "auto" }}>
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Accordion
                  elevation={0}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(24, 24, 27, 0.08)",
                    borderRadius: "16px !important",
                    mb: 2,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.015)",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    "&:before": { display: "none" },
                    "&:hover": {
                      borderColor: "rgba(234, 88, 12, 0.35)",
                      boxShadow: "0 6px 18px rgba(234, 88, 12, 0.06)",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#EA580C" }} />}
                    sx={{ px: { xs: 2.5, sm: 3.5 }, py: 1.2 }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: "1.05rem", color: "#18181B" }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: { xs: 2.5, sm: 3.5 }, pb: 3, pt: 0 }}>
                    <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "0.95rem" }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 9. HIGH-CONVERTING FINAL CTA (MATCHING HOME PAGE) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        id="contact-cta"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FFFFFF",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                maxWidth: 1040,
                mx: "auto",
                textAlign: "center",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                p: { xs: 3.5, sm: 6, md: 9 },
                background: "linear-gradient(145deg, #18181B 0%, #0F0E0E 60%, #201A18 100%)",
                borderRadius: { xs: "24px", md: "36px" },
                boxShadow: "0 30px 80px -20px rgba(24, 24, 27, 0.5)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Warm Ambient Glowing Orbs with Pulse Animation */}
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                sx={{
                  position: "absolute",
                  top: "-20%",
                  right: "-10%",
                  width: "440px",
                  height: "440px",
                  background: "radial-gradient(circle, rgba(249, 115, 22, 0.32) 0%, transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                sx={{
                  position: "absolute",
                  bottom: "-20%",
                  left: "-10%",
                  width: "440px",
                  height: "440px",
                  background: "radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                {/* Warm Sunset Status Pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1.2,
                      px: 2.2,
                      py: 0.6,
                      borderRadius: "9999px",
                      bgcolor: "rgba(249, 115, 22, 0.2)",
                      border: "1px solid rgba(251, 146, 60, 0.4)",
                      mb: 3.5,
                    }}
                  >
                    <Box
                      component={motion.div}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#FB923C", boxShadow: "0 0 10px #FB923C" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#FB923C",
                        fontWeight: 700,
                      }}
                    >
                      LET&apos;S GROW YOUR BUSINESS &bull; FREE 30-MIN CONSULTATION
                    </Typography>
                  </Box>
                </motion.div>

                {/* Big Headline with Sunset Gradient Text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "1.65rem", sm: "2.25rem", md: "2.85rem", lg: "3.25rem" },
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: { xs: 1.25, md: 1.18 },
                      letterSpacing: "-0.035em",
                      maxWidth: { xs: "100%", md: 980, lg: 1100 },
                      mx: "auto",
                      textWrap: "balance",
                      mb: 3,
                    }}
                  >
                    {ctaTitle}{" "}
                    {ctaTitleHighlight && (
                      <Box
                        component="span"
                        sx={{
                          display: "inline",
                          background: "linear-gradient(135deg, #F97316 0%, #FB923C 60%, #FED7AA 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {ctaTitleHighlight}
                      </Box>
                    )}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.95rem", md: "1.18rem" },
                      color: "rgba(255, 255, 255, 0.82)",
                      lineHeight: 1.75,
                      maxWidth: 760,
                      mx: "auto",
                      mb: 4.5,
                      fontWeight: 400,
                    }}
                  >
                    {ctaDescription}
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      flexWrap: "wrap",
                      gap: 2,
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 5,
                      width: "100%",
                    }}
                  >
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      sx={{ width: { xs: "100%", sm: "auto" } }}
                    >
                      <Link href="/contact" style={{ textDecoration: "none", width: "100%", display: "block" }}>
                        <Button
                          variant="contained"
                          fullWidth
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                          sx={{
                            background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
                            color: "#18181B",
                            px: { xs: 3, sm: 4.5 },
                            py: 1.6,
                            fontSize: "0.95rem",
                            fontWeight: 800,
                            borderRadius: "9999px",
                            boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)",
                            transition: "all 0.25s ease",
                            width: { xs: "100%", sm: "auto" },
                            "&:hover": {
                              background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                              color: "#FFFFFF",
                              boxShadow: "0 15px 30px rgba(234, 88, 12, 0.5)",
                            },
                          }}
                        >
                          Book a Free Consultation
                        </Button>
                      </Link>
                    </Box>

                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      sx={{ width: { xs: "100%", sm: "auto" } }}
                    >
                      <Link href="/work" style={{ textDecoration: "none", width: "100%", display: "block" }}>
                        <Button
                          variant="outlined"
                          fullWidth
                          sx={{
                            color: "#FFFFFF",
                            borderColor: "rgba(255, 255, 255, 0.3)",
                            bgcolor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(10px)",
                            px: { xs: 3, sm: 4 },
                            py: 1.55,
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            borderRadius: "9999px",
                            transition: "all 0.25s ease",
                            width: { xs: "100%", sm: "auto" },
                            "&:hover": {
                              borderColor: "#FB923C",
                              color: "#FB923C",
                              bgcolor: "rgba(249, 115, 22, 0.12)",
                            },
                          }}
                        >
                          Explore Our Work
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </motion.div>

                {/* Bottom Trust Badges with Checkmarks */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Box
                    sx={{
                      pt: 3.5,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: { xs: 2, sm: 4 },
                    }}
                  >
                    {[
                      "Free 30-Minute Strategy Session",
                      "100% Code & Domain Ownership",
                      "Direct WhatsApp & Phone Support",
                    ].map((badgeText, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#FB923C" }} />
                        <Typography sx={{ fontSize: "0.825rem", color: "rgba(255, 255, 255, 0.82)", fontWeight: 500 }}>
                          {badgeText}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
