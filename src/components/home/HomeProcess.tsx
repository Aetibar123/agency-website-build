"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const steps = [
  {
    num: "01",
    title: "Understand your needs",
    desc: "We discuss your business goals, target customers, and existing workflows to determine what is genuinely needed before writing any code.",
  },
  {
    num: "02",
    title: "Plan the solution",
    desc: "We define the project scope, choose the right tools and technologies, and outline a straightforward timeline and delivery plan.",
  },
  {
    num: "03",
    title: "Design and build",
    desc: "We create user-friendly designs and develop your website, app, or automation with clean, maintainable code and regular progress updates.",
  },
  {
    num: "04",
    title: "Test and launch",
    desc: "We test responsiveness across devices, check security and loading speed, and ensure everything functions smoothly before going live.",
  },
  {
    num: "05",
    title: "Support and improve",
    desc: "After launch, we provide ongoing maintenance, help with questions, and make improvements as your business needs evolve.",
  },
];

export default function HomeProcess() {
  return (
    <Box
      component="section"
      id="process"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#FFFFFF",
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
              Our Process
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
            A Clear Process
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.15rem" },
              lineHeight: 1.8,
              color: "#52525B",
              fontWeight: 400,
            }}
          >
            We keep our process transparent and easy to follow at every stage of your project.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {steps.map((step, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={idx}>
              <Box
                sx={{
                  bgcolor: "#FAF8F5",
                  p: { xs: 3, sm: 3.5 },
                  borderRadius: "16px",
                  border: "1px solid rgba(228, 228, 231, 0.9)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform 0.2s ease, border-color 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    borderColor: "#EA580C",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#EA580C",
                    mb: 1.5,
                  }}
                >
                  {step.num}
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#18181B",
                    mb: 1.2,
                    lineHeight: 1.35,
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "#52525B",
                  }}
                >
                  {step.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
