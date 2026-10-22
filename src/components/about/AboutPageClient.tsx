"use client";
import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AdsClickRoundedIcon from "@mui/icons-material/AdsClickRounded";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from "framer-motion";

const studioPrinciples = [
  {
    num: "01",
    tag: "PRACTICAL ADVICE",
    title: "We Recommend What You Actually Need",
    headline: "We understand your business before recommending a service.",
    narrative:
      "We focus on what makes sense for your goals, customers, and current setup—without unnecessary complexity.",
    icon: TerminalRoundedIcon,
    metric: "Advice Based on Your Needs",
  },
  {
    num: "02",
    tag: "TRUST & ACCESS",
    title: "You Stay in Control",
    headline: "Your business should have clear access to its digital assets.",
    narrative:
      "We provide the agreed account access, files, and digital assets as part of the project handover.",
    icon: LockOutlinedIcon,
    metric: "Clear Access & Handover",
  },
  {
    num: "03",
    tag: "DIRECT COMMUNICATION",
    title: "We Keep Communication Simple",
    headline: "Clear communication without unnecessary layers.",
    narrative:
      "Share your requirements, questions, and feedback directly with the relevant people working on your project.",
    icon: EngineeringOutlinedIcon,
    metric: "Direct Project Communication",
  },
  {
    num: "04",
    tag: "TRANSPARENCY",
    title: "We Keep You Informed",
    headline: "Know what is happening throughout the work.",
    narrative:
      "We share relevant progress, discuss important decisions, and provide opportunities for feedback.",
    icon: SpeedRoundedIcon,
    metric: "Regular Progress Updates",
  },
  {
    num: "05",
    tag: "BUSINESS OUTCOMES",
    title: "We Focus on What Matters",
    headline: "Every service should have a clear purpose.",
    narrative:
      "We focus on work that supports your business goals, customers, and everyday needs.",
    icon: TrendingUpRoundedIcon,
    metric: "Focused on Business Outcomes",
  },
  {
    num: "06",
    tag: "LONG-TERM SUPPORT",
    title: "We Support You Beyond Delivery",
    headline: "Your digital needs can continue to evolve.",
    narrative:
      "We can continue supporting your website, app, SEO, marketing, advertising, or automation as your business grows.",
    icon: ShieldRoundedIcon,
    metric: "Support Based on Your Needs",
  },
];

const fullServiceCapabilities = [
  {
    category: "WEB DEVELOPMENT",
    title: "Websites, Online Stores & Web Applications",
    desc: "Business websites, online stores, and custom web applications built around your needs.",
    icon: <LanguageRoundedIcon sx={{ fontSize: 22, color: "#3D765D" }} />,
  },
  {
    category: "MOBILE APP DEVELOPMENT",
    title: "Custom Android & iPhone Apps",
    desc: "Mobile apps for customers, bookings, ordering, field teams, and internal business needs.",
    icon: <PhoneIphoneRoundedIcon sx={{ fontSize: 22, color: "#3D765D" }} />,
  },
  {
    category: "SEARCH ENGINE OPTIMIZATION (SEO)",
    title: "SEO That Helps Customers Find You",
    desc: "Practical SEO focused on search visibility, useful content, and local search.",
    icon: <SearchRoundedIcon sx={{ fontSize: 22, color: "#3D765D" }} />,
  },
  {
    category: "PAID ADVERTISING",
    title: "Google & Meta Advertising",
    desc: "Targeted campaigns with controlled budgets, tracking, and ongoing optimization.",
    icon: <AdsClickRoundedIcon sx={{ fontSize: 22, color: "#3D765D" }} />,
  },
  {
    category: "SOCIAL MEDIA MARKETING",
    title: "Consistent Social Media Content",
    desc: "Content planning, branded visuals, captions, and publishing for your social presence.",
    icon: <PaletteOutlinedIcon sx={{ fontSize: 22, color: "#3D765D" }} />,
  },
  {
    category: "AI AUTOMATION",
    title: "Automation for Repetitive Work",
    desc: "Connect your tools and automate routine tasks, follow-ups, data handling, and workflows.",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 22, color: "#3D765D" }} />,
  },
];

export default function AboutPageClient() {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", overflow: "hidden" }}>
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (LEFT-ALIGNED, DARK PINE #183D35)                         */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, sm: 19, md: 22 },
          pb: { xs: 10, md: 15 },
          bgcolor: "#183D35",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(216, 229, 213, 0.15)",
        }}
      >
        {/* Subtle Ambient Glows */}
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          sx={{
            position: "absolute",
            top: "-15%",
            right: "-5%",
            width: "550px",
            height: "550px",
            background: "radial-gradient(circle, rgba(61, 118, 93, 0.3) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.28, 0.15] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
          sx={{
            position: "absolute",
            top: "20%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(216, 229, 213, 0.15) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 960, mb: { xs: 6, md: 8 } }}>
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.2,
                  py: 0.7,
                  borderRadius: "9999px",
                  bgcolor: "rgba(216, 229, 213, 0.12)",
                  border: "1px solid rgba(216, 229, 213, 0.28)",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.15)",
                  backdropFilter: "blur(12px)",
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
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#D8E5D5",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  ABOUT AETIBAR &bull; TRUSTED DIGITAL MARKETING AGENCY IN UDAIPUR
                </Typography>
              </Box>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.5rem", lg: "4.1rem" },
                  fontWeight: 400,
                  color: "#FFFFFF",
                  letterSpacing: "-0.025em",
                  lineHeight: { xs: 1.15, sm: 1.12, md: 1.1 },
                  maxWidth: { xs: "100%", md: 940 },
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                Websites, Apps &amp; Digital Marketing —{" "}
                <Box
                  component="span"
                  sx={{
                    fontStyle: "italic",
                    color: "#D8E5D5",
                    display: "inline",
                  }}
                >
                  Built on Trust to Grow Your Business.
                </Box>
              </Typography>
            </motion.div>

            {/* Narrative Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.75,
                  maxWidth: { xs: "100%", sm: 680, md: 780 },
                  mb: { xs: 3.5, md: 4.5 },
                  fontWeight: 400,
                }}
              >
                Looking for a dependable digital partner? Aetibar provides web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation—built around your business needs.
              </Typography>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", mb: 6 }}>
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />}
                      sx={{
                        py: 1.6,
                        px: 3.8,
                        borderRadius: "9999px",
                        bgcolor: "#D8E5D5",
                        color: "#183D35",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        textTransform: "none",
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.25)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          bgcolor: "#FFFFFF",
                          color: "#183D35",
                          boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.35)",
                        },
                      }}
                    >
                      Schedule a Free Consultation
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/work" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        py: 1.5,
                        px: 3.5,
                        borderRadius: "9999px",
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                        backdropFilter: "blur(10px)",
                        color: "#FFFFFF",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        textTransform: "none",
                        border: "1px solid rgba(216, 229, 213, 0.3)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          bgcolor: "rgba(216, 229, 213, 0.16)",
                          borderColor: "#D8E5D5",
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      Explore Our Work &amp; Case Studies
                    </Button>
                  </Link>
                </motion.div>
              </Box>
            </motion.div>
          </Box>

          {/* Visual Showcase Frame with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 1160,
                height: { xs: 260, sm: 380, md: 480 },
                borderRadius: { xs: "20px", md: "30px" },
                overflow: "hidden",
                border: "1px solid rgba(216, 229, 213, 0.2)",
                boxShadow: "0 24px 60px -15px rgba(0, 0, 0, 0.4)",
                mb: 6,
              }}
            >
              <Image
                src="/images/home/editorial-craft-operations.jpg"
                alt="Aetibar web development and digital marketing team in Udaipur helping businesses grow online"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "center center" }}
                sizes="(max-width: 1200px) 100vw, 1160px"
              />

              {/* Gradient Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(24, 61, 53, 0.82) 0%, rgba(24, 61, 53, 0.2) 50%, transparent 100%)",
                }}
              />

              {/* Bottom Left Coordinate Chip */}
              <Box
                component={motion.div}
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                sx={{
                  position: "absolute",
                  bottom: { xs: 16, sm: 24 },
                  left: { xs: 16, sm: 24 },
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  px: 1.8,
                  py: 0.8,
                  borderRadius: "12px",
                  bgcolor: "rgba(24, 61, 53, 0.92)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(216, 229, 213, 0.3)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                }}
              >
                <LocationOnOutlinedIcon sx={{ fontSize: 16, color: "#D8E5D5" }} />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: { xs: "0.7rem", sm: "0.78rem" },
                    color: "#FFFFFF",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                  }}
                >
                  UDAIPUR, RAJASTHAN &bull; SERVING CLIENTS ACROSS INDIA &amp; GLOBALLY
                </Typography>
              </Box>

              {/* Top Right Floating Talent Badge */}
              <Box
                component={motion.div}
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 0.5, ease: "easeInOut" }}
                sx={{
                  position: "absolute",
                  top: { xs: 14, sm: 20 },
                  right: { xs: 14, sm: 20 },
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  gap: 0.8,
                  px: 1.8,
                  py: 0.7,
                  borderRadius: "9999px",
                  bgcolor: "rgba(24, 61, 53, 0.92)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(216, 229, 213, 0.3)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                }}
              >
                <VerifiedRoundedIcon sx={{ fontSize: 16, color: "#D8E5D5" }} />
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "0.04em",
                  }}
                >
                  100% OWNERSHIP OF YOUR WEBSITE &amp; ACCOUNTS
                </Typography>
              </Box>
            </Box>

            {/* 4-Stat Proof Metrics Strip */}
            <Grid container spacing={2.5} sx={{ maxWidth: 1160 }}>
              {[
                {
                  icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
                  val: "100%",
                  label: "Complete Ownership",
                  desc: "You fully own your website, ad accounts, design files, and login details",
                },
                {
                  icon: <SpeedRoundedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
                  val: "14 Days",
                  label: "Live Working Demos",
                  desc: "Test your website or app on your phone every 2 weeks with clear updates",
                },
                {
                  icon: <SearchRoundedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
                  val: "Page 1 SEO",
                  label: "Google Search Ranking",
                  desc: "Get found by local and national customers searching for your services",
                },
                {
                  icon: <TrendingUpRoundedIcon sx={{ fontSize: 20, color: "#D8E5D5" }} />,
                  val: "Real Results",
                  label: "More Calls & Leads",
                  desc: "Everything we build is designed to generate phone calls, WhatsApp messages, and sales",
                },
              ].map((m, idx) => (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        p: { xs: 2.5, sm: 2.8 },
                        borderRadius: "20px",
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(216, 229, 213, 0.18)",
                        backdropFilter: "blur(12px)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "rgba(216, 229, 213, 0.45)",
                          transform: "translateY(-3px)",
                          boxShadow: "0 18px 36px -12px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                    >
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.2 }}>
                          <Typography
                            sx={{
                              fontSize: { xs: "1.45rem", sm: "1.65rem" },
                              fontWeight: 700,
                              color: "#D8E5D5",
                              letterSpacing: "-0.02em",
                              fontFamily: '"DM Serif Display", serif',
                            }}
                          >
                            {m.val}
                          </Typography>
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: "8px",
                              bgcolor: "rgba(216, 229, 213, 0.12)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {m.icon}
                          </Box>
                        </Box>
                        <Typography sx={{ fontSize: "0.92rem", fontWeight: 700, color: "#FFFFFF", mb: 0.5 }}>
                          {m.label}
                        </Typography>
                        <Typography sx={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.55 }}>
                          {m.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 2. THE OPERATIONAL DIAGNOSTIC (CENTER-ALIGNED HEADER, PURE WHITE #FFFFFF) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 18 },
          bgcolor: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(24, 61, 53, 0.08)",
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          {/* Centered Section Header */}
          <Box sx={{ textAlign: "center", maxWidth: 900, mx: "auto", mb: { xs: 6, md: 9 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2.2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.08)",
                border: "1px solid rgba(61, 118, 93, 0.25)",
                boxShadow: "0 2px 10px rgba(61, 118, 93, 0.08)",
                mb: 2.5,
              }}
            >
              <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#4D8F72" }} />
              <Typography
                sx={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#3D765D",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                WHY AETIBAR EXISTS &bull; THE MEANING OF TRUST
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: { xs: "1.85rem", sm: "2.35rem", md: "2.9rem" },
                fontWeight: 400,
                color: "#183D35",
                letterSpacing: "-0.025em",
                lineHeight: { xs: 1.2, md: 1.15 },
                textWrap: "balance",
                mb: 2.5,
              }}
            >
              Too Many Business Owners Have Been Let Down by{" "}
              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                  color: "#3D765D",
                }}
              >
                Broken Digital Promises.
              </Box>
            </Typography>

            <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.08rem" }, maxWidth: 780, mx: "auto" }}>
              The word <strong>Aetibar</strong> means <em>Trust</em>. We started Aetibar with a simple belief: businesses deserve honest advice, clear communication, and digital services built around their actual needs. We keep our approach practical, transparent, and focused on building long-term trust.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "center" }}>
            {/* Left Narrative Column */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "1.05rem", mb: 4 }}>
                  We believe businesses deserve clear communication, practical guidance, and control over their digital assets. Aetibar exists to provide dependable digital services focused on what your business actually needs.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {[
                    "Honest advice before spending: We recommend what your business actually needs without pushing unnecessary services or complexity.",
                    "Focused on business goals: We build and manage digital services around your customers, priorities, and desired outcomes.",
                    "Clear ownership & access: You retain access to the agreed digital assets, accounts, files, and other project deliverables.",
                  ].map((pt, pIdx) => (
                    <Box key={pIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.4, p: 2, borderRadius: "14px", bgcolor: "#F7F7F2", border: "1px solid rgba(24, 61, 53, 0.06)" }}>
                      <CheckCircleRoundedIcon sx={{ color: "#3D765D", fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.95rem", color: "#183D35", fontWeight: 600, lineHeight: 1.6 }}>
                        {pt}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            {/* Right Contrast Card: Traditional Agency vs Aetibar Standard */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 5 },
                    borderRadius: { xs: "22px", md: "28px" },
                    bgcolor: "#F7F7F2",
                    border: "1px solid rgba(24, 61, 53, 0.1)",
                    boxShadow: "0 14px 40px -10px rgba(24, 61, 53, 0.05)",
                  }}
                >
                  {/* Agency Trap Block */}
                  <Box sx={{ pb: 3.5, borderBottom: "1px solid rgba(24, 61, 53, 0.08)", mb: 3.5 }}>
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
                        THE COMMON PROBLEM
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
                      {[
                        "Limited communication can leave you unsure about project progress, decisions, or how your budget is being used.",
                        "Too many communication layers can make it difficult to get clear answers or share feedback with the people doing the work.",
                        "Unclear ownership and account access can make it difficult for businesses to manage their own digital assets.",
                        "Reports that focus only on surface-level numbers may not clearly show how the work is supporting your actual business goals.",
                      ].map((trap, tIdx) => (
                        <Box key={tIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                          <Typography sx={{ color: "#DC2626", fontWeight: 700, fontSize: "0.85rem", mt: 0.1 }}>&bull;</Typography>
                          <Typography sx={{ fontSize: "0.88rem", color: "#52525B", lineHeight: 1.6 }}>
                            {trap}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* The Aetibar Standard */}
                  <Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                      <CheckCircleRoundedIcon sx={{ color: "#3D765D", fontSize: 20 }} />
                      <Typography
                        sx={{
                          fontSize: "0.78rem",
                          fontWeight: 800,
                          color: "#3D765D",
                          letterSpacing: "0.06em",
                          fontFamily: "monospace",
                          textTransform: "uppercase",
                        }}
                      >
                        THE AETIBAR STANDARD
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
                      {[
                        "Regular progress updates and clear reporting so you know what is happening throughout the work.",
                        "Direct communication with the relevant people working on your website, app, marketing, advertising, or automation project.",
                        "Clear handover of the agreed files, accounts, access, and other digital assets connected to your business.",
                        "Relevant reviews and quality checks focused on making sure the agreed work is ready for use and aligned with your business needs.",
                      ].map((pact, pIdx) => (
                        <Box key={pIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                          <Typography sx={{ color: "#3D765D", fontWeight: 700, fontSize: "0.85rem", mt: 0.1 }}>&bull;</Typography>
                          <Typography sx={{ fontSize: "0.88rem", color: "#183D35", fontWeight: 600, lineHeight: 1.6 }}>
                            {pact}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 3. SIX CORE PRINCIPLES (LEFT-ALIGNED HEADER, WARM WHITE #F7F7F2)          */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 18 },
          bgcolor: "#F7F7F2",
          borderBottom: "1px solid rgba(24, 61, 53, 0.08)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          {/* Left-Aligned Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box sx={{ maxWidth: 860, mb: { xs: 6, md: 8 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(61, 118, 93, 0.08)",
                  border: "1px solid rgba(61, 118, 93, 0.25)",
                  boxShadow: "0 2px 10px rgba(61, 118, 93, 0.08)",
                  mb: 2.5,
                }}
              >
                <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#4D8F72" }} />
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#3D765D",
                    fontWeight: 700,
                    fontFamily: "monospace",
                  }}
                >
                  OUR CORE VALUES &bull; SIX PROMISES TO YOU
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem", lg: "3.4rem" },
                  fontWeight: 400,
                  color: "#183D35",
                  letterSpacing: "-0.025em",
                  lineHeight: { xs: 1.2, md: 1.15 },
                  mb: 2.5,
                }}
              >
                Six Simple Principles That Guide{" "}
                <Box
                  component="span"
                  sx={{
                    fontStyle: "italic",
                    color: "#3D765D",
                  }}
                >
                  How We Work
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.18rem" },
                  color: "#52525B",
                  lineHeight: 1.75,
                  fontWeight: 400,
                  maxWidth: 820,
                }}
              >
                These are practical standards we follow every day to protect your investment, keep your digital assets accessible, and keep our work focused on your business goals.
              </Typography>
            </Box>
          </motion.div>

          {/* 6 Principle Cards */}
          <Grid container spacing={3.5}>
            {studioPrinciples.map((pr, idx) => {
              const IconComp = pr.icon;
              return (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={pr.num}>
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.7,
                      delay: (idx % 3) * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        p: { xs: 3.5, sm: 4.5 },
                        borderRadius: { xs: "20px", md: "24px" },
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(24, 61, 53, 0.08)",
                        boxShadow: "0 4px 18px rgba(24, 61, 53, 0.03)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          borderColor: "#3D765D",
                          boxShadow: "0 18px 36px -12px rgba(61, 118, 93, 0.14)",
                        },
                      }}
                    >
                      <Box>
                        {/* Top Row: Icon + Number */}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                          <Box
                            sx={{
                              width: 46,
                              height: 46,
                              borderRadius: "14px",
                              bgcolor: "rgba(61, 118, 93, 0.08)",
                              color: "#3D765D",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <IconComp sx={{ fontSize: 24 }} />
                          </Box>

                          <Box
                            sx={{
                              px: 1.5,
                              py: 0.45,
                              borderRadius: "9999px",
                              bgcolor: "#F7F7F2",
                              border: "1px solid rgba(24, 61, 53, 0.1)",
                              fontFamily: "monospace",
                              fontSize: "0.75rem",
                              fontWeight: 800,
                              color: "#3D765D",
                              letterSpacing: "0.06em",
                            }}
                          >
                            PROMISE {pr.num}
                          </Box>
                        </Box>

                        {/* Title & Headline */}
                        <Typography
                          variant="h3"
                          sx={{
                            fontFamily: '"DM Serif Display", serif',
                            fontSize: { xs: "1.35rem", sm: "1.48rem" },
                            fontWeight: 400,
                            color: "#183D35",
                            letterSpacing: "-0.015em",
                            mb: 1.2,
                            lineHeight: 1.3,
                          }}
                        >
                          {pr.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "0.92rem",
                            fontWeight: 600,
                            color: "#3D765D",
                            lineHeight: 1.5,
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
                          borderTop: "1px solid rgba(24, 61, 53, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <CheckCircleRoundedIcon sx={{ color: "#3D765D", fontSize: 17 }} />
                        <Typography sx={{ fontSize: "0.82rem", fontWeight: 700, color: "#183D35" }}>
                          {pr.metric}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 4. STUDIO ROOTS & FULL-SERVICE CAPABILITIES (CENTER-ALIGNED HEADER, WHITE) */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 18 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          {/* Centered Section Header */}
          <Box sx={{ textAlign: "center", maxWidth: 900, mx: "auto", mb: { xs: 7, md: 9 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2.2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.08)",
                border: "1px solid rgba(61, 118, 93, 0.25)",
                boxShadow: "0 2px 10px rgba(61, 118, 93, 0.08)",
                mb: 2.5,
              }}
            >
              <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#4D8F72" }} />
              <Typography
                sx={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#3D765D",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                WHAT WE DO &bull; FULL-SERVICE DIGITAL AGENCY
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem", lg: "3.4rem" },
                fontWeight: 400,
                color: "#183D35",
                letterSpacing: "-0.025em",
                lineHeight: { xs: 1.2, md: 1.15 },
                textWrap: "balance",
                mb: 2.5,
              }}
            >
              The Digital Services Your Business Needs,{" "}
              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                  color: "#3D765D",
                }}
              >
                Under One Roof.
              </Box>
            </Typography>

            <Typography sx={{ color: "#52525B", lineHeight: 1.75, fontSize: "1.05rem", maxWidth: 780, mx: "auto" }}>
              Skip the hassle of managing multiple providers. Aetibar brings web development, marketing, advertising, and AI automation together with practical services built around your business needs:
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "stretch" }}>
            {/* Left: Studio Roots Photo & Culture */}
            <Grid size={{ xs: 12, lg: 5 }} sx={{ display: "flex", flexDirection: "column" }}>
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 340, sm: 440, lg: "100%" },
                    minHeight: { lg: "100%" },
                    flex: { lg: 1 },
                    borderRadius: { xs: "22px", md: "28px" },
                    overflow: "hidden",
                    border: "1px solid rgba(24, 61, 53, 0.1)",
                    boxShadow: "0 20px 50px -10px rgba(24, 61, 53, 0.08)",
                  }}
                >
                  <Image
                    src="/images/home/editorial-client-consultation.jpg"
                    alt="Aetibar web design and digital marketing team in Udaipur"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 1200px) 100vw, 50vw"
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(24, 61, 53, 0.88) 0%, rgba(24, 61, 53, 0.25) 60%, transparent 100%)",
                    }}
                  />

                  {/* Studio Roots Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: { xs: 16, sm: 24 },
                      left: { xs: 16, sm: 24 },
                      right: { xs: 16, sm: 24 },
                      p: 2.5,
                      borderRadius: "16px",
                      bgcolor: "rgba(24, 61, 53, 0.92)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(216, 229, 213, 0.25)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                      <LocationOnOutlinedIcon sx={{ color: "#D8E5D5", fontSize: 18 }} />
                      <Typography
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#D8E5D5",
                          letterSpacing: "0.06em",
                        }}
                      >
                        UDAIPUR, RAJASTHAN &bull; WORLDWIDE CLIENTS
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "0.85rem", color: "#D4D4D8", lineHeight: 1.6 }}>
                      Based in Udaipur, Rajasthan, Aetibar provides web development, digital marketing, and AI automation services to businesses in India and international markets.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Right: Full-Service Capabilities Grid */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {fullServiceCapabilities.map((srv, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: sIdx * 0.08 }}
                  >
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: "18px",
                        bgcolor: "#F7F7F2",
                        border: "1px solid rgba(24, 61, 53, 0.08)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: "#3D765D",
                          bgcolor: "#FFFFFF",
                          transform: "translateY(-2px)",
                          boxShadow: "0 10px 24px -4px rgba(24, 61, 53, 0.08)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 0.8 }}>
                        {srv.icon}
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: "#3D765D",
                            fontFamily: "monospace",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {srv.category}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: '"DM Serif Display", serif',
                          fontSize: "1.15rem",
                          fontWeight: 400,
                          color: "#183D35",
                          mb: 0.5,
                        }}
                      >
                        {srv.title}
                      </Typography>
                      <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.6 }}>
                        {srv.desc}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 5. CENTERPIECE TRUST CTA (LEFT-ALIGNED, DARK PINE #183D35)                */}
      {/* ========================================================================= */}
      <Box sx={{ py: { xs: 12, md: 18 }, bgcolor: "#F7F7F2" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box
              sx={{
                p: { xs: 4, sm: 6, md: 8 },
                borderRadius: { xs: "24px", md: "36px" },
                bgcolor: "#183D35",
                color: "#FFFFFF",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(216, 229, 213, 0.2)",
                boxShadow: "0 30px 80px -20px rgba(24, 61, 53, 0.5)",
              }}
            >
              {/* Subtle Ambient Sunset Glow Orbs */}
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                sx={{
                  position: "absolute",
                  top: "-20%",
                  right: "-10%",
                  width: "440px",
                  height: "440px",
                  background: "radial-gradient(circle, rgba(61, 118, 93, 0.35) 0%, transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />

              <Grid container spacing={4} sx={{ alignItems: "center", position: "relative", zIndex: 1 }}>
                <Grid size={{ xs: 12, lg: 8 }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1.2,
                      px: 2.2,
                      py: 0.6,
                      borderRadius: "9999px",
                      bgcolor: "rgba(216, 229, 213, 0.12)",
                      border: "1px solid rgba(216, 229, 213, 0.3)",
                      mb: 2.5,
                    }}
                  >
                    <Box
                      component={motion.div}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#D8E5D5", boxShadow: "0 0 10px #D8E5D5" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#D8E5D5",
                        fontWeight: 700,
                      }}
                    >
                      LET&apos;S GROW YOUR BUSINESS TOGETHER
                    </Typography>
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"DM Serif Display", serif',
                      fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3rem", lg: "3.4rem" },
                      fontWeight: 400,
                      lineHeight: { xs: 1.2, md: 1.15 },
                      letterSpacing: "-0.025em",
                      maxWidth: { xs: "100%", md: 880 },
                      mb: 2,
                    }}
                  >
                    Ready to Partner With a Digital Agency You Can{" "}
                    <Box
                      component="span"
                      sx={{
                        fontStyle: "italic",
                        color: "#D8E5D5",
                      }}
                    >
                      Actually Trust?
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", md: "1.15rem" },
                      color: "rgba(255, 255, 255, 0.85)",
                      lineHeight: 1.75,
                      maxWidth: 720,
                      mb: { xs: 3, lg: 0 },
                    }}
                  >
                    Tell us what your business needs. We’ll provide honest guidance, clear pricing, and a practical plan to move forward.
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, lg: 4 }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link href="/contact" style={{ textDecoration: "none" }}>
                        <Button
                          fullWidth
                          variant="contained"
                          endIcon={<ArrowForwardRoundedIcon />}
                          sx={{
                            py: 1.6,
                            borderRadius: "9999px",
                            bgcolor: "#D8E5D5",
                            fontSize: "0.95rem",
                            fontWeight: 800,
                            textTransform: "none",
                            color: "#183D35",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                            "&:hover": {
                              bgcolor: "#FFFFFF",
                              color: "#183D35",
                            },
                          }}
                        >
                          Discuss Your Business Needs
                        </Button>
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link href="/how-we-work" style={{ textDecoration: "none" }}>
                        <Button
                          fullWidth
                          sx={{
                            py: 1.5,
                            borderRadius: "9999px",
                            bgcolor: "rgba(255, 255, 255, 0.08)",
                            backdropFilter: "blur(10px)",
                            color: "#FFFFFF",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            textTransform: "none",
                            border: "1px solid rgba(216, 229, 213, 0.3)",
                            "&:hover": {
                              borderColor: "#D8E5D5",
                              color: "#FFFFFF",
                              bgcolor: "rgba(216, 229, 213, 0.16)",
                            },
                          }}
                        >
                          See How We Work Step-by-Step
                        </Button>
                      </Link>
                    </motion.div>
                  </Box>
                </Grid>
              </Grid>

              {/* Bottom Guarantee Checkpoints */}
              <Box
                sx={{
                  mt: 4,
                  pt: 3.5,
                  borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: { xs: "flex-start", sm: "center" },
                  gap: { xs: 2, sm: 4 },
                }}
              >
                {["Free 30-Minute Consultation", "100% Website & Ad Account Ownership", "Direct Response Within 24 Hours"].map((badge, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#D8E5D5" }} />
                    <Typography sx={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.85)", fontWeight: 500 }}>
                      {badge}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
