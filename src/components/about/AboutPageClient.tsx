"use client";
import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
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
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
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
    icon: <LanguageRoundedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    category: "MOBILE APP DEVELOPMENT",
    title: "Custom Android & iPhone Apps",
    desc: "Mobile apps for customers, bookings, ordering, field teams, and internal business needs.",
    icon: <PhoneIphoneRoundedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    category: "SEARCH ENGINE OPTIMIZATION (SEO)",
    title: "SEO That Helps Customers Find You",
    desc: "Practical SEO focused on search visibility, useful content, and local search.",
    icon: <SearchRoundedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    category: "PAID ADVERTISING",
    title: "Google & Meta Advertising",
    desc: "Targeted campaigns with controlled budgets, tracking, and ongoing optimization.",
    icon: <AdsClickRoundedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    category: "SOCIAL MEDIA MARKETING",
    title: "Consistent Social Media Content",
    desc: "Content planning, branded visuals, captions, and publishing for your social presence.",
    icon: <PaletteOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    category: "AI AUTOMATION",
    title: "Automation for Repetitive Work",
    desc: "Connect your tools and automate routine tasks, follow-ups, data handling, and workflows.",
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
];


export default function AboutPageClient() {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", overflow: "hidden" }}>
      {/* ========================================================================= */}
      {/* 1. EDITORIAL HERO SECTION                                                 */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, sm: 19, md: 22 },
          pb: { xs: 10, md: 15 },
          bgcolor: "#FAF8F5",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Warm Gradient Glows */}
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          sx={{
            position: "absolute",
            top: "-15%",
            right: "-5%",
            width: "550px",
            height: "550px",
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
            top: "20%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(251, 146, 60, 0.12) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 960, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -24, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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
                  boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                  backdropFilter: "blur(12px)",
                  mb: 2.5,
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
                    bgcolor: "#F97316",
                    boxShadow: "0 0 10px #F97316",
                  }}
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
                  ABOUT AETIBAR &bull; TRUSTED DIGITAL MARKETING AGENCY IN UDAIPUR
                </Typography>
              </Box>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.65rem", sm: "2.25rem", md: "2.85rem", lg: "3.25rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  letterSpacing: "-0.03em",
                  lineHeight: { xs: 1.25, sm: 1.2, md: 1.18 },
                  maxWidth: { xs: "100%", sm: 860, md: 1040, lg: 1160 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: { xs: 2, md: 2.5 },
                }}
              >
                Websites, Apps &amp; Digital Marketing —{" "}
                <Box
                  component="span"
                  sx={{
                    display: "inline",
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Built on Trust to Grow Your Business.
                </Box>
              </Typography>
            </motion.div>

            {/* Narrative Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.02rem", sm: "1.08rem", md: "1.15rem" },
                  color: "#52525B",
                  lineHeight: 1.7,
                  maxWidth: { xs: "100%", sm: 640, md: 740 },
                  mx: "auto",
                  mb: { xs: 3.5, md: 4.5 },
                  fontWeight: 400,
                }}
              >
             Looking for a dependable digital partner? Aetibar provides web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation—built around your business needs.


              </Typography>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, flexWrap: "wrap", mb: 6 }}>
                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />}
                      sx={{
                        py: 1.5,
                        px: 3.8,
                        borderRadius: "9999px",
                        background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                        color: "#FFFFFF",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        textTransform: "none",
                        boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.38)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                          boxShadow: "0 15px 30px -5px rgba(234, 88, 12, 0.5)",
                        },
                      }}
                    >
                      Schedule a Free Consultation
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/work" style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        py: 1.4,
                        px: 3.5,
                        borderRadius: "9999px",
                        bgcolor: "#FFFFFF",
                        color: "#18181B",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        textTransform: "none",
                        border: "1px solid rgba(24, 24, 27, 0.12)",
                        boxShadow: "0 2px 6px rgba(24, 24, 27, 0.03)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          bgcolor: "#FAF8F5",
                          borderColor: "#EA580C",
                          color: "#EA580C",
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
            initial={{ opacity: 0, y: 45, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.05, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 1160,
                mx: "auto",
                height: { xs: 260, sm: 380, md: 480 },
                borderRadius: { xs: "20px", md: "30px" },
                overflow: "hidden",
                border: "1px solid rgba(24, 24, 27, 0.08)",
                boxShadow: "0 24px 60px -15px rgba(24, 24, 27, 0.08)",
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
                    "linear-gradient(to top, rgba(24, 24, 27, 0.75) 0%, rgba(24, 24, 27, 0.15) 50%, transparent 100%)",
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
                  bgcolor: "rgba(24, 24, 27, 0.88)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                }}
              >
                <LocationOnOutlinedIcon sx={{ fontSize: 16, color: "#FB923C" }} />
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
                  bgcolor: "rgba(24, 24, 27, 0.88)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(249, 115, 22, 0.35)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                }}
              >
                <VerifiedRoundedIcon sx={{ fontSize: 16, color: "#22C55E" }} />
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

            {/* 4-Stat Proof Metrics Strip with Staggered Cascading Reveal */}
            <Grid container spacing={2.5} sx={{ maxWidth: 1160, mx: "auto" }}>
              {[
                {
                  icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "100%",
                  label: "Complete Ownership",
                  desc: "You fully own your website, ad accounts, design files, and login details",
                },
                {
                  icon: <SpeedRoundedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "14 Days",
                  label: "Live Working Demos",
                  desc: "Test your website or app on your phone every 2 weeks with clear updates",
                },
                {
                  icon: <SearchRoundedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "Page 1 SEO",
                  label: "Google Search Ranking",
                  desc: "Get found by local and national customers searching for your services",
                },
                {
                  icon: <TrendingUpRoundedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "Real Results",
                  label: "More Calls & Leads",
                  desc: "Everything we build is designed to generate phone calls, WhatsApp messages, and sales",
                },
              ].map((m, idx) => (
                <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.65 + idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        p: { xs: 2.5, sm: 2.8 },
                        borderRadius: "20px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        boxShadow: "0 2px 10px rgba(24, 24, 27, 0.02)",
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
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.2 }}>
                          <Typography
                            sx={{
                              fontSize: { xs: "1.45rem", sm: "1.65rem" },
                              fontWeight: 800,
                              color: "#EA580C",
                              letterSpacing: "-0.02em",
                              fontFamily: "monospace",
                            }}
                          >
                            {m.val}
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
                            {m.icon}
                          </Box>
                        </Box>
                        <Typography sx={{ fontSize: "0.92rem", fontWeight: 700, color: "#18181B", mb: 0.5 }}>
                          {m.label}
                        </Typography>
                        <Typography sx={{ fontSize: "0.8rem", color: "#52525B", lineHeight: 1.55 }}>
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
      {/* 2. THE OPERATIONAL DIAGNOSTIC: THE PROBLEM WE SOLVE                       */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 18 },
          bgcolor: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
        }}
      >
        {/* Subtle Ambient Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "center" }}>
            {/* Left Narrative Column */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
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
                    boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                    mb: 2.5,
                  }}
                >
                  <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }} />
                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      color: "#EA580C",
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
                    fontSize: { xs: "1.45rem", sm: "1.85rem", md: "2.2rem", lg: "2.4rem" },
                    fontWeight: 600,
                    color: "#18181B",
                    letterSpacing: "-0.03em",
                    lineHeight: { xs: 1.25, md: 1.2 },
                    textWrap: "balance",
                    mb: 3,
                  }}
                >
                  Too Many Business Owners Have Been Let Down by{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Broken Digital Promises.
                  </Box>
                </Typography>

                <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "1.05rem", mb: 2.5 }}>
                 The word <strong>Aetibar</strong> means <em>Trust</em>. We started Aetibar with a simple belief: businesses deserve honest advice, clear communication, and digital services built around their actual needs. We keep our approach practical, transparent, and focused on building long-term trust.

                </Typography>

                <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "1.05rem", mb: 4 }}>
                 We believe businesses deserve clear communication, practical guidance, and control over their digital assets. Aetibar exists to provide dependable digital services focused on what your business actually needs.

                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
                { [
  "Honest advice before spending: We recommend what your business actually needs without pushing unnecessary services or complexity.",

  "Focused on business goals: We build and manage digital services around your customers, priorities, and desired outcomes.",

  "Clear ownership & access: You retain access to the agreed digital assets, accounts, files, and other project deliverables.",
].map((pt, pIdx) => (
                    <Box key={pIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}>
                      <CheckCircleRoundedIcon sx={{ color: "#16A34A", fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: "0.95rem", color: "#18181B", fontWeight: 600, lineHeight: 1.6 }}>
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
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 5 },
                    borderRadius: { xs: "22px", md: "28px" },
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(24, 24, 27, 0.08)",
                    boxShadow: "0 14px 40px -10px rgba(24, 24, 27, 0.05)",
                  }}
                >
                  {/* Agency Trap Block */}
                  <Box sx={{ pb: 3.5, borderBottom: "1px solid rgba(24, 24, 27, 0.08)", mb: 3.5 }}>
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
                      <CheckCircleRoundedIcon sx={{ color: "#16A34A", fontSize: 20 }} />
                      <Typography
                        sx={{
                          fontSize: "0.78rem",
                          fontWeight: 800,
                          color: "#16A34A",
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
                          <Typography sx={{ color: "#16A34A", fontWeight: 700, fontSize: "0.85rem", mt: 0.1 }}>&bull;</Typography>
                          <Typography sx={{ fontSize: "0.88rem", color: "#18181B", fontWeight: 600, lineHeight: 1.6 }}>
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
      {/* 3. SIX CORE ENGINEERING PRINCIPLES (BENTO GRID)                           */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 18 },
          bgcolor: "#FAF8F5",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Decorative Lighting */}
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            right: "5%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ maxWidth: 860, mx: "auto", textAlign: "center", mb: { xs: 7, md: 9 } }}>
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
                  boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                  mb: 2.5,
                }}
              >
                <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }} />
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
                  OUR CORE VALUES &bull; SIX PROMISES TO YOU
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  letterSpacing: "-0.035em",
                  lineHeight: { xs: 1.25, md: 1.18 },
                  maxWidth: { xs: "100%", md: 980, lg: 1100 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2.5,
                }}
              >
              Six Simple Principles That Guide {" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  How We Work
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  color: "#52525B",
                  lineHeight: 1.75,
                  fontWeight: 400,
                  maxWidth: 820,
                  mx: "auto",
                }}
              >
               These are practical standards we follow every day to protect your investment, keep your digital assets accessible, and keep our work focused on your business goals.

              </Typography>
            </Box>
          </motion.div>

          {/* 6 Bento Principle Cards */}
          <Grid container spacing={3.5}>
            {studioPrinciples.map((pr, idx) => {
              const IconComp = pr.icon;
              return (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={pr.num}>
                  <motion.div
                    initial={{ opacity: 0, y: 55 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.85,
                      delay: (idx % 3) * 0.16 + Math.floor(idx / 3) * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        p: { xs: 3.5, sm: 4.5 },
                        borderRadius: { xs: "20px", md: "24px" },
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        boxShadow: "0 2px 10px rgba(24, 24, 27, 0.02)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          borderColor: "rgba(234, 88, 12, 0.4)",
                          boxShadow: "0 18px 36px -12px rgba(234, 88, 12, 0.12)",
                        },
                      }}
                    >
                      <Box>
                        {/* Top Row: Icon + Number */}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                          <Box
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: "12px",
                              bgcolor: "rgba(249, 115, 22, 0.1)",
                              color: "#EA580C",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <IconComp sx={{ fontSize: 22 }} />
                          </Box>

                          <Box
                            sx={{
                              px: 1.4,
                              py: 0.4,
                              borderRadius: "9999px",
                              bgcolor: "#FAF8F5",
                              border: "1px solid rgba(24, 24, 27, 0.08)",
                              fontFamily: "monospace",
                              fontSize: "0.75rem",
                              fontWeight: 800,
                              color: "#EA580C",
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
                            fontSize: { xs: "1.25rem", sm: "1.38rem" },
                            fontWeight: 700,
                            color: "#18181B",
                            letterSpacing: "-0.02em",
                            mb: 1.2,
                            lineHeight: 1.35,
                          }}
                        >
                          {pr.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "#EA580C",
                            lineHeight: 1.5,
                            mb: 2,
                          }}
                        >
                          {pr.headline}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "0.875rem",
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
                          borderTop: "1px solid rgba(24, 24, 27, 0.06)",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.8,
                        }}
                      >
                        <CheckCircleRoundedIcon sx={{ color: "#16A34A", fontSize: 16 }} />
                        <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#18181B" }}>
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
      {/* 4. STUDIO ROOTS, CULTURE & TECHNOLOGY STANDARDS                           */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 18 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "stretch" }}>
            {/* Left: Studio Roots Photo & Culture */}
            <Grid size={{ xs: 12, lg: 6 }} sx={{ display: "flex", flexDirection: "column" }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
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
                    border: "1px solid rgba(24, 24, 27, 0.08)",
                    boxShadow: "0 20px 50px -10px rgba(24, 24, 27, 0.08)",
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
                        "linear-gradient(to top, rgba(24, 24, 27, 0.85) 0%, rgba(24, 24, 27, 0.2) 60%, transparent 100%)",
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
                      bgcolor: "rgba(24, 24, 27, 0.88)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                      <LocationOnOutlinedIcon sx={{ color: "#FB923C", fontSize: 18 }} />
                      <Typography
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#FB923C",
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

            {/* Right: Technical Foundations & Engineering Stack */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
                    boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                    mb: 2.5,
                  }}
                >
                  <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }} />
                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      color: "#EA580C",
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
                    fontSize: { xs: "1.45rem", sm: "1.85rem", md: "2.2rem", lg: "2.4rem" },
                    fontWeight: 600,
                    color: "#18181B",
                    letterSpacing: "-0.03em",
                    lineHeight: { xs: 1.25, md: 1.2 },
                    textWrap: "balance",
                    mb: 3,
                  }}
                >
                  The Digital Services Your Business Needs,{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Under One Roof.
                  </Box>
                </Typography>

                <Typography sx={{ color: "#52525B", lineHeight: 1.75, fontSize: "1.05rem", mb: 4 }}>
                  Skip the hassle of managing multiple providers. Aetibar brings web development, marketing, advertising, and AI automation together with practical services built around your business needs:

                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {fullServiceCapabilities.map((srv, sIdx) => (
                    <Box
                      key={sIdx}
                      sx={{
                        p: 2.5,
                        borderRadius: "18px",
                        bgcolor: "#FAF8F5",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: "rgba(234, 88, 12, 0.35)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 10px 24px -4px rgba(24, 24, 27, 0.06)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 0.8 }}>
                        {srv.icon}
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            color: "#EA580C",
                            fontFamily: "monospace",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {srv.category}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "1rem", fontWeight: 700, color: "#18181B", mb: 0.5 }}>
                        {srv.title}
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem", color: "#52525B", lineHeight: 1.6 }}>
                        {srv.desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 5. CENTERPIECE TRUST & DIRECT ARCHITECT CTA                               */}
      {/* ========================================================================= */}
      <Box sx={{ py: { xs: 12, md: 18 }, bgcolor: "#FAF8F5" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                p: { xs: 4, sm: 6, md: 8 },
                borderRadius: { xs: "24px", md: "36px" },
                bgcolor: "#18181B",
                color: "#FFFFFF",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "0 30px 80px -20px rgba(24, 24, 27, 0.5)",
              }}
            >
              {/* Ambient Warm Sunset Glow Orbs */}
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

              <Grid container spacing={4} sx={{ alignItems: "center", position: "relative", zIndex: 1 }}>
                <Grid size={{ xs: 12, lg: 8 }}>
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
                        mb: 2.5,
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
                        LET&apos;S GROW YOUR BUSINESS TOGETHER
                      </Typography>
                    </Box>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                        fontWeight: 700,
                        lineHeight: { xs: 1.25, md: 1.18 },
                        letterSpacing: "-0.03em",
                        maxWidth: { xs: "100%", md: 980, lg: 1100 },
                        mx: "auto",
                        textWrap: "balance",
                        mb: 2,
                      }}
                    >
                      Ready to Partner With a Digital Agency You Can{" "}
                      <Box
                        component="span"
                        sx={{
                          background: "linear-gradient(135deg, #F97316 0%, #FB923C 60%, #FED7AA 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        Actually Trust?
                      </Box>
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
                        fontSize: { xs: "0.98rem", md: "1.12rem" },
                        color: "rgba(255, 255, 255, 0.82)",
                        lineHeight: 1.75,
                        maxWidth: 720,
                        mb: { xs: 3, lg: 0 },
                      }}
                    >
                    Tell us what your business needs. We’ll provide honest guidance, clear pricing, and a practical plan to move forward.

                    </Typography>
                  </motion.div>
                </Grid>

                <Grid size={{ xs: 12, lg: 4 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link href="/contact" style={{ textDecoration: "none" }}>
                          <Button
                            fullWidth
                            variant="contained"
                            endIcon={<ArrowForwardRoundedIcon />}
                            sx={{
                              py: 1.6,
                              borderRadius: "9999px",
                              background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
                              fontSize: "0.95rem",
                              fontWeight: 800,
                              textTransform: "none",
                              color: "#18181B",
                              boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)",
                              "&:hover": {
                                background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                                color: "#FFFFFF",
                                boxShadow: "0 15px 30px rgba(234, 88, 12, 0.5)",
                              },
                            }}
                          >
                           Discuss Your Business Needs

                          </Button>
                        </Link>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link href="/how-we-work" style={{ textDecoration: "none" }}>
                          <Button
                            fullWidth
                            sx={{
                              py: 1.5,
                              borderRadius: "9999px",
                              bgcolor: "rgba(255, 255, 255, 0.05)",
                              backdropFilter: "blur(10px)",
                              color: "#FFFFFF",
                              fontSize: "0.9rem",
                              fontWeight: 600,
                              textTransform: "none",
                              border: "1px solid rgba(255, 255, 255, 0.2)",
                              "&:hover": {
                                borderColor: "#FB923C",
                                color: "#FB923C",
                                bgcolor: "rgba(249, 115, 22, 0.12)",
                              },
                            }}
                          >
                            See How We Work Step-by-Step
                          </Button>
                        </Link>
                      </motion.div>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>

              {/* Bottom Guarantee Checkpoints */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <Box
                  sx={{
                    mt: 4,
                    pt: 3.5,
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: { xs: 2, sm: 4 },
                  }}
                >
                  {["Free 30-Minute Consultation", "100% Website & Ad Account Ownership", "Direct Response Within 24 Hours"].map((badge, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#FB923C" }} />
                      <Typography sx={{ fontSize: "0.825rem", color: "rgba(255, 255, 255, 0.82)", fontWeight: 500 }}>
                        {badge}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
