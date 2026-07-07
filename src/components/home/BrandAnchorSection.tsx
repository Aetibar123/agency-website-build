"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

export default function BrandAnchorSection() {
  return (
    <Box sx={{ 
      bgcolor: '#ffffff', // White background so it flows from CTA and detaches from dark footer
      pt: { xs: 8, md: 15 },
      pb: { xs: 12, md: 20 },
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography 
        variant="h1" 
        sx={{
          fontSize: { xs: '18vw', md: '16vw', lg: '14vw' },
          fontWeight: 900,
          background: 'linear-gradient(180deg, rgba(110,65,226,1) 0%, rgba(110,65,226,0.1) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 0.8,
          letterSpacing: '-0.04em',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: 0.8,
          '&:hover': {
            opacity: 1,
            transform: 'scale(1.02)'
          }
        }}
      >
        AETIBAR
      </Typography>
    </Box>
  );
}
