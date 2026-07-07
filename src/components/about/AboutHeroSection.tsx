"use client";
import React from "react";
import { Box, Container, Typography, CardMedia, Grid } from "@mui/material";

export default function AboutHeroSection() {
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
                OUR STORY
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ color: '#0B0F19', mb: 4, fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              We Build Digital Experiences That <Box component="span" sx={{ color: 'primary.main', display: 'inline-block', position: 'relative' }}>
                Matter.
                <Box sx={{ position: 'absolute', bottom: 10, left: 0, width: '100%', height: 16, bgcolor: 'primary.main', opacity: 0.1, transform: 'skewX(-15deg)' }} />
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.25rem', lineHeight: 1.8, maxWidth: 600 }}>
              Aetibar was born out of a simple belief: that every ambitious brand deserves world-class digital infrastructure. We combine engineering excellence with creative brilliance to solve complex business challenges in an ever-evolving digital world.
            </Typography>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', borderRadius: 6, overflow: 'hidden', boxShadow: '0 30px 60px -20px rgba(0,0,0,0.15)' }}>
              <CardMedia
                component="img"
                image="/images/about/office.png"
                alt="Aetibar Agency Modern Office"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transform: 'scale(1.02)',
                  transition: 'transform 0.5s ease',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              />
              {/* Subtle glass overlay to give it a polished look */}
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(110,65,226,0.05), transparent)', pointerEvents: 'none' }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
