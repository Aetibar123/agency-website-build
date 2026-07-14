"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import { getAllServices } from "../../data/detailedServices";

export default function ServicesSection() {
  const enhancedServices = getAllServices().map((s: any) => {
    let customCopy = "";
    if (s.slug === "web-development") customCopy = "Build fast, responsive, and SEO-ready websites that strengthen your online presence, improve user experience, and convert visitors into customers.";
    if (s.slug === "app-development") customCopy = "Develop scalable web and mobile applications with intuitive user experiences, secure architecture, and long-term performance.";
    if (s.slug === "ai-automation") customCopy = "Automate repetitive tasks, streamline workflows, and improve operational efficiency with AI-powered business automation tailored to your processes.";
    if (s.slug === "ai-tools") customCopy = "From AI assistants to intelligent workflows, we build custom AI solutions that integrate seamlessly with your business and scale as you grow.";
    if (s.slug === "seo") customCopy = "Improve your search visibility with technical SEO, keyword strategy, content optimization, and on-page improvements that help customers find your business.";
    if (s.slug === "digital-marketing") customCopy = "Launch high-performing Google and Meta ad campaigns focused on qualified leads, better ROI, and sustainable business growth.";
    if (s.slug === "paid-advertising") customCopy = "Aggressive, high-budget media buying across Meta, Google, and LinkedIn. We A/B test hundreds of variables until we find the ultimate conversion machine.";
    if (s.slug === "content-creation") customCopy = "Develop SEO-friendly website content, blogs, marketing copy, and brand messaging that informs, engages, and drives business growth.";
    if (s.slug === "graphics-designing") customCopy = "Create modern brand identities, marketing assets, and visual experiences that strengthen your brand and leave a lasting impression.";
    if (s.slug === "video-editing") customCopy = "Create engaging promotional videos, social media content, and brand stories that capture attention and communicate your message effectively.";
    return { ...s, customCopy };
  });

  const categories = [
    {
      title: "Engineering",
      services: enhancedServices.filter(s => ["web-development", "app-development", "ai-automation", "ai-tools"].includes(s.slug)).map(s => ({ ...s, span: 6 }))
    },
    {
      title: "Growth",
      services: enhancedServices.filter(s => ["seo", "paid-advertising", "digital-marketing"].includes(s.slug)).map(s => ({ ...s, span: 4 }))
    },
    {
      title: "Creative",
      services: enhancedServices.filter(s => ["graphics-designing", "video-editing", "content-creation"].includes(s.slug)).map(s => ({ ...s, span: 4 }))
    }
  ];

  const renderServiceCard = (service: any) => (
    <Grid size={{ xs: 12, md: service.span }} key={service.slug}>
      <Link href={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
        <Card 
          sx={{ 
            bgcolor: 'white', 
            height: '100%', 
            p: { xs: 4, md: 6 }, 
            borderRadius: 6, 
            border: '1px solid rgba(0,0,0,0.03)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: '0 30px 60px rgba(110,65,226,0.1)',
              transform: 'translateY(-10px)',
              borderColor: 'rgba(110,65,226,0.2)',
              '& .arrow': {
                transform: 'translateX(10px)',
                color: 'primary.main'
              },
              '& .bg-glow': {
                opacity: 1
              }
            }
          }}
        >
          <Box className="bg-glow" sx={{ position: 'absolute', top: -100, right: -100, width: 250, height: 250, bgcolor: 'rgba(110,65,226,0.05)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0, transition: 'opacity 0.4s ease' }} />
          
          <Typography variant="h4" sx={{ fontWeight: 900, color: '#0B0F19', mb: 2, position: 'relative', zIndex: 1, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
            {service.title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, mb: 4, position: 'relative', zIndex: 1 }}>
            {service.customCopy}
          </Typography>
          
          <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', gap: 1, position: 'relative', zIndex: 1 }}>
             <Typography variant="button" sx={{ color: '#0B0F19', fontWeight: 800 }}>Learn More</Typography>
             <ArrowForwardIcon className="arrow" sx={{ color: '#0B0F19', fontSize: 18, transition: 'all 0.3s ease' }} />
          </Box>
        </Card>
      </Link>
    </Grid>
  );

  return (
    <Box sx={{ bgcolor: '#f8f9fa', py: { xs: 12, md: 20 }, position: 'relative' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'flex-end' }, mb: 8 }}>
          <Box sx={{ maxWidth: 800 }}>
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, mb: 2, display: 'block' }}>
              OUR CAPABILITIES
            </Typography>
            <Typography variant="h2" sx={{ color: '#0B0F19', fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Digital Solutions That <br />
              <Box component="span" sx={{ color: 'primary.main' }}>Power Business Growth</Box>
            </Typography>
          </Box>
          <Box sx={{ mt: { xs: 4, md: 0 } }}>
            <Link href="/services" style={{ textDecoration: 'none' }}>
              <Typography variant="button" sx={{ color: '#0B0F19', fontWeight: 800, borderBottom: '2px solid primary.main', pb: 0.5, '&:hover': { color: 'primary.main' } }}>
                VIEW ALL SERVICES
              </Typography>
            </Link>
          </Box>
        </Box>

        {categories.map((category, idx) => (
          <Box key={idx} sx={{ mb: idx !== categories.length - 1 ? 10 : 0 }}>
            <Typography variant="h3" sx={{ color: '#0B0F19', fontWeight: 900, mb: 4, display: 'flex', alignItems: 'center', gap: 2, fontSize: { xs: '1.75rem', md: '2rem' } }}>
              <Box component="span" sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: 'primary.main' }} />
              {category.title}
            </Typography>
            <Grid container spacing={4}>
              {category.services.map(renderServiceCard)}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
