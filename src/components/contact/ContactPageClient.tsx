"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Chip,
} from "@mui/material";
import Link from "next/link";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { motion, AnimatePresence } from "framer-motion";

const BRIEF_TEMPLATE = `Hi Aetibar Team,

1. Company & Industry: [e.g., Logistics / B2B Services / FinTech]
2. Primary Operational Problem: [Describe the manual work, system bottleneck, or new platform needed]
3. Current Stack & Tools: [e.g., Google Sheets, WhatsApp, PostgreSQL, legacy portal]
4. Key Desired Outcomes: [e.g., Automate lead intake, rebuild customer portal, sub-second load speeds]
5. Target Timeline: [e.g., 4–8 weeks / Next Quarter]`;

const improvementOptions = [
  "Lead Intake & Multi-Channel Inquiries",
  "Internal Operations & Task Tracking",
  "High-Performance Business Website",
  "Repetitive Data Entry & Document AI",
  "Quote & Estimate Calculation Engines",
  "Legacy Software / Sheet Migration",
];

const currentManagementOptions = [
  "WhatsApp & Direct Phone Calls",
  "Shared Spreadsheets (Excel / Sheets)",
  "Scattered Email Inboxes",
  "Multiple Disconnected SaaS Apps",
  "Pen, Paper & Clipboards",
  "Existing Custom Software",
];

const faqs = [
  {
    q: "How fast do you respond to direct inquiries?",
    a: "Every email and WhatsApp message goes straight to our senior engineering lead. You will receive a technical response with 2–3 targeted clarifying questions within 24 business hours—never an automated sales drip.",
  },
  {
    q: "We don't have a formal technical specification yet. Can we still reach out?",
    a: "Absolutely. In fact, most of our best client partnerships start with an operational problem rather than a formal spec. Send us a quick bulleted outline or loom video of what's broken in your current workflow, and we will help you architect the technical roadmap.",
  },
  {
    q: "Can we sign a Non-Disclosure Agreement (NDA) before sharing proprietary workflow details?",
    a: "Yes. We treat all client business data, workflows, and operational metrics with default strict confidentiality. We are happy to countersign your mutual NDA or provide our standard studio mutual NDA prior to our initial scoping session.",
  },
  {
    q: "How do you handle collaboration across different time zones?",
    a: "Our core studio is based in Udaipur, India (IST / UTC+5:30). We structure our schedules with overlapping working windows for North American, European, and Gulf time zones. All work is documented asynchronously with private clickable staging previews.",
  },
  {
    q: "Who actually builds our systems?",
    a: "You communicate and build directly with senior software engineers and system architects. We have a strict zero-intern and zero-outsourcing policy. Every database schema, edge API, and user interface is crafted in-house.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Senior Technical Review",
    timeframe: "Within 24 Hours",
    desc: "Your email or brief is reviewed by an experienced system architect—not a junior sales SDR.",
  },
  {
    step: "02",
    title: "Clarifying Diagnosis",
    timeframe: "Day 1 – 2",
    desc: "We reply with 2–3 targeted questions to stress-test constraints, database scale, and existing tools.",
  },
  {
    step: "03",
    title: "30-Min Architectural Sync",
    timeframe: "At Your Convenience",
    desc: "A direct video discussion where we whiteboard your system topology, risk points, and concrete timelines.",
  },
  {
    step: "04",
    title: "Honest Scoping & Proposal",
    timeframe: "Within 48 Hours",
    desc: "A fixed-scope, milestone-driven technical proposal. If an existing tool solves it cheaper, we'll tell you honestly.",
  },
];

export default function ContactPageClient() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  // Form State
  const [activeTab, setActiveTab] = useState<"quick" | "diagnostic">("quick");
  const [selectedImprovement, setSelectedImprovement] = useState<string[]>([]);
  const [selectedManagement, setSelectedManagement] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello.aetibar@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(BRIEF_TEMPLATE);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const toggleImprovement = (opt: string) => {
    setSelectedImprovement((prev) =>
      prev.includes(opt) ? prev.filter((i) => i !== opt) : [...prev, opt]
    );
  };

  const toggleManagement = (opt: string) => {
    setSelectedManagement((prev) =>
      prev.includes(opt) ? prev.filter((i) => i !== opt) : [...prev, opt]
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const prefilledMailto = `mailto:hello.aetibar@gmail.com?subject=${encodeURIComponent(
    "Project Architecture Scoping | Aetibar"
  )}&body=${encodeURIComponent(BRIEF_TEMPLATE)}`;

  return (
    <Box sx={{ bgcolor: "#FFFFFF", color: "#18181B", minHeight: "100vh" }}>
      {/* 1. HERO SECTION (Home Page Sunset Theme) */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 16, sm: 18, md: 22 },
          pb: { xs: 8, md: 12 },
          background:
            "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.09) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
          overflow: "hidden",
        }}
      >
        {/* Subtle Architectural Grid */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(24, 24, 27, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 24, 27, 0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center", maxWidth: 920, mx: "auto" }}>
            {/* Status Pill Matching Home Page */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2.2,
                  py: 0.8,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                  backdropFilter: "blur(12px)",
                  mb: 3.5,
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#F97316", boxShadow: "0 0 10px #F97316" }}
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
                  DIRECT SENIOR ACCESS &bull; ZERO SALES BUREAUCRACY
                </Typography>
              </Box>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.4rem" },
                  fontWeight: 600,
                  letterSpacing: { xs: "-0.03em", md: "-0.04em" },
                  lineHeight: { xs: 1.12, md: 1.06 },
                  color: "#18181B",
                  mb: 3,
                }}
              >
                Talk directly to the engineers building{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  your digital systems.
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
                  fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.25rem" },
                  color: "#52525B",
                  lineHeight: 1.75,
                  maxWidth: 780,
                  mx: "auto",
                  mb: 4.5,
                  fontWeight: 400,
                }}
              >
                No junior sales representatives. No aggressive automated sequences.
                Whether you need a sub-second web platform, a unified WhatsApp lead queue, or a custom operational ERP,
                connect directly with our engineering founders.
              </Typography>
            </motion.div>

            {/* Quick Hero Action Strip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  component="a"
                  href="mailto:hello.aetibar@gmail.com"
                  variant="contained"
                  size="large"
                  startIcon={<EmailOutlinedIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: { xs: 3.5, sm: 4 },
                    py: 1.6,
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    boxShadow: "0 10px 28px rgba(234, 88, 12, 0.35)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 14px 34px rgba(234, 88, 12, 0.5)",
                    },
                  }}
                >
                  Email hello.aetibar@gmail.com
                </Button>

                <Button
                  component="a"
                  href="https://wa.me/?text=Hi%20Aetibar%20team,%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="large"
                  startIcon={<WhatsAppIcon sx={{ color: "#25D366" }} />}
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                    color: "#18181B",
                    borderColor: "rgba(24, 24, 27, 0.18)",
                    px: 3.2,
                    py: 1.6,
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      bgcolor: "#FAF8F5",
                      borderColor: "#25D366",
                      color: "#15803D",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Chat on WhatsApp
                </Button>

                <Tooltip title={copiedEmail ? "Copied to clipboard!" : "Copy direct email"}>
                  <Button
                    onClick={handleCopyEmail}
                    variant="text"
                    startIcon={
                      copiedEmail ? (
                        <CheckCircleRoundedIcon sx={{ color: "#EA580C" }} />
                      ) : (
                        <ContentCopyRoundedIcon sx={{ color: "#71717A" }} />
                      )
                    }
                    sx={{
                      color: copiedEmail ? "#EA580C" : "#52525B",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      px: 2.2,
                      py: 1.6,
                      borderRadius: "9999px",
                      "&:hover": { bgcolor: "rgba(249, 115, 22, 0.06)" },
                    }}
                  >
                    {copiedEmail ? "Email Copied!" : "Copy Email"}
                  </Button>
                </Tooltip>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* 2. PRIMARY DIRECT CHANNELS (3 High-Contrast Bento Cards) */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 6, textAlign: "center", maxWidth: 760, mx: "auto" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                DIRECT COMMUNICATION CHANNELS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", md: "2.5rem" },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "#18181B",
              }}
            >
              Pick the channel that fits your speed.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {/* Card 1: Official Engineering Email */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "24px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 6px 20px rgba(24, 24, 27, 0.03)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 36px rgba(234, 88, 12, 0.12)",
                    borderColor: "#EA580C",
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      bgcolor: "rgba(249, 115, 22, 0.1)",
                      border: "1px solid rgba(249, 115, 22, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                      color: "#EA580C",
                    }}
                  >
                    <EmailOutlinedIcon sx={{ fontSize: 26 }} />
                  </Box>

                  <Chip
                    label="Primary Channel"
                    size="small"
                    sx={{
                      bgcolor: "rgba(249, 115, 22, 0.1)",
                      color: "#EA580C",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      mb: 1.5,
                      borderRadius: "6px",
                    }}
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      color: "#18181B",
                      mb: 0.5,
                    }}
                  >
                    Direct Email
                  </Typography>

                  <Typography
                    component="a"
                    href="mailto:hello.aetibar@gmail.com"
                    sx={{
                      display: "inline-block",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#EA580C",
                      textDecoration: "none",
                      mb: 2,
                      wordBreak: "break-all",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    hello.aetibar@gmail.com
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#52525B",
                      lineHeight: 1.65,
                      mb: 3,
                    }}
                  >
                    Ideal for RFPs, technical requirements, architectural sketches, loom recordings,
                    or repository invitations.
                  </Typography>
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 1.5,
                      borderRadius: "10px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      mb: 2,
                    }}
                  >
                    <AccessTimeOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                    <Typography sx={{ fontSize: "0.8rem", color: "#18181B", fontWeight: 600 }}>
                      Response SLA: &lt; 24 business hours
                    </Typography>
                  </Box>

                  <Button
                    component="a"
                    href="mailto:hello.aetibar@gmail.com"
                    fullWidth
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      py: 1.35,
                      borderRadius: "9999px",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      boxShadow: "0 8px 20px rgba(234, 88, 12, 0.25)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      },
                    }}
                  >
                    Send Email Directly
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Card 2: WhatsApp Instant Chat */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "24px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(37, 211, 102, 0.3)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 6px 20px rgba(24, 24, 27, 0.03)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 36px rgba(37, 211, 102, 0.15)",
                    borderColor: "#25D366",
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      bgcolor: "rgba(37, 211, 102, 0.12)",
                      border: "1px solid rgba(37, 211, 102, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                      color: "#16A34A",
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: 28, color: "#16A34A" }} />
                  </Box>

                  <Chip
                    label="Fastest Response"
                    size="small"
                    sx={{
                      bgcolor: "rgba(37, 211, 102, 0.12)",
                      color: "#15803D",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      mb: 1.5,
                      borderRadius: "6px",
                    }}
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      color: "#18181B",
                      mb: 0.5,
                    }}
                  >
                    Instant WhatsApp
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#16A34A",
                      mb: 2,
                    }}
                  >
                    Direct Senior Line
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#52525B",
                      lineHeight: 1.65,
                      mb: 3,
                    }}
                  >
                    Fast triage, quick feasibility checks, audio notes, or informal project explorations.
                    Skip formalities when speed is critical.
                  </Typography>
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 1.5,
                      borderRadius: "10px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      mb: 2,
                    }}
                  >
                    <AccessTimeOutlinedIcon sx={{ fontSize: 16, color: "#16A34A" }} />
                    <Typography sx={{ fontSize: "0.8rem", color: "#18181B", fontWeight: 600 }}>
                      Response SLA: Within a few hours
                    </Typography>
                  </Box>

                  <Button
                    component="a"
                    href="https://wa.me/?text=Hi%20Aetibar%20team,%20I'd%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    variant="contained"
                    endIcon={<OpenInNewRoundedIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      bgcolor: "#16A34A",
                      color: "#FFFFFF",
                      py: 1.35,
                      borderRadius: "9999px",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      boxShadow: "0 8px 20px rgba(22, 163, 74, 0.25)",
                      "&:hover": { bgcolor: "#15803D" },
                    }}
                  >
                    Chat on WhatsApp
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Card 3: Studio Headquarters */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "24px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 6px 20px rgba(24, 24, 27, 0.03)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 36px rgba(24, 24, 27, 0.08)",
                    borderColor: "#EA580C",
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      bgcolor: "rgba(24, 24, 27, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                      color: "#18181B",
                    }}
                  >
                    <LocationOnOutlinedIcon sx={{ fontSize: 26 }} />
                  </Box>

                  <Chip
                    label="Studio Location"
                    size="small"
                    sx={{
                      bgcolor: "rgba(24, 24, 27, 0.06)",
                      color: "#18181B",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      mb: 1.5,
                      borderRadius: "6px",
                    }}
                  />

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      color: "#18181B",
                      mb: 0.5,
                    }}
                  >
                    Studio Headquarters
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#52525B",
                      mb: 2,
                    }}
                  >
                    Udaipur, Rajasthan, India
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#52525B",
                      lineHeight: 1.65,
                      mb: 3,
                    }}
                  >
                    Serving domestic leaders across India and international clients in North America,
                    Europe, and the Gulf with seamless async coordination.
                  </Typography>
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      p: 1.5,
                      borderRadius: "10px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      mb: 2,
                    }}
                  >
                    <PublicOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                    <Typography sx={{ fontSize: "0.8rem", color: "#18181B", fontWeight: 600 }}>
                      Hours: 9:30 AM – 7:30 PM IST (UTC+5:30)
                    </Typography>
                  </Box>

                  <Link href="/how-we-work" style={{ textDecoration: "none" }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        color: "#18181B",
                        borderColor: "rgba(24, 24, 27, 0.2)",
                        py: 1.35,
                        borderRadius: "9999px",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        "&:hover": {
                          borderColor: "#EA580C",
                          color: "#EA580C",
                          bgcolor: "rgba(249, 115, 22, 0.05)",
                        },
                      }}
                    >
                      Our Delivery Process
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. THE 1-CLICK COPYABLE BRIEF (Zero-Form Alternative) */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, lg: 8 }} sx={{ alignItems: "center" }}>
            {/* Left Description */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2.5,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                  }}
                >
                  FRICTIONLESS ONBOARDING
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: "#18181B",
                  lineHeight: 1.15,
                  mb: 2.5,
                }}
              >
                Not sure what to write? <br />
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Use our 1-click project brief.
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontSize: "1.05rem",
                  color: "#52525B",
                  lineHeight: 1.75,
                  mb: 3.5,
                }}
              >
                Instead of forcing you through a restrictive 20-question form, copy this structured
                template directly into your email or WhatsApp message. It gives us exactly what we need
                to run a senior feasibility diagnosis.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 4 }}>
                {[
                  "No mandatory field validations blocking your submission.",
                  "Attach architecture diagrams, mockups, or loom recordings freely.",
                  "Directly paste into your personal or corporate email client.",
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 20, mt: 0.2 }} />
                    <Typography sx={{ fontSize: "0.95rem", color: "#18181B", fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Button
                  onClick={handleCopyBrief}
                  variant="contained"
                  startIcon={
                    copiedBrief ? (
                      <CheckCircleRoundedIcon sx={{ color: "#FFFFFF" }} />
                    ) : (
                      <ContentCopyRoundedIcon />
                    )
                  }
                  sx={{
                    background: copiedBrief
                      ? "linear-gradient(135deg, #16A34A 0%, #22C55E 100%)"
                      : "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: 3.5,
                    py: 1.4,
                    fontWeight: 700,
                    borderRadius: "9999px",
                    boxShadow: "0 8px 24px rgba(234, 88, 12, 0.3)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {copiedBrief ? "Brief Copied to Clipboard!" : "Copy Brief Template"}
                </Button>

                <Button
                  component="a"
                  href={prefilledMailto}
                  variant="outlined"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    color: "#18181B",
                    borderColor: "rgba(24, 24, 27, 0.2)",
                    px: 3,
                    py: 1.4,
                    fontWeight: 600,
                    borderRadius: "9999px",
                    "&:hover": {
                      borderColor: "#EA580C",
                      color: "#EA580C",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Open Pre-Filled Email
                </Button>
              </Box>
            </Grid>

            {/* Right: Code Block Card */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <Box
                sx={{
                  bgcolor: "#18181B",
                  borderRadius: "24px",
                  p: { xs: 3, sm: 4.5 },
                  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Window Header */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    pb: 2,
                    mb: 2.5,
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#EF4444" }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#F59E0B" }} />
                    <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#10B981" }} />
                    <Typography
                      sx={{
                        ml: 1.5,
                        color: "#A1A1AA",
                        fontFamily: "monospace",
                        fontSize: "0.8rem",
                      }}
                    >
                      project-brief-template.txt
                    </Typography>
                  </Box>

                  <Tooltip title={copiedBrief ? "Copied!" : "Copy template"}>
                    <IconButton
                      onClick={handleCopyBrief}
                      size="small"
                      sx={{
                        color: copiedBrief ? "#22C55E" : "#A1A1AA",
                        bgcolor: "rgba(255, 255, 255, 0.06)",
                        "&:hover": { bgcolor: "rgba(255, 255, 255, 0.12)" },
                      }}
                    >
                      {copiedBrief ? (
                        <CheckCircleRoundedIcon fontSize="small" />
                      ) : (
                        <ContentCopyRoundedIcon fontSize="small" />
                      )}
                    </IconButton>
                  </Tooltip>
                </Box>

                {/* Template Content */}
                <Box
                  component="pre"
                  sx={{
                    fontFamily:
                      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
                    fontSize: { xs: "0.825rem", sm: "0.88rem" },
                    color: "#F4F4F5",
                    lineHeight: 1.75,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    m: 0,
                  }}
                >
                  {BRIEF_TEMPLATE}
                </Box>

                <Box
                  sx={{
                    mt: 3,
                    pt: 2.5,
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", color: "#A1A1AA" }}>
                    Send to:{" "}
                    <Box component="span" sx={{ color: "#FB923C", fontWeight: 700 }}>
                      hello.aetibar@gmail.com
                    </Box>
                  </Typography>
                  <Typography sx={{ fontSize: "0.75rem", color: "#71717A" }}>
                    Plain Text / Markdown Compatible
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. OPTIONAL INTERACTIVE ARCHITECTURE SCOPING FORM */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2,
              }}
            >
              <TuneOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                INTERACTIVE SCOPE INTAKE
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.75rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Prefer submitting directly on this page?
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B" }}>
              Select your requirements below. This sends structured scope parameters directly to our senior engineering queue.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 880,
              mx: "auto",
              bgcolor: "#FAF8F5",
              borderRadius: "28px",
              p: { xs: 3.5, sm: 6 },
              border: "1px solid rgba(228, 228, 231, 0.9)",
              boxShadow: "0 16px 40px rgba(24, 24, 27, 0.04)",
            }}
          >
            {formSubmitted ? (
              <Box sx={{ py: 6, textAlign: "center" }}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    bgcolor: "rgba(234, 88, 12, 0.1)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 36 }} />
                </Box>
                <Typography variant="h3" sx={{ fontSize: "1.8rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}>
                  Scope Request Dispatched.
                </Typography>
                <Typography sx={{ color: "#52525B", maxWidth: 520, mx: "auto", mb: 4, lineHeight: 1.75 }}>
                  Thank you, <strong>{name || "there"}</strong>. Your technical parameters have been routed directly to our
                  senior systems engineer. Expect a response with 2–3 clarifying questions within 24 business hours.
                </Typography>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  variant="outlined"
                  sx={{
                    color: "#18181B",
                    borderColor: "rgba(24, 24, 27, 0.2)",
                    borderRadius: "9999px",
                    px: 3,
                    fontWeight: 600,
                  }}
                >
                  Submit Another Scope
                </Button>
              </Box>
            ) : (
              <form onSubmit={handleFormSubmit}>
                {/* Step 1: Friction Area */}
                <Box sx={{ mb: 4.5 }}>
                  <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.06em", textTransform: "uppercase", mb: 1 }}>
                    1. Primary Area of Focus
                  </Typography>
                  <Typography sx={{ fontSize: "1.1rem", fontWeight: 600, color: "#18181B", mb: 2 }}>
                    What system are you looking to engineer?
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2 }}>
                    {improvementOptions.map((opt) => {
                      const isSelected = selectedImprovement.includes(opt);
                      return (
                        <Box
                          key={opt}
                          onClick={() => toggleImprovement(opt)}
                          sx={{
                            px: 2.2,
                            py: 1,
                            borderRadius: "9999px",
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            bgcolor: isSelected ? "#18181B" : "#FFFFFF",
                            color: isSelected ? "#FB923C" : "#52525B",
                            border: isSelected ? "1px solid #EA580C" : "1px solid rgba(228, 228, 231, 0.9)",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              borderColor: "#EA580C",
                            },
                          }}
                        >
                          {opt} {isSelected && "✓"}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>

                {/* Step 2: Current Tools */}
                <Box sx={{ mb: 4.5 }}>
                  <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.06em", textTransform: "uppercase", mb: 1 }}>
                    2. Current Workflow
                  </Typography>
                  <Typography sx={{ fontSize: "1.1rem", fontWeight: 600, color: "#18181B", mb: 2 }}>
                    How is this work currently handled in your team?
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2 }}>
                    {currentManagementOptions.map((opt) => {
                      const isSelected = selectedManagement.includes(opt);
                      return (
                        <Box
                          key={opt}
                          onClick={() => toggleManagement(opt)}
                          sx={{
                            px: 2.2,
                            py: 1,
                            borderRadius: "9999px",
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            bgcolor: isSelected ? "#18181B" : "#FFFFFF",
                            color: isSelected ? "#FB923C" : "#52525B",
                            border: isSelected ? "1px solid #EA580C" : "1px solid rgba(228, 228, 231, 0.9)",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              borderColor: "#EA580C",
                            },
                          }}
                        >
                          {opt} {isSelected && "✓"}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>

                {/* Step 3: Contact Inputs */}
                <Box sx={{ mb: 4 }}>
                  <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.06em", textTransform: "uppercase", mb: 1 }}>
                    3. Your Details
                  </Typography>
                  <Typography sx={{ fontSize: "1.1rem", fontWeight: 600, color: "#18181B", mb: 2.5 }}>
                    Where should we send our architectural response?
                  </Typography>

                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        label="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="outlined"
                        sx={{ bgcolor: "#FFFFFF", borderRadius: "10px" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        required
                        fullWidth
                        type="email"
                        label="Work Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        sx={{ bgcolor: "#FFFFFF", borderRadius: "10px" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Company / Business Name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        variant="outlined"
                        sx={{ bgcolor: "#FFFFFF", borderRadius: "10px" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone / WhatsApp (Optional)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        variant="outlined"
                        sx={{ bgcolor: "#FFFFFF", borderRadius: "10px" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Brief Overview of the Bottleneck (Optional)"
                        placeholder="Tell us what is causing friction or what features you need..."
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        variant="outlined"
                        sx={{ bgcolor: "#FFFFFF", borderRadius: "10px" }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendOutlinedIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: 4.5,
                    py: 1.6,
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    boxShadow: "0 10px 28px rgba(234, 88, 12, 0.35)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Dispatch Scope to Engineering Lead
                </Button>
              </form>
            )}
          </Box>
        </Container>
      </Box>

      {/* 5. TRANSPARENT TURNAROUND PROTOCOL (4-Stage Process) */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: { xs: 6, md: 9 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                TRANSPARENT PROTOCOL
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "#18181B",
                mb: 2,
              }}
            >
              What happens after you reach out?
            </Typography>
            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Here is our exact turnaround framework. No aggressive sales sequences, no bait-and-switch.
              Just disciplined engineering diagnosis.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {processSteps.map((item) => (
              <Grid key={item.step} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "20px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    boxShadow: "0 4px 16px rgba(24, 24, 27, 0.02)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "#EA580C",
                      lineHeight: 1,
                      mb: 2,
                      fontFamily: "monospace",
                    }}
                  >
                    {item.step}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "#18181B",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Chip
                    label={item.timeframe}
                    size="small"
                    sx={{
                      bgcolor: "rgba(249, 115, 22, 0.1)",
                      color: "#EA580C",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      alignSelf: "flex-start",
                      mb: 2,
                      borderRadius: "6px",
                    }}
                  />

                  <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.65 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 6. STUDIO GUARANTEES (Home Page Dark Zinc Luxury Container) */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#18181B",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient Warm Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center", maxWidth: 740, mx: "auto", mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.15)",
                border: "1px solid rgba(251, 146, 60, 0.3)",
                mb: 2,
              }}
            >
              <BoltOutlinedIcon sx={{ fontSize: 16, color: "#FB923C" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#FB923C",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                NON-NEGOTIABLE STUDIO COMMITMENTS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              How we protect your time &amp; intellectual property.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {[
              {
                icon: ShieldOutlinedIcon,
                title: "Strict Confidentiality & Mutual NDAs",
                desc: "We regularly work with proprietary ERP data, financial workflows, and sensitive customer pipelines. We execute mutual NDAs before any code or process inspection.",
              },
              {
                icon: EngineeringOutlinedIcon,
                title: "Zero Junior Bait-and-Switch",
                desc: "The senior software architects who diagnose your system are the same engineers building your database schemas and edge APIs. Zero outsourced brokers.",
              },
              {
                icon: CodeRoundedIcon,
                title: "100% Asset & Code Sovereignty",
                desc: "You own every single line of code, GitHub repository, and database deployment from day 1. No vendor lock-in, no proprietary agency licensing fees.",
              },
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <Grid key={idx} size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "20px",
                      bgcolor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "rgba(249, 115, 22, 0.4)",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        bgcolor: "rgba(249, 115, 22, 0.15)",
                        border: "1px solid rgba(249, 115, 22, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                        color: "#FB923C",
                      }}
                    >
                      <IconComp sx={{ fontSize: 24 }} />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        color: "#FFFFFF",
                        mb: 1.5,
                      }}
                    >
                      {pillar.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.925rem",
                        color: "#A1A1AA",
                        lineHeight: 1.75,
                      }}
                    >
                      {pillar.desc}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                }}
              >
                DIRECT ANSWERS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.6rem" },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                color: "#18181B",
              }}
            >
              Frequently Asked Questions
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                disableGutters
                elevation={0}
                sx={{
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  borderRadius: "16px !important",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#EA580C" }} />}
                  sx={{
                    px: 3,
                    py: 1.25,
                    "& .MuiAccordionSummary-content": { my: 1.25 },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "0.98rem", sm: "1.08rem" },
                      color: "#18181B",
                    }}
                  >
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pt: 0, pb: 3 }}>
                  <Typography sx={{ color: "#52525B", lineHeight: 1.75, fontSize: "0.95rem" }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 8. SOCIAL & EXPLORATION FOOTER */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.35rem", md: "1.6rem" },
                  color: "#18181B",
                  mb: 1.5,
                }}
              >
                Connect with our studio leadership
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.7, mb: 3 }}>
                Follow our architectural insights, engineering breakdowns, and live case studies
                across industry networks.
              </Typography>

              <Box sx={{ display: "flex", gap: 1.5 }}>
                <IconButton
                  component="a"
                  href="https://x.com/Aetibar_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aetibar on X"
                  sx={{
                    color: "#18181B",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    width: 46,
                    height: 46,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#18181B",
                      color: "#FFFFFF",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/company/aetibar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aetibar on LinkedIn"
                  sx={{
                    color: "#18181B",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    width: 46,
                    height: 46,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#18181B",
                      color: "#FFFFFF",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/aetibar_information/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aetibar on Instagram"
                  sx={{
                    color: "#18181B",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    width: 46,
                    height: 46,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#18181B",
                      color: "#FFFFFF",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  p: 3.5,
                  borderRadius: "20px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                }}
              >
                <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", mb: 1, textTransform: "uppercase" }}>
                  Not ready to scope yet?
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: "1.15rem", color: "#18181B", mb: 2 }}>
                  Explore how we engineer production systems.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Link href="/portfolio" style={{ textDecoration: "none" }}>
                    <Button
                      fullWidth
                      variant="text"
                      endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        justifyContent: "space-between",
                        color: "#18181B",
                        p: 1.5,
                        borderRadius: "10px",
                        bgcolor: "#FAF8F5",
                        border: "1px solid rgba(228, 228, 231, 0.8)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        "&:hover": {
                          bgcolor: "#FAF8F5",
                          borderColor: "#EA580C",
                          color: "#EA580C",
                        },
                      }}
                    >
                      View Real-World Case Studies
                    </Button>
                  </Link>

                  <Link href="/solutions" style={{ textDecoration: "none" }}>
                    <Button
                      fullWidth
                      variant="text"
                      endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        justifyContent: "space-between",
                        color: "#18181B",
                        p: 1.5,
                        borderRadius: "10px",
                        bgcolor: "#FAF8F5",
                        border: "1px solid rgba(228, 228, 231, 0.8)",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        "&:hover": {
                          bgcolor: "#FAF8F5",
                          borderColor: "#EA580C",
                          color: "#EA580C",
                        },
                      }}
                    >
                      Explore 4 Solution Engines
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
