"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { workProjects } from "../../data/workData";

// Featured selection representing client work, internal systems, and prototypes
const featuredProjects = workProjects.slice(0, 6);

export default function HomeWork() {
  return (
    <Box
      component="section"
      id="work"
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
          left: "50%",
          transform: "translateX(-50%)",
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
                PROVEN CLIENT WORK &bull; MEASURABLE RESULTS
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
              Real Projects That Delivered{" "}
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
                Real Business Growth.
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
             Discover how we help businesses improve website performance, Google visibility, generate qualified enquiries, and automate repetitive tasks with AI.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={3.5}>
          {featuredProjects.map((project, idx) => {
            const isProduction = project.projectType === "Production Build" || project.projectType === "Client Project";
            const isPrototype = project.projectType === "Prototype" || project.projectType === "Product Exploration";

            return (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.slug}>
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
                    borderRadius: { xs: "20px", md: "24px" },
                    border: "1px solid rgba(24, 61, 53, 0.08)",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 2px 8px rgba(24, 61, 53, 0.02)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 18px 36px -12px rgba(61, 118, 93, 0.12)",
                      borderColor: "rgba(61, 118, 93, 0.4)",
                    },
                  }}
                >
                  <Box>
                    {/* Project Preview Image */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: 220,
                        bgcolor: "#F4F4F5",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Badge in top right */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                        }}
                      >
                        <Chip
                          label={project.projectType}
                          size="small"
                          sx={{
                            bgcolor: isProduction
                              ? "#16A34A"
                              : isPrototype
                              ? "#3D765D"
                              : "#4B5563",
                            color: "#FFFFFF",
                            fontWeight: 700,
                            fontFamily: "monospace",
                            letterSpacing: "0.04em",
                            fontSize: "0.72rem",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: { xs: 3, sm: 3.5 } }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#3D765D",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          fontFamily: "monospace",
                          display: "block",
                          mb: 1,
                        }}
                      >
                        {project.clientType}
                      </Typography>

                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: '"DM Serif Display", serif',
                          fontSize: { xs: "1.15rem", sm: "1.2rem", md: "1.25rem" },
                          fontWeight: 400,
                          letterSpacing: "-0.015em",
                          color: "#183D35",
                          lineHeight: 1.3,
                          mb: 1.5,
                          textWrap: "balance",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                          color: "#52525B",
                          mb: 2.5,
                        }}
                      >
                        {project.summary}
                      </Typography>

                      {/* Technologies */}
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 2 }}>
                        {project.technology.slice(0, 4).map((tech, i) => (
                          <Typography
                            key={i}
                            variant="caption"
                            sx={{
                              px: 1.2,
                              py: 0.4,
                              borderRadius: "6px",
                              bgcolor: "rgba(24, 61, 53, 0.04)",
                              color: "#52525B",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              fontFamily: "monospace",
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  {/* Card Action Link */}
                  <Box
                    sx={{
                      px: { xs: 3, sm: 3.5 },
                      pb: 3,
                      pt: 1,
                    }}
                  >
                    <Link href={`/work/${project.slug}`} style={{ textDecoration: "none" }}>
                      <Button
                        variant="text"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
                        sx={{
                          p: 0,
                          color: "#183D35",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          textTransform: "none",
                          "&:hover": {
                            color: "#3D765D",
                            bgcolor: "transparent",
                            "& .MuiButton-endIcon": {
                              transform: "translateX(3px)",
                            },
                          },
                          "& .MuiButton-endIcon": {
                            transition: "transform 0.2s ease",
                          },
                        }}
                      >
                        Read Full Case Study
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>

      {/* Centered Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: "center" }}>
          <Link href="/work" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                color: "#183D35",
                borderColor: "rgba(24, 61, 53, 0.2)",
                bgcolor: "#FFFFFF",
                px: 3.5,
                py: 1.3,
                fontWeight: 600,
                borderRadius: "9999px",
                textTransform: "none",
                fontSize: "0.95rem",
                "&:hover": {
                  borderColor: "#3D765D",
                  color: "#3D765D",
                  bgcolor: "rgba(61, 118, 93, 0.04)",
                },
              }}
            >
              View All Work &amp; Case Studies
            </Button>
          </Link>
        </Box>
      </motion.div>
      </Container>
    </Box>
  );
}
