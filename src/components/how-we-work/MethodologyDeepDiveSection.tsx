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
    tabLabel: "Discovery Audit",
    timeframe: "Week 1",
    name: "Operational Shadowing & Friction Audit",
    headline: "We learn how your business actually runs before writing a single line of code.",
    story:
      "Most software projects fail because developers start coding before understanding how your team actually works. In week one, we shadow your daily workflow, see how customer messages arrive on WhatsApp and email, and map where manual copy-pasting slows your staff down.",
    whatHappens: [
      {
        title: "Workflow Shadowing",
        desc: "We observe your team's real daily tasks to understand where manual bottlenecks and delays happen.",
      },
      {
        title: "Intake & Message Mapping",
        desc: "We trace how inquiries flow across your website, WhatsApp, and email to ensure no customer inquiry is ever lost.",
      },
      {
        title: "Friction Tax Calculation",
        desc: "We quantify exactly how many hours your staff loses each week to repetitive copy-pasting and spreadsheet maintenance.",
      },
    ],
    deliverable: "Complete Workflow Map & Bottleneck Report detailing every manual friction point and its automated fix.",
    timeCommitment: "Two 45-minute conversations with you and your key team member.",
    outcome: "Zero guesswork. You see the entire operational plan clearly before any code is written.",
    image: "/images/home/editorial-client-consultation.jpg",
    imageAlt: "Aetibar operational discovery session auditing business workflows",
    icon: <SearchOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "02",
    tabLabel: "The Blueprint",
    timeframe: "Weeks 2–3",
    name: "System Architecture & Interactive Wireframes",
    headline: "We design the complete system and interactive wireframes for your approval.",
    story:
      "Before building, we create interactive clickable wireframes and map the database architecture. You get to click through the screens, see how your team will use the software, and verify that every feature matches your exact business rules.",
    whatHappens: [
      {
        title: "Clickable Screen Wireframes",
        desc: "Interactive prototypes showing every screen your customers and staff will interact with.",
      },
      {
        title: "Database & Webhook Design",
        desc: "Engineering a secure PostgreSQL database and fail-safe webhook pipelines that connect your tools.",
      },
      {
        title: "Role-Based Team Permissions",
        desc: "Defining clear access rules so sales, operations, and management each see only what they need.",
      },
    ],
    deliverable: "Clickable Prototypes & Technical Blueprint signed off by you with zero architectural ambiguity.",
    timeCommitment: "One 45-minute prototype review call to share your feedback and approve the design.",
    outcome: "You approve the exact look, feel, and business logic before sprint engineering begins.",
    image: "/images/home/hero-architecture.jpg",
    imageAlt: "Aetibar technical architecture blueprint and relational schema design",
    icon: <AccountTreeOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "03",
    tabLabel: "Working Sprints",
    timeframe: "Weeks 4–6",
    name: "Bi-Weekly Working Sprints & Staging Previews",
    headline: "You test real working software every 14 days on a private staging link.",
    story:
      "We never disappear into a dark room for months. Every two weeks, you receive a private, password-protected link where you and your team can test working software with your own real business data. You see continuous progress and give feedback at every milestone.",
    whatHappens: [
      {
        title: "14-Day Working Releases",
        desc: "Functional software deployed to private staging every 2 weeks so you watch progress in real time.",
      },
      {
        title: "Sub-Second Speed Engineering",
        desc: "Engineered on modern Next.js so pages open instantaneously on mobile phones, tablets, and desktops.",
      },
      {
        title: "Real Business Data Testing",
        desc: "We test with your actual service categories and quotes so the software feels familiar from day one.",
      },
    ],
    deliverable: "Live Working Staging Environments updated every 14 days for your team to test and verify.",
    timeCommitment: "A 15-minute review of the working preview every two weeks at your convenience.",
    outcome: "Zero surprises. You verify working features at every step of development.",
    image: "/images/home/hero-agency-showcase.jpg",
    imageAlt: "Live working Next.js software staging preview",
    icon: <CodeOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "04",
    tabLabel: "Safe Cutover",
    timeframe: "Week 7",
    name: "Zero-Disruption Migration & Team Training",
    headline: "We run the old and new systems in parallel so your business never misses a beat.",
    story:
      "Switching software should never cause panic or business downtime. We run your existing tools and the new platform side-by-side for 7 days. Your team receives short, friendly video tutorials, and we verify that 100% of your historical customer records are safely imported.",
    whatHappens: [
      {
        title: "Dual-Run Parallel Execution",
        desc: "Existing tools and the new platform run side-by-side for 7 days with zero operational risk.",
      },
      {
        title: "100% Data Migration Audit",
        desc: "Automated scripts verify that every past customer, quote, and invoice is imported with zero lost records.",
      },
      {
        title: "3-Minute Staff Video Guides",
        desc: "Custom, easy-to-follow Loom video tutorials showing each team member their exact daily steps.",
      },
    ],
    deliverable: "100% Verified Data Migration Audit & Custom Staff Video Training Library.",
    timeCommitment: "Normal business as usual while we manage the background cutover.",
    outcome: "Zero downtime, zero lost inquiries, and total staff confidence on day one.",
    image: "/images/home/editorial-operations-facility.jpg",
    imageAlt: "Safe dual-run cutover and operational team training",
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "05",
    tabLabel: "Ongoing Support",
    timeframe: "Ongoing",
    name: "Dedicated Architect Line & System Evolution",
    headline: "Direct Slack or WhatsApp line to the engineers who built your platform.",
    story:
      "Launch day is the start of our partnership, not the end. We monitor system speed, error alerts, and database backups 24/7. When you want to add a new service or expand your team, the senior engineers who built your system are ready to evolve it.",
    whatHappens: [
      {
        title: "Direct Architect Access",
        desc: "A direct WhatsApp or Slack line with the engineers who designed your system — no junior helpdesks.",
      },
      {
        title: "24/7 Automated Health Checks",
        desc: "Continuous automated monitoring of webhook connections, server speeds, and database uptime.",
      },
      {
        title: "Proactive Workflow Upgrades",
        desc: "Quarterly reviews analyzing your operations to find new ways to shave minutes off daily tasks.",
      },
    ],
    deliverable: "Live Performance Dashboard, Guaranteed Response SLA, and Permanent Code Ownership.",
    timeCommitment: "Zero overhead. Peace of mind knowing your core engine is actively monitored.",
    outcome: "A permanent business asset that scales effortlessly as your revenue grows.",
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
                HOW WE DELIVER &bull; 5 TRANSPARENT STAGES
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
              From first audit to live launch{" "}
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
              No disappearing developers or mysterious black boxes. Here is the exact, step-by-step
              process we follow to take your operations from manual chaos to a calm, automated system.
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
