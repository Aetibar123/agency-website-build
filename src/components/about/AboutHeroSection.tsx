"use client";
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "#FAF9F5",
        pt: { xs: 16, md: 24 },
        pb: { xs: 10, md: 14 },
        borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
                px: 1.8,
                py: 0.6,
                borderRadius: "4px",
                bgcolor: "rgba(14, 116, 144, 0.08)",
                border: "1px solid rgba(14, 116, 144, 0.18)",
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#0E7490",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "#0E7490",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  fontSize: "0.78rem",
                }}
              >
                OUR STORY &amp; ETHOS
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                color: "#0E172A",
                mb: 3,
                fontSize: { xs: "2.35rem", sm: "3.2rem", md: "4.2rem" },
                fontWeight: 800,
                lineHeight: { xs: 1.1, md: 1.05 },
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
              }}
            >
              Building Digital Solutions That <br />
              <Box component="span" sx={{ color: "#0E7490" }}>
                Drive Real Growth.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4A4D57",
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                lineHeight: 1.8,
                maxWidth: 600,
              }}
            >
              Aetibar combines software engineering, AI automation, and visual design to help
              businesses launch resilient digital products. We engineer high-performance platforms
              designed to solve real operational bottlenecks and scale seamlessly.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 280, sm: 380, md: 460 },
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(17, 18, 21, 0.08)",
                boxShadow: "0 20px 40px rgba(17, 18, 21, 0.06)",
              }}
            >
              <Image
                src="/images/about/office.png"
                alt="Aetibar Studio Environment"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
