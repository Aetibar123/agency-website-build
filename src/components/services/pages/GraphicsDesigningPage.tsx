"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { ServiceDetail } from "../../../data/detailedServices";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ServiceFaqSection from "../ServiceFaqSection";
import CtaSection from "../../home/CtaSection";
import InteractiveServiceExplorer from "../InteractiveServiceExplorer";
import InteractiveScopeEstimator from "../InteractiveScopeEstimator";

const designFaqs = [
  {
    question: "What deliverables are included in a complete Brand Identity project?",
    answer:
      "A complete visual identity system includes primary and secondary logo marks, responsive icon variants, typography hierarchy, primary and secondary color tokens, spacing standards, brand guidelines, and export packages for print and digital.",
  },
  {
    question: "Do you build reusable design systems in Figma?",
    answer:
      "Yes. We specialize in modular, component-driven Figma design systems with auto-layout, interactive variant states, typography styles, and color variables designed for seamless developer handoff.",
  },
  {
    question: "Can you create marketing collaterals and social media templates?",
    answer:
      "We design cohesive digital and print collateral—including pitch decks, social media templates, business stationery, ad banners, and promotional merchandise—aligned with your brand guidelines.",
  },
  {
    question: "Do we receive full copyright and editable source files?",
    answer:
      "Yes. Upon project completion and sign-off, full intellectual property rights and editable vector source files (.fig, .svg, .ai, .eps, .png) are transferred directly to your organization.",
  },
];

export default function GraphicsDesigningPage({ service }: { service: ServiceDetail }) {
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
                <DesignServicesIcon sx={{ color: "#0E7490", fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#0E7490",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    fontSize: "0.78rem",
                  }}
                >
                  BRAND SYSTEMS &bull; FIGMA UI/UX &bull; CREATIVE DIRECTION
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  color: "#0E172A",
                  fontSize: { xs: "2.35rem", sm: "3.2rem", md: "4.2rem" },
                  fontWeight: 800,
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

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", mb: 4 }}>
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
                  Design Your Brand System
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
                  Explore Creative Process
                </Button>
              </Box>

              <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <AutoAwesomeOutlinedIcon sx={{ fontSize: 22, color: "#0E7490" }} />
                  <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#0E172A" }}>
                    Figma Component Libraries
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.9rem", color: "#5E6068" }}>
                    Complete Brand Guidelines
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  bgcolor: "#FFFFFF",
                  borderRadius: "12px",
                  p: 2,
                  border: "1px solid rgba(17, 18, 21, 0.12)",
                  boxShadow: "0 20px 40px rgba(17, 18, 21, 0.06)",
                }}
              >
                {/* Design Token Header */}
                <Box
                  sx={{
                    pb: 1.5,
                    mb: 1.5,
                    borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#0E7490",
                      fontFamily: "monospace",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                    }}
                  >
                    DESIGN_SYSTEM_SPEC // FIGMA_TOKENS
                  </Typography>
                  <Box
                    sx={{
                      px: 1,
                      py: 0.2,
                      bgcolor: "rgba(14, 116, 144, 0.1)",
                      borderRadius: "3px",
                      color: "#0E7490",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      fontFamily: "monospace",
                    }}
                  >
                    TOKENS VERIFIED
                  </Box>
                </Box>

                {/* Brand Design Image Preview */}
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 200, sm: 240, md: 250 },
                    width: "100%",
                    borderRadius: "8px",
                    overflow: "hidden",
                    bgcolor: "#EBE8DF",
                    mb: 2,
                  }}
                >
                  <Image
                    src="/images/portfolio/fintech-branding.png"
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
                </Box>

                {/* 4 Design System Tokens */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 1.2,
                  }}
                >
                  {[
                    { label: "COLOR PALETTE", val: "Teal #0E7490 & Midnight" },
                    { label: "TYPE HIERARCHY", val: "Plus Jakarta Sans Bold" },
                    { label: "ACCESSIBILITY", val: "WCAG AAA 8.2:1 Ratio" },
                    { label: "FIGMA COMPONENTS", val: "240+ Auto-Layout Variants" },
                  ].map((token) => (
                    <Box
                      key={token.label}
                      sx={{
                        p: 1.2,
                        borderRadius: "6px",
                        bgcolor: "#FAF9F5",
                        border: "1px solid rgba(17, 18, 21, 0.06)",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#6B6E76",
                          fontFamily: "monospace",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          display: "block",
                          mb: 0.3,
                        }}
                      >
                        {token.label}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#0E172A",
                          fontWeight: 700,
                          fontSize: "0.82rem",
                        }}
                      >
                        {token.val}
                      </Typography>
                    </Box>
                  ))}
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
      <Box
        sx={{
          bgcolor: "#F2F0EB",
          py: { xs: 10, md: 16 },
          borderTop: "1px solid rgba(17, 18, 21, 0.08)",
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
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
                DESIGN &amp; PROTOTYPING ARSENAL
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: "#0E172A",
                  fontSize: { xs: "1.8rem", md: "2.3rem" },
                  letterSpacing: "-0.02em",
                }}
              >
                Creative Suite &amp; Tooling
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
                CREATIVE DOMAINS &amp; SECTORS
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: "#0E172A",
                  fontSize: { xs: "1.8rem", md: "2.3rem" },
                  letterSpacing: "-0.02em",
                }}
              >
                Industries Designed
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

      <ServiceFaqSection faqs={designFaqs} />
      <CtaSection />
    </Box>
  );
}
