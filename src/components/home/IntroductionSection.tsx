"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const pillars = [
  {
    num: "01",
    title: "Engineered Digital Products",
    desc: "Custom web platforms, mobile applications, and enterprise systems built with Next.js, TypeScript, and modern cloud architecture—prioritizing performance and long-term maintainability.",
  },
  {
    num: "02",
    title: "Applied AI Automation",
    desc: "Deploying RAG pipelines, contextual business assistants, and automated workflow orchestrations that reduce operational friction and let teams focus on high-leverage work.",
  },
  {
    num: "03",
    title: "Search & Growth Architecture",
    desc: "Technical SEO audits, site migrations, and data-driven acquisition funnels engineered for organic durability without relying on short-lived marketing gimmicks.",
  },
  {
    num: "04",
    title: "Scalable Design Systems",
    desc: "Comprehensive Figma component libraries, multi-channel brand assets, and intuitive interface design that ensure visual coherence as your product ecosystem expands.",
  },
];

export default function IntroductionSection() {
  return (
    <Box
      id="trust-intro"
      component="section"
      sx={{
        bgcolor: "#FAF9F5",
        py: { xs: 12, md: 18 },
        borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        {/* Editorial Statement Header */}
        <Grid container spacing={{ xs: 4, lg: 8 }} sx={{ mb: { xs: 8, md: 12 }, alignItems: "flex-end" }}>
          <Grid size={{ xs: 12, lg: 7.5 }}>
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
              OUR PHILOSOPHY &amp; CAPABILITIES
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "#0E172A",
                fontSize: { xs: "2rem", sm: "2.75rem", md: "3.4rem" },
                fontWeight: 800,
                lineHeight: { xs: 1.15, md: 1.12 },
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
              }}
            >
              Digital products should do more than look good.{" "}
              <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
              <Box component="span" sx={{ color: "#0E7490" }}>
                They should create lasting advantage.
              </Box>
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, lg: 4.5 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#4A4D57",
                fontSize: { xs: "1.05rem", md: "1.125rem" },
                lineHeight: 1.8,
                borderLeft: "2px solid #0E7490",
                pl: 3,
              }}
            >
              Most digital solutions fail because they treat design, engineering, and
              marketing as separate silos. At Aetibar, we unify technical architecture,
              intelligent automation, and brand storytelling into a cohesive strategy
              designed for measurable business outcomes.
            </Typography>
          </Grid>
        </Grid>

        {/* 4 Architectural Pillars */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
            gap: { xs: 5, md: 6 },
            pt: { xs: 5, md: 7 },
            borderTop: "1px solid rgba(17, 18, 21, 0.08)",
          }}
        >
          {pillars.map((pillar) => (
            <Box
              key={pillar.num}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              <Typography
                sx={{
                  color: "#0E7490",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  letterSpacing: "0.1em",
                }}
              >
                {pillar.num}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#0E172A",
                  fontWeight: 700,
                  fontSize: { xs: "1.18rem", md: "1.25rem" },
                  lineHeight: 1.3,
                }}
              >
                {pillar.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#5E6068",
                  lineHeight: 1.75,
                  fontSize: "0.9375rem",
                }}
              >
                {pillar.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
