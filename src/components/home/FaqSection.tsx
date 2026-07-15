"use client";
import React from "react";
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqs } from "../../data";

export default function FaqSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.paper' }} id="faq">
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 700, mb: 1, textTransform: 'uppercase' }}>
            Knowledge Base
          </Typography>
          <Typography variant="h2" sx={{ color: 'secondary.main', mb: 3, fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9 }}>
            We believe in absolute transparency. Review our comprehensive answers to the most common technical and operational inquiries regarding our services, processes, and partnership models.
          </Typography>
        </Box>

        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                mb: 2,
                bgcolor: 'transparent',
                border: '1px solid',
                borderColor: 'rgba(0,0,0,0.05)',
                '&:before': { display: 'none' }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                sx={{ py: 1.5 }}
              >
                <Typography variant="h4" sx={{ color: 'secondary.main', fontWeight: 800, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0, pb: 3, pr: { md: 10 } }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'justify', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8 }}>
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
