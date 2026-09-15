import React from "react";
import { Metadata } from "next";
import { Box, Container, Typography, Chip } from "@mui/material";
import ContactDiagnosticForm from "../../components/contact/ContactDiagnosticForm";

export const metadata: Metadata = {
  title: "Contact Aetibar | Let's Understand What You're Trying to Improve",
  description:
    "Tell us how your business currently works and where friction is occurring. We start with the operational problem before discussing technology.",
  alternates: {
    canonical: "https://www.aetibar.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          pt: { xs: 16, md: 22 },
          pb: { xs: 8, md: 10 },
          bgcolor: "#FAF9F5",
          borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Chip
            label="Initial Diagnostic Discussion"
            size="small"
            sx={{
              bgcolor: "rgba(14, 116, 144, 0.08)",
              color: "#0E7490",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              borderRadius: "6px",
              mb: 3,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
              fontWeight: 600,
              color: "#0E172A",
              letterSpacing: "-0.035em",
              lineHeight: 1.15,
              mb: 3,
            }}
          >
            Let&apos;s understand what you&apos;re trying to improve.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.05rem", md: "1.2rem" },
              color: "#475569",
              lineHeight: 1.8,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Tell us how your business currently operates and where manual work, fragmented software, or communication delays are holding you back. We start with the problem before talking about the technology.
          </Typography>
        </Container>
      </Box>

      {/* Structured Diagnostic Form */}
      <ContactDiagnosticForm />
    </main>
  );
}
