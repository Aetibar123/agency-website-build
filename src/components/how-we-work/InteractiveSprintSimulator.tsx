"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectArchetype {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  baseWeeks: number;
  icon: React.ReactNode;
  team: string;
  stages: { period: string; title: string; output: string }[];
  keyBenefit: string;
  expectedRoi: string;
  hoursSaved: string;
}

const archetypes: ProjectArchetype[] = [
  {
    id: "lead-system",

    name: "Customer & Lead Growth",
    badge: "Typical Scope: 2–3 Weeks",

    tagline:
      "A focused setup to help your business capture enquiries, organize customer information, and respond to potential customers more efficiently.",

    baseWeeks: 3,

    icon: <BoltRoundedIcon sx={{ fontSize: 22 }} />,

    team: "Project Team",

    stages: [
      {
        period: "Stage 1",
        title: "Business & Customer Review",
        output:
          "Clear understanding of your enquiry sources, customer journey, and follow-up process",
      },
      {
        period: "Stage 2",
        title: "Setup & Implementation",
        output:
          "Website, forms, marketing, or automation workflows set up around your requirements",
      },
      {
        period: "Stage 3",
        title: "Review & Launch",
        output:
          "Reviewed customer journey with the agreed tracking, notifications, and follow-up processes in place",
      },
    ],

    keyBenefit:
      "Brings your customer enquiries and follow-up activities into a more organized process.",

    expectedRoi:
      "Makes it easier to capture, track, and respond to enquiries without relying on scattered messages or manual follow-ups.",

    hoursSaved: "More organized enquiry handling",
  },

  {
    id: "internal-portal",

    name: "Business Process & Operations",
    badge: "Typical Scope: 4–5 Weeks",

    tagline:
      "A customized digital setup that helps your team manage everyday processes, customer information, tasks, and internal operations more efficiently.",

    baseWeeks: 5,

    icon: <BuildCircleOutlinedIcon sx={{ fontSize: 22 }} />,

    team: "Project Team",

    stages: [
      {
        period: "Stage 1",
        title: "Workflow & Requirements Review",
        output:
          "Clear understanding of how your team currently manages customers, tasks, and daily operations",
      },
      {
        period: "Stage 2",
        title: "Solution Planning & Setup",
        output:
          "Defined workflows, access requirements, tools, and agreed project scope",
      },
      {
        period: "Stage 3",
        title: "Implementation & Review",
        output:
          "Working digital system or workflow reviewed around your actual business processes",
      },
      {
        period: "Stage 4",
        title: "Delivery & Team Handover",
        output:
          "Completed setup with relevant access, guidance, and agreed handover",
      },
    ],

    keyBenefit:
      "Turns manual or disconnected business processes into a more organized digital workflow.",

    expectedRoi:
      "Helps teams spend less time managing scattered information and more time handling their actual work.",

    hoursSaved: "More organized daily operations",
  },

  {
    id: "ops-core",

    name: "Complete Digital Business Setup",
    badge: "Typical Scope: 6–7 Weeks",

    tagline:
      "A coordinated digital setup combining the website, customer journey, marketing, business workflows, and other services your business needs.",

    baseWeeks: 7,

    icon: <CalendarTodayOutlinedIcon sx={{ fontSize: 22 }} />,

    team: "Project Team",

    stages: [
      {
        period: "Stage 1",
        title: "Business & Digital Presence Review",
        output:
          "Clear view of your current website, marketing, customer journey, and business processes",
      },
      {
        period: "Stage 2",
        title: "Strategy & Project Planning",
        output:
          "Prioritized plan covering the services, activities, timelines, and responsibilities involved",
      },
      {
        period: "Stage 3",
        title: "Implementation Across Key Areas",
        output:
          "Agreed website, marketing, automation, or other digital work implemented around your priorities",
      },
      {
        period: "Stage 4",
        title: "Review, Delivery & Handover",
        output:
          "Reviewed work with the relevant access, setup, reporting, and handover prepared",
      },
    ],

    keyBenefit:
      "Brings multiple digital needs together instead of managing separate providers for every part of your online presence.",

    expectedRoi:
      "Creates a more connected digital setup where your website, marketing activities, customer communication, and business workflows can support each other.",

    hoursSaved: "Connected digital workflows",
  },

  {
    id: "api-bridge",

    name: "AI Automation & Software Integration",
    badge: "Typical Scope: 1–2 Weeks",

    tagline:
      "Practical automation that connects the tools you already use and reduces repetitive work across everyday business processes.",

    baseWeeks: 2,

    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 22 }} />,

    team: "Automation Team",

    stages: [
      {
        period: "Stage 1",
        title: "Workflow Review",
        output:
          "Clear understanding of the repetitive tasks, tools, and information involved",
      },
      {
        period: "Stage 2",
        title: "Automation Setup & Review",
        output:
          "Connected workflow that moves information or completes agreed tasks with appropriate checks",
      },
    ],

    keyBenefit:
      "Connects separate business tools and reduces repetitive manual work.",

    expectedRoi:
      "Helps reduce repeated data entry, manual follow-ups, and the need to move information between different tools.",

    hoursSaved: "Less repetitive manual work",
  },
];

const teamScales = [
  {
    id: "compact",
    label: "1–10 Staff",
    desc: "Small Business / Compact Team",
    multiplier: 1,
  },
  {
    id: "growing",
    label: "10–50 Staff",
    desc: "Growing Business / Multiple Roles",
    multiplier: 1.15,
  },
  {
    id: "scale",
    label: "50+ Staff",
    desc: "Larger Business / Multiple Locations",
    multiplier: 1.3,
  },
];

const sprintPaces = [
  {
    id: "standard",
    label: "Standard Pace",
    factor: 1,
  },
  {
    id: "accelerated",
    label: "Priority Delivery",
    factor: 0.85,
  },
];

export default function InteractiveSprintSimulator() {
  const [selectedArchetypeId, setSelectedArchetypeId] = useState<string>("internal-portal");
  const [selectedScaleId, setSelectedScaleId] = useState<string>("growing");
  const [selectedPaceId, setSelectedPaceId] = useState<string>("standard");

  const currentArchetype = archetypes.find((a) => a.id === selectedArchetypeId) || archetypes[0];
  const currentScale = teamScales.find((s) => s.id === selectedScaleId) || teamScales[0];
  const currentPace = sprintPaces.find((p) => p.id === selectedPaceId) || sprintPaces[0];

  const calculatedWeeks = Math.max(
    2,
    Math.round(currentArchetype.baseWeeks * currentScale.multiplier * currentPace.factor)
  );

  return (
    <Box
      component="section"
      id="sprint-simulator"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FFFFFF",
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
              TYPICAL PROJECT OPTIONS • ESTIMATOR

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
                lineHeight: { xs: 1.18, md: 1.2 },
                textWrap: "balance",
                maxWidth: { xs: "100%", md: 980, lg: 1100 },
                mx: "auto",
                mb: 2.5,
              }}
            >
             Explore a Typical Project {" "}
              <Box
                component="span"
                sx={{
                  display: "inline",
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Explore a Typical Project Path & Timeline
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
              Project timelines depend on the scope, services involved, business requirements, and feedback. These examples give you a general idea of how different types of projects can be planned and delivered.

            </Typography>
          </motion.div>
        </Box>

        {/* Step 1: 4 System Choices in a Clean Row */}
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#71717A",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              textAlign: "center",
              mb: 2.5,
            }}
          >
          1. EXPLORE PROJECT OPTIONS

          </Typography>

          <Grid container spacing={{ xs: 2, md: 2.5 }}>
            {archetypes.map((arch) => {
              const isSelected = selectedArchetypeId === arch.id;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={arch.id}>
                  <Box
                    onClick={() => setSelectedArchetypeId(arch.id)}
                    sx={{
                      p: { xs: 2.5, sm: 3 },
                      borderRadius: "18px",
                      cursor: "pointer",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      bgcolor: isSelected ? "#FFFFFF" : "#FAF8F5",
                      border: "2px solid",
                      borderColor: isSelected ? "#EA580C" : "rgba(24, 24, 27, 0.08)",
                      boxShadow: isSelected ? "0 12px 28px -8px rgba(234, 88, 12, 0.22)" : "none",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        bgcolor: "#FFFFFF",
                        borderColor: isSelected ? "#EA580C" : "rgba(234, 88, 12, 0.4)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Box>
                      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1.8 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "10px",
                            bgcolor: isSelected ? "#EA580C" : "rgba(249, 115, 22, 0.1)",
                            color: isSelected ? "#FFFFFF" : "#EA580C",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {arch.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            color: isSelected ? "#EA580C" : "#71717A",
                          }}
                        >
                          {arch.badge}
                        </Typography>
                      </Box>

                      <Typography sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#18181B", mb: 0.8 }}>
                        {arch.name}
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem", color: "#52525B", lineHeight: 1.55 }}>
                        {arch.tagline}
                      </Typography>
                    </Box>

                    {isSelected && (
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mt: 2 }}>
                        <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#EA580C" }} />
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C" }}>
                          Selected
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Step 2: Simplified Parameters (Team Size & Speed) */}
        <Box
          sx={{
            p: { xs: 2.5, sm: 3 },
            borderRadius: "18px",
            bgcolor: "#FAF8F5",
            border: "1px solid rgba(24, 24, 27, 0.08)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
            mb: { xs: 5, md: 7 },
          }}
        >
          {/* Organization Scale */}
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { sm: "center" }, gap: 1.5, width: { xs: "100%", md: "auto" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
              <GroupOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
              <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, color: "#18181B", textTransform: "uppercase" }}>
               Your Business Size:
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
              {teamScales.map((scale) => {
                const isSelected = selectedScaleId === scale.id;
                return (
                  <Button
                    key={scale.id}
                    size="small"
                    onClick={() => setSelectedScaleId(scale.id)}
                    sx={{
                      px: 2,
                      py: 0.7,
                      borderRadius: "9999px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "none",
                      bgcolor: isSelected ? "#18181B" : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : "#52525B",
                      border: "1px solid",
                      borderColor: isSelected ? "#18181B" : "rgba(24, 24, 27, 0.1)",
                      "&:hover": {
                        bgcolor: isSelected ? "#18181B" : "rgba(24, 24, 27, 0.04)",
                      },
                    }}
                  >
                    {scale.label}
                  </Button>
                );
              })}
            </Box>
          </Box>

          {/* Delivery Speed */}
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { sm: "center" }, gap: 1.5, width: { xs: "100%", md: "auto" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
              <SpeedRoundedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
              <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, color: "#18181B", textTransform: "uppercase" }}>
                Preferred Timeline:
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap" }}>
              {sprintPaces.map((pace) => {
                const isSelected = selectedPaceId === pace.id;
                return (
                  <Button
                    key={pace.id}
                    size="small"
                    onClick={() => setSelectedPaceId(pace.id)}
                    sx={{
                      px: 2,
                      py: 0.7,
                      borderRadius: "9999px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "none",
                      bgcolor: isSelected ? "#EA580C" : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : "#52525B",
                      border: "1px solid",
                      borderColor: isSelected ? "#EA580C" : "rgba(24, 24, 27, 0.1)",
                      "&:hover": {
                        bgcolor: isSelected ? "#C2410C" : "rgba(24, 24, 27, 0.04)",
                      },
                    }}
                  >
                    {pace.label}
                  </Button>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* Step 3: Simple & Clear Results Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedArchetypeId}-${selectedScaleId}-${selectedPaceId}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Box
              sx={{
                p: { xs: 3.5, sm: 5, md: 6 },
                borderRadius: { xs: "22px", md: "28px" },
                bgcolor: "#FAF8F5",
                border: "1.5px solid rgba(234, 88, 12, 0.3)",
                boxShadow: "0 18px 45px -12px rgba(234, 88, 12, 0.12)",
              }}
            >
              {/* Top Result Banner */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  justifyContent: "space-between",
                  gap: 3,
                  pb: 3.5,
                  mb: 4,
                  borderBottom: "1px solid rgba(24, 24, 27, 0.08)",
                }}
              >
                {/* Projected Weeks */}
                <Box>
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.06em", mb: 0.5 }}>
                    ESTIMATED PROJECT TIMELINE:

                  </Typography>
                  <Box sx={{ display: "baseline", alignItems: "baseline", gap: 1.5 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "2.4rem", sm: "3.2rem" },
                        fontWeight: 700,
                        color: "#18181B",
                        lineHeight: 1,
                        fontFamily: "monospace",
                      }}
                    >
                      {calculatedWeeks} Weeks
                    </Typography>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, color: "#16A34A" }}>
                     • Planning Estimate Only

                    </Typography>
                  </Box>
                </Box>

                {/* 3 Quick Benefit Chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                      Primary Benefit:

                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#15803D" }}>
                      {currentArchetype.hoursSaved}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                    Project Support:

                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B" }}>
                      {currentArchetype.team}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: "14px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                      Your Digital Assets:

                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#EA580C" }}>
                      Agreed in Writing

                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Plain-English Business Advantage Box */}
              <Box
                sx={{
                  p: 2.8,
                  borderRadius: "16px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(24, 24, 27, 0.08)",
                  mb: 4,
                }}
              >
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#EA580C", textTransform: "uppercase", mb: 0.6 }}>
                  WHY IT MATTERS FOR YOUR BUSINESS:

                </Typography>
                <Typography sx={{ fontSize: "1.05rem", fontWeight: 600, color: "#18181B", mb: 0.8, lineHeight: 1.5 }}>
                  {currentArchetype.keyBenefit}
                </Typography>
                <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.6 }}>
                  <strong>THE KEY TAKEAWAY:</strong> {currentArchetype.expectedRoi}
                </Typography>
              </Box>

              {/* What Happens Week by Week */}
              <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#18181B", textTransform: "uppercase", letterSpacing: "0.06em", mb: 2 }}>
               WHAT HAPPENS AT EACH STAGE:

              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8, mb: 4.5 }}>
                {currentArchetype.stages.map((stg, sIdx) => (
                  <Box
                    key={sIdx}
                    sx={{
                      p: 2.4,
                      borderRadius: "16px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(24, 24, 27, 0.08)",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "flex-start", sm: "center" },
                      justifyContent: "space-between",
                      gap: 2,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "#EA580C",
                        boxShadow: "0 6px 18px -4px rgba(234, 88, 12, 0.1)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.8 }}>
                      <Box
                        sx={{
                          px: 1.6,
                          py: 0.6,
                          borderRadius: "8px",
                          bgcolor: "rgba(249, 115, 22, 0.1)",
                          color: "#EA580C",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          fontFamily: "monospace",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {stg.period}
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: "0.95rem", fontWeight: 600, color: "#18181B", mb: 0.3 }}>
                          {stg.title}
                        </Typography>
                        <Typography sx={{ fontSize: "0.85rem", color: "#52525B" }}>
                          WHAT YOU RECEIVE: <strong>{stg.output}</strong>
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, alignSelf: { xs: "flex-end", sm: "center" } }}>
                      <CheckCircleRoundedIcon sx={{ fontSize: 18, color: "#16A34A" }} />
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 600, color: "#166534" }}>
                        REVIEWED PROGRESS

                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Bottom Action Strip */}
              <Box
                sx={{
                  pt: 3,
                  borderTop: "1px solid rgba(24, 24, 27, 0.08)",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "flex-start", sm: "center" },
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "0.95rem", fontWeight: 600, color: "#18181B" }}>
                   Want to discuss a realistic timeline for your project?

                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "#71717A" }}>
                    Tell us what your business needs. Once we understand your requirements, we’ll provide a clear scope, expected deliverables, and realistic timeline.

                  </Typography>
                </Box>

                <Link href="/contact" style={{ textDecoration: "none", flexShrink: 0 }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      bgcolor: "#EA580C",
                      color: "#FFFFFF",
                      px: 3.2,
                      py: 1.2,
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      borderRadius: "9999px",
                      textTransform: "none",
                      boxShadow: "none",
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
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
}
