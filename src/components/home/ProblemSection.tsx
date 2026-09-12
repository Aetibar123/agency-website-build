"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const pipelineStages = [
  {
    step: "01",
    title: "Inquiry Capture",
    icon: ChatBubbleOutlineRoundedIcon,
    fragmented: {
      tag: "Siloed Inbox",
      headline: "Trapped in Personal Inboxes",
      details: "Leads land in private WhatsApp numbers, DMs, and individual inboxes without team visibility or structure.",
      latency: "4–8 hr lag",
      status: "Unsynchronized",
      color: "#EF4444",
      bg: "rgba(239, 68, 68, 0.08)",
    },
    connected: {
      tag: "Unified Webhook",
      headline: "Zero-Latency Intake",
      details: "Instant webhook capture validates project scope, budget, and contact parameters straight into your central core.",
      latency: "0.4 sec capture",
      status: "Validated",
      color: "#F97316",
      bg: "rgba(249, 115, 22, 0.12)",
    },
  },
  {
    step: "02",
    title: "Routing & Triage",
    icon: HubOutlinedIcon,
    fragmented: {
      tag: "Manual Forwarding",
      headline: "Screenshots & Group Chats",
      details: "Staff copy-paste customer notes across internal chat groups. Leads sit unassigned when key staff are busy.",
      latency: "Delayed 12h+",
      status: "Human Bottleneck",
      color: "#EF4444",
      bg: "rgba(239, 68, 68, 0.08)",
    },
    connected: {
      tag: "Smart Dispatch",
      headline: "Automated Routing",
      details: "Logic engine dispatches inquiries to the right lead based on expertise, territory, and current workload.",
      latency: "3 sec routing",
      status: "Dispatched",
      color: "#F97316",
      bg: "rgba(249, 115, 22, 0.12)",
    },
  },
  {
    step: "03",
    title: "Estimation & Quote",
    icon: CalculateOutlinedIcon,
    fragmented: {
      tag: "Manual Spreadsheets",
      headline: "Calculation Bottlenecks",
      details: "Pricing looked up across multiple disconnected spreadsheets. Formula mistakes and quote delays lose deals.",
      latency: "48–72 hrs",
      status: "Stalled Deal",
      color: "#EF4444",
      bg: "rgba(239, 68, 68, 0.08)",
    },
    connected: {
      tag: "Dynamic Engine",
      headline: "Instant Margin Calculator",
      details: "Margin-aware proposal engine generates branded, accurate client quotes and PDF proposals in minutes.",
      latency: "4 min assembly",
      status: "Generated",
      color: "#F97316",
      bg: "rgba(249, 115, 22, 0.12)",
    },
  },
  {
    step: "04",
    title: "Execution & Visibility",
    icon: DashboardCustomizeOutlinedIcon,
    fragmented: {
      tag: "Blind Operations",
      headline: "Disconnected Status Tracking",
      details: "Nobody knows what was promised, who followed up, or what needs delivery next without calling a status meeting.",
      latency: "Blind spots",
      status: "Siloed Knowledge",
      color: "#EF4444",
      bg: "rgba(239, 68, 68, 0.08)",
    },
    connected: {
      tag: "Single Truth",
      headline: "Operational Cockpit",
      details: "Unified real-time dashboard synchronizing management, delivery, sales, and automated customer status alerts.",
      latency: "Real-time sync",
      status: "Complete Clarity",
      color: "#F97316",
      bg: "rgba(249, 115, 22, 0.12)",
    },
  },
];

const telemetryData = {
  fragmented: [
    { label: "Quote & Response Latency", value: "48–72 Hours", note: "Prospects go cold while waiting", color: "#EF4444" },
    { label: "Weekly Admin Copy-Paste", value: "18+ Hours", note: "Wasted across manual spreadsheets", color: "#EF4444" },
    { label: "Pipeline Visibility", value: "35% Blind", note: "Customer data trapped in private chats", color: "#EF4444" },
  ],
  connected: [
    { label: "Quote & Response Latency", value: "< 5 Minutes", note: "94% faster client qualification", color: "#F97316" },
    { label: "Weekly Admin Copy-Paste", value: "0 Hours", note: "100% automated webhook pipeline", color: "#F97316" },
    { label: "Pipeline Visibility", value: "100% Audit", note: "Single synchronized truth for leadership", color: "#F97316" },
  ],
};

export default function ProblemSection() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FAF8F5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Ambient Warm Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234, 88, 12, 0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
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
          <Box sx={{ mb: { xs: 7, md: 9 }, maxWidth: { xs: "100%", lg: "86%" } }}>
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
                The Operational Reality
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
              Your business doesn&apos;t need another tool.{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: { xs: "inline", md: "inline" },
                }}
              >
                It needs a connected system.
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
              Most companies aren&apos;t lacking software. They already pay for WhatsApp, spreadsheets, inboxes, web forms, and SaaS dashboards. The friction is that none of these tools speak to each other &mdash; forcing your best people to act as manual human data glue.
            </Typography>
          </Box>
        </motion.div>

        {/* The Interactive Architectural Console */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              bgcolor: "#111218",
              borderRadius: { xs: "22px", sm: "28px", md: "32px" },
              border: "1px solid",
              borderColor: isConnected ? "rgba(249, 115, 22, 0.35)" : "rgba(255, 255, 255, 0.1)",
              p: { xs: 3, sm: 4.5, md: 5.5 },
              boxShadow: isConnected
                ? "0 25px 80px -15px rgba(234, 88, 12, 0.2), 0 0 0 1px rgba(249, 115, 22, 0.2)"
                : "0 25px 70px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
              transition: "border-color 0.4s ease, box-shadow 0.4s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle Grid Texture Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                pointerEvents: "none",
                opacity: 0.7,
              }}
            />

            {/* Console Control Bar */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
                gap: 2.5,
                pb: 3.5,
                mb: 4.5,
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Telemetry Status Indicator */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: isConnected ? "#F97316" : "#EF4444",
                    boxShadow: isConnected
                      ? "0 0 12px #F97316, 0 0 24px rgba(249, 115, 22, 0.6)"
                      : "0 0 12px #EF4444, 0 0 24px rgba(239, 68, 68, 0.6)",
                    transition: "all 0.3s ease",
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: isConnected ? "#FB923C" : "#F87171",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                    }}
                  >
                    {isConnected ? "SYSTEM STATE: SYNCHRONIZED" : "SYSTEM STATE: FRAGMENTED CHAOS"}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.1rem", sm: "1.3rem" },
                      fontWeight: 600,
                      color: "#FFFFFF",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {isConnected
                      ? "The Aetibar Connected Workflow"
                      : "The Disconnected Status Quo"}
                  </Typography>
                </Box>
              </Box>

              {/* Mode Switcher Toggle */}
              <Box
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  p: 0.6,
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "inline-flex",
                  gap: 0.8,
                }}
              >
                <Button
                  size="small"
                  onClick={() => setIsConnected(false)}
                  startIcon={<ErrorOutlineRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    px: { xs: 2, sm: 2.8 },
                    py: 0.9,
                    fontSize: { xs: "0.78rem", sm: "0.82rem" },
                    fontWeight: 600,
                    borderRadius: "9999px",
                    textTransform: "none",
                    bgcolor: !isConnected ? "#EF4444" : "transparent",
                    color: !isConnected ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                    boxShadow: !isConnected ? "0 4px 14px rgba(239, 68, 68, 0.4)" : "none",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      bgcolor: !isConnected ? "#DC2626" : "rgba(255, 255, 255, 0.08)",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Fragmented
                </Button>

                <Button
                  size="small"
                  onClick={() => setIsConnected(true)}
                  startIcon={<BoltRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    px: { xs: 2, sm: 2.8 },
                    py: 0.9,
                    fontSize: { xs: "0.78rem", sm: "0.82rem" },
                    fontWeight: 600,
                    borderRadius: "9999px",
                    textTransform: "none",
                    background: isConnected
                      ? "linear-gradient(135deg, #EA580C 0%, #F97316 100%)"
                      : "transparent",
                    color: isConnected ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                    boxShadow: isConnected ? "0 4px 16px rgba(234, 88, 12, 0.45)" : "none",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      background: isConnected
                        ? "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)"
                        : "rgba(255, 255, 255, 0.08)",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Connected Engine
                </Button>
              </Box>
            </Box>

            {/* 4-Stage Architectural Interactive Process Pipeline */}
            <Box sx={{ position: "relative", zIndex: 2, mb: 4.5 }}>
              <Grid container spacing={{ xs: 2.5, lg: 2.5 }}>
                {pipelineStages.map((stage, idx) => {
                  const state = isConnected ? stage.connected : stage.fragmented;
                  const IconComp = stage.icon;

                  return (
                    <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={stage.step}>
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.07 }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        style={{ height: "100%" }}
                      >
                        <Box
                          sx={{
                            p: { xs: 2.8, sm: 3 },
                            borderRadius: "20px",
                            bgcolor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid",
                            borderColor: isConnected
                              ? "rgba(249, 115, 22, 0.2)"
                              : "rgba(239, 68, 68, 0.18)",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            backdropFilter: "blur(12px)",
                            transition: "all 0.3s ease",
                            position: "relative",
                            "&:hover": {
                              bgcolor: "rgba(255, 255, 255, 0.05)",
                              borderColor: isConnected
                                ? "rgba(249, 115, 22, 0.45)"
                                : "rgba(239, 68, 68, 0.4)",
                              boxShadow: isConnected
                                ? "0 14px 30px -10px rgba(234, 88, 12, 0.25)"
                                : "0 14px 30px -10px rgba(239, 68, 68, 0.25)",
                            },
                          }}
                        >
                          <Box>
                            {/* Card Header */}
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 2,
                              }}
                            >
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                                <Box
                                  sx={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: "10px",
                                    bgcolor: state.bg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: state.color,
                                  }}
                                >
                                  <IconComp sx={{ fontSize: 18 }} />
                                </Box>
                                <Typography
                                  sx={{
                                    fontSize: "0.8rem",
                                    fontWeight: 600,
                                    color: "rgba(255, 255, 255, 0.45)",
                                    letterSpacing: "0.04em",
                                  }}
                                >
                                  PHASE {stage.step}
                                </Typography>
                              </Box>

                              <Box
                                sx={{
                                  px: 1.3,
                                  py: 0.35,
                                  borderRadius: "9999px",
                                  bgcolor: state.bg,
                                  fontSize: "0.68rem",
                                  fontWeight: 600,
                                  color: state.color,
                                  letterSpacing: "0.04em",
                                  textTransform: "uppercase",
                                }}
                              >
                                {state.status}
                              </Box>
                            </Box>

                            {/* Node Title */}
                            <Typography
                              sx={{
                                fontSize: "1.1rem",
                                fontWeight: 600,
                                color: "#FFFFFF",
                                mb: 0.5,
                                letterSpacing: "-0.015em",
                              }}
                            >
                              {stage.title}
                            </Typography>

                            {/* State Headline */}
                            <Typography
                              sx={{
                                fontSize: "0.82rem",
                                fontWeight: 600,
                                color: state.color,
                                mb: 1.5,
                              }}
                            >
                              {state.headline}
                            </Typography>

                            {/* Detail Description */}
                            <Typography
                              sx={{
                                fontSize: "0.86rem",
                                color: "rgba(255, 255, 255, 0.7)",
                                lineHeight: 1.65,
                                mb: 2.5,
                              }}
                            >
                              {state.details}
                            </Typography>
                          </Box>

                          {/* Card Footer with Latency Indicator */}
                          <Box
                            sx={{
                              pt: 1.8,
                              borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
                              {isConnected ? (
                                <CheckCircleRoundedIcon sx={{ fontSize: 16, color: "#FB923C" }} />
                              ) : (
                                <WarningAmberRoundedIcon sx={{ fontSize: 16, color: "#EF4444" }} />
                              )}
                              <Typography
                                sx={{
                                  fontSize: "0.74rem",
                                  fontWeight: 500,
                                  color: isConnected ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.6)",
                                }}
                              >
                                {isConnected ? "Direct Webhook" : "Human Data Entry"}
                              </Typography>
                            </Box>

                            <Typography
                              sx={{
                                fontSize: "0.72rem",
                                fontWeight: 600,
                                color: state.color,
                              }}
                            >
                              {state.latency}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>

            {/* Live Operational Telemetry Bar */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: "20px",
                bgcolor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                gap: 3,
                mb: 3.5,
              }}
            >
              {(isConnected ? telemetryData.connected : telemetryData.fragmented).map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                    borderLeft: { md: idx > 0 ? "1px solid rgba(255, 255, 255, 0.08)" : "none" },
                    pl: { md: idx > 0 ? 3 : 0 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "rgba(255, 255, 255, 0.5)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.45rem", sm: "1.75rem" },
                      fontWeight: 600,
                      color: item.color,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: "rgba(255, 255, 255, 0.65)",
                    }}
                  >
                    {item.note}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Bottom Insight & Next Step Prompt */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.92rem",
                  color: isConnected ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.65)",
                  maxWidth: 620,
                  lineHeight: 1.6,
                }}
              >
                {isConnected
                  ? "Every department operates on real-time synchronized data without manual copy-paste overhead or forgotten customer threads."
                  : "Every disconnect costs your company hours of manual work and creates unnecessary customer friction."}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Link href="/how-we-help" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      px: 3,
                      py: 1.2,
                      fontSize: "0.86rem",
                      fontWeight: 600,
                      borderRadius: "9999px",
                      textTransform: "none",
                      boxShadow: "0 4px 15px rgba(234, 88, 12, 0.35)",
                      whiteSpace: "nowrap",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                        boxShadow: "0 8px 25px rgba(234, 88, 12, 0.5)",
                      },
                    }}
                  >
                    Explore How We Help
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
