"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import ServiceFaqSection from '../ServiceFaqSection';
import CtaSection from '../../home/CtaSection';

const toolsFaqs = [
  {
    question: "Do you build custom internal AI tools or white-label SaaS products?",
    answer: "Both. We build highly secure, custom internal tools (like contract analyzers or predictive inventory engines) for enterprise operations, as well as scalable, white-label AI features that you can integrate directly into your own SaaS product to offer to your users."
  },
  {
    question: "Can these tools connect to our existing databases?",
    answer: "Absolutely. Our tools are designed to be entirely API-driven. We can seamlessly integrate our AI engines with your existing ERPs (SAP, Oracle), CRMs (Salesforce), or custom Postgres/SQL data lakes."
  },
  {
    question: "Who owns the IP of the custom AI tools you build?",
    answer: "You do. We are a development agency. Once the final milestone is delivered and paid for, the entire codebase, architecture, and Intellectual Property (IP) of the custom tool is 100% transferred to your company."
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
            Proprietary <span style={{ color: '#8a2be2' }}>Intelligence</span>
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
