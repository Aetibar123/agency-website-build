"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Chip, Divider } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import CodeIcon from '@mui/icons-material/Code';
import ServiceFaqSection from '../ServiceFaqSection';
import CtaSection from '../../home/CtaSection';

const webDevFaqs = [
  {
    question: "Do you build custom websites?",
    answer:
      "Yes. We develop custom websites and web applications tailored to your business requirements, focusing on performance, scalability, security, and long-term maintainability."
  },
  {
    question: "Can you integrate my website with third-party services?",
    answer:
      "Absolutely. We can integrate payment gateways, CRMs, APIs, authentication systems, analytics tools, and other third-party services based on your project requirements."
  },
  {
    question: "Will my website work on all devices?",
    answer:
      "Yes. Every website we build is fully responsive and optimized to provide a consistent experience across desktops, tablets, and mobile devices."
  },
  {
    question: "Can the website be expanded as my business grows?",
    answer:
      "Yes. We build scalable web applications that can support new features, integrations, and future business requirements without requiring a complete rebuild."
  }
];
export default function WebDevelopmentPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh' }}>
      {/* HERO SECTION - LIGHT THEME */}
      <Box sx={{ pt: { xs: 12, md: 16 }, pb: 10, bgcolor: '#f8f9fa', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, p: 1, px: 2, bgcolor: 'rgba(110,65,226,0.1)', borderRadius: 2, mb: 3 }}>
                <CodeIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Web Engineering
                </Typography>
              </Box>
              <Typography variant="h1" sx={{ color: 'secondary.main', mb: 4, fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', mb: 5, maxWidth: 600, lineHeight: 1.8 }}>
                {service.description}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box 
                sx={{ 
                  height: { xs: 350, md: 500 },
                  borderRadius: 6,
                  backgroundImage: 'url(/images/services/web-development.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 30px 60px -20px rgba(110,65,226,0.3)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  position: 'relative'
                }} 
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 10, md: 15 } }}>
        <Grid container spacing={10}>
          {/* LEFT SIDEBAR - STICKY MENU */}
          <Grid size={{ xs: 12, md: 4, lg: 3 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, color: 'secondary.main' }}>
                On this page
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {service.detailedContent?.map((section, idx) => (
                  <Typography key={idx} variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                    {section.heading}
                  </Typography>
                ))}
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                  System Architecture
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                  Tech Stack & Domains
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* MAIN CONTENT - 600 WORDS */}
          <Grid size={{ xs: 12, md: 8, lg: 9 }}>
            {service.detailedContent?.map((content, idx) => (
              <Box key={idx} sx={{ mb: 8 }}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, color: 'secondary.main' }}>
                  {content.heading}
                </Typography>
                {content.paragraphs.map((p, pIdx) => (
                  <Typography key={pIdx} variant="body1" sx={{ color: 'text.secondary', fontSize: '1.15rem', lineHeight: 2, mb: 3 }}>
                    {p}
                  </Typography>
                ))}
              </Box>
            ))}

            {/* FEATURES - LIGHT CARDS */}
            <Box sx={{ mt: 10, mb: 10 }}>
              <Typography variant="h3" sx={{ mb: 6, fontWeight: 800, color: 'secondary.main' }}>System Architecture</Typography>
              <Grid container spacing={4}>
                {service.features.map((feature, idx) => (
                  <Grid size={{ xs: 12, md: 6 }} key={idx}>
                    <Card sx={{ bgcolor: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                      <CardContent sx={{ p: 4 }}>
                        <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: 'rgba(110,65,226,0.1)', mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography sx={{ color: 'primary.main', fontWeight: 800 }}>0{idx + 1}</Typography>
                        </Box>
                        <Typography variant="h5" sx={{ color: 'secondary.main', mb: 2, fontWeight: 700 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                          {feature.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* TECH STACK & DOMAINS - DARK BANNER ACCENT */}
      <Box sx={{ bgcolor: '#0B0F19', color: 'white', py: { xs: 10, md: 15 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={10}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>
                Our Tech Stack
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {service.technologies.map((tech, idx) => (
                  <Chip 
                    key={idx} 
                    label={tech} 
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.05)', 
                      color: 'white', 
                      fontSize: '1.1rem',
                      py: 3,
                      px: 2,
                      borderRadius: 2,
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontWeight: 600,
                    }} 
                  />
                ))}
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 4 }}>
               Industries Served
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {service.domains.map((domain, idx) => (
                  <Box key={idx} sx={{ borderLeft: '3px solid #6e41e2', pl: 3 }}>
                    <Typography variant="h5" sx={{ color: 'white', mb: 1, fontWeight: 700 }}>
                      {domain.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                      {domain.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ServiceFaqSection faqs={webDevFaqs} />
      <CtaSection />
    </Box>
  );
}
