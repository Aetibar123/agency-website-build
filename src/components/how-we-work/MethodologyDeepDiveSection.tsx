"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Stage {
  num: string;
  tabLabel: string;
  timeframe: string;
  name: string;
  headline: string;
  story: string;
  whatHappens: { title: string; desc: string }[];
  deliverable: string;
  timeCommitment: string;
  outcome: string;
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
}

const stages: Stage[] = [
  {
    num: "01",
    tabLabel: "Discovery",
    timeframe: "Stage 01",
    name: "Understanding Your Business & Workflows",
    headline: "We learn how your business works before writing a single line of code.",
    story:
      "Every successful project starts by understanding the business first. We map how inquiries, customer requests, and tasks currently move through your business today — whether across email, messaging apps, or existing tools — and pinpoint where manual copy-pasting and disconnected tools slow your team down.",
    whatHappens: [
      {
        title: "Understand Current Workflows",
        desc: "We review how work moves through your business today — from customer inquiries and sales to internal operations, reporting, and billing.",
      },
      {
        title: "Identify Bottlenecks & Duplicate Work",
        desc: "We look for repetitive manual tasks, duplicate data entry, disconnected tools, and places where information gets lost or delayed.",
      },
      {
        title: "Define Clear Improvement Goals",
        desc: "We separate genuine operational needs from non-essential features, ensuring we focus on what will create the most immediate value.",
      },
    ],
    deliverable: "Comprehensive Discovery Summary with mapped workflow steps, prioritized requirements, and recommended solutions.",
    timeCommitment: "One or two focused discovery conversations with you and key operational team members.",
    outcome: "A clear, shared understanding of what needs to be built and why before any development starts.",
    image: "/images/home/editorial-client-consultation.jpg",
    imageAlt: "Aetibar operational discovery session auditing business workflows",
    icon: <SearchOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "02",
    tabLabel: "Planning",
    timeframe: "Stage 02",
    name: "System Architecture & Solution Blueprint",
    headline: "We turn findings into a clear technical scope, interface wireframes, and data flows.",
    story:
      "Before jumping into code, we create interactive wireframes and plan the data architecture. You can click through screen layouts, verify how your team will navigate the platform, and ensure that every feature matches your exact business rules.",
    whatHappens: [
      {
        title: "Interface Layouts & Wireframes",
        desc: "Clean, intuitive UI layouts showing how customers, staff, and administrators will interact with the system.",
      },
      {
        title: "Data Models & API Integrations",
        desc: "Designing secure database structures and API connections that tie your existing software and tools together.",
      },
      {
        title: "Role Permissions & Security",
        desc: "Defining access controls so team members, managers, and external clients each see only what they need.",
      },
    ],
    deliverable: "Documented Project Blueprint and wireframe layouts approved by both sides before engineering begins.",
    timeCommitment: "One collaborative review session to walk through layouts and approve the scope.",
    outcome: "Complete clarity on look, feel, user flow, and business logic before building begins.",
    image: "/images/home/hero-architecture.jpg",
    imageAlt: "Aetibar technical architecture blueprint and relational schema design",
    icon: <AccountTreeOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "03",
    tabLabel: "Development",
    timeframe: "Stage 03",
    name: "Staged Development & Working Previews",
    headline: "You see the product while it is being built, with regular working previews.",
    story:
      "Instead of waiting until the end of the project to see the result, you can review working parts of the software during development. This makes it easy to give feedback, catch misunderstandings early, and keep the build strictly aligned with your goals.",
    whatHappens: [
      {
        title: "Visible Milestone Previews",
        desc: "Functional software deployed to private staging environments so you can test features as they are built.",
      },
      {
        title: "Performance-Focused Engineering",
        desc: "Engineered with modern frameworks ensuring fast load times and responsive behavior across phones, tablets, and desktops.",
      },
      {
        title: "Realistic Workflow Testing",
        desc: "We populate staging with representative business data so interactions, forms, and workflows feel familiar.",
      },
    ],
    deliverable: "Working Staging Previews deployed at scheduled milestones for your team to test and verify.",
    timeCommitment: "Short periodic reviews of working features at your convenience.",
    outcome: "Continuous visibility and feedback, eliminating surprises at final delivery.",
    image: "/images/home/hero-agency-showcase.jpg",
    imageAlt: "Live working software staging preview",
    icon: <CodeOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "04",
    tabLabel: "Testing & Launch",
    timeframe: "Stage 04",
    name: "Thorough Testing & Controlled Rollout",
    headline: "We test thoroughly and plan the transition in stages so operations run smoothly.",
    story:
      "Switching to a new digital system should never disrupt your daily business operations. Before going live, we test critical user paths, validate important data records, and plan the transition carefully so your team feels completely confident on day one.",
    whatHappens: [
      {
        title: "Careful Data Migration",
        desc: "We map existing records, validate customer data, and verify database integrity before switching over.",
      },
      {
        title: "End-to-End Workflow Testing",
        desc: "Comprehensive testing of forms, inquiries, notifications, APIs, and security rules across devices.",
      },
      {
        title: "Team Onboarding & Walkthroughs",
        desc: "Easy-to-follow video walkthroughs and documentation showing each team member their exact daily steps.",
      },
    ],
    deliverable: "Tested Production System, validated data migration, and complete team training guides.",
    timeCommitment: "Your team conducts normal business while we manage deployment and migration in stages.",
    outcome: "A smooth launch with tested workflows and confident team adoption.",
    image: "/images/home/editorial-operations-facility.jpg",
    imageAlt: "Safe cutover and operational team training",
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "05",
    tabLabel: "Ongoing Support",
    timeframe: "Stage 05",
    name: "Support, Maintenance & System Evolution",
    headline: "Direct communication with the team that designed and built your software.",
    story:
      "Launch day is the start of ongoing utility. We monitor system health, error logs, and security updates. When your business grows, adds new services, or needs new integrations, the engineers who built your platform are available to maintain and expand it.",
    whatHappens: [
      {
        title: "Direct Engineering Communication",
        desc: "Communicate directly with the developers who built your platform — no confusing helpdesk layers.",
      },
      {
        title: "Monitoring & Maintenance",
        desc: "Ongoing health checks, framework updates, security patches, and database backup monitoring.",
      },
      {
        title: "Feature Improvements & Scaling",
        desc: "Periodic reviews to refine workflows, optimize performance, and introduce new capabilities as your business scales.",
      },
    ],
    deliverable: "Documented handover, defined support channels, and access to all code and credentials.",
    timeCommitment: "Peace of mind knowing your core digital systems have dependable technical backing.",
    outcome: "A reliable digital asset that continues to support your business as it grows.",
    image: "/images/home/editorial-craft-operations.jpg",
    imageAlt: "Continuous support and system evolution with Aetibar engineers",
    icon: <MonitorHeartOutlinedIcon sx={{ fontSize: 20 }} />,
  },
];

export default function MethodologyDeepDiveSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const currentStage = stages[activeIdx];

  const handleNext = () => {
    if (activeIdx < stages.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      setActiveIdx(0);
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      setActiveIdx(activeIdx - 1);
    } else {
      setActiveIdx(stages.length - 1);
    }
  };

  return (
    <Box
      component="section"
      id="lifecycle-engine"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FAF8F5",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Centered Section Header */}
        <Box sx={{ maxWidth: 860, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                  fontWeight: 700,
                }}
              >
                OUR METHODOLOGY &bull; 5 TRANSPARENT STAGES
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
                letterSpacing: "-0.035em",
                lineHeight: { xs: 1.15, md: 1.1 },
                mb: 2.5,
              }}
            >
              From first conversation to live launch{" "}
              <Box
                component="span"
                sx={{
                  display: { xs: "inline", sm: "block" },
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                in 5 transparent stages.
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.75,
                maxWidth: 760,
                mx: "auto",
              }}
            >
              A structured, collaborative process designed to keep everyone aligned. Here is the step-by-step approach we use to take projects from initial concept to a dependable production system.
            </Typography>
          </motion.div>
        </Box>

        {/* Horizontal 5-Step Interactive Stepper Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "stretch",
            justifyContent: { xs: "flex-start", md: "center" },
            overflowX: "auto",
            pb: 2,
            mb: { xs: 5, md: 7 },
            gap: 1.5,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {stages.map((stg, idx) => {
            const isActive = activeIdx === idx;
            return (
              <Box
                key={stg.num}
                onClick={() => setActiveIdx(idx)}
                sx={{
                  flex: { xs: "0 0 200px", md: "1 1 0" },
                  maxWidth: { md: "230px" },
                  p: { xs: 1.8, sm: 2 },
                  borderRadius: "16px",
                  cursor: "pointer",
                  bgcolor: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                  border: "2px solid",
                  borderColor: isActive ? "#EA580C" : "rgba(24, 24, 27, 0.08)",
                  boxShadow: isActive ? "0 10px 25px -6px rgba(234, 88, 12, 0.2)" : "none",
                  transition: "all 0.25s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  "&:hover": {
                    bgcolor: "#FFFFFF",
                    borderColor: isActive ? "#EA580C" : "rgba(234, 88, 12, 0.4)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: "8px",
                      bgcolor: isActive ? "#EA580C" : "rgba(24, 24, 27, 0.06)",
                      color: isActive ? "#FFFFFF" : "#71717A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                    }}
                  >
                    {stg.num}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: isActive ? "#EA580C" : "#71717A",
                    }}
                  >
                    {stg.timeframe}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: isActive ? "#18181B" : "#52525B",
                    lineHeight: 1.3,
                  }}
                >
                  {stg.tabLabel}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Active Stage Editorial Showcase (Clean 2-Column Presentation) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.num}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <Box
              sx={{
                p: { xs: 3.5, sm: 5, md: 6 },
                borderRadius: { xs: "22px", md: "28px" },
                bgcolor: "#FFFFFF",
                border: "1px solid rgba(24, 24, 27, 0.08)",
                boxShadow: "0 18px 45px -12px rgba(24, 24, 27, 0.06)",
              }}
            >
              {/* Header inside Showcase Card */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  gap: 2,
                  pb: 3,
                  mb: 4,
                  borderBottom: "1px solid rgba(24, 24, 27, 0.08)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "14px",
                      bgcolor: "rgba(249, 115, 22, 0.1)",
                      color: "#EA580C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {currentStage.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.06em" }}>
                      STAGE {currentStage.num} &bull; {currentStage.timeframe.toUpperCase()}
                    </Typography>
                    <Typography variant="h3" sx={{ fontSize: { xs: "1.3rem", sm: "1.6rem" }, fontWeight: 600, color: "#18181B" }}>
                      {currentStage.name}
                    </Typography>
                  </Box>
                </Box>

                {/* Prev / Next Stage Controls */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, alignSelf: { xs: "stretch", sm: "auto" }, justifyContent: "space-between" }}>
                  <Button
                    size="small"
                    onClick={handlePrev}
                    startIcon={<ArrowBackIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      px: 2,
                      py: 0.8,
                      borderRadius: "9999px",
                      bgcolor: "#FAF8F5",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      color: "#18181B",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": { bgcolor: "rgba(24, 24, 27, 0.04)" },
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                    size="small"
                    onClick={handleNext}
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      px: 2.2,
                      py: 0.8,
                      borderRadius: "9999px",
                      bgcolor: "#EA580C",
                      color: "#FFFFFF",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#C2410C" },
                    }}
                  >
                    Next Stage
                  </Button>
                </Box>
              </Box>

              {/* Main 2-Column Content */}
              <Grid container spacing={{ xs: 4, lg: 5 }} sx={{ alignItems: "center" }}>
                {/* Left Column: Story, Milestones, and Safeguards */}
                <Grid size={{ xs: 12, lg: 7 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.45rem" },
                      fontWeight: 600,
                      color: "#18181B",
                      lineHeight: 1.35,
                      mb: 2,
                    }}
                  >
                    &ldquo;{currentStage.headline}&rdquo;
                  </Typography>

                  <Typography sx={{ fontSize: "0.95rem", color: "#52525B", lineHeight: 1.75, mb: 3.5 }}>
                    {currentStage.story}
                  </Typography>

                  {/* What Happens in This Stage */}
                  <Typography sx={{ fontSize: "0.78rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase", letterSpacing: "0.06em", mb: 2 }}>
                    WHAT HAPPENS DURING THIS STAGE:
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 4 }}>
                    {currentStage.whatHappens.map((item, i) => (
                      <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                        <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: "#EA580C", mt: 0.2, flexShrink: 0 }} />
                        <Box>
                          <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: "#18181B", mb: 0.3 }}>
                            {item.title}
                          </Typography>
                          <Typography sx={{ fontSize: "0.85rem", color: "#52525B", lineHeight: 1.5 }}>
                            {item.desc}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* Deliverable + Commitment Split Box */}
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 7 }}>
                      <Box
                        sx={{
                          p: 2.2,
                          borderRadius: "14px",
                          bgcolor: "#FAF8F5",
                          border: "1px solid rgba(24, 24, 27, 0.08)",
                          height: "100%",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                          <Inventory2OutlinedIcon sx={{ fontSize: 17, color: "#EA580C" }} />
                          <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase" }}>
                            What You Receive:
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "0.875rem", color: "#18181B", fontWeight: 500, lineHeight: 1.5 }}>
                          {currentStage.deliverable}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 5 }}>
                      <Box
                        sx={{
                          p: 2.2,
                          borderRadius: "14px",
                          bgcolor: "#FAF8F5",
                          border: "1px solid rgba(24, 24, 27, 0.08)",
                          height: "100%",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                          <AccessTimeRoundedIcon sx={{ fontSize: 17, color: "#71717A" }} />
                          <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                            Your Time:
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: "0.875rem", color: "#52525B", lineHeight: 1.5 }}>
                          {currentStage.timeCommitment}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Right Column: Stage Visual Card & Guaranteed Outcome */}
                <Grid size={{ xs: 12, lg: 5 }}>
                  <Box
                    sx={{
                      borderRadius: "20px",
                      overflow: "hidden",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      boxShadow: "0 10px 30px -8px rgba(24, 24, 27, 0.08)",
                    }}
                  >
                    {/* Visual Image Viewport */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 220, sm: 280, md: 320 },
                        bgcolor: "#18181B",
                      }}
                    >
                      <Image
                        src={currentStage.image}
                        alt={currentStage.imageAlt}
                        fill
                        sizes="(max-width: 1200px) 100vw, 500px"
                        style={{ objectFit: "cover", objectPosition: "center center" }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(24, 24, 27, 0.1) 0%, rgba(24, 24, 27, 0.55) 100%)",
                        }}
                      />
                      {/* Floating Stage Pill */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 14,
                          left: 14,
                          bgcolor: "rgba(255, 255, 255, 0.94)",
                          backdropFilter: "blur(10px)",
                          borderRadius: "9999px",
                          px: 1.8,
                          py: 0.5,
                          display: "flex",
                          alignItems: "center",
                          gap: 0.8,
                        }}
                      >
                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#EA580C" }} />
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#18181B" }}>
                          Stage {currentStage.num}: {currentStage.tabLabel}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Bottom Guaranteed Outcome Box */}
                    <Box sx={{ p: 3, bgcolor: "#FAF8F5", borderTop: "1px solid rgba(24, 24, 27, 0.06)" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.8 }}>
                        <ShieldOutlinedIcon sx={{ fontSize: 18, color: "#16A34A" }} />
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#166534", textTransform: "uppercase" }}>
                          Guaranteed Milestone Outcome:
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "0.9rem", color: "#18181B", fontWeight: 500, lineHeight: 1.55 }}>
                        {currentStage.outcome}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Reassurance Banner */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            p: { xs: 4, sm: 5 },
            borderRadius: { xs: "20px", md: "24px" },
            bgcolor: "#FFFFFF",
            border: "1px solid rgba(24, 24, 27, 0.08)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 820 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.25rem", md: "1.45rem" },
                fontWeight: 600,
                color: "#18181B",
                mb: 1,
              }}
            >
              Want to see how this 5-stage roadmap applies to your business?
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "#52525B", lineHeight: 1.65 }}>
              Book an initial 20-minute diagnostic session. We&apos;ll review your current software stack and map out
              your custom delivery milestones with zero sales pressure.
            </Typography>
          </Box>

          <Link href="/contact" style={{ textDecoration: "none", flexShrink: 0 }}>
            <Button
              variant="contained"
              size="medium"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: "#EA580C",
                color: "#FFFFFF",
                px: 3.5,
                py: 1.3,
                fontWeight: 600,
                fontSize: "0.875rem",
                borderRadius: "9999px",
                boxShadow: "none",
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  bgcolor: "#C2410C",
                  boxShadow: "0 6px 20px -4px rgba(234, 88, 12, 0.4)",
                },
              }}
            >
              Start Discovery Session
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
