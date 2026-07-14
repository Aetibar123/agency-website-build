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
    question: "What types of content do you create?",
    answer:
      "We create website content, landing pages, blog articles, service pages, email campaigns, social media content, product descriptions, and other marketing materials tailored to your business goals."
  },
  {
    question: "Do you create SEO-friendly content?",
    answer:
      "Yes. We develop content using keyword research, search intent, and SEO best practices to improve visibility while keeping the content natural, informative, and easy to read."
  },
  {
    question: "Can you match our existing brand voice?",
    answer:
      "Absolutely. We take time to understand your brand, audience, and communication style so every piece of content maintains a consistent tone across all platforms."
  },
  {
    question: "Can you provide ongoing content support?",
    answer:
      "Yes. We offer ongoing content creation for blogs, websites, marketing campaigns, newsletters, and social media to help businesses maintain a consistent online presence."
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
           Content That Connects
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
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, color: '#0B0F19' }}>Content Expertise</Typography>
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
