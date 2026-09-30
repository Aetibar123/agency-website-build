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
    name: "Understanding Your Business, Goals & Customers",
    headline: "We learn how your business actually operates before suggesting any solution.",
    story:
      "Every great website, mobile app, or automation starts by listening. We look at how customer inquiries reach you, how your team manages daily orders, and where roadblocks slow you down. This ensures we build only what directly helps you win more clients and save time — never pushing unnecessary features.",
    whatHappens: [
      {
        title: "Listen to Your Business Needs",
        desc: "We discuss your current sales process, target customer types, and everyday operational challenges.",
      },
      {
        title: "Identify Time-Wasting Tasks",
        desc: "We spot repetitive manual busywork, lost inquiries, and disconnected tools that slow your team down.",
      },
      {
        title: "Define Clear Project Goals",
        desc: "We set realistic business objectives — like capturing more WhatsApp inquiries, ranking higher on Google, or speeding up order intake.",
      },
    ],
    deliverable: "Comprehensive Discovery Plan with mapped customer journeys, prioritized deliverables, and a fixed timeline.",
    timeCommitment: "1 to 2 focused discovery conversations at your convenience.",
    outcome: "A clear, shared understanding of what needs to be built and why before any development starts.",
    image: "/images/home/editorial-client-consultation.jpg",
    imageAlt: "Aetibar operational discovery session auditing business workflows",
    icon: <SearchOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "02",
    tabLabel: "Planning & Design",
    timeframe: "Stage 02",
    name: "Clear Roadmap, UI Layouts & Business Logic",
    headline: "You review and approve interactive visual layouts before any code is written.",
    story:
      "Before development begins, we design modern, intuitive screen layouts and plan the workflow logic. You can click through interactive mockups on your phone or computer, verify how customers will navigate your services, and make adjustments until you love the look and feel.",
    whatHappens: [
      {
        title: "Mobile-First Design & Layouts",
        desc: "Clean, intuitive UI layouts designed for effortless customer navigation and high conversions on smartphones and desktops.",
      },
      {
        title: "Customer Journey & Action Flows",
        desc: "Placing prominent WhatsApp buttons, quick inquiry forms, and easy checkout pathways so you never lose a buyer.",
      },
      {
        title: "Tool & System Connections",
        desc: "Mapping how new inquiries, customer data, and alerts will sync directly to your WhatsApp, email, or spreadsheets.",
      },
    ],
    deliverable: "Interactive Design Prototypes and detailed scope document approved by you before coding.",
    timeCommitment: "One collaborative review session to walk through layouts and approve the scope.",
    outcome: "Complete clarity on look, feel, user flow, and business logic before building begins.",
    image: "/images/home/hero-architecture.jpg",
    imageAlt: "Aetibar technical architecture blueprint and relational schema design",
    icon: <AccountTreeOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "03",
    tabLabel: "Building & Previews",
    timeframe: "Stage 03",
    name: "Staged Development with Regular Live Previews",
    headline: "You see the product take shape with regular working previews every two weeks.",
    story:
      "We don't believe in disappearing for months and surprising you at the end. We build your website, mobile app, or automation in clean milestones and share private, live preview links so you can test real features and guide progress as we build.",
    whatHappens: [
      {
        title: "Live Milestone Demos",
        desc: "Functional pages and features deployed to private staging links so you can test them on your own phone and computer.",
      },
      {
        title: "Fast, High-Performance Code",
        desc: "Built with modern frameworks ensuring lightning-fast load times, solid security, and top Google SEO ranking compatibility.",
      },
      {
        title: "Real Business Data Testing",
        desc: "We test pages with your actual services, product details, and real content so the experience feels 100% authentic.",
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
    name: "Rigorous Testing, Speed Audits & Safe Launch",
    headline: "We test thoroughly across all devices so day one runs with zero disruption.",
    story:
      "Switching to a new digital system should never disrupt your daily business operations. Before going live, we test all forms, WhatsApp links, payment gateways, and loading speeds across iPhones, Android devices, and laptops so you can launch with absolute confidence.",
    whatHappens: [
      {
        title: "Thorough Device & Speed Audits",
        desc: "Verifying mobile responsiveness, Google search compliance, SSL security, and sub-second load times.",
      },
      {
        title: "End-to-End Form & Lead Testing",
        desc: "Submitting live test inquiries to ensure team WhatsApp and email alerts trigger instantly every single time.",
      },
      {
        title: "Simple Team Video Guides",
        desc: "Short, easy-to-follow video walkthroughs showing you and your staff how to edit content, manage inquiries, and track leads.",
      },
    ],
    deliverable: "Tested Production System, validated forms and data, and complete team training guides.",
    timeCommitment: "Your team conducts normal business while we manage domain setup and live deployment.",
    outcome: "A smooth launch with tested workflows and confident team adoption.",
    image: "/images/home/editorial-operations-facility.jpg",
    imageAlt: "Safe cutover and operational team training",
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 20 }} />,
  },
  {
    num: "05",
    tabLabel: "Support & Growth",
    timeframe: "Stage 05",
    name: "Ongoing Maintenance, Upgrades & Direct Support",
    headline: "Direct communication with the team that designed and built your software.",
    story:
      "Launch day is the start of a long-term partnership. When you have questions, want to add new service pages, or need updates, you reach the exact engineers who built your product. We monitor system health, keep security tight, and help your digital presence expand.",
    whatHappens: [
      {
        title: "Direct Engineer Access",
        desc: "Communicate directly with the developers who built your platform — no confusing helpdesk layers or ticket queues.",
      },
      {
        title: "Security & Speed Monitoring",
        desc: "Proactive health checks, framework updates, daily backups, and security monitoring to prevent any downtime.",
      },
      {
        title: "Continuous Improvements & SEO",
        desc: "Periodic reviews to refine page content, optimize for new Google search queries, and add features as your business grows.",
      },
    ],
    deliverable: "Documented handover, defined support channels, and complete ownership of all code and credentials.",
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
                OUR 5-STAGE DEVELOPMENT METHODOLOGY
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
                fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.035em",
                lineHeight: { xs: 1.25, md: 1.18 },
                maxWidth: { xs: "100%", md: 1000, lg: 1100 },
                mx: "auto",
                textWrap: "balance",
                mb: 2.5,
              }}
            >
              From first conversation to live launch —{" "}
              <Box
                component="span"
                sx={{
                  display: "inline",
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                in 5 simple, transparent steps.
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.75,
                maxWidth: 780,
                mx: "auto",
              }}
            >
              A structured, collaborative process designed to keep you informed and confident. Here is our step-by-step roadmap to taking your project from concept to a dependable, high-converting digital asset.
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
