"use client";
import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, Paper, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 15 }}>
      <Container maxWidth="md">
        <Button 
          component={Link} 
          href="/admin/blog" 
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4, fontWeight: 700 }}
        >
          Back to Dashboard
        </Button>
        
        <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 4, color: '#0B0F19' }}>
            Write a New Blog
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box>
                <TextField
                  fullWidth
                  label="Blog Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                <TextField
                  fullWidth
                  label="URL Slug (Optional, auto-generated if empty)"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  variant="outlined"
                  helperText="e.g. how-to-scale-ecommerce"
                />
                <TextField
                  fullWidth
                  label="Author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  variant="outlined"
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
                  placeholder="https://example.com/image.jpg"
                />
              </Box>

              <Box>
                <TextField
                  fullWidth
                  label="Excerpt (Short Summary)"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  variant="outlined"
                />
              </Box>

              <Box>
                <TextField
                  fullWidth
                  label="Main Content (Markdown or plain text)"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  multiline
                  rows={15}
                  variant="outlined"
                />
              </Box>

              <Box sx={{ mt: 2 }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  size="large" 
                  disabled={loading}
                  sx={{ borderRadius: 8, px: 6, py: 1.5, fontWeight: 700 }}
                >
                  {loading ? "Publishing..." : "Publish Blog Post"}
                </Button>
              </Box>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
