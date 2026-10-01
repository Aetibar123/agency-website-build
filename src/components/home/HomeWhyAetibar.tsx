"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { motion } from "framer-motion";

const points = [
  {
    title: "All Digital Services Under One Roof",
    desc: "You don't need to juggle a graphic designer, website developer, SEO specialist, and ad manager. We coordinate your branding, website, marketing, and automation seamlessly.",
  },
  {
    title: "Honest Advice & Practical Budgets",
    desc: "We never recommend expensive or complex setups if a simpler, affordable approach solves your problem and brings better return on investment.",
  },
  {
    title: "100% Asset & Code Ownership",
    desc: "You own all design files, logos, ad accounts, domains, website code, and database logins from day one. No monthly hostage fees or proprietary lock-ins ever.",
  },
  {
    title: "Direct WhatsApp & Phone Communication",
    desc: "You speak directly with the real designers, marketers, and developers working on your project—not a remote call center or junior account manager.",
  },
  {
    title: "Focused on Real Inquiries, Not Vanity Metrics",
    desc: "We measure success by phone calls, WhatsApp messages, and paying customers received—not vanity metrics or empty clicks that don't pay your bills.",
  },
  {
    title: "Dependable Support & Long-Term Partnership",
    desc: "We never disappear after launch day. We provide reliable ongoing maintenance, security updates, and marketing guidance as your business grows.",
  },
];

export default function HomeWhyAetibar() {
  return (
    <Box
      component="section"
      id="why-aetibar"
      sx={{
        py: { xs: 12, md: 16 },
        bgcolor: "#FAF8F5",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(24, 24, 27, 0.06)",
      }}
    >
      {/* Background Decorative Ambient Warm Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 850,
          height: 480,
          background: "radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, rgba(250, 248, 245, 0) 70%)",
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
          <Box sx={{ maxWidth: { xs: "100%", sm: 800, md: 880 }, mx: "auto", textAlign: "center", mb: { xs: 6, md: 7.5 } }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2.2,
                py: 0.6,
                borderRadius: "9999px",
                bgcolor: "rgba(249, 115, 22, 0.08)",
                border: "1px solid rgba(249, 115, 22, 0.25)",
                boxShadow: "0 2px 10px rgba(249, 115, 22, 0.08)",
                backdropFilter: "blur(12px)",
                mb: 2.5,
              }}
            >
              <Box
                component={motion.div}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#F97316", boxShadow: "0 0 10px #F97316" }}
              />
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#EA580C",
                  textTransform: "uppercase",
                }}
              >
                THE AETIBAR COMMITMENT &bull; BUILT FOR TRUST
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.65rem", sm: "2.15rem", md: "2.5rem", lg: "2.75rem" },
                fontWeight: 700,
                color: "#18181B",
                lineHeight: { xs: 1.25, md: 1.2 },
                letterSpacing: "-0.03em",
                textWrap: "balance",
                mb: 2.2,
              }}
            >
              Why Business Owners Choose Us as Their{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #EA580C 0%, #F97316 55%, #FB923C 100%)",
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
                mx: "auto",
                fontWeight: 400,
              }}
            >
              In Urdu and Hindi, &quot;Aetibar&quot; means Trust and Reliability. We started our company because too many business owners were burned by agencies that overpromised, charged hidden fees, and delivered fragile results. Here is how we do things differently:
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: 1080, mx: "auto" }}>
          <Grid container spacing={3}>
            {points.map((pt, idx) => (
              <Grid size={{ xs: 12, md: 6 }} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 55 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.85, delay: (idx % 2) * 0.18 + Math.floor(idx / 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: "100%" }}
                >
                  <Box
                    sx={{
                    bgcolor: "#FFFFFF",
                    p: { xs: 3, sm: 3.5 },
                    borderRadius: { xs: "20px", md: "24px" },
                    border: "1px solid rgba(24, 24, 27, 0.08)",
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    boxShadow: "0 2px 8px rgba(24, 24, 27, 0.02)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(234, 88, 12, 0.4)",
                      boxShadow: "0 18px 36px -12px rgba(234, 88, 12, 0.12)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "12px",
                      bgcolor: "rgba(249, 115, 22, 0.1)",
                      color: "#EA580C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.2,
                    }}
                  >
                    <CheckCircleOutlinedIcon sx={{ fontSize: 22, color: "#EA580C" }} />
                  </Box>

                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "1.02rem", sm: "1.06rem", md: "1.08rem" },
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                        color: "#18181B",
                        lineHeight: 1.35,
                        mb: 0.8,
                        textWrap: "balance",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {pt.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        color: "#52525B",
                      }}
                    >
                      {pt.desc}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
