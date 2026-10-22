"use client";
import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, Paper, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import BlogContentEditor from "../../../../components/admin/BlogContentEditor";

const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    bgcolor: "#FFFFFF",
    "& fieldset": {
      borderColor: "rgba(24, 61, 53, 0.15)",
    },
    "&:hover fieldset": {
      borderColor: "#3D765D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3D765D",
      borderWidth: "1.5px",
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#3D765D",
  },
};

export default function CreateBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "Aetibar Editorial Team",
    coverImage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        router.push("/admin/blog");
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error(error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: "#F7F7F2", minHeight: "100vh", pt: { xs: 15, md: 18 }, pb: 12, position: "relative", overflow: "hidden" }}>
      {/* Background Decorative Ambient Warm Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "8%",
          right: "5%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(61, 118, 93, 0.05) 0%, rgba(250, 248, 245, 0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Link href="/admin/blog" style={{ textDecoration: "none" }}>
          <Button
            startIcon={<ArrowBackRoundedIcon sx={{ fontSize: 18 }} />}
            sx={{
              mb: 4,
              color: "#52525B",
              bgcolor: "#FFFFFF",
              border: "1px solid rgba(24, 61, 53, 0.12)",
              borderRadius: "9999px",
              px: 2.2,
              py: 0.6,
              fontSize: "0.82rem",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 2px 6px rgba(24, 61, 53, 0.02)",
              "&:hover": {
                color: "#3D765D",
                borderColor: "#3D765D",
                bgcolor: "#FFFFFF",
                transform: "translateX(-2px)",
              },
            }}
          >
            Back to Dashboard
          </Button>
        </Link>

        <Paper
          sx={{
            p: { xs: 3.5, sm: 5, md: 6 },
            borderRadius: "24px",
            border: "1px solid rgba(24, 61, 53, 0.08)",
            boxShadow: "0 10px 40px rgba(24, 61, 53, 0.03)",
            bgcolor: "#FFFFFF",
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.8,
                py: 0.4,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.08)",
                border: "1px solid rgba(61, 118, 93, 0.25)",
                mb: 1.5,
              }}
            >
              <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#4D8F72" }} />
              <Typography
                sx={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#3D765D",
                  textTransform: "uppercase",
                  fontFamily: "monospace",
                }}
              >
                AUTHORING &bull; NEW DISPATCH
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: { xs: "1.85rem", sm: "2.3rem", md: "2.6rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Write a New Blog Post
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
              <Box>
                <TextField
                  fullWidth
                  label="Blog Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={textFieldStyles}
                  placeholder="e.g. Modern Web Architecture Patterns for High-Performance Portals"
                />
              </Box>

              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 3 }}>
                <TextField
                  fullWidth
                  label="URL Slug (Optional, auto-generated if empty)"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  variant="outlined"
                  sx={textFieldStyles}
                  helperText="e.g. how-to-scale-ecommerce"
                />
                <TextField
                  fullWidth
                  label="Author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  variant="outlined"
                  sx={textFieldStyles}
                />
              </Box>

              <Box>
                <TextField
                  fullWidth
                  label="Cover Image URL (Optional)"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  variant="outlined"
                  sx={textFieldStyles}
                  placeholder="https://example.com/image.jpg"
                />
              </Box>

              <Box>
                <TextField
                  fullWidth
                  label="Excerpt (Executive Summary)"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  multiline
                  rows={3}
                  variant="outlined"
                  sx={textFieldStyles}
                  helperText="Short summary. Plain URLs (e.g. aetibar.in) or Markdown links [Text](https://...) will automatically be rendered as clickable links on the article page."
                />
              </Box>

              <Box>
                <BlogContentEditor
                  value={formData.content}
                  onChange={(val) => setFormData((prev) => ({ ...prev, content: val }))}
                  label="Main Content (Markdown or plain text)"
                  rows={16}
                  required
                />
              </Box>

              <Box sx={{ mt: 1, display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  endIcon={loading ? <CircularProgress size={18} sx={{ color: "#FFFFFF" }} /> : <SendRoundedIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    bgcolor: "#183D35",
                    color: "#FFFFFF",
                    borderRadius: "9999px",
                    px: 5,
                    py: 1.4,
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    textTransform: "none",
                    boxShadow: "0 6px 20px rgba(24, 61, 53, 0.25)",
                    "&:hover": {
                      bgcolor: "#3D765D",
                      boxShadow: "0 8px 25px rgba(61, 118, 93, 0.35)",
                    },
                    "&:disabled": {
                      bgcolor: "rgba(24, 61, 53, 0.4)",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  {loading ? "Publishing Dispatch..." : "Publish Blog Post"}
                </Button>
              </Box>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
