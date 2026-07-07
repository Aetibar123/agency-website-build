"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const techLogos = [
  "Next.js", "React", "Node.js", "TypeScript", "Python", 
  "TensorFlow", "OpenAI", "AWS", "Vercel", "PostgreSQL",
  "TailwindCSS", "Figma", "Meta Ads", "Google Ads"
];

export default function TechStackSection() {
  return (
    <Box sx={{ bgcolor: '#0B0F19', py: { xs: 8, md: 10 }, borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
      <Container maxWidth="lg" sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, display: 'block', mb: 2 }}>
          ENTERPRISE GRADE ARSENAL
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}>
          We do not compromise on technology. Every application, AI pipeline, and marketing campaign is built upon the most robust, scalable, and secure platforms available in the modern digital ecosystem.
        </Typography>
      </Container>
      
      {/* CSS Marquee */}
      <Box sx={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'scroll 40s linear infinite',
        '@keyframes scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        '&:hover': {
          animationPlayState: 'paused'
        }
      }}>
        {/* Double the array for seamless infinite scroll */}
        {[...techLogos, ...techLogos].map((tech, idx) => (
          <Box 
            key={idx} 
            sx={{ 
              display: 'inline-block', 
              px: { xs: 4, md: 8 }, 
              py: 2, 
              mx: 2, 
              bgcolor: 'rgba(255,255,255,0.02)', 
              borderRadius: 2, 
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'all 0.3s ease',
              '&:hover': { bgcolor: 'rgba(110,65,226,0.1)', borderColor: 'rgba(110,65,226,0.3)', transform: 'translateY(-2px)' }
            }}
          >
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, opacity: 0.8 }}>
              {tech}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
