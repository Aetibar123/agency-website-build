"use client";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { WorkProject } from "../../data/workData";

export interface ServicePageProps {
  badge: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  whoIsItFor: {
    title: string;
    desc: string;
  }[];
  problemsAddressed: {
    problem: string;
    howWeHelp: string;
  }[];
  deliverables: {
    title: string;
    desc: string;
    items?: string[];
  }[];
  benefits: {
    title: string;
    desc: string;
  }[];
  processSteps: {
    num: string;
    title: string;
    desc: string;
  }[];
  relevantProjects?: WorkProject[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export default function ServicePageLayout({
  badge,
  title,
  tagline,
  description,
  icon,
  whoIsItFor,
  problemsAddressed,
  deliverables,
  benefits,
  processSteps,
  relevantProjects = [],
  faqs,
  ctaTitle = "Have a Project in Mind?",
  ctaDescription = "Tell us what your business needs. We'll discuss your goals and the right approach for your project.",
}: ServicePageProps) {
  return (
    <Box sx={{ bgcolor: "#FAF8F5", color: "#18181B", minHeight: "100vh" }}>
      {/* 1. HERO SECTION */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 10, md: 14 },
          bgcolor: "#FAF8F5",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          {/* Breadcrumb / Back Link */}
          <Box sx={{ mb: 3.5, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#71717A",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              <ArrowBackIcon sx={{ fontSize: 16 }} />
              Back to Home
            </Link>
          </Box>

          <Box sx={{ maxWidth: 880, mx: "auto", textAlign: "center" }}>
            {/* Pill */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 3,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>{icon}</Box>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#EA580C",
                  textTransform: "uppercase",
                }}
              >
                {badge}
              </Typography>
            </Box>

            {/* H1 */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.35rem", sm: "3.25rem", md: "4rem" },
                fontWeight: 700,
                color: "#18181B",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              {title}
            </Typography>

            {/* Subtitle / Tagline */}
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                fontWeight: 600,
                color: "#EA580C",
                lineHeight: 1.5,
                mb: 2,
                maxWidth: 720,
                mx: "auto",
              }}
            >
              {tagline}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", sm: "1.15rem" },
                lineHeight: 1.8,
                color: "#52525B",
                maxWidth: 820,
                mx: "auto",
                mb: 4,
              }}
            >
              {description}
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center", justifyContent: "center" }}>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    px: 4,
                    py: 1.5,
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    borderRadius: "9999px",
                    boxShadow: "0 8px 20px -4px rgba(234, 88, 12, 0.35)",
                    textTransform: "none",
                    "&:hover": {
                      background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                      boxShadow: "0 12px 25px -4px rgba(234, 88, 12, 0.5)",
                    },
                  }}
                >
                  Discuss Your Project
                </Button>
              </Link>

              <Link href="#deliverables" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#18181B",
                    borderColor: "rgba(24, 24, 27, 0.2)",
                    bgcolor: "#FFFFFF",
                    px: 3.5,
                    py: 1.5,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    borderRadius: "9999px",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#EA580C",
                      color: "#EA580C",
                      bgcolor: "rgba(249, 115, 22, 0.04)",
                    },
                  }}
                >
                  View Deliverables
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. WHO THIS SERVICE IS FOR */}
      <Box
        component="section"
        id="who-it-is-for"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 5, md: 7 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#EA580C",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Audience &amp; Fit
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 1.5,
              }}
            >
              Who This Service Is For
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 720, mx: "auto" }}>
              We collaborate with businesses at different stages who need reliable, practical solutions.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {whoIsItFor.map((item, idx) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={idx}>
                <Box
                  sx={{
                    p: 3.5,
                    bgcolor: "#FAF8F5",
                    borderRadius: "16px",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 24, mb: 1.5 }} />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#18181B", mb: 1 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#52525B", fontSize: "0.9rem", lineHeight: 1.65 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 3. BUSINESS PROBLEMS IT HELPS ADDRESS */}
      <Box
        component="section"
        id="problems"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FAF8F5",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 5, md: 7 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#EA580C",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Challenges Solved
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 1.5,
              }}
            >
              Business Problems We Help Address
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 720, mx: "auto" }}>
              Here are common operational and digital hurdles our clients encounter and how we help resolve them.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {problemsAddressed.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    bgcolor: "#FFFFFF",
                    borderRadius: "16px",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#EF4444",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      mb: 0.8,
                    }}
                  >
                    The Problem
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#18181B", mb: 2 }}
                  >
                    {item.problem}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#16A34A",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      mb: 0.8,
                    }}
                  >
                    How We Help
                  </Typography>
                  <Typography sx={{ color: "#52525B", fontSize: "0.925rem", lineHeight: 1.7 }}>
                    {item.howWeHelp}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. SPECIFIC SERVICES & DELIVERABLES */}
      <Box
        component="section"
        id="deliverables"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 5, md: 7 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#EA580C",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Services &amp; Scope
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 1.5,
              }}
            >
              Specific Services and Deliverables
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 720, mx: "auto" }}>
              Clear, practical deliverables tailored to your business needs without hidden extras or fluff.
            </Typography>
          </Box>

          <Grid container spacing={3.5} sx={{ justifyContent: "center" }}>
            {deliverables.map((item, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4 },
                    bgcolor: "#FAF8F5",
                    borderRadius: "16px",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "1.2rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "#52525B", fontSize: "0.92rem", lineHeight: 1.65, mb: 2.5 }}>
                    {item.desc}
                  </Typography>

                  {item.items && item.items.length > 0 && (
                    <Box sx={{ mt: "auto", pt: 2, borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
                      {item.items.map((subItem, i) => (
                        <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1 }}>
                          <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#EA580C", mt: 0.3 }} />
                          <Typography sx={{ fontSize: "0.85rem", color: "#3F3F46", fontWeight: 500 }}>
                            {subItem}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 5. BUSINESS BENEFITS, EXPLAINED REALISTICALLY */}
      <Box
        component="section"
        id="benefits"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FAF8F5",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 5, md: 7 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#EA580C",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Realistic Outcomes
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 1.5,
              }}
            >
              Business Benefits, Explained Realistically
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 720, mx: "auto" }}>
              We focus on honest, durable benefits that help your business over the long term, rather than exaggerated claims.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {benefits.map((benefit, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    bgcolor: "#FFFFFF",
                    borderRadius: "16px",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#18181B", mb: 1.2 }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography sx={{ color: "#52525B", fontSize: "0.925rem", lineHeight: 1.7 }}>
                    {benefit.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 6. SIMPLE PROCESS */}
      <Box
        component="section"
        id="process"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 5, md: 7 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#EA580C",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                How We Work
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 1.5,
              }}
            >
              A Simple, Step-by-Step Process
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 720, mx: "auto" }}>
              Clear stages with direct communication so you always know what is being delivered.
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            {processSteps.map((step, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={idx}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: "#FAF8F5",
                    borderRadius: "16px",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#EA580C",
                      mb: 1.2,
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#18181B", mb: 1 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography sx={{ color: "#52525B", fontSize: "0.875rem", lineHeight: 1.65 }}>
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 7. RELEVANT EXISTING PROJECTS OR EXAMPLES */}
      {relevantProjects.length > 0 && (
        <Box
          component="section"
          id="projects"
          sx={{
            py: { xs: 10, md: 14 },
            bgcolor: "#FAF8F5",
            borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 5, md: 7 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.5,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "#EA580C",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Real Projects
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.85rem", sm: "2.5rem" },
                  fontWeight: 700,
                  color: "#18181B",
                  letterSpacing: "-0.03em",
                  mb: 1,
                }}
              >
                Relevant Examples &amp; Work
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: "1.05rem", maxWidth: 720, mx: "auto" }}>
                Selected projects and systems built by Aetibar.
              </Typography>
            </Box>

            <Grid container spacing={3.5}>
              {relevantProjects.map((project) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.slug}>
                  <Box
                    sx={{
                      bgcolor: "#FFFFFF",
                      borderRadius: "16px",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Box
                        sx={{
                          position: "relative",
                          width: "100%",
                          height: 200,
                          bgcolor: "#F4F4F5",
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                          <Chip
                            label={project.projectType}
                            size="small"
                            sx={{
                              bgcolor:
                                project.projectType === "Production Build"
                                    ? "#16A34A"
                                    : "#EA580C",
                              color: "#FFFFFF",
                              fontWeight: 700,
                              fontSize: "0.72rem",
                            }}
                          />
                        </Box>
                      </Box>

                      <Box sx={{ p: 3 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#EA580C",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            textTransform: "uppercase",
                            display: "block",
                            mb: 0.5,
                          }}
                        >
                          {project.clientType}
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{ fontSize: "1.15rem", fontWeight: 700, color: "#18181B", mb: 1.2 }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          sx={{ color: "#52525B", fontSize: "0.875rem", lineHeight: 1.65, mb: 2 }}
                        >
                          {project.summary}
                        </Typography>

                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.6 }}>
                          {project.technology.slice(0, 3).map((tech, i) => (
                            <Typography
                              key={i}
                              variant="caption"
                              sx={{
                                px: 1,
                                py: 0.3,
                                borderRadius: "4px",
                                bgcolor: "rgba(24, 24, 27, 0.04)",
                                color: "#52525B",
                                fontSize: "0.72rem",
                                fontWeight: 600,
                              }}
                            >
                              {tech}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ px: 3, pb: 3 }}>
                      <Link href={`/work/${project.slug}`} style={{ textDecoration: "none" }}>
                        <Button
                          variant="text"
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                          sx={{
                            p: 0,
                            color: "#18181B",
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            textTransform: "none",
                            "&:hover": {
                              color: "#EA580C",
                              bgcolor: "transparent",
                            },
                          }}
                        >
                          Read Case Study
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Centered View All Link */}
            <Box sx={{ mt: { xs: 5, md: 6 }, textAlign: "center" }}>
              <Link href="/work" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    color: "#18181B",
                    borderColor: "rgba(24, 24, 27, 0.2)",
                    bgcolor: "#FFFFFF",
                    borderRadius: "9999px",
                    px: 3.5,
                    py: 1.2,
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#EA580C",
                      color: "#EA580C",
                      bgcolor: "rgba(249, 115, 22, 0.04)",
                    },
                  }}
                >
                  View All Projects &amp; Case Studies
                </Button>
              </Link>
            </Box>
          </Container>
        </Box>
      )}

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <Box
        component="section"
        id="faqs"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 840, mx: "auto", mb: { xs: 5, md: 7 }, textAlign: "center" }}>
            <Typography
              variant="caption"
              sx={{
                color: "#EA580C",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                display: "block",
                mb: 1,
              }}
            >
              Got Questions?
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 1.5,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography sx={{ color: "#52525B", fontSize: "1.05rem" }}>
              Honest answers to common questions about our services and delivery.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 840, mx: "auto" }}>
            {faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                elevation={0}
                sx={{
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  borderRadius: "12px !important",
                  mb: 1.5,
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#EA580C" }} />}
                  sx={{ px: 3, py: 1 }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: "1.05rem", color: "#18181B" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography sx={{ color: "#52525B", lineHeight: 1.75, fontSize: "0.95rem" }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 9. CLEAR CONTACT CTA */}
      <Box
        component="section"
        id="contact-cta"
        sx={{
          py: { xs: 10, md: 14 },
          bgcolor: "#FAF8F5",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: 960,
              mx: "auto",
              textAlign: "center",
              p: { xs: 4, sm: 6, md: 8 },
              bgcolor: "#18181B",
              borderRadius: "24px",
              boxShadow: "0 25px 60px -15px rgba(24, 24, 27, 0.4)",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.75rem", md: "3.25rem" },
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              {ctaTitle}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem" },
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: 680,
                mx: "auto",
                lineHeight: 1.75,
                mb: 4,
              }}
            >
              {ctaDescription}
            </Typography>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                sx={{
                  background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
                  color: "#18181B",
                  px: 4.5,
                  py: 1.6,
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: "9999px",
                  boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)",
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                  },
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
