"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Card, CardContent, CardMedia, CardActionArea, Skeleton, Chip, Grid } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  author: string;
}

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    fetchBlogs();
  }, []);

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  const regularBlogs = blogs.length > 1 ? blogs.slice(1) : [];

  return (
    <Box sx={{ bgcolor: '#0B0F19', minHeight: '100vh', pt: { xs: 15, md: 22 }, pb: 15, position: 'relative', overflow: 'hidden' }}>
      
      {/* Dynamic Background Glow */}
      <Box sx={{
        position: 'absolute',
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw',
        height: '60vw',
        bgcolor: 'primary.main',
        opacity: 0.15,
        filter: 'blur(150px)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Header */}
        <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: 'center' }}>
          <Chip 
            icon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />} 
            label="Knowledge Hub" 
            sx={{ mb: 3, bgcolor: 'rgba(110,65,226,0.15)', color: 'primary.light', fontWeight: 800, border: '1px solid rgba(110,65,226,0.3)', px: 1, py: 2.5, borderRadius: 10 }}
          />
          <Typography variant="h1" sx={{ color: 'white', fontWeight: 900, mb: 3, fontSize: { xs: '3rem', md: '5.5rem' }, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            The Aetibar <Box component="span" sx={{ background: 'linear-gradient(90deg, #b485ff, #8250df)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Journal</Box>
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 400, maxWidth: 650, mx: 'auto', fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.7 }}>
            Deep dives, industry insights, and powerful strategies for digital growth, AI automation, and scalable technology.
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {Array.from(new Array(3)).map((_, i) => (
              <Skeleton key={i} variant="rounded" height={400} sx={{ bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 6 }} />
            ))}
          </Box>
        ) : blogs.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 15, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: 8, border: '1px dashed rgba(255,255,255,0.1)' }}>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>Our journal is currently empty.</Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', mt: 1 }}>Check back soon for new insights!</Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 8 } }}>
            
            {/* Featured Post (Most Recent) */}
            {featuredBlog && (
              <Card sx={{ 
                bgcolor: 'rgba(255,255,255,0.03)', 
                borderRadius: { xs: 6, md: 8 }, 
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-8px)',
                  boxShadow: '0 30px 60px rgba(110,65,226,0.2)'
                }
              }}>
                <CardActionArea component={Link} href={`/blog/${featuredBlog.slug}`} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch' }}>
                  <Box sx={{ width: { xs: '100%', md: '55%' }, position: 'relative', overflow: 'hidden' }}>
                    {featuredBlog.coverImage ? (
                      <CardMedia
                        component="img"
                        image={featuredBlog.coverImage}
                        alt={featuredBlog.title}
                        sx={{ height: { xs: 250, md: '100%' }, width: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <Box sx={{ height: { xs: 250, md: '100%' }, width: '100%', background: 'linear-gradient(135deg, #2a1b4d, #0B0F19)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h3" sx={{ color: 'white', opacity: 0.1, fontWeight: 900, letterSpacing: 5 }}>AETIBAR</Typography>
                      </Box>
                    )}
                    <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
                      <Chip label="Latest Post" sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 800, backdropFilter: 'blur(10px)' }} />
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ p: { xs: 4, md: 8 }, width: { xs: '100%', md: '45%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3 }}>
                      <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
                        {new Date(featuredBlog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </Typography>
                      <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.3)' }} />
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{featuredBlog.author}</Typography>
                    </Box>
                    <Typography variant="h3" sx={{ color: 'white', fontWeight: 900, mb: 3, lineHeight: 1.2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
                      {featuredBlog.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 5, fontSize: '1.1rem', lineHeight: 1.7, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {featuredBlog.excerpt || "Dive into our latest thoughts and strategies for scaling your digital presence..."}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'white', fontWeight: 700, mt: 'auto', textTransform: 'uppercase', letterSpacing: 1 }}>
                      Read Article <ArrowForwardIcon sx={{ ml: 1.5, fontSize: '1.2rem', color: 'primary.main' }} />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            )}

            {/* Regular Grid */}
            {regularBlogs.length > 0 && (
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: 4, md: 5 } }}>
                {regularBlogs.map((blog) => (
                  <Card key={blog._id} sx={{ 
                    bgcolor: 'rgba(255,255,255,0.02)', 
                    borderRadius: 6, 
                    border: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(110,65,226,0.1)',
                      '& .MuiCardMedia-root': { transform: 'scale(1.05)' }
                    }
                  }}>
                    <CardActionArea component={Link} href={`/blog/${blog.slug}`} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <Box sx={{ width: '100%', overflow: 'hidden', height: 240, position: 'relative' }}>
                        {blog.coverImage ? (
                          <CardMedia component="img" image={blog.coverImage} alt={blog.title} sx={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                        ) : (
                          <Box sx={{ height: '100%', width: '100%', bgcolor: 'rgba(110,65,226,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <AutoAwesomeIcon sx={{ color: 'primary.main', opacity: 0.3, fontSize: 60 }} />
                          </Box>
                        )}
                      </Box>
                      <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mb: 2 }}>
                          <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 700 }}>
                            {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>•</Typography>
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{blog.author}</Typography>
                        </Box>
                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mb: 2, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                          {blog.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {blog.excerpt || "Click to explore this article..."}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'white', fontWeight: 700, mt: 'auto', fontSize: '0.9rem' }}>
                          Read <ArrowForwardIcon sx={{ ml: 1, fontSize: '1.1rem', color: 'primary.main' }} />
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </Box>
            )}
            
          </Box>
        )}
      </Container>
    </Box>
  );
}
