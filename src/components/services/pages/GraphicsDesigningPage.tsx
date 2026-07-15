"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, Divider } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ServiceFaqSection from '../ServiceFaqSection';
import CtaSection from '../../home/CtaSection';

const graphicsFaqs = [
  {
    question: "Do you provide both one-time and ongoing design services?",
    answer:
      "Yes. We offer project-based graphic design as well as ongoing creative support for businesses that need consistent branding, marketing materials, and digital design."
  },
  {
    question: "What will I receive after a branding project?",
    answer:
      "You'll receive all final design assets, logo files, brand guidelines, typography and color specifications, along with files ready for both print and digital use."
  },
  {
    question: "Can you redesign our existing website or application interface?",
    answer:
      "Yes. We redesign websites and digital products to improve usability, visual consistency, accessibility, and overall user experience while maintaining your brand identity."
  },
  {
    question: "Can you create designs for both digital and print media?",
    answer:
      "Absolutely. We design assets for websites, social media, presentations, marketing campaigns, brochures, packaging, and other digital or print materials."
  }
];

export default function GraphicsDesigningPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', pt: { xs: 12, md: 16 } }}>
      
      {/* ARTISTIC HERO SECTION */}
      <Container maxWidth="xl" sx={{ mb: { xs: 10, md: 15 } }}>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, p: 1, px: 2, bgcolor: 'rgba(110,65,226,0.08)', borderRadius: 10, mb: 4 }}>
              <AutoAwesomeOutlinedIcon sx={{ color: 'primary.main', fontSize: 20 }} />
              <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
                VISUAL EXCELLENCE
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '1.9rem', md: '3rem' }, fontWeight: 900, mb: 4, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Visual <br />
              <span style={{ color: '#6e41e2' }}> Identity</span>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 600, lineHeight: 1.9 }}>
              {service.description}
            </Typography>
          </Grid>
          
          <Grid size={{ xs: 12, md: 5 }}>
            <Box 
              sx={{ 
                height: { xs: 400, md: 550 },
                width: '100%',
                borderRadius: '40px 10px 40px 10px',
                backgroundImage: 'url(/images/services/graphics-designing.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 30px 60px rgba(110,65,226,0.15)',
                position: 'relative'
              }} 
            />
          </Grid>
        </Grid>
      </Container>

      {/* DETAILED CONTENT & DOMAINS */}
      <Box sx={{ bgcolor: '#0B0F19', py: { xs: 10, md: 15 }, color: 'white', borderRadius: { md: '60px 60px 0 0' } }}>
        <Container maxWidth="xl">
          <Grid container spacing={10}>
            
            {/* 600 WORDS CONTENT */}
            <Grid size={{ xs: 12, md: 8 }}>
              {service.detailedContent?.map((content, idx) => (
                <Box key={idx} sx={{ mb: 8 }}>
                  <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, color: 'white', fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
                    {content.heading}
                  </Typography>
                  {content.paragraphs.map((p, pIdx) => (
                    <Typography key={pIdx} variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9, mb: 3 }}>
                      {p}
                    </Typography>
                  ))}
                  {idx !== service.detailedContent!.length - 1 && <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.1)' }} />}
                </Box>
              ))}
            </Grid>

            {/* DESIGN SYSTEM SIDEBAR */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: 'sticky', top: 120 }}>
                <Card sx={{ bgcolor: 'rgba(255,255,255,0.03)', color: 'white', borderRadius: 6, p: 4, border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', mb: 4 }}>
                  <DesignServicesOutlinedIcon sx={{ fontSize: 40, color: 'primary.light', mb: 2 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>Design Methodology</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {service.features.map((feature, idx) => (
                      <Box key={idx}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.light', mb: 0.5, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>{feature.title}</Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8 }}>{feature.desc}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Card>
                
                <Box sx={{ p: 4, borderRadius: 6, bgcolor: 'rgba(110,65,226,0.1)', border: '1px solid rgba(110,65,226,0.2)' }}>
                   <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'primary.light', textTransform: 'uppercase', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>Design Stack</Typography>
                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                     {service.technologies.map((tech, idx) => (
                       <Box key={idx} sx={{ px: 2, py: 1, bgcolor: 'rgba(0,0,0,0.3)', borderRadius: 2 }}>
                         <Typography variant="caption" sx={{ fontWeight: 600 }}>{tech}</Typography>
                       </Box>
                     ))}
                   </Box>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      <ServiceFaqSection faqs={graphicsFaqs} />
      <CtaSection />
    </Box>
  );
}
