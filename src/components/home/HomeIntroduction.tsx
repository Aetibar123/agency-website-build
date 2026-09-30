"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: <CodeIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    tag: "Problem: Website Not Bringing Inquiries",
    title: "Custom Web & Mobile App Development",
    desc: "If your website is slow, hard to use on mobile phones, or fails to generate leads, potential clients simply go to competitors. We build fast, responsive business websites, e-commerce stores, and mobile applications designed specifically to establish instant trust and turn visitors into phone calls, WhatsApp chats, and booked clients.",
    highlights: ["Mobile-first design", "WhatsApp & call action buttons", "Fast loading speed", "100% code ownership"],
  },
  {
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    tag: "Problem: Hours Lost to Manual Busywork",
    title: "Practical AI Automation & Workflow Integration",
    desc: "When staff spend hours copying data from forms into spreadsheets, manually sending quotes, or answering repetitive customer questions, growth stalls. We connect your existing business tools with practical AI automation—so customer inquiries are captured instantly, orders sync automatically, and your team saves hours every week.",
    highlights: ["Instant WhatsApp lead alerts", "Spreadsheet & CRM syncing", "Automated follow-ups", "Zero manual busywork"],
  },
  {
    icon: <CampaignOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    tag: "Problem: Invisible on Google & Wasted Ad Spend",
    title: "Targeted SEO Services & High-ROI Advertising",
    desc: "Spending money on ads that bring no real customers or being invisible when people search Google for your services is costly. Our search engine optimization (SEO) and targeted Google Ads & Meta advertising put your business in front of customers actively searching to buy, delivering real inquiries instead of empty clicks.",
    highlights: ["Top Google search visibility", "Local SEO optimization", "High-conversion Google Ads", "Transparent ROI tracking"],
  },
];

export default function HomeIntroduction() {
  return (
    <Box
      component="section"
      id="introduction"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#FAF8F5",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
      }}
    >
      {/* Background Decorative Ambient Warm Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 450,
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, rgba(250, 248, 245, 0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: 960, lg: 1060 }, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                backdropFilter: "blur(12px)",
                mb: 2.5,
              }}
            >
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316", boxShadow: "0 0 10px #F97316" }}
              />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#EA580C",
                  textTransform: "uppercase",
                }}
              >
                REAL PROBLEMS WE SOLVE &bull; MEASURABLE SOLUTIONS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.25, md: 1.18 },
                letterSpacing: "-0.035em",
                textWrap: "balance",
                mb: 2.5,
              }}
            >
              Are Outdated Systems &amp; Low Visibility{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Costing You Customers?
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                lineHeight: 1.75,
                color: "#52525B",
                fontWeight: 400,
                maxWidth: 860,
                mx: "auto",
              }}
            >
              Most business owners struggle with websites that look okay but don&apos;t generate calls, staff bogged down in repetitive manual tasks, and marketing budgets spent without measurable return. At Aetibar (&quot;Trust&quot;), we replace guesswork with practical digital systems that win clients and simplify daily operations.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3.5}>
          {pillars.map((pillar, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: idx * 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                  bgcolor: "#FFFFFF",
                  p: { xs: 3.5, sm: 4 },
                  borderRadius: { xs: "20px", md: "24px" },
                  border: "1px solid rgba(24, 24, 27, 0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 8px rgba(24, 24, 27, 0.02)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 18px 36px -12px rgba(234, 88, 12, 0.12)",
                    borderColor: "rgba(234, 88, 12, 0.4)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      bgcolor: "rgba(249, 115, 22, 0.1)",
                      color: "#EA580C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {pillar.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      fontFamily: "monospace",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "#DC2626",
                      bgcolor: "rgba(239, 68, 68, 0.08)",
                      border: "1px solid rgba(239, 68, 68, 0.2)",
                      px: 1.6,
                      py: 0.5,
                      borderRadius: "9999px",
                    }}
                  >
                    {pillar.tag}
                  </Typography>
                </Box>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.1rem", sm: "1.15rem", md: "1.2rem" },
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: "#18181B",
                    mb: 1.5,
                    lineHeight: 1.35,
                    textWrap: "balance",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {pillar.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "#52525B",
                    mb: 3,
                    flexGrow: 1,
                  }}
                >
                  {pillar.desc}
                </Typography>

                <Box
                  sx={{
                    pt: 2.5,
                    borderTop: "1px solid rgba(24, 24, 27, 0.06)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.2,
                  }}
                >
                  {pillar.highlights.map((item, hIdx) => (
                    <Box key={hIdx} sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: "50%",
                          bgcolor: "rgba(234, 88, 12, 0.1)",
                          color: "#EA580C",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#3F3F46",
                          fontWeight: 600,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
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
