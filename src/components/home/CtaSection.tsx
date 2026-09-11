"use client";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Link from "next/link";

export default function CtaSection() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        bgcolor: "#FAF9F5",
        py: { xs: 14, md: 20 },
        borderTop: "1px solid rgba(17, 18, 21, 0.08)",
        borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Box sx={{ maxWidth: "780px", mx: "auto" }}>
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
            START A COLLABORATION
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#0E172A",
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem" },
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: { xs: 1.15, md: 1.1 },
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            Have a project in mind?{" "}
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            <Box component="span" sx={{ color: "#0E7490" }}>
              Let&apos;s build something enduring.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#4A4D57",
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 1.8,
              mb: 5,
            }}
          >
            Whether you&apos;re planning a custom web platform, automating business workflows
            with custom AI agents, or executing a high-stakes technical SEO migration, our
            studio is ready to engineer your competitive advantage.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2.5,
              justifyContent: "center",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
              sx={{
                bgcolor: "#0E172A",
                color: "#FFFFFF",
                px: 4.5,
                py: 1.6,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "6px",
                boxShadow: "0 8px 24px rgba(14, 23, 42, 0.12)",
                "&:hover": {
                  bgcolor: "#1E293B",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 30px rgba(14, 23, 42, 0.18)",
                },
              }}
            >
              Start a Conversation
            </Button>

            <Button
              component="a"
              href="mailto:hello.aetibar@gmail.com"
              variant="outlined"
              startIcon={<EmailOutlinedIcon sx={{ fontSize: 18 }} />}
              sx={{
                borderColor: "#D5D2C9",
                color: "#0E172A",
                bgcolor: "#FFFFFF",
                px: 3.5,
                py: 1.6,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "6px",
                "&:hover": {
                  borderColor: "#0E172A",
                  bgcolor: "#FAF9F5",
                  transform: "translateY(-2px)",
                },
              }}
            >
              hello.aetibar@gmail.com
            </Button>
          </Box>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "#6B6E76",
              fontWeight: 500,
              fontSize: "0.85rem",
              letterSpacing: "0.02em",
              textTransform: "none",
            }}
          >
            STUDIO: UDAIPUR, INDIA &bull; RESPONSE WITHIN 24 BUSINESS HOURS
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
