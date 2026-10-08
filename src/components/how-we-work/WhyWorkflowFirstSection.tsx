"use client";
import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { motion } from "framer-motion";

interface DisciplineCard {
  number: string;
  category: string;
  title: string;
  icon: React.ReactNode;
  riskTitle: string;
  riskDescription: string;
  solutionBadge: string;
  solutionTitle: string;
  solutionDescription: string;
  keyTakeaway: string;
}


const disciplineCards: DisciplineCard[] = [
  {
    number: "01",
    category: "PROJECT VISIBILITY",
    title: "Know What’s Happening Throughout the Project",
    icon: <VisibilityOutlinedIcon sx={{ fontSize: 22 }} />,
    riskTitle: "The Common Problem",
    riskDescription:
      "It can be difficult to know what is happening after a project starts, especially when updates are limited or decisions are made without your input.",
    solutionBadge: "THE AETIBAR WAY",
    solutionTitle: "Regular Updates & Clear Progress",
    solutionDescription:
      "We keep you informed at relevant stages, share progress, discuss important decisions, and give you opportunities to review the work and provide feedback.",
    keyTakeaway:
      "Stay informed, give feedback, and know how your project is progressing.",
  },

  {
    number: "02",
    category: "QUALITY & DELIVERY",
    title: "Review the Work Before It’s Completed",
    icon: <ShieldOutlinedIcon sx={{ fontSize: 22 }} />,
    riskTitle: "The Common Problem",
    riskDescription:
      "Small issues can be overlooked when work is rushed or there is no proper review before a website, campaign, automation, or other service is delivered.",
    solutionBadge: "THE AETIBAR WAY",
    solutionTitle: "Review, Refine & Prepare for Delivery",
    solutionDescription:
      "We review the agreed work, check the important details, make the required changes, and ensure the service or project is ready for launch, publishing, or ongoing use.",
    keyTakeaway:
      "Important details are reviewed before the agreed work is completed.",
  },

  {
    number: "03",
    category: "CLEAR OWNERSHIP",
    title: "Keep Control of Your Digital Assets",
    icon: <KeyOutlinedIcon sx={{ fontSize: 22 }} />,
    riskTitle: "The Common Problem",
    riskDescription:
      "Businesses can sometimes lose track of important accounts, files, website access, or other digital assets when everything is managed by an outside provider.",
    solutionBadge: "THE AETIBAR WAY",
    solutionTitle: "Clear Access & Proper Handover",
    solutionDescription:
      "Where applicable, we provide the agreed website, advertising, social media, analytics, project, and other account access so you can maintain control of the digital assets connected to your business.",
    keyTakeaway:
      "Keep access to the digital accounts and assets that belong to your business.",
  },
];


export default function WhyWorkflowFirstSection() {
  const handleScrollToLifecycle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("lifecycle-engine");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="section"
      id="workflow-discipline"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FFFFFF",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header (Center-Aligned, Strictly 2 Lines) */}
        <Box sx={{ maxWidth: { xs: "100%", md: 1050, lg: 1180 }, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                 THE AETIBAR ADVANTAGE • BUILT ON TRUST

                </Typography>
              </Box>
            </Box>
          </motion.div>

          {/* Heading: Strictly 2 lines (Center-Aligned) */}
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
                lineHeight: { xs: 1.25, md: 1.18 },
                letterSpacing: "-0.035em",
                textAlign: "center",
                maxWidth: { xs: "100%", md: 1000, lg: 1100 },
                mx: "auto",
                textWrap: "balance",
                mb: 2.5,
              }}
            >
             Why Digital Projects Often Go Off Track — {" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                and how our process helps keep your project on track.

              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                color: "#52525B",
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: 860,
                mx: "auto",
                textAlign: "center",
              }}
            >
             Digital projects can go off track when requirements are unclear, communication is limited, or work begins without a clear plan. Our process starts with understanding your business, defining what needs to be done, and keeping you informed throughout the work—so you can make decisions, share feedback, and stay in control at every stage.

            </Typography>
          </motion.div>
        </Box>

        {/* 3 High-Impact Safeguard Cards (Clean, Direct, Easy to Understand) */}
        <Grid container spacing={{ xs: 3, md: 3.5 }} sx={{ alignItems: "stretch", mb: { xs: 6, md: 8 } }}>
          {disciplineCards.map((card, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={card.number}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 3.5, sm: 4.5 },
                    borderRadius: { xs: "20px", md: "24px" },
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(24, 24, 27, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(234, 88, 12, 0.4)",
                      boxShadow: "0 18px 36px -12px rgba(234, 88, 12, 0.12)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box>
                    {/* Header: Number, Category & Icon */}
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2.5 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: "10px",
                            bgcolor: "rgba(249, 115, 22, 0.1)",
                            color: "#EA580C",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {card.icon}
                        </Box>
                        <Typography sx={{ fontSize: "0.75rem", fontWeight: 800, color: "#EA580C", letterSpacing: "0.06em" }}>
                          {card.number} &bull; {card.category}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Card Title */}
                    <Typography sx={{ fontSize: "1.35rem", fontWeight: 700, color: "#18181B", lineHeight: 1.3, mb: 3 }}>
                      {card.title}
                    </Typography>

                    {/* Section A: The Common Trap (What Goes Wrong) */}
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: "14px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid rgba(239, 68, 68, 0.2)",
                        mb: 2.5,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <CloseRoundedIcon sx={{ fontSize: 16, color: "#DC2626" }} />
                        <Typography sx={{ fontSize: "0.725rem", fontWeight: 800, color: "#DC2626", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {card.riskTitle}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "0.85rem", color: "#52525B", lineHeight: 1.6 }}>
                        {card.riskDescription}
                      </Typography>
                    </Box>

                    {/* Section B: The Aetibar Discipline (How We Solve It) */}
                    <Box
                      sx={{
                        p: 2.5,
                        borderRadius: "14px",
                        bgcolor: "rgba(249, 115, 22, 0.05)",
                        border: "1px solid rgba(234, 88, 12, 0.3)",
                        mb: 3,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                        <CheckRoundedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                        <Typography sx={{ fontSize: "0.725rem", fontWeight: 800, color: "#EA580C", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {card.solutionBadge}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B", mb: 0.8 }}>
                        {card.solutionTitle}
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem", color: "#3F3F46", lineHeight: 1.6 }}>
                        {card.solutionDescription}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Section C: Key Takeaway / Client Guarantee */}
                  <Box
                    sx={{
                      p: 1.8,
                      borderRadius: "12px",
                      bgcolor: "rgba(22, 163, 74, 0.08)",
                      border: "1px solid rgba(22, 163, 74, 0.25)",
                    }}
                  >
                    <Typography sx={{ fontSize: "0.825rem", color: "#15803D", fontWeight: 600, lineHeight: 1.45 }}>
                      {card.keyTakeaway}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Banner Connecting to the 5-Stage Engineering Lifecycle */}
        <Box
          sx={{
            p: { xs: 3.5, sm: 4.5 },
            borderRadius: { xs: "20px", md: "24px" },
            bgcolor: "#FAF8F5",
            border: "1px solid rgba(24, 24, 27, 0.08)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box sx={{ maxWidth: 780 }}>
            <Typography sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#18181B", mb: 0.5 }}>
              Ready to see how our process works from start to finish?

            </Typography>
            <Typography sx={{ fontSize: "0.9rem", color: "#52525B", lineHeight: 1.6 }}>
              See how we move from understanding your needs and planning the right approach to implementing, reviewing, delivering, and supporting your project.

            </Typography>
          </Box>

          <a href="#lifecycle-engine" onClick={handleScrollToLifecycle} style={{ textDecoration: "none", flexShrink: 0 }}>
            <Button
              variant="contained"
              endIcon={<ArrowDownwardRoundedIcon sx={{ fontSize: 18 }} />}
              sx={{
                bgcolor: "#18181B",
                color: "#FFFFFF",
                px: 3.5,
                py: 1.3,
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "0.875rem",
                textTransform: "none",
                boxShadow: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  bgcolor: "#EA580C",
                  boxShadow: "0 6px 20px -4px rgba(234, 88, 12, 0.4)",
                },
              }}
            >
             Explore Our 5-Step Process

            </Button>
          </a>
        </Box>
      </Container>
    </Box>
  );
}
