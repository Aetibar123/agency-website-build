"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: '#0B0F19',
        pt: { xs: 15, md: 24 },
        pb: { xs: 12, md: 18 },
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Animated Mesh Gradients */}
      <Box sx={{
        position: 'absolute', top: '-10%', right: '-5%', width: { xs: 300, md: 600 }, height: { xs: 300, md: 600 },
        background: 'radial-gradient(circle, rgba(110,65,226,0.3) 0%, rgba(110,65,226,0) 70%)',
        filter: 'blur(60px)',
        animation: 'pulse 8s infinite alternate',
        '@keyframes pulse': { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.2)' } }
      }} />
      <Box sx={{
        position: 'absolute', bottom: '-20%', left: '-10%', width: { xs: 400, md: 800 }, height: { xs: 400, md: 800 },
        background: 'radial-gradient(circle, rgba(0,198,255,0.15) 0%, rgba(0,198,255,0) 70%)',
        filter: 'blur(80px)',
        animation: 'pulse-slow 12s infinite alternate',
        '@keyframes pulse-slow': { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.1)' } }
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Grid size={{ xs: 12, md: 10, lg: 9 }}>
            
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, p: 1, px: 2, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, mb: 4, bgcolor: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', mx: 'auto' }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#00c6ff', boxShadow: '0 0 10px #00c6ff' }} />
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, letterSpacing: 2 }}>
                WE ARE AETIBAR
              </Typography>
            </Box>

            <Typography variant="h1" sx={{ color: 'white', mb: 4, fontSize: { xs: '1.9rem', md: '3rem' }, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', mx: 'auto' }}>
             Build Smarter Websites, AI Solutions  <br />
              <Box component="span" sx={{ color: 'transparent', backgroundImage: 'linear-gradient(90deg, #6e41e2 0%, #00c6ff 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', display: 'inline-block' }}>
               & Digital Experiences
              </Box>
            </Typography>

            {/* Subtitle Content */}
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 6, fontSize: { xs: '1rem', md: '1.25rem' }, fontWeight: 400, lineHeight: 1.7, maxWidth: '800px', mx: 'auto', letterSpacing: '0.01em' }}>
             Custom Web & Mobile App Development, AI Automation, SEO, and Digital Solutions Built to Help Businesses Grow Faster.
            </Typography>
             

            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    px: 5, py: 2, 
                    fontSize: '1.1rem', 
                    fontWeight: 700,
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(110,65,226,0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': { bgcolor: '#5a35b8', transform: 'translateY(-3px)', boxShadow: '0 15px 40px rgba(110,65,226,0.5)' }
                  }}
                >
                  Initiate Project
                </Button>
              </Link>
              <Link href="/portfolio" style={{ textDecoration: 'none' }}>
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={{ 
                    px: 5, py: 2, 
                    fontSize: '1.1rem', 
                    fontWeight: 700,
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)', transform: 'translateY(-3px)' }
                  }}
                >
                  Examine Our Case Studies
                </Button>
              </Link>
            </Box>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
