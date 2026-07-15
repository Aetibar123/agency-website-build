"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { getAllProjects } from "../../data/portfolioProjects";
import PortfolioCard from "../../components/portfolio/PortfolioCard";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const allProjects = getAllProjects();

  const categories = ['All', 'Web Development', 'App Development', 'AI Automation', 'AI Tools', 'Digital Marketing', 'SEO'];

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <Box sx={{ bgcolor: '#fcfcfc', minHeight: '100vh', pt: { xs: 15, md: 22 }, pb: { xs: 10, md: 20 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="caption" sx={{ display: 'inline-block', p: 1, px: 3, bgcolor: 'rgba(110,65,226,0.1)', color: 'primary.main', borderRadius: 10, mb: 3, fontWeight: 700, letterSpacing: 2 }}>
            OUR WORK
          </Typography>
          <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '1.9rem', md: '3rem' }, fontWeight: 900, mb: 4, letterSpacing: '-0.02em' }}>
            Projects Built to Solve <Box component="span" sx={{ color: 'primary.main' }}>Real Business Challenges.</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 700, mx: 'auto', mb: 8, lineHeight: 1.9 }}>
           Explore a selection of websites, applications, and digital solutions we've designed and developed for businesses focused on growth, performance, and long-term success.
          </Typography>

          {/* Filtering */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, mb: 10 }}>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                sx={{
                  borderRadius: 10,
                  px: 3, py: 1,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  bgcolor: activeFilter === category ? 'primary.main' : 'transparent',
                  color: activeFilter === category ? 'white' : '#666',
                  border: '1px solid',
                  borderColor: activeFilter === category ? 'primary.main' : 'rgba(0,0,0,0.1)',
                  '&:hover': {
                    bgcolor: activeFilter === category ? 'primary.main' : 'rgba(110,65,226,0.05)',
                    borderColor: 'primary.main'
                  }
                }}
              >
                {category}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Portfolio Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project, idx) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
              <PortfolioCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
