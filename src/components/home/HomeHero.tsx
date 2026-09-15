"use client";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const ThreeHeroCanvas = dynamic(() => import("./ThreeHeroCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function HomeHero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "auto", md: "96vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: { xs: 16, sm: 18, md: 20 },
        pb: { xs: 10, md: 14 },
        background:
          "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.08) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
        overflow: "hidden",
      }}
    >
      {/* Three.js Flowing 3D Silk Wave Background */}
      <ThreeHeroCanvas />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        {/* Centered Hero Typographic Core with Smooth Stagger */}
        <Box
          sx={{
            maxWidth: "960px",
            mx: "auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 2.2,
                py: 0.8,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                backdropFilter: "blur(12px)",
                mb: { xs: 3, md: 3.5 },
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#F97316",
                  boxShadow: "0 0 10px #F97316",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.825rem" },
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#EA580C",
                  textTransform: "uppercase",
                }}
              >
                Websites &bull; Web &amp; Mobile Apps &bull; Practical AI &bull; Digital Systems
              </Typography>
            </Box>
          </motion.div>

          {/* Main Headline with Sunset Orange Accent */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.35rem", sm: "3.25rem", md: "4.2rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.15, md: 1.12 },
                letterSpacing: { xs: "-0.03em", md: "-0.035em" },
                mb: { xs: 3, md: 3.5 },
              }}
            >
              We build websites, apps, and digital products{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                that solve real problems.
              </Box>
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.25rem" },
                lineHeight: 1.75,
                color: "#52525B",
                maxWidth: 760,
                mb: { xs: 4, md: 5 },
                fontWeight: 400,
              }}
            >
              Based in Udaipur, Aetibar is a technology company building modern websites, custom software, web applications, and practical AI automation designed around how your business actually runs.
            </Typography>
          </motion.div>

          {/* High-Impact CTA Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 2,
                alignItems: "center",
                mb: 3.5,
              }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/how-we-help" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      px: { xs: 3.5, sm: 4.5 },
                      py: { xs: 1.4, sm: 1.6 },
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      fontWeight: 700,
                      borderRadius: "9999px",
                      boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.38)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                        boxShadow: "0 15px 30px -5px rgba(234, 88, 12, 0.5)",
                      },
                    }}
                  >
                    See Our Work
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#18181B",
                      borderColor: "rgba(24, 24, 27, 0.2)",
                      bgcolor: "rgba(255, 255, 255, 0.8)",
                      backdropFilter: "blur(10px)",
                      px: { xs: 3.5, sm: 4 },
                      py: { xs: 1.4, sm: 1.55 },
                      fontSize: { xs: "0.95rem", sm: "1rem" },
                      fontWeight: 600,
                      borderRadius: "9999px",
                      boxShadow: "0 2px 8px rgba(24, 24, 27, 0.04)",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "#EA580C",
                        bgcolor: "rgba(249, 115, 22, 0.04)",
                        color: "#EA580C",
                      },
                    }}
                  >
                    Start a Conversation
                  </Button>
                </Link>
              </motion.div>
            </Box>
          </motion.div>

          {/* Sub-CTA Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 2, sm: 3 },
              }}
            >
              {[
                "Thoughtful Design & Engineering",
                "Practical Problem Solving",
                "Clear, Honest Communication",
              ].map((text, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                  <Typography sx={{ fontSize: "0.85rem", color: "#71717A", fontWeight: 500 }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Centerpiece Showcase Image Frame — Stable, Rock-Solid with Smooth Lift & Glow on Hover */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "1160px",
              mx: "auto",
            }}
          >
            {/* Warm Ambient Glow behind frame */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "94%",
                height: "85%",
                background:
                  "radial-gradient(ellipse, rgba(249, 115, 22, 0.18) 0%, rgba(251, 146, 60, 0.08) 50%, transparent 75%)",
                filter: "blur(60px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Stable Showcase Card with Smooth Hover Lift & Warm Glow */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                p: { xs: 1, sm: 1.5 },
                bgcolor: "#FFFFFF",
                borderRadius: { xs: "20px", sm: "26px", md: "32px" },
                border: "1px solid rgba(228, 228, 231, 0.9)",
                boxShadow: "0 25px 70px -15px rgba(24, 24, 27, 0.1), 0 0 0 1px rgba(24, 24, 27, 0.03)",
                overflow: "hidden",
                transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 35px 85px -15px rgba(234, 88, 12, 0.22), 0 0 0 1px rgba(249, 115, 22, 0.25)",
                  borderColor: "rgba(249, 115, 22, 0.35)",
                },
              }}
            >
              {/* Cinematic Image Viewport */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 260, sm: 400, md: 520, lg: 580 },
                  borderRadius: { xs: "16px", sm: "22px", md: "26px" },
                  overflow: "hidden",
                  bgcolor: "#18181B",
                }}
              >
                <Image
                  src="/images/home/modern-agency-hero.jpg"
                  alt="Modern systems engineering agency studio with active workflow dashboards and sunset amber lighting"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1160px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />

                {/* Subtle Contrast Gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(24, 24, 27, 0.05) 0%, rgba(24, 24, 27, 0.35) 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Floating Glassmorphic Pill 1 (Top Left) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 14, sm: 20, md: 24 },
                    left: { xs: 14, sm: 20, md: 24 },
                    bgcolor: "rgba(255, 255, 255, 0.92)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "16px",
                    px: { xs: 1.8, sm: 2.4 },
                    py: { xs: 1.2, sm: 1.4 },
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      bgcolor: "#F97316",
                      boxShadow: "0 0 0 3px rgba(249, 115, 22, 0.25)",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.7rem", sm: "0.75rem" },
                        fontWeight: 700,
                        color: "#EA580C",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      Practical Engineering
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.8rem", sm: "0.875rem" },
                        fontWeight: 700,
                        color: "#18181B",
                      }}
                    >
                      Software designed around how work actually happens
                    </Typography>
                  </Box>
                </Box>

                {/* Floating Glassmorphic Pill 2 (Bottom Right) */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 14, sm: 20, md: 24 },
                    right: { xs: 14, sm: 20, md: 24 },
                    bgcolor: "rgba(24, 24, 27, 0.88)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "16px",
                    px: { xs: 1.8, sm: 2.4 },
                    py: { xs: 1.2, sm: 1.4 },
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25)",
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    gap: 1.5,
                    color: "#FFFFFF",
                  }}
                >
                  <AutoAwesomeOutlinedIcon sx={{ fontSize: 20, color: "#FB923C" }} />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.725rem",
                        fontWeight: 700,
                        color: "#FB923C",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      Connected Systems
                    </Typography>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
                      Less repetitive data entry &bull; Clear team visibility
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
