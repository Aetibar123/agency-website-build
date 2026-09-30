"use client";
import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { motion } from "framer-motion";
import { workProjects, WorkProject } from "../../data/workData";

const categories: Array<{ id: string; label: string }> = [
  { id: "all", label: "All Work" },
  { id: "Websites & E-commerce", label: "Websites & E-commerce" },
  { id: "Mobile Apps", label: "Mobile Apps" },
  { id: "AI Automation", label: "AI Automation" },
  { id: "SEO", label: "SEO Services" },
  { id: "Social Media Marketing", label: "Social Media" },
  { id: "Paid Advertising", label: "Paid Advertising" },
];

export default function WorkPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return workProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" ||
        project.category === selectedCategory ||
        project.solutionArea === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        (project.businessType && project.businessType.toLowerCase().includes(q)) ||
        project.clientType.toLowerCase().includes(q) ||
        (project.category && project.category.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <Box sx={{ bgcolor: "#FFFFFF", color: "#18181B", minHeight: "100vh", overflowX: "hidden" }}>
      {/* ========================================================================= */}
      {/* 1. HERO HEADER WITH HOME PAGE STYLING & ANIMATIONS                        */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          position: "relative",
          pt: { xs: 15, sm: 18, md: 21 },
          pb: { xs: 8, md: 12 },
          background:
            "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.09) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
          borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Ambient Warm Glowing Background Orbs */}
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          sx={{
            position: "absolute",
            top: "-12%",
            right: "-6%",
            width: "520px",
            height: "520px",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.16) 0%, transparent 70%)",
            filter: "blur(75px)",
            pointerEvents: "none",
          }}
        />
        <Box
          component={motion.div}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1 }}
          sx={{
            position: "absolute",
            top: "20%",
            left: "-10%",
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(251, 146, 60, 0.14) 0%, transparent 70%)",
            filter: "blur(75px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Box sx={{ maxWidth: 880, mx: "auto" }}>
            {/* Status Pill Badge with Pulsing Orange Dot */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: { xs: 2, sm: 2.4 },
                  py: 0.7,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.08)",
                  border: "1px solid rgba(249, 115, 22, 0.25)",
                  boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                  backdropFilter: "blur(12px)",
                  mb: 3,
                }}
              >
                <Box
                  component={motion.div}
                  animate={{ scale: [1, 1.35, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "#F97316",
                    boxShadow: "0 0 10px #F97316",
                    flexShrink: 0,
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
                  CLIENT WORK &bull; REAL CASE STUDIES
                </Typography>
              </Box>
            </motion.div>

            {/* Main Title H1 with Sunset Gradient Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.65rem", sm: "2.25rem", md: "2.85rem", lg: "3.25rem" },
                  fontWeight: 600,
                  color: "#18181B",
                  lineHeight: { xs: 1.25, sm: 1.2, md: 1.18 },
                  letterSpacing: { xs: "-0.02em", md: "-0.035em" },
                  maxWidth: { xs: "100%", md: 1040, lg: 1160 },
                  mx: "auto",
                  textWrap: "balance",
                  mb: 2.5,
                }}
              >
                Explore What We Build —{" "}
                <Box
                  component="span"
                  sx={{
                    display: "inline",
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Real Projects That Drive Real Revenue.
                </Box>
              </Typography>
            </motion.div>

            {/* Clear Spoken English Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.15rem", md: "1.2rem" },
                  lineHeight: 1.8,
                  color: "#52525B",
                  maxWidth: 800,
                  mx: "auto",
                  mb: 2,
                  fontWeight: 400,
                }}
              >
                Here is a look behind the scenes at real websites, custom mobile apps, automated AI workflows, and targeted marketing campaigns we have built and launched for businesses.
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 2. CATEGORY FILTER TABS & SEARCH BAR                                      */}
      {/* ========================================================================= */}
      <Box sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 10, md: 16 }, bgcolor: "#FAFAFA", position: "relative" }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
            {/* Category Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.2,
                  maxWidth: 980,
                  mx: "auto",
                  mb: 3.5,
                }}
              >
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const count =
                    cat.id === "all"
                      ? workProjects.length
                      : workProjects.filter((p) => p.category === cat.id).length;

                  return (
                    <motion.div
                      key={cat.id}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button
                        onClick={() => setSelectedCategory(cat.id)}
                        sx={{
                          px: { xs: 2, sm: 2.5 },
                          py: 0.9,
                          borderRadius: "9999px",
                          textTransform: "none",
                          fontSize: "0.88rem",
                          fontWeight: isSelected ? 700 : 500,
                          background: isSelected
                            ? "linear-gradient(135deg, #EA580C 0%, #F97316 100%)"
                            : "#FFFFFF",
                          color: isSelected ? "#FFFFFF" : "#52525B",
                          border: "1px solid",
                          borderColor: isSelected ? "transparent" : "rgba(24, 24, 27, 0.08)",
                          boxShadow: isSelected
                            ? "0 6px 18px -3px rgba(234, 88, 12, 0.38)"
                            : "0 2px 6px rgba(0, 0, 0, 0.02)",
                          transition: "all 0.25s ease",
                          "&:hover": {
                            background: isSelected
                              ? "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)"
                              : "rgba(249, 115, 22, 0.06)",
                            borderColor: isSelected ? "transparent" : "#EA580C",
                            color: isSelected ? "#FFFFFF" : "#EA580C",
                          },
                        }}
                      >
                        {cat.label} ({count})
                      </Button>
                    </motion.div>
                  );
                })}
              </Box>
            </motion.div>

            {/* Keyword Search Input */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <Box sx={{ maxWidth: 460, mx: "auto", mb: 2.5 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Search projects, industry, or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: "#EA580C", fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      endAdornment: searchQuery ? (
                        <InputAdornment position="end">
                          <Box
                            onClick={() => setSearchQuery("")}
                            sx={{
                              cursor: "pointer",
                              display: "flex",
                              color: "#A1A1AA",
                              "&:hover": { color: "#18181B" },
                            }}
                          >
                            <CloseIcon sx={{ fontSize: 18 }} />
                          </Box>
                        </InputAdornment>
                      ) : null,
                      sx: {
                        bgcolor: "#FFFFFF",
                        borderRadius: "9999px",
                        fontSize: "0.9rem",
                        px: 2,
                        py: 0.5,
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                        "& fieldset": { border: "none" },
                        "&:hover": { borderColor: "rgba(234, 88, 12, 0.4)" },
                        "&.Mui-focused": {
                          boxShadow: "0 0 0 3px rgba(249, 115, 22, 0.15)",
                          borderColor: "#EA580C",
                        },
                      },
                    },
                  }}
                />
              </Box>
            </motion.div>

            {/* Results Count Pill */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5, px: 1 }}>
              <Typography sx={{ fontSize: "0.875rem", color: "#71717A" }}>
                Showing <strong>{filteredProjects.length}</strong> of <strong>{workProjects.length}</strong> business projects
              </Typography>
              {searchQuery && (
                <Typography
                  onClick={() => setSearchQuery("")}
                  sx={{
                    color: "#EA580C",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Clear Search
                </Typography>
              )}
            </Box>
          </Box>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <Box
                sx={{
                  p: 8,
                  textAlign: "center",
                  borderRadius: "24px",
                  bgcolor: "#FFFFFF",
                  border: "1px dashed rgba(24, 24, 27, 0.15)",
                  my: 4,
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#18181B", mb: 1 }}>
                  No matching projects found
                </Typography>
                <Typography sx={{ fontSize: "0.95rem", color: "#71717A", mb: 3 }}>
                  No projects match &ldquo;{searchQuery}&rdquo;. Try another search term or click below to reset.
                </Typography>
                <Button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  variant="contained"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                    color: "#FFFFFF",
                    borderRadius: "9999px",
                    textTransform: "none",
                    fontWeight: 700,
                    px: 3.5,
                    py: 1.2,
                    "&:hover": {
                      background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                    },
                  }}
                >
                  Reset All Filters
                </Button>
              </Box>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* 3. PROJECT CARDS GRID WITH STAGGERED REVEAL & HOVER GLOW                  */}
          {/* ========================================================================= */}
          <Grid container spacing={3.5}>
            {filteredProjects.map((project: WorkProject, idx: number) => {
              const categoryLabel = project.category || "Digital Solutions";

              return (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.slug}>
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.75, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    style={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        bgcolor: "#FFFFFF",
                        borderRadius: "20px",
                        border: "1px solid rgba(24, 24, 27, 0.08)",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.02)",
                        overflow: "hidden",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 20px 40px -12px rgba(234, 88, 12, 0.16)",
                          borderColor: "rgba(234, 88, 12, 0.4)",
                        },
                      }}
                    >
                      <Box>
                        {/* Project Preview Image */}
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: 230,
                            bgcolor: "#18181B",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                          />

                          {/* Top Badges */}
                          <Box
                            sx={{
                              position: "absolute",
                              top: 14,
                              left: 14,
                              right: 14,
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Chip
                              label={project.projectType}
                              size="small"
                              sx={{
                                bgcolor:
                                  project.projectType === "Production Build"
                                    ? "#16A34A"
                                    : "rgba(24, 24, 27, 0.85)",
                                backdropFilter: "blur(8px)",
                                color: "#FFFFFF",
                                fontWeight: 700,
                                fontSize: "0.72rem",
                                borderRadius: "6px",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                              }}
                            />

                            <Chip
                              label={categoryLabel}
                              size="small"
                              sx={{
                                bgcolor: "rgba(255, 255, 255, 0.95)",
                                backdropFilter: "blur(8px)",
                                color: "#EA580C",
                                fontWeight: 700,
                                fontSize: "0.72rem",
                                borderRadius: "6px",
                                border: "1px solid rgba(234, 88, 12, 0.25)",
                              }}
                            />
                          </Box>
                        </Box>

                        {/* Card Content Area */}
                        <Box sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                          {/* Business Type */}
                          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 1.2 }}>
                            <BusinessOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                            <Typography
                              sx={{
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                color: "#EA580C",
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                              }}
                            >
                              {project.businessType || project.clientType}
                            </Typography>
                          </Box>

                          {/* Project Title */}
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: { xs: "1.05rem", sm: "1.1rem", md: "1.15rem" },
                              fontWeight: 700,
                              color: "#18181B",
                              lineHeight: 1.35,
                              mb: 1.5,
                              textWrap: "balance",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {project.title}
                          </Typography>

                          {/* Short Business Summary */}
                          <Typography
                            sx={{
                              fontSize: "0.9rem",
                              lineHeight: 1.7,
                              color: "#52525B",
                              mb: 2.5,
                            }}
                          >
                            {project.summary}
                          </Typography>

                          {/* Technology Badges */}
                          {project.technology && project.technology.length > 0 && (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                              {project.technology.slice(0, 3).map((tech, i) => (
                                <Typography
                                  key={i}
                                  variant="caption"
                                  sx={{
                                    px: 1.2,
                                    py: 0.4,
                                    borderRadius: "6px",
                                    bgcolor: "rgba(24, 24, 27, 0.04)",
                                    color: "#52525B",
                                    fontSize: "0.75rem",
                                    fontWeight: 600,
                                  }}
                                >
                                  {tech}
                                </Typography>
                              ))}
                            </Box>
                          )}
                        </Box>
                      </Box>

                      {/* Card Action Link */}
                      <Box
                        sx={{
                          p: { xs: 2.5, sm: 3.5 },
                          pt: 0,
                          borderTop: "1px solid rgba(24, 24, 27, 0.06)",
                          mt: "auto",
                        }}
                      >
                        <Box sx={{ pt: 2.5 }}>
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Link href={`/work/${project.slug}`} style={{ textDecoration: "none" }}>
                              <Button
                                variant="contained"
                                fullWidth
                                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                                sx={{
                                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                                  color: "#FFFFFF",
                                  fontWeight: 700,
                                  fontSize: "0.9rem",
                                  borderRadius: "9999px",
                                  py: 1.3,
                                  textTransform: "none",
                                  boxShadow: "0 4px 14px rgba(234, 88, 12, 0.25)",
                                  transition: "all 0.25s ease",
                                  "&:hover": {
                                    background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                                    boxShadow: "0 8px 20px rgba(234, 88, 12, 0.4)",
                                  },
                                }}
                              >
                                View Case Study &amp; Results
                              </Button>
                            </Link>
                          </motion.div>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* 4. HIGH-CONVERTING BOTTOM CTA (MATCHING HOME PAGE)                         */}
      {/* ========================================================================= */}
      <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: "#FFFFFF", position: "relative" }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                maxWidth: 1040,
                mx: "auto",
                textAlign: "center",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                p: { xs: 3.5, sm: 6, md: 9 },
                background: "linear-gradient(145deg, #18181B 0%, #0F0E0E 60%, #201A18 100%)",
                borderRadius: { xs: "24px", md: "36px" },
                boxShadow: "0 30px 80px -20px rgba(24, 24, 27, 0.5)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Ambient Glowing Orbs */}
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                sx={{
                  position: "absolute",
                  top: "-20%",
                  right: "-10%",
                  width: "440px",
                  height: "440px",
                  background: "radial-gradient(circle, rgba(249, 115, 22, 0.32) 0%, transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                sx={{
                  position: "absolute",
                  bottom: "-20%",
                  left: "-10%",
                  width: "440px",
                  height: "440px",
                  background: "radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1.2,
                      px: 2.2,
                      py: 0.6,
                      borderRadius: "9999px",
                      bgcolor: "rgba(249, 115, 22, 0.2)",
                      border: "1px solid rgba(251, 146, 60, 0.4)",
                      mb: 3.5,
                    }}
                  >
                    <Box
                      component={motion.div}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#FB923C", boxShadow: "0 0 10px #FB923C" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#FB923C",
                        fontWeight: 700,
                      }}
                    >
                      LET&apos;S GROW YOUR BUSINESS &bull; FREE 30-MIN CONSULTATION
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "1.65rem", sm: "2.25rem", md: "2.85rem", lg: "3.25rem" },
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: { xs: 1.25, md: 1.18 },
                      letterSpacing: "-0.035em",
                      maxWidth: { xs: "100%", md: 980, lg: 1100 },
                      mx: "auto",
                      textWrap: "balance",
                      mb: 3,
                    }}
                  >
                    Have a Project in Mind?{" "}
                    <Box
                      component="span"
                      sx={{
                        display: "inline",
                        background: "linear-gradient(135deg, #F97316 0%, #FB923C 60%, #FED7AA 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Let&apos;s Build It Together.
                    </Box>
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "0.95rem", md: "1.18rem" },
                      color: "rgba(255, 255, 255, 0.82)",
                      lineHeight: 1.75,
                      maxWidth: 760,
                      mx: "auto",
                      mb: 4.5,
                      fontWeight: 400,
                    }}
                  >
                    Whether you need a high-converting website, a smooth mobile app, AI workflow automation, or qualified customer leads—we&apos;ll give you honest guidance, fixed upfront pricing, and a clear project roadmap.
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      flexWrap: "wrap",
                      gap: 2,
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 5,
                      width: "100%",
                    }}
                  >
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      sx={{ width: { xs: "100%", sm: "auto" } }}
                    >
                      <Link href="/contact" style={{ textDecoration: "none", width: "100%", display: "block" }}>
                        <Button
                          variant="contained"
                          fullWidth
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                          sx={{
                            background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
                            color: "#18181B",
                            px: { xs: 3, sm: 4.5 },
                            py: 1.6,
                            fontSize: "0.95rem",
                            fontWeight: 800,
                            borderRadius: "9999px",
                            boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)",
                            transition: "all 0.25s ease",
                            width: { xs: "100%", sm: "auto" },
                            "&:hover": {
                              background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                              color: "#FFFFFF",
                              boxShadow: "0 15px 30px rgba(234, 88, 12, 0.5)",
                            },
                          }}
                        >
                          Book a Free Consultation
                        </Button>
                      </Link>
                    </Box>

                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      sx={{ width: { xs: "100%", sm: "auto" } }}
                    >
                      <Link href="/services" style={{ textDecoration: "none", width: "100%", display: "block" }}>
                        <Button
                          variant="outlined"
                          fullWidth
                          sx={{
                            color: "#FFFFFF",
                            borderColor: "rgba(255, 255, 255, 0.3)",
                            bgcolor: "rgba(255, 255, 255, 0.05)",
                            backdropFilter: "blur(10px)",
                            px: { xs: 3, sm: 4 },
                            py: 1.55,
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            borderRadius: "9999px",
                            transition: "all 0.25s ease",
                            width: { xs: "100%", sm: "auto" },
                            "&:hover": {
                              borderColor: "#FB923C",
                              color: "#FB923C",
                              bgcolor: "rgba(249, 115, 22, 0.12)",
                            },
                          }}
                        >
                          Explore All Services
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </motion.div>

                {/* Bottom Guarantee Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Box
                    sx={{
                      pt: 3.5,
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: { xs: 2, sm: 4 },
                    }}
                  >
                    {[
                      "Free 30-Minute Strategy Session",
                      "100% Code & Asset Ownership",
                      "Direct WhatsApp & Phone Support",
                    ].map((badgeText, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#FB923C" }} />
                        <Typography sx={{ fontSize: "0.825rem", color: "rgba(255, 255, 255, 0.82)", fontWeight: 500 }}>
                          {badgeText}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </motion.div>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
