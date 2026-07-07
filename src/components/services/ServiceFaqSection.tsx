import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqSectionProps {
  faqs: FaqItem[];
}

export default function ServiceFaqSection({ faqs }: ServiceFaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, letterSpacing: '-0.02em', color: '#0B0F19' }}>
            Frequently Asked <Box component="span" sx={{ color: 'primary.main' }}>Questions</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem', maxWidth: 600, mx: 'auto' }}>
            Common questions about this service, answered.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqs.map((faq, index) => (
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
    </Box>
  );
}
