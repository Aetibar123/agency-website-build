"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, Divider } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ServiceFaqSection from '../ServiceFaqSection';
import CtaSection from '../../home/CtaSection';

const seoFaqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. Depending on your website, competition, and industry, noticeable improvements can take several months. We focus on building sustainable growth through continuous optimization."
  },
  {
    question: "Can you guarantee first-page or #1 rankings?",
    answer:
      "No ethical SEO agency can guarantee specific rankings because search engine algorithms constantly evolve. Our focus is on implementing proven SEO strategies that improve visibility, traffic, and long-term performance."
  },
  {
    question: "What does Technical SEO include?",
    answer:
      "Technical SEO includes improving website speed, mobile usability, crawlability, indexing, structured data, Core Web Vitals, and overall website performance to help search engines understand and access your content more effectively."
  },
  {
    question: "Do you provide ongoing SEO support?",
    answer:
      "Yes. SEO requires continuous monitoring, content optimization, technical improvements, and performance analysis to maintain and improve search visibility over time."
  }
];

export default function SeoPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', pt: { xs: 12, md: 16 } }}>
      
      <Container maxWidth="xl">
        <Grid container spacing={8} sx={{ alignItems: 'center', mb: { xs: 10, md: 15 } }}>
          {/* SEO HERO TEXT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, p: 1, px: 2, border: '1px solid', borderColor: 'primary.main', borderRadius: 10, mb: 4, bgcolor: 'rgba(110,65,226,0.05)' }}>
              <SearchOutlinedIcon sx={{ color: 'primary.main' }} />
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 1 }}>
              Organic Growth
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '1.9rem', md: '3rem' }, fontWeight: 900, mb: 3, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Search Engine <br />
              <span style={{ color: '#6e41e2' }}>Optimization</span>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, mb: 5, lineHeight: 1.9 }}>
              {service.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#0B0F19', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>Search</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8 }}>Performance</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#0B0F19', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>Organic</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8 }}>Traffic Source</Typography>
              </Box>
            </Box>
          </Grid>
          
          {/* SEO HERO IMAGE */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box 
              sx={{ 
                height: { xs: 350, md: 600 },
                borderRadius: 8,
                backgroundImage: 'url(/images/services/seo.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 40px 80px rgba(110,65,226,0.15)',
                border: '1px solid rgba(110,65,226,0.3)',
              }} 
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 10, borderColor: '#f0f0f0' }} />

        <Grid container spacing={10}>
          {/* LEFT SIDEBAR - ARCHITECTURE */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <LanguageOutlinedIcon sx={{ fontSize: 60, color: 'primary.main', mb: 3 }} />
              <Typography variant="h4" sx={{ fontWeight: 900, color: '#0B0F19', mb: 4, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                The SEO Architecture
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {service.features.map((feature, idx) => (
                  <Box key={idx} sx={{ borderLeft: '4px solid #6e41e2', pl: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#0B0F19', mb: 1, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>{feature.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>{feature.desc}</Typography>
                  </Box>
                ))}
              </Box>

              <Card sx={{ mt: 6, p: 4, bgcolor: '#f8f9fa', borderRadius: 4, border: '1px solid #eee', boxShadow: 'none' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: '#0B0F19', textTransform: 'uppercase' }}>Software Stack</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {service.technologies.map((tech, idx) => (
                    <Box key={idx} sx={{ px: 2, py: 0.5, bgcolor: 'white', borderRadius: 1, border: '1px solid #e0e0e0' }}>
                      <Typography variant="caption" sx={{ fontWeight: 700 }}>{tech}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Box>
          </Grid>

          {/* MAIN CONTENT - 600 WORDS */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={{ p: { xs: 4, md: 8 }, borderRadius: 6, boxShadow: '0 20px 60px rgba(0,0,0,0.03)', border: '1px solid #f5f5f5' }}>
              {service.detailedContent?.map((content, idx) => (
                <Box key={idx} sx={{ mb: idx === service.detailedContent!.length - 1 ? 0 : 8 }}>
                  <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, color: '#0B0F19', fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
                    {content.heading}
                  </Typography>
                  {content.paragraphs.map((p, pIdx) => (
                    <Typography key={pIdx} variant="body1" sx={{ color: '#444', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9, mb: 3 }}>
                      {p}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <ServiceFaqSection faqs={seoFaqs} />
      <CtaSection />
    </Box>
  );
}
