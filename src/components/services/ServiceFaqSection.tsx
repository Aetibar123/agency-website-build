"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <Box
      component="section"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#FAF9F5",
        borderTop: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="caption"
            sx={{
              color: "#0E7490",
              fontWeight: 700,
              letterSpacing: "0.14em",
              display: "block",
              mb: 2,
            }}
          >
            QUESTIONS &amp; ANSWERS
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#0E172A",
              fontSize: { xs: "2rem", md: "2.75rem" },
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Frequently Asked <Box component="span" sx={{ color: "#0E7490" }}>Questions</Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#5E6068",
              fontSize: { xs: "1rem", md: "1.05rem" },
              lineHeight: 1.75,
              maxWidth: 540,
              mx: "auto",
            }}
          >
            Straight answers regarding architecture, delivery scope, timelines, and technical standards.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                bgcolor: "#FFFFFF",
                border: "1px solid rgba(17, 18, 21, 0.08)",
                borderRadius: "8px !important",
                "&:before": { display: "none" },
                overflow: "hidden",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: "rgba(14, 116, 144, 0.3)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0E7490" }} />}
                sx={{ p: { xs: 2.5, md: 3 } }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#0E172A",
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2.5, md: 3 }, pb: 3, pt: 0 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4A4D57",
                    lineHeight: 1.75,
                    fontSize: "0.95rem",
                  }}
                >
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
