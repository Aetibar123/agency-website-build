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
            maskImage:
              "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
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
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
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
                  DIRECT EMAIL ACCESS • SIMPLE COMMUNICATION
                </Typography>
              </Box>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "1.65rem",
                    sm: "2.25rem",
                    md: "2.85rem",
                    lg: "3.25rem",
                  },
                  fontWeight: 600,
                  letterSpacing: { xs: "-0.03em", md: "-0.04em" },
                  lineHeight: { xs: 1.18, md: 1.2 },
                  maxWidth: { xs: "100%", md: 1040, lg: 1160 },
                  mx: "auto",
                  textWrap: "balance",
                  color: "#18181B",
                  mb: 3,
                }}
              >
                Reach our team directly via {" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline",
                  }}
                >
                  email.
                </Box>
              </Typography>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
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
                No aggressive sales tactics or automated sequences. Share your
                requirements, business challenges, or project ideas directly
                with our team.
              </Typography>
            </motion.div>

            {/* Quick Hero Action Strip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
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
                    background:
                      "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: { xs: 3.5, sm: 4 },
                    py: 1.6,
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    boxShadow: "0 10px 28px rgba(234, 88, 12, 0.35)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 14px 34px rgba(234, 88, 12, 0.5)",
                    },
                  }}
                >
                  Email: hello.aetibar@gmail.com
                </Button>

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
                        <CheckCircleRoundedIcon sx={{ color: "#EA580C" }} />
                      ) : (
                        <ContentCopyRoundedIcon sx={{ color: "#71717A" }} />
                      )
                    }
                    sx={{
                      color: copiedEmail ? "#EA580C" : "#18181B",
                      borderColor: copiedEmail
                        ? "#EA580C"
                        : "rgba(24, 24, 27, 0.2)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      px: 3,
                      py: 1.5,
                      borderRadius: "9999px",
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(8px)",
                      "&:hover": {
                        bgcolor: "#FAF8F5",
                        borderColor: "#EA580C",
                        color: "#EA580C",
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
                    color: "#52525B",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    px: 2.5,
                    py: 1.5,
                    borderRadius: "9999px",
                    "&:hover": {
                      color: "#EA580C",
                      bgcolor: "rgba(249, 115, 22, 0.06)",
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

      {/* 2. PRIMARY DIRECT EMAIL CHANNEL */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              mb: 6,
              textAlign: "center",
              maxWidth: { xs: "100%", md: 980, lg: 1100 },
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
                EXCLUSIVE DIRECT CONTACT
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1.55rem",
                  sm: "2.15rem",
                  md: "2.65rem",
                  lg: "3rem",
                },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: { xs: 1.18, md: 1.2 },
                maxWidth: { xs: "100%", md: 980, lg: 1100 },
                textWrap: "balance",
                mx: "auto",
                color: "#18181B",
                mb: 1.5,
              }}
            >
              One direct inbox. Straight to senior engineering.
            </Typography>
            <Typography
              sx={{ color: "#52525B", fontSize: "1rem", lineHeight: 1.7 }}
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
                    label="Official Contact Method"
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
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      mb: 2,
                    }}
                  >
                    <AccessTimeOutlinedIcon
                      sx={{ fontSize: 16, color: "#EA580C" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#18181B",
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
                      background:
                        "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      py: 1.35,
                      borderRadius: "9999px",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      boxShadow: "0 8px 20px rgba(234, 88, 12, 0.25)",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
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
                    <EngineeringOutlinedIcon sx={{ fontSize: 26 }} />
                  </Box>

                  <Chip
                    label="Zero Sales Bureaucracy"
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
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      mb: 2,
                    }}
                  >
                    <CodeRoundedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#18181B",
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
                    <ShieldOutlinedIcon sx={{ fontSize: 26 }} />
                  </Box>

                  <Chip
                    label="Strict Confidentiality"
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
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      mb: 2,
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{ fontSize: 16, color: "#EA580C" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#18181B",
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
                      Explore Our Work
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
        id="brief-template"
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FAF8F5",
          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 5, lg: 8 }}
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
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2.5,
                }}
              >
                <AssignmentOutlinedIcon
                  sx={{ fontSize: 16, color: "#EA580C" }}
                />
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#EA580C",
                  }}
                >
                  DIRECT EMAIL BRIEF
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.55rem", sm: "2rem", md: "2.4rem" },
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  color: "#18181B",
                  lineHeight: { xs: 1.18, md: 1.2 },
                  textWrap: "balance",
                  mb: 2.5,
                }}
              >
                Not sure what to write?{" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
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
                      sx={{ color: "#EA580C", fontSize: 20, mt: 0.2 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        color: "#18181B",
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
                    <Box
                      component="span"
                      sx={{ color: "#FB923C", fontWeight: 700 }}
                    >
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

      {/* 4. TRANSPARENT TURNAROUND PROTOCOL (4-Stage Process) */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 16 },
          bgcolor: "#FFFFFF",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: { xs: "100%", md: 980, lg: 1100 },
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
                CLEAR PROCESS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1.55rem",
                  sm: "2.15rem",
                  md: "2.65rem",
                  lg: "3rem",
                },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: { xs: 1.18, md: 1.2 },
                maxWidth: { xs: "100%", md: 980, lg: 1100 },
                textWrap: "balance",
                mx: "auto",
                color: "#18181B",
                mb: 2,
              }}
            >
              What Happens After You Contact Us?
            </Typography>
            <Typography
              sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}
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
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    boxShadow: "0 4px 16px rgba(24, 24, 27, 0.02)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: "#EA580C",
                    },
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

      {/* 5. STUDIO GUARANTEES (Home Page Dark Zinc Luxury Container) */}
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
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              textAlign: "center",
              maxWidth: { xs: "100%", md: 980, lg: 1100 },
              mx: "auto",
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
                OUR COMMITMENTS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "1.55rem",
                  sm: "2.15rem",
                  md: "2.65rem",
                  lg: "3rem",
                },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: { xs: 1.18, md: 1.2 },
                maxWidth: { xs: "100%", md: 980, lg: 1100 },
                textWrap: "balance",
                mx: "auto",
                color: "#FFFFFF",
              }}
            >
              How We Respect Your Time & Information
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

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <Box
        component="section"
        sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF" }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: { xs: "100%", md: 980, lg: 1100 },
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
                fontSize: {
                  xs: "1.55rem",
                  sm: "2.15rem",
                  md: "2.65rem",
                  lg: "3rem",
                },
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: { xs: 1.18, md: 1.2 },
                maxWidth: { xs: "100%", md: 980, lg: 1100 },
                textWrap: "balance",
                mx: "auto",
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

      {/* 7. SOCIAL & EXPLORATION FOOTER */}
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
                Connect With Our Team

              </Typography>
              <Typography
                sx={{
                  color: "#52525B",
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  mb: 3,
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
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#EA580C",
                    mb: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Not ready to scope yet?
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#18181B",
                    mb: 2,
                  }}
                >
                  Explore Our Work & Projects

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
