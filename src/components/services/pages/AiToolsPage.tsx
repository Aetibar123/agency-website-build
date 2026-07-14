"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import ServiceFaqSection from '../ServiceFaqSection';
import CtaSection from '../../home/CtaSection';

const toolsFaqs = [
  {
    question: "Can you build custom AI solutions for my business?",
    answer:
      "Yes. We develop custom AI solutions tailored to your business requirements, including internal business tools, AI-powered web applications, workflow automation, chatbots, document processing systems, and AI features for SaaS products."
  },
  {
    question: "Can AI integrate with our existing software and databases?",
    answer:
      "Yes. We can integrate AI solutions with your existing databases, CRMs, business applications, APIs, and third-party platforms to ensure a seamless workflow without disrupting your current systems."
  },
  {
    question: "Who owns the AI solution after the project is completed?",
    answer:
      "Once the project is completed and delivered, you own the source code, project assets, and intellectual property as outlined in the project agreement."
  },
  {
    question: "Can the AI solution be expanded in the future?",
    answer:
      "Absolutely. We build scalable AI solutions that can be extended with new features, integrations, and capabilities as your business grows."
  }
];

export default function AiToolsPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
      
      {/* ABSTRACT BACKGROUND ELEMENTS */}
      <Box sx={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(138,43,226,0.05) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }} />
      <Box sx={{ position: 'absolute', bottom: -200, left: -200, width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(65,105,225,0.05) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, pt: { xs: 12, md: 16 } }}>
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 900, mb: 3 }}>
            Custom <span style={{ color: '#8a2be2' }}> AI Solutions</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', maxWidth: 800, mx: 'auto' }}>
            {service.description}
          </Typography>
        </Box>

        {/* HERO IMAGE - DASHBOARD */}
        <Box 
          sx={{ 
            width: '100%', 
            height: { xs: 300, md: 600 }, 
            backgroundImage: 'url(/images/services/ai-tools.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 6,
            boxShadow: '0 40px 80px rgba(138,43,226,0.1)',
            mb: { xs: 10, md: 15 }
          }} 
        />

        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 8 }}>
             {/* 600 WORD CONTENT */}
             {service.detailedContent?.map((content, idx) => (
              <Box key={idx} sx={{ mb: 8 }}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, color: '#0B0F19' }}>
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

          <Grid size={{ xs: 12, md: 4 }}>
             <Box sx={{ position: 'sticky', top: 120 }}>
                <Card sx={{ bgcolor: '#ffffff', borderRadius: 4, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)', mb: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#0B0F19' }}>Architecture Highlights</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {service.features.map((feature, idx) => (
                      <Box key={idx}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#8a2be2' }}>{feature.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{feature.desc}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>

                <Card sx={{ bgcolor: '#0B0F19', color: 'white', borderRadius: 4, p: 4 }}>
                   <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>Deployment Stack</Typography>
                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {service.technologies.map((tech, idx) => (
                        <Box key={idx} sx={{ px: 2, py: 1, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>{tech}</Typography>
                        </Box>
                      ))}
                    </Box>
                </Card>
             </Box>
          </Grid>
        </Grid>
      </Container>
      
      <ServiceFaqSection faqs={toolsFaqs} />
      <CtaSection />
    </Box>
  );
}
