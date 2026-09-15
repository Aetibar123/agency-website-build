"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Button, Grid, Chip } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { motion, AnimatePresence } from "framer-motion";

interface WorkflowDemo {
  id: string;
  tabLabel: string;
  icon: React.ReactNode;
  frontStage: {
    badge: string;
    title: string;
    tag: string;
    metrics: string;
    snippetTitle: string;
    snippetData: { label: string; value: string }[];
  };
  eventBus: {
    protocol: string;
    latency: string;
    status: string;
  };
  backStage: {
    badge: string;
    title: string;
    tag: string;
    metrics: string;
    snippetTitle: string;
    snippetData: { label: string; value: string }[];
  };
}

const workflowDemos: WorkflowDemo[] = [
  {
    id: "lead-intake",
    tabLabel: "Customer Inquiry Intake",
    icon: <HubOutlinedIcon sx={{ fontSize: 18 }} />,
    frontStage: {
      badge: "CUSTOMER TOUCHPOINT • INTAKE",
      title: "Structured Inquiry Form",
      tag: "Web Application",
      metrics: "Responsive Intake Flow",
      snippetTitle: "Incoming Inquiry Details",
      snippetData: [
        { label: "Project Interest", value: "Custom Operations System" },
        { label: "Contact Channel", value: "Direct Web Intake" },
        { label: "Project Scope", value: "Internal Tools & Automation" },
        { label: "Intake Status", value: "Complete Requirements Captured" },
      ],
    },
    eventBus: {
      protocol: "Direct System Integration",
      latency: "Automated Data Flow",
      status: "Transfers data without manual copy-pasting",
    },
    backStage: {
      badge: "INTERNAL OPERATIONS • TEAM DISPATCH",
      title: "Inquiry Organization & Routing",
      tag: "Centralized Operations Hub",
      metrics: "Prompt Notifications & Team Assignment",
      snippetTitle: "Workflow Actions Triggered",
      snippetData: [
        { label: "Assigned Team", value: "Project Lead Notified" },
        { label: "Team Alert", value: "Notification routed to team channel" },
        { label: "Client Receipt", value: "Automated confirmation sent" },
        { label: "Record Status", value: "Saved to central company database" },
      ],
    },
  },
  {
    id: "quoting",
    tabLabel: "Consistent Project Quoting",
    icon: <CalculateOutlinedIcon sx={{ fontSize: 18 }} />,
    frontStage: {
      badge: "CLIENT REQUEST • SCOPE INTAKE",
      title: "Project Specification Intake",
      tag: "Quoting Portal",
      metrics: "Clear Scope Selection",
      snippetTitle: "Selected Deliverables",
      snippetData: [
        { label: "Deliverables", value: "Operations Portal + Team Tracking" },
        { label: "Team Access", value: "Multi-Role User Permissions" },
        { label: "Hosting / Setup", value: "Secure Cloud Deployment" },
        { label: "Integration", value: "CRM & Accounting Connection" },
      ],
    },
    eventBus: {
      protocol: "Margin & Pricing Rules",
      latency: "Standardized Calculation",
      status: "Applies approved pricing guidelines consistently",
    },
    backStage: {
      badge: "ESTIMATION WORKFLOW • PROPOSALS",
      title: "Document & Proposal Generation",
      tag: "Proposal Workflow",
      metrics: "Fast Turnaround Without Guesswork",
      snippetTitle: "Generated Proposal Output",
      snippetData: [
        { label: "Pricing Rules", value: "Standardized margin rules applied" },
        { label: "Review Status", value: "Ready for team review and approval" },
        { label: "Proposal Doc", value: "Formatted proposal staged for client" },
        { label: "Sign-Off Link", value: "Prepared for digital signature" },
      ],
    },
  },
  {
    id: "field-dispatch",
    tabLabel: "Milestone Tracking & Invoicing",
    icon: <PhoneIphoneRoundedIcon sx={{ fontSize: 18 }} />,
    frontStage: {
      badge: "TEAM INTERFACE • PROJECT TRACKING",
      title: "Milestone & Delivery Portal",
      tag: "Mobile-Friendly Web App",
      metrics: "Clear Completion Records",
      snippetTitle: "Milestone Completed",
      snippetData: [
        { label: "Milestone Item", value: "Deliverable Phase Sign-Off" },
        { label: "Verification", value: "Client or Manager Sign-Off" },
        { label: "Documentation", value: "Completion notes and files attached" },
        { label: "Delivery Status", value: "Marked complete across schedules" },
      ],
    },
    eventBus: {
      protocol: "Accounting & Billing Integration",
      latency: "Automated Status Sync",
      status: "Stages billing details as milestones finish",
    },
    backStage: {
      badge: "OPERATIONS & FINANCE • BILLING",
      title: "Automated Invoice Preparation",
      tag: "Accounting Sync",
      metrics: "Eliminates Billing Delays",
      snippetTitle: "Billing & Operational Actions",
      snippetData: [
        { label: "Invoice Draft", value: "Draft invoice prepared in accounting" },
        { label: "Financial Records", value: "Synced to accounting software" },
        { label: "Project Status", value: "Next milestone unlocked on board" },
        { label: "Manager Review", value: "Status verified without manual calls" },
      ],
    },
  },
];

export default function HowWeHelpHero() {
  const [activeDemoId, setActiveDemoId] = useState<string>("lead-intake");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(0);

  const currentDemo = workflowDemos.find((d) => d.id === activeDemoId) || workflowDemos[0];

  const triggerLiveSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimStep(1);

    setTimeout(() => {
      setSimStep(2);
    }, 600);

    setTimeout(() => {
      setSimStep(3);
    }, 1200);

    setTimeout(() => {
      setSimStep(4);
      setTimeout(() => {
        setIsSimulating(false);
        setSimStep(0);
      }, 2500);
    }, 1800);
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "96vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: { xs: 16, sm: 18, md: 20 },
        pb: { xs: 10, md: 16 },
        background:
          "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.08) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
        overflow: "hidden",
      }}
    >
      {/* Architectural Subtle Grid & Ambient Lighting (Pure CSS, Zero Lag) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(24, 24, 27, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 24, 27, 0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 30%, #000 35%, transparent 85%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Left-Aligned Typographic Core */}
        <Box
          sx={{
            maxWidth: { xs: "100%", lg: "980px" },
            ml: 0,
            mr: "auto",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mb: { xs: 6, md: 8 },
          }}
        >
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ alignSelf: "flex-start" }}
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
                mb: { xs: 3, md: 3.5 },
              }}
            >
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
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
                TOUCHPOINT TO OPERATIONS ARCHITECTURE &bull; SYSTEM DEMO
              </Typography>
            </Box>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%" }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.35rem", sm: "3.25rem", md: "4.2rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.15, md: 1.12 },
                letterSpacing: { xs: "-0.03em", md: "-0.035em" },
                textAlign: "left",
                mb: { xs: 3, md: 3.5 },
              }}
            >
              Technology should fit your business —{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                not the other way around.
              </Box>
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.25rem" },
                lineHeight: 1.8,
                color: "#52525B",
                maxWidth: 820,
                ml: 0,
                mr: "auto",
                textAlign: "left",
                mb: { xs: 4, md: 5 },
                fontWeight: 400,
              }}
            >
              We help ambitious businesses connect customer touchpoints with behind-the-scenes operations — building custom software, web applications, and automated workflows that eliminate manual copy-pasting and disconnected tools.
            </Typography>
          </motion.div>

          {/* Action Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                gap: 2,
                alignItems: "center",
                mb: 4,
              }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      px: { xs: 3.5, sm: 4.5 },
                      py: { xs: 1.4, sm: 1.6 },
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      fontWeight: 700,
                      borderRadius: "9999px",
                      boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.38)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                        boxShadow: "0 15px 30px -5px rgba(234, 88, 12, 0.5)",
                      },
                    }}
                  >
                    Discuss Your Workflow
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a href="#diagnostic-matrix" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowDownwardRoundedIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      color: "#18181B",
                      borderColor: "rgba(24, 24, 27, 0.2)",
                      bgcolor: "rgba(255, 255, 255, 0.85)",
                      backdropFilter: "blur(10px)",
                      px: { xs: 3.5, sm: 4 },
                      py: { xs: 1.4, sm: 1.55 },
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      fontWeight: 600,
                      borderRadius: "9999px",
                      boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#EA580C",
                        bgcolor: "rgba(249, 115, 22, 0.04)",
                        color: "#EA580C",
                      },
                    }}
                  >
                    Explore Solution Matrix
                  </Button>
                </a>
              </motion.div>
            </Box>
          </motion.div>

          {/* Sub-CTA Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: { xs: 2, sm: 3.5 },
              }}
            >
              {[
                "Custom Software & Web Development",
                "Business Workflow Automation",
                "Engineering Studio Based in Udaipur, India",
              ].map((text, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleOutlinedIcon sx={{ fontSize: 17, color: "#EA580C" }} />
                  <Typography sx={{ fontSize: "0.85rem", color: "#52525B", fontWeight: 500 }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Centerpiece Showcase: Interactive Connected Workflow Console */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
            }}
          >
            {/* Warm Ambient Glow behind frame */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "95%",
                height: "85%",
                background:
                  "radial-gradient(ellipse, rgba(249, 115, 22, 0.2) 0%, rgba(251, 146, 60, 0.08) 50%, transparent 75%)",
                filter: "blur(65px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Dark Obsidian Glass Console Frame */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                borderRadius: { xs: "20px", sm: "28px", md: "32px" },
                background: "linear-gradient(145deg, #18181B 0%, #111113 70%, #1A1816 100%)",
                border: "1px solid rgba(249, 115, 22, 0.35)",
                boxShadow:
                  "0 30px 80px -20px rgba(24, 24, 27, 0.5), 0 0 0 1px rgba(249, 115, 22, 0.15)",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {/* Console Top Header & Tab Controls */}
              <Box
                sx={{
                  px: { xs: 2.5, sm: 3.5 },
                  py: 2,
                  bgcolor: "rgba(24, 24, 27, 0.6)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                {/* Window Dots & Console Title */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box sx={{ display: "flex", gap: 0.8 }}>
                    <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#EF4444" }} />
                    <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#F59E0B" }} />
                    <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#10B981" }} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.825rem",
                      fontWeight: 700,
                      color: "#A1A1AA",
                      letterSpacing: "0.04em",
                      ml: 1,
                    }}
                  >
                    AETIBAR WORKFLOW ARCHITECTURE &bull; SYSTEM DEMONSTRATION
                  </Typography>
                </Box>

                {/* Preset Scenario Selector Buttons */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {workflowDemos.map((demo) => {
                    const isSelected = demo.id === activeDemoId;
                    return (
                      <Button
                        key={demo.id}
                        size="small"
                        onClick={() => {
                          setActiveDemoId(demo.id);
                          setIsSimulating(false);
                          setSimStep(0);
                        }}
                        startIcon={demo.icon}
                        sx={{
                          px: 2,
                          py: 0.6,
                          borderRadius: "9999px",
                          fontSize: "0.775rem",
                          fontWeight: 700,
                          bgcolor: isSelected ? "rgba(249, 115, 22, 0.2)" : "rgba(255, 255, 255, 0.04)",
                          border: isSelected ? "1px solid #EA580C" : "1px solid rgba(255, 255, 255, 0.1)",
                          color: isSelected ? "#FB923C" : "#A1A1AA",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            bgcolor: "rgba(249, 115, 22, 0.25)",
                            borderColor: "#EA580C",
                            color: "#FFFFFF",
                          },
                        }}
                      >
                        {demo.tabLabel}
                      </Button>
                    );
                  })}
                </Box>
              </Box>

              {/* Main Console Workspace */}
              <Box sx={{ p: { xs: 2.5, sm: 4, md: 5 } }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDemo.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Grid container spacing={{ xs: 3, md: 3 }} sx={{ alignItems: "stretch" }}>
                      {/* Left Side: Front-Stage (Customer Interface) */}
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                          sx={{
                            p: { xs: 3, sm: 3.5 },
                            borderRadius: "18px",
                            bgcolor: "rgba(255, 255, 255, 0.04)",
                            border:
                              simStep === 1
                                ? "2px solid #EA580C"
                                : "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow:
                              simStep === 1
                                ? "0 0 25px rgba(234, 88, 12, 0.35)"
                                : "none",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Box>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                                <LanguageIcon sx={{ fontSize: 20, color: "#FB923C" }} />
                                <Typography sx={{ fontSize: "0.725rem", fontWeight: 800, color: "#FB923C", letterSpacing: "0.06em" }}>
                                  {currentDemo.frontStage.badge}
                                </Typography>
                              </Box>
                              <Chip
                                label={currentDemo.frontStage.tag}
                                size="small"
                                sx={{
                                  bgcolor: "rgba(249, 115, 22, 0.15)",
                                  color: "#FB923C",
                                  fontWeight: 700,
                                  fontSize: "0.7rem",
                                  borderRadius: "6px",
                                }}
                              />
                            </Box>

                            <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", mb: 1 }}>
                              {currentDemo.frontStage.title}
                            </Typography>
                            <Typography sx={{ fontSize: "0.825rem", color: "#A1A1AA", mb: 3 }}>
                              &bull; {currentDemo.frontStage.metrics}
                            </Typography>

                            {/* Live Payload Card */}
                            <Box
                              sx={{
                                p: 2.2,
                                borderRadius: "12px",
                                bgcolor: "rgba(0, 0, 0, 0.4)",
                                border: "1px solid rgba(255, 255, 255, 0.06)",
                              }}
                            >
                              <Typography sx={{ fontSize: "0.725rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase", mb: 1.5 }}>
                                {currentDemo.frontStage.snippetTitle}:
                              </Typography>
                              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                {currentDemo.frontStage.snippetData.map((row, idx) => (
                                  <Box key={idx} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography sx={{ fontSize: "0.775rem", color: "#A1A1AA" }}>
                                      {row.label}:
                                    </Typography>
                                    <Typography sx={{ fontSize: "0.8rem", color: "#F4F4F5", fontWeight: 600 }}>
                                      {row.value}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          </Box>

                          <Box sx={{ pt: 2.5, mt: 2, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                            <Typography sx={{ fontSize: "0.75rem", color: "#34D399", fontWeight: 600 }}>
                              &check; Fast Web Experience &bull; Mobile Responsive
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>

                      {/* Center Column: The Real-Time Synchronization Bridge */}
                      <Grid size={{ xs: 12, md: 2 }}>
                        <Box
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            py: { xs: 2, md: 0 },
                          }}
                        >
                          <Box
                            component={motion.div}
                            animate={
                              isSimulating
                                ? { scale: [1, 1.25, 1], rotate: [0, 180, 360] }
                                : { scale: 1, rotate: 0 }
                            }
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            sx={{
                              width: 52,
                              height: 52,
                              borderRadius: "16px",
                              bgcolor:
                                simStep === 2
                                  ? "#EA580C"
                                  : "rgba(249, 115, 22, 0.15)",
                              border: "1px solid rgba(249, 115, 22, 0.4)",
                              color: "#FFFFFF",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow:
                                simStep === 2
                                  ? "0 0 25px #EA580C"
                                  : "0 4px 15px rgba(249, 115, 22, 0.2)",
                              mb: 1.5,
                              transition: "all 0.3s ease",
                            }}
                          >
                            <SyncAltRoundedIcon sx={{ fontSize: 26, color: simStep === 2 ? "#FFFFFF" : "#FB923C" }} />
                          </Box>

                          <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#FB923C", textAlign: "center", mb: 0.5 }}>
                            {currentDemo.eventBus.latency}
                          </Typography>
                          <Typography sx={{ fontSize: "0.7rem", color: "#71717A", textAlign: "center", maxWidth: 120 }}>
                            {currentDemo.eventBus.protocol}
                          </Typography>
                        </Box>
                      </Grid>

                      {/* Right Side: Back-Stage (Operational Core) */}
                      <Grid size={{ xs: 12, md: 5 }}>
                        <Box
                          sx={{
                            p: { xs: 3, sm: 3.5 },
                            borderRadius: "18px",
                            bgcolor: "rgba(255, 255, 255, 0.04)",
                            border:
                              simStep === 3
                                ? "2px solid #EA580C"
                                : "1px solid rgba(255, 255, 255, 0.1)",
                            boxShadow:
                              simStep === 3
                                ? "0 0 25px rgba(234, 88, 12, 0.35)"
                                : "none",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Box>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                                <StorageIcon sx={{ fontSize: 20, color: "#38BDF8" }} />
                                <Typography sx={{ fontSize: "0.725rem", fontWeight: 800, color: "#38BDF8", letterSpacing: "0.06em" }}>
                                  {currentDemo.backStage.badge}
                                </Typography>
                              </Box>
                              <Chip
                                label={currentDemo.backStage.tag}
                                size="small"
                                sx={{
                                  bgcolor: "rgba(56, 189, 248, 0.12)",
                                  color: "#38BDF8",
                                  fontWeight: 700,
                                  fontSize: "0.7rem",
                                  borderRadius: "6px",
                                }}
                              />
                            </Box>

                            <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", mb: 1 }}>
                              {currentDemo.backStage.title}
                            </Typography>
                            <Typography sx={{ fontSize: "0.825rem", color: "#A1A1AA", mb: 3 }}>
                              &bull; {currentDemo.backStage.metrics}
                            </Typography>

                            {/* Live Backend Operations Card */}
                            <Box
                              sx={{
                                p: 2.2,
                                borderRadius: "12px",
                                bgcolor: "rgba(0, 0, 0, 0.4)",
                                border: "1px solid rgba(255, 255, 255, 0.06)",
                              }}
                            >
                              <Typography sx={{ fontSize: "0.725rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase", mb: 1.5 }}>
                                {currentDemo.backStage.snippetTitle}:
                              </Typography>
                              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                {currentDemo.backStage.snippetData.map((row, idx) => (
                                  <Box key={idx} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography sx={{ fontSize: "0.775rem", color: "#A1A1AA" }}>
                                      {row.label}:
                                    </Typography>
                                    <Typography sx={{ fontSize: "0.8rem", color: "#F4F4F5", fontWeight: 600 }}>
                                      {row.value}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          </Box>

                          <Box sx={{ pt: 2.5, mt: 2, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                            <Typography sx={{ fontSize: "0.75rem", color: "#34D399", fontWeight: 600 }}>
                              &check; Single Source of Truth &bull; Reduced Manual Data Entry
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Interactive Trigger Bar */}
                <Box
                  sx={{
                    mt: 3.5,
                    pt: 3,
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: isSimulating ? "#F97316" : "#10B981",
                        boxShadow: isSimulating ? "0 0 12px #F97316" : "0 0 8px #10B981",
                      }}
                    />
                    <Typography sx={{ fontSize: "0.8rem", color: "#D4D4D8", fontWeight: 500 }}>
                      {isSimulating
                        ? `Traversing Pipeline (${simStep}/3) &bull; Synchronizing Workflow Event...`
                        : simStep === 4
                        ? "✓ Illustrative Event Handshake Completed"
                        : "Ready: Click to see how data flows through connected tools"}
                    </Typography>
                  </Box>

                  <Button
                    onClick={triggerLiveSimulation}
                    disabled={isSimulating}
                    startIcon={
                      simStep === 4 ? (
                        <DoneAllRoundedIcon sx={{ fontSize: 16 }} />
                      ) : (
                        <PlayArrowRoundedIcon sx={{ fontSize: 16 }} />
                      )
                    }
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: "9999px",
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      boxShadow: "0 6px 20px rgba(234, 88, 12, 0.4)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      },
                    }}
                  >
                    {isSimulating ? "Transmitting..." : "Simulate Workflow Flow"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
