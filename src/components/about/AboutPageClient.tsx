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
    tag: "HONEST ADVICE",
    title: "Honest Advice First — No Wasteful Spending",
    headline: "We recommend what actually brings you customers, never selling services you don't need.",
    narrative:
      "Many agencies try to sell you expensive, complicated packages right away. We take time to understand your business first: who your customers are and how they find you. Whether you need a simple business website, local Google Maps ranking (Local SEO), or targeted social media ads, we advise you honestly on what will bring the fastest return on investment.",
    icon: TerminalRoundedIcon,
    metric: "100% Practical & Honest Advice",
  },
  {
    num: "02",
    tag: "FULL OWNERSHIP",
    title: "You Own 100% of Your Website, Ads & Data",
    headline: "Every file, ad account, graphic design, and password belongs completely to you.",
    narrative:
      "Unlike other agencies that keep control of your assets, we hand over everything directly to your business: your website files, Google & Meta (Facebook/Instagram) ad accounts, logos, and passwords. You have full freedom with no locked accounts, no hostage fees, and no monthly charges just to access your own property.",
    icon: LockOutlinedIcon,
    metric: "100% Client Ownership Guaranteed",
  },
  {
    num: "03",
    tag: "DIRECT ACCESS",
    title: "Direct Access to the People Doing the Work",
    headline: "Speak directly with the web designers, developers, and marketers handling your project.",
    narrative:
      "You will never have to deal with pushy salespeople or account managers who don't have the answers. You get direct WhatsApp and phone access to the actual team designing your website and managing your marketing campaigns, making communication quick, clear, and easy.",
    icon: EngineeringOutlinedIcon,
    metric: "Direct WhatsApp & Phone Support",
  },
  {
    num: "04",
    tag: "REGULAR UPDATES",
    title: "Live Working Demos Every 14 Days",
    headline: "Test your website or app on your phone as it gets built, with zero surprises.",
    narrative:
      "We never leave you wondering what is happening behind the scenes. Every two weeks, we send you a private, clickable link to test your new website or mobile app on your own mobile phone, alongside easy-to-read marketing reports showing real customer inquiries, phone calls, and progress.",
    icon: SpeedRoundedIcon,
    metric: "Live Previews Every 14 Days",
  },
  {
    num: "05",
    tag: "BUILT FOR SALES",
    title: "Designed to Win Real Paying Customers",
    headline: "Fast mobile design and easy WhatsApp triggers that turn visitors into inquiries.",
    narrative:
      "A website is only valuable if it brings you customers. We design every page to open instantly on mobile devices, with clear phone call buttons, instant WhatsApp chat links, and easy contact forms. When people find you on Google or click your ads, reaching out to you is effortless.",
    icon: TrendingUpRoundedIcon,
    metric: "Fast Loading & High Inquiry Rates",
  },
  {
    num: "06",
    tag: "HASSLE-FREE LAUNCH",
    title: "Smooth Launches with Zero Business Interruption",
    headline: "Thorough testing before launch so your daily sales and customer inquiries never stop.",
    narrative:
      "Switching to a new website or scaling your advertising should never cause customer confusion or downtime. We thoroughly test every contact form, payment system, WhatsApp link, and mobile screen before going live, guaranteeing a smooth transition and zero lost leads.",
    icon: ShieldRoundedIcon,
    metric: "Zero Downtime & Thorough Testing",
  },
];

const fullServiceCapabilities = [
  {
    category: "CUSTOM WEB & E-COMMERCE",
    title: "Fast Business Websites & Online Stores That Sell",
    desc: "Mobile-friendly, modern business websites and e-commerce stores designed to look professional on every phone and computer. Built for fast loading and optimized to turn visitors into paying customers.",
    icon: <LanguageRoundedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    category: "MOBILE APP DEVELOPMENT",
    title: "Custom Android & iPhone (iOS) Mobile Apps",
    desc: "User-friendly mobile apps for client bookings, online shopping, customer loyalty, or internal business operations—delivering a smooth, reliable experience for your users.",
    icon: <PhoneIphoneRoundedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    category: "SEARCH ENGINE OPTIMIZATION (SEO)",
    title: "First-Page Google Search & Local SEO Rankings",
    desc: "Local SEO in Udaipur and national Google ranking strategies that help your business get found by customers who are actively searching for what you offer, bringing consistent, free inquiries.",
    icon: <SearchRoundedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    category: "TARGETED PAID ADVERTISING (PPC)",
    title: "High-ROI Google Ads & Social Media Advertising",
    desc: "Laser-targeted Google Ads and Meta (Facebook & Instagram) ads designed to reach ready-to-buy customers. Every rupee is tracked so you see exact phone calls, WhatsApp inquiries, and sales leads.",
    icon: <AdsClickRoundedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    category: "SOCIAL MEDIA MARKETING & BRANDING",
    title: "Brand Identity, Logo Design & Social Media Growth",
    desc: "Professional logo design, brand graphics, and engaging social media posts that establish credibility, build customer trust, and make your business stand out from competitors.",
    icon: <PaletteOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />,
  },
  {
    category: "SMART BUSINESS AUTOMATION",
    title: "WhatsApp Lead Automation & Customer Systems",
    desc: "Instant customer notifications sent to WhatsApp, automated replies for new inquiries, and simple customer management systems that save your team hours of manual work every week.",
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
                  ABOUT AETIBAR &bull; TRUSTED DIGITAL AGENCY IN UDAIPUR
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
                Looking for a dependable digital partner to grow your business online? At Aetibar, we help business owners get more customers with fast business websites, custom mobile apps, Google SEO ranking, and targeted online advertising. No confusing tech jargon, no hidden fees—just honest guidance and real business growth.
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
                  The word <strong>Aetibar</strong> means <em>Trust</em> (ऐतबार / اعتبار). We started this company after seeing so many business owners waste hard-earned money on digital agencies that overpromised and underdelivered. Many businesses paid lakhs for slow websites that didn&apos;t work properly on mobile phones, or hired marketing agencies that wasted ad budgets on fake likes and vanity clicks without generating a single phone call or paying customer.
                </Typography>

                <Typography sx={{ color: "#52525B", lineHeight: 1.8, fontSize: "1.05rem", mb: 4 }}>
                  To make matters worse, traditional agencies often keep your website logins and ad accounts locked, forcing you to pay heavy monthly retainer fees just to make simple edits. We started Aetibar to change this. We believe every business deserves a trusted partner who speaks plain language, provides honest advice, and focuses on one clear goal: helping you grow your revenue.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
                  {[
                    "Honest advice before spending: We tell you clearly what your business actually needs—never pushing complicated tools or services you don't.",
                    "Built to win paying clients: Fast mobile websites, Google SEO, and targeted ads designed specifically to generate customer inquiries and sales.",
                    "100% complete ownership: All website files, Google & Meta ad accounts, creative designs, and login details belong entirely to you.",
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
                        THE COMMON AGENCY TRAP
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
                      {[
                        "Disappears for weeks with zero updates, leaving you in the dark about your project and ad spend.",
                        "Salespeople make grand promises, then hand you off to junior staff who do not understand your business.",
                        "Holds your website passwords, domain, and ad accounts hostage, charging monthly fees just to make minor edits.",
                        "Reports meaningless vanity metrics (like impressions and page clicks) instead of actual phone calls and customer sales.",
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
                        "Live clickable previews and simple, easy-to-read progress reports delivered directly to you every 14 days.",
                        "Direct WhatsApp and phone access to the actual web developers and marketing experts working on your project.",
                        "Complete handover of all website files, ad accounts, logos, and passwords—you have 100% total control.",
                        "Thorough quality testing and conversion focus, ensuring steady customer leads without technical headaches.",
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
                Six Simple Principles That Protect Your Business at{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Every Step.
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
                These are not empty marketing slogans. They are our daily operating standards that protect your investment, keep you in complete control of your digital assets, and guarantee that what we build delivers real customer inquiries and measurable growth.
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
                      Operating from Udaipur, Rajasthan, Aetibar is a trusted web development and digital marketing agency serving business owners across India, the USA, the UK, Canada, and the UAE. We help local businesses and global brands get found online, attract quality leads, and scale smoothly.
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
                  Everything Your Business Needs to Grow Online,{" "}
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
                  No more coordinating between separate freelancers for website design, coding, Google rankings, and social media. As a full-service web development and digital marketing company in Udaipur, we provide complete, easy-to-understand solutions that work together to bring you real business results:
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
                      Tell us about your business goals, target customers, and what you want to achieve online. We will give you honest, plain-English guidance, a transparent proposal, and a realistic timeline—whether you need a custom business website, mobile app, Google SEO, targeted ads, or smart WhatsApp automation. No pushy sales talk, just practical solutions to grow your business.
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
                            Schedule a Free Strategy Call
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
