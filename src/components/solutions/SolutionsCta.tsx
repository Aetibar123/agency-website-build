"use client";
import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import { motion } from "framer-motion";

interface SolutionsCtaProps {
  badge?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryLink?: string;
  secondaryLink?: string;
}

export default function SolutionsCta({
  badge = "START WITH THE BOTTLENECK",
  headline = "Ready to build a digital system that actually fits your workflow?",
  description = "No 20-page slide decks or generic sales scripts. Let's inspect where your current tools create friction and map out the exact system your business needs to scale.",
  primaryButtonText = "Schedule Architecture Diagnostic",
  secondaryButtonText = "Explore Our Work",
  primaryLink = "/contact",
  secondaryLink = "/work",
}: SolutionsCtaProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#0B0C10",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient Radial Gradient Glows */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "100%", md: "900px" },
          height: "450px",
          background:
            "radial-gradient(ellipse, rgba(234, 88, 12, 0.18) 0%, rgba(249, 115, 22, 0.05) 50%, transparent 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Subtle Architectural Grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          sx={{
            borderRadius: { xs: "24px", md: "32px" },
            background: "linear-gradient(145deg, rgba(24, 24, 27, 0.9) 0%, rgba(17, 18, 24, 0.95) 100%)",
            border: "1px solid rgba(249, 115, 22, 0.28)",
            boxShadow: "0 30px 80px -20px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.04)",
            p: { xs: 4, sm: 6, md: 8 },
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              px: 2,
              py: 0.6,
              borderRadius: "9999px",
              bgcolor: "rgba(234, 88, 12, 0.12)",
              border: "1px solid rgba(234, 88, 12, 0.3)",
              mb: 3,
            }}
          >
            <BoltOutlinedIcon sx={{ fontSize: 16, color: "#FB923C" }} />
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#FB923C",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {badge}
            </Typography>
          </Box>

          {/* Headline */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
              fontWeight: 600,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: { xs: 1.2, md: 1.12 },
              maxWidth: 820,
              mx: "auto",
              mb: 3,
            }}
          >
            {headline}
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.15rem" },
              color: "#A1A1AA",
              lineHeight: 1.8,
              maxWidth: 720,
              mx: "auto",
              mb: 5,
            }}
          >
            {description}
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2.5,
              mb: 6,
            }}
          >
            <Link href={primaryLink} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                  color: "#FFFFFF",
                  px: { xs: 3.5, sm: 4.5 },
                  py: { xs: 1.5, sm: 1.75 },
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  borderRadius: "9999px",
                  boxShadow: "0 10px 28px rgba(234, 88, 12, 0.4)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                    boxShadow: "0 16px 36px rgba(234, 88, 12, 0.55)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {primaryButtonText}
              </Button>
            </Link>

            <Link href={secondaryLink} style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#FFFFFF",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  bgcolor: "rgba(255, 255, 255, 0.04)",
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1.5, sm: 1.75 },
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  borderRadius: "9999px",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "#FB923C",
                    color: "#FB923C",
                    bgcolor: "rgba(234, 88, 12, 0.1)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {secondaryButtonText}
              </Button>
            </Link>
          </Box>

          {/* Value Commitments */}
          <Grid
            container
            spacing={3}
            sx={{
              pt: 4,
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              maxWidth: 780,
              mx: "auto",
            }}
          >
            {[
              "Zero Per-Seat SaaS License Penalties",
              "Direct Engineering Founder Access",
              "100% Code & Database Ownership",
            ].map((text, idx) => (
              <Grid size={{ xs: 12, sm: 4 }} key={idx}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                  <CheckCircleOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
                  <Typography sx={{ fontSize: "0.825rem", color: "#D4D4D8", fontWeight: 500 }}>
                    {text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
