"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, Divider } from "@mui/material";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';

export default function AboutSection() {
  return (
    <Box sx={{ bgcolor: '#ffffff', py: { xs: 15, md: 24 }, position: 'relative' }}>
      <Container maxWidth="xl">
        
        {/* Top Content: Philosophy & Stats */}
        <Grid container spacing={8} sx={{ mb: 12 }}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, mb: 2, display: 'block' }}>
              OUR APPROACH
            </Typography>
            <Typography variant="h2" sx={{ color: '#0B0F19', fontWeight: 900, mb: 4, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
             Technology Built for Growth.  <br />
            <Box component="span" sx={{ color: 'primary.main' }}>Results Designed to Last.</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9, mb: 3, maxWidth: 800 }}>
              Instead of following trends, we focus on building digital solutions that solve real business problems. From high-performance websites and AI automation to SEO and growth strategies, every project is designed with scalability, performance, and measurable business outcomes in mind.
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9, maxWidth: 800 }}>
             We combine engineering, design, and digital marketing into one streamlined process—helping businesses launch faster, operate smarter, and grow with confidence.
            </Typography>
          </Grid>
          
          <Grid size={{ xs: 12, lg: 5 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ p: 5, bgcolor: '#f8f9fa', borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)', width: '100%' }}>
              <Box sx={{ mb: 4,  }}>
                <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 900, mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>100%</Typography>
                <Typography variant="body1" sx={{ color: '#0B0F19', fontWeight: 700, fontSize: { xs: '1rem', md: '1.15rem' } }}>Built to Scale</Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>From websites and SaaS platforms to AI-powered applications, every project is optimized for speed, security, SEO, and future growth.</Typography>
              </Box>
              <Divider sx={{ my: 4 }} />
              <Box>
                <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 900, mb: 1,fontSize: { xs: '2.5rem', md: '3.5rem' }  }}>Performance First</Typography>
                <Typography variant="body1" sx={{ color: '#0B0F19', fontWeight: 700, fontSize: { xs: '1rem', md: '1.15rem' } }}>Client Revenue Scaled</Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>Generated through deterministic marketing and optimized conversion funnels.</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Content: The 3 Pillars (Clean Symmetrical Grid) */}
        <Grid container spacing={4}>
          {/* Pillar 1 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ bgcolor: '#ffffff', p: 5, borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 30px 60px rgba(110,65,226,0.1)', borderColor: 'rgba(110,65,226,0.3)' } }}>
              <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'rgba(110,65,226,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                <CodeOutlinedIcon sx={{ color: 'primary.main', fontSize: 28 }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#0B0F19', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
               Modern Web Engineering
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
               We build custom websites, web applications, and SaaS platforms using modern technologies like Next.js, React, Node.js, and cloud infrastructure. Every solution is designed for speed, security, scalability, and long-term business growth.
              </Typography>
            </Card>
          </Grid>
          
          {/* Pillar 2 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ bgcolor: '#0B0F19', color: 'white', p: 5, borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 30px 60px rgba(0,198,255,0.2)', borderColor: 'rgba(0,198,255,0.3)' } }}>
              <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'rgba(0,198,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                <StorageOutlinedIcon sx={{ color: '#00c6ff', fontSize: 28 }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
               AI Automation & Custom AI Solutions
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                Transform repetitive tasks into automated workflows with AI-powered chatbots, intelligent assistants, document processing, and custom AI solutions that improve productivity and reduce operational costs.
              </Typography>
            </Card>
          </Grid>

          {/* Pillar 3 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ bgcolor: '#ffffff', p: 5, borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 30px 60px rgba(110,65,226,0.1)', borderColor: 'rgba(110,65,226,0.3)' } }}>
              <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'rgba(110,65,226,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                <InsightsOutlinedIcon sx={{ color: 'primary.main', fontSize: 28 }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#0B0F19', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                SEO & Growth Marketing
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
               We combine technical SEO, content strategy, and performance marketing to improve search visibility, generate qualified leads, and help your business grow through measurable digital strategies.
              </Typography>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
