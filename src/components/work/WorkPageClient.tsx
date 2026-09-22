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
import { workProjects, WorkProject, WorkCategory } from "../../data/workData";

const categories: Array<{ id: string; label: string; count?: number }> = [
  { id: "all", label: "All Work" },
  { id: "Websites & E-commerce", label: "Websites & E-commerce" },
  { id: "Mobile Apps", label: "Mobile Apps" },
  { id: "AI Automation", label: "AI Automation" },
  { id: "SEO", label: "SEO" },
  { id: "Social Media Marketing", label: "Social Media Marketing" },
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
    <Box sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 10, md: 16 }, bgcolor: "#FAF8F5", position: "relative" }}>
      <Container maxWidth="xl">
        {/* ========================================================================= */}
        {/* CATEGORY FILTER TABS & SEARCH BAR                                         */}
        {/* ========================================================================= */}
        <Box sx={{ mb: { xs: 6, md: 8 }, textAlign: "center" }}>
          {/* Simple Category Filter Rail (Centered) */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              maxWidth: 960,
              mx: "auto",
              mb: 3,
            }}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? workProjects.length
                  : workProjects.filter((p) => p.category === cat.id).length;

              return (
                <Button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  sx={{
                    px: { xs: 1.8, sm: 2.2 },
                    py: 0.9,
                    borderRadius: "9999px",
                    textTransform: "none",
                    fontSize: "0.88rem",
                    fontWeight: isSelected ? 700 : 500,
                    bgcolor: isSelected ? "#18181B" : "#FFFFFF",
                    color: isSelected ? "#FFFFFF" : "#52525B",
                    border: "1px solid",
                    borderColor: isSelected ? "#18181B" : "rgba(228, 228, 231, 0.9)",
                    boxShadow: isSelected
                      ? "0 4px 12px rgba(24, 24, 27, 0.12)"
                      : "0 1px 3px rgba(24, 24, 27, 0.02)",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      bgcolor: isSelected ? "#27272A" : "#F4F4F5",
                      borderColor: isSelected ? "#27272A" : "#D4D4D8",
                      color: isSelected ? "#FFFFFF" : "#18181B",
                    },
                  }}
                >
                  {cat.label} ({count})
                </Button>
              );
            })}
          </Box>

          {/* Quick Keyword Search (Centered) */}
          <Box sx={{ maxWidth: 420, mx: "auto", mb: 2.5 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search projects or business types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#EA580C", fontSize: 18 }} />
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
                        <CloseIcon sx={{ fontSize: 16 }} />
                      </Box>
                    </InputAdornment>
                  ) : null,
                  sx: {
                    bgcolor: "#FFFFFF",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    px: 1.5,
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    "& fieldset": { border: "none" },
                    "&:hover": { borderColor: "#D4D4D8" },
                    "&.Mui-focused": {
                      boxShadow: "0 0 0 2px rgba(234, 88, 12, 0.3)",
                    },
                  },
                },
              }}
            />
          </Box>

          {/* Result count status (Centered) */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5, px: 1 }}>
            <Typography sx={{ fontSize: "0.85rem", color: "#71717A" }}>
              Showing <strong>{filteredProjects.length}</strong> of <strong>{workProjects.length}</strong> business projects
            </Typography>
            {searchQuery && (
              <Typography
                onClick={() => setSearchQuery("")}
                sx={{
                  color: "#EA580C",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Clear Search
              </Typography>
            )}
          </Box>
        </Box>

        {/* ========================================================================= */}
        {/* EMPTY STATE                                                               */}
        {/* ========================================================================= */}
        {filteredProjects.length === 0 && (
          <Box
            sx={{
              p: 8,
              textAlign: "center",
              borderRadius: "20px",
              bgcolor: "#FFFFFF",
              border: "1px dashed rgba(228, 228, 231, 0.9)",
              my: 4,
            }}
          >
            <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, color: "#18181B", mb: 1 }}>
              No projects match your filter
            </Typography>
            <Typography sx={{ fontSize: "0.92rem", color: "#71717A", mb: 3 }}>
              No projects found for &ldquo;{searchQuery}&rdquo;. Try another term or reset your filters.
            </Typography>
            <Button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              variant="contained"
              sx={{
                bgcolor: "#18181B",
                color: "#FFFFFF",
                borderRadius: "9999px",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                "&:hover": { bgcolor: "#27272A" },
              }}
            >
              Reset Filters
            </Button>
          </Box>
        )}

        {/* ========================================================================= */}
        {/* PROJECT CARDS GRID                                                        */}
        {/* ========================================================================= */}
        <Grid container spacing={3.5}>
          {filteredProjects.map((project: WorkProject) => {
            const categoryLabel = project.category || "Digital Solutions";

            return (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.slug}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "18px",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    boxShadow: "0 2px 10px rgba(24, 24, 27, 0.03)",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 16px 36px -8px rgba(24, 24, 27, 0.08)",
                      borderColor: "#EA580C",
                    },
                  }}
                >
                  <Box>
                    {/* Project Preview Image */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 220,
                        bgcolor: "#F4F4F5",
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

                      {/* Top Overlay Badges */}
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
                            bgcolor: "rgba(24, 24, 27, 0.85)",
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
                    <Box sx={{ p: { xs: 2.5, sm: 3 } }}>
                      {/* Business Type */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 1.2 }}>
                        <BusinessOutlinedIcon sx={{ fontSize: 16, color: "#EA580C" }} />
                        <Typography
                          sx={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: "#71717A",
                            textTransform: "uppercase",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {project.businessType || project.clientType}
                        </Typography>
                      </Box>

                      {/* Project Title */}
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "#18181B",
                          lineHeight: 1.35,
                          mb: 1.5,
                        }}
                      >
                        {project.title}
                      </Typography>

                      {/* Short Business-Focused Summary */}
                      <Typography
                        sx={{
                          fontSize: "0.88rem",
                          lineHeight: 1.65,
                          color: "#52525B",
                          mb: 2,
                        }}
                      >
                        {project.summary}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Card Action Link */}
                  <Box
                    sx={{
                      p: { xs: 2.5, sm: 3 },
                      pt: 0,
                      borderTop: "1px solid rgba(228, 228, 231, 0.7)",
                      mt: "auto",
                    }}
                  >
                    <Box sx={{ pt: 2 }}>
                      <Link href={`/work/${project.slug}`} style={{ textDecoration: "none" }}>
                        <Button
                          variant="contained"
                          fullWidth
                          endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
                          sx={{
                            background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                            color: "#FFFFFF",
                            fontWeight: 700,
                            fontSize: "0.88rem",
                            borderRadius: "9999px",
                            py: 1.2,
                            textTransform: "none",
                            boxShadow: "0 4px 12px rgba(234, 88, 12, 0.2)",
                            "&:hover": {
                              background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                            },
                          }}
                        >
                          View Project &amp; Case Study
                        </Button>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
