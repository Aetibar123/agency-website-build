"use client";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { motion } from "framer-motion";

export default function HowWeHelpCta() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 12, md: 18 },
        bgcolor: "#FAF8F5",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Box
            sx={{
              maxWidth: 1100,
              mx: "auto",
              textAlign: "center",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              p: { xs: 4, sm: 6, md: 8 },
              background:
                "linear-gradient(145deg, #18181B 0%, #0F0E0E 60%, #201A18 100%)",
              borderRadius: { xs: "24px", md: "36px" },
              boxShadow: "0 30px 80px -20px rgba(24, 24, 27, 0.5)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient Warm Orange & Amber Glows */}
            <Box
              component={motion.div}
              animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                top: "-20%",
                right: "-10%",
                width: "440px",
                height: "440px",
                background: "radial-gradient(circle, rgba(249, 115, 22, 0.32) 0%, transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />
            <Box
              component={motion.div}
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              sx={{
                position: "absolute",
                bottom: "-20%",
                left: "-10%",
                width: "440px",
                height: "440px",
                background: "radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
            />

            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                maxWidth: 900,
                mx: "auto",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Status Pill */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.2,
                    px: 2.2,
                    py: 0.6,
                    borderRadius: "9999px",
                    bgcolor: "rgba(249, 115, 22, 0.2)",
                    border: "1px solid rgba(251, 146, 60, 0.4)",
                    mb: 3.5,
                  }}
                >
                  <Box
                    component={motion.div}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#FB923C", boxShadow: "0 0 10px #FB923C" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#FB923C",
                      fontWeight: 700,
                    }}
                  >
                    WORKFLOW &amp; ARCHITECTURE CONSULTATION
                  </Typography>
                </Box>
              </Box>

              {/* Main Headline */}
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4rem" },
                  fontWeight: 600,
                  color: "#FFFFFF",
                  lineHeight: { xs: 1.15, md: 1.08 },
                  letterSpacing: "-0.035em",
                  maxWidth: 860,
                  mx: "auto",
                  textAlign: "center",
                  mb: 2.5,
                }}
              >
                Ready to stop running your business on{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #EA580C 0%, #F97316 60%, #FB923C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  disconnected workarounds?
                </Box>
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontSize: { xs: "1rem", sm: "1.125rem" },
                  color: "#A1A1AA",
                  lineHeight: 1.75,
                  maxWidth: 720,
                  mx: "auto",
                  textAlign: "center",
                  mb: 5,
                  fontWeight: 400,
                }}
              >
                Schedule a direct consultation with our engineering team. We&apos;ll examine your current
                workflow bottlenecks, identify integration opportunities across your systems, and discuss
                whether custom architecture makes sense for your operational scale.
              </Typography>

              {/* Action Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 2,
                  alignItems: "center",
                  mb: 5,
                }}
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                      sx={{
                        background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                        color: "#FFFFFF",
                        px: { xs: 3.5, sm: 4.5 },
                        py: { xs: 1.4, sm: 1.6 },
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                        fontWeight: 700,
                        borderRadius: "9999px",
                        boxShadow: "0 10px 25px -5px rgba(234, 88, 12, 0.4)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          background: "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                          boxShadow: "0 15px 30px -5px rgba(234, 88, 12, 0.5)",
                        },
                      }}
                    >
                      Start a Conversation
                    </Button>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/how-we-work" style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#FFFFFF",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        px: { xs: 3.5, sm: 4 },
                        py: { xs: 1.4, sm: 1.55 },
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                        fontWeight: 600,
                        borderRadius: "9999px",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.25s ease",
                        "&:hover": {
                          borderColor: "#FB923C",
                          bgcolor: "rgba(249, 115, 22, 0.1)",
                          color: "#FB923C",
                        },
                      }}
                    >
                      View How We Work
                    </Button>
                  </Link>
                </motion.div>
              </Box>

              {/* Guarantees / Trust Badges */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 2, sm: 4 },
                  pt: 3,
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  width: "100%",
                }}
              >
                {[
                  "Direct founder-led technical consultation",
                  "Actionable workflow analysis & architecture roadmap",
                  "Zero sales pressure • Objective system guidance",
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#FB923C" }} />
                    <Typography sx={{ fontSize: "0.85rem", color: "#A1A1AA", fontWeight: 500 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
