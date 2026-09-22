"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface FaqItem {
  question: string;
  answer: string;
}

interface CustomSoftwareFaqAccordionProps {
  faqs: FaqItem[];
}

export default function CustomSoftwareFaqAccordion({ faqs }: CustomSoftwareFaqAccordionProps) {
  const [expanded, setExpanded] = useState<string | false>("faq-0");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {faqs.map((faq, index) => {
        const panelId = `faq-${index}`;
        const isCurrentExpanded = expanded === panelId;

        return (
          <Accordion
            key={index}
            expanded={isCurrentExpanded}
            onChange={handleChange(panelId)}
            elevation={0}
            disableGutters
            sx={{
              borderRadius: "16px !important",
              border: "1px solid",
              borderColor: isCurrentExpanded
                ? "rgba(249, 115, 22, 0.4)"
                : "rgba(228, 228, 231, 0.9)",
              bgcolor: isCurrentExpanded ? "#FFFFFF" : "#FAF8F5",
              boxShadow: isCurrentExpanded
                ? "0 10px 30px rgba(249, 115, 22, 0.06)"
                : "none",
              transition: "all 0.25s ease",
              "&:before": { display: "none" },
              overflow: "hidden",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: isCurrentExpanded ? "#EA580C" : "#71717A",
                    transition: "transform 0.2s ease, color 0.2s ease",
                  }}
                />
              }
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
              sx={{
                px: { xs: 2.5, sm: 3.5 },
                py: { xs: 1.5, sm: 2 },
                "& .MuiAccordionSummary-content": {
                  my: 0.5,
                },
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontSize: { xs: "1.05rem", sm: "1.15rem" },
                  fontWeight: 600,
                  color: isCurrentExpanded ? "#18181B" : "#27272A",
                  lineHeight: 1.4,
                  pr: 2,
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                px: { xs: 2.5, sm: 3.5 },
                pt: 0,
                pb: { xs: 2.5, sm: 3 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.925rem", sm: "0.975rem" },
                  color: "#52525B",
                  lineHeight: 1.8,
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
