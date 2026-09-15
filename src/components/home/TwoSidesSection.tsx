"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DualStage {
  id: string;
  step: string;
  tabLabel: string;
  tabSub: string;
  customer: {
    stageTag: string;
    title: string;
    description: string;
    uiType: string;
    uiData: {
      label: string;
      value: string;
      tag: string;
      meta: string;
    };
    outcome: string;
  };
  bridge: {
    protocol: string;
    latency: string;
  };
  business: {
    stageTag: string;
    title: string;
    description: string;
    uiType: string;
    uiData: {
      label: string;
      value: string;
      tag: string;
      meta: string;
    };
    outcome: string;
  };
}

const dualStages: DualStage[] = [
  {
    id: "discovery",
    step: "01",
    tabLabel: "First Impression",
    tabSub: "Fast Page Loading",
    customer: {
      stageTag: "Customer Experience",
      title: "Fast Loading & Clear Information",
      description:
        "Visitors find what they need right away. Pages load quickly, work properly across mobile and desktop, and communicate your services clearly without confusing jargon.",
      uiType: "web-preview",
      uiData: {
        label: "User Experience",
        value: "Fast, Responsive Design",
        tag: "Optimized",
        meta: "Clear messaging, quick loading, and easy navigation",
      },
      outcome: "Visitors get clear answers and understand what you offer immediately.",
    },
    bridge: {
      protocol: "Direct Data Flow",
      latency: "Connected System",
    },
    business: {
      stageTag: "Internal Operations",
      title: "Clean Lead Capture & Tracking",
      description:
        "Know where inquiries come from and what services people are looking for, without complicated setups or unnecessary tracking bloat.",
      uiType: "analytics-preview",
      uiData: {
        label: "Traffic & Inquiries",
        value: "Direct Attribution",
        tag: "Active",
        meta: "Inquiries recorded directly into your workflow",
      },
      outcome: "A clear picture of how prospective clients discover your business.",
    },
  },
  {
    id: "intake",
    step: "02",
    tabLabel: "Getting in Touch",
    tabSub: "Inquiry ➔ Direct Routing",
    customer: {
      stageTag: "Customer Experience",
      title: "Clear, Guided Contact Forms",
      description:
        "Instead of vague contact forms that cause confusion and endless email chains, clients go through structured questions that capture project details upfront.",
      uiType: "form-preview",
      uiData: {
        label: "Project Inquiry",
        value: "Structured Requirement Intake",
        tag: "Submitted",
        meta: "Project type, timeline, and requirements organized clearly",
      },
      outcome: "Clients can submit detailed project details easily.",
    },
    bridge: {
      protocol: "Instant Routing",
      latency: "Automated Dispatch",
    },
    business: {
      stageTag: "Internal Operations",
      title: "Automatic Routing & Notifications",
      description:
        "Inquiry details go straight to the right person via email, team chat, or your CRM — so nobody has to copy-paste information between multiple tools.",
      uiType: "triage-preview",
      uiData: {
        label: "Team Notification",
        value: "Routed to Project Lead",
        tag: "Instant Alert",
        meta: "No manual re-typing, ready for direct follow-up",
      },
      outcome: "Inquiries are answered promptly and never get lost in an inbox.",
    },
  },
  {
    id: "quote",
    step: "03",
    tabLabel: "Estimates & Proposals",
    tabSub: "Scope ➔ Proposal",
    customer: {
      stageTag: "Customer Experience",
      title: "Clear, Itemized Proposals",
      description:
        "Clients receive organized proposals with clear scopes, realistic timelines, and transparent milestones, making decisions straightforward and reliable.",
      uiType: "proposal-preview",
      uiData: {
        label: "Proposal View",
        value: "Itemized Scope & Milestones",
        tag: "Structured",
        meta: "Clear deliverable milestones and transparent pricing terms",
      },
      outcome: "Clients clearly understand what is included and how much it costs.",
    },
    bridge: {
      protocol: "Connected Pricing Logic",
      latency: "Standardized Calculation",
    },
    business: {
      stageTag: "Internal Operations",
      title: "Standardized Costing & Quoting",
      description:
        "Generate quotes using consistent formulas and templates instead of manual spreadsheets, ensuring realistic estimates and fewer pricing errors.",
      uiType: "margin-preview",
      uiData: {
        label: "Cost Estimator",
        value: "Consistent Pricing Logic",
        tag: "Formula-Driven",
        meta: "Standardized rules applied automatically to project scopes",
      },
      outcome: "Spend less time writing quotes while keeping estimates accurate.",
    },
  },
  {
    id: "delivery",
    step: "04",
    tabLabel: "Delivery & Updates",
    tabSub: "Milestones in Progress",
    customer: {
      stageTag: "Customer Experience",
      title: "Progress Visibility",
      description:
        "Clients can see milestone progress, review completed items, and provide feedback in one organized place without chasing status updates over email.",
      uiType: "portal-preview",
      uiData: {
        label: "Project Status",
        value: "Active Milestones in Progress",
        tag: "On Track",
        meta: "Key deliverables reviewed and next steps scheduled",
      },
      outcome: "Clients always know what stage their project is at.",
    },
    bridge: {
      protocol: "Shared Project Updates",
      latency: "Central Record",
    },
    business: {
      stageTag: "Internal Operations",
      title: "Task & Milestone Management",
      description:
        "Your team tracks deliverables, reviews, and client handoffs in a unified workspace, keeping everyone aligned on schedules and expectations.",
      uiType: "cockpit-preview",
      uiData: {
        label: "Milestone Tracking",
        value: "Task Dashboard",
        tag: "Synchronized",
        meta: "Deliverables and next steps organized in one place",
      },
      outcome: "Projects move forward smoothly without endless status check meetings.",
    },
  },
];

export default function TwoSidesSection() {
  const [activeIdx, setActiveIdx] = useState(1);
  const current = dualStages[activeIdx];

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
      {/* Subtle Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(234, 88, 12, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
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
          <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: { xs: "100%", lg: "86%" } }}>
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
                Two Sides of Every Build
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
              A great website means nothing if{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                your operations are drowning.
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.18rem" },
                color: "#52525B",
                lineHeight: 1.75,
                maxWidth: 840,
                fontWeight: 400,
              }}
            >
              A website can look great, but if customer inquiries, quotes, and project updates are scattered across messy spreadsheets and unread messages, things quickly fall apart. We build the public face and internal workflows together so your business actually runs smoothly.
            </Typography>
          </Box>
        </motion.div>

        {/* Interactive 4-Phase Lifecycle Bar */}
        <Box sx={{ mb: 4.5 }}>
          <Grid container spacing={1.5}>
            {dualStages.map((stage, idx) => {
              const isActive = activeIdx === idx;
              return (
                <Grid size={{ xs: 6, md: 3 }} key={stage.id}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box
                      onClick={() => setActiveIdx(idx)}
                      sx={{
                        p: { xs: 2, sm: 2.4 },
                        borderRadius: "18px",
                        bgcolor: isActive ? "#18181B" : "#FFFFFF",
                        border: "1.5px solid",
                        borderColor: isActive ? "#18181B" : "rgba(228, 228, 231, 0.9)",
                        boxShadow: isActive
                          ? "0 12px 30px -8px rgba(24, 24, 27, 0.25)"
                          : "0 2px 8px rgba(0, 0, 0, 0.02)",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                        "&:hover": {
                          borderColor: isActive ? "#18181B" : "#EA580C",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography
                          sx={{
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: isActive ? "#FB923C" : "#EA580C",
                          }}
                        >
                          Step {stage.step}
                        </Typography>
                        {isActive && (
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: "#FB923C",
                              boxShadow: "0 0 8px #FB923C",
                            }}
                          />
                        )}
                      </Box>

                      <Typography
                        sx={{
                          fontSize: { xs: "0.88rem", sm: "0.95rem" },
                          fontWeight: 600,
                          color: isActive ? "#FFFFFF" : "#18181B",
                          lineHeight: 1.3,
                        }}
                      >
                        {stage.tabLabel}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: isActive ? "rgba(255, 255, 255, 0.65)" : "#71717A",
                          fontWeight: 400,
                        }}
                      >
                        {stage.tabSub}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Dual-Stage Interactive Showcase (Side-by-Side Front-Stage vs Back-Stage) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Grid container spacing={{ xs: 3, lg: 3.5 }} sx={{ alignItems: "stretch" }}>
              {/* 1. FRONT-STAGE (What Customer Experiences) — Crisp Light Card */}
              <Grid size={{ xs: 12, lg: 6 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#FFFFFF",
                    borderRadius: { xs: "24px", md: "30px" },
                    border: "1.5px solid rgba(249, 115, 22, 0.25)",
                    p: { xs: 3.5, sm: 4.5, md: 5 },
                    boxShadow: "0 20px 50px -12px rgba(234, 88, 12, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box>
                    {/* Card Header */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            borderRadius: "12px",
                            bgcolor: "rgba(249, 115, 22, 0.08)",
                            border: "1px solid rgba(249, 115, 22, 0.25)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#EA580C",
                          }}
                        >
                          <LanguageIcon sx={{ fontSize: 22 }} />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "0.725rem",
                              fontWeight: 600,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "#EA580C",
                            }}
                          >
                            {current.customer.stageTag}
                          </Typography>
                          <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#18181B" }}>
                            What Your Customer Sees
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.4,
                          borderRadius: "9999px",
                          bgcolor: "rgba(249, 115, 22, 0.08)",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "#EA580C",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        Client Side
                      </Box>
                    </Box>

                    {/* Stage Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "1.45rem", sm: "1.75rem" },
                        fontWeight: 600,
                        color: "#18181B",
                        letterSpacing: "-0.02em",
                        mb: 1.5,
                      }}
                    >
                      {current.customer.title}
                    </Typography>

                    {/* Stage Description */}
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        color: "#52525B",
                        lineHeight: 1.75,
                        mb: 3.5,
                      }}
                    >
                      {current.customer.description}
                    </Typography>

                    {/* Live Micro-UI Simulation Card */}
                    <Box
                      sx={{
                        p: 2.8,
                        borderRadius: "18px",
                        bgcolor: "#FAF8F5",
                        border: "1px solid rgba(228, 228, 231, 0.9)",
                        mb: 3,
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.2 }}>
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#71717A", textTransform: "uppercase" }}>
                          {current.customer.uiData.label}
                        </Typography>
                        <Box
                          sx={{
                            px: 1.2,
                            py: 0.3,
                            borderRadius: "9999px",
                            bgcolor: "rgba(234, 88, 12, 0.1)",
                            color: "#EA580C",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                          }}
                        >
                          {current.customer.uiData.tag}
                        </Box>
                      </Box>

                      <Typography sx={{ fontSize: "1.1rem", fontWeight: 600, color: "#18181B", mb: 0.8 }}>
                        {current.customer.uiData.value}
                      </Typography>

                      <Typography sx={{ fontSize: "0.825rem", color: "#71717A" }}>
                        {current.customer.uiData.meta}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Customer Outcome Footer */}
                  <Box
                    sx={{
                      pt: 2.2,
                      borderTop: "1px solid rgba(228, 228, 231, 0.8)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                    }}
                  >
                    <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
                    <Typography sx={{ fontSize: "0.85rem", color: "#18181B", fontWeight: 500 }}>
                      {current.customer.outcome}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* 2. BACK-STAGE (What Operations Teams See) — High-Tech Dark Obsidian Card */}
              <Grid size={{ xs: 12, lg: 6 }} sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#111218",
                    borderRadius: { xs: "24px", md: "30px" },
                    border: "1.5px solid rgba(255, 255, 255, 0.1)",
                    p: { xs: 3.5, sm: 4.5, md: 5 },
                    boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.45)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Grid Texture */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                      pointerEvents: "none",
                    }}
                  />

                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    {/* Card Header */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            borderRadius: "12px",
                            bgcolor: "rgba(249, 115, 22, 0.12)",
                            border: "1px solid rgba(249, 115, 22, 0.35)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#FB923C",
                          }}
                        >
                          <StorageIcon sx={{ fontSize: 22 }} />
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "0.725rem",
                              fontWeight: 600,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "#FB923C",
                            }}
                          >
                            {current.business.stageTag}
                          </Typography>
                          <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#FFFFFF" }}>
                            What Your Team Manages
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          px: 1.5,
                          py: 0.4,
                          borderRadius: "9999px",
                          bgcolor: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(255, 255, 255, 0.12)",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "rgba(255, 255, 255, 0.8)",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        Team Side
                      </Box>
                    </Box>

                    {/* Stage Title */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "1.45rem", sm: "1.75rem" },
                        fontWeight: 600,
                        color: "#FFFFFF",
                        letterSpacing: "-0.02em",
                        mb: 1.5,
                      }}
                    >
                      {current.business.title}
                    </Typography>

                    {/* Stage Description */}
                    <Typography
                      sx={{
                        fontSize: "0.95rem",
                        color: "rgba(255, 255, 255, 0.72)",
                        lineHeight: 1.75,
                        mb: 3.5,
                      }}
                    >
                      {current.business.description}
                    </Typography>

                    {/* Live Micro-UI Simulation Cockpit Card */}
                    <Box
                      sx={{
                        p: 2.8,
                        borderRadius: "18px",
                        bgcolor: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        mb: 3,
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.2 }}>
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255, 255, 255, 0.5)", textTransform: "uppercase" }}>
                          {current.business.uiData.label}
                        </Typography>
                        <Box
                          sx={{
                            px: 1.2,
                            py: 0.3,
                            borderRadius: "9999px",
                            bgcolor: "rgba(249, 115, 22, 0.2)",
                            color: "#FB923C",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                          }}
                        >
                          {current.business.uiData.tag}
                        </Box>
                      </Box>

                      <Typography sx={{ fontSize: "1.1rem", fontWeight: 600, color: "#FFFFFF", mb: 0.8 }}>
                        {current.business.uiData.value}
                      </Typography>

                      <Typography sx={{ fontSize: "0.825rem", color: "rgba(255, 255, 255, 0.6)" }}>
                        {current.business.uiData.meta}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Business Outcome Footer */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      pt: 2.2,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                    }}
                  >
                    <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: "#FB923C" }} />
                    <Typography sx={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.85)", fontWeight: 500 }}>
                      {current.business.outcome}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* The Live Synapse Indicator Bar */}
        <Box
          sx={{
            mt: 4,
            p: { xs: 2.5, sm: 3 },
            borderRadius: "20px",
            bgcolor: "#FFFFFF",
            border: "1px solid rgba(228, 228, 231, 0.9)",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.03)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                bgcolor: "rgba(249, 115, 22, 0.1)",
                color: "#EA580C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SyncAltIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                How It Connects &bull; {current.bridge.protocol}
              </Typography>
              <Typography sx={{ fontSize: "0.875rem", fontWeight: 500, color: "#18181B" }}>
                Connecting customer-facing tools directly with your team&apos;s day-to-day workflow.
              </Typography>
            </Box>
          </Box>

          <Link href="/solutions" style={{ textDecoration: "none" }}>
            <Button
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#EA580C",
                textTransform: "none",
                p: 0,
                whiteSpace: "nowrap",
                "&:hover": { color: "#C2410C", bgcolor: "transparent" },
              }}
            >
              Explore Our Solution Areas
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
