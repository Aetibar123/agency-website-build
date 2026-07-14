"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ServiceFaqSection from '../ServiceFaqSection';
import CtaSection from '../../home/CtaSection';

const digitalFaqs = [
  {
    question: "How do you measure the success of a marketing campaign?",
    answer:
      "We measure campaign performance using meaningful business metrics such as website traffic, lead generation, conversion rates, customer engagement, and return on marketing investment. Every campaign is monitored and optimized based on its objectives."
  },
  {
    question: "Do you provide marketing services for both B2B and B2C businesses?",
    answer:
      "Yes. We develop customized digital marketing strategies for both B2B and B2C businesses, adapting campaigns to your target audience, industry, and business goals."
  },
  {
    question: "Will I receive regular campaign reports?",
    answer:
      "Yes. We provide regular performance reports and campaign updates that help you understand progress, key metrics, and opportunities for further optimization."
  },
  {
    question: "Can you manage multiple marketing channels?",
    answer:
      "Absolutely. We can manage content marketing, social media, email marketing, SEO, paid advertising, and other digital channels through a unified marketing strategy."
  }
];

export default function DigitalMarketingPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', pt: { xs: 12, md: 16 } }}>
      
      {/* OMNICHANNEL HERO */}
      <Box sx={{ bgcolor: '#f8f9fa', py: { xs: 8, md: 12 }, borderBottom: '1px solid #eee' }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, p: 1, px: 2, bgcolor: 'rgba(110,65,226,0.1)', borderRadius: 2, mb: 3 }}>
                <CampaignOutlinedIcon sx={{ color: 'primary.main' }} />
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1 }}>
                  Driving Business Growth
                </Typography>
              </Box>
              <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 900, mb: 3, lineHeight: 1.1 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', mb: 5, lineHeight: 1.8 }}>
                {service.subtitle}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box 
                sx={{ 
                  height: { xs: 350, md: 500 },
                  borderRadius: '50%',
                  backgroundImage: 'url(/images/services/digital-marketing.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 40px 80px rgba(110,65,226,0.15)',
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
          
          {/* MAIN CONTENT - 600 WORDS */}
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
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

          {/* RIGHT SIDEBAR - FUNNEL FEATURES */}
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <Card sx={{ bgcolor: '#ffffff', borderRadius: 6, p: 4, boxShadow: '0 20px 60px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0', mb: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, color: '#0B0F19' }}>
                  The Funnel Approach
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {service.features.map((feature, idx) => (
                    <Box key={idx} sx={{ display: 'flex', gap: 3, position: 'relative', pb: 4 }}>
                      {idx !== service.features.length - 1 && (
                        <Box sx={{ position: 'absolute', left: 19, top: 40, bottom: 0, width: 2, bgcolor: '#f0f0f0' }} />
                      )}
                      <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'primary.main', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 700, zIndex: 1 }}>
                        {idx + 1}
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0B0F19', mb: 0.5 }}>{feature.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{feature.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Card>

              {/* TECH STACK CHIPS */}
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#0B0F19' }}>Marketing Stack</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {service.technologies.map((tech, idx) => (
                  <Box key={idx} sx={{ px: 2, py: 1, bgcolor: '#f5f5f5', borderRadius: 8, border: '1px solid #e0e0e0' }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#444' }}>{tech}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
      
      <ServiceFaqSection faqs={digitalFaqs} />
      <CtaSection />
    </Box>
  );
}
