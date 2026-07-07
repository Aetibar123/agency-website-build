"use client";
import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Divider } from "@mui/material";
import { PortfolioProject } from "../../data/portfolioProjects";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from "next/link";
import CtaSection from "../home/CtaSection";

export default function PortfolioDetailClient({ project }: { project: PortfolioProject }) {
  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
      {/* Sticky Back Button */}
      <Box sx={{ position: 'fixed', top: 120, left: { xs: 20, md: 40 }, zIndex: 100 }}>
        <Box 
          component={Link} 
          href="/portfolio"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: 50, height: 50, 
            bgcolor: 'white', 
            borderRadius: '50%',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            color: '#0B0F19',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
              bgcolor: 'primary.main',
              color: 'white'
            }
          }}
        >
          <ArrowBackIcon />
        </Box>
      </Box>

      {/* Hero Section */}
      <Box sx={{ 
        pt: { xs: 15, md: 22 }, 
        pb: { xs: 10, md: 15 }, 
        background: project.image ? `url(${project.image}) center/cover no-repeat` : project.thumbnailColor, 
        color: 'white', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        {project.image && <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(11, 15, 25, 0.7)' }} />}
        {!project.image && <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.2)' }} />}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="caption" sx={{ display: 'inline-block', p: 1, px: 3, bgcolor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: 10, mb: 3, fontWeight: 700, letterSpacing: 2 }}>
            {project.category.toUpperCase()}
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '5.5rem' }, fontWeight: 900, mb: 4, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {project.title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)', mb: 6 }}>
            Client: {project.client}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.4rem', maxWidth: 800, lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>
            {project.summary}
          </Typography>
        </Container>
      </Box>

      {/* Case Study Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Grid container spacing={10}>
          {/* Main Context - Deep Dive */}
          <Grid size={{ xs: 12, md: 7 }}>
            
            {/* The Challenge Section */}
            <Box sx={{ mb: 10 }}>
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, mb: 2, display: 'block' }}>
                PHASE 01
              </Typography>
              <Typography variant="h2" sx={{ color: '#0B0F19', fontWeight: 900, mb: 5, letterSpacing: '-0.02em' }}>
                The Challenge
              </Typography>
              {project.challenge.map((paragraph, idx) => (
                <Typography key={idx} variant="body1" sx={{ color: '#444', fontSize: '1.2rem', lineHeight: 2, mb: 4 }}>
                  {idx === 0 ? (
                    <span style={{ fontSize: '1.4rem', fontWeight: 600, color: '#111' }}>{paragraph.split(' ')[0]} </span>
                  ) : null}
                  {idx === 0 ? paragraph.substring(paragraph.indexOf(' ') + 1) : paragraph}
                </Typography>
              ))}
            </Box>

            <Divider sx={{ mb: 10, opacity: 0.5 }} />

            {/* Execution Strategy Section */}
            <Box sx={{ mb: 10 }}>
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, mb: 2, display: 'block' }}>
                PHASE 02
              </Typography>
              <Typography variant="h2" sx={{ color: '#0B0F19', fontWeight: 900, mb: 5, letterSpacing: '-0.02em' }}>
                Execution Strategy
              </Typography>
              <Box sx={{ pl: 3, borderLeft: '4px solid', borderColor: 'primary.main', mb: 5 }}>
                <Typography variant="body1" sx={{ color: '#6e41e2', fontSize: '1.3rem', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.8 }}>
                  "We didn't just patch the problem. We architected a foundational system designed to scale infinitely."
                </Typography>
              </Box>
              {project.execution.map((paragraph, idx) => (
                <Typography key={idx} variant="body1" sx={{ color: '#444', fontSize: '1.2rem', lineHeight: 2, mb: 4 }}>
                  {paragraph}
                </Typography>
              ))}
            </Box>

            <Divider sx={{ mb: 10, opacity: 0.5 }} />

            {/* The Solution Section */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, mb: 2, display: 'block' }}>
                PHASE 03
              </Typography>
              <Typography variant="h2" sx={{ color: '#0B0F19', fontWeight: 900, mb: 5, letterSpacing: '-0.02em' }}>
                The Solution & Impact
              </Typography>
              {project.solution.map((paragraph, idx) => (
                <Typography key={idx} variant="body1" sx={{ color: '#444', fontSize: '1.2rem', lineHeight: 2, mb: 4 }}>
                  {paragraph}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Results Sidebar */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <Card sx={{ bgcolor: '#0B0F19', color: 'white', borderRadius: 6, border: 'none', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                  <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, mb: 2, display: 'block' }}>
                    KEY METRICS
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: 900, mb: 5, letterSpacing: '-0.02em' }}>
                    The Results
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {project.results.map((result, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <CheckCircleIcon sx={{ color: 'primary.main', mt: 0.5, fontSize: 28 }} />
                        <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                          {result}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>

              {/* Secondary CTA inside sidebar */}
              <Box sx={{ mt: 5, p: 4, bgcolor: '#f8f9fa', borderRadius: 6, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19', mb: 2 }}>
                  Ready to achieve similar results?
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mb: 3 }}>
                  Partner with us to transform your digital infrastructure.
                </Typography>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Box sx={{ display: 'inline-block', px: 4, py: 1.5, bgcolor: 'primary.main', color: 'white', borderRadius: 10, fontWeight: 700, transition: 'all 0.3s ease', '&:hover': { bgcolor: '#0B0F19' } }}>
                    Book a Consultation
                  </Box>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      <CtaSection />
    </Box>
  );
}
