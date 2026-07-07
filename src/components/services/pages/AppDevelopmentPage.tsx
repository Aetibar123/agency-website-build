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
    question: "Do you build for iOS, Android, or both?",
    answer: "We typically build using cross-platform frameworks like React Native, which allows us to deploy highly performant, native-feeling applications to both iOS and Android simultaneously. This saves you significant development time and budget compared to building two separate native apps."
  },
  {
    question: "Can my app work completely offline?",
    answer: "Yes. We specialize in 'offline-first' architecture. By utilizing robust local databases and background synchronization engines, we can ensure your app remains functional and caches data even when the user enters a complete network dead zone."
  },
  {
    question: "Will you help us launch the app on the App Store and Google Play?",
    answer: "Absolutely. Our service doesn't end at development. We handle the entire deployment process, ensuring all strict compliance, privacy policies, and technical requirements are met for successful approval on both Apple and Google stores."
  }
];

export default function AppDevelopmentPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', pt: { xs: 12, md: 16 } }}>
      
      {/* HERO SECTION */}
      <Box sx={{ textAlign: 'center', mb: 10, px: 2 }}>
        <Typography variant="caption" sx={{ display: 'inline-block', p: 1, px: 3, bgcolor: '#f0f4ff', color: '#3366ff', borderRadius: 10, mb: 3, fontWeight: 700, letterSpacing: 1 }}>
          MOBILE PLATFORMS
        </Typography>
        <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 900, mb: 3, letterSpacing: '-0.02em' }}>
          {service.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', maxWidth: 700, mx: 'auto', mb: 6 }}>
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
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, color: '#0B0F19', fontSize: '2rem' }}>
                  {content.heading}
                </Typography>
                {content.paragraphs.map((p, pIdx) => (
                  <Typography key={pIdx} variant="body1" sx={{ color: 'text.secondary', fontSize: '1.15rem', lineHeight: 2, mb: 3 }}>
                    {p}
                  </Typography>
                ))}
              </Box>
            ))}
          </Grid>
          
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: '#0B0F19' }}>
                Key Capabilities
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 6 }}>
                {service.features.map((feature, idx) => (
                  <Card key={idx} sx={{ bgcolor: '#f8f9fa', border: 'none', boxShadow: 'none', borderRadius: 4 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#3366ff', mb: 1 }}>{feature.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{feature.desc}</Typography>
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
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 6, textAlign: 'center', letterSpacing: '-0.02em' }}>
            Powered By Modern Technologies
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
