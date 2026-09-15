"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ServiceFaqSection from "../ServiceFaqSection";
import InteractiveServiceExplorer from "../InteractiveServiceExplorer";
import InteractiveScopeEstimator from "../InteractiveScopeEstimator";
import CtaSection from "../../home/CtaSection";
import Image from "next/image";
import Link from "next/link";

const appDevFaqs = [
  {
    question: "Do you develop apps for both Android and iOS?",
    answer:
      "Yes. We develop cross-platform mobile applications that run smoothly on both iOS and Android from a unified codebase, reducing development and maintenance overhead while preserving native performance.",
  },
  {
    question: "Can the application function without an active internet connection?",
    answer:
      "Yes. We specialize in offline-first mobile engineering. Data is securely persisted locally on the device using SQLite or local storage, and automatically syncs with your backend when connectivity resumes.",
  },
  {
    question: "Do you assist with Apple App Store and Google Play submissions?",
    answer:
      "We handle the complete release process: developer account configurations, code signing, screenshot assets, privacy compliance documentation, and store submission reviews until live approval.",
  },
  {
    question: "Can we add new features and integrations after launch?",
    answer:
      "Every app is architected with modular components and clean separation of concerns, making post-launch feature additions, SDK upgrades, and API expansions straightforward and risk-free.",
  },
];

export default function AppDevelopmentPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: "#FAF9F5", color: "#111215", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 10, md: 14 },
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 7 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 3,
                  px: 1.8,
                  py: 0.6,
                  borderRadius: "4px",
                  bgcolor: "rgba(14, 116, 144, 0.08)",
                  border: "1px solid rgba(14, 116, 144, 0.18)",
                }}
              >
                <SmartphoneIcon sx={{ color: "#0E7490", fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#0E7490",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    fontSize: "0.78rem",
                  }}
                >
                  IOS &bull; ANDROID &bull; CROSS-PLATFORM
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  color: "#0E172A",
                  fontSize: { xs: "2.35rem", sm: "3.2rem", md: "4.2rem" },
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: { xs: 1.1, md: 1.05 },
                  textTransform: "uppercase",
                  mb: 3,
                }}
              >
                {service.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#4A4D57",
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  lineHeight: 1.8,
                  maxWidth: 680,
                  mb: 4,
                }}
              >
                {service.description}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, alignItems: "center", mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <AppleIcon sx={{ fontSize: 24, color: "#0E172A" }} />
                  <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#0E172A" }}>
                    iOS Ready
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <AndroidIcon sx={{ fontSize: 24, color: "#0E7490" }} />
                  <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#0E172A" }}>
                    Android Ready
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    bgcolor: "#0E172A",
                    color: "#FFFFFF",
                    px: 3.5,
                    py: 1.4,
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    borderRadius: "6px",
                    boxShadow: "0 6px 20px rgba(14, 23, 42, 0.12)",
                    "&:hover": {
                      bgcolor: "#1E293B",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Start an App Project
                </Button>

                <Button
                  component="a"
                  href="#methodology"
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(17, 18, 21, 0.2)",
                    color: "#0E172A",
                    px: 3,
                    py: 1.4,
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    borderRadius: "6px",
                    "&:hover": {
                      borderColor: "#0E172A",
                      bgcolor: "rgba(14, 23, 42, 0.04)",
                    },
                  }}
                >
                  Explore Capabilities
                </Button>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  maxWidth: { xs: "100%", sm: "380px" },
                  mx: "auto",
                  bgcolor: "#FFFFFF",
                  borderRadius: "28px",
                  p: 1.5,
                  border: "2px solid rgba(17, 18, 21, 0.14)",
                  boxShadow: "0 24px 50px rgba(17, 18, 21, 0.08)",
                }}
              >
                {/* Mobile Top Speaker & Camera Notch */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    pb: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 72,
                      height: 5,
                      borderRadius: "3px",
                      bgcolor: "rgba(17, 18, 21, 0.15)",
                    }}
                  />
                </Box>

                {/* Mobile Viewport Screen */}
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 280, sm: 360, md: 400 },
                    borderRadius: "20px",
                    overflow: "hidden",
                    bgcolor: "#EBE8DF",
                  }}
                >
                  <Image
                    src="/images/portfolio/logix.png"
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(14, 23, 42, 0.05) 0%, rgba(14, 23, 42, 0.4) 100%)",
                    }}
                  />

                  {/* Offline-First & Realtime Telemetry Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      right: 12,
                      bgcolor: "rgba(250, 249, 245, 0.95)",
                      backdropFilter: "blur(6px)",
                      p: 1.5,
                      borderRadius: "8px",
                      border: "1px solid rgba(17, 18, 21, 0.08)",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.5 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#0E7490",
                          fontWeight: 800,
                          fontSize: "0.72rem",
                          letterSpacing: "0.06em",
                        }}
                      >
                        ● OFFLINE-FIRST SYNC ACTIVE
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#10B981",
                          fontFamily: "monospace",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                        }}
                      >
                        60 FPS NATIVE
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "#0E172A",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        lineHeight: 1.3,
                      }}
                    >
                      Background SQLite DB &bull; Real-time GPS &bull; Push Sync
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. INTERACTIVE METHODOLOGY EXPLORER */}
      <Box id="methodology" sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="xl">
          <InteractiveServiceExplorer
            detailedContent={service.detailedContent}
            features={service.features}
            serviceTitle={service.title}
          />
        </Container>
      </Box>

      {/* 3. INTERACTIVE SCOPE & TIMELINE ESTIMATOR */}
      <Box sx={{ bgcolor: "#F2F0EB", py: { xs: 10, md: 16 }, borderTop: "1px solid rgba(17, 18, 21, 0.08)", borderBottom: "1px solid rgba(17, 18, 21, 0.08)" }}>
        <Container maxWidth="xl">
          <InteractiveScopeEstimator
            serviceTitle={service.title}
            serviceSlug={service.slug}
          />
        </Container>
      </Box>

      {/* 4. TECH STACK & INDUSTRIES SERVED */}
      <Box
        sx={{
          bgcolor: "#FAF9F5",
          py: { xs: 10, md: 16 },
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, lg: 8 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  display: "block",
                  mb: 1.5,
                }}
              >
                MOBILE TOOLING &amp; FRAMEWORKS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#0E172A",
                  fontSize: { xs: "1.8rem", md: "2.3rem" },
                  letterSpacing: "-0.02em",
                }}
              >
                Technologies We Use
              </Typography>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 1.5 }}>
                {service.technologies.map((tech, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      bgcolor: "#FFFFFF",
                      p: 2,
                      borderRadius: "8px",
                      border: "1px solid rgba(17, 18, 21, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: "#0E7490",
                        transform: "translateX(3px)",
                      },
                    }}
                  >
                    <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#0E7490" }} />
                    <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#0E172A" }}>
                      {tech}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  display: "block",
                  mb: 1.5,
                }}
              >
                MARKET SECTORS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: "#0E172A",
                  fontSize: { xs: "1.8rem", md: "2.3rem" },
                  letterSpacing: "-0.02em",
                }}
              >
                Industries Served
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {service.domains.map((domain, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      bgcolor: "#FFFFFF",
                      p: 2.5,
                      borderRadius: "8px",
                      border: "1px solid rgba(17, 18, 21, 0.08)",
                      borderLeft: "3px solid #0E7490",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        boxShadow: "0 6px 16px rgba(17, 18, 21, 0.04)",
                      },
                    }}
                  >
                    <Typography
                      sx={{ color: "#0E172A", mb: 0.5, fontWeight: 700, fontSize: "1.05rem" }}
                    >
                      {domain.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#5E6068", lineHeight: 1.6 }}>
                      {domain.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. INTERACTIVE FAQS & CTA */}
      <ServiceFaqSection faqs={appDevFaqs} />
      <CtaSection />
    </Box>
  );
}
