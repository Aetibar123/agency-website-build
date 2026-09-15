"use client";
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export default function ContactHeroSection() {
  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        pt: { xs: 16, md: 22 },
        pb: { xs: 10, md: 14 },
        borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
        background:
          "radial-gradient(120% 75% at 50% 0%, rgba(249, 115, 22, 0.09) 0%, rgba(251, 146, 60, 0.03) 45%, #FFFFFF 85%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                mb: 3,
                px: 2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#EA580C",
                }}
              />
              <Typography
                sx={{
                  color: "#EA580C",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  fontSize: "0.78rem",
                  textTransform: "uppercase",
                }}
              >
                DIRECT CONSULTATION
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                color: "#18181B",
                fontSize: { xs: "2.35rem", sm: "3.2rem", md: "4.2rem" },
                fontWeight: 600,
                letterSpacing: "-0.035em",
                lineHeight: { xs: 1.15, md: 1.08 },
                mb: 3,
              }}
            >
              Let&apos;s Discuss Your <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Next Advantage.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#52525B",
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                lineHeight: 1.8,
                maxWidth: 640,
              }}
            >
              Whether you are architecting a custom web platform, automating repetitive operations
              with AI, or planning a high-stakes search migration, our senior team is ready to provide
              direct architectural input and honest timelines.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <Box
              sx={{
                bgcolor: "#FAF8F5",
                p: { xs: 4, sm: 5 },
                borderRadius: "20px",
                border: "1px solid rgba(228, 228, 231, 0.9)",
                boxShadow: "0 10px 30px rgba(24, 24, 27, 0.04)",
                display: "flex",
                flexDirection: "column",
                gap: 3.5,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <EmailOutlinedIcon sx={{ color: "#EA580C", fontSize: 24, mt: 0.3 }} />
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#71717A", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    DIRECT INQUIRIES
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:hello.aetibar@gmail.com"
                    sx={{
                      display: "block",
                      color: "#18181B",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      textDecoration: "none",
                      "&:hover": { color: "#EA580C" },
                    }}
                  >
                    hello.aetibar@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, pt: 2, borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
                <AccessTimeOutlinedIcon sx={{ color: "#EA580C", fontSize: 24, mt: 0.3 }} />
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#71717A", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    RESPONSE SLA
                  </Typography>
                  <Typography sx={{ color: "#18181B", fontWeight: 600, fontSize: "0.95rem" }}>
                    Within 24 business hours directly from senior leadership.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, pt: 2, borderTop: "1px solid rgba(228, 228, 231, 0.8)" }}>
                <LocationOnOutlinedIcon sx={{ color: "#EA580C", fontSize: 24, mt: 0.3 }} />
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#71717A", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    STUDIO HQ
                  </Typography>
                  <Typography sx={{ color: "#18181B", fontWeight: 600, fontSize: "0.95rem" }}>
                    Udaipur, Rajasthan, India &bull; Serving Clients Globally
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
