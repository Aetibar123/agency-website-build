import React from "react";
import { Box, Container, Typography, Chip, Button, Divider, Avatar } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import connectToDatabase from "../../../lib/mongodb";
import Blog from "../../../models/Blog";
import { notFound } from "next/navigation";
import ScrollProgress from "../../../components/blog/ScrollProgress";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  await connectToDatabase();
  const resolvedParams = await params;
  const blog = await Blog.findOne({ slug: resolvedParams.slug });
  if (!blog) return { title: 'Blog Not Found | Aetibar' };
  
  return {
    title: `${blog.title} | Aetibar`,
    description: blog.excerpt || "Read this insightful article on Aetibar Journal.",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  await connectToDatabase();
  const resolvedParams = await params;
  const blog = await Blog.findOne({ slug: resolvedParams.slug });

  if (!blog) {
    notFound();
  }

  // Enhanced Markdown parser for premium typography
  const parseContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      if (!paragraph.trim()) return <br key={index} />;
      
      if (paragraph.startsWith('## ')) {
        return <Typography key={index} variant="h2" sx={{ color: 'white', fontWeight: 900, mt: 8, mb: 4, fontSize: { xs: '1.8rem', md: '2.5rem' }, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{paragraph.replace('## ', '')}</Typography>;
      }
      if (paragraph.startsWith('### ')) {
        return <Typography key={index} variant="h3" sx={{ color: 'white', fontWeight: 700, mt: 6, mb: 3, fontSize: { xs: '1.5rem', md: '1.8rem' }, letterSpacing: '-0.01em' }}>{paragraph.replace('### ', '')}</Typography>;
      }
      
      // Blockquotes (> text)
      if (paragraph.startsWith('> ')) {
        return (
          <Box key={index} sx={{ borderLeft: '4px solid', borderColor: 'primary.main', pl: 4, py: 2, my: 5, bgcolor: 'rgba(110,65,226,0.05)', borderRadius: '0 12px 12px 0' }}>
            <Typography variant="h5" sx={{ color: 'white', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.6 }}>
              {paragraph.replace('> ', '')}
            </Typography>
          </Box>
        );
      }

      let parsedHTML = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong style="color: white; font-weight: 800;">$1</strong>');
      parsedHTML = parsedHTML.replace(/\*(.*?)\*/g, '<em style="color: #b485ff;">$1</em>');
      
      // First paragraph styling (drop cap effect)
      const isFirstParagraph = index === 0 || (index > 0 && !content.split('\n')[index - 1].trim());

      return (
        <Typography 
          key={index} 
          variant="body1" 
          dangerouslySetInnerHTML={{ __html: parsedHTML }}
          sx={{ 
            mb: 4, 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: { xs: '1.1rem', md: '1.25rem' }, 
            lineHeight: 1.9,
            fontWeight: 400,
            letterSpacing: '0.01em',
            ...(index === 0 && {
              '&::first-letter': {
                fontSize: '4.5rem',
                fontWeight: 900,
                color: 'primary.main',
                float: 'left',
                lineHeight: 1,
                paddingRight: '12px',
                paddingTop: '8px',
              }
            })
          }} 
        />
      );
    });
  };

  return (
    <Box sx={{ bgcolor: '#0B0F19', minHeight: '100vh', pb: 15 }}>
      <ScrollProgress />

      {/* Hero Section with Cover Image Background */}
      <Box sx={{ position: 'relative', pt: { xs: 15, md: 25 }, pb: { xs: 10, md: 15 }, overflow: 'hidden' }}>
        {blog.coverImage && (
          <>
            <Box 
              sx={{ 
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
                backgroundImage: `url(${blog.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center',
                zIndex: 0, opacity: 0.3
              }} 
            />
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(11,15,25,0.4) 0%, #0B0F19 100%)', zIndex: 1 }} />
          </>
        )}

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Link href="/blog" passHref style={{ textDecoration: 'none' }}>
            <Button 
              startIcon={<ArrowBackIcon />}
              sx={{ mb: 6, fontWeight: 700, color: 'rgba(255,255,255,0.6)', bgcolor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderRadius: 8, px: 3, '&:hover': { color: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              Journal
            </Button>
          </Link>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 4 }}>
            <Chip label="Article" sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase' }} />
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.3)' }} />
            <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500, letterSpacing: 1 }}>
              {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </Typography>
          </Box>
          
          <Typography variant="h1" sx={{ color: 'white', fontWeight: 900, fontSize: { xs: '3rem', md: '5rem' }, lineHeight: 1.1, letterSpacing: '-0.03em', mb: 6 }}>
            {blog.title}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.dark', width: 50, height: 50 }}>{blog.author.charAt(0)}</Avatar>
            <Box>
              <Typography variant="body1" sx={{ color: 'white', fontWeight: 700 }}>{blog.author}</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>Author</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Article Body */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 3 }}>
        <Box sx={{ 
          bgcolor: '#0B0F19', 
          mt: blog.coverImage ? -5 : 0,
        }}>
          {parseContent(blog.content)}
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 10 }} />

        {/* Footer Author Bio */}
        <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', bgcolor: 'rgba(255,255,255,0.02)', p: { xs: 4, md: 6 }, borderRadius: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
          <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: '2rem', fontWeight: 800 }}>{blog.author.charAt(0)}</Avatar>
          <Box>
            <Typography variant="caption" sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Written By</Typography>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mt: 1, mb: 1 }}>{blog.author}</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>The Aetibar editorial team brings you the latest insights on digital growth, design trends, and engineering excellence.</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
