"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const principles = [
  {
    num: "01",
    title: "Built Around Business Outcomes",
    summary:
      "We don't write code for the sake of writing code. Every technical choice—from database indexing to server-side hydration—is made to directly support your conversion rates, customer retention, and commercial margins.",
  },
  {
    num: "02",
    title: "Technology Without Unnecessary Complexity",
    summary:
      "We eliminate architectural bloat. We select modern, battle-tested tools that solve verified business problems rather than over-engineering simple solutions or introducing fragile plugin dependencies.",
  },
  {
    num: "03",
    title: "Direct Senior Practitioner Collaboration",
    summary:
      "You collaborate directly with the senior engineers, AI architects, and product designers building your platform. No junior handoffs and no layers of non-technical account managers diluting your requirements.",
  },
  {
    num: "04",
    title: "100% Bespoke Codebase — Zero Template Debt",
    summary:
      "No generic WordPress themes, no bloated plugins, and no brittle drag-and-drop builders. We write clean, typed software in Next.js, React, and TypeScript with full intellectual property ownership from day one.",
  },
  {
    num: "05",
    title: "Accountability & Measurable Commercial Impact",
    summary:
      "We measure our success by tangible client milestones: sub-second Core Web Vitals, thousands of manual hours automated via AI workflows, organic search dominance, and enduring infrastructure stability.",
  },
];

export default function WhyAetibarSection() {
  return (
    <Box
      id="why-aetibar"
      component="section"
      sx={{
        bgcolor: "#F2F0EB",
        py: { xs: 12, md: 18 },
        borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, lg: 10 }}>
          {/* Left Column: Sticky Editorial Statement */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ position: { lg: "sticky" }, top: { lg: 120 } }}>
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
                DIFFERENTIATION &amp; RIGOR
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: "#0E172A",
                  fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" },
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  mb: 3,
                }}
              >
                Built on Trust.{" "}
                <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
                <Box component="span" sx={{ color: "#0E7490" }}>
                  Delivered With Rigor.
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#4A4D57",
                  fontSize: { xs: "1.05rem", md: "1.15rem" },
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Too many businesses get burned by agency bloat, missed deadlines, and fragile software.
                We deliberately run a disciplined, high-craft engineering and design studio where technical
                craftsmanship, transparency, and client ownership come first.
              </Typography>

              <Box
                sx={{
                  p: 3,
                  bgcolor: "#FAF9F5",
                  borderRadius: "8px",
                  border: "1px solid rgba(17, 18, 21, 0.08)",
                  borderLeft: "4px solid #0E7490",
                }}
              >
                <Typography
                  sx={{
                    color: "#0E172A",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    mb: 0.5,
                  }}
                >
                  Our Operating Standard
                </Typography>
                <Typography variant="body2" sx={{ color: "#5E6068", lineHeight: 1.6 }}>
                  Every line of code and every design component is engineered for production longevity,
                  high performance, and clear commercial ROI.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: 5 Numbered Editorial Principles */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box sx={{ borderBottom: "1px solid rgba(17, 18, 21, 0.1)" }}>
              {principles.map((principle) => (
                <Box
                  key={principle.num}
                  sx={{
                    py: { xs: 4, md: 5 },
                    borderTop: "1px solid rgba(17, 18, 21, 0.1)",
                    display: "flex",
                    flexDirection: "row",
                    gap: { xs: 2.5, sm: 4 },
                    alignItems: "flex-start",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#0E7490",
                      fontWeight: 800,
                      fontSize: { xs: "1.15rem", sm: "1.45rem" },
                      letterSpacing: "0.05em",
                      minWidth: { xs: "36px", sm: "48px" },
                      lineHeight: 1.25,
                      pt: { xs: "1px", sm: "2px" },
                      flexShrink: 0,
                    }}
                  >
                    {principle.num}
                  </Typography>

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#0E172A",
                        fontSize: { xs: "1.2rem", md: "1.45rem" },
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        mb: 1.5,
                        lineHeight: 1.3,
                      }}
                    >
                      {principle.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4A4D57",
                        lineHeight: 1.75,
                        fontSize: "0.98rem",
                      }}
                    >
                      {principle.summary}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
