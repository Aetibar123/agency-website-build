"use client";
import React, { useState, useMemo } from "react";
import { Box, Container, Typography, Grid, Button, TextField, InputAdornment, Chip } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  category: string;
  categorySlug: "time" | "data" | "ownership" | "pricing";
  icon: React.ElementType;
  question: string;
  quickAnswer: string;
  detailedAnswer: string;
  takeaways: string[];
}

const faqs: FaqItem[] = [
  {
    id: "time-commitment",
    category: "Time & Collaboration",
    categorySlug: "time",
    icon: AccessTimeRoundedIcon,
    question: "How much time is actually required from our internal team?",
    quickAnswer: "Under 90 minutes in Week 1, and only 3 minutes every two weeks after that.",
    detailedAnswer:
      "We design our sprints so your business continues running smoothly without meeting exhaustion. During Phase 01 (Week 1), we require one 60-minute executive discovery session with founders and 30 minutes shadowing key operators. From Sprint 1 onward, updates are 100% asynchronous: we deliver clickable private Vercel staging links accompanied by a 3-minute Loom video demo for your team to test whenever convenient. Zero status meeting bloat.",
    takeaways: ["90-Min Kickoff Only", "3-Min Async Video Demos", "0 Status Meeting Bloat"],
  },
  {
    id: "existing-tools",
    category: "Data Safety & Tools",
    categorySlug: "data",
    icon: SyncRoundedIcon,
    question: "Can we keep using our existing spreadsheets, WhatsApp, and accounting software?",
    quickAnswer: "Yes, 100%. We integrate with what works and only replace what is costing you money.",
    detailedAnswer:
      "We never force clients to discard software that already serves their team well. If your sales team closes deals on WhatsApp or your finance team relies on QuickBooks, we engineer reliable webhook pipelines and API connectors to synchronize data directly into your central PostgreSQL core. We only replace manual spreadsheets and fragmented tools where duplicate entry or human error is actively leaking revenue.",
    takeaways: ["Keep Preferred Tools", "Automated Webhook Sync", "Zero Duplicate Data Entry"],
  },
  {
    id: "zero-downtime",
    category: "Data Safety & Tools",
    categorySlug: "data",
    icon: SyncRoundedIcon,
    question: "How do you guarantee zero data loss or operational disruption during cutover?",
    quickAnswer: "We run your old and new platforms in parallel for 7 days until 100% of data reconciles.",
    detailedAnswer:
      "We never attempt a risky overnight 'big-bang' launch on Sunday night. During Phase 04, your team continues using existing tools while the new system runs concurrently in the background. Automated reconciliation scripts cross-verify 100% of historical records, active orders, and customer databases. We only complete DNS cutover once data drift is literally 0.00%, backed by an armed 1-click rollback safety guard.",
    takeaways: ["7-Day Dual-Run Sync", "100% Automated Reconciliation", "1-Click Instant Rollback"],
  },
  {
    id: "code-ownership",
    category: "IP & Code Ownership",
    categorySlug: "ownership",
    icon: LockOutlinedIcon,
    question: "Do we own the source code, database schemas, and infrastructure completely?",
    quickAnswer: "Yes, 100%. Complete GitHub repository handover with zero ongoing per-seat taxes.",
    detailedAnswer:
      "Unlike enterprise SaaS platforms that charge $100–$200 per employee per month forever, or agencies that hold repositories hostage over disputed invoices, full ownership of the GitHub repository, PostgreSQL database schemas, environment keys, and deployment configurations is assigned directly to your organization upon milestone completion. Deployed to your cloud accounts with zero monthly user taxes.",
    takeaways: ["Full GitHub Transfer", "Your Cloud Infrastructure", "$0 Monthly Per-Seat Taxes"],
  },
  {
    id: "scope-changes",
    category: "Pricing & Scope",
    categorySlug: "pricing",
    icon: ReceiptLongOutlinedIcon,
    question: "What happens if our operational requirements change during development?",
    quickAnswer: "We operate in agile 14-day sprints. You can swap backlog features with zero change-order penalties.",
    detailedAnswer:
      "Real operations reveal real nuances once you interact with live software on Day 14. Because we develop in tight 2-week iterations with clickable staging environments, you never wait months to discover a misalignment. If an operational nuance is uncovered during testing, we simply swap backlog items of equivalent engineering effort without bureaucratic delays or punitive surprise change-order fees.",
    takeaways: ["14-Day Sprint Slices", "1-to-1 Backlog Swapping", "Zero Surprise Invoices"],
  },
  {
    id: "post-launch-support",
    category: "Time & Collaboration",
    categorySlug: "time",
    icon: AccessTimeRoundedIcon,
    question: "What happens after launch? Who maintains the software and fixes edge cases?",
    quickAnswer: "Launch is Day 1. Every project includes a 30-day hyper-care warranty and dedicated architect SLAs.",
    detailedAnswer:
      "Deployment is not the finish line—it is the beginning of operational leverage. Every deployment includes 30 days of active warranty, automated crash telemetry, and sub-300ms response time monitoring. You retain direct access to the senior engineers who built your platform via a private Slack or WhatsApp channel, supported by comprehensive Loom video training libraries for your staff.",
    takeaways: ["30-Day Hyper-Care Warranty", "Direct Senior Architect Line", "Staff Loom Video Guides"],
  },
  {
    id: "pricing-structure",
    category: "Pricing & Scope",
    categorySlug: "pricing",
    icon: ReceiptLongOutlinedIcon,
    question: "How do your fixed-sprint pricing and commercial agreements work?",
    quickAnswer: "Transparent, milestone-based sprint pricing with contractual SLA credits if we slip.",
    detailedAnswer:
      "We avoid vague hourly billing models that incentivize agencies to move slowly and pad invoices. Every engagement is structured into 2-week sprints with guaranteed, verifiable deliverables outlined before work begins. Payments align strictly with verified milestone completions, and our Master Services Agreement (MSA) includes direct sprint credits if we fail to deliver promised staging previews.",
    takeaways: ["Fixed Sprint Milestones", "Milestone-Based Billing", "Contractual SLA Credits"],
  },
];

const categoryTabs = [
  { id: "all", label: "All Questions (7)" },
  { id: "time", label: "Time & Collaboration" },
  { id: "data", label: "Data Safety & Tools" },
  { id: "ownership", label: "IP & Code Ownership" },
  { id: "pricing", label: "Pricing & Scope" },
];

export default function HowWeWorkFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === "all" || faq.categorySlug === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        faq.question.toLowerCase().includes(q) ||
        faq.quickAnswer.toLowerCase().includes(q) ||
        faq.detailedAnswer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Ambient Gradient */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: "10%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ maxWidth: 880, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
                mb: 2.5,
              }}
            >
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316" }}
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
                FREQUENTLY ASKED QUESTIONS
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.2rem", sm: "3.2rem", md: "3.8rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.15, md: 1.1 },
                letterSpacing: "-0.035em",
                mb: 2.5,
              }}
            >
              Everything you need to know about{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                how we collaborate.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: 760,
                mx: "auto",
                mb: 4,
              }}
            >
              Clear, transparent answers on time commitments, zero-data-loss migrations, complete code sovereignty, and
              fixed-sprint governance.
            </Typography>
          </motion.div>

          {/* Search Bar & Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Search Input */}
            <Box sx={{ maxWidth: 540, mx: "auto", mb: 3 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search questions (e.g. time commitment, data loss, code ownership)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchRoundedIcon sx={{ color: "#EA580C", fontSize: 20 }} />
                      </InputAdornment>
                    ),
                    sx: {
                      bgcolor: "#FAF8F5",
                      borderRadius: "14px",
                      fontSize: "0.9rem",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      "& fieldset": { border: "none" },
                      "&:hover": {
                        bgcolor: "#FFFFFF",
                        boxShadow: "0 4px 14px rgba(24, 24, 27, 0.05)",
                      },
                      "&.Mui-focused": {
                        bgcolor: "#FFFFFF",
                        boxShadow: "0 0 0 2px rgba(234, 88, 12, 0.3)",
                      },
                    },
                  },
                }}
              />
            </Box>

            {/* Category Filter Pills */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                flexWrap: "wrap",
              }}
            >
              {categoryTabs.map((tab) => {
                const isSelected = activeCategory === tab.id;
                return (
                  <Chip
                    key={tab.id}
                    label={tab.label}
                    onClick={() => {
                      setActiveCategory(tab.id);
                      setOpenIdx(0);
                    }}
                    clickable
                    sx={{
                      px: 0.8,
                      py: 2.2,
                      borderRadius: "12px",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      bgcolor: isSelected ? "#18181B" : "#FAF8F5",
                      color: isSelected ? "#FFFFFF" : "#52525B",
                      border: "1px solid",
                      borderColor: isSelected ? "#18181B" : "rgba(228, 228, 231, 0.9)",
                      boxShadow: isSelected ? "0 4px 12px rgba(24, 24, 27, 0.15)" : "none",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: isSelected ? "#27272A" : "rgba(24, 24, 27, 0.06)",
                      },
                    }}
                  />
                );
              })}
            </Box>
          </motion.div>
        </Box>

        {/* Main Content Layout: FAQ Accordion + Side Direct Contact Banner */}
        <Grid container spacing={4} sx={{ maxWidth: 1200, mx: "auto" }}>
          {/* Left / Main Column: The Interactive Accordion List */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {filteredFaqs.length === 0 ? (
              <Box
                sx={{
                  p: 6,
                  textAlign: "center",
                  borderRadius: "24px",
                  bgcolor: "#FAF8F5",
                  border: "1px dashed rgba(228, 228, 231, 0.9)",
                }}
              >
                <QuestionAnswerRoundedIcon sx={{ fontSize: 40, color: "#EA580C", mb: 1.5 }} />
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#18181B", mb: 0.5 }}>
                  No matching questions found
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#71717A", mb: 2.5 }}>
                  Try a different search term or reset the category filter.
                </Typography>
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  variant="outlined"
                  sx={{
                    borderRadius: "10px",
                    color: "#EA580C",
                    borderColor: "#EA580C",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Clear Filters
                </Button>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openIdx === idx;
                  const IconComponent = faq.icon;

                  return (
                    <Box
                      key={faq.id}
                      sx={{
                        borderRadius: "22px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid",
                        borderColor: isOpen ? "rgba(234, 88, 12, 0.45)" : "rgba(228, 228, 231, 0.85)",
                        boxShadow: isOpen
                          ? "0 14px 36px -10px rgba(234, 88, 12, 0.12), 0 2px 8px rgba(24, 24, 27, 0.03)"
                          : "0 2px 8px rgba(24, 24, 27, 0.02)",
                        overflow: "hidden",
                        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          borderColor: isOpen ? "#EA580C" : "rgba(234, 88, 12, 0.3)",
                        },
                      }}
                    >
                      {/* Accordion Header / Click Target */}
                      <Box
                        onClick={() => toggleFaq(idx)}
                        sx={{
                          p: { xs: 2.6, sm: 3.2 },
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 2,
                          bgcolor: isOpen ? "rgba(249, 115, 22, 0.02)" : "transparent",
                          transition: "background-color 0.2s ease",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                          <Box
                            sx={{
                              width: 40,
                              height: 40,
                              borderRadius: "12px",
                              bgcolor: isOpen ? "#EA580C" : "rgba(249, 115, 22, 0.08)",
                              color: isOpen ? "#FFFFFF" : "#EA580C",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              mt: 0.2,
                              transition: "all 0.2s ease",
                            }}
                          >
                            <IconComponent sx={{ fontSize: 20 }} />
                          </Box>

                          <Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.4 }}>
                              <Typography
                                sx={{
                                  fontSize: "0.72rem",
                                  fontWeight: 700,
                                  color: "#EA580C",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.06em",
                                  fontFamily: "monospace",
                                }}
                              >
                                {faq.category}
                              </Typography>
                            </Box>
                            <Typography
                              sx={{
                                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                                fontWeight: 700,
                                color: "#18181B",
                                letterSpacing: "-0.015em",
                                lineHeight: 1.35,
                              }}
                            >
                              {faq.question}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Toggle Icon Button */}
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: isOpen ? "#EA580C" : "#FAF8F5",
                            color: isOpen ? "#FFFFFF" : "#71717A",
                            border: "1px solid",
                            borderColor: isOpen ? "#EA580C" : "rgba(228, 228, 231, 0.8)",
                            flexShrink: 0,
                            transition: "all 0.2s ease",
                          }}
                        >
                          {isOpen ? <RemoveRoundedIcon sx={{ fontSize: 20 }} /> : <AddRoundedIcon sx={{ fontSize: 20 }} />}
                        </Box>
                      </Box>

                      {/* Collapsible Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="faq-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <Box
                              sx={{
                                px: { xs: 2.6, sm: 3.5 },
                                pb: { xs: 3.2, sm: 4 },
                                pt: 1,
                                borderTop: "1px solid rgba(228, 228, 231, 0.7)",
                              }}
                            >
                              {/* Executive Summary Callout Box */}
                              <Box
                                sx={{
                                  p: 2,
                                  borderRadius: "14px",
                                  bgcolor: "rgba(249, 115, 22, 0.05)",
                                  border: "1px solid rgba(249, 115, 22, 0.2)",
                                  mb: 2.2,
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: 1.2,
                                }}
                              >
                                <BoltRoundedIcon sx={{ fontSize: 20, color: "#EA580C", flexShrink: 0, mt: 0.1 }} />
                                <Box>
                                  <Typography
                                    sx={{
                                      fontSize: "0.75rem",
                                      fontWeight: 800,
                                      color: "#EA580C",
                                      letterSpacing: "0.05em",
                                      textTransform: "uppercase",
                                      mb: 0.3,
                                      fontFamily: "monospace",
                                    }}
                                  >
                                    EXECUTIVE SUMMARY:
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "0.92rem",
                                      fontWeight: 600,
                                      color: "#18181B",
                                      lineHeight: 1.55,
                                    }}
                                  >
                                    {faq.quickAnswer}
                                  </Typography>
                                </Box>
                              </Box>

                              {/* Detailed Answer Paragraph */}
                              <Typography
                                sx={{
                                  fontSize: "0.95rem",
                                  color: "#52525B",
                                  lineHeight: 1.8,
                                  mb: 2.5,
                                }}
                              >
                                {faq.detailedAnswer}
                              </Typography>

                              {/* Key Takeaway Verification Pills */}
                              <Box
                                sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 1,
                                  pt: 1.8,
                                  borderTop: "1px dashed rgba(228, 228, 231, 0.9)",
                                }}
                              >
                                {faq.takeaways.map((pill, pIdx) => (
                                  <Box
                                    key={pIdx}
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 0.8,
                                      px: 1.3,
                                      py: 0.45,
                                      borderRadius: "8px",
                                      bgcolor: "#FAF8F5",
                                      border: "1px solid rgba(228, 228, 231, 0.8)",
                                    }}
                                  >
                                    <CheckCircleRoundedIcon sx={{ fontSize: 14, color: "#16A34A" }} />
                                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#27272A" }}>
                                      {pill}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Grid>

          {/* Right Column: Direct Help & Architecture Contact Card */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box
              sx={{
                position: { lg: "sticky" },
                top: { lg: 100 },
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {/* Direct Architect Support Card */}
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4 },
                  borderRadius: "28px",
                  bgcolor: "#18181B",
                  color: "#FFFFFF",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 20px 48px -12px rgba(24, 24, 27, 0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Glow Accent */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(234, 88, 12, 0.3) 0%, rgba(24, 24, 27, 0) 70%)",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                  }}
                />

                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "14px",
                    bgcolor: "rgba(249, 115, 22, 0.15)",
                    color: "#EA580C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                  }}
                >
                  <ChatBubbleOutlineRoundedIcon sx={{ fontSize: 24 }} />
                </Box>

                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "#FB923C",
                    letterSpacing: "0.08em",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    mb: 1,
                  }}
                >
                  HAVE A UNIQUE WORKFLOW?
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.4rem", sm: "1.6rem" },
                    fontWeight: 700,
                    lineHeight: 1.25,
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    mb: 1.5,
                  }}
                >
                  Ask a lead systems architect directly.
                </Typography>

                <Typography sx={{ fontSize: "0.88rem", color: "#A1A1AA", lineHeight: 1.7, mb: 3 }}>
                  No salespeople, no slide decks. We discuss your database structure, legacy spreadsheet constraints, and
                  sprint feasibility in a focused 30-minute working session.
                </Typography>

                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      py: 1.4,
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      textTransform: "none",
                      color: "#FFFFFF",
                      boxShadow: "0 8px 20px -4px rgba(234, 88, 12, 0.4)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                        boxShadow: "0 12px 28px -4px rgba(234, 88, 12, 0.6)",
                      },
                    }}
                  >
                    Book Architecture Call
                  </Button>
                </Link>

                {/* Response SLA Badge */}
                <Box
                  sx={{
                    mt: 2.5,
                    pt: 2,
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontSize: "0.72rem", color: "#A1A1AA" }}>
                    Median Discovery Response:
                  </Typography>
                  <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#22C55E" }}>
                    &lt; 2 Hours
                  </Typography>
                </Box>
              </Box>

              {/* Client Promise Reference Capsule */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                }}
              >
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", mb: 0.5, textTransform: "uppercase" }}>
                  Contractual Guarantees
                </Typography>
                <Typography sx={{ fontSize: "0.88rem", fontWeight: 600, color: "#18181B", mb: 1 }}>
                  Want to review our 6 ironclad guarantees?
                </Typography>
                <Typography sx={{ fontSize: "0.8rem", color: "#71717A", lineHeight: 1.6, mb: 2 }}>
                  See how we back bi-weekly staging previews and dual-run cutovers with contractual sprint credits.
                </Typography>
                <a href="#client-promise" style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "#EA580C",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.5,
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    View Our Client Promise &rarr;
                  </Typography>
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
