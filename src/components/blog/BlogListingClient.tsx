"use client";

import React, { useEffect, useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Chip,
} from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { BlogArticle, defaultBlogArticles } from "../../data/blogData";

const CATEGORIES = [
  "All Articles",
  "Web Architecture",
  "AI & Automation",
  "Internal Tools",
  "Engineering & Data",
] as const;

export default function BlogListingClient() {
  const [blogs, setBlogs] = useState<BlogArticle[]>(defaultBlogArticles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const dbBlogs: BlogArticle[] = data.data.map((b: any, index: number) => ({
            _id: b._id || `db-${index}`,
            title: b.title,
            slug: b.slug,
            excerpt: b.excerpt || "",
            content: b.content || "",
            coverImage: b.coverImage || "/images/home/hero-agency-showcase.jpg",
            category: b.category || "Web Architecture",
            readTime: b.readTime || "5 min read",
            publishedAt: b.publishedAt || new Date().toISOString(),
            author: b.author || "Amaan",
            authorRole: b.authorRole || "Lead Architect",
            tags: b.tags || ["Engineering", "Web"],
            featured: b.featured || false,
            technicalFocus: b.technicalFocus || "Full-Stack",
            keyInsight: b.keyInsight || b.excerpt || "",
            takeaways: b.takeaways || [],
          }));

          const existingSlugs = new Set(dbBlogs.map((b) => b.slug));
          const uniqueDefault = defaultBlogArticles.filter((b) => !existingSlugs.has(b.slug));
          setBlogs([...dbBlogs, ...uniqueDefault]);
        }
      } catch (error) {
        // Use defaultBlogArticles on error
      }
    };

    fetchBlogs();
  }, []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "All Articles": blogs.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== "All Articles") {
        counts[cat] = blogs.filter((b) => b.category === cat).length;
      }
    });
    return counts;
  }, [blogs]);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All Articles" || blog.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesQuery =
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.author.toLowerCase().includes(query) ||
        (blog.technicalFocus && blog.technicalFocus.toLowerCase().includes(query)) ||
        (blog.tags && blog.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesQuery;
    });
  }, [blogs, selectedCategory, searchQuery]);

  // Determine featured article (top lead story when unfiltered)
  const isDefaultView = selectedCategory === "All Articles" && !searchQuery.trim();
  const featuredArticle = isDefaultView
    ? filteredBlogs.find((b) => b.featured) || filteredBlogs[0]
    : null;

  // Remaining articles for the grid
  const gridArticles = useMemo(() => {
    if (featuredArticle && isDefaultView) {
      return filteredBlogs.filter((b) => b.slug !== featuredArticle.slug);
    }
    return filteredBlogs;
  }, [filteredBlogs, featuredArticle, isDefaultView]);

  return (
    <Box sx={{ bgcolor: "#FAF8F5", minHeight: "100vh", color: "#18181B" }}>
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          pt: { xs: 15, sm: 17, md: 20 },
          pb: { xs: 6, md: 8 },
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
            top: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(250, 248, 245, 0) 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center" }}>
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
                AETIBAR JOURNAL &bull; ARCHITECTURE &amp; ENGINEERING
              </Typography>
            </Box>

            {/* Main Title */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.35rem", sm: "3.25rem", md: "4rem" },
                fontWeight: 600,
                color: "#18181B",
                letterSpacing: { xs: "-0.03em", md: "-0.035em" },
                lineHeight: { xs: 1.15, md: 1.12 },
                mb: 2.5,
              }}
            >
              Architectural insights &amp;{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                engineering dispatches.
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem" },
                color: "#52525B",
                lineHeight: 1.7,
                maxWidth: 680,
                mx: "auto",
              }}
            >
              Practical essays, system designs, and production insights from building modern web
              applications, operational tools, and automated business workflows.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* FILTER & SEARCH STRIP                                                     */}
      {/* ========================================================================= */}
      <Box
        sx={{
          py: 2.5,
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid rgba(228, 228, 231, 0.9)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0 2px 10px rgba(24, 24, 27, 0.02)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "stretch", md: "center" },
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            {/* Category Filter Pills */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                overflowX: "auto",
                pb: { xs: 0.5, md: 0 },
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = categoryCounts[cat] || 0;
                return (
                  <Button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    sx={{
                      py: 0.7,
                      px: 1.8,
                      borderRadius: "9999px",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      textTransform: "none",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      bgcolor: isActive ? "#18181B" : "#FAF8F5",
                      color: isActive ? "#FFFFFF" : "#52525B",
                      border: "1px solid",
                      borderColor: isActive ? "#18181B" : "rgba(228, 228, 231, 0.9)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: isActive ? "#27272A" : "rgba(234, 88, 12, 0.06)",
                        borderColor: isActive ? "#27272A" : "#EA580C",
                        color: isActive ? "#FFFFFF" : "#EA580C",
                      },
                    }}
                  >
                    {cat}
                    <Box
                      component="span"
                      sx={{
                        ml: 0.8,
                        fontSize: "0.72rem",
                        fontFamily: "monospace",
                        color: isActive ? "#FB923C" : "#A1A1AA",
                      }}
                    >
                      ({count})
                    </Box>
                  </Button>
                );
              })}
            </Box>

            {/* Minimalist Search Input */}
            <Box sx={{ width: { xs: "100%", md: 320 } }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search articles by topic or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchRoundedIcon sx={{ color: "#71717A", fontSize: 18 }} />
                      </InputAdornment>
                    ),
                    endAdornment: searchQuery ? (
                      <InputAdornment position="end">
                        <IconButton size="small" onClick={() => setSearchQuery("")}>
                          <ClearRoundedIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                      </InputAdornment>
                    ) : null,
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#FAF8F5",
                    borderRadius: "9999px",
                    fontSize: "0.82rem",
                    px: 1.5,
                    "& fieldset": { borderColor: "rgba(228, 228, 231, 0.9)" },
                    "&:hover fieldset": { borderColor: "#EA580C" },
                    "&.Mui-focused fieldset": { borderColor: "#EA580C" },
                  },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* MAIN CONTENT AREA                                                         */}
      {/* ========================================================================= */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        {/* Active Filter Indicators */}
        {(searchQuery.trim() || selectedCategory !== "All Articles") && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 4,
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography sx={{ fontSize: "0.9rem", color: "#71717A" }}>
              Showing <strong>{filteredBlogs.length}</strong> of <strong>{blogs.length}</strong> dispatches
              {selectedCategory !== "All Articles" && (
                <>
                  {" "}in <span style={{ color: "#EA580C", fontWeight: 600 }}>{selectedCategory}</span>
                </>
              )}
              {searchQuery.trim() && (
                <>
                  {" "}matching &ldquo;<strong>{searchQuery}</strong>&rdquo;
                </>
              )}
            </Typography>

            <Button
              size="small"
              onClick={() => {
                setSelectedCategory("All Articles");
                setSearchQuery("");
              }}
              sx={{
                color: "#EA580C",
                fontSize: "0.8rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": { textDecoration: "underline", bgcolor: "transparent" },
              }}
            >
              Reset Filters
            </Button>
          </Box>
        )}

        {/* Empty State */}
        {filteredBlogs.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              py: 10,
              px: 3,
              borderRadius: "20px",
              bgcolor: "#FFFFFF",
              border: "1px dashed rgba(228, 228, 231, 0.9)",
              maxWidth: 540,
              mx: "auto",
            }}
          >
            <SearchRoundedIcon sx={{ fontSize: 36, color: "#EA580C", mb: 1.5 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#18181B", mb: 1 }}>
              No articles found
            </Typography>
            <Typography sx={{ color: "#71717A", fontSize: "0.9rem", mb: 3 }}>
              No articles match &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setSelectedCategory("All Articles");
                setSearchQuery("");
              }}
              sx={{
                bgcolor: "#18181B",
                color: "#FFFFFF",
                borderRadius: "9999px",
                fontWeight: 600,
                px: 3,
                textTransform: "none",
                "&:hover": { bgcolor: "#27272A" },
              }}
            >
              Reset Filters
            </Button>
          </Box>
        ) : (
          <>
            {/* ================================================================= */}
            {/* 1. FEATURED LEAD STORY (Sleek Horizontal Split Banner)            */}
            {/* ================================================================= */}
            {featuredArticle && isDefaultView && (
              <Box sx={{ mb: { xs: 6, md: 8 } }}>
                <Link href={`/blog/${featuredArticle.slug}`} style={{ textDecoration: "none" }}>
                  <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    sx={{
                      borderRadius: "24px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      overflow: "hidden",
                      boxShadow: "0 6px 24px -4px rgba(24, 24, 27, 0.04)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        borderColor: "rgba(234, 88, 12, 0.4)",
                        boxShadow: "0 18px 40px -8px rgba(234, 88, 12, 0.12)",
                        "& .featured-img": {
                          transform: "scale(1.03)",
                        },
                        "& .featured-arrow": {
                          transform: "translateX(4px)",
                        },
                      },
                    }}
                  >
                    <Grid container sx={{ alignItems: "center" }}>
                      {/* Left: Image Box */}
                      <Grid size={{ xs: 12, md: 5.5 }}>
                        <Box
                          sx={{
                            position: "relative",
                            height: { xs: 220, sm: 280, md: 340 },
                            overflow: "hidden",
                            bgcolor: "#18181B",
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={featuredArticle.coverImage}
                            alt={featuredArticle.title}
                            className="featured-img"
                            sx={{
                              height: "100%",
                              width: "100%",
                              objectFit: "cover",
                              transition: "transform 0.5s ease",
                            }}
                          />
                          <Box
                            sx={{
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(to top, rgba(24, 24, 27, 0.4) 0%, transparent 60%)",
                            }}
                          />

                          {/* Category Badge */}
                          <Box
                            sx={{
                              position: "absolute",
                              top: 16,
                              left: 16,
                              px: 1.4,
                              py: 0.4,
                              borderRadius: "6px",
                              bgcolor: "rgba(24, 24, 27, 0.85)",
                              backdropFilter: "blur(8px)",
                              border: "1px solid rgba(249, 115, 22, 0.4)",
                              color: "#FB923C",
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              fontFamily: "monospace",
                            }}
                          >
                            {featuredArticle.category}
                          </Box>

                          {/* Read Time */}
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 16,
                              left: 16,
                              px: 1.2,
                              py: 0.35,
                              borderRadius: "6px",
                              bgcolor: "rgba(24, 24, 27, 0.85)",
                              backdropFilter: "blur(8px)",
                              color: "#FFFFFF",
                              fontSize: "0.72rem",
                              fontWeight: 600,
                              display: "flex",
                              alignItems: "center",
                              gap: 0.6,
                            }}
                          >
                            <AccessTimeRoundedIcon sx={{ fontSize: 13, color: "#FB923C" }} />
                            <span>{featuredArticle.readTime}</span>
                          </Box>
                        </Box>
                      </Grid>

                      {/* Right: Editorial Content */}
                      <Grid size={{ xs: 12, md: 6.5 }}>
                        <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                          {/* Featured Pill & Date */}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                              mb: 1.8,
                            }}
                          >
                            <Box
                              sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 0.6,
                                px: 1.2,
                                py: 0.3,
                                borderRadius: "6px",
                                bgcolor: "rgba(249, 115, 22, 0.08)",
                                border: "1px solid rgba(249, 115, 22, 0.25)",
                                color: "#EA580C",
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                fontFamily: "monospace",
                              }}
                            >
                              <AutoAwesomeOutlinedIcon sx={{ fontSize: 13 }} />
                              FEATURED DISPATCH
                            </Box>
                            <Typography sx={{ fontSize: "0.78rem", color: "#71717A", fontWeight: 500 }}>
                              {new Date(featuredArticle.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </Typography>
                          </Box>

                          {/* Title */}
                          <Typography
                            variant="h2"
                            sx={{
                              fontSize: { xs: "1.35rem", sm: "1.65rem", md: "1.85rem" },
                              fontWeight: 700,
                              color: "#18181B",
                              lineHeight: 1.3,
                              letterSpacing: "-0.025em",
                              mb: 1.8,
                            }}
                          >
                            {featuredArticle.title}
                          </Typography>

                          {/* Excerpt */}
                          <Typography
                            sx={{
                              fontSize: "0.92rem",
                              color: "#52525B",
                              lineHeight: 1.65,
                              mb: 2.5,
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {featuredArticle.excerpt}
                          </Typography>

                          {/* Tech Tags */}
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3 }}>
                            {featuredArticle.tags.slice(0, 4).map((tag) => (
                              <Chip
                                key={tag}
                                label={`#${tag}`}
                                size="small"
                                sx={{
                                  bgcolor: "#FAF8F5",
                                  border: "1px solid rgba(228, 228, 231, 0.9)",
                                  color: "#52525B",
                                  fontSize: "0.72rem",
                                  fontWeight: 600,
                                  height: 24,
                                }}
                              />
                            ))}
                          </Box>

                          {/* Read Action CTA */}
                          <Box
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 1,
                              color: "#EA580C",
                              fontWeight: 700,
                              fontSize: "0.9rem",
                            }}
                          >
                            <span>Read Full Dispatch</span>
                            <ArrowForwardRoundedIcon
                              className="featured-arrow"
                              sx={{ fontSize: 16, transition: "transform 0.2s ease" }}
                            />
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Link>
              </Box>
            )}

            {/* ================================================================= */}
            {/* 2. BALANCED 3-COLUMN ARTICLE GRID (Sleek & Proportional)           */}
            {/* ================================================================= */}
            <Box sx={{ mb: 2 }}>
              {isDefaultView && (
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#18181B",
                    letterSpacing: "-0.01em",
                    mb: 3,
                  }}
                >
                  Recent Articles &amp; Case Notes
                </Typography>
              )}

              <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
                {gridArticles.map((blog, idx) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={blog.slug} sx={{ display: "flex" }}>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (idx % 3) * 0.08 }}
                      sx={{ display: "flex", width: "100%", height: "100%" }}
                    >
                      <Link
                        href={`/blog/${blog.slug}`}
                        style={{ textDecoration: "none", display: "flex", width: "100%", height: "100%" }}
                      >
                        <Card
                          sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            borderRadius: "20px",
                            bgcolor: "#FFFFFF",
                            border: "1px solid rgba(228, 228, 231, 0.9)",
                            boxShadow: "0 4px 14px rgba(24, 24, 27, 0.03)",
                            overflow: "hidden",
                            transition: "all 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                            "&:hover": {
                              borderColor: "rgba(234, 88, 12, 0.4)",
                              transform: "translateY(-4px)",
                              boxShadow: "0 14px 30px -6px rgba(234, 88, 12, 0.12)",
                              "& .blog-grid-img": {
                                transform: "scale(1.04)",
                              },
                              "& .card-action-arrow": {
                                transform: "translateX(4px)",
                                color: "#EA580C",
                              },
                              "& .card-title": {
                                color: "#EA580C",
                              },
                            },
                          }}
                        >
                          {/* Image Box */}
                          <Box
                            sx={{
                              position: "relative",
                              width: "100%",
                              height: 180,
                              bgcolor: "#18181B",
                              overflow: "hidden",
                              flexShrink: 0,
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={blog.coverImage}
                              alt={blog.title}
                              className="blog-grid-img"
                              sx={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                              }}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(to top, rgba(24, 24, 27, 0.45) 0%, transparent 60%)",
                              }}
                            />

                            {/* Category Badge on Image */}
                            <Box
                              sx={{
                                position: "absolute",
                                top: 12,
                                left: 12,
                                px: 1.2,
                                py: 0.3,
                                borderRadius: "5px",
                                bgcolor: "rgba(24, 24, 27, 0.85)",
                                backdropFilter: "blur(6px)",
                                border: "1px solid rgba(249, 115, 22, 0.35)",
                                color: "#FB923C",
                                fontSize: "0.68rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                fontFamily: "monospace",
                              }}
                            >
                              {blog.category}
                            </Box>

                            {/* Read Time on Image */}
                            <Box
                              sx={{
                                position: "absolute",
                                top: 12,
                                right: 12,
                                px: 1,
                                py: 0.3,
                                borderRadius: "5px",
                                bgcolor: "rgba(24, 24, 27, 0.85)",
                                backdropFilter: "blur(6px)",
                                color: "#FFFFFF",
                                fontSize: "0.68rem",
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                              }}
                            >
                              <AccessTimeRoundedIcon sx={{ fontSize: 12, color: "#FB923C" }} />
                              <span>{blog.readTime}</span>
                            </Box>
                          </Box>

                          {/* Content Body */}
                          <CardContent
                            sx={{
                              p: 2.8,
                              flexGrow: 1,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box>
                              {/* Meta: Date & Technical Focus */}
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  mb: 1.2,
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "0.75rem",
                                    color: "#71717A",
                                    fontWeight: 500,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                  }}
                                >
                                  <CalendarTodayRoundedIcon sx={{ fontSize: 12 }} />
                                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </Typography>

                                {blog.technicalFocus && (
                                  <Box
                                    sx={{
                                      fontSize: "0.7rem",
                                      fontWeight: 600,
                                      color: "#EA580C",
                                      fontFamily: "monospace",
                                    }}
                                  >
                                    {blog.technicalFocus}
                                  </Box>
                                )}
                              </Box>

                              {/* Title (Standardized 2 Lines) */}
                              <Typography
                                className="card-title"
                                variant="h3"
                                sx={{
                                  fontSize: "1.1rem",
                                  fontWeight: 700,
                                  color: "#18181B",
                                  letterSpacing: "-0.015em",
                                  lineHeight: 1.38,
                                  mb: 1.2,
                                  height: "2.8em",
                                  minHeight: "2.8em",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                  transition: "color 0.2s ease",
                                }}
                              >
                                {blog.title}
                              </Typography>

                              {/* Excerpt (Standardized 2 Lines) */}
                              <Typography
                                sx={{
                                  fontSize: "0.85rem",
                                  color: "#52525B",
                                  lineHeight: 1.6,
                                  mb: 2,
                                  height: "2.7em",
                                  minHeight: "2.7em",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {blog.excerpt}
                              </Typography>
                            </Box>

                            {/* Card Footer: Author + Read Link */}
                            <Box
                              sx={{
                                pt: 1.8,
                                borderTop: "1px solid rgba(228, 228, 231, 0.8)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "0.78rem",
                                  color: "#71717A",
                                  fontWeight: 600,
                                }}
                              >
                                By {blog.author}
                              </Typography>

                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.6,
                                  color: "#18181B",
                                  fontSize: "0.8rem",
                                  fontWeight: 600,
                                }}
                              >
                                <span>Read</span>
                                <ArrowForwardRoundedIcon
                                  className="card-action-arrow"
                                  sx={{ fontSize: 15, transition: "all 0.2s ease" }}
                                />
                              </Box>
                            </Box>
                          </CardContent>
                        </Card>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        )}
      </Container>

      {/* ========================================================================= */}
      {/* SIGNATURE OBSIDIAN ARCHITECTURE BANNER                                    */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: "#FAF8F5",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: 1040,
              mx: "auto",
              textAlign: "center",
              p: { xs: 4, sm: 6, md: 8 },
              background: "linear-gradient(145deg, #18181B 0%, #0F0E0E 60%, #201A18 100%)",
              borderRadius: { xs: "24px", md: "32px" },
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 25px 60px -15px rgba(24, 24, 27, 0.4)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient Warm Orange & Amber Glows */}
            <Box
              sx={{
                position: "absolute",
                top: "-30%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "600px",
                height: "300px",
                background: "radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.5,
                  borderRadius: "9999px",
                  bgcolor: "rgba(249, 115, 22, 0.15)",
                  border: "1px solid rgba(251, 146, 60, 0.35)",
                  mb: 2.5,
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#FB923C", boxShadow: "0 0 8px #FB923C" }} />
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.06em",
                    color: "#FB923C",
                    fontWeight: 700,
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                  }}
                >
                  ENGINEERING CONSULTATION
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.85rem", sm: "2.4rem", md: "2.8rem" },
                  fontWeight: 600,
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Building software with real business utility.
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", sm: "1.05rem" },
                  color: "rgba(255, 255, 255, 0.82)",
                  lineHeight: 1.7,
                  maxWidth: 620,
                  mx: "auto",
                  mb: 4,
                }}
              >
                Whether you need to architect a customer-facing web application, replace messy
                spreadsheets with a tailored internal portal, or build practical AI pipelines.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                      color: "#FFFFFF",
                      px: 3.8,
                      py: 1.35,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      borderRadius: "9999px",
                      textTransform: "none",
                      boxShadow: "0 8px 20px rgba(234, 88, 12, 0.35)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                        boxShadow: "0 12px 26px rgba(234, 88, 12, 0.45)",
                      },
                    }}
                  >
                    Discuss Your Architecture
                  </Button>
                </Link>

                <Link href="/work" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#FFFFFF",
                      borderColor: "rgba(255, 255, 255, 0.25)",
                      px: 3.2,
                      py: 1.35,
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      borderRadius: "9999px",
                      textTransform: "none",
                      "&:hover": {
                        borderColor: "#FFFFFF",
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                      },
                    }}
                  >
                    View Selected Systems
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
