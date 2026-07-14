"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const methodologies = [
  {
    phase: "01 Discover",
    title: "Discovery & Strategy",
    icon: <SearchIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    content: "We start by understanding your business, goals, audience, and technical requirements. This helps us create a clear project roadmap before development begins, reducing risks and ensuring every decision supports your long-term growth."
  },
  {
    phase: "02 Build",
    title: "Design & Development",
    icon: <ArchitectureIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    content: "Our team designs intuitive user experiences and develops secure, scalable websites, applications, and AI solutions using modern technologies. Every feature is built with performance, quality, and maintainability in mind."
  },
  {
    phase: "03 Launch",
    title: "Launch & Quality Assurance",
    icon: <RocketLaunchIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    content: "Before launch, every solution goes through comprehensive testing for functionality, performance, security, and responsiveness. Once everything is validated, we deploy your project with confidence."
  },
  {
    phase: "04 Grow",
    title: "Growth & Optimization",
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    content: "Launching is only the beginning. We continuously improve your digital presence through SEO, performance optimization, AI enhancements, and data-driven strategies that help your business grow over time."
  }
];

export default function MethodologySection() {
  return (
    <Box sx={{ bgcolor: '#0B0F19', color: 'white', py: { xs: 15, md: 24 }, position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(110,65,226,0.05) 0%, rgba(11,15,25,1) 70%)' }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, mb: 2, display: 'block' }}>
            HOW WE OPERATE
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.1, letterSpacing: '-0.02em', mb: 4 }}>
            The Aetibar Standard.
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 800, mx: 'auto', lineHeight: 1.8 }}>
            Every successful project follows a proven process. From strategy and development to launch and continuous optimization, we work with a clear roadmap that keeps projects transparent, efficient, and focused on business outcomes.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {methodologies.map((item, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <Card sx={{ bgcolor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 6, p: { xs: 4, md: 6 }, height: '100%', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(110,65,226,0.3)', transform: 'translateY(-5px)' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
                  <Box sx={{ width: 70, height: 70, borderRadius: '50%', bgcolor: 'rgba(110,65,226,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 1 }}>{item.phase}</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: 'white', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>{item.title}</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.9 }}>
                  {item.content}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
