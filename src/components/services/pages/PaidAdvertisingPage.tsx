"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';
import ServiceFaqSection from '../ServiceFaqSection';
import CtaSection from '../../home/CtaSection';

const paidFaqs = [
  {
    question: "What is the minimum ad spend you manage?",
    answer: "To ensure we can gather enough statistically significant data for machine learning optimization, we typically require a minimum ad spend of $10,000 per month across your chosen platforms."
  },
  {
    question: "Who creates the ad creatives (images/videos)?",
    answer: "We offer end-to-end solutions. Our in-house creative team can produce highly engaging, conversion-optimized video and image assets, or we can use your existing brand assets if they meet our performance standards."
  },
  {
    question: "What happens if a campaign isn't working?",
    answer: "We monitor campaigns daily. If a campaign isn't hitting our projected KPIs, we aggressively A/B test new variables (audiences, creatives, copy, landing pages) until we find the winning combination. We never 'set it and forget it'."
  }
];

export default function PaidAdvertisingPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', pt: { xs: 12, md: 16 } }}>
      
      {/* PERFORMANCE HERO - NEON GREEN ACCENTS */}
      <Container maxWidth="xl" sx={{ mb: 10 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, p: 1, px: 3, bgcolor: 'rgba(110,65,226,0.1)', borderRadius: 10, mb: 4 }}>
            <TrendingUpOutlinedIcon sx={{ color: 'primary.main' }} />
            <Typography variant="subtitle2" sx={{ color: 'primary.main', letterSpacing: 1, fontWeight: 800 }}>
              PERFORMANCE MARKETING
            </Typography>
          </Box>
          <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '3rem', md: '5.5rem' }, fontWeight: 900, mb: 3, lineHeight: 1 }}>
            Engineered For <span style={{ color: '#6e41e2' }}>ROAS</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.35rem', maxWidth: 800, mx: 'auto', lineHeight: 1.8 }}>
            {service.description}
          </Typography>
        </Box>

        {/* HERO IMAGE & METRIC CARDS OVERLAY */}
        <Box sx={{ position: 'relative' }}>
          <Box 
            sx={{ 
              width: '100%', 
              height: { xs: 400, md: 600 }, 
              borderRadius: 8, 
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.1)',
            }}
          >
            <img 
              src="/images/services/paid-advertising.png" 
              alt="Performance Dashboard" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
          
          {/* FLOATING METRIC CARDS */}
          <Grid container spacing={3} sx={{ position: { md: 'absolute' }, bottom: { md: -50 }, left: 0, right: 0, px: { md: 10 }, mt: { xs: 4, md: 0 } }}>
            {[
              { icon: <AdsClickOutlinedIcon sx={{ fontSize: 40, color: '#6e41e2' }} />, title: "Precision", desc: "AI-driven bidding algorithms" },
              { icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 40, color: '#6e41e2' }} />, title: "Profitability", desc: "Obsessive focus on ROAS" },
              { icon: <SpeedOutlinedIcon sx={{ fontSize: 40, color: '#6e41e2' }} />, title: "Scale", desc: "Elastic ad spend optimization" }
            ].map((metric, idx) => (
              <Grid size={{ xs: 12, md: 4 }} key={idx}>
                <Card sx={{ bgcolor: 'white', borderRadius: 4, p: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 3 }}>{metric.icon}</Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: '#0B0F19' }}>{metric.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{metric.desc}</Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box sx={{ height: { xs: 40, md: 100 } }} />

      <Container maxWidth="xl" sx={{ py: { xs: 10, md: 10 } }}>
        <Grid container spacing={10}>
          
          {/* MAIN CONTENT - 600 WORDS */}
          <Grid size={{ xs: 12, md: 8 }}>
            {service.detailedContent?.map((content, idx) => (
              <Box key={idx} sx={{ mb: 8 }}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, color: '#0B0F19' }}>
                  {content.heading}
                </Typography>
                {content.paragraphs.map((p, pIdx) => (
                  <Typography key={pIdx} variant="body1" sx={{ color: '#444', fontSize: '1.15rem', lineHeight: 2, mb: 3 }}>
                    {p}
                  </Typography>
                ))}
              </Box>
            ))}
          </Grid>

          {/* RIGHT SIDEBAR - TARGETING & PLATFORMS */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              <Card sx={{ bgcolor: '#0B0F19', color: 'white', borderRadius: 6, p: 4, mb: 4, boxShadow: '0 20px 40px rgba(110,65,226,0.2)' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>
                  Ad Platforms
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {service.technologies.map((tech, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2, border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Box sx={{ w: 10, h: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>{tech}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card>

              <Card sx={{ bgcolor: '#f8f9fa', borderRadius: 6, p: 4, border: '1px solid #eee' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#0B0F19' }}>Methodology</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {service.features.map((feature, idx) => (
                    <Box key={idx}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>{feature.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{feature.desc}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Box>
          </Grid>

        </Grid>
      </Container>
      <ServiceFaqSection faqs={paidFaqs} />
      <CtaSection />
    </Box>
  );
}
