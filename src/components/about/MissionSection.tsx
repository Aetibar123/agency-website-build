"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function MissionSection() {
  return (
    <Box sx={{ py: { xs: 15, md: 25 }, bgcolor: '#ffffff', position: 'relative' }}>
      {/* Very light abstract background elements */}
      <Box sx={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', bgcolor: '#fcfcfc', borderBottomLeftRadius: 100, zIndex: 0 }} />
      
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <FormatQuoteIcon sx={{ fontSize: 80, color: 'primary.main', opacity: 0.2, mb: 2 }} />
        
        <Typography variant="h2" sx={{ color: '#0B0F19', mb: 6, fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.02em' }}>
          Our Mission is to <Box component="span" sx={{ color: 'primary.main' }}>Accelerate</Box> Global Innovation.
        </Typography>
        
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant="body1" sx={{ color: '#555', fontSize: '1.25rem', lineHeight: 1.8, position: 'relative', pl: 4, borderLeft: '3px solid', borderColor: 'primary.main' }}>
            We do not just build websites or run ads; we architect comprehensive digital ecosystems. By operating at the bleeding edge of software engineering, artificial intelligence, and data science, we equip our partners with the tools they need to outpace their competition.
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#555', fontSize: '1.25rem', lineHeight: 1.8, pl: 4 }}>
            Transparency, agility, and relentless pursuit of excellence are the core pillars that guide every line of code we write and every strategy we deploy. We believe that technology should be an enabler, not a bottleneck.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
