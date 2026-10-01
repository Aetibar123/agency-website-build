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
            fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem" },
            fontWeight: 800,
            lineHeight: { xs: 1.25, md: 1.2 },
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            textWrap: "balance",
          }}
        >
          Accelerating Innovation Through{" "}
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
            Our mission is to help business owners grow with confidence through dependable digital solutions. We don&apos;t just build websites or launch random ads—we create complete digital setups that combine fast mobile-friendly websites, Google search visibility, targeted ads, and automated customer follow-ups that consistently bring you real leads.
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
            Total transparency, honest advice, and 100% client ownership guide everything we do. We believe technology should make running your business easier, not more complicated, serving as a reliable asset that brings long-term profit.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
