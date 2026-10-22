"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
}

export default function AdminBlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      try {
        const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
        if (res.ok) {
          setBlogs(blogs.filter((b) => b._id !== id));
        }
      } catch (error) {
        console.error("Failed to delete blog:", error);
      }
    }
  };

  return (
    <Box sx={{ bgcolor: "#F7F7F2", minHeight: "100vh", pt: { xs: 15, md: 18 }, pb: 12, position: "relative", overflow: "hidden" }}>
      {/* Background Decorative Ambient Warm Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
          right: "5%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(61, 118, 93, 0.05) 0%, rgba(250, 248, 245, 0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Navigation & Header Strip */}
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
          <Link href="/blog" style={{ textDecoration: "none" }}>
            <Button
              startIcon={<VisibilityOutlinedIcon sx={{ fontSize: 18 }} />}
              sx={{
                color: "#52525B",
                bgcolor: "#FFFFFF",
                border: "1px solid rgba(24, 61, 53, 0.12)",
                borderRadius: "9999px",
                px: 2.2,
                py: 0.6,
                fontSize: "0.82rem",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  color: "#3D765D",
                  borderColor: "#3D765D",
                  bgcolor: "#FFFFFF",
                },
              }}
            >
              View Public Journal
            </Button>
          </Link>

          <Button
            component={Link}
            href="/admin/blog/create"
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              bgcolor: "#183D35",
              color: "#FFFFFF",
              borderRadius: "9999px",
              px: 3,
              py: 0.9,
              fontWeight: 700,
              fontSize: "0.85rem",
              textTransform: "none",
              boxShadow: "0 4px 14px rgba(24, 61, 53, 0.2)",
              "&:hover": {
                bgcolor: "#3D765D",
                boxShadow: "0 6px 18px rgba(61, 118, 93, 0.3)",
              },
            }}
          >
            Create New Post
          </Button>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              px: 2,
              py: 0.5,
              borderRadius: "9999px",
              bgcolor: "rgba(61, 118, 93, 0.08)",
              border: "1px solid rgba(61, 118, 93, 0.25)",
              mb: 2,
            }}
          >
            <Box sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#4D8F72" }} />
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#3D765D",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              AETIBAR CMS &bull; EDITORIAL MANAGEMENT
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontFamily: '"DM Serif Display", serif',
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3rem" },
              fontWeight: 400,
              color: "#183D35",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              mb: 1.2,
            }}
          >
            Editorial Dispatches &amp; Articles
          </Typography>
          <Typography sx={{ color: "#52525B", fontSize: "0.95rem", lineHeight: 1.6 }}>
            Publish, update, and manage technical articles, architecture patterns, and engineering insights.
          </Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "20px",
            border: "1px solid rgba(24, 61, 53, 0.08)",
            boxShadow: "0 8px 30px rgba(24, 61, 53, 0.03)",
            overflow: "hidden",
            bgcolor: "#FFFFFF",
          }}
        >
          <Table>
            <TableHead sx={{ bgcolor: "#F7F7F2", borderBottom: "1px solid rgba(24, 61, 53, 0.08)" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem", color: "#183D35", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "monospace", py: 2 }}>
                  Article Title
                </TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem", color: "#183D35", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "monospace", py: 2 }}>
                  URL Slug
                </TableCell>
                <TableCell sx={{ fontWeight: 700, fontSize: "0.75rem", color: "#183D35", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "monospace", py: 2 }}>
                  Published Date
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, fontSize: "0.75rem", color: "#183D35", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "monospace", py: 2 }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 8 }}>
                    <CircularProgress size={32} sx={{ color: "#3D765D", mb: 1.5 }} />
                    <Typography sx={{ color: "#71717A", fontSize: "0.9rem" }}>Loading articles from database...</Typography>
                  </TableCell>
                </TableRow>
              ) : blogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center" sx={{ py: 8 }}>
                    <Typography sx={{ color: "#71717A", fontSize: "0.95rem", mb: 2 }}>No custom blog posts found in the database.</Typography>
                    <Button
                      component={Link}
                      href="/admin/blog/create"
                      variant="outlined"
                      startIcon={<AddIcon />}
                      sx={{
                        color: "#3D765D",
                        borderColor: "#3D765D",
                        borderRadius: "9999px",
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": { bgcolor: "rgba(61, 118, 93, 0.05)" },
                      }}
                    >
                      Write First Post
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                blogs.map((blog) => (
                  <TableRow
                    key={blog._id}
                    hover
                    sx={{
                      "&:hover": { bgcolor: "rgba(61, 118, 93, 0.03)" },
                      borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
                    }}
                  >
                    <TableCell sx={{ fontWeight: 600, color: "#183D35", fontSize: "0.92rem", py: 2 }}>
                      <Link href={`/blog/${blog.slug}`} style={{ textDecoration: "none", color: "#183D35" }} target="_blank">
                        <Box sx={{ "&:hover": { color: "#3D765D" }, transition: "color 0.2s ease" }}>
                          {blog.title}
                        </Box>
                      </Link>
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
                      <Box
                        component="span"
                        sx={{
                          fontSize: "0.78rem",
                          fontFamily: "monospace",
                          color: "#3D765D",
                          bgcolor: "rgba(61, 118, 93, 0.08)",
                          border: "1px solid rgba(61, 118, 93, 0.2)",
                          px: 1.2,
                          py: 0.4,
                          borderRadius: "6px",
                        }}
                      >
                        /{blog.slug}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: "#71717A", fontSize: "0.85rem", py: 2 }}>
                      {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell align="right" sx={{ py: 2 }}>
                      <IconButton
                        component={Link}
                        href={`/admin/blog/edit/${blog._id}`}
                        size="small"
                        sx={{
                          color: "#3D765D",
                          mr: 1,
                          bgcolor: "rgba(61, 118, 93, 0.08)",
                          "&:hover": { bgcolor: "rgba(61, 118, 93, 0.18)" },
                        }}
                      >
                        <EditRoundedIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDelete(blog._id)}
                        size="small"
                        sx={{
                          color: "#DC2626",
                          bgcolor: "rgba(220, 38, 38, 0.08)",
                          "&:hover": { bgcolor: "rgba(220, 38, 38, 0.18)" },
                        }}
                      >
                        <DeleteOutlineRoundedIcon sx={{ fontSize: 18 }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
