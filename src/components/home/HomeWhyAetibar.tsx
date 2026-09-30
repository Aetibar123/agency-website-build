"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { motion } from "framer-motion";

const points = [
  {
    title: "Honest, Practical Advice — No Unnecessary Costs",
    desc: "We never sell you an expensive custom build or bloated software if a simpler, faster tool achieves your goal. We give you honest recommendations focused strictly on your business ROI.",
  },
  {
    title: "100% Code & Asset Ownership — No Lock-Ins",
    desc: "You own 100% of your website, app, domain, database, and source code upon completion. No proprietary lock-in, no hidden monthly licensing traps, and no hostage fees ever.",
  },
  {
    title: "Direct Access to Dedicated Builders",
    desc: "You collaborate directly with senior designers and engineers who actually build your product—not junior middlemen or sales reps who cannot answer your technical questions.",
  },
  {
    title: "Mobile-First & Engineered to Convert Visitors",
    desc: "Over 75% of your customers browse on smartphones. We design clean, responsive pages with instant load speeds and clear WhatsApp, call, and enquiry buttons to capture every lead.",
  },
  {
    title: "Practical AI with Privacy & Human Oversight",
    desc: "We apply AI automation only where it saves real team hours and operational cost—like instant lead triage and order syncing—keeping your company data private and fully secure.",
  },
  {
    title: "Dependable Post-Launch Support & Partnership",
    desc: "We never disappear after launch day. We provide dependable ongoing maintenance, security updates, and technical troubleshooting as your business grows.",
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
          <Box sx={{ maxWidth: { xs: "100%", md: 960, lg: 1080 }, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
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
                fontSize: { xs: "1.55rem", sm: "2.15rem", md: "2.65rem", lg: "3rem" },
                fontWeight: 600,
                color: "#18181B",
                lineHeight: { xs: 1.25, md: 1.18 },
                letterSpacing: "-0.035em",
                textWrap: "balance",
                mb: 2.5,
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
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                lineHeight: 1.75,
                color: "#52525B",
                maxWidth: 860,
                mx: "auto",
                fontWeight: 400,
              }}
            >
              In Urdu and Hindi, &quot;Aetibar&quot; means Trust and Reliability. We started our company because too many business owners were let down by agencies that overpromised, overcharged, and delivered fragile software. Here is how we do things differently:
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
