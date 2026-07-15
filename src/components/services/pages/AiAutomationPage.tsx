"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Divider } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ServiceFaqSection from '../ServiceFaqSection';
import CtaSection from '../../home/CtaSection';

const autoFaqs = [
  {
    question: "What business processes can AI automate?",
    answer:
      "AI can automate repetitive business tasks such as customer support, lead qualification, document processing, data entry, appointment scheduling, email workflows, and internal operations. Every solution is tailored to your specific business needs."
  },
  {
    question: "Can AI integrate with my existing business tools?",
    answer:
      "Yes. We can integrate AI solutions with CRMs, business applications, communication platforms, APIs, and other third-party tools to create seamless automated workflows without disrupting your existing processes."
  },
  {
    question: "How long does an AI automation project take?",
    answer:
      "Project timelines depend on the complexity of your requirements, existing systems, and integrations. After understanding your business goals, we provide a clear project roadmap and estimated delivery timeline."
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. We build AI solutions using modern security practices and carefully manage data access throughout the development process. Protecting your business information is an important part of every project."
  },
  {
    question: "Will AI replace my team?",
    answer:
      "Our goal is to help your team work more efficiently by automating repetitive tasks. This allows employees to focus on higher-value work that requires creativity, decision-making, and customer relationships."
  }
];

export default function AiAutomationPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* SPLIT HERO */}
      <Grid container sx={{ minHeight: '80vh' }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', alignItems: 'center', p: { xs: 4, md: 10 } }}>
          <Box>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, p: 1, px: 2, border: '1px solid #e0e0e0', borderRadius: 10, mb: 4 }}>
              <SmartToyOutlinedIcon sx={{ color: '#00bcd4' }} />
              <Typography variant="caption" sx={{ color: '#555', fontWeight: 700, letterSpacing: 1 }}>
             BUSINESS AUTOMATION
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '1.9rem', md: '3rem' }, fontWeight: 900, mb: 3, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              {service.title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, mb: 4, lineHeight: 1.9 }}>
              {service.description}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative' }}>
          <Box 
            sx={{ 
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: 'url(/images/services/ai-automation.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: { md: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }
            }} 
          />
        </Grid>
      </Grid>

      <Container maxWidth="xl" sx={{ py: { xs: 10, md: 15 } }}>
        <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', mb: 10 }}>
          <AccountTreeOutlinedIcon sx={{ fontSize: 60, color: '#00bcd4', mb: 2 }} />
          <Typography variant="h2" sx={{ fontWeight: 900, color: '#0B0F19', fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
            Intelligent Business Automation
          </Typography>
        </Box>

        <Grid container spacing={8}>
          {/* FEATURES AS NODES */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ borderLeft: '2px dashed #e0e0e0', pl: 4, position: 'relative' }}>
              {service.features.map((feature, idx) => (
                <Box key={idx} sx={{ position: 'relative', mb: 6 }}>
                  <Box sx={{ position: 'absolute', left: -43, top: 0, width: 20, height: 20, borderRadius: '50%', bgcolor: '#00bcd4', border: '4px solid white' }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19', mb: 1, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>{feature.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>{feature.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          
          {/* DETAILED CONTENT */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={{ bgcolor: '#f8f9fa', borderRadius: 6, p: { xs: 4, md: 8 }, border: '1px solid #eee', boxShadow: 'none' }}>
              {service.detailedContent?.map((content, idx) => (
                <Box key={idx} sx={{ mb: idx === service.detailedContent!.length - 1 ? 0 : 8 }}>
                  <Typography variant="h4" sx={{ fontWeight: 900, mb: 3, color: '#0B0F19', fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
                    {content.heading}
                  </Typography>
                  {content.paragraphs.map((p, pIdx) => (
                    <Typography key={pIdx} variant="body1" sx={{ color: '#444', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9, mb: 2 }}>
                      {p}
                    </Typography>
                  ))}
                  {idx !== service.detailedContent!.length - 1 && <Divider sx={{ mt: 6, borderColor: '#e0e0e0' }} />}
                </Box>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Container>
      
      <ServiceFaqSection faqs={autoFaqs} />
      <CtaSection />
    </Box>
  );
}
