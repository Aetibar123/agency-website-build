"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";

interface DeliverableItem {
  highlight: string;
  text: string;
}

interface MainServiceCard {
  id: string;
  badge: string;
  title: string;
  outcome: string;
  icon: React.ReactNode;
  pageUrl: string;
  pageLabel: string;
  deliverables: DeliverableItem[];
}

const mainServices: MainServiceCard[] = [
  {
    id: "seo",
    badge: "ORGANIC SEARCH",
    title: "Search Engine Optimization (SEO)",
    outcome:
      "Improve your organic visibility across Google Search & Maps to attract high-intent local customers in Udaipur.",
    icon: <SearchIcon sx={{ fontSize: 26 }} />,
    pageUrl: "/services/seo-service-in-udaipur",
    pageLabel: "Explore SEO Services",
    deliverables: [
      {
        highlight: "Google Maps 3-Pack",
        text: "Optimize Business Profile to dominate local searches",
      },
      {
        highlight: "High-Intent Keywords",
        text: "Target queries that bring paying clients",
      },
      {
        highlight: "Technical SEO & Speed",
        text: "Fast Core Web Vitals and clean site structure",
      },
    ],
  },
  {
    id: "smm",
    badge: "BRAND & SOCIAL",
    title: "Social Media Marketing (SMM)",
    outcome:
      "Build a trustworthy, active presence on Instagram, Facebook & LinkedIn that converts followers into customers.",
    icon: <ShareOutlinedIcon sx={{ fontSize: 26 }} />,
    pageUrl: "/services/social-media-marketing-service-in-udaipur",
    pageLabel: "Explore Social Media Services",
    deliverables: [
      {
        highlight: "Content Calendars",
        text: "Monthly planning with consistent publishing",
      },
      {
        highlight: "Branded Creatives & Reels",
        text: "High-engagement carousels and short-form video",
      },
      {
        highlight: "Profile Optimization",
        text: "Transform bios into 24/7 conversion funnels",
      },
    ],
  },
  {
    id: "paid-ads",
    badge: "PAID MARKETING",
    title: "Google & Meta Paid Advertising",
    outcome:
      "Capture ready-to-buy inquiries with targeted Google & Meta campaigns and strict advertising budget controls.",
    icon: <AdsClickOutlinedIcon sx={{ fontSize: 26 }} />,
    pageUrl: "/services/performance-marketing-company-in-udaipur",
    pageLabel: "Explore Paid Advertising",
    deliverables: [
      {
        highlight: "Google Search & Call Ads",
        text: "Reach customers at the exact moment of intent",
      },
      {
        highlight: "Targeted Meta Campaigns",
        text: "Audience-focused creative ads across IG & Facebook",
      },
      {
        highlight: "Transparent Lead Tracking",
        text: "Track direct phone calls and WhatsApp enquiries",
      },
    ],
  },
];

export default function CompleteDigitalMarketingServices() {
  return (
    <Box
      component="section"
      id="complete-digital-marketing-services"
      sx={{
        py: { xs: 9, md: 12 },
        bgcolor: "#F7F7F2",
        borderBottom: "1px solid rgba(24, 61, 53, 0.08)",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: { xs: "100%", md: "1150px" },
            mx: "auto",
            mb: { xs: 5, md: 7 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "#D8E5D5",
                border: "1px solid rgba(61, 118, 93, 0.25)",
                color: "#183D35",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "monospace",
                mb: 2.2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#3D765D",
                }}
              />
              COMPLETE DIGITAL MARKETING IN UDAIPUR
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "1.75rem", sm: "2.15rem", md: "2.45rem", lg: "2.75rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: { xs: 1.22, md: 1.18 },
                letterSpacing: "-0.015em",
                mb: 2,
                textWrap: "balance",
              }}
            >
              Complete Digital Marketing Services in Udaipur —{" "}
              <Box
                component="span"
                sx={{
                  color: "#3D765D",
                  fontStyle: "italic",
                }}
              >
                Built for Measurable Growth
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.98rem", sm: "1.08rem" },
                lineHeight: 1.7,
                color: "#52525B",
                maxWidth: "720px",
                mx: "auto",
              }}
            >
              A unified digital marketing strategy connecting organic Google search, credible social media,
              and high-converting paid campaigns to generate real business enquiries.
            </Typography>
          </motion.div>
        </Box>

        {/* 3 Main Services Cards Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: "stretch" }}>
          {mainServices.map((card, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={card.id}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "22px",
                    p: { xs: 3.5, sm: 4, md: 4.5 },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    boxShadow: "0 4px 20px rgba(24, 61, 53, 0.03)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "#3D765D",
                      boxShadow:
                        "0 20px 40px -15px rgba(24, 61, 53, 0.1), 0 0 0 1px rgba(61, 118, 93, 0.25)",
                      "& .card-icon-container": {
                        bgcolor: "#183D35",
                        color: "#FFFFFF",
                        transform: "scale(1.05)",
                      },
                      "& .card-cta-btn": {
                        bgcolor: "#183D35",
                        color: "#FFFFFF",
                        borderColor: "#183D35",
                        "& .MuiSvgIcon-root": {
                          transform: "translateX(5px)",
                        },
                      },
                    },
                  }}
                >
                  <Box>
                    {/* Top Header: Clean Icon + Badge with Generous Margin */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 3.5,
                      }}
                    >
                      <Box
                        className="card-icon-container"
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: "14px",
                          bgcolor: "#D8E5D5",
                          color: "#183D35",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {card.icon}
                      </Box>

                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          fontFamily: "monospace",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "#183D35",
                          bgcolor: "#D8E5D5",
                          px: 1.5,
                          py: 0.45,
                          borderRadius: "9999px",
                        }}
                      >
                        {card.badge}
                      </Typography>
                    </Box>

                    {/* Title with DM Serif font and breathing room */}
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                        fontSize: { xs: "1.35rem", sm: "1.45rem", md: "1.55rem" },
                        fontWeight: 400,
                        letterSpacing: "-0.015em",
                        color: "#183D35",
                        mb: 1.8,
                        lineHeight: 1.3,
                      }}
                    >
                      {card.title}
                    </Typography>

                    {/* Outcome Statement */}
                    <Typography
                      sx={{
                        fontSize: "0.925rem",
                        lineHeight: 1.65,
                        color: "#52525B",
                        mb: 3.5,
                      }}
                    >
                      {card.outcome}
                    </Typography>

                    {/* What's Included / Key Deliverables */}
                    <Box
                      sx={{
                        pt: 3,
                        mb: 3.5,
                        borderTop: "1px solid rgba(24, 61, 53, 0.08)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          fontFamily: "monospace",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#3D765D",
                          mb: 2,
                        }}
                      >
                        KEY DELIVERABLES:
                      </Typography>

                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.8 }}>
                        {card.deliverables.map((item, dIdx) => (
                          <Box
                            key={dIdx}
                            sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}
                          >
                            <Box
                              sx={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                bgcolor: "#D8E5D5",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                mt: 0.2,
                              }}
                            >
                              <CheckIcon sx={{ fontSize: 12, color: "#183D35", strokeWidth: 1.5 }} />
                            </Box>
                            <Typography
                              sx={{
                                fontSize: "0.85rem",
                                color: "#52525B",
                                lineHeight: 1.55,
                              }}
                            >
                              <strong style={{ color: "#183D35", fontWeight: 600 }}>
                                {item.highlight}
                              </strong>{" "}
                              — {item.text}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  {/* Clean CTA Button with comfortable sizing */}
                  <Box sx={{ pt: 1 }}>
                    <Link
                      href={card.pageUrl}
                      style={{ textDecoration: "none", display: "block" }}
                    >
                      <Button
                        className="card-cta-btn"
                        variant="outlined"
                        fullWidth
                        endIcon={
                          <ArrowForwardIcon
                            sx={{ fontSize: 16, transition: "transform 0.25s ease" }}
                          />
                        }
                        sx={{
                          py: 1.2,
                          px: 2.5,
                          borderRadius: "12px",
                          borderColor: "rgba(24, 61, 53, 0.2)",
                          color: "#183D35",
                          bgcolor: "#F7F7F2",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          textTransform: "none",
                          transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        {card.pageLabel}
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
