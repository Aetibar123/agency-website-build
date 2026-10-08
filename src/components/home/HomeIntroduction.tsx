"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined"
import LanguageIcon from "@mui/icons-material/Language";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: <LanguageIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    tag: "Problem: Your Website Is Not Helping Your Business",
    title: "Websites & Mobile Apps Built for Your Customers",
    desc: "Your website is often the first place potential customers learn about your business. We build business websites, online stores, and mobile apps that make your services easier to understand, your business easier to contact, and important tasks easier to manage.",
    highlights: [
      "Business & e-commerce websites",
      "Custom mobile apps for iOS & Android",
      "Booking, ordering & customer workflows",
      "Websites designed with search visibility in mind",
    ],
  },

  {
    icon: <CampaignOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    tag: "Problem: People Are Not Finding or Engaging With Your Business",
    title: "Digital Marketing That Keeps Your Business Visible",
    desc: "Having a website is only part of building an online presence. We help businesses improve their Google visibility through SEO, maintain a consistent social media presence, and reach relevant audiences through targeted Google and Meta advertising.",
    highlights: [
      "Search engine optimization & local SEO",
      "Social media content & publishing",
      "Google Search & Meta advertising",
      "Conversion tracking & performance reporting",
    ],
  },

  {
    icon: <SmartToyOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    tag: "Problem: Too Much Time Goes Into Repetitive Work",
    title: "AI Automation for Everyday Business Tasks",
    desc: "If your team spends time moving information between spreadsheets, emails, forms, or other business tools, there may be a simpler way to handle it. We automate repetitive workflows and use AI where it genuinely helps, while keeping important decisions under your control.",
    highlights: [
      "Lead notifications & follow-up workflows",
      "Forms, spreadsheets & email automation",
      "Document & invoice data extraction",
      "AI-assisted customer responses",
    ],
  },

  {
    icon: <IntegrationInstructionsOutlinedIcon sx={{ fontSize: 28, color: "#EA580C" }} />,
    tag: "Problem: Your Digital Tools Do Not Work Together",
    title: "Connected Digital Systems for Your Business",
    desc: "Your website, customer data, marketing tools, and everyday software should support the way your business operates. We connect the relevant systems and build custom workflows where off-the-shelf tools are not enough.",
    highlights: [
      "CRM & business software integrations",
      "WhatsApp, Gmail & spreadsheet workflows",
      "Customer data & lead management",
      "Custom tools for specific business processes",
    ],
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
          <Box sx={{ maxWidth: { xs: "100%", sm: 800, md: 880 }, mx: "auto", textAlign: "center", mb: { xs: 6, md: 7.5 } }}>
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
                COMMON BUSINESS CHALLENGES &bull; HOW AETIBAR HELPS
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.65rem", sm: "2.15rem", md: "2.5rem", lg: "2.75rem" },
                fontWeight: 700,
                color: "#18181B",
                lineHeight: { xs: 1.25, md: 1.2 },
                letterSpacing: "-0.03em",
                textWrap: "balance",
                mb: 2.2,
              }}
            >
              Is Your Digital Presence Failing to{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Bring In Paying Clients?
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.125rem" },
                lineHeight: 1.7,
                color: "#52525B",
                fontWeight: 400,
                maxWidth: { xs: "100%", md: 740, lg: 780 },
                mx: "auto",
              }}
            >
           Most business owners deal with websites that look fine but fail to turn visitors into enquiries, marketing efforts that are difficult to measure, and teams spending too much time on repetitive tasks. At Aetibar — meaning “Trust” — we bring web development, digital marketing, mobile apps, and AI automation together to help businesses build a stronger online presence, reach the right customers, and work more efficiently.


            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3.5}>
          {pillars.map((pillar, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: idx * 0.16, ease: [0.22, 1, 0.36, 1] }}
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
                      fontSize: { xs: "1.15rem", sm: "1.2rem", md: "1.25rem" },
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "#18181B",
                      mb: 1.5,
                      lineHeight: 1.35,
                      textWrap: "balance",
                    }}
                  >
                    {pillar.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.925rem",
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
