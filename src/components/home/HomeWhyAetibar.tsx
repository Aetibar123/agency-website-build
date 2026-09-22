"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const points = [
  {
    title: "Solutions based on actual business needs",
    desc: "We do not push unnecessary software, complicated tech stacks, or rigid templates. We build what your business genuinely needs to function better and serve customers.",
  },
  {
    title: "Clear communication throughout the project",
    desc: "You always know what is being worked on, what is coming next, and when milestones will be delivered. No confusing technical jargon or disappearing developers.",
  },
  {
    title: "Websites and applications built around users",
    desc: "We design interfaces that are simple to navigate on phones, tablets, and computers, making it easy for your customers to take action and find what they need.",
  },
  {
    title: "Practical use of AI and integrations",
    desc: "We apply AI only where it delivers practical value—like organizing inquiries or connecting disconnected tools—always keeping human review and data security in place.",
  },
  {
    title: "Focus on useful, maintainable solutions",
    desc: "We deliver clean, well-structured code and transfer full ownership of all assets and source files to you upon project completion, without proprietary lock-in.",
  },
];

export default function HomeWhyAetibar() {
  return (
    <Box
      component="section"
      id="why-aetibar"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#FAF8F5",
        borderTop: "1px solid rgba(228, 228, 231, 0.8)",
        borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.5,
              borderRadius: "9999px",
              bgcolor: "rgba(249, 115, 22, 0.08)",
              border: "1px solid rgba(249, 115, 22, 0.25)",
              mb: 2.5,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: "#EA580C",
                textTransform: "uppercase",
              }}
            >
              Why Choose Us
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.25rem" },
              fontWeight: 700,
              color: "#18181B",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              mb: 2.5,
            }}
          >
            Practical Digital Solutions for Your Business
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.15rem" },
              lineHeight: 1.8,
              color: "#52525B",
              maxWidth: 720,
              mx: "auto",
            }}
          >
            We believe technology should make running your business easier, not more complicated. Our approach centers on honest advice, reliable delivery, and software built to last.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 1080, mx: "auto" }}>
          <Grid container spacing={3}>
            {points.map((pt, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    p: { xs: 3, sm: 3.5 },
                    borderRadius: "16px",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      borderColor: "#EA580C",
                      boxShadow: "0 8px 20px -4px rgba(24, 24, 27, 0.04)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "10px",
                      bgcolor: "rgba(249, 115, 22, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.3,
                    }}
                  >
                    <CheckCircleOutlinedIcon sx={{ fontSize: 20, color: "#EA580C" }} />
                  </Box>

                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.08rem",
                        fontWeight: 700,
                        color: "#18181B",
                        mb: 0.8,
                      }}
                    >
                      {pt.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        color: "#52525B",
                      }}
                    >
                      {pt.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
