"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Chip } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import ServiceFaqSection from '../ServiceFaqSection';
import CtaSection from '../../home/CtaSection';

const appDevFaqs = [
  {
    question: "Do you develop apps for both Android and iOS?",
    answer:
      "Yes. We build cross-platform mobile applications that run on both Android and iOS, helping businesses reach a wider audience while reducing development time and maintenance costs."
  },
  {
    question: "Can the app work without an internet connection?",
    answer:
      "Yes, when required. We can develop applications with offline functionality that allows users to access important features and automatically sync data once an internet connection is available."
  },
  {
    question: "Will you publish the app on the App Store and Google Play?",
    answer:
      "Yes. We assist with the complete deployment process, including app store preparation, submission, and publishing for both Apple App Store and Google Play."
  },
  {
    question: "Can my app be expanded with new features later?",
    answer:
      "Absolutely. We build scalable applications that can easily support new features, integrations, and future business requirements as your product grows."
  }
];

export default function AppDevelopmentPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', pt: { xs: 12, md: 16 } }}>
      
      {/* HERO SECTION */}
      <Box sx={{ textAlign: 'center', mb: 10, px: 2 }}>
        <Typography variant="caption" sx={{ display: 'inline-block', p: 1, px: 3, bgcolor: '#f0f4ff', color: '#3366ff', borderRadius: 10, mb: 3, fontWeight: 700, letterSpacing: 1 }}>
         APP DEVELOPMENT
        </Typography>
        <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '1.9rem', md: '3rem' }, fontWeight: 900, mb: 3, letterSpacing: '-0.02em' }}>
          {service.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9, maxWidth: 700, mx: 'auto', mb: 6 }}>
          {service.subtitle}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
           <AppleIcon sx={{ fontSize: 40, color: '#000' }} />
           <AndroidIcon sx={{ fontSize: 40, color: '#3DDC84' }} />
        </Box>
      </Box>

      <Container maxWidth="lg">
        {/* HUGE HERO IMAGE */}
        <Box 
          sx={{ 
            width: '100%', 
            height: { xs: 300, md: 600 }, 
            backgroundImage: 'url(/images/services/app-development.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 6,
            boxShadow: '0 40px 80px rgba(0,0,0,0.08)',
            mb: { xs: 10, md: 15 }
          }} 
        />

        {/* CONTENT & FEATURES SPLIT */}
        <Grid container spacing={10}>
          <Grid size={{ xs: 12, md: 7 }}>
            {service.detailedContent?.map((content, idx) => (
              <Box key={idx} sx={{ mb: 8 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, color: '#0B0F19', fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
                  {content.heading}
                </Typography>
                {content.paragraphs.map((p, pIdx) => (
                  <Typography key={pIdx} variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9, mb: 3 }}>
                    {p}
                  </Typography>
                ))}
              </Box>
            ))}
          </Grid>
          
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: '#0B0F19', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Key Capabilities
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 6 }}>
                {service.features.map((feature, idx) => (
                  <Card key={idx} sx={{ bgcolor: '#f8f9fa', border: 'none', boxShadow: 'none', borderRadius: 4 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#3366ff', mb: 1, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>{feature.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>{feature.desc}</Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      {/* MASSIVE TECH STACK BANNER */}
      <Box sx={{ mt: 10, bgcolor: '#0B0F19', color: 'white', py: { xs: 10, md: 15 } }}>
        <Container maxWidth="xl">
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 6, textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
            Built with Modern Technologies
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, maxWidth: 900, mx: 'auto' }}>
            {service.technologies.map((tech, idx) => (
              <Chip 
                key={idx} 
                label={tech} 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.05)', 
                  color: 'white', 
                  fontSize: '1.2rem',
                  py: 3,
                  px: 3,
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    borderColor: 'primary.main',
                    transform: 'translateY(-2px)'
                  }
                }} 
              />
            ))}
          </Box>
        </Container>
      </Box>
      <ServiceFaqSection faqs={appDevFaqs} />
      <CtaSection />
    </Box>
  );
}
