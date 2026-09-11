"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const workSection = document.getElementById("selected-work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/portfolio";
    }
  };

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#FAF9F5",
        position: "relative",
        minHeight: { xs: "auto", lg: "92vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        pt: { xs: 15, sm: 18, md: 20 },
        pb: { xs: 6, md: 8 },
        borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl" sx={{ my: "auto" }}>
        <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "center" }}>
          {/* Left Column: Asymmetric Editorial Typographic Core */}
          <Grid size={{ xs: 12, lg: 7 }}>
            {/* Status & Category Pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                mb: { xs: 2.5, md: 3 },
                px: 1.8,
                py: 0.6,
                borderRadius: "4px",
                bgcolor: "rgba(14, 116, 144, 0.08)",
                border: "1px solid rgba(14, 116, 144, 0.2)",
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#0E7490",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 700,
                  fontSize: { xs: "0.72rem", md: "0.78rem" },
                  letterSpacing: "0.14em",
                }}
              >
                UDAIPUR, INDIA &bull; DIGITAL PRODUCTS &bull; AI SYSTEMS
              </Typography>
            </Box>

            {/* Main Editorial Headline */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: "#0E172A",
                fontSize: { xs: "2.35rem", sm: "3.2rem", md: "4rem", lg: "4.5rem" },
                fontWeight: 800,
                lineHeight: { xs: 1.14, sm: 1.08, md: 1.05 },
                letterSpacing: { xs: "-0.025em", md: "-0.035em" },
                textTransform: "uppercase",
                mb: { xs: 3, md: 3.5 },
              }}
            >
              We build digital experiences{" "}
              <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
              that{" "}
              <Box
                component="span"
                sx={{
                  color: "#0E7490",
                }}
              >
                move businesses forward.
              </Box>
            </Typography>

            {/* Supporting Copy */}
            <Typography
              variant="body1"
              sx={{
                color: "#4A4D57",
                fontSize: { xs: "1.05rem", sm: "1.125rem", md: "1.18rem" },
                lineHeight: 1.8,
                maxWidth: "600px",
                mb: { xs: 4, md: 5 },
                fontWeight: 400,
              }}
            >
              Aetibar is an engineering and creative studio. We build custom websites,
              scalable web and mobile applications, and intelligent AI automation for
              ambitious companies that value craftsmanship, transparency, and measurable growth.
            </Typography>

            {/* Action CTAs */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 2, sm: 2.5 },
                alignItems: "center",
              }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                sx={{
                  bgcolor: "#0E172A",
                  color: "#FFFFFF",
                  px: { xs: 3.5, md: 4.5 },
                  py: { xs: 1.4, md: 1.6 },
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 600,
                  borderRadius: "6px",
                  boxShadow: "0 8px 24px rgba(14, 23, 42, 0.12)",
                  "&:hover": {
                    bgcolor: "#1E293B",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 30px rgba(14, 23, 42, 0.18)",
                  },
                }}
              >
                Start a Project
              </Button>

              <Button
                component="a"
                href="#selected-work"
                onClick={handleScrollToWork}
                variant="outlined"
                sx={{
                  borderColor: "#D5D2C9",
                  color: "#111215",
                  bgcolor: "#FFFFFF",
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.4, md: 1.6 },
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 600,
                  borderRadius: "6px",
                  "&:hover": {
                    borderColor: "#0E172A",
                    bgcolor: "#FAF9F5",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Explore Our Work
              </Button>
            </Box>
          </Grid>

          {/* Right Column: Offset Architectural Visual Framing */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: "100%", lg: "500px" },
                mx: "auto",
              }}
            >
              {/* Outer Decorative Architectural Border Frame */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "14px",
                  p: 1.5,
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(17, 18, 21, 0.1)",
                  boxShadow: "0 20px 50px rgba(17, 18, 21, 0.06)",
                }}
              >
                {/* Visual Image Container */}
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 320, sm: 400, md: 480, lg: 520 },
                    width: "100%",
                    borderRadius: "10px",
                    overflow: "hidden",
                    bgcolor: "#EAE7DE",
                  }}
                >
                  <Image
                    src="/images/home/hero-agency-showcase.jpg"
                    alt="Aetibar Digital Agency — Web, Mobile & Product Engineering Showcase"
                    fill
                    priority
                    style={{
                      objectFit: "cover",
                    }}
                    sizes="(max-width: 1200px) 100vw, 40vw"
                  />
                  {/* Subtle Corner Vignette */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(14, 23, 42, 0.02) 0%, rgba(14, 23, 42, 0.2) 100%)",
                    }}
                  />

                  {/* Agency Discipline Metadata Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      right: 16,
                      bgcolor: "rgba(250, 249, 245, 0.96)",
                      backdropFilter: "blur(8px)",
                      p: 2,
                      borderRadius: "6px",
                      border: "1px solid rgba(17, 18, 21, 0.08)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#0E7490",
                          fontWeight: 800,
                          fontSize: "0.72rem",
                          letterSpacing: "0.1em",
                          display: "block",
                        }}
                      >
                        CORE DISCIPLINES // DIGITAL PRODUCT STUDIO
                      </Typography>
                      <Typography
                        sx={{
                          color: "#0E172A",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Web Platforms &bull; Mobile Apps &bull; AI Systems
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "#10B981",
                        boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.2)",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Hero Bottom Architectural Discipline Strip */}
      <Container maxWidth="xl" sx={{ mt: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            pt: 3,
            borderTop: "1px solid rgba(17, 18, 21, 0.08)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#6B6E76",
              fontWeight: 600,
              fontSize: "0.78rem",
              letterSpacing: "0.08em",
            }}
          >
            DISCIPLINES: FULL-STACK WEB &bull; MOBILE &bull; AI AGENTS &bull; SEO &bull; PERFORMANCE MARKETING
          </Typography>

          <Box
            component="a"
            href="#trust-intro"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
              color: "#5E6068",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              transition: "color 0.2s ease",
              "&:hover": {
                color: "#0E172A",
              },
            }}
          >
            SCROLL TO EXPLORE
            <Box
              sx={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "1px solid rgba(17, 18, 21, 0.15)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowDownwardIcon sx={{ fontSize: 13 }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
