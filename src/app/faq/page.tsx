"use client";
import React, { useState } from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, Tabs, Tab } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CtaSection from "../../components/home/CtaSection";

const faqData = [
  {
    question: "What makes Aetibar different from other digital agencies?",
    answer: "We are not just order-takers; we are strategic partners. Unlike traditional agencies that just build what you ask for, we deeply analyze your business model to deliver engineering and design solutions that directly impact your bottom line. Our team consists of elite specialists across AI, Web Development, and Marketing, ensuring a holistic approach to your growth."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary significantly based on complexity. A corporate website might take 4-6 weeks, while a complex headless e-commerce platform or custom SaaS application can take 3-6 months. We provide a highly detailed, phased timeline during our initial blueprinting phase before any contracts are signed."
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer: "We work with visionaries across all stages. While we handle massive enterprise migrations and complex AI integrations, we also partner with well-funded startups to build robust, scalable MVPs that are designed to secure Series A/B funding."
  }
];

export default function FaqPage() {
  return (
    <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: '#0B0F19', 
        color: 'white', 
        pt: { xs: 20, md: 28 }, 
        pb: { xs: 15, md: 20 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{ position: 'absolute', top: -100, left: '20%', width: 400, height: 400, bgcolor: 'primary.main', opacity: 0.1, borderRadius: '50%', filter: 'blur(100px)' }} />
        <Box sx={{ position: 'absolute', bottom: -50, right: '10%', width: 300, height: 300, bgcolor: '#00c6ff', opacity: 0.1, borderRadius: '50%', filter: 'blur(80px)' }} />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="caption" sx={{ display: 'inline-block', p: 1, px: 3, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 10, mb: 4, fontWeight: 700, letterSpacing: 2 }}>
            KNOWLEDGE BASE
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 900, mb: 4, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Frequently Asked <br />
            <Box component="span" sx={{ color: 'primary.main' }}>Questions.</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', maxWidth: 600, mx: 'auto' }}>
            Everything you need to know about how we work, our technical capabilities, and how we deliver world-class digital solutions.
          </Typography>
        </Container>
      </Box>

      {/* FAQ Content Section */}
      <Container maxWidth="md" sx={{ py: { xs: 10, md: 15 } }}>
        <Box sx={{ mb: 6, p: 3, bgcolor: 'rgba(110,65,226,0.05)', borderRadius: 4, border: '1px solid rgba(110,65,226,0.1)', textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: '#555', fontWeight: 600 }}>
            Note: For service-specific questions (e.g., SEO timelines, App architecture), please scroll to the bottom of their respective service pages.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqData.map((faq, index) => (
            <Accordion 
              key={index} 
              elevation={0} 
              sx={{ 
                bgcolor: '#f8f9fa', 
                border: '1px solid rgba(0,0,0,0.05)',
                borderRadius: '12px !important',
                '&:before': { display: 'none' },
                overflow: 'hidden'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                sx={{ p: { xs: 2, md: 3 } }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0B0F19' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: { xs: 2, md: 3 }, pt: 0 }}>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      <CtaSection />
    </Box>
  );
}
