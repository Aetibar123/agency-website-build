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
    question: "Can AI really automate my business without errors?",
    answer: "Our AI automations use highly deterministic pipelines and human-in-the-loop fallback mechanisms. We strictly bound our LLMs with guardrails, ensuring they only perform predefined actions securely."
  },
  {
    question: "How long does it take to deploy an AI agent?",
    answer: "A standard customer service or data extraction AI agent can typically be deployed within 4 to 8 weeks, depending on the complexity of your existing databases and APIs."
  },
  {
    question: "Will this replace my employees?",
    answer: "Our automations are designed to augment your workforce, not replace it. By automating repetitive, low-value tasks (like data entry or basic support), your team is freed to focus on strategic, high-value work."
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
                INTELLIGENT WORKFLOWS
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '3rem', md: '4.5rem' }, fontWeight: 900, mb: 3, lineHeight: 1.1 }}>
              {service.title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', mb: 4, lineHeight: 1.8 }}>
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
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#0B0F19' }}>
            The Architecture of Efficiency
          </Typography>
        </Box>

        <Grid container spacing={8}>
          {/* FEATURES AS NODES */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ borderLeft: '2px dashed #e0e0e0', pl: 4, position: 'relative' }}>
              {service.features.map((feature, idx) => (
                <Box key={idx} sx={{ position: 'relative', mb: 6 }}>
                  <Box sx={{ position: 'absolute', left: -43, top: 0, width: 20, height: 20, borderRadius: '50%', bgcolor: '#00bcd4', border: '4px solid white' }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19', mb: 1 }}>{feature.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{feature.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          
          {/* DETAILED CONTENT */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={{ bgcolor: '#f8f9fa', borderRadius: 6, p: { xs: 4, md: 8 }, border: '1px solid #eee', boxShadow: 'none' }}>
              {service.detailedContent?.map((content, idx) => (
                <Box key={idx} sx={{ mb: idx === service.detailedContent!.length - 1 ? 0 : 8 }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: '#0B0F19' }}>
                    {content.heading}
                  </Typography>
                  {content.paragraphs.map((p, pIdx) => (
                    <Typography key={pIdx} variant="body1" sx={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.9, mb: 2 }}>
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
