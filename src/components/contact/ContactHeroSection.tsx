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
        bgcolor: "#FAF9F5",
        pt: { xs: 16, md: 24 },
        pb: { xs: 10, md: 14 },
        borderBottom: "1px solid rgba(17, 18, 21, 0.08)",
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
                DIRECT CONSULTATION
              </Typography>
            </Box>

            <Typography
              variant="h1"
              sx={{
                color: "#0E172A",
                fontSize: { xs: "2.35rem", sm: "3.2rem", md: "4.2rem" },
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: { xs: 1.1, md: 1.05 },
                textTransform: "uppercase",
                mb: 3,
              }}
            >
              Let&apos;s Discuss Your <br />
              <Box component="span" sx={{ color: "#0E7490" }}>
                Next Advantage.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#4A4D57",
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
                bgcolor: "#F2F0EB",
                p: { xs: 4, sm: 5 },
                borderRadius: "12px",
                border: "1px solid rgba(17, 18, 21, 0.08)",
                boxShadow: "0 10px 30px rgba(17, 18, 21, 0.04)",
                display: "flex",
                flexDirection: "column",
                gap: 3.5,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <EmailOutlinedIcon sx={{ color: "#0E7490", fontSize: 24, mt: 0.3 }} />
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#5E6068", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    DIRECT INQUIRIES
                  </Typography>
                  <Typography
                    component="a"
                    href="mailto:hello.aetibar@gmail.com"
                    sx={{
                      display: "block",
                      color: "#0E172A",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      textDecoration: "none",
                      "&:hover": { color: "#0E7490" },
                    }}
                  >
                    hello.aetibar@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, pt: 2, borderTop: "1px solid rgba(17, 18, 21, 0.06)" }}>
                <AccessTimeOutlinedIcon sx={{ color: "#0E7490", fontSize: 24, mt: 0.3 }} />
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#5E6068", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    RESPONSE SLA
                  </Typography>
                  <Typography sx={{ color: "#0E172A", fontWeight: 600, fontSize: "0.95rem" }}>
                    Within 24 business hours directly from senior leadership.
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, pt: 2, borderTop: "1px solid rgba(17, 18, 21, 0.06)" }}>
                <LocationOnOutlinedIcon sx={{ color: "#0E7490", fontSize: 24, mt: 0.3 }} />
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: "#5E6068", fontWeight: 700, letterSpacing: "0.08em" }}
                  >
                    STUDIO HQ
                  </Typography>
                  <Typography sx={{ color: "#0E172A", fontWeight: 600, fontSize: "0.95rem" }}>
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
