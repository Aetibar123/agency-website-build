"use client";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { motion } from "framer-motion";

export default function HowWeWorkCta() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#183D35",
        color: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(216, 229, 213, 0.12)",
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              maxWidth: 960,
              textAlign: "left",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Status Pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.35)",
                border: "1px solid rgba(216, 229, 213, 0.25)",
                mb: 3,
              }}
            >
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#D8E5D5", boxShadow: "0 0 10px #D8E5D5" }}
              />
              <Typography
                sx={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#D8E5D5",
                  fontWeight: 700,
                  fontFamily: "monospace",
                }}
              >
                LET&apos;S TALK ABOUT YOUR BUSINESS
              </Typography>
            </Box>

            {/* Headline with DM Serif Display */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", var(--font-dm-serif), Georgia, serif',
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.4rem" },
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: { xs: 1.2, md: 1.15 },
                letterSpacing: "-0.015em",
                maxWidth: { xs: "100%", md: 940 },
                mb: 2.5,
              }}
            >
              Ready to Build a Website, Mobile App, or Grow Your Online Presence?{" "}
              <Box
                component="span"
                sx={{
                  color: "#D8E5D5",
                  fontStyle: "italic",
                }}
              >
                Need AI Automation or a Smarter Business Workflow?
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                color: "rgba(216, 229, 213, 0.85)",
                lineHeight: 1.75,
                maxWidth: 780,
                mb: 4.5,
                fontWeight: 400,
              }}
            >
              Tell us what your business needs, what is slowing your team down, and what you want to achieve. We’ll provide honest, practical recommendations, clear pricing, and a straightforward roadmap—without high-pressure sales tactics.
            </Typography>

            {/* Button Row */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "flex-start", alignItems: "center", mb: 4.5 }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: "#3D765D",
                  color: "#FFFFFF",
                  px: { xs: 3.2, sm: 4 },
                  py: 1.4,
                  fontSize: "0.925rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  boxShadow: "none",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#D8E5D5",
                    color: "#183D35",
                  },
                }}
              >
                Discuss Your Requirements
              </Button>

              <Button
                component={Link}
                href="/services"
                variant="outlined"
                sx={{
                  borderColor: "rgba(216, 229, 213, 0.35)",
                  bgcolor: "rgba(255, 255, 255, 0.04)",
                  color: "#FFFFFF",
                  px: { xs: 3, sm: 3.5 },
                  py: 1.4,
                  fontSize: "0.925rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#D8E5D5",
                    bgcolor: "rgba(216, 229, 213, 0.1)",
                  },
                }}
              >
                Explore Our Services
              </Button>
            </Box>

            {/* Trust Badges */}
            <Box
              sx={{
                pt: 3.5,
                borderTop: "1px solid rgba(216, 229, 213, 0.15)",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                gap: { xs: 2.5, sm: 4 },
              }}
            >
              {[
                { text: "Direct Engineer Access", icon: <VerifiedOutlinedIcon sx={{ fontSize: 16, color: "#D8E5D5" }} /> },
                { text: "Confidential & Respectful", icon: <LockOutlinedIcon sx={{ fontSize: 16, color: "#D8E5D5" }} /> },
                { text: "Clear, Honest Advice", icon: <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#D8E5D5" }} /> },
              ].map((item, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {item.icon}
                  <Typography sx={{ fontSize: "0.825rem", color: "rgba(216, 229, 213, 0.78)", fontWeight: 500 }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
