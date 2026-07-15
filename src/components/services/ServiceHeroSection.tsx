"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ServiceDetail } from "../../data/detailedServices";

export default function ServiceHeroSection({ service }: { service: ServiceDetail }) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: { xs: 12, md: 16 },
        pb: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: -150,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(110,65,226,0.05) 0%, rgba(110,65,226,0) 100%)',
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
           <Box sx={{ p: 2, bgcolor: 'rgba(110,65,226,0.1)', borderRadius: 3, display: 'flex', color: 'primary.main' }}>
            {service.icon}
           </Box>
           <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Our Service
          </Typography>
        </Box>
        <Typography variant="h1" sx={{ color: 'secondary.main', mb: 3, fontSize: { xs: '1.9rem', md: '3rem' }, fontWeight: 900, letterSpacing: '-0.02em' }}>
          {service.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.25rem' }, lineHeight: 1.7, maxWidth: 800, mb: 4 }}>
          {service.subtitle}
        </Typography>
      </Container>
    </Box>
  );
}
