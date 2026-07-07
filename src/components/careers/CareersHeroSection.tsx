"use client";
import React from "react";
import { Box, Container, Typography, CardMedia, Grid } from "@mui/material";

export default function CareersHeroSection() {
  return (
    <Box
      sx={{
        bgcolor: '#fcfcfc',
        pt: { xs: 15, md: 22 },
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
                JOIN OUR TEAM
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ color: '#0B0F19', mb: 4, fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Build the <Box component="span" sx={{ color: 'primary.main', display: 'inline-block', position: 'relative' }}>
                Future.
                <Box sx={{ position: 'absolute', bottom: 10, left: 0, width: '100%', height: 16, bgcolor: 'primary.main', opacity: 0.1, transform: 'skewX(-15deg)' }} />
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.25rem', lineHeight: 1.8, maxWidth: 600 }}>
              We are a collective of elite engineers, visionary designers, and strategic thinkers. If you are obsessed with pushing the boundaries of digital innovation, you belong here.
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
              justifyContent: 'center',
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}>
              {/* Animated Background Elements */}
              <Box sx={{
                position: 'absolute',
                width: 250, height: 250,
                borderRadius: '40%',
                background: 'linear-gradient(135deg, #FF9A9E, #FECFEF)',
                filter: 'blur(60px)',
                left: -50, top: -50,
                animation: 'spin 12s linear infinite',
                '@keyframes spin': {
                  '0%': { transform: 'rotate(0deg)' },
                  '100%': { transform: 'rotate(360deg)' }
                }
              }} />
              <Box sx={{
                position: 'absolute',
                width: 300, height: 300,
                borderRadius: '60%',
                background: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
                filter: 'blur(70px)',
                right: -50, bottom: -50,
                animation: 'spin-reverse 15s linear infinite',
                '@keyframes spin-reverse': {
                  '0%': { transform: 'rotate(360deg)' },
                  '100%': { transform: 'rotate(0deg)' }
                }
              }} />
              <Typography variant="h3" sx={{ color: 'white', fontWeight: 800, position: 'relative', zIndex: 1, letterSpacing: 4 }}>
                CULTURE
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
