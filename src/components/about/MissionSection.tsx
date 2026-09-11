"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function MissionSection() {
  return (
    <Box sx={{ py: { xs: 12, md: 18 }, bgcolor: "#FAF9F5" }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
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
          OUR GUIDING MISSION
        </Typography>

        <Typography
          variant="h2"
          sx={{
            color: "#0E172A",
            mb: 5,
            fontSize: { xs: "2rem", md: "2.75rem" },
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
          }}
        >
          Accelerating Innovation Through <br />
          <Box component="span" sx={{ color: "#0E7490" }}>
            Disciplined Technology.
          </Box>
        </Typography>

        <Box sx={{ maxWidth: 780, mx: "auto", textAlign: "left", display: "flex", flexDirection: "column", gap: 3.5 }}>
          <Typography
            variant="body1"
            sx={{
              color: "#4A4D57",
              fontSize: { xs: "1.05rem", md: "1.125rem" },
              lineHeight: 1.85,
              position: "relative",
              pl: 3.5,
              borderLeft: "3px solid #0E7490",
            }}
          >
            Our mission is to help ambitious companies unlock sustainable growth through bespoke digital solutions. We don&apos;t just build websites or launch one-off campaigns—we engineer interconnected digital ecosystems powered by modern full-stack architectures, automated AI pipelines, and deterministic search performance.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#5E6068",
              fontSize: { xs: "1rem", md: "1.08rem" },
              lineHeight: 1.85,
              pl: 3.5,
            }}
          >
            Radical transparency, technical rigor, and zero compromise on code quality guide every repository we touch. We believe software should simplify operational complexity and serve as an enduring commercial asset for your business.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
