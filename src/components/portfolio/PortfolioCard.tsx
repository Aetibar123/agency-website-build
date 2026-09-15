"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Image from "next/image";
import { PortfolioProject } from "../../data/portfolioProjects";

export default function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <Box
      component={Link}
      href={`/portfolio/${project.slug}`}
      sx={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "#FFFFFF",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid rgba(17, 18, 21, 0.08)",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 20px 40px rgba(14, 23, 42, 0.08)",
          borderColor: "rgba(14, 116, 144, 0.4)",
          "& .card-img": {
            transform: "scale(1.04)",
          },
          "& .card-arrow": {
            transform: "translateX(6px)",
            color: "#0E7490",
          },
        },
      }}
    >
      {/* Project Visual Showcase */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 220, sm: 260 },
          width: "100%",
          bgcolor: "#EBE8DF",
          overflow: "hidden",
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="card-img"
            style={{
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: project.thumbnailColor,
            }}
          />
        )}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(14, 23, 42, 0.04) 0%, rgba(14, 23, 42, 0.35) 100%)",
          }}
        />

        {/* Category Badge */}
        <Box
          sx={{
            position: "absolute",
            top: 14,
            left: 14,
            bgcolor: "rgba(14, 23, 42, 0.85)",
            backdropFilter: "blur(8px)",
            px: 1.4,
            py: 0.4,
            borderRadius: "4px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </Typography>
        </Box>

        {/* Primary Metric Badge */}
        {project.metric && (
          <Box
            sx={{
              position: "absolute",
              bottom: 12,
              right: 14,
              bgcolor: "rgba(250, 249, 245, 0.95)",
              backdropFilter: "blur(8px)",
              px: 1.4,
              py: 0.4,
              borderRadius: "4px",
              border: "1px solid rgba(17, 18, 21, 0.1)",
              display: "flex",
              alignItems: "center",
              gap: 0.8,
            }}
          >
            <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#059669" }} />
            <Typography
              sx={{
                fontSize: "0.72rem",
                fontWeight: 800,
                color: "#0E172A",
                fontFamily: "monospace",
              }}
            >
              {project.metric}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Card Body */}
      <Box
        sx={{
          p: { xs: 3, sm: 3.5 },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.2 }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "0.75rem",
              }}
            >
              {project.client}
            </Typography>

            {project.timeline && (
              <Typography
                variant="caption"
                sx={{
                  color: "#6B6E76",
                  fontWeight: 600,
                  fontSize: "0.72rem",
                  fontFamily: "monospace",
                }}
              >
                ⏱ {project.timeline}
              </Typography>
            )}
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "#0E172A",
              mb: 1.5,
              lineHeight: 1.28,
              fontSize: { xs: "1.2rem", md: "1.32rem" },
              letterSpacing: "-0.015em",
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#4A4D57",
              mb: 2.5,
              lineHeight: 1.7,
              fontSize: "0.92rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.summary}
          </Typography>

          {/* Tech Stack Chips */}
          {project.techStack && project.techStack.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3 }}>
              {project.techStack.slice(0, 3).map((tech, tIdx) => (
                <Box
                  key={tIdx}
                  sx={{
                    px: 1.2,
                    py: 0.3,
                    bgcolor: "#F2F0EB",
                    borderRadius: "4px",
                    border: "1px solid rgba(17, 18, 21, 0.06)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#0E172A",
                  }}
                >
                  {tech}
                </Box>
              ))}
              {project.techStack.length > 3 && (
                <Box
                  sx={{
                    px: 1,
                    py: 0.3,
                    bgcolor: "transparent",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#6B6E76",
                  }}
                >
                  +{project.techStack.length - 3} more
                </Box>
              )}
            </Box>
          )}
        </Box>

        {/* Card Footer Link */}
        <Box
          sx={{
            pt: 2,
            borderTop: "1px solid rgba(17, 18, 21, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#0E172A",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "-0.01em",
            }}
          >
            Read Case Study
          </Typography>
          <ArrowForwardIcon
            className="card-arrow"
            sx={{
              fontSize: 16,
              color: "#0E172A",
              transition: "all 0.25s ease",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
