"use client";
import React from "react";
import { Box, Container, Typography, Card, Avatar, Grid } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, FinTech Global",
    content: "We brought Aetibar in after our previous agency failed to scale our Next.js architecture. Not only did they refactor the entire monolithic codebase in under 8 weeks, but they implemented a highly complex AI-driven fraud detection pipeline that saved us $2.4M in projected losses in the first quarter alone. They don't just write code; they engineer business survival.",
    roi: "300% ROI in 3 Months"
  },
  {
    name: "Marcus Aurelius",
    role: "CEO, OmniCart Ecommerce",
    content: "Our conversion rates were bleeding out due to a slow, bloated WordPress setup. Aetibar tore it down and built a headless Shopify architecture that loads instantly. Combined with their aggressive Meta advertising campaigns, we saw our Customer Acquisition Cost drop by 42% while our monthly recurring revenue skyrocketed. They are the only digital partners we will ever need.",
    roi: "42% CAC Reduction"
  },
  {
    name: "Elena Rostova",
    role: "VP Marketing, NovaCorp",
    content: "What impressed me most wasn't just the aesthetic quality of the UI/UX design—which was flawless—it was the strategic methodology behind it. Every pixel was placed to drive a specific user action. They completely rebranded our enterprise SaaS platform and the user retention metrics shot up by 68% within the first month post-launch. Absolute technical mastery.",
    roi: "68% Increase in Retention"
  }
];

export default function TestimonialsSection() {
  return (
    <Box sx={{ bgcolor: '#ffffff', py: { xs: 15, md: 24 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, mb: 2, display: 'block' }}>
            CLIENT OUTCOMES
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: '#0B0F19', fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1, letterSpacing: '-0.02em', mb: 4 }}>
            Proof in the <Box component="span" sx={{ color: 'primary.main' }}>Metrics.</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', fontSize: '1.2rem', maxWidth: 700, mx: 'auto', lineHeight: 1.8 }}>
            We do not ask for trust; we earn it through relentless execution and undeniable data. Here is what happens when you partner with the elite.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((test, idx) => (
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
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 30px 60px rgba(0,0,0,0.08)' }
                }}
              >
              <FormatQuoteIcon sx={{ fontSize: 60, color: 'primary.main', opacity: 0.2, mb: 2, transform: 'rotate(180deg)' }} />
              <Typography variant="body1" sx={{ color: '#333', fontSize: '1.15rem', lineHeight: 1.9, mb: 4, fontStyle: 'italic' }}>
                "{test.content}"
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, p: 2, bgcolor: 'rgba(110,65,226,0.05)', borderRadius: 3, border: '1px dashed rgba(110,65,226,0.3)' }}>
                 <TrendingUpIcon sx={{ color: 'primary.main' }} />
                 <Typography variant="subtitle2" sx={{ color: '#0B0F19', fontWeight: 800 }}>{test.roi}</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: '#0B0F19', color: 'white', fontWeight: 800, width: 48, height: 48 }}>
                  {test.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0B0F19' }}>{test.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontWeight: 600 }}>{test.role}</Typography>
                </Box>
              </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
