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
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term compound strategy. While technical fixes can yield immediate indexing improvements, significant movement in highly competitive organic keywords typically takes 3 to 6 months of consistent, high-quality optimization."
  },
  {
    question: "Do you guarantee a #1 ranking on Google?",
    answer: "No reputable agency can guarantee a #1 spot, as Google's algorithm is proprietary and constantly evolving. However, we guarantee the execution of a world-class, data-driven strategy that has consistently placed our clients in the Top 3 for their primary revenue-driving keywords."
  },
  {
    question: "What is Technical SEO?",
    answer: "Technical SEO involves optimizing the underlying architecture of your website. This includes dramatically improving server response times, fixing Core Web Vitals, structuring schema markup, and ensuring Googlebot can crawl and index your site flawlessly."
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
                ORGANIC DOMINANCE
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 900, mb: 3, lineHeight: 1.1 }}>
              Search Engine <br />
              <span style={{ color: '#6e41e2' }}>Optimization</span>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', mb: 5, lineHeight: 1.8 }}>
              {service.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#0B0F19' }}>#1</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>Target Ranking</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#0B0F19' }}>Organic</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>Traffic Source</Typography>
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
              <Typography variant="h4" sx={{ fontWeight: 900, color: '#0B0F19', mb: 4 }}>
                The SEO Architecture
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {service.features.map((feature, idx) => (
                  <Box key={idx} sx={{ borderLeft: '4px solid #6e41e2', pl: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#0B0F19', mb: 1 }}>{feature.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{feature.desc}</Typography>
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
                  <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, color: '#0B0F19' }}>
                    {content.heading}
                  </Typography>
                  {content.paragraphs.map((p, pIdx) => (
                    <Typography key={pIdx} variant="body1" sx={{ color: '#444', fontSize: '1.15rem', lineHeight: 2.1, mb: 3 }}>
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
