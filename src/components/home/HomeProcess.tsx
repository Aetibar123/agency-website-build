"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Honest Advice",
    desc: "We discuss your business goals, target customers, and operational bottlenecks. We provide honest, practical recommendations before you spend a single rupee.",
  },
  {
    num: "02",
    title: "Fixed Scope & Clear Pricing",
    desc: "You receive a transparent project proposal with clearly defined deliverables, guaranteed fixed pricing, and realistic timeline milestones. No hidden surprises.",
  },
  {
    num: "03",
    title: "Design & Live Previews",
    desc: "We craft modern, mobile-friendly layouts, logos, or campaign mockups and share live previews so you can test the customer experience and give feedback.",
  },
  {
    num: "04",
    title: "Lead & Speed Testing",
    desc: "We test across real phones, tablets, and computers, ensuring fast loading speed, working WhatsApp and call buttons, and rock-solid reliability before launch.",
  },
  {
    num: "05",
    title: "Launch, Handover & Support",
    desc: "We deploy your project live, transfer 100% full asset and code ownership, and stay right by your side with dependable ongoing maintenance and support.",
  },
];

export default function HomeProcess() {
  return (
    <Box
      component="section"
      id="process"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Ambient Warm Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.04) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(60px)",
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
                HOW WE WORK TOGETHER &bull; TRANSPARENT STAGES
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
              A Straightforward Process With{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Zero Surprises.
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
              No confusing tech jargon, no unexpected invoices, and no disappearing developers. Here is our straightforward step-by-step roadmap from your first consultation to live results:
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3}>
          {steps.map((step, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: idx * 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    bgcolor: "#FAF8F5",
                    p: { xs: 3, sm: 3.5 },
                    borderRadius: { xs: "20px", md: "24px" },
                    border: "1px solid rgba(24, 24, 27, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    boxShadow: "0 2px 8px rgba(24, 24, 27, 0.02)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 18px 36px -12px rgba(234, 88, 12, 0.12)",
                      borderColor: "rgba(234, 88, 12, 0.4)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "10px",
                      bgcolor: "rgba(249, 115, 22, 0.1)",
                      color: "#EA580C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.95rem",
                      fontWeight: 800,
                      fontFamily: "monospace",
                      letterSpacing: "-0.02em",
                      mb: 2,
                    }}
                  >
                    {step.num}
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "#18181B",
                      mb: 1.2,
                      lineHeight: 1.35,
                      textWrap: "balance",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      color: "#52525B",
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
