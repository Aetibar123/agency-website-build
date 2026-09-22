"use client";
import React from "react";
import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
        bgcolor: "#FAF8F5",
        borderTop: "1px solid rgba(228, 228, 231, 0.8)",
        borderBottom: "1px solid rgba(228, 228, 231, 0.8)",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.5,
              borderRadius: "9999px",
              bgcolor: "rgba(249, 115, 22, 0.08)",
              border: "1px solid rgba(249, 115, 22, 0.25)",
              mb: 2.5,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                color: "#EA580C",
                textTransform: "uppercase",
              }}
            >
           What We Have Worked On
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.25rem" },
              fontWeight: 700,
              color: "#18181B",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              mb: 2,
            }}
          >
           A Look At What We Do
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.15rem" },
              lineHeight: 1.75,
              color: "#52525B",
              maxWidth: 720,
              mx: "auto",
            }}
          >
           Explore examples of the websites, apps, AI automation, SEO, social media, and advertising work we create to help businesses grow online and work more efficiently.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {featuredProjects.map((project) => {
            const isProduction = project.projectType === "Production Build" || project.projectType === "Client Project";
            const isPrototype = project.projectType === "Prototype" || project.projectType === "Product Exploration";

            return (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.slug}>
                <Box
                  sx={{
                    bgcolor: "#FFFFFF",
                    borderRadius: "16px",
                    border: "1px solid rgba(228, 228, 231, 0.9)",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 14px 30px -8px rgba(24, 24, 27, 0.08)",
                      borderColor: "#EA580C",
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
                              ? "#EA580C"
                              : "#4B5563",
                            color: "#FFFFFF",
                            fontWeight: 700,
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
                          color: "#EA580C",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          display: "block",
                          mb: 1,
                        }}
                      >
                        {project.clientType}
                      </Typography>

                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "#18181B",
                          lineHeight: 1.35,
                          mb: 1.5,
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
                              bgcolor: "rgba(24, 24, 27, 0.04)",
                              color: "#52525B",
                              fontSize: "0.75rem",
                              fontWeight: 600,
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
                          color: "#18181B",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          textTransform: "none",
                          "&:hover": {
                            color: "#EA580C",
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
              </Grid>
            );
          })}
        </Grid>

        {/* Centered Action Button */}
        <Box sx={{ mt: { xs: 6, md: 8 }, textAlign: "center" }}>
          <Link href="/work" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                color: "#18181B",
                borderColor: "rgba(24, 24, 27, 0.2)",
                bgcolor: "#FFFFFF",
                px: 3.5,
                py: 1.3,
                fontWeight: 600,
                borderRadius: "9999px",
                textTransform: "none",
                fontSize: "0.95rem",
                "&:hover": {
                  borderColor: "#EA580C",
                  color: "#EA580C",
                  bgcolor: "rgba(249, 115, 22, 0.04)",
                },
              }}
            >
              View All Work &amp; Case Studies
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
