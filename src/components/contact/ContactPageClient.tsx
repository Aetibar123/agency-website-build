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
  Chip,
} from "@mui/material";
import Link from "next/link";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import { motion } from "framer-motion";

const BRIEF_TEMPLATE = `Hi Aetibar Team,

1. Business & Industry: [e.g., Healthcare / Retail / B2B Services]
2. What You Need: [Website, mobile app, SEO, social media, advertising, AI automation, etc.]
3. Current Situation: [Briefly describe your current setup or challenge]
4. Your Goals: [What would you like to improve, automate, or achieve?]
5. Preferred Timeline: [e.g., 2–4 weeks / Flexible]`;

const faqs = [
  {
    q: "How quickly will you respond to my inquiry?",
    a: "We aim to respond to inquiries within 1–2 business days with relevant questions or next steps based on your requirements.",
  },
  {
    q: "Can I contact you if I don't have a detailed plan yet?",
    a: "Yes. You can simply explain what your business needs, what problem you are facing, or what you want to improve. We can discuss the requirements and suggest a practical approach.",
  },
  {
    q: "Can I share confidential business information?",
    a: "Yes. Please share only the information needed to discuss your requirements. If a formal NDA is required, we can discuss the appropriate arrangement before sharing sensitive details.",
  },
  {
    q: "Do you work with businesses outside Udaipur?",
    a: "Yes. We work with businesses in India and international markets. Communication and project collaboration can be handled remotely.",
  },
  {
    q: "What happens after I contact Aetibar?",
    a: "We first understand your requirements, current setup, and goals. If the project is a good fit, we discuss the scope, expected deliverables, timeline, and pricing before moving forward.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand Your Needs",
    timeframe: "Initial Discussion",
    desc: "We review your requirements, current setup, challenges, and what you want to achieve.",
  },
  {
    step: "02",
    title: "Ask the Right Questions",
    timeframe: "After Your Inquiry",
    desc: "We clarify the important details so we can understand what your business actually needs.",
  },
  {
    step: "03",
    title: "Recommend the Right Approach",
    timeframe: "Based on Your Needs",
    desc: "We suggest the relevant service, tools, and approach based on your goals and requirements.",
  },
  {
    step: "04",
    title: "Define the Project",
    timeframe: "Before Work Begins",
    desc: "We agree on the scope, deliverables, timeline, and pricing before moving forward.",
  },
];

export default function ContactPageClient() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

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

  const prefilledMailto = `mailto:hello.aetibar@gmail.com?subject=${encodeURIComponent(
    "Project Architecture Scoping | Aetibar",
  )}&body=${encodeURIComponent(BRIEF_TEMPLATE)}`;

  return (
    <Box sx={{ bgcolor: "#FFFFFF", color: "#183D35", minHeight: "100vh" }}>
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (LEFT-ALIGNED, DARK PINE #183D35)                         */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 16, sm: 19, md: 22 },
          pb: { xs: 10, md: 14 },
          bgcolor: "#183D35",
          color: "#FFFFFF",
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

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 940 }}>
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
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
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "#D8E5D5",
                    boxShadow: "0 0 10px #D8E5D5",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.825rem" },
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#D8E5D5",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  DIRECT EMAIL ACCESS • SIMPLE COMMUNICATION
                </Typography>
              </Box>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: {
                    xs: "2.1rem",
                    sm: "2.8rem",
                    md: "3.5rem",
                    lg: "4.1rem",
                  },
                  fontWeight: 400,
                  letterSpacing: "-0.025em",
                  lineHeight: { xs: 1.15, sm: 1.12, md: 1.1 },
                  maxWidth: { xs: "100%", md: 940 },
                  color: "#FFFFFF",
                  mb: 3,
                }}
              >
                Reach our team directly via{" "}
                <Box
                  component="span"
                  sx={{
                    fontStyle: "italic",
                    color: "#D8E5D5",
                    display: "inline",
                  }}
                >
                  email.
                </Box>
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.28,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: 1.75,
                  maxWidth: 780,
                  mb: 4.5,
                  fontWeight: 400,
                }}
              >
                No aggressive sales tactics or automated sequences. Share your
                requirements, business challenges, or project ideas directly
                with our team.
              </Typography>
            </motion.div>

            {/* Quick Hero Action Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    component="a"
                    href="mailto:hello.aetibar@gmail.com"
                    variant="contained"
                    size="large"
                    startIcon={<EmailOutlinedIcon />}
                    sx={{
                      bgcolor: "#D8E5D5",
                      color: "#183D35",
                      px: { xs: 3.5, sm: 4 },
                      py: 1.6,
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      borderRadius: "9999px",
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
                    Email: hello.aetibar@gmail.com
                  </Button>
                </motion.div>

                <Tooltip
                  title={
                    copiedEmail ? "Copied to clipboard!" : "Copy direct email"
                  }
                >
                  <Button
                    onClick={handleCopyEmail}
                    variant="outlined"
                    startIcon={
                      copiedEmail ? (
                        <CheckCircleRoundedIcon sx={{ color: "#D8E5D5" }} />
                      ) : (
                        <ContentCopyRoundedIcon sx={{ color: "rgba(255, 255, 255, 0.8)" }} />
                      )
                    }
                    sx={{
                      color: copiedEmail ? "#D8E5D5" : "#FFFFFF",
                      borderColor: copiedEmail
                        ? "#D8E5D5"
                        : "rgba(216, 229, 213, 0.3)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      textTransform: "none",
                      px: 3,
                      py: 1.5,
                      borderRadius: "9999px",
                      bgcolor: "rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(8px)",
                      "&:hover": {
                        bgcolor: "rgba(216, 229, 213, 0.16)",
                        borderColor: "#D8E5D5",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {copiedEmail ? "Email Copied!" : "Copy Email"}
                  </Button>
                </Tooltip>

                <Button
                  component="a"
                  href="#brief-template"
                  variant="text"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textTransform: "none",
                    px: 2.5,
                    py: 1.5,
                    borderRadius: "9999px",
                    "&:hover": {
                      color: "#D8E5D5",
                      bgcolor: "rgba(216, 229, 213, 0.1)",
                    },
                  }}
                >
                  Use 1-Click Brief
                </Button>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 2. PRIMARY DIRECT EMAIL CHANNEL (CENTER-ALIGNED HEADER, WHITE #FFFFFF)    */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 16 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(24, 61, 53, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              mb: { xs: 6, md: 8 },
              textAlign: "center",
              maxWidth: 900,
              mx: "auto",
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.08)",
                border: "1px solid rgba(61, 118, 93, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#3D765D",
                  fontFamily: "monospace",
                }}
              >
                EXCLUSIVE DIRECT CONTACT
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: {
                  xs: "1.9rem",
                  sm: "2.4rem",
                  md: "3rem",
                  lg: "3.4rem",
                },
                fontWeight: 400,
                letterSpacing: "-0.025em",
                lineHeight: { xs: 1.2, md: 1.15 },
                textWrap: "balance",
                mx: "auto",
                color: "#183D35",
                mb: 2,
              }}
            >
              One direct inbox. Straight to senior engineering.
            </Typography>
            <Typography
              sx={{ color: "#52525B", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 780, mx: "auto" }}
            >
              We work with businesses in India and international markets through
              direct email communication—simple, clear, and without unnecessary
              sales layers.
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {/* Card 1: Official Engineering Email */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "24px",
                  bgcolor: "#F7F7F2",
                  border: "1px solid rgba(24, 61, 53, 0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 4px 18px rgba(24, 61, 53, 0.03)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 36px -12px rgba(61, 118, 93, 0.14)",
                    borderColor: "#3D765D",
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      bgcolor: "rgba(61, 118, 93, 0.08)",
                      border: "1px solid rgba(61, 118, 93, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                      color: "#3D765D",
                    }}
                  >
                    <EmailOutlinedIcon sx={{ fontSize: 26 }} />
                  </Box>

                  <Chip
                    label="Official Contact Method"
                    size="small"
                    sx={{
                      bgcolor: "rgba(61, 118, 93, 0.1)",
                      color: "#3D765D",
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
                      fontFamily: '"DM Serif Display", serif',
                      fontWeight: 400,
                      fontSize: "1.45rem",
                      color: "#183D35",
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
                      color: "#3D765D",
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
                    Ideal for project requirements, business challenges, ideas,
                    documents, or reference materials.
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
                      border: "1px solid rgba(24, 61, 53, 0.08)",
                      mb: 2,
                    }}
                  >
                    <AccessTimeOutlinedIcon
                      sx={{ fontSize: 16, color: "#3D765D" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#183D35",
                        fontWeight: 600,
                      }}
                    >
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
                      bgcolor: "#183D35",
                      color: "#FFFFFF",
                      py: 1.35,
                      borderRadius: "9999px",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      textTransform: "none",
                      boxShadow: "0 6px 18px rgba(24, 61, 53, 0.15)",
                      "&:hover": {
                        bgcolor: "#3D765D",
                      },
                    }}
                  >
                    Send Email Directly
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Card 2: Direct Senior Engineer Review */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "24px",
                  bgcolor: "#F7F7F2",
                  border: "1px solid rgba(24, 61, 53, 0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 4px 18px rgba(24, 61, 53, 0.03)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 36px -12px rgba(61, 118, 93, 0.14)",
                    borderColor: "#3D765D",
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      bgcolor: "rgba(24, 61, 53, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                      color: "#183D35",
                    }}
                  >
                    <EngineeringOutlinedIcon sx={{ fontSize: 26 }} />
                  </Box>

                  <Chip
                    label="Zero Sales Bureaucracy"
                    size="small"
                    sx={{
                      bgcolor: "rgba(24, 61, 53, 0.06)",
                      color: "#183D35",
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
                      fontFamily: '"DM Serif Display", serif',
                      fontWeight: 400,
                      fontSize: "1.45rem",
                      color: "#183D35",
                      mb: 0.5,
                    }}
                  >
                    Team Review
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#52525B",
                      mb: 2,
                    }}
                  >
                    Direct Team Communication
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#52525B",
                      lineHeight: 1.65,
                      mb: 3,
                    }}
                  >
                    Your message is reviewed by our team, and we respond with
                    relevant questions, practical recommendations, and next
                    steps.
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
                      border: "1px solid rgba(24, 61, 53, 0.08)",
                      mb: 2,
                    }}
                  >
                    <CodeRoundedIcon sx={{ fontSize: 16, color: "#3D765D" }} />
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#183D35",
                        fontWeight: 600,
                      }}
                    >
                      Experienced In-House Team
                    </Typography>
                  </Box>

                  <Button
                    component="a"
                    href="#brief-template"
                    fullWidth
                    variant="outlined"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      color: "#183D35",
                      borderColor: "rgba(24, 61, 53, 0.2)",
                      py: 1.35,
                      borderRadius: "9999px",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#3D765D",
                        color: "#3D765D",
                        bgcolor: "rgba(61, 118, 93, 0.05)",
                      },
                    }}
                  >
                    View Brief Format
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Card 3: Asynchronous Collaboration & NDAs */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "24px",
                  bgcolor: "#F7F7F2",
                  border: "1px solid rgba(24, 61, 53, 0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 4px 18px rgba(24, 61, 53, 0.03)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 36px -12px rgba(61, 118, 93, 0.14)",
                    borderColor: "#3D765D",
                  },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "14px",
                      bgcolor: "rgba(24, 61, 53, 0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                      color: "#183D35",
                    }}
                  >
                    <ShieldOutlinedIcon sx={{ fontSize: 26 }} />
                  </Box>

                  <Chip
                    label="Strict Confidentiality"
                    size="small"
                    sx={{
                      bgcolor: "rgba(24, 61, 53, 0.06)",
                      color: "#183D35",
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
                      fontFamily: '"DM Serif Display", serif',
                      fontWeight: 400,
                      fontSize: "1.45rem",
                      color: "#183D35",
                      mb: 0.5,
                    }}
                  >
                    Confidential &amp; Async
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#52525B",
                      mb: 2,
                    }}
                  >
                    Mutual NDAs on request
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.9rem",
                      color: "#52525B",
                      lineHeight: 1.65,
                      mb: 3,
                    }}
                  >
                    We understand that business information can be sensitive.
                    Share the details needed to discuss your requirements, or
                    request an NDA before sharing confidential information.
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
                      border: "1px solid rgba(24, 61, 53, 0.08)",
                      mb: 2,
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{ fontSize: 16, color: "#3D765D" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#183D35",
                        fontWeight: 600,
                      }}
                    >
                      Remote Collaboration
                    </Typography>
                  </Box>

                  <Link href="/work" style={{ textDecoration: "none" }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      endIcon={
                        <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                      }
                      sx={{
                        color: "#183D35",
                        borderColor: "rgba(24, 61, 53, 0.2)",
                        py: 1.35,
                        borderRadius: "9999px",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "#3D765D",
                          color: "#3D765D",
                          bgcolor: "rgba(61, 118, 93, 0.05)",
                        },
                      }}
                    >
                      Explore Our Work
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 3. 1-CLICK BRIEF (LEFT-ALIGNED HEADER, WARM WHITE #F7F7F2)               */}
      {/* ========================================================================= */}
      <Box
        id="brief-template"
        component="section"
        sx={{
          py: { xs: 12, md: 18 },
          bgcolor: "#F7F7F2",
          borderBottom: "1px solid rgba(24, 61, 53, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 6, lg: 8 }}
            sx={{ alignItems: "center" }}
          >
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
                  bgcolor: "rgba(61, 118, 93, 0.08)",
                  border: "1px solid rgba(61, 118, 93, 0.25)",
                  mb: 2.5,
                }}
              >
                <AssignmentOutlinedIcon
                  sx={{ fontSize: 16, color: "#3D765D" }}
                />
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#3D765D",
                    fontFamily: "monospace",
                  }}
                >
                  DIRECT EMAIL BRIEF
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: { xs: "1.9rem", sm: "2.3rem", md: "2.75rem" },
                  fontWeight: 400,
                  letterSpacing: "-0.025em",
                  color: "#183D35",
                  lineHeight: { xs: 1.2, md: 1.15 },
                  textWrap: "balance",
                  mb: 2.5,
                }}
              >
                Not sure what to write?{" "}
                <Box
                  component="span"
                  sx={{
                    fontStyle: "italic",
                    color: "#3D765D",
                    display: "inline",
                  }}
                >
                  Use Our Simple Project Brief
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
                Instead of filling out a long form, copy this simple template
                into your email. It helps us quickly understand your
                requirements and suggest the right next steps.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  mb: 4,
                }}
              >
                {[
                  "No mandatory field validations blocking your submission.",
                  "Attach architecture diagrams, mockups, or loom recordings freely.",
                  "Directly paste into your personal or corporate email client.",
                ].map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                  >
                    <CheckCircleOutlinedIcon
                      sx={{ color: "#3D765D", fontSize: 20, mt: 0.2 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        color: "#183D35",
                        fontWeight: 500,
                      }}
                    >
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
                      <CheckCircleRoundedIcon sx={{ color: "#183D35" }} />
                    ) : (
                      <ContentCopyRoundedIcon sx={{ color: "#183D35" }} />
                    )
                  }
                  sx={{
                    bgcolor: copiedBrief ? "#A7F3D0" : "#D8E5D5",
                    color: "#183D35",
                    px: 3.5,
                    py: 1.4,
                    fontWeight: 700,
                    textTransform: "none",
                    borderRadius: "9999px",
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)",
                    "&:hover": {
                      bgcolor: "#FFFFFF",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {copiedBrief
                    ? "Brief Copied to Clipboard!"
                    : "Copy Brief Template"}
                </Button>

                <Button
                  component="a"
                  href={prefilledMailto}
                  variant="outlined"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    color: "#183D35",
                    borderColor: "rgba(24, 61, 53, 0.25)",
                    px: 3,
                    py: 1.4,
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "9999px",
                    "&:hover": {
                      borderColor: "#3D765D",
                      color: "#3D765D",
                      bgcolor: "#FFFFFF",
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
                  bgcolor: "#183D35",
                  borderRadius: "24px",
                  p: { xs: 3, sm: 4.5 },
                  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.25)",
                  border: "1px solid rgba(216, 229, 213, 0.2)",
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
                    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: "#EF4444",
                      }}
                    />
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: "#F59E0B",
                      }}
                    />
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: "#10B981",
                      }}
                    />
                    <Typography
                      sx={{
                        ml: 1.5,
                        color: "#D8E5D5",
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
                        color: copiedBrief ? "#D8E5D5" : "rgba(255, 255, 255, 0.7)",
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                        "&:hover": { bgcolor: "rgba(255, 255, 255, 0.15)" },
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
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.75)" }}>
                    Send to:{" "}
                    <Box
                      component="span"
                      sx={{ color: "#D8E5D5", fontWeight: 700 }}
                    >
                      hello.aetibar@gmail.com
                    </Box>
                  </Typography>
                  <Typography sx={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.55)" }}>
                    Plain Text / Markdown Compatible
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 4. PROCESS PROTOCOL (CENTER-ALIGNED HEADER, WHITE #FFFFFF)                */}
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
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 900,
              mx: "auto",
              mb: { xs: 6, md: 9 },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.08)",
                border: "1px solid rgba(61, 118, 93, 0.25)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#3D765D",
                  fontFamily: "monospace",
                }}
              >
                CLEAR PROCESS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: {
                  xs: "1.9rem",
                  sm: "2.4rem",
                  md: "3rem",
                  lg: "3.4rem",
                },
                fontWeight: 400,
                letterSpacing: "-0.025em",
                lineHeight: { xs: 1.2, md: 1.15 },
                textWrap: "balance",
                mx: "auto",
                color: "#183D35",
                mb: 2,
              }}
            >
              What Happens After You Contact Us?
            </Typography>
            <Typography
              sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75, maxWidth: 780, mx: "auto" }}
            >
              Here’s what you can expect after reaching out—clear communication,
              practical questions, and straightforward next steps.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {processSteps.map((item) => (
              <Grid key={item.step} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    p: 3.5,
                    borderRadius: "20px",
                    bgcolor: "#F7F7F2",
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    boxShadow: "0 4px 16px rgba(24, 61, 53, 0.02)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: "#3D765D",
                      bgcolor: "#FFFFFF",
                      boxShadow: "0 12px 30px -8px rgba(61, 118, 93, 0.12)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "#3D765D",
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
                      fontFamily: '"DM Serif Display", serif',
                      fontWeight: 400,
                      fontSize: "1.25rem",
                      color: "#183D35",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Chip
                    label={item.timeframe}
                    size="small"
                    sx={{
                      bgcolor: "rgba(61, 118, 93, 0.1)",
                      color: "#3D765D",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      alignSelf: "flex-start",
                      mb: 2,
                      borderRadius: "6px",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      color: "#52525B",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 5. STUDIO COMMITMENTS (LEFT-ALIGNED HEADER, DARK PINE #183D35)            */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 12, md: 18 },
          bgcolor: "#183D35",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Ambient Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(61, 118, 93, 0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              maxWidth: 900,
              mb: { xs: 6, md: 8 },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(216, 229, 213, 0.12)",
                border: "1px solid rgba(216, 229, 213, 0.3)",
                mb: 2,
              }}
            >
              <BoltOutlinedIcon sx={{ fontSize: 16, color: "#D8E5D5" }} />
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#D8E5D5",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                OUR COMMITMENTS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: {
                  xs: "1.9rem",
                  sm: "2.4rem",
                  md: "3rem",
                  lg: "3.4rem",
                },
                fontWeight: 400,
                letterSpacing: "-0.025em",
                lineHeight: { xs: 1.2, md: 1.15 },
                color: "#FFFFFF",
              }}
            >
              How We Respect Your Time &amp; Information
            </Typography>
          </Box>

          <Grid container spacing={3.5}>
            {[
              {
                icon: ShieldOutlinedIcon,
                title: "Respect for Confidential Information",
                desc: "We understand that business information can be sensitive. If your project requires an NDA, we can discuss the appropriate arrangement before reviewing confidential details.",
              },
              {
                icon: EngineeringOutlinedIcon,
                title: "Direct Team Communication",
                desc: "We keep communication direct and simple, so you can discuss your requirements, questions, and feedback with the relevant people working on your project.",
              },
              {
                icon: CodeRoundedIcon,
                title: "Clear Access & Handover",
                desc: "We provide the agreed files, accounts, access, and other digital assets as defined in the project scope and handover requirements.",
              },
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <Grid key={idx} size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "20px",
                      bgcolor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(216, 229, 213, 0.18)",
                      backdropFilter: "blur(10px)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "rgba(216, 229, 213, 0.45)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 18px 36px -10px rgba(0, 0, 0, 0.3)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        bgcolor: "rgba(216, 229, 213, 0.12)",
                        border: "1px solid rgba(216, 229, 213, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2.5,
                        color: "#D8E5D5",
                      }}
                    >
                      <IconComp sx={{ fontSize: 24 }} />
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: '"DM Serif Display", serif',
                        fontWeight: 400,
                        fontSize: "1.35rem",
                        color: "#FFFFFF",
                        mb: 1.5,
                      }}
                    >
                      {pillar.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "0.925rem",
                        color: "rgba(255, 255, 255, 0.78)",
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

      {/* ========================================================================= */}
      {/* 6. FAQS (CENTER-ALIGNED HEADER, WHITE #FFFFFF)                            */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{ py: { xs: 12, md: 18 }, bgcolor: "#FFFFFF", borderBottom: "1px solid rgba(24, 61, 53, 0.08)" }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 820,
              mx: "auto",
              mb: 6,
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.08)",
                border: "1px solid rgba(61, 118, 93, 0.25)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#3D765D",
                  fontFamily: "monospace",
                }}
              >
                DIRECT ANSWERS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: {
                  xs: "1.9rem",
                  sm: "2.4rem",
                  md: "3rem",
                  lg: "3.4rem",
                },
                fontWeight: 400,
                letterSpacing: "-0.025em",
                lineHeight: { xs: 1.2, md: 1.15 },
                textWrap: "balance",
                mx: "auto",
                color: "#183D35",
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
                  bgcolor: "#F7F7F2",
                  border: "1px solid rgba(24, 61, 53, 0.08)",
                  borderRadius: "16px !important",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "#3D765D",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#3D765D" }} />}
                  sx={{
                    px: 3,
                    py: 1.25,
                    "& .MuiAccordionSummary-content": { my: 1.25 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"DM Serif Display", serif',
                      fontWeight: 400,
                      fontSize: { xs: "1.05rem", sm: "1.18rem" },
                      color: "#183D35",
                    }}
                  >
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pt: 0, pb: 3 }}>
                  <Typography
                    sx={{
                      color: "#52525B",
                      lineHeight: 1.75,
                      fontSize: "0.95rem",
                    }}
                  >
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 7. SOCIAL & EXPLORATION FOOTER (LEFT-ALIGNED, WARM WHITE #F7F7F2)         */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#F7F7F2",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: { xs: "1.65rem", md: "2.1rem" },
                  color: "#183D35",
                  letterSpacing: "-0.02em",
                  mb: 1.5,
                }}
              >
                Connect With Our Team
              </Typography>
              <Typography
                sx={{
                  color: "#52525B",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  mb: 3.5,
                  maxWidth: 500,
                }}
              >
                Follow our latest insights, project updates, and practical digital solutions across our social channels.
              </Typography>

              <Box sx={{ display: "flex", gap: 1.5 }}>
                <IconButton
                  component="a"
                  href="https://x.com/Aetibar_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Aetibar on X"
                  sx={{
                    color: "#183D35",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(24, 61, 53, 0.12)",
                    width: 48,
                    height: 48,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#183D35",
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
                    color: "#183D35",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(24, 61, 53, 0.12)",
                    width: 48,
                    height: 48,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#183D35",
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
                    color: "#183D35",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(24, 61, 53, 0.12)",
                    width: 48,
                    height: 48,
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: "#183D35",
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
                  p: { xs: 3.5, sm: 4.5 },
                  borderRadius: "24px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(24, 61, 53, 0.08)",
                  boxShadow: "0 6px 20px rgba(24, 61, 53, 0.03)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#3D765D",
                    mb: 1,
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  Not ready to scope yet?
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"DM Serif Display", serif',
                    fontWeight: 400,
                    fontSize: "1.45rem",
                    color: "#183D35",
                    mb: 2.5,
                  }}
                >
                  Explore Our Work &amp; Projects
                </Typography>

                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                >
                  <Link href="/work" style={{ textDecoration: "none" }}>
                    <Button
                      fullWidth
                      variant="text"
                      endIcon={
                        <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                      }
                      sx={{
                        justifyContent: "space-between",
                        color: "#183D35",
                        p: 1.8,
                        borderRadius: "12px",
                        bgcolor: "#F7F7F2",
                        border: "1px solid rgba(24, 61, 53, 0.08)",
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        textTransform: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          bgcolor: "#F7F7F2",
                          borderColor: "#3D765D",
                          color: "#3D765D",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      View Our Work
                    </Button>
                  </Link>

                  <Link href="/services" style={{ textDecoration: "none" }}>
                    <Button
                      fullWidth
                      variant="text"
                      endIcon={
                        <ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />
                      }
                      sx={{
                        justifyContent: "space-between",
                        color: "#183D35",
                        p: 1.8,
                        borderRadius: "12px",
                        bgcolor: "#F7F7F2",
                        border: "1px solid rgba(24, 61, 53, 0.08)",
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        textTransform: "none",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          bgcolor: "#F7F7F2",
                          borderColor: "#3D765D",
                          color: "#3D765D",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      Explore Our Services
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
