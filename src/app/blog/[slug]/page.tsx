import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Button,
  Avatar,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import Link from "next/link";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import connectToDatabase from "../../../lib/mongodb";
import Blog from "../../../models/Blog";
import { notFound } from "next/navigation";
import ScrollProgress from "../../../components/blog/ScrollProgress";
import { defaultBlogArticles, BlogArticle } from "../../../data/blogData";

async function getArticle(slug: string): Promise<BlogArticle | null> {
  // 1. First check MongoDB if connected
  try {
    await connectToDatabase();
    const doc = await Blog.findOne({ slug });
    if (doc) {
      return {
        _id: doc._id.toString(),
        title: doc.title,
        slug: doc.slug,
        excerpt: doc.excerpt || "",
        content: doc.content || "",
        coverImage: doc.coverImage || "/images/home/hero-architecture.jpg",
        category: (doc.category as any) || "Web Architecture",
        readTime: doc.readTime || "5 min read",
        publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toISOString() : new Date().toISOString(),
        author: doc.author || "Aetibar Editorial Team",
        authorRole: doc.authorRole || "Technical Contributor",
        tags: doc.tags || ["Engineering", "Web"],
      };
    }
  } catch (err) {
    // Database not configured or unreachable; fallback to static articles
  }

  // 2. Fallback to default editorial repository
  const fallback = defaultBlogArticles.find((b) => b.slug === slug);
  return fallback || null;
}

export async function generateStaticParams() {
  return defaultBlogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = await getArticle(resolvedParams.slug);

  if (!blog) return { title: "Article Not Found | Aetibar" };

  return {
    title: `${blog.title} | Aetibar Journal`,
    description: blog.excerpt || "Read this technical insight and architectural analysis on Aetibar Journal.",
    keywords: [
      ...(blog.tags || []),
      blog.category,
      "Web Development",
      "Mobile App Development",
      "Digital Marketing",
      "Aetibar Journal",
      "Software Engineering",
      "Web Architecture",
    ],
    authors: [{ name: blog.author || "Aetibar Editorial Team", url: "https://www.aetibar.in" }],
    creator: blog.author || "Aetibar Editorial Team",
    publisher: "Aetibar Technologies",
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://www.aetibar.in/blog/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} | Aetibar Journal`,
      description: blog.excerpt,
      url: `https://www.aetibar.in/blog/${blog.slug}`,
      siteName: "Aetibar",
      type: "article",
      images: [
        {
          url: blog.coverImage.startsWith("http")
            ? blog.coverImage
            : `https://www.aetibar.in${blog.coverImage}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Aetibar Journal`,
      description: blog.excerpt,
      images: [blog.coverImage.startsWith("http") ? blog.coverImage : `https://www.aetibar.in${blog.coverImage}`],
    },
    other: {
      "geo.region": "IN-RJ",
      "geo.placename": "Udaipur",
      "geo.position": "24.5854;73.7125",
      "ICBM": "24.5854, 73.7125",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = await getArticle(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  // Related articles from same category or others
  const relatedArticles = defaultBlogArticles
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 3);

  // Markdown parser with clean styling
  const renderContent = (content: string) => {
    return content.split("\n").map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return <Box key={index} sx={{ height: 16 }} />;

      if (trimmed.startsWith("## ")) {
        return (
          <Typography
            key={index}
            variant="h2"
            sx={{
              color: "#18181B",
              fontWeight: 700,
              mt: { xs: 5, md: 7 },
              mb: 2.5,
              fontSize: { xs: "1.55rem", sm: "1.95rem", md: "2.15rem" },
              letterSpacing: "-0.025em",
              lineHeight: 1.25,
            }}
          >
            {trimmed.replace("## ", "")}
          </Typography>
        );
      }

      if (trimmed.startsWith("### ")) {
        return (
          <Typography
            key={index}
            variant="h3"
            sx={{
              color: "#27272A",
              fontWeight: 700,
              mt: { xs: 4, md: 5 },
              mb: 2,
              fontSize: { xs: "1.25rem", sm: "1.45rem", md: "1.55rem" },
              letterSpacing: "-0.015em",
              lineHeight: 1.35,
            }}
          >
            {trimmed.replace("### ", "")}
          </Typography>
        );
      }

      if (trimmed.startsWith("#### ")) {
        return (
          <Typography
            key={index}
            variant="h4"
            sx={{
              color: "#18181B",
              fontWeight: 600,
              mt: 3.5,
              mb: 1.5,
              fontSize: "1.15rem",
              letterSpacing: "-0.01em",
            }}
          >
            {trimmed.replace("#### ", "")}
          </Typography>
        );
      }

      // Blockquotes (> text)
      if (trimmed.startsWith("> ")) {
        return (
          <Box
            key={index}
            sx={{
              borderLeft: "4px solid #EA580C",
              pl: { xs: 2.5, sm: 3.5 },
              py: 2,
              my: 4,
              bgcolor: "rgba(249, 115, 22, 0.05)",
              borderRadius: "0 14px 14px 0",
            }}
          >
            <Typography
              sx={{
                color: "#18181B",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: { xs: "1.05rem", md: "1.18rem" },
                lineHeight: 1.7,
              }}
            >
              {trimmed.replace("> ", "")}
            </Typography>
          </Box>
        );
      }

      // Code blocks (```code```)
      if (trimmed.startsWith("```")) {
        return null; // Skip code fence markers in line-by-line fallback
      }

      // List items (- item)
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const itemText = trimmed.replace(/^[-*]\s+/, "");
        return (
          <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.2, pl: 1 }}>
            <Typography sx={{ color: "#EA580C", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.6 }}>
              &bull;
            </Typography>
            <Typography
              sx={{
                color: "#3F3F46",
                fontSize: { xs: "0.98rem", md: "1.05rem" },
                lineHeight: 1.75,
              }}
            >
              {itemText}
            </Typography>
          </Box>
        );
      }

      // Ordered list items (1. item)
      if (/^\d+\.\s+/.test(trimmed)) {
        const match = trimmed.match(/^(\d+)\.\s+(.*)/);
        if (match) {
          return (
            <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.4, pl: 1 }}>
              <Box
                sx={{
                  minWidth: 24,
                  height: 24,
                  borderRadius: "50%",
                  bgcolor: "rgba(249, 115, 22, 0.1)",
                  color: "#EA580C",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 0.3,
                  flexShrink: 0,
                }}
              >
                {match[1]}
              </Box>
              <Typography
                sx={{
                  color: "#3F3F46",
                  fontSize: { xs: "0.98rem", md: "1.05rem" },
                  lineHeight: 1.75,
                }}
              >
                {match[2]}
              </Typography>
            </Box>
          );
        }
      }

      let parsedHTML = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #18181B; font-weight: 700;">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em style="color: #EA580C; font-style: normal; font-weight: 600;">$1</em>')
        .replace(/`([^`]+)`/g, '<code style="background: #F4F4F5; color: #EA580C; padding: 2px 6px; border-radius: 6px; font-size: 0.9em; font-family: monospace;">$1</code>');

      return (
        <Typography
          key={index}
          variant="body1"
          dangerouslySetInnerHTML={{ __html: parsedHTML }}
          sx={{
            mb: 2.8,
            color: "#3F3F46",
            fontSize: { xs: "1.02rem", md: "1.12rem" },
            lineHeight: 1.85,
            letterSpacing: "-0.005em",
          }}
        />
      );
    });
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage.startsWith("http")
      ? blog.coverImage
      : `https://www.aetibar.in${blog.coverImage}`,
    datePublished: blog.publishedAt,
    author: {
      "@type": "Person",
      name: blog.author || "Aetibar Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Aetibar",
      logo: {
        "@type": "ImageObject",
        url: "https://www.aetibar.in/logo.jpeg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.aetibar.in/blog/${blog.slug}`,
    },
  };

  return (
    <Box sx={{ bgcolor: "#FAF8F5", minHeight: "100vh", color: "#18181B" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <ScrollProgress />

      {/* ========================================================================= */}
      {/* ARTICLE HEADER & HERO                                                     */}
      {/* ========================================================================= */}
      <Box
        component="section"
        sx={{
          pt: { xs: 15, sm: 18, md: 22 },
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

        {/* Ambient Warm Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "750px",
            height: "450px",
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(250, 248, 245, 0) 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          {/* Back to Journal Button */}
          <Link href="/blog" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackRoundedIcon />}
              sx={{
                mb: 4,
                fontWeight: 700,
                color: "#52525B",
                bgcolor: "#FFFFFF",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                borderRadius: "12px",
                px: 2.5,
                py: 0.8,
                fontSize: "0.85rem",
                textTransform: "none",
                boxShadow: "0 2px 6px rgba(24, 24, 27, 0.02)",
                "&:hover": {
                  color: "#EA580C",
                  borderColor: "#EA580C",
                  bgcolor: "#FFFFFF",
                  transform: "translateX(-2px)",
                },
              }}
            >
              Back to all articles
            </Button>
          </Link>

          {/* Metadata Row */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5, flexWrap: "wrap" }}>
            <Chip
              label={blog.category}
              sx={{
                bgcolor: "#EA580C",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.76rem",
                borderRadius: "8px",
                height: 28,
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
              <AccessTimeRoundedIcon sx={{ fontSize: 14, color: "#71717A" }} />
              <Typography sx={{ fontSize: "0.82rem", color: "#71717A", fontWeight: 600 }}>
                {blog.readTime}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "0.82rem", color: "#A1A1AA" }}>&bull;</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
              <CalendarTodayRoundedIcon sx={{ fontSize: 13, color: "#71717A" }} />
              <Typography sx={{ fontSize: "0.82rem", color: "#71717A", fontWeight: 600 }}>
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </Typography>
            </Box>
          </Box>

          {/* Article Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.4rem" },
              fontWeight: 700,
              color: "#18181B",
              lineHeight: 1.18,
              letterSpacing: "-0.03em",
              mb: 4,
            }}
          >
            {blog.title}
          </Typography>

          {/* Author Card Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 2.5,
              borderTop: "1px solid rgba(228, 228, 231, 0.9)",
              borderBottom: "1px solid rgba(228, 228, 231, 0.9)",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Avatar
                sx={{
                  bgcolor: "#18181B",
                  color: "#FFFFFF",
                  width: 44,
                  height: 44,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                {blog.author.charAt(0)}
              </Avatar>
              <Box>
                <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B" }}>
                  {blog.author}
                </Typography>
                <Typography sx={{ fontSize: "0.78rem", color: "#71717A" }}>
                  {blog.authorRole} &bull; Aetibar Studio
                </Typography>
              </Box>
            </Box>

            {/* Tags preview */}
            {blog.tags && blog.tags.length > 0 && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                {blog.tags.slice(0, 3).map((tag) => (
                  <Chip
                    key={tag}
                    label={`#${tag}`}
                    size="small"
                    sx={{
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      color: "#71717A",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      {/* ========================================================================= */}
      {/* FEATURED COVER IMAGE                                                      */}
      {/* ========================================================================= */}
      {blog.coverImage && (
        <Container maxWidth="md" sx={{ mt: { xs: 4, md: 6 }, position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(228, 228, 231, 0.9)",
              boxShadow: "0 16px 40px -10px rgba(24, 24, 27, 0.08)",
              maxHeight: { xs: 260, sm: 380, md: 480 },
              bgcolor: "#18181B",
            }}
          >
            <Box
              component="img"
              src={blog.coverImage}
              alt={blog.title}
              sx={{
                width: "100%",
                height: "100%",
                maxHeight: { xs: 260, sm: 380, md: 480 },
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
        </Container>
      )}

      {/* ========================================================================= */}
      {/* ARTICLE BODY & EDITORIAL CONTENT                                          */}
      {/* ========================================================================= */}
      <Container maxWidth="md" sx={{ py: { xs: 6, md: 9 } }}>
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            borderRadius: "28px",
            border: "1px solid rgba(228, 228, 231, 0.9)",
            p: { xs: 3.5, sm: 5, md: 8 },
            boxShadow: "0 4px 20px rgba(24, 24, 27, 0.02)",
          }}
        >
          {/* Executive Summary Callout */}
          {blog.excerpt && (
            <Box
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: "16px",
                bgcolor: "#FAF8F5",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                mb: 6,
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  color: "#EA580C",
                  letterSpacing: "0.08em",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                EXECUTIVE SUMMARY:
              </Typography>
              <Typography sx={{ fontSize: "1.05rem", color: "#27272A", lineHeight: 1.75, fontWeight: 500 }}>
                {blog.excerpt}
              </Typography>
            </Box>
          )}

          {/* Parsed Markdown Body */}
          <Box className="article-body">
            {renderContent(blog.content)}
          </Box>

          {/* All Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <Box sx={{ mt: 8, pt: 4, borderTop: "1px solid rgba(228, 228, 231, 0.9)" }}>
              <Typography
                sx={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: "#71717A",
                  letterSpacing: "0.06em",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                TOPICS &amp; TECHNOLOGIES:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {blog.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={`#${tag}`}
                    sx={{
                      bgcolor: "#FAF8F5",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      color: "#18181B",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}

          {/* Author Bio Card */}
          <Box
            sx={{
              mt: 6,
              p: { xs: 3, sm: 4 },
              borderRadius: "20px",
              bgcolor: "#FAF8F5",
              border: "1px solid rgba(228, 228, 231, 0.9)",
              display: "flex",
              gap: 3,
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Avatar
              sx={{
                width: 68,
                height: 68,
                bgcolor: "#18181B",
                color: "#FFFFFF",
                fontSize: "1.7rem",
                fontWeight: 700,
                boxShadow: "0 4px 12px rgba(24, 24, 27, 0.1)",
              }}
            >
              {blog.author.charAt(0)}
            </Avatar>
            <Box>
              <Typography
                sx={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#EA580C",
                  letterSpacing: "0.08em",
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                  mb: 0.4,
                }}
              >
                WRITTEN BY
              </Typography>
              <Typography variant="h5" sx={{ color: "#18181B", fontWeight: 700, mb: 0.5 }}>
                {blog.author}
              </Typography>
              <Typography sx={{ color: "#52525B", fontSize: "0.88rem", lineHeight: 1.6 }}>
                Engineering and architectural lead at Aetibar. Focused on building high-performance web applications,
                custom operational software, and practical AI workflow systems that eliminate business bottlenecks.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ========================================================================= */}
        {/* RELATED ARTICLES SECTION                                                  */}
        {/* ========================================================================= */}
        <Box sx={{ mt: { xs: 10, md: 14 } }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: "1.4rem", sm: "1.75rem" }, fontWeight: 700, color: "#18181B" }}>
              More from the Journal
            </Typography>
            <Link href="/blog" style={{ textDecoration: "none" }}>
              <Button
                endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                sx={{
                  color: "#EA580C",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textTransform: "none",
                  "&:hover": { bgcolor: "rgba(234, 88, 12, 0.08)" },
                }}
              >
                View all articles
              </Button>
            </Link>
          </Box>

          <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
            {relatedArticles.map((rel) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={rel.slug} sx={{ display: "flex" }}>
                <Link
                  href={`/blog/${rel.slug}`}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      borderRadius: "20px",
                      bgcolor: "#FFFFFF",
                      border: "1px solid rgba(228, 228, 231, 0.9)",
                      boxShadow: "0 2px 10px rgba(24, 24, 27, 0.02)",
                      overflow: "hidden",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        borderColor: "rgba(234, 88, 12, 0.4)",
                        transform: "translateY(-3px)",
                        boxShadow: "0 10px 24px -4px rgba(234, 88, 12, 0.1)",
                      },
                    }}
                  >
                    <Box sx={{ width: "100%", height: 160, position: "relative", overflow: "hidden", bgcolor: "#18181B", flexShrink: 0 }}>
                      <CardMedia
                        component="img"
                        image={rel.coverImage}
                        alt={rel.title}
                        sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                      />
                      <Box sx={{ position: "absolute", top: 10, left: 10 }}>
                        <Chip
                          label={rel.category}
                          size="small"
                          sx={{
                            bgcolor: "#FFFFFF",
                            color: "#18181B",
                            fontWeight: 700,
                            fontSize: "0.68rem",
                          }}
                        />
                      </Box>
                    </Box>
                    <CardContent sx={{ p: 2.5, flexGrow: 1, display: "flex", flexDirection: "column", width: "100%" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mb: 1, height: 18 }}>
                        <Typography sx={{ fontSize: "0.72rem", color: "#71717A", fontWeight: 600 }}>
                          {rel.readTime}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "#18181B",
                          lineHeight: 1.35,
                          mb: 1.2,
                          height: { xs: "auto", sm: "2.7em" },
                          minHeight: { xs: "auto", sm: "2.7em" },
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {rel.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.82rem",
                          color: "#52525B",
                          lineHeight: 1.6,
                          height: { xs: "auto", sm: "3.2em" },
                          minHeight: { xs: "auto", sm: "3.2em" },
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          mt: "auto",
                        }}
                      >
                        {rel.excerpt}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ========================================================================= */}
        {/* CENTERPIECE CALLOUT BANNER                                                */}
        {/* ========================================================================= */}
        <Box sx={{ mt: { xs: 10, md: 14 } }}>
          <Box
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: "32px",
              bgcolor: "#18181B",
              color: "#FFFFFF",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 24px 60px -15px rgba(24, 24, 27, 0.4)",
            }}
          >
            {/* Ambient Glow */}
            <Box
              sx={{
                position: "absolute",
                top: -80,
                right: -80,
                width: 350,
                height: 350,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(234, 88, 12, 0.3) 0%, rgba(24, 24, 27, 0) 70%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            <Grid container spacing={3} sx={{ alignItems: "center" }}>
              <Grid size={{ xs: 12, md: 8 }}>
                <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                  <VerifiedRoundedIcon sx={{ color: "#EA580C", fontSize: 18 }} />
                  <Typography
                    sx={{
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      color: "#FB923C",
                      letterSpacing: "0.08em",
                      fontFamily: "monospace",
                      textTransform: "uppercase",
                    }}
                  >
                    DISCOVERY &amp; CONSULTATION
                  </Typography>
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.65rem", sm: "2.2rem" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 1.5,
                  }}
                >
                  Have a technical problem you want to{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    solve together?
                  </Box>
                </Typography>
                <Typography sx={{ color: "#A1A1AA", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 580 }}>
                  We design, build, and deploy custom software, web platforms, and internal business tools tailored to your
                  exact operational workflows.
                </Typography>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Button
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowForwardRoundedIcon />}
                      sx={{
                        py: 1.4,
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                        fontSize: "0.92rem",
                        fontWeight: 700,
                        textTransform: "none",
                        color: "#FFFFFF",
                        "&:hover": {
                          background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                        },
                      }}
                    >
                      Discuss Your Project
                    </Button>
                  </Link>

                  <Link href="/work" style={{ textDecoration: "none" }}>
                    <Button
                      fullWidth
                      sx={{
                        py: 1.3,
                        borderRadius: "12px",
                        bgcolor: "rgba(255, 255, 255, 0.08)",
                        color: "#FFFFFF",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        textTransform: "none",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 0.14)",
                        },
                      }}
                    >
                      View Selected Work
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
