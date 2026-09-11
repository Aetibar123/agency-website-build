"use client";
import React from "react";
import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import { PortfolioProject, getAllProjects } from "../../data/portfolioProjects";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import Image from "next/image";
import CtaSection from "../home/CtaSection";

export default function PortfolioDetailClient({ project }: { project: PortfolioProject }) {
  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0
      ? allProjects[currentIndex - 1]
      : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : allProjects[0];

  return (
    <Box sx={{ bgcolor: "#FAF9F5", minHeight: "100vh" }}>
      {/* Editorial Hero Header */}
      <Box
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 8, md: 12 },
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: "900px" }}>
            {/* In-Page Breadcrumbs */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <Link href="/portfolio" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#0E7490",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  <ArrowBackIcon sx={{ fontSize: 14 }} />
                  Work
                </Typography>
              </Link>
              <Typography sx={{ color: "rgba(17, 18, 21, 0.25)", fontSize: "0.85rem" }}>
                /
              </Typography>
              <Typography
                sx={{
                  color: "#6B6E76",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
              >
                {project.category}
              </Typography>
            </Box>

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
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#0E7490",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  fontSize: "0.78rem",
                }}
              >
                CASE STUDY &bull; {project.category.toUpperCase()}
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                color: "#0E172A",
                fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4.2rem" },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: { xs: 1.1, md: 1.05 },
                textTransform: "uppercase",
                mb: 2.5,
              }}
            >
              {project.title}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                fontSize: { xs: "1rem", md: "1.15rem" },
                mb: 3,
                letterSpacing: "0.02em",
              }}
            >
              Client: {project.client}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4A4D57",
                fontSize: { xs: "1.05rem", md: "1.18rem" },
                lineHeight: 1.8,
                maxWidth: 780,
              }}
            >
              {project.summary}
            </Typography>

            {/* Project Specification Strip */}
            <Box
              sx={{
                mt: 5,
                p: { xs: 2.5, md: 3 },
                borderRadius: "10px",
                bgcolor: "#FFFFFF",
                border: "1px solid rgba(17, 18, 21, 0.08)",
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 2.5,
              }}
            >
              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#6B6E76",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    fontFamily: "monospace",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  CLIENT SECTOR
                </Typography>
                <Typography sx={{ color: "#0E172A", fontWeight: 700, fontSize: "0.95rem" }}>
                  {project.client}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#6B6E76",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    fontFamily: "monospace",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  DELIVERY TIMELINE
                </Typography>
                <Typography sx={{ color: "#0E172A", fontWeight: 700, fontSize: "0.95rem" }}>
                  {project.timeline || "8-12 Weeks"}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#6B6E76",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    fontFamily: "monospace",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  KEY RESULT
                </Typography>
                <Typography sx={{ color: "#059669", fontWeight: 800, fontSize: "0.95rem" }}>
                  {project.metric || "Production Live"}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#6B6E76",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    fontFamily: "monospace",
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  CORE ARCHITECTURE
                </Typography>
                <Typography sx={{ color: "#0E7490", fontWeight: 700, fontSize: "0.95rem" }}>
                  {project.techStack?.[0] || project.category}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Hero Visual Showcase */}
      {project.image && (
        <Container maxWidth="xl" sx={{ pt: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              position: "relative",
              height: { xs: 280, sm: 420, md: 540 },
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(17, 18, 21, 0.08)",
              boxShadow: "0 20px 40px rgba(17, 18, 21, 0.04)",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </Container>
      )}

      {/* Case Study Content & Results Sidebar */}
      <Container maxWidth="xl" sx={{ py: { xs: 10, md: 16 } }}>
        <Grid container spacing={{ xs: 6, lg: 10 }}>
          {/* Main Content Deep Dive */}
          <Grid size={{ xs: 12, lg: 7 }}>
            {/* Phase 01: The Challenge */}
            <Box sx={{ mb: 8 }}>
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
                PHASE 01 &bull; DIAGNOSIS
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "#0E172A",
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: "1.6rem", md: "2.2rem" },
                  letterSpacing: "-0.02em",
                }}
              >
                The Challenge &amp; Problem Statement
              </Typography>
              {project.challenge.map((paragraph, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    color: "#4A4D57",
                    fontSize: { xs: "1rem", md: "1.08rem" },
                    lineHeight: 1.85,
                    mb: 2.5,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>

            <Divider sx={{ my: 6, borderColor: "rgba(17, 18, 21, 0.08)" }} />

            {/* Phase 02: Strategic Approach */}
            <Box sx={{ mb: 8 }}>
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
                PHASE 02 &bull; EXECUTION
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "#0E172A",
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: "1.6rem", md: "2.2rem" },
                  letterSpacing: "-0.02em",
                }}
              >
                Our Strategic &amp; Technical Approach
              </Typography>
              <Box
                sx={{
                  pl: 3,
                  borderLeft: "3px solid #0E7490",
                  mb: 3.5,
                }}
              >
                <Typography
                  sx={{
                    color: "#0E172A",
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                    fontStyle: "italic",
                    fontWeight: 500,
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;We architected a resilient, modular foundation tailored to scale under real business volume.&rdquo;
                </Typography>
              </Box>
              {project.execution.map((paragraph, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    color: "#4A4D57",
                    fontSize: { xs: "1rem", md: "1.08rem" },
                    lineHeight: 1.85,
                    mb: 2.5,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>

            <Divider sx={{ my: 6, borderColor: "rgba(17, 18, 21, 0.08)" }} />

            {/* Phase 03: Solution & Impact */}
            <Box sx={{ mb: 6 }}>
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
                PHASE 03 &bull; OUTCOME
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "#0E172A",
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: "1.6rem", md: "2.2rem" },
                  letterSpacing: "-0.02em",
                }}
              >
                The Solution &amp; Long-Term Impact
              </Typography>
              {project.solution.map((paragraph, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    color: "#4A4D57",
                    fontSize: { xs: "1rem", md: "1.08rem" },
                    lineHeight: 1.85,
                    mb: 2.5,
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Results Sidebar */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ position: { lg: "sticky" }, top: { lg: 120 } }}>
              {/* Project Results Card */}
              <Box
                sx={{
                  bgcolor: "#F2F0EB",
                  borderRadius: "12px",
                  p: { xs: 4, sm: 5 },
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  mb: 4,
                }}
              >
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
                  MEASURABLE OUTCOMES
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: "#0E172A",
                    fontSize: { xs: "1.5rem", md: "1.85rem" },
                    letterSpacing: "-0.02em",
                    mb: 3.5,
                  }}
                >
                  Project Results
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                  {project.results.map((result, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                        bgcolor: "#FAF9F5",
                        p: 2.5,
                        borderRadius: "8px",
                        border: "1px solid rgba(17, 18, 21, 0.06)",
                      }}
                    >
                      <CheckCircleIcon
                        sx={{ color: "#0E7490", mt: 0.2, fontSize: 20 }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          lineHeight: 1.6,
                          color: "#111215",
                        }}
                      >
                        {result}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Sidebar Action Box */}
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4 },
                  bgcolor: "#FFFFFF",
                  borderRadius: "10px",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: "#0E172A",
                    mb: 1.5,
                    fontSize: "1.2rem",
                  }}
                >
                  Need a Similar Solution?
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#5E6068",
                    mb: 3,
                    lineHeight: 1.7,
                    fontSize: "0.92rem",
                  }}
                >
                  Partner with us to engineer scalable systems, automate manual operations, and accelerate growth.
                </Typography>
                <Box
                  component={Link}
                  href="/contact"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 3.5,
                    py: 1.3,
                    bgcolor: "#0E172A",
                    color: "#FFFFFF",
                    borderRadius: "6px",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      bgcolor: "#1E293B",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  Start Your Project
                  <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 4. PREVIOUS / NEXT CASE STUDY NAVIGATOR */}
      <Box
        sx={{
          bgcolor: "#F2F0EB",
          py: { xs: 8, md: 10 },
          borderTop: "1px solid rgba(17, 18, 21, 0.08)",
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontSize: "0.78rem",
              }}
            >
              EXPLORE MORE CASE STUDIES
            </Typography>
            <Link href="/portfolio" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#0E172A",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  "&:hover": { color: "#0E7490" },
                }}
              >
                View All Work &rarr;
              </Typography>
            </Link>
          </Box>

          <Grid container spacing={3}>
            {/* Previous Project Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={Link}
                href={`/portfolio/${prevProject.slug}`}
                sx={{
                  p: { xs: 3, sm: 4 },
                  bgcolor: "#FAF9F5",
                  borderRadius: "10px",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  display: "block",
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "#0E7490",
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 24px rgba(17, 18, 21, 0.04)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <ArrowBackIcon sx={{ color: "#0E7490", fontSize: 16 }} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#0E7490",
                      fontWeight: 700,
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                    }}
                  >
                    PREVIOUS CASE STUDY
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#0E172A",
                    fontWeight: 800,
                    fontSize: { xs: "1.15rem", md: "1.3rem" },
                    mb: 1,
                  }}
                >
                  {prevProject.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#5E6068", fontSize: "0.88rem" }}>
                  {prevProject.category} &bull; {prevProject.client}
                </Typography>
              </Box>
            </Grid>

            {/* Next Project Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component={Link}
                href={`/portfolio/${nextProject.slug}`}
                sx={{
                  p: { xs: 3, sm: 4 },
                  bgcolor: "#FAF9F5",
                  borderRadius: "10px",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  display: "block",
                  textDecoration: "none",
                  textAlign: { md: "right" },
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "#0E7490",
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 24px rgba(17, 18, 21, 0.04)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { md: "flex-end" },
                    gap: 1,
                    mb: 1.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#0E7490",
                      fontWeight: 700,
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                    }}
                  >
                    NEXT CASE STUDY
                  </Typography>
                  <ArrowForwardIcon sx={{ color: "#0E7490", fontSize: 16 }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#0E172A",
                    fontWeight: 800,
                    fontSize: { xs: "1.15rem", md: "1.3rem" },
                    mb: 1,
                  }}
                >
                  {nextProject.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#5E6068", fontSize: "0.88rem" }}>
                  {nextProject.category} &bull; {nextProject.client}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <CtaSection />
    </Box>
  );
}
