"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, Divider } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import ServiceFaqSection from '../ServiceFaqSection';
import CtaSection from '../../home/CtaSection';

const contentFaqs = [
  {
    question: "Do you shoot on location?",
    answer: "Yes. We have mobile production crews equipped with RED cameras and cinema lenses ready to travel globally to capture your brand's essence, facilities, and leadership team in 4K/8K resolution."
  },
  {
    question: "Can you manage our social media accounts completely?",
    answer: "Absolutely. We offer full-service Social Media Management. We don't just create the content; we handle the posting schedule, community management, and growth strategies across all major platforms."
  },
  {
    question: "How do you ensure the content matches our brand voice?",
    answer: "Before any cameras roll or copy is written, we conduct a deep 'Brand Discovery' workshop. We build a comprehensive brand Bible that dictates tone, visual aesthetics, and messaging pillars, ensuring 100% consistency."
  }
];

export default function ContentCreationPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#fafafa', color: '#111', minHeight: '100vh', pt: { xs: 12, md: 16 } }}>
      
      {/* EDITORIAL HERO SECTION */}
      <Container maxWidth="md" sx={{ mb: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, p: 1, px: 3, border: '1px solid #e0e0e0', borderRadius: 10, mb: 4, bgcolor: 'white' }}>
          <CreateOutlinedIcon sx={{ color: 'primary.main', fontSize: 18 }} />
          <Typography variant="caption" sx={{ color: '#444', fontWeight: 700, letterSpacing: 2 }}>
            AUTHORITATIVE COPY
          </Typography>
        </Box>
        <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 900, mb: 4, fontFamily: 'serif' }}>
          {service.title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.35rem', lineHeight: 1.8, px: { md: 6 } }}>
          {service.description}
        </Typography>
      </Container>

      <Container maxWidth="xl" sx={{ mb: 10 }}>
        <Box 
          sx={{ 
            width: '100%',
            height: { xs: 400, md: 650 },
            borderRadius: 8,
            backgroundImage: 'url(/images/services/content-creation.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 40px 80px rgba(0,0,0,0.08)',
          }} 
        />
      </Container>

      {/* CONTENT DIVING IN */}
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 10 } }}>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 8 }}>
            {service.detailedContent?.map((content, idx) => (
              <Box key={idx} sx={{ mb: 10 }}>
                {idx === 0 && <FormatQuoteOutlinedIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2, opacity: 0.2 }} />}
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, color: '#0B0F19', fontFamily: 'serif' }}>
                  {content.heading}
                </Typography>
                {content.paragraphs.map((p, pIdx) => (
                  <Typography key={pIdx} variant="body1" sx={{ color: '#333', fontSize: '1.25rem', lineHeight: 2.2, mb: 3 }}>
                    {p}
                  </Typography>
                ))}
                {idx !== service.detailedContent!.length - 1 && <Divider sx={{ my: 8, borderColor: '#e0e0e0', width: '30%' }} />}
              </Box>
            ))}
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <Card sx={{ bgcolor: 'white', borderRadius: 4, p: 4, mb: 4, border: '1px solid #eee', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, color: '#0B0F19' }}>Content Arsenal</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {service.features.map((feature, idx) => (
                    <Box key={idx} sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ color: 'primary.main', fontWeight: 800 }}>0{idx + 1}</Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#0B0F19' }}>{feature.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{feature.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Card>

              <Box sx={{ px: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'text.secondary', textTransform: 'uppercase' }}>Software</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {service.technologies.map((tech, idx) => (
                    <Box key={idx} sx={{ px: 2, py: 1, bgcolor: '#f0f0f0', borderRadius: 1 }}>
                      <Typography variant="caption" sx={{ fontWeight: 600, color: '#444' }}>{tech}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      
      <ServiceFaqSection faqs={contentFaqs} />
      <CtaSection />
    </Box>
  );
}
