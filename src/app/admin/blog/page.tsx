"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 15 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: '#0B0F19' }}>
            Blog Management
          </Typography>
          <Button 
            component={Link} 
            href="/admin/blog/create" 
            variant="contained" 
            color="primary" 
            startIcon={<AddIcon />}
            sx={{ borderRadius: 8, px: 3, fontWeight: 700 }}
          >
            Create New Post
          </Button>
        </Box>

        <TableContainer component={Paper} sx={{ borderRadius: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
          <Table>
            <TableHead sx={{ bgcolor: 'rgba(110,65,226,0.05)' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 800 }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Slug</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Published Date</TableCell>
                <TableCell align="right" sx={{ fontWeight: 800 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">Loading...</TableCell>
                </TableRow>
              ) : blogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">No blog posts found.</TableCell>
                </TableRow>
              ) : (
                blogs.map((blog) => (
                  <TableRow key={blog._id} hover>
                    <TableCell sx={{ fontWeight: 600, color: '#333' }}>{blog.title}</TableCell>
                    <TableCell sx={{ color: 'text.secondary' }}>{blog.slug}</TableCell>
                    <TableCell>{new Date(blog.publishedAt).toLocaleDateString()}</TableCell>
                    <TableCell align="right">
                      <IconButton component={Link} href={`/admin/blog/edit/${blog._id}`} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(blog._id)} color="error">
                        <DeleteIcon />
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
