"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const methodologies = [
  {
    phase: "PHASE 01",
    title: "Discovery & Blueprinting",
    icon: <SearchIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    content: "We never write a single line of code without a master plan. During the discovery phase, our technical architects and growth strategists conduct a deep-dive audit into your existing infrastructure, data lakes, and marketing funnels. We identify bottlenecks, security vulnerabilities, and missed revenue opportunities. The deliverable is a comprehensive Blueprint—a highly detailed architectural document outlining the exact tech stack, database schemas, and AI models required to execute the vision."
  },
  {
    phase: "PHASE 02",
    title: "Agile Engineering",
    icon: <ArchitectureIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    content: "Once the blueprint is approved, our elite engineering pods deploy. We operate on strict, 2-week agile sprint cycles. You are never left in the dark; you have direct access to staging environments where you can watch the application come to life in real-time. We enforce rigorous code reviews, automated unit testing, and continuous integration/continuous deployment (CI/CD) pipelines to ensure every push to production is flawless and secure."
  },
  {
    phase: "PHASE 03",
    title: "Launch & Stabilization",
    icon: <RocketLaunchIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    content: "Deployment is not the finish line; it is the starting line. During the critical launch window, our DevOps team monitors server health, database queries, and Core Web Vitals 24/7. We utilize load balancers and auto-scaling cloud clusters (AWS/Vercel) to ensure that even if your traffic spikes by 10,000%, your application remains blazing fast and perfectly stable."
  },
  {
    phase: "PHASE 04",
    title: "Scale & Optimize",
    icon: <TrendingUpIcon sx={{ fontSize: 32, color: 'primary.main' }} />,
    content: "With a rock-solid infrastructure in place, our performance marketing team takes the reins. We unleash aggressive, data-driven ad campaigns and Technical SEO strategies to flood your new system with highly qualified traffic. Simultaneously, we use AI analytics to monitor user behavior, running continuous A/B tests to iteratively improve conversion rates and maximize your Return on Investment (ROI)."
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
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1, letterSpacing: '-0.02em', mb: 4 }}>
            The Aetibar Standard.
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: 800, mx: 'auto', lineHeight: 1.8 }}>
            We do not believe in chaos. From the initial handshake to the multi-million dollar scaling phase, our operational methodology is a heavily refined, deterministic machine designed to eliminate risk and guarantee results.
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
                    <Typography variant="h4" sx={{ fontWeight: 800, color: 'white' }}>{item.title}</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.9 }}>
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
