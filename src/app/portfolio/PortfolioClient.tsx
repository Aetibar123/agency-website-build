"use client";
import React, { useState, useMemo } from "react";
import { Box, Container, Typography, Grid, Button, InputBase, Paper } from "@mui/material";
import { getAllProjects, PortfolioProject } from "../../data/portfolioProjects";
import PortfolioCard from "../../components/portfolio/PortfolioCard";
import CtaSection from "../../components/home/CtaSection";
import ServiceFaqSection from "../../components/services/ServiceFaqSection";
import Image from "next/image";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import CloseIcon from "@mui/icons-material/Close";

const categories = [
  "All",
  "Web Development",
  "App Development",
  "AI Automation",
  "SEO",
  "Digital Marketing",
  "Graphics Designing",
];

const portfolioFaqs = [
  {
    question: "How long does an end-to-end custom project usually take?",
    answer:
      "Timelines vary by scope: targeted sprint deliverables (e.g. Brand Identity or SEO Audit & Architecture) typically take 4 to 6 weeks, while complete enterprise web applications or cross-platform mobile apps take between 8 to 14 weeks from technical discovery to production deployment.",
  },
  {
    question: "Do you provide complete source code and design file ownership?",
    answer:
      "Yes, unconditionally. Upon project sign-off and completion, 100% of intellectual property, Git repositories, Figma design systems, database schemas, and deployment workflows are transferred directly to your organization.",
  },
  {
    question: "How do we track progress during the project build?",
    answer:
      "We operate in weekly sprints with direct engineer access. You receive continuous staging preview links, sprint demos, and weekly status reviews so you can test working software as it is built.",
  },
  {
    question: "What happens after the platform or application launches?",
    answer:
      "Every project includes a 30-day post-launch warranty period for stabilization and bug fixes. We also offer dedicated ongoing engineering and growth retainers for feature expansion, performance monitoring, and continuous optimization.",
  },
];

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const allProjects = getAllProjects();

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allProjects.length };
    categories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = allProjects.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, [allProjects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        activeFilter === "All" || project.category === activeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.techStack?.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [allProjects, activeFilter, searchQuery]);

  // Spotlight Project (featured first project of filtered or overall)
  const spotlightProject: PortfolioProject = useMemo(() => {
    if (activeFilter !== "All") {
      const match = allProjects.find((p) => p.category === activeFilter);
      if (match) return match;
    }
    return allProjects[0];
  }, [allProjects, activeFilter]);

  return (
    <Box sx={{ bgcolor: "#FAF9F5", minHeight: "100vh", color: "#111215" }}>
      {/* 1. EDITORIAL HERO & TELEMETRY */}
      <Box
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 8, md: 12 },
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "center" }}>
            {/* Left Hero Content */}
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
                <TrendingUpIcon sx={{ color: "#0E7490", fontSize: 18 }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: "#0E7490",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    fontSize: "0.78rem",
                  }}
                >
                  PROVEN COMMERCIAL RESULTS &bull; CASE STUDIES
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  color: "#0E172A",
                  fontSize: { xs: "2.35rem", sm: "3.5rem", md: "4.4rem" },
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: { xs: 1.1, md: 1.05 },
                  textTransform: "uppercase",
                  mb: 3,
                }}
              >
                Selected Work. <br />
                <Box component="span" sx={{ color: "#0E7490" }}>
                  Engineered for Impact.
                </Box>
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
                Explore custom web applications, cross-platform mobile apps, autonomous AI workflows,
                and enterprise search migrations engineered for high-growth businesses.
              </Typography>

              {/* 3 Quick Highlight Metrics */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <VerifiedIcon sx={{ fontSize: 20, color: "#0E7490" }} />
                  <Typography sx={{ fontWeight: 700, fontSize: "0.92rem", color: "#0E172A" }}>
                    100% On-Time Sprints
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.92rem", color: "#5E6068" }}>
                    Full Source Code Transfer
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: "0.92rem", color: "#5E6068" }}>
                    Direct Engineer Access
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Studio Telemetry Card */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box
                sx={{
                  bgcolor: "#FFFFFF",
                  borderRadius: "12px",
                  p: 3,
                  border: "1px solid rgba(17, 18, 21, 0.12)",
                  boxShadow: "0 20px 40px rgba(17, 18, 21, 0.06)",
                }}
              >
                {/* Header */}
                <Box
                  sx={{
                    pb: 1.5,
                    mb: 2,
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
                    STUDIO_DELIVERY_SPEC // ACTIVE
                  </Typography>
                  <Box
                    sx={{
                      px: 1,
                      py: 0.2,
                      bgcolor: "rgba(16, 185, 129, 0.1)",
                      borderRadius: "3px",
                      color: "#059669",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      fontFamily: "monospace",
                    }}
                  >
                    ● 100% PRODUCTION READY
                  </Box>
                </Box>

                {/* 4 Telemetry Metrics */}
                <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}>
                  <Box sx={{ p: 1.8, borderRadius: "8px", bgcolor: "#FAF9F5", border: "1px solid rgba(17, 18, 21, 0.06)" }}>
                    <Typography variant="caption" sx={{ color: "#6B6E76", fontFamily: "monospace", fontSize: "0.68rem", fontWeight: 700, display: "block", mb: 0.4 }}>
                      PAGE SPEED BENCHMARK
                    </Typography>
                    <Typography sx={{ color: "#0E172A", fontWeight: 800, fontSize: "1.1rem" }}>
                      0.38s FCP
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#0E7490", fontWeight: 600, fontSize: "0.72rem" }}>
                      Top 1% Lighthouse
                    </Typography>
                  </Box>

                  <Box sx={{ p: 1.8, borderRadius: "8px", bgcolor: "#FAF9F5", border: "1px solid rgba(17, 18, 21, 0.06)" }}>
                    <Typography variant="caption" sx={{ color: "#6B6E76", fontFamily: "monospace", fontSize: "0.68rem", fontWeight: 700, display: "block", mb: 0.4 }}>
                      INDEXED URL SCALE
                    </Typography>
                    <Typography sx={{ color: "#0E172A", fontWeight: 800, fontSize: "1.1rem" }}>
                      500K+ URLs
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#059669", fontWeight: 600, fontSize: "0.72rem" }}>
                      0% 404 Loss Rate
                    </Typography>
                  </Box>

                  <Box sx={{ p: 1.8, borderRadius: "8px", bgcolor: "#FAF9F5", border: "1px solid rgba(17, 18, 21, 0.06)" }}>
                    <Typography variant="caption" sx={{ color: "#6B6E76", fontFamily: "monospace", fontSize: "0.68rem", fontWeight: 700, display: "block", mb: 0.4 }}>
                      AI SUPPORT WORKFLOWS
                    </Typography>
                    <Typography sx={{ color: "#0E172A", fontWeight: 800, fontSize: "1.1rem" }}>
                      &lt; 5s Resolution
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#0E7490", fontWeight: 600, fontSize: "0.72rem" }}>
                      70% Deflection
                    </Typography>
                  </Box>

                  <Box sx={{ p: 1.8, borderRadius: "8px", bgcolor: "#FAF9F5", border: "1px solid rgba(17, 18, 21, 0.06)" }}>
                    <Typography variant="caption" sx={{ color: "#6B6E76", fontFamily: "monospace", fontSize: "0.68rem", fontWeight: 700, display: "block", mb: 0.4 }}>
                      IP &amp; CODEBASE
                    </Typography>
                    <Typography sx={{ color: "#0E172A", fontWeight: 800, fontSize: "1.1rem" }}>
                      100% Transfer
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#059669", fontWeight: 600, fontSize: "0.72rem" }}>
                      Zero Vendor Lock-in
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2. SPOTLIGHT MARQUEE CASE STUDY */}
      {spotlightProject && !searchQuery && (
        <Box sx={{ bgcolor: "#F2F0EB", py: { xs: 8, md: 12 }, borderBottom: "1px solid rgba(17, 18, 21, 0.08)" }}>
          <Container maxWidth="xl">
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                }}
              >
                SPOTLIGHT CASE STUDY &bull; {spotlightProject.category.toUpperCase()}
              </Typography>
            </Box>

            <Box
              sx={{
                bgcolor: "#FFFFFF",
                borderRadius: "14px",
                border: "1px solid rgba(17, 18, 21, 0.1)",
                overflow: "hidden",
                boxShadow: "0 24px 48px rgba(17, 18, 21, 0.06)",
              }}
            >
              <Grid container>
                {/* Visual Half */}
                <Grid size={{ xs: 12, lg: 6 }}>
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: 260, sm: 360, lg: "100%" },
                      minHeight: { lg: 420 },
                      width: "100%",
                      bgcolor: "#EBE8DF",
                    }}
                  >
                    {spotlightProject.image && (
                      <Image
                        src={spotlightProject.image}
                        alt={spotlightProject.title}
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                      />
                    )}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(14, 23, 42, 0.04) 0%, rgba(14, 23, 42, 0.35) 100%)",
                      }}
                    />

                    {spotlightProject.metric && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 16,
                          left: 16,
                          bgcolor: "rgba(250, 249, 245, 0.96)",
                          backdropFilter: "blur(8px)",
                          px: 2,
                          py: 0.8,
                          borderRadius: "6px",
                          border: "1px solid rgba(17, 18, 21, 0.1)",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#059669" }} />
                        <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#0E172A", fontFamily: "monospace" }}>
                          {spotlightProject.metric} &bull; {spotlightProject.metricLabel}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Grid>

                {/* Narrative Half */}
                <Grid size={{ xs: 12, lg: 6 }}>
                  <Box sx={{ p: { xs: 3.5, sm: 5, md: 6 }, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                    <Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#0E7490",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            fontSize: "0.8rem",
                            textTransform: "uppercase",
                          }}
                        >
                          {spotlightProject.client}
                        </Typography>

                        {spotlightProject.timeline && (
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#6B6E76",
                              fontWeight: 600,
                              fontSize: "0.75rem",
                              fontFamily: "monospace",
                            }}
                          >
                            ⏱ {spotlightProject.timeline} Delivery
                          </Typography>
                        )}
                      </Box>

                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          color: "#0E172A",
                          fontSize: { xs: "1.6rem", md: "2.1rem" },
                          letterSpacing: "-0.02em",
                          lineHeight: 1.25,
                          mb: 2,
                        }}
                      >
                        {spotlightProject.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "#4A4D57",
                          lineHeight: 1.8,
                          fontSize: { xs: "0.95rem", md: "1.05rem" },
                          mb: 3,
                        }}
                      >
                        {spotlightProject.summary}
                      </Typography>

                      {/* 2-3 Bullet Deliverables */}
                      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2, mb: 3.5 }}>
                        {spotlightProject.results.slice(0, 3).map((res, rIdx) => (
                          <Box key={rIdx} sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
                            <CheckCircleIcon sx={{ color: "#0E7490", fontSize: 18, mt: 0.2 }} />
                            <Typography sx={{ color: "#111215", fontSize: "0.9rem", fontWeight: 600 }}>
                              {res}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Tech Stack Chips */}
                      {spotlightProject.techStack && (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
                          {spotlightProject.techStack.map((tech, tIdx) => (
                            <Box
                              key={tIdx}
                              sx={{
                                px: 1.4,
                                py: 0.4,
                                bgcolor: "#FAF9F5",
                                borderRadius: "4px",
                                border: "1px solid rgba(17, 18, 21, 0.08)",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                color: "#0E172A",
                              }}
                            >
                              {tech}
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>

                    {/* CTA Button */}
                    <Box>
                      <Button
                        component={Link}
                        href={`/portfolio/${spotlightProject.slug}`}
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
                        Read Complete Case Study
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      )}

      {/* 3. FILTER BAR & SEARCH */}
      <Box sx={{ py: 6, borderBottom: "1px solid rgba(17, 18, 21, 0.08)", bgcolor: "#FAF9F5" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "stretch", md: "center" },
              gap: 3,
            }}
          >
            {/* Category Filter Pills */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {categories.map((category) => {
                const isSelected = activeFilter === category;
                const count = categoryCounts[category] || 0;

                return (
                  <Button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    sx={{
                      borderRadius: "6px",
                      px: 2,
                      py: 0.8,
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      bgcolor: isSelected ? "#0E172A" : "#FFFFFF",
                      color: isSelected ? "#FFFFFF" : "#4A4D57",
                      border: "1px solid",
                      borderColor: isSelected
                        ? "#0E172A"
                        : "rgba(17, 18, 21, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      "&:hover": {
                        bgcolor: isSelected ? "#1E293B" : "#F2F0EB",
                        borderColor: isSelected ? "#1E293B" : "#0E172A",
                      },
                    }}
                  >
                    <span>{category}</span>
                    <Box
                      component="span"
                      sx={{
                        fontSize: "0.72rem",
                        px: 0.8,
                        py: 0.1,
                        borderRadius: "10px",
                        bgcolor: isSelected ? "rgba(255, 255, 255, 0.2)" : "rgba(17, 18, 21, 0.06)",
                        color: isSelected ? "#FFFFFF" : "#6B6E76",
                        fontFamily: "monospace",
                      }}
                    >
                      {count}
                    </Box>
                  </Button>
                );
              })}
            </Box>

            {/* Quick Search Field */}
            <Paper
              component="div"
              elevation={0}
              sx={{
                p: "4px 12px",
                display: "flex",
                alignItems: "center",
                width: { xs: "100%", md: 280 },
                borderRadius: "6px",
                border: "1px solid rgba(17, 18, 21, 0.12)",
                bgcolor: "#FFFFFF",
              }}
            >
              <SearchIcon sx={{ color: "#5E6068", fontSize: 20, mr: 1 }} />
              <InputBase
                sx={{ ml: 0.5, flex: 1, fontSize: "0.88rem" }}
                placeholder="Search tech or sector..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <Button
                  size="small"
                  onClick={() => setSearchQuery("")}
                  sx={{ minWidth: 24, p: 0.2, color: "#6B6E76" }}
                >
                  <CloseIcon sx={{ fontSize: 16 }} />
                </Button>
              )}
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* 4. MAIN PROJECT GRID */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 14 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: "1.4rem", md: "1.8rem" }, color: "#0E172A" }}>
            {activeFilter === "All" ? "All Selected Work" : `${activeFilter} Work`}
          </Typography>
          <Typography variant="body2" sx={{ color: "#6B6E76", fontWeight: 600 }}>
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </Typography>
        </Box>

        {filteredProjects.length > 0 ? (
          <Grid container spacing={{ xs: 4, md: 5 }}>
            {filteredProjects.map((project, idx) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                <PortfolioCard project={project} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              p: 8,
              textAlign: "center",
              bgcolor: "#FFFFFF",
              borderRadius: "12px",
              border: "1px solid rgba(17, 18, 21, 0.08)",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: "#0E172A" }}>
              No matching work found
            </Typography>
            <Typography variant="body2" sx={{ color: "#5E6068", mb: 3 }}>
              Try clearing your search query or switching to another category.
            </Typography>
            <Button
              variant="outlined"
              onClick={() => {
                setActiveFilter("All");
                setSearchQuery("");
              }}
              sx={{ borderColor: "#0E172A", color: "#0E172A" }}
            >
              Reset Filters
            </Button>
          </Box>
        )}
      </Container>

      {/* 5. QUALITY GUARANTEES & STANDARDS */}
      <Box
        sx={{
          bgcolor: "#F2F0EB",
          py: { xs: 10, md: 14 },
          borderTop: "1px solid rgba(17, 18, 21, 0.08)",
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 7 }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                letterSpacing: "0.14em",
                display: "block",
                mb: 1.5,
              }}
            >
              HOW WE BUILD &amp; DELIVER
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: "#0E172A",
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                letterSpacing: "-0.02em",
                mb: 2,
              }}
            >
              Our Architectural &amp; Delivery Standard
            </Typography>
            <Typography variant="body1" sx={{ color: "#4A4D57", lineHeight: 1.75 }}>
              We don&apos;t use bloated templates or outsource critical logic. Every engagement adheres to our core engineering commitments.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                num: "01",
                title: "100% IP & Source Ownership",
                desc: "Every line of TypeScript, Flutter, Python, and Figma design token is transferred directly to your organization with zero vendor lock-in.",
              },
              {
                num: "02",
                title: "Strict Type Safety & Clean Code",
                desc: "Modular components, clean architecture, automated linting, and complete test suites ensure your system scales without accumulating technical debt.",
              },
              {
                num: "03",
                title: "Continuous Staging Sprints",
                desc: "You test working software weekly. We provide private staging environments, live deployment branch previews, and transparent git commits.",
              },
              {
                num: "04",
                title: "Guaranteed Core Web Vitals",
                desc: "We don't ship sluggish frontends. Every website we engineer is optimized for 90+ Lighthouse performance, sub-second hydration, and search compliance.",
              },
            ].map((std) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={std.num}>
                <Box
                  sx={{
                    bgcolor: "#FAF9F5",
                    p: 3.5,
                    borderRadius: "10px",
                    border: "1px solid rgba(17, 18, 21, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#0E7490",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                        fontFamily: "monospace",
                        mb: 1.5,
                      }}
                    >
                      SPEC // {std.num}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "#0E172A",
                        mb: 1.2,
                        lineHeight: 1.35,
                      }}
                    >
                      {std.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#5E6068", lineHeight: 1.7 }}>
                      {std.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 6. FAQS */}
      <ServiceFaqSection faqs={portfolioFaqs} />

      {/* 7. CTA */}
      <CtaSection />
    </Box>
  );
}
