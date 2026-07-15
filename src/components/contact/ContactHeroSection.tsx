"use client";
import React from "react";
import { Box, Container, Typography, CardMedia, Grid } from "@mui/material";

export default function ContactHeroSection() {
  return (
    <Box
      sx={{
        bgcolor: '#fcfcfc',
        pt: { xs: 15, md: 20 },
        pb: { xs: 10, md: 15 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'inline-block', px: 3, py: 1, border: '1px solid rgba(110,65,226,0.15)', borderRadius: 10, mb: 4, bgcolor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)' }}>
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                GET IN TOUCH
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ color: '#0B0F19', mb: 4, fontSize: { xs: '1.9rem', md: '3rem' }, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Let's Build Something <Box component="span" sx={{ color: 'primary.main', display: 'inline-block', position: 'relative' }}>
                Extraordinary.
                <Box sx={{ position: 'absolute', bottom: 10, left: 0, width: '100%', height: 16, bgcolor: 'primary.main', opacity: 0.1, transform: 'skewX(-15deg)' }} />
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.9, maxWidth: 600 }}>
              Whether you're launching a new product, modernizing existing systems, or exploring AI-driven solutions, our team is ready to turn your vision into reality. Let's start a conversation about your next digital initiative.
            </Typography>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ 
              position: 'relative', 
              borderRadius: 6, 
              overflow: 'hidden', 
              boxShadow: '0 30px 60px -20px rgba(0,0,0,0.15)',
              height: 400,
              width: '100%',
              bgcolor: '#0B0F19',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Animated Background Elements */}
              <Box sx={{
                position: 'absolute',
                width: 300, height: 300,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #6e41e2, #ff3366)',
                filter: 'blur(80px)',
                animation: 'float 6s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0) scale(1)' },
                  '50%': { transform: 'translateY(-30px) scale(1.1)' }
                }
              }} />
              <Box sx={{
                position: 'absolute',
                width: 200, height: 200,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
                filter: 'blur(60px)',
                right: -50, bottom: -50,
                animation: 'float-alt 8s ease-in-out infinite',
                '@keyframes float-alt': {
                  '0%, 100%': { transform: 'translateY(0) scale(1)' },
                  '50%': { transform: 'translateY(40px) scale(0.9)' }
                }
              }} />
              <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, position: 'relative', zIndex: 1, letterSpacing: 4 }}>
                GLOBAL
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
