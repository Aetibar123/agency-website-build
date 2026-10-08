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
    tabLabel: "Understanding",
    timeframe: "Stage 01",
    name: "Understanding Your Business, Goals & Priorities",
    headline:
      "We understand what your business needs before recommending what to do.",
    story:
      "Every project starts with understanding your business, customers, current setup, and the problem you want to solve. Whether you need a website, mobile app, better search visibility, social media support, advertising, or workflow automation, we first identify what matters most and where our work can make a practical difference.",
    whatHappens: [
      {
        title: "Understand Your Business Needs",
        desc:
          "We discuss your business, customers, current digital presence, goals, and the challenges you want to address.",
      },
      {
        title: "Identify Priorities & Opportunities",
        desc:
          "We look for areas that can be improved, from customer enquiries and online visibility to marketing activities and repetitive business tasks.",
      },
      {
        title: "Define Clear Goals",
        desc:
          "We agree on practical objectives that match your business, budget, and priorities instead of adding work you do not need.",
      },
    ],
    deliverable:
      "A clear understanding of your requirements, priorities, and recommended next steps.",
    timeCommitment:
      "Focused conversations based on the scope and complexity of your requirements.",
    outcome:
      "A shared understanding of what you need, why you need it, and what should happen next.",
    image: "/images/home/editorial-client-consultation.jpg",
    imageAlt:
      "Aetibar discussing business goals, customer needs, and project requirements with a client",
    icon: <SearchOutlinedIcon sx={{ fontSize: 20 }} />,
  },

  {
    num: "02",
    tabLabel: "Planning",
    timeframe: "Stage 02",
    name: "A Clear Plan Built Around Your Business",
    headline:
      "We turn your requirements into a practical plan with clear priorities, scope, and pricing.",
    story:
      "Once we understand what you need, we decide how the work should be approached. This could mean planning a website or app, creating an SEO strategy, organizing social media content, setting up an advertising campaign, or mapping an automation workflow. You know what is included before implementation begins.",
    whatHappens: [
      {
        title: "Define the Scope",
        desc:
          "We outline the agreed work, deliverables, priorities, timeline, and what is included in the project or service.",
      },
      {
        title: "Choose the Right Approach",
        desc:
          "We recommend the tools, channels, and methods that make sense for your goals rather than adding unnecessary complexity.",
      },
      {
        title: "Set Clear Expectations",
        desc:
          "We discuss pricing, timelines, responsibilities, and important requirements so there are fewer surprises later.",
      },
    ],
    deliverable:
      "A clear project or service plan covering the agreed scope, priorities, timeline, and pricing.",
    timeCommitment:
      "A review of the proposed plan before the agreed work begins.",
    outcome:
      "Clear expectations about what we will do, when it will happen, and how the work will be delivered.",
    image: "/images/home/hero-architecture.jpg",
    imageAlt:
      "Aetibar planning a website, marketing, or business automation project around client requirements",
    icon: <AccountTreeOutlinedIcon sx={{ fontSize: 20 }} />,
  },

  {
    num: "03",
    tabLabel: "Implementation",
    timeframe: "Stage 03",
    name: "Putting the Plan Into Action",
    headline:
      "We implement the agreed work while keeping you informed along the way.",
    story:
      "This is where the planned work takes shape. We may develop your website or app, optimize your online presence, create and publish social media content, manage advertising campaigns, or set up business automation. The exact work depends on the service, but the approach stays the same: follow the agreed plan, share progress, and keep communication open.",
    whatHappens: [
      {
        title: "Implement the Agreed Work",
        desc:
          "We carry out the planned development, marketing, SEO, advertising, content, or automation work based on your requirements.",
      },
      {
        title: "Share Relevant Progress",
        desc:
          "You receive updates at appropriate stages so you can understand what has been completed and what is coming next.",
      },
      {
        title: "Review & Adjust",
        desc:
          "We discuss relevant feedback and make agreed changes as the work progresses.",
      },
    ],
    deliverable:
      "Progressive delivery of the agreed website, app, marketing activity, automation, or other project work.",
    timeCommitment:
      "Regular communication and reviews based on the type and scope of the work.",
    outcome:
      "Your planned solution or service is implemented with clear progress and opportunities for feedback.",
    image: "/images/home/hero-agency-showcase.jpg",
    imageAlt:
      "Aetibar implementing and reviewing a digital project with regular client feedback",
    icon: <CodeOutlinedIcon sx={{ fontSize: 20 }} />,
  },

  {
    num: "04",
    tabLabel: "Review & Delivery",
    timeframe: "Stage 04",
    name: "Review, Refine & Prepare for Delivery",
    headline:
      "We review the agreed work and make sure the important details are ready.",
    story:
      "Before the work is considered complete, we review the relevant parts of the project or service. For a website or app, this may include forms, customer actions, and important functionality. For SEO, advertising, or social media, it may involve checking campaigns, content, tracking, and agreed deliverables. For automation, we review the workflow and its expected actions.",
    whatHappens: [
      {
        title: "Review the Important Details",
        desc:
          "We check the parts of the work that matter to your specific project, service, or business workflow.",
      },
      {
        title: "Make Agreed Improvements",
        desc:
          "We address the relevant changes identified during the review so the agreed work is ready for delivery or launch.",
      },
      {
        title: "Prepare for the Next Stage",
        desc:
          "We make sure the required content, access, setup, documentation, or other agreed items are ready.",
      },
    ],
    deliverable:
      "Reviewed and refined work prepared for launch, publishing, handover, or ongoing management.",
    timeCommitment:
      "A final review based on the scope and type of service being delivered.",
    outcome:
      "A completed service or project that is ready for its intended use.",
    image: "/images/home/editorial-operations-facility.jpg",
    imageAlt:
      "Aetibar reviewing digital work and preparing a business project for delivery",
    icon: <RocketLaunchOutlinedIcon sx={{ fontSize: 20 }} />,
  },

  {
    num: "05",
    tabLabel: "Support & Growth",
    timeframe: "Stage 05",
    name: "Ongoing Support & Improvements",
    headline:
      "Your business needs can change, and your digital presence can grow with them.",
    story:
      "Our relationship does not have to end when the initial work is complete. Depending on your needs, we can continue supporting your website or app, managing SEO and social media, optimizing advertising campaigns, improving automation workflows, or helping with future updates and new requirements.",
    whatHappens: [
      {
        title: "Ongoing Support",
        desc:
          "Get help with agreed updates, improvements, maintenance, marketing activities, or other ongoing requirements.",
      },
      {
        title: "Review What Can Improve",
        desc:
          "We can review performance, customer feedback, search visibility, campaign activity, or business workflows to identify useful improvements.",
      },
      {
        title: "Adapt as Your Business Changes",
        desc:
          "As your services, customers, or priorities change, we can help update your digital presence and workflows accordingly.",
      },
    ],
    deliverable:
      "Ongoing support based on your requirements, with the relevant access, documentation, and handover provided for the completed work.",
    timeCommitment:
      "Flexible ongoing support depending on the service and level of assistance you need.",
    outcome:
      "Continued digital support that can adapt as your business and priorities evolve.",
    image: "/images/home/editorial-craft-operations.jpg",
    imageAlt:
      "Aetibar providing ongoing digital support and improvements for a business",
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
                OUR 5-STAGE PROCESS

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
             From the first conversation to completed delivery — {" "}
              <Box
                component="span"
                sx={{
                  display: "inline",
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
               through 5 simple, transparent steps.

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
            A clear, collaborative process designed to keep you informed and involved at every stage—from understanding your needs and planning the right approach to delivering the agreed work and providing ongoing support.

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
                      PROCESS {currentStage.num} &bull; {currentStage.timeframe.toUpperCase()}
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
                    Next Process
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
                   WHAT HAPPENS AT THIS STAGE:

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
                           WHAT YOU RECEIVE:

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
                           YOUR INVOLVEMENT:

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
                         EXPECTED OUTCOME:

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
             Want to see how our 5-step process can work for your business?

            </Typography>
            <Typography sx={{ fontSize: "0.95rem", color: "#52525B", lineHeight: 1.65 }}>
            Book an initial 20-minute consultation. We’ll understand your business needs, discuss your current setup, and suggest practical next steps—with no sales pressure.

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
            Start a Conversation

            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
