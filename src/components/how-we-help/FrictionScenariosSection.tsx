"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button, Collapse } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Link from "next/link";
import { motion } from "framer-motion";

interface TransformationStory {
  id: string;
  number: string;
  category: string;
  headline: string;
  icon: React.ReactNode;
  quickShiftFrom: string;
  quickShiftTo: string;

  // The Old Way
  oldWayTitle: string;
  oldWayStory: string;
  oldWayPain: string;

  // The Aetibar Way
  newWayTitle: string;
  newWayStory: string;
  newWayGain: string;

  // Bottom Takeaway & Action
  bottomTakeaway: string;
  ctaText: string;
}

const stories: TransformationStory[] = [
  {
    id: "leads",
    number: "01",
    category: "CUSTOMER INTAKE",
    headline: "Every inquiry captured and organized. Never overlooked.",
    icon: <ChatBubbleOutlineRoundedIcon sx={{ fontSize: 24 }} />,
    quickShiftFrom: "Unread Inboxes",
    quickShiftTo: "Centralized Intake",

    oldWayTitle: "The Frustration Today",
    oldWayStory:
      "A potential customer reaches out on your website or sends a message. The notification lands in an individual inbox or personal phone. If that person is busy, in a meeting, or away, the inquiry sits unattended. By the time someone replies hours later, the prospect has often moved on to another provider.",
    oldWayPain: "Valuable inquiries slip through the cracks when communication depends on individual inboxes.",

    newWayTitle: "How Your Business Runs With Aetibar",
    newWayStory:
      "Inquiries from your website and digital channels flow directly into a central company hub. The customer receives an immediate confirmation acknowledging their request, while your team gets an organized notification with complete project requirements ready for follow-up.",
    newWayGain: "Organized inquiry intake, fast follow-up, and clear visibility across your team.",

    bottomTakeaway:
      "The Difference: Inquiries are captured in one central place so your team can respond consistently and professionally.",
    ctaText: "See How We Organize Inquiries",
  },
  {
    id: "quotes",
    number: "02",
    category: "SALES & ESTIMATION",
    headline: "Accurate project proposals prepared without spreadsheet chaos.",
    icon: <CalculateOutlinedIcon sx={{ fontSize: 24 }} />,
    quickShiftFrom: "Manual Spreadsheets",
    quickShiftTo: "Standardized Quoting",

    oldWayTitle: "The Frustration Today",
    oldWayStory:
      "A client requests a quote. Your team spends hours digging through older estimates, recalculating line items across spreadsheets, and manually formatting proposal documents. The delay slows down the sales cycle and risks pricing discrepancies.",
    oldWayPain: "Slow turnaround times and formula errors that create inconsistencies in project pricing.",

    newWayTitle: "How Your Business Runs With Aetibar",
    newWayStory:
      "Your team selects project deliverables in a custom estimation tool with predefined pricing logic and margin rules. The system calculates totals consistently and stages a formatted proposal ready for review and digital delivery.",
    newWayGain: "Faster quote preparation with consistent pricing rules and structured proposals.",

    bottomTakeaway:
      "The Difference: Consistent pricing rules eliminate guesswork and allow your team to deliver proposals promptly.",
    ctaText: "See How We Streamline Quoting",
  },
  {
    id: "sync",
    number: "03",
    category: "DATA & OPERATIONS",
    headline: "Reduce repetitive copy-pasting. Connect your tools into one workflow.",
    icon: <TableChartOutlinedIcon sx={{ fontSize: 24 }} />,
    quickShiftFrom: "Scattered Spreadsheets",
    quickShiftTo: "Connected Systems",

    oldWayTitle: "The Frustration Today",
    oldWayStory:
      "When an order or project starts, team members spend time manually re-entering client names, requirements, and project specifications across multiple spreadsheets, project boards, and accounting software. Re-typing the same data across multiple tools is tedious and invites transcription mistakes.",
    oldWayPain: "Valuable hours spent on manual data entry and fixing copy-paste errors across disconnected tools.",

    newWayTitle: "How Your Business Runs With Aetibar",
    newWayStory:
      "When a client submits an order or approves a proposal, relevant details sync directly across your operational tools. Project boards, databases, and accounting workflows receive the data automatically without manual re-entry.",
    newWayGain: "Significantly reduced manual data entry and consistent records across teams.",

    bottomTakeaway:
      "The Difference: Your team spends time on high-value client work instead of entering the same data into multiple tools.",
    ctaText: "See How We Connect Business Tools",
  },
  {
    id: "field",
    number: "04",
    category: "OPERATIONS & BILLING",
    headline: "Connect your frontline team, project tracking, and billing.",
    icon: <PhoneIphoneRoundedIcon sx={{ fontSize: 24 }} />,
    quickShiftFrom: "Delayed Status Updates",
    quickShiftTo: "Prompt Invoicing",

    oldWayTitle: "The Frustration Today",
    oldWayStory:
      "Frontline teams, field specialists, or project managers complete deliverables, but project status remains trapped in chat messages or handwritten notes. The office has to chase updates, and billing is delayed until paperwork is manually verified and entered into accounting.",
    oldWayPain: "Billing lag slows cash flow while office staff spend time chasing project completion status.",

    newWayTitle: "How Your Business Runs With Aetibar",
    newWayStory:
      "Team members update project milestones directly through a mobile-friendly web portal or app. Completion proofs, client sign-offs, and project notes are logged instantly. Once a milestone is verified, the accounting system prepares an invoice draft without delay.",
    newWayGain: "Timely billing, transparent milestone tracking, and clear completion records.",

    bottomTakeaway:
      "The Difference: Invoices can be generated promptly upon project completion, keeping cash flow steady.",
    ctaText: "See How We Connect Operations",
  },
];

export default function FrictionScenariosSection() {
  const [expandedId, setExpandedId] = useState<string>("leads");

  const toggleStory = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <Box
      component="section"
      id="business-transformations"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FAF8F5",
        position: "relative",
        borderTop: "1px solid rgba(24, 24, 27, 0.06)",
        borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header (Left-Aligned) */}
        <Box sx={{ maxWidth: 900, ml: 0, mr: "auto", textAlign: "left", mb: { xs: 7, md: 9 } }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.2,
                  py: 0.6,
                  borderRadius: "9999px",
                  bgcolor: "rgba(234, 88, 12, 0.08)",
                  border: "1px solid rgba(234, 88, 12, 0.25)",
                  mb: 2.5,
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#EA580C" }}
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
                  WHAT WE DO FOR YOUR BUSINESS
                </Typography>
              </Box>
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
                fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.15, md: 1.08 },
                letterSpacing: "-0.035em",
                textAlign: "left",
                mb: 2.5,
              }}
            >
              Four ways we make your business{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                run like clockwork.
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.75,
                maxWidth: 820,
                ml: 0,
                mr: "auto",
                textAlign: "left",
              }}
            >
              You don&apos;t just need a brochure website. You need your customer touchpoints and your daily
              operations to work together smoothly. Here is what happens when your business runs on connected systems.
            </Typography>
          </motion.div>
        </Box>

        {/* 4 Transformation Cards (Wide, Aligned, Pleasure to Read) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "100%",
          }}
        >
          {stories.map((story, idx) => {
            const isExpanded = expandedId === story.id;

            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Box
                  sx={{
                    borderRadius: { xs: "18px", md: "22px" },
                    bgcolor: "#FFFFFF",
                    border: isExpanded
                      ? "1.5px solid #EA580C"
                      : "1px solid rgba(24, 24, 27, 0.09)",
                    boxShadow: isExpanded
                      ? "0 20px 48px -10px rgba(234, 88, 12, 0.14), 0 0 0 1px rgba(234, 88, 12, 0.1)"
                      : "0 4px 18px rgba(24, 24, 27, 0.03)",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      borderColor: isExpanded ? "#EA580C" : "rgba(234, 88, 12, 0.35)",
                      boxShadow: "0 12px 32px -8px rgba(24, 24, 27, 0.08)",
                    },
                  }}
                >
                  {/* Clickable Card Header */}
                  <Box
                    onClick={() => toggleStory(story.id)}
                    sx={{
                      p: { xs: 2.5, sm: 3, md: 3.5 },
                      cursor: "pointer",
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "48px 1fr 40px",
                        md: "56px minmax(0, 1fr) 280px 44px",
                      },
                      alignItems: "center",
                      gap: { xs: 2, md: 3.5 },
                      bgcolor: isExpanded ? "rgba(249, 115, 22, 0.02)" : "transparent",
                      transition: "background-color 0.2s ease",
                      userSelect: "none",
                    }}
                  >
                    {/* Col 1: Icon Box */}
                    <Box
                      sx={{
                        width: { xs: 46, sm: 52 },
                        height: { xs: 46, sm: 52 },
                        borderRadius: "14px",
                        bgcolor: isExpanded ? "rgba(234, 88, 12, 0.12)" : "rgba(24, 24, 27, 0.04)",
                        color: isExpanded ? "#EA580C" : "#18181B",
                        border: isExpanded
                          ? "1px solid rgba(234, 88, 12, 0.25)"
                          : "1px solid rgba(24, 24, 27, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.25s ease",
                      }}
                    >
                      {story.icon}
                    </Box>

                    {/* Col 2: Number, Category & Big Friendly Title */}
                    <Box sx={{ minWidth: 0 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.2,
                          mb: 0.5,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            fontFamily: "monospace",
                            color: isExpanded ? "#EA580C" : "#71717A",
                            letterSpacing: "0.08em",
                          }}
                        >
                          TRANSFORMATION {story.number} &bull; {story.category}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.38rem" },
                          fontWeight: 700,
                          color: "#18181B",
                          letterSpacing: "-0.025em",
                          lineHeight: 1.25,
                        }}
                      >
                        {story.headline}
                      </Typography>

                      {/* Mobile Shift Tag */}
                      <Box sx={{ display: { xs: "block", md: "none" }, mt: 0.75 }}>
                        <Typography sx={{ fontSize: "0.825rem", fontWeight: 700, color: "#EA580C" }}>
                          {story.quickShiftFrom} &rarr; {story.quickShiftTo}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Col 3: Laser-Aligned Quick Shift Metric Box */}
                    <Box
                      sx={{
                        borderLeft: { md: "1px solid rgba(24, 24, 27, 0.08)" },
                        pl: { md: 3 },
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase", mb: 0.3 }}>
                        THE TRANSFORMATION:
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ fontSize: "0.85rem", color: "#EF4444", textDecoration: "line-through", fontWeight: 600 }}>
                          {story.quickShiftFrom}
                        </Typography>
                        <Typography sx={{ fontSize: "0.85rem", color: "#18181B", fontWeight: 700 }}>
                          &rarr;
                        </Typography>
                        <Typography sx={{ fontSize: "0.95rem", color: "#059669", fontWeight: 800 }}>
                          {story.quickShiftTo}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Col 4: Toggle Button */}
                    <Box
                      sx={{
                        width: { xs: 36, sm: 42 },
                        height: { xs: 36, sm: 42 },
                        borderRadius: "50%",
                        bgcolor: isExpanded ? "#EA580C" : "rgba(24, 24, 27, 0.05)",
                        color: isExpanded ? "#FFFFFF" : "#18181B",
                        border: isExpanded
                          ? "1px solid #EA580C"
                          : "1px solid rgba(24, 24, 27, 0.09)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                        flexShrink: 0,
                        justifySelf: "end",
                        "&:hover": {
                          bgcolor: isExpanded ? "#C2410C" : "rgba(234, 88, 12, 0.12)",
                          color: isExpanded ? "#FFFFFF" : "#EA580C",
                        },
                      }}
                    >
                      {isExpanded ? (
                        <RemoveRoundedIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                      ) : (
                        <AddRoundedIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                      )}
                    </Box>
                  </Box>

                  {/* Expandable Story Breakdown (Clean, Engaging, Effortless to Read) */}
                  <Collapse in={isExpanded} timeout="auto">
                    <Box
                      sx={{
                        p: { xs: 2.5, sm: 4, md: 5 },
                        borderTop: "1px solid rgba(24, 24, 27, 0.08)",
                        bgcolor: "#FFFFFF",
                      }}
                    >
                      {/* Side-by-Side Narrative Comparison */}
                      <Grid container spacing={3.5} sx={{ alignItems: "stretch", mb: 4 }}>
                        {/* LEFT COLUMN: The Old Way */}
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Box
                            sx={{
                              p: { xs: 3, md: 3.8 },
                              borderRadius: "18px",
                              bgcolor: "#FAF8F5",
                              border: "1px solid rgba(24, 24, 27, 0.08)",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}>
                                <Box
                                  sx={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(239, 68, 68, 0.12)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <CloseRoundedIcon sx={{ color: "#DC2626", fontSize: 16 }} />
                                </Box>
                                <Typography
                                  sx={{
                                    fontSize: "0.8rem",
                                    fontWeight: 800,
                                    color: "#71717A",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.06em",
                                  }}
                                >
                                  {story.oldWayTitle}
                                </Typography>
                              </Box>

                              <Typography
                                sx={{
                                  fontSize: { xs: "0.95rem", md: "1.025rem" },
                                  color: "#475569",
                                  lineHeight: 1.75,
                                  mb: 3,
                                }}
                              >
                                {story.oldWayStory}
                              </Typography>
                            </Box>

                            {/* Pain pill */}
                            <Box
                              sx={{
                                p: 1.8,
                                borderRadius: "12px",
                                bgcolor: "rgba(239, 68, 68, 0.05)",
                                border: "1px solid rgba(239, 68, 68, 0.15)",
                              }}
                            >
                              <Typography sx={{ fontSize: "0.85rem", color: "#DC2626", fontWeight: 600 }}>
                                <strong>The Pain:</strong> {story.oldWayPain}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>

                        {/* RIGHT COLUMN: The Aetibar Way */}
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Box
                            sx={{
                              p: { xs: 3, md: 3.8 },
                              borderRadius: "18px",
                              bgcolor: "#FFFBF8",
                              border: "1.5px solid rgba(234, 88, 12, 0.3)",
                              boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.06)",
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}>
                                <Box
                                  sx={{
                                    width: 26,
                                    height: 26,
                                    borderRadius: "50%",
                                    bgcolor: "rgba(234, 88, 12, 0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <CheckCircleRoundedIcon sx={{ color: "#EA580C", fontSize: 17 }} />
                                </Box>
                                <Typography
                                  sx={{
                                    fontSize: "0.8rem",
                                    fontWeight: 800,
                                    color: "#EA580C",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.06em",
                                  }}
                                >
                                  {story.newWayTitle}
                                </Typography>
                              </Box>

                              <Typography
                                sx={{
                                  fontSize: { xs: "0.95rem", md: "1.025rem" },
                                  color: "#18181B",
                                  lineHeight: 1.75,
                                  fontWeight: 500,
                                  mb: 3,
                                }}
                              >
                                {story.newWayStory}
                              </Typography>
                            </Box>

                            {/* Gain pill */}
                            <Box
                              sx={{
                                p: 1.8,
                                borderRadius: "12px",
                                bgcolor: "rgba(16, 185, 129, 0.08)",
                                border: "1px solid rgba(16, 185, 129, 0.22)",
                              }}
                            >
                              <Typography sx={{ fontSize: "0.85rem", color: "#047857", fontWeight: 600 }}>
                                <strong>The Gain:</strong> {story.newWayGain}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>

                      {/* Bottom Transformation Summary & Action Button */}
                      <Box
                        sx={{
                          pt: 3.5,
                          borderTop: "1px solid rgba(24, 24, 27, 0.08)",
                          display: "flex",
                          flexDirection: { xs: "column", md: "row" },
                          alignItems: { xs: "flex-start", md: "center" },
                          justifyContent: "space-between",
                          gap: 2.5,
                        }}
                      >
                        <Box sx={{ maxWidth: 840 }}>
                          <Typography
                            sx={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: "#18181B",
                              lineHeight: 1.6,
                            }}
                          >
                            {story.bottomTakeaway}
                          </Typography>
                        </Box>

                        <Link href="/contact" style={{ textDecoration: "none" }}>
                          <Button
                            variant="contained"
                            size="medium"
                            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                            sx={{
                              background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                              color: "#FFFFFF",
                              px: 3.5,
                              py: 1.2,
                              fontWeight: 700,
                              fontSize: "0.875rem",
                              borderRadius: "9999px",
                              boxShadow: "0 6px 20px rgba(234, 88, 12, 0.28)",
                              whiteSpace: "nowrap",
                              "&:hover": {
                                background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                                boxShadow: "0 8px 24px rgba(234, 88, 12, 0.38)",
                              },
                            }}
                          >
                            {story.ctaText}
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </Collapse>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
