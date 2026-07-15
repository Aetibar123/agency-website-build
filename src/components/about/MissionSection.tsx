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
        
        <Typography variant="h2" sx={{ color: '#0B0F19', mb: 6, fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 900, lineHeight: 1.3, letterSpacing: '-0.02em' }}>
          Our Mission is to <Box component="span" sx={{ color: 'primary.main' }}>Accelerating</Box> Innovation Through Technology.
        </Typography>
        
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9, position: 'relative', pl: 4, borderLeft: '3px solid', borderColor: 'primary.main' }}>
          Our mission is to help businesses unlock their potential through powerful digital solutions. We don't just build websites or run campaigns — we create scalable digital ecosystems powered by modern engineering, automation, and data-driven strategies.
          </Typography>
          
          <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9, pl: 4 }}>
           Transparency, agility, and a commitment to quality guide everything we build. We believe technology should simplify complexity, enable growth, and become a competitive advantage for every business we partner with.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
