"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function AboutStorySection() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        bgcolor: "#F7F7F2",
        py: { xs: 12, md: 18 },
        borderBottom: "1px solid rgba(24, 61, 53, 0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, lg: 10 }} sx={{ alignItems: "center" }}>
          {/* Left Column: Brand Story Narrative */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Typography
              variant="caption"
              sx={{
                color: "#3D765D",
                fontWeight: 700,
                letterSpacing: "0.14em",
                display: "block",
                mb: 2,
              }}
            >
              ABOUT THE STUDIO
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: "#183D35",
                fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                mb: 3,
              }}
            >
              Rooted in Trust.{" "}
              <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
              <Box component="span" sx={{ color: "#3D765D" }}>
                Committed to Craft.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4A4D57",
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              In Urdu and Hindi, <em>Aetibar</em> means trust, confidence, and reliability. That
              name isn&apos;t marketing fluff—it&apos;s our operating standard. We founded Aetibar because
              we saw too many ambitious businesses get burned by over-promising agencies that deliver
              fragile code, missed deadlines, and disappearing support.
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
              We believe technology should be an unfair competitive advantage, not an ongoing headache.
              From our studio in Udaipur, our engineers, AI specialists, and designers work directly
              with clients worldwide to build digital products that move needles, withstand traffic
              surges, and scale gracefully.
            </Typography>

            <Button
              component={Link}
              href="/about"
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                borderColor: "rgba(24, 61, 53, 0.2)",
                color: "#183D35",
                px: 3.5,
                py: 1.3,
                fontWeight: 600,
                "&:hover": {
                  borderColor: "#183D35",
                  bgcolor: "rgba(24, 61, 53, 0.04)",
                },
              }}
            >
              Learn More About Our Team
            </Button>
          </Grid>

          {/* Right Column: Architectural Ethos Box */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                bgcolor: "#F7F7F2",
                p: { xs: 4, sm: 5 },
                borderRadius: "12px",
                border: "1px solid rgba(24, 61, 53, 0.08)",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#3D765D",
                    fontWeight: 800,
                    fontSize: "2.2rem",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  100%
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#183D35", fontWeight: 700, fontSize: "1.15rem", mb: 0.5 }}
                >
                  In-House Engineering
                </Typography>
                <Typography variant="body2" sx={{ color: "#5E6068", lineHeight: 1.6 }}>
                  No white-label outsourcing. Every system, repository, and design component is crafted
                  directly by our core team.
                </Typography>
              </Box>

              <Box sx={{ pt: 3, borderTop: "1px solid rgba(24, 61, 53, 0.08)" }}>
                <Typography
                  sx={{
                    color: "#3D765D",
                    fontWeight: 800,
                    fontSize: "2.2rem",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  Zero
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#183D35", fontWeight: 700, fontSize: "1.15rem", mb: 0.5 }}
                >
                  Template Lock-In
                </Typography>
                <Typography variant="body2" sx={{ color: "#5E6068", lineHeight: 1.6 }}>
                  You receive clean, modular, fully typed source code with complete intellectual
                  property ownership from day one.
                </Typography>
              </Box>

              <Box sx={{ pt: 3, borderTop: "1px solid rgba(24, 61, 53, 0.08)" }}>
                <Typography
                  sx={{
                    color: "#3D765D",
                    fontWeight: 800,
                    fontSize: "2.2rem",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  1:1
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#183D35", fontWeight: 700, fontSize: "1.15rem", mb: 0.5 }}
                >
                  Direct Communication
                </Typography>
                <Typography variant="body2" sx={{ color: "#5E6068", lineHeight: 1.6 }}>
                  Slack, GitHub, and scheduled video check-ins directly with the developers and
                  designers leading your build.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
