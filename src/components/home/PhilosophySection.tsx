"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import Link from "next/link";
import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    tag: "DIAGNOSTIC RIGOR",
    title: "Diagnose Before Code",
    subtitle: "We study human habits and daily operations before writing a single line of software.",
    summary:
      "Most software projects fail before development even starts because nobody asked how work actually happens on a typical Tuesday. We sit down with founders, dispatchers, and sales reps to map every handoff from first contact to delivery.",
    badgeColor: "#EA580C",
    badgeBg: "rgba(249, 115, 22, 0.08)",
    badgeBorder: "rgba(249, 115, 22, 0.25)",
    icon: TroubleshootOutlinedIcon,
    checklist: [
      "Customer journey mapping (first contact to quote)",
      "Audit of spreadsheets, inboxes & manual handoffs",
      "Identification of hidden operational bottlenecks",
    ],
    highlightPill: "Discovery Phase",
    metricBadge: "100% Process Clarity",
  },
  {
    num: "02",
    tag: "UNIFIED PIPELINE",
    title: "Eliminate Human Glue",
    subtitle: "Zero manual copy-pasting between spreadsheets, inboxes, and chat threads.",
    summary:
      "Every growing business accumulates operational friction: staff manually re-typing customer orders, quotes delayed because pricing is trapped in PDFs, or reps answering the same status questions ten times a day.",
    badgeColor: "#F97316",
    badgeBg: "rgba(249, 115, 22, 0.12)",
    badgeBorder: "rgba(249, 115, 22, 0.35)",
    icon: AccountTreeOutlinedIcon,
    checklist: [
      "Eliminate duplicate data entry across screens",
      "Connect WhatsApp, email, and web into one triage queue",
      "Free 15+ hours/week of team time for high-value work",
    ],
    highlightPill: "Automated Core",
    metricBadge: "Zero Siloed Data",
    isFeatured: true,
  },
  {
    num: "03",
    tag: "BESPOKE ARCHITECTURE",
    title: "Purpose-Built Systems",
    subtitle: "Custom-engineered around your physical constraints, not generic SaaS templates.",
    summary:
      "We do not force your business into rigid per-user SaaS packages or bloated WordPress themes. We engineer lean, ultra-fast Next.js platforms and tailored internal tools designed specifically for your exact operational workflow.",
    badgeColor: "#EA580C",
    badgeBg: "rgba(249, 115, 22, 0.08)",
    badgeBorder: "rgba(249, 115, 22, 0.25)",
    icon: TerminalRoundedIcon,
    checklist: [
      "Ultra-fast Next.js architecture (< 0.4s response times)",
      "Zero per-user monthly SaaS subscription taxes",
      "Tailored role-based interfaces for your exact team",
    ],
    highlightPill: "Production Stack",
    metricBadge: "Built for Longevity",
  },
];

export default function PhilosophySection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Subtle Gradient Accents */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "1100px",
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(249, 115, 22, 0.05) 0%, rgba(251, 146, 60, 0.02) 50%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box sx={{ mb: { xs: 7, md: 9 }, maxWidth: { xs: "100%", lg: "84%" } }}>
            {/* Pill Badge */}
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
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#EA580C",
                  boxShadow: "0 0 8px #EA580C",
                }}
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
                How Aetibar Thinks
              </Typography>
            </Box>

            {/* Headline */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.35rem", sm: "3.25rem", md: "4.2rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.12, md: 1.05 },
                letterSpacing: "-0.035em",
                mb: 2.5,
              }}
            >
              We don&apos;t build software for the sake of software.{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                We engineer leverage.
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.18rem" },
                color: "#52525B",
                lineHeight: 1.75,
                maxWidth: 820,
                fontWeight: 400,
              }}
            >
              Technology is only as valuable as the real business friction it removes. We operate on three continuous disciplines to ensure every digital system delivers immediate operational relief and compound commercial value.
            </Typography>
          </Box>
        </motion.div>

        {/* 3-Pillar Architectural Bento Suite */}
        <Grid container spacing={{ xs: 3, md: 3.5 }} sx={{ alignItems: "stretch", mb: { xs: 6, md: 8 } }}>
          {principles.map((item, idx) => {
            const IconComp = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <Grid size={{ xs: 12, lg: 4 }} key={item.num} sx={{ display: "flex" }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{ width: "100%", display: "flex" }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      p: { xs: 3.5, sm: 4, md: 4.5 },
                      borderRadius: { xs: "22px", md: "28px" },
                      bgcolor: item.isFeatured ? "#FFFBF7" : "#FAF8F5",
                      border: "1.5px solid",
                      borderColor:
                        isHovered || item.isFeatured
                          ? "rgba(249, 115, 22, 0.38)"
                          : "rgba(228, 228, 231, 0.9)",
                      boxShadow:
                        isHovered || item.isFeatured
                          ? "0 22px 50px -12px rgba(234, 88, 12, 0.15), 0 0 0 1px rgba(249, 115, 22, 0.12)"
                          : "0 10px 30px -10px rgba(24, 24, 27, 0.03)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                      overflow: "hidden",
                      transition: "border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                    }}
                  >
                    {/* Top Corner Number Watermark */}
                    <Typography
                      sx={{
                        position: "absolute",
                        top: { xs: 16, sm: 20 },
                        right: { xs: 20, sm: 24 },
                        fontSize: "3.5rem",
                        fontWeight: 700,
                        color: item.isFeatured ? "rgba(234, 88, 12, 0.08)" : "rgba(24, 24, 27, 0.04)",
                        lineHeight: 1,
                        pointerEvents: "none",
                        userSelect: "none",
                      }}
                    >
                      {item.num}
                    </Typography>

                    <Box sx={{ position: "relative", zIndex: 1 }}>
                      {/* Top Pill & Icon */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                        <Box
                          sx={{
                            width: 46,
                            height: 46,
                            borderRadius: "14px",
                            bgcolor: item.badgeBg,
                            border: "1px solid",
                            borderColor: item.badgeBorder,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: item.badgeColor,
                            boxShadow: item.isFeatured
                              ? "0 4px 12px rgba(249, 115, 22, 0.2)"
                              : "none",
                          }}
                        >
                          <IconComp sx={{ fontSize: 24 }} />
                        </Box>
                        <Box
                          sx={{
                            px: 1.4,
                            py: 0.4,
                            borderRadius: "9999px",
                            bgcolor: item.badgeBg,
                            border: "1px solid",
                            borderColor: item.badgeBorder,
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            color: item.badgeColor,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.tag}
                        </Box>
                      </Box>

                      {/* Card Title */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: { xs: "1.45rem", sm: "1.65rem" },
                          fontWeight: 600,
                          color: "#18181B",
                          letterSpacing: "-0.025em",
                          mb: 1.2,
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Subtitle */}
                      <Typography
                        sx={{
                          fontSize: "0.92rem",
                          fontWeight: 500,
                          color: "#EA580C",
                          mb: 2.5,
                          lineHeight: 1.5,
                        }}
                      >
                        {item.subtitle}
                      </Typography>

                      {/* Narrative Paragraph */}
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          color: "#52525B",
                          lineHeight: 1.7,
                          mb: 3.5,
                        }}
                      >
                        {item.summary}
                      </Typography>
                    </Box>

                    {/* Bottom Action Checklist & Metric */}
                    <Box sx={{ position: "relative", zIndex: 1 }}>
                      {/* Checklist Container */}
                      <Box
                        sx={{
                          p: 2.2,
                          bgcolor: "#FFFFFF",
                          borderRadius: "16px",
                          border: "1px solid rgba(228, 228, 231, 0.8)",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1.2,
                          mb: 2.5,
                        }}
                      >
                        {item.checklist.map((point, pIdx) => (
                          <Box key={pIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                            <CheckCircleRoundedIcon
                              sx={{
                                fontSize: 16,
                                color: "#EA580C",
                                mt: 0.3,
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: "0.825rem",
                                color: "#27272A",
                                lineHeight: 1.45,
                                fontWeight: 500,
                              }}
                            >
                              {point}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Metric Tag */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          pt: 1.5,
                          borderTop: "1px solid rgba(228, 228, 231, 0.8)",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                          <BoltRoundedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                          <Typography sx={{ fontSize: "0.76rem", fontWeight: 600, color: "#71717A" }}>
                            {item.highlightPill}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "0.78rem",
                            fontWeight: 600,
                            color: "#EA580C",
                          }}
                        >
                          {item.metricBadge}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* Studio Commitment Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              p: { xs: 3.5, sm: 5 },
              borderRadius: { xs: "20px", md: "26px" },
              bgcolor: "#18181B",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 20px 50px -10px rgba(24, 24, 27, 0.25)",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "center" },
              gap: 3,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle Warm Amber Glow within Banner */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "10%",
                transform: "translateY(-50%)",
                width: 300,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1.5 }}>
                <AutoAwesomeOutlinedIcon sx={{ fontSize: 18, color: "#FB923C" }} />
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#FB923C",
                  }}
                >
                  Our Practical Guarantee
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", sm: "1.2rem" },
                  color: "#FFFFFF",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  letterSpacing: "-0.015em",
                }}
              >
                &ldquo;Technology should feel invisible, effortless, and dependable &mdash; quietly powering your operations so your team can focus on client relationships and revenue.&rdquo;
              </Typography>
            </Box>

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Link href="/how-we-work" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    color: "#FFFFFF",
                    borderColor: "rgba(255, 255, 255, 0.25)",
                    bgcolor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    px: 3.5,
                    py: 1.4,
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    borderRadius: "9999px",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      borderColor: "#F97316",
                      bgcolor: "rgba(249, 115, 22, 0.12)",
                      color: "#FB923C",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  See How We Work
                </Button>
              </Link>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
