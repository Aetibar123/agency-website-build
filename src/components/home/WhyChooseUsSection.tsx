"use client";
import React from "react";
import { Box, Container, Typography, Card, Grid } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';
import HandshakeIcon from '@mui/icons-material/Handshake';

const reasons = [
  {
    title: "100% Custom Development",
    content: "Every successful business deserves technology that grows with it. That's why we build scalable, future-ready digital solutions instead of one-size-fits-all products.",
    icon: <CodeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
  },
  {
    title: "Performance & SEO Focused",
    content: "Performance isn't an afterthought. Every website, application, and AI solution is engineered for speed, security, and search visibility from day one.",
    icon: <SpeedIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
  },
  {
    title: "Long-Term Partnership",
    content: "Our goal isn't simply to launch a project—it's to become a long-term technology partner that supports your business as it grows.",
    icon: <HandshakeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
  }
];

export default function WhyChooseUsSection() {
  return (
    <Box sx={{ bgcolor: '#ffffff', py: { xs: 15, md: 24 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, mb: 2, display: 'block' }}>
            WHY CHOOSE AETIBAR
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: '#0B0F19', fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.1, letterSpacing: '-0.02em', mb: 4 }}>
            Built on Trust. <Box component="span" sx={{ color: 'primary.main' }}>Driven by Results.</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 700, mx: 'auto', lineHeight: 1.8 }}>
            Instead of making unrealistic promises, we focus on delivering reliable digital solutions that help businesses grow. Every project is built with performance, scalability, and long-term success in mind.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {reasons.map((reason, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Card 
                sx={{ 
                  bgcolor: '#f8f9fa', 
                  borderRadius: 6, 
                  p: { xs: 4, md: 5 }, 
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }
                }}
              >
                {reason.icon}
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19', mb: 2 }}>
                  {reason.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8 }}>
                  {reason.content}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
