import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { workProjects, getWorkProjectBySlug } from "../../../data/workData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return workProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Aetibar",
    };
  }

  const title = `${project.title} | Case Study | Aetibar`;
  const description = project.summary;
  const canonicalUrl = `https://www.aetibar.in/work/${project.slug}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      project.clientType,
      project.category || "Digital Solutions",
      "Aetibar Case Study",
      "Web Development",
      "Aetibar Portfolio",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Aetibar",
      type: "article",
      locale: "en_IN",
      images: [
        {
          url: `https://www.aetibar.in${project.image}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@Aetibar_",
      images: [`https://www.aetibar.in${project.image}`],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const categoryName = project.category || "Websites & E-commerce";
  const relatedServiceHref = project.relatedService?.href || "/services";
  const relatedServiceTitle = project.relatedService?.title || "Our Digital Services";
  const relatedServiceDesc =
    project.relatedService?.description ||
    "Explore how Aetibar builds reliable websites, mobile applications, AI workflows, and digital marketing systems.";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.summary,
    image: `https://www.aetibar.in${project.image}`,
    author: {
      "@type": "Organization",
      name: "Aetibar",
      url: "https://www.aetibar.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Aetibar",
      url: "https://www.aetibar.in",
      logo: "https://www.aetibar.in/logo.jpeg",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.aetibar.in/work/${project.slug}`,
    },
  };

  return (
    <main style={{ backgroundColor: "#FFFFFF", color: "#18181B" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* ========================================================================= */}
      {/* 1. SECTION 1: PROJECT HERO                                                */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          pt: { xs: 14, sm: 16, md: 20 },
          pb: { xs: 8, md: 12 },
          bgcolor: "#FAF8F5",
          borderBottom: "1px solid rgba(228, 228, 231, 0.9)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          {/* Breadcrumb Navigation */}
          <Box sx={{ mb: 3.5, display: "flex", alignItems: "center", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
            <Link href="/work" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: "#71717A",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  "&:hover": { color: "#EA580C" },
                }}
              >
                <ArrowBackIcon sx={{ fontSize: 14 }} />
                Back to All Work
              </Box>
            </Link>
            <Typography sx={{ color: "#D4D4D8", fontSize: "0.85rem" }}>/</Typography>
            <Typography sx={{ color: "#71717A", fontSize: "0.85rem", fontWeight: 500 }}>
              {categoryName}
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 940, mx: "auto", textAlign: "center", mb: 5 }}>
            {/* Project Label & Category */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.2, flexWrap: "wrap", mb: 2.5 }}>
              <Chip
                label={project.projectType}
                size="small"
                sx={{
                  bgcolor: "rgba(249, 115, 22, 0.1)",
                  color: "#EA580C",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  borderRadius: "9999px",
                  border: "1px solid rgba(249, 115, 22, 0.3)",
                }}
              />
              <Chip
                label={categoryName}
                size="small"
                sx={{
                  bgcolor: "#FFFFFF",
                  color: "#52525B",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                }}
              />
            </Box>

            {/* Main Title (H1) */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.1rem", sm: "3rem", md: "3.6rem" },
                fontWeight: 700,
                color: "#18181B",
                lineHeight: { xs: 1.2, md: 1.15 },
                letterSpacing: "-0.03em",
                mb: 2.5,
              }}
            >
              {project.title}
            </Typography>

            {/* Short Business Summary */}
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", sm: "1.2rem" },
                lineHeight: 1.75,
                color: "#52525B",
                maxWidth: 820,
                mx: "auto",
              }}
            >
              {project.summary}
            </Typography>
          </Box>

          {/* Key Information Badges Strip */}
          <Grid container spacing={2} sx={{ maxWidth: 960, mx: "auto", mb: 6 }}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "14px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 2px 6px rgba(24, 24, 27, 0.02)",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 0.5 }}>
                  <BusinessOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                    Business Type
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B" }}>
                  {project.businessType || project.clientType}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "14px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 2px 6px rgba(24, 24, 27, 0.02)",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 0.5 }}>
                  <CategoryOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                    Solution Area
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B" }}>
                  {categoryName}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  p: 2.5,
                  borderRadius: "14px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 2px 6px rgba(24, 24, 27, 0.02)",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 0.5 }}>
                  <FlagOutlinedIcon sx={{ fontSize: 18, color: "#EA580C" }} />
                  <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717A", textTransform: "uppercase" }}>
                    Project Status
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B" }}>
                  {project.projectType}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Featured Visual Frame */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 1100,
              mx: "auto",
              height: { xs: 260, sm: 420, md: 540 },
              borderRadius: { xs: "16px", md: "24px" },
              overflow: "hidden",
              border: "1px solid rgba(228, 228, 231, 0.9)",
              boxShadow: "0 14px 40px -10px rgba(24, 24, 27, 0.08)",
              bgcolor: "#F4F4F5",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 2. SECTION 2: ABOUT THE BUSINESS                                          */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF", borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", color: "#EA580C", textTransform: "uppercase" }}>
                The Client Profile
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              About the Business
            </Typography>

            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Understanding the commercial background, customer demographic, and operational environment.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 1040, mx: "auto" }}>
            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: "stretch" }}>
              {/* Narrative Box */}
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    borderRadius: "20px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.06em", textTransform: "uppercase", mb: 2 }}>
                    Business Context &amp; Operations
                  </Typography>

                  <Typography sx={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#27272A", mb: 2.5 }}>
                    {project.aboutBusiness || project.context}
                  </Typography>

                  <Typography sx={{ fontSize: "0.92rem", lineHeight: 1.75, color: "#71717A" }}>
                    Understanding daily operational realities allowed us to engineer a focused solution that addressed practical business needs rather than superficial technical features.
                  </Typography>
                </Box>
              </Grid>

              {/* Snapshot Box */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    p: { xs: 3.5, sm: 4.5 },
                    borderRadius: "20px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.06em", textTransform: "uppercase", mb: 2.5 }}>
                    Business Snapshot
                  </Typography>

                  <Box sx={{ mb: 2.5, pb: 2.5, borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
                    <Typography sx={{ fontSize: "0.78rem", color: "#71717A", fontWeight: 600, mb: 0.5 }}>
                      Business Classification
                    </Typography>
                    <Typography sx={{ fontSize: "1rem", color: "#18181B", fontWeight: 700 }}>
                      {project.businessType || project.clientType}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2.5, pb: 2.5, borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
                    <Typography sx={{ fontSize: "0.78rem", color: "#71717A", fontWeight: 600, mb: 0.5 }}>
                      Industry Domain
                    </Typography>
                    <Typography sx={{ fontSize: "1rem", color: "#18181B", fontWeight: 700 }}>
                      {project.industry || "Commercial & Digital Services"}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: "0.78rem", color: "#71717A", fontWeight: 600, mb: 0.5 }}>
                      Primary Business Need
                    </Typography>
                    <Typography sx={{ fontSize: "0.98rem", color: "#EA580C", fontWeight: 700 }}>
                      {project.primaryNeed || project.summary}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 3. SECTION 3: THE SITUATION BEFORE                                        */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FAF8F5", borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(220, 38, 38, 0.08)",
                border: "1px solid rgba(220, 38, 38, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", color: "#DC2626", textTransform: "uppercase" }}>
                The Operational Bottlenecks
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Before the Solution
            </Typography>

            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              The everyday friction and practical limitations the business encountered prior to this implementation.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {project.challenge.map((issue, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    borderRadius: "16px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    boxShadow: "0 2px 10px rgba(24, 24, 27, 0.02)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      bgcolor: "rgba(220, 38, 38, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#DC2626",
                      mb: 2,
                    }}
                  >
                    <CloseRoundedIcon sx={{ fontSize: 20 }} />
                  </Box>

                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#DC2626", letterSpacing: "0.04em", textTransform: "uppercase", mb: 1 }}>
                    Friction Point 0{idx + 1}
                  </Typography>

                  <Typography sx={{ fontSize: "0.95rem", color: "#3F3F46", lineHeight: 1.7, fontWeight: 500 }}>
                    {issue}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 4. SECTION 4: OUR ANALYSIS                                                */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF", borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", color: "#EA580C", textTransform: "uppercase" }}>
                Strategic Diagnosis
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Our Analysis
            </Typography>

            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              We understand the business problem and operational context before deciding what to build or launch.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {/* Step 1: Business Situation */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4 },
                  borderRadius: "18px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <SearchOutlinedIcon sx={{ color: "#EA580C", fontSize: 22 }} />
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    1. Business Situation
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}>
                  What the business was experiencing
                </Typography>
                <Typography sx={{ fontSize: "0.92rem", color: "#52525B", lineHeight: 1.75 }}>
                  {project.analysis?.situation || project.context}
                </Typography>
              </Box>
            </Grid>

            {/* Step 2: Analysis & Friction */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4 },
                  borderRadius: "18px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <LightbulbOutlinedIcon sx={{ color: "#EA580C", fontSize: 22 }} />
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    2. The Root Bottleneck
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}>
                  Where the workflow stalled
                </Typography>
                <Typography sx={{ fontSize: "0.92rem", color: "#52525B", lineHeight: 1.75 }}>
                  {project.analysis?.analysis || project.approach[0]}
                </Typography>
              </Box>
            </Grid>

            {/* Step 3: Digital Opportunity */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: { xs: 3.5, sm: 4 },
                  borderRadius: "18px",
                  bgcolor: "#FAF8F5",
                  border: "1px solid rgba(249, 115, 22, 0.3)",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <TrendingUpOutlinedIcon sx={{ color: "#EA580C", fontSize: 22 }} />
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#EA580C", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    3. Digital Opportunity
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 700, color: "#18181B", mb: 1.5 }}>
                  Why the planned solution works
                </Typography>
                <Typography sx={{ fontSize: "0.92rem", color: "#52525B", lineHeight: 1.75 }}>
                  {project.analysis?.opportunity || project.approach[1] || project.approach[0]}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 5. SECTION 5: WHAT WE BUILT                                               */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FAF8F5", borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", color: "#EA580C", textTransform: "uppercase" }}>
                The Solution Delivery
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              What We Built
            </Typography>

            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              A targeted digital solution addressing the identified bottlenecks with clean functionality and simple interfaces.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {(project.features && project.features.length > 0
              ? project.features
              : project.solution.map((item) => ({ title: "Key Solution Feature", desc: item }))
            ).map((feat, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    borderRadius: "18px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    boxShadow: "0 2px 10px rgba(24, 24, 27, 0.02)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        bgcolor: "rgba(249, 115, 22, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#EA580C",
                        mb: 2,
                      }}
                    >
                      <BuildCircleOutlinedIcon sx={{ fontSize: 22 }} />
                    </Box>

                    <Typography sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#18181B", mb: 1 }}>
                      {feat.title}
                    </Typography>

                    <Typography sx={{ fontSize: "0.88rem", color: "#52525B", lineHeight: 1.65 }}>
                      {feat.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 6. SECTION 6: HOW IT WORKS (SIMPLE STEP FLOW)                              */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF", borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", color: "#EA580C", textTransform: "uppercase" }}>
                Simplified Workflow
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              How It Works
            </Typography>

            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              A straightforward step-by-step path designed for smooth customer interactions and minimal staff friction.
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            {(project.workflowSteps && project.workflowSteps.length > 0
              ? project.workflowSteps
              : [
                  { step: "01", title: "Customer Interaction", desc: "Customer discovers service and initiates request." },
                  { step: "02", title: "Digital Processing", desc: "System organizes inquiry with relevant details." },
                  { step: "03", title: "Team Action", desc: "Team reviews and confirms the requested service." },
                  { step: "04", title: "Service Delivery", desc: "Transaction or booking completes with full visibility." },
                ]
            ).map((st, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    borderRadius: "16px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                    <Typography sx={{ fontSize: "0.85rem", fontWeight: 800, color: "#EA580C", fontFamily: "monospace" }}>
                      STEP {st.step}
                    </Typography>
                    {idx < 3 && (
                      <ArrowForwardIcon sx={{ fontSize: 16, color: "#A1A1AA", display: { xs: "none", md: "block" } }} />
                    )}
                  </Box>

                  <Typography sx={{ fontSize: "1.05rem", fontWeight: 700, color: "#18181B", mb: 1 }}>
                    {st.title}
                  </Typography>

                  <Typography sx={{ fontSize: "0.88rem", color: "#52525B", lineHeight: 1.65 }}>
                    {st.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 7. SECTION 7: BEFORE VS AFTER                                             */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FAF8F5", borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", color: "#EA580C", textTransform: "uppercase" }}>
                Practical Transformation
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Before vs After
            </Typography>

            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              A clear side-by-side comparison of daily operations before and after the solution was introduced.
            </Typography>
          </Box>

          <Box sx={{ maxWidth: 1000, mx: "auto" }}>
            {(project.beforeAfter && project.beforeAfter.length > 0
              ? project.beforeAfter
              : [
                  {
                    before: project.challenge[0] || "Operations depended heavily on manual processes.",
                    after: project.solution[0] || "Structured digital workflow handles routine tasks automatically.",
                  },
                  {
                    before: project.challenge[1] || "Customers had limited online service visibility.",
                    after: project.solution[1] || "Clear online presentation makes discovery and contact simple.",
                  },
                ]
            ).map((comp, idx) => (
              <Box
                key={idx}
                sx={{
                  mb: 3,
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: "18px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  boxShadow: "0 2px 8px rgba(24, 24, 27, 0.02)",
                }}
              >
                <Grid container spacing={3} sx={{ alignItems: "center" }}>
                  {/* Before Column */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <Box
                        sx={{
                          px: 1.2,
                          py: 0.3,
                          borderRadius: "6px",
                          bgcolor: "rgba(220, 38, 38, 0.1)",
                          color: "#DC2626",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          flexShrink: 0,
                          mt: 0.2,
                        }}
                      >
                        Before
                      </Box>
                      <Typography sx={{ fontSize: "0.92rem", color: "#52525B", lineHeight: 1.65 }}>
                        {comp.before}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* After Column */}
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                      <Box
                        sx={{
                          px: 1.2,
                          py: 0.3,
                          borderRadius: "6px",
                          bgcolor: "rgba(220, 38, 38, 0.1)",
                          color: "#16A34A",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          flexShrink: 0,
                          mt: 0.2,
                        }}
                      >
                        After
                      </Box>
                      <Typography sx={{ fontSize: "0.92rem", color: "#18181B", fontWeight: 600, lineHeight: 1.65 }}>
                        {comp.after}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 8. SECTION 8: BUSINESS VALUE                                              */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FFFFFF", borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", color: "#EA580C", textTransform: "uppercase" }}>
                Commercial Impact
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Business Value Delivered
            </Typography>

            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Why this solution matters to business owners, operators, and customer support teams.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {(project.businessValues && project.businessValues.length > 0
              ? project.businessValues
              : [
                  { title: "Organized Operations", desc: "Replaces scattered inquiries with a clean, structured workflow." },
                  { title: "Better Customer Trust", desc: "Clear information and fast responses increase customer confidence." },
                  { title: "Team Productivity", desc: "Frees staff from repetitive phone calls to focus on core work." },
                  { title: "Sustainable Growth", desc: "Provides a reliable digital foundation ready for future marketing." },
                ]
            ).map((val, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    borderRadius: "18px",
                    bgcolor: "#FAF8F5",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                    <CheckCircleOutlinedIcon sx={{ color: "#EA580C", fontSize: 20 }} />
                    <Typography sx={{ fontSize: "1rem", fontWeight: 700, color: "#18181B" }}>
                      {val.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "0.88rem", color: "#52525B", lineHeight: 1.7 }}>
                    {val.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 9. SECTION 9: PROJECT OUTCOME                                             */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: "#FAF8F5", borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: "9999px",
                bgcolor: "rgba(22, 163, 74, 0.08)",
                border: "1px solid rgba(22, 163, 74, 0.25)",
                mb: 2.5,
              }}
            >
              <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", color: "#16A34A", textTransform: "uppercase" }}>
                Concrete Results
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                color: "#18181B",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Project Outcome
            </Typography>

            <Typography sx={{ fontSize: "1.05rem", color: "#52525B", lineHeight: 1.75 }}>
              Realistic qualitative improvements achieved through clear planning and purposeful execution.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ maxWidth: 1000, mx: "auto" }}>
            {project.outcome.map((out, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Box
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    borderRadius: "16px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    boxShadow: "0 2px 10px rgba(24, 24, 27, 0.02)",
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                    <VerifiedOutlinedIcon sx={{ color: "#16A34A", fontSize: 22 }} />
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Delivered Result 0{idx + 1}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "0.95rem", color: "#18181B", fontWeight: 600, lineHeight: 1.65 }}>
                    {out}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 10. SECTION 10: TECHNOLOGY USED                                           */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: "#FFFFFF", borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 760, mx: "auto", textAlign: "center" }}>
            <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", color: "#71717A", textTransform: "uppercase", mb: 1.5 }}>
              Tools &amp; Stack
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.4rem", sm: "1.75rem" },
                fontWeight: 700,
                color: "#18181B",
                mb: 3,
              }}
            >
              Technology Used
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1.2 }}>
              {project.technology.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  sx={{
                    bgcolor: "#FAF8F5",
                    color: "#27272A",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    px: 1.5,
                    py: 1,
                    borderRadius: "9999px",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 11. SECTION 11: RELATED SERVICES                                          */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 10, md: 12 }, bgcolor: "#FAF8F5", borderBottom: "1px solid rgba(228, 228, 231, 0.8)" }}>
        <Container maxWidth="xl">
          <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center" }}>
            <Box
              sx={{
                p: { xs: 4, sm: 6 },
                borderRadius: "22px",
                bgcolor: "#FFFFFF",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                boxShadow: "0 6px 24px -6px rgba(24, 24, 27, 0.04)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
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
                  mb: 2.5,
                }}
              >
                <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", color: "#EA580C", textTransform: "uppercase" }}>
                  Our Capabilities
                </Typography>
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.45rem", sm: "1.85rem" },
                  fontWeight: 700,
                  color: "#18181B",
                  mb: 2,
                  maxWidth: 680,
                }}
              >
                This type of work is part of our {relatedServiceTitle} service.
              </Typography>

              <Typography sx={{ fontSize: "0.95rem", color: "#52525B", lineHeight: 1.75, maxWidth: 620, mx: "auto", mb: 3.5 }}>
                {relatedServiceDesc}
              </Typography>

              <Link href={relatedServiceHref} style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    borderColor: "#EA580C",
                    color: "#EA580C",
                    bgcolor: "rgba(249, 115, 22, 0.04)",
                    px: 3.5,
                    py: 1.3,
                    borderRadius: "9999px",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#EA580C",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  Explore {relatedServiceTitle}
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 12. SECTION 12: BUSINESS CTA                                              */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 12, md: 16 }, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: 920,
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
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3.2rem" },
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                mb: 2,
              }}
            >
              Have a Similar Business Challenge?
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem" },
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: 640,
                mx: "auto",
                lineHeight: 1.75,
                mb: 4,
              }}
            >
              Tell us what your business needs. We&apos;ll discuss your goals, explain the right digital approach, and provide a clear plan without technical jargon.
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
                Discuss Your Project
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
