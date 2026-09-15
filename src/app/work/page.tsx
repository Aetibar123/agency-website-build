import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Grid } from "@mui/material";
import WorkPageClient from "../../components/work/WorkPageClient";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export const metadata: Metadata = {
  title: "Our Work | Production Architectures & Case Studies | Aetibar",
  description:
    "Explore practical digital systems and production architectures engineered by Aetibar. Real project case studies structured by the business bottleneck, technical approach, and honest commercial outcomes.",
  alternates: {
    canonical: "https://www.aetibar.in/work",
  },
  openGraph: {
    title: "Our Work | Production Architectures & Case Studies | Aetibar",
    description:
      "Explore practical digital systems and production architectures engineered by Aetibar. Real project case studies structured by the business bottleneck, technical approach, and honest commercial outcomes.",
    url: "https://www.aetibar.in/work",
    siteName: "Aetibar",
    type: "website",
    images: [
      {
        url: "https://www.aetibar.in/images/home/hero-agency-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Aetibar - Our Work & Case Studies",
      },
    ],
  },
};

export default function WorkPage() {
  return (
    <main>
      {/* Editorial Premium Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, sm: 18, md: 22 },
          pb: { xs: 8, md: 11 },
          bgcolor: "#FAF8F5",
          borderBottom: "1px solid rgba(228, 228, 231, 0.9)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Architectural Grid Lines */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(24, 24, 27, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 24, 27, 0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            pointerEvents: "none",
          }}
        />

        {/* Ambient Warm Gradient Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(250, 248, 245, 0) 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 940, mx: "auto", textAlign: "center" }}>
            {/* Status Pill Badge */}
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
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#F97316",
                  boxShadow: "0 0 10px #F97316",
                }}
              />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#EA580C",
                  fontWeight: 700,
                  fontFamily: "monospace",
                }}
              >
                OUR WORK // PRODUCTION ARCHITECTURES
              </Typography>
            </Box>

            {/* Main Title */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.3rem", sm: "3.2rem", md: "4rem", lg: "4.5rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: "-0.035em",
                lineHeight: { xs: 1.15, sm: 1.1, md: 1.06 },
                mb: 3,
              }}
            >
              Systems engineered for real{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                operational leverage.
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1.05rem", md: "1.22rem" },
                color: "#52525B",
                lineHeight: 1.8,
                maxWidth: 820,
                mx: "auto",
                mb: 6,
              }}
            >
              No hypothetical agency mockups or Figma illusions. Below are verified production platforms, custom internal
              tools, and automated pipelines we&apos;ve deployed—structured by the business bottleneck, technical approach, and
              verifiable commercial outcomes.
            </Typography>

            {/* Trust & Proof Metrics Strip */}
            <Grid container spacing={2.5}>
              {[
                {
                  icon: <LockOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "100%",
                  label: "Code & DB Ownership",
                  desc: "Complete GitHub & schema handover",
                },
                {
                  icon: <SpeedRoundedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "< 300ms",
                  label: "Server Latency SLA",
                  desc: "Sub-second edge API response times",
                },
                {
                  icon: <ShieldRoundedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "0 Drift",
                  label: "Dual-Run Migration Net",
                  desc: "100% historical data verified",
                },
                {
                  icon: <VerifiedRoundedIcon sx={{ fontSize: 20, color: "#EA580C" }} />,
                  val: "$0 / Mo",
                  label: "Per-Seat User Taxes",
                  desc: "Zero ongoing SaaS license fees",
                },
              ].map((m, idx) => (
                <Grid size={{ xs: 6, sm: 3 }} key={idx}>
                  <Box
                    sx={{
                      p: { xs: 2, sm: 2.5 },
                      borderRadius: "16px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      boxShadow: "0 2px 10px rgba(24, 24, 27, 0.02)",
                      textAlign: "center",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "rgba(234, 88, 12, 0.35)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 20px -4px rgba(234, 88, 12, 0.08)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        mb: 0.5,
                      }}
                    >
                      {m.icon}
                      <Typography
                        sx={{
                          fontSize: { xs: "1.3rem", sm: "1.5rem" },
                          fontWeight: 800,
                          color: "#18181B",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {m.val}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "#27272A",
                        mb: 0.2,
                      }}
                    >
                      {m.label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.72rem", color: "#71717A" }}>
                      {m.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Interactive Project Showcase */}
      <WorkPageClient />
    </main>
  );
}
