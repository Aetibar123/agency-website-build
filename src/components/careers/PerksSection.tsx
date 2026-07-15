"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import ComputerIcon from '@mui/icons-material/Computer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PublicIcon from '@mui/icons-material/Public';

export default function PerksSection() {
 const perks = [
  {
    title: "Remote-First Flexibility",
    desc: "Work from anywhere and collaborate with a global team. We value impact, creativity, and results over traditional office boundaries.",
    icon: <PublicIcon fontSize="large" color="primary" />
  },
  {
    title: "Modern Development Environment",
    desc: "Access the tools, technologies, and resources you need to build high-quality digital products efficiently.",
    icon: <ComputerIcon fontSize="large" color="primary" />
  },
  {
    title: "Continuous Learning",
    desc: "Grow your skills through knowledge sharing, technical exploration, and opportunities to work on cutting-edge technologies.",
    icon: <TrendingUpIcon fontSize="large" color="primary" />
  },
  {
    title: "Wellbeing & Balance",
    desc: "We believe great work comes from healthy teams. We support a culture built around balance, respect, and sustainable growth.",
    icon: <HealthAndSafetyIcon fontSize="large" color="primary" />
  }
];

  return (
    <Box sx={{ py: { xs: 12, md: 18 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{ color: '#0B0F19', mb: 3, fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
            Why Aetibar?
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9 }}>
            <span style={{ fontSize: '{xs:"1.2rem",md:"1.5rem"}', fontWeight: '700', color: '#6E41E2' }}>Build. Learn. Grow.</span> <br />
            We believe exceptional work comes from exceptional people. At Aetibar, we create an environment where talented individuals can do their best work, explore new ideas, and grow alongside a team passionate about technology and innovation.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {perks.map((perk, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  bgcolor: '#fcfcfc',
                  border: '1px solid rgba(0,0,0,0.03)',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                  borderRadius: 4,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px -10px rgba(110,65,226,0.1)',
                  }
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ p: 1.5, display: 'inline-flex', bgcolor: 'rgba(110,65,226,0.1)', borderRadius: 3, mb: 3 }}>
                    {perk.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19', mb: 2, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    {perk.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8 }}>
                    {perk.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
