"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { motion } from "framer-motion";


const points = [
  {
    title: "Digital Services That Work Together",
    desc:
      "Web development, mobile apps, SEO, social media marketing, paid advertising, and AI automation can be planned together when your business needs more than one service.",
  },

  {
    title: "Practical Advice, Not Unnecessary Complexity",
    desc:
      "We recommend an approach based on your actual business needs and budget. If a simpler solution can do the job, there is no reason to make it more complicated.",
  },

  {
    title: "Clear Ownership & Access",
    desc:
      "We aim to keep important accounts, project access, website data, and relevant credentials under your control, with the agreed handover provided as part of the project.",
  },

  {
    title: "Direct Communication",
    desc:
      "You can communicate directly with the people working on your project, making it easier to discuss requirements, share feedback, and understand progress.",
  },

  {
    title: "Focused on Meaningful Business Outcomes",
    desc:
      "We look beyond surface-level numbers and focus on useful outcomes such as website enquiries, calls, customer engagement, search visibility, workflow improvements, and other goals relevant to your business.",
  },

  {
    title: "Support Beyond the Initial Launch",
    desc:
      "Your needs can change after a website, app, marketing campaign, or automation goes live. We can continue helping with improvements, maintenance, marketing activities, and further development when required.",
  },
];


export default function HomeWhyAetibar() {
  return (
    <Box
      component="section"
      id="why-aetibar"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#F7F7F2",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(24, 61, 53, 0.06)",
      }}
    >
      {/* Background Decorative Ambient Warm Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: 850,
          height: 480,
          background: "radial-gradient(circle, rgba(61, 118, 93, 0.05) 0%, rgba(250, 248, 245, 0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={{ maxWidth: { xs: "100%", sm: 800, md: 880 }, textAlign: "left", mb: { xs: 6, md: 7.5 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2.2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(61, 118, 93, 0.08)",
                border: "1px solid rgba(61, 118, 93, 0.25)",
                boxShadow: "0 2px 10px rgba(61, 118, 93, 0.08)",
                backdropFilter: "blur(12px)",
                mb: 2.5,
              }}
            >
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#4D8F72", boxShadow: "0 0 10px #4D8F72" }}
              />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#3D765D",
                  textTransform: "uppercase",
                }}
              >
                THE AETIBAR COMMITMENT &bull; BUILT FOR TRUST
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: { xs: "1.9rem", sm: "2.35rem", md: "2.8rem", lg: "3.2rem" },
                fontWeight: 400,
                color: "#183D35",
                lineHeight: { xs: 1.2, md: 1.15 },
                letterSpacing: "-0.025em",
                textWrap: "balance",
                mb: 2.2,
              }}
            >
              Why Business Owners Choose Us as Their{" "}
              <Box
                component="span"
                sx={{
                  display: "inline",
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #3D765D 0%, #4D8F72 55%, #62A486 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Trusted Partner.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.125rem" },
                lineHeight: 1.7,
                color: "#52525B",
                maxWidth: { xs: "100%", md: 740, lg: 780 },
                fontWeight: 400,
              }}
            >
            Aetibar means trust and reliability in Urdu and Hindi. We believe in clear communication, transparent pricing, practical advice, and digital solutions tailored to your business needs.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3.5}>
          {points.map((pt, idx) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: (idx % 3) * 0.16 + Math.floor(idx / 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: "100%" }}
              >
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    p: { xs: 3.5, sm: 4 },
                    borderRadius: { xs: "20px", md: "24px" },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    boxShadow: "0 2px 8px rgba(24, 61, 53, 0.02)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(61, 118, 93, 0.4)",
                      boxShadow: "0 18px 36px -12px rgba(61, 118, 93, 0.12)",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "14px",
                      bgcolor: "rgba(61, 118, 93, 0.08)",
                      border: "1px solid rgba(61, 118, 93, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mb: 2.5,
                    }}
                  >
                    <CheckCircleOutlinedIcon sx={{ fontSize: 24, color: "#3D765D" }} />
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"DM Serif Display", serif',
                      fontSize: { xs: "1.2rem", sm: "1.25rem", md: "1.3rem" },
                      fontWeight: 400,
                      letterSpacing: "-0.015em",
                      color: "#183D35",
                      lineHeight: 1.3,
                      mb: 1.2,
                      textWrap: "balance",
                    }}
                  >
                    {pt.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      color: "#52525B",
                    }}
                  >
                    {pt.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
