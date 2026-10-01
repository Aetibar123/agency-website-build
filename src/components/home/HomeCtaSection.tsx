"use client";
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { motion } from "framer-motion";

export default function HomeCtaSection() {
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
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box
            sx={{
              maxWidth: 1040,
              mx: "auto",
              textAlign: "center",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              p: { xs: 2.5, sm: 6, md: 9 },
              background:
                "linear-gradient(145deg, #18181B 0%, #0F0E0E 60%, #201A18 100%)",
              borderRadius: { xs: "24px", md: "36px" },
              boxShadow: "0 30px 80px -20px rgba(24, 24, 27, 0.5)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Ambient Warm Orange & Amber Glows with Pulse Animation */}
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

            <Box sx={{ position: "relative", zIndex: 1 }}>
              {/* Warm Sunset Status Pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
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
                    LET&apos;S GROW YOUR BUSINESS &bull; FREE CONSULTATION
                  </Typography>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.65rem", sm: "2.15rem", md: "2.5rem", lg: "2.85rem" },
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: { xs: 1.25, md: 1.2 },
                    letterSpacing: "-0.03em",
                    maxWidth: { xs: "100%", sm: 800, md: 880 },
                    mx: "auto",
                    textWrap: "balance",
                    mb: 2.5,
                  }}
                >
                  Ready to Attract More Customers &amp;{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #F97316 0%, #FB923C 60%, #FED7AA 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Grow Your Business?
                  </Box>
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.125rem" },
                    color: "rgba(255, 255, 255, 0.85)",
                    lineHeight: 1.7,
                    maxWidth: { xs: "100%", md: 740, lg: 780 },
                    mx: "auto",
                    mb: 4.5,
                    fontWeight: 400,
                  }}
                >
                  Whether you need a fresh brand identity, a fast business website, page-1 Google rankings, profitable ads, or time-saving AI automation—we&apos;ll give you honest guidance, fixed pricing, and a clear project roadmap. No high-pressure sales.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 5,
                    width: "100%",
                  }}
                >
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  <Link href="/contact" style={{ textDecoration: "none", width: "100%", display: "block" }}>
                    <Button
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                      sx={{
                        background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
                        color: "#18181B",
                        px: { xs: 3, sm: 4.5 },
                        py: 1.6,
                        fontSize: "0.95rem",
                        fontWeight: 800,
                        borderRadius: "9999px",
                        boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)",
                        transition: "all 0.25s ease",
                        width: { xs: "100%", sm: "auto" },
                        "&:hover": {
                          background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
                          color: "#FFFFFF",
                          boxShadow: "0 15px 30px rgba(234, 88, 12, 0.5)",
                        },
                      }}
                    >
                      Book a Free Consultation
                    </Button>
                  </Link>
                </Box>

                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                >
                  <Link href="/services" style={{ textDecoration: "none", width: "100%", display: "block" }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        color: "#FFFFFF",
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        bgcolor: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        px: { xs: 3, sm: 4 },
                        py: 1.55,
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        borderRadius: "9999px",
                        transition: "all 0.25s ease",
                        width: { xs: "100%", sm: "auto" },
                        "&:hover": {
                          borderColor: "#FB923C",
                          color: "#FB923C",
                          bgcolor: "rgba(249, 115, 22, 0.12)",
                        },
                      }}
                    >
                      Explore All Services
                    </Button>
                  </Link>
                </Box>
              </Box>
            </motion.div>

            {/* Bottom Guarantee Badges with Scroll Fade */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Box
                sx={{
                  pt: 3.5,
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: { xs: 2, sm: 4 },
                }}
              >
                {["Free 30-Minute Business Strategy", "100% Asset & Code Ownership", "Direct WhatsApp Reply Within 24h"].map((badge, idx) => (
                  <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CheckCircleOutlinedIcon sx={{ fontSize: 16, color: "#FB923C" }} />
                    <Typography sx={{ fontSize: "0.825rem", color: "rgba(255, 255, 255, 0.82)", fontWeight: 500 }}>
                      {badge}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
      </Container>
    </Box>
  );
}
