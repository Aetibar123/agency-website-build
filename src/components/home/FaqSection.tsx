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
          <Typography variant="h2" sx={{ color: 'secondary.main', mb: 3 }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
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
                <Typography variant="h4" sx={{ fontSize: '1.25rem', color: 'secondary.main' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0, pb: 3, pr: { md: 10 } }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'justify' }}>
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
