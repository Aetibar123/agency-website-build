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
              OUR PHILOSOPHY
            </Typography>
            <Typography variant="h2" sx={{ color: '#0B0F19', fontWeight: 900, mb: 4, fontSize: { xs: '2.5rem', md: '4rem' }, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              We Don't Build Websites. <br />
              We Build <Box component="span" sx={{ color: 'primary.main' }}>Empires.</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.2rem', lineHeight: 1.9, mb: 3, maxWidth: 800 }}>
              The fundamental flaw of the modern digital agency is complacency. They rely on pre-packaged templates, outdated WordPress architectures, and generic marketing copy that blends into the white noise of the internet. Aetibar was founded on a singular rebellion against this mediocrity.
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', fontSize: '1.2rem', lineHeight: 1.9, maxWidth: 800 }}>
              We believe that engineering excellence is the ultimate marketing tool. When your application loads in under 100 milliseconds, when your e-commerce checkout flow is frictionless, and when your customer service is autonomously handled by an intelligent LLM agent—you don't just win customers, you create evangelical advocates. We bridge the gap between heavy-duty software engineering and aggressive performance marketing. 
            </Typography>
          </Grid>
          
          <Grid size={{ xs: 12, lg: 5 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ p: 5, bgcolor: '#f8f9fa', borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)', width: '100%' }}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 900, mb: 1 }}>99.9%</Typography>
                <Typography variant="body1" sx={{ color: '#0B0F19', fontWeight: 700, fontSize: '1.1rem' }}>Uptime SLA Guarantee</Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>Enterprise-grade reliability across all deployed applications.</Typography>
              </Box>
              <Divider sx={{ my: 4 }} />
              <Box>
                <Typography variant="h2" sx={{ color: 'primary.main', fontWeight: 900, mb: 1 }}>$50M+</Typography>
                <Typography variant="body1" sx={{ color: '#0B0F19', fontWeight: 700, fontSize: '1.1rem' }}>Client Revenue Scaled</Typography>
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
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#0B0F19' }}>
                Elite Engineering Core
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8 }}>
                We refuse to use visual page builders or bloated monolithic CMS systems. Our core stack is strictly based on Next.js, React, Node, and hyper-scalable cloud infrastructure (AWS/Vercel). We write clean, robust code that passes strict algorithmic complexity reviews, ensuring your digital infrastructure can handle massive influxes of traffic effortlessly.
              </Typography>
            </Card>
          </Grid>
          
          {/* Pillar 2 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ bgcolor: '#0B0F19', color: 'white', p: 5, borderRadius: 6, border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 30px 60px rgba(0,198,255,0.2)', borderColor: 'rgba(0,198,255,0.3)' } }}>
              <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'rgba(0,198,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                <StorageOutlinedIcon sx={{ color: '#00c6ff', fontSize: 28 }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                AI-Driven Operations
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                We integrate proprietary Large Language Models (LLMs) and custom machine learning pipelines directly into your operational workflow. Whether it's autonomously extracting structured data from thousands of vendor invoices, or deploying a 24/7 technical support agent, we use AI to drastically reduce your overhead and human error rates.
              </Typography>
            </Card>
          </Grid>

          {/* Pillar 3 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ bgcolor: '#ffffff', p: 5, borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', height: '100%', transition: 'all 0.3s ease', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 30px 60px rgba(110,65,226,0.1)', borderColor: 'rgba(110,65,226,0.3)' } }}>
              <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: 'rgba(110,65,226,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                <InsightsOutlinedIcon sx={{ color: 'primary.main', fontSize: 28 }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: '#0B0F19' }}>
                Deterministic Marketing
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8 }}>
                We do not guess. Our digital marketing strategies are built on ruthless data analysis. We restructure your technical SEO foundation to dominate organic search rankings, while simultaneously deploying highly targeted paid advertising campaigns optimizing strictly for Return on Ad Spend (ROAS) and lowering Customer Acquisition Cost (CAC).
              </Typography>
            </Card>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
