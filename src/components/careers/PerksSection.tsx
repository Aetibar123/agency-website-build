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
      title: "Remote-First Culture",
      desc: "Work from anywhere in the world. We care about output, not office hours.",
      icon: <PublicIcon fontSize="large" color="primary" />
    },
    {
      title: "Elite Hardware",
      desc: "Top-of-the-line MacBook Pros and a generous home office stipend.",
      icon: <ComputerIcon fontSize="large" color="primary" />
    },
    {
      title: "Continuous Growth",
      desc: "Unlimited budget for books, courses, and premium industry conferences.",
      icon: <TrendingUpIcon fontSize="large" color="primary" />
    },
    {
      title: "Comprehensive Health",
      desc: "Premium global health, dental, and vision insurance for you & your family.",
      icon: <HealthAndSafetyIcon fontSize="large" color="primary" />
    }
  ];

  return (
    <Box sx={{ py: { xs: 12, md: 18 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h2" sx={{ color: '#0B0F19', mb: 3, fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.02em' }}>
            Why Aetibar?
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 600, mx: 'auto', fontSize: '1.25rem' }}>
            We demand excellence, and we reward it. Our benefits are designed to support your life, health, and professional growth.
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
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19', mb: 2 }}>
                    {perk.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
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
