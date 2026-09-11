"use client";
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

interface InteractiveServiceExplorerProps {
  detailedContent?: {
    heading: string;
    paragraphs: string[];
  }[];
  features: {
    title: string;
    desc: string;
  }[];
  serviceTitle: string;
}

export default function InteractiveServiceExplorer({
  detailedContent = [],
  features = [],
  serviceTitle,
}: InteractiveServiceExplorerProps) {
  const [activeTab, setActiveTab] = useState(0);

  if (!detailedContent || detailedContent.length === 0) return null;

  const currentContent = detailedContent[activeTab] || detailedContent[0];

  return (
    <Box>
      {/* Interactive Tabs Header */}
      <Box sx={{ mb: { xs: 4, md: 5 } }}>
        <Typography
          variant="caption"
          sx={{
            color: "#0E7490",
            fontWeight: 700,
            letterSpacing: "0.14em",
            display: "block",
            mb: 1.5,
          }}
        >
          INTERACTIVE METHODOLOGY EXPLORER
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "#0E172A",
            fontSize: { xs: "1.75rem", sm: "2.2rem", md: "2.6rem" },
            fontWeight: 800,
            letterSpacing: "-0.025em",
            mb: 3,
          }}
        >
          How We Deliver {serviceTitle}
        </Typography>

        {/* Tab Buttons */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.2,
            p: 0.8,
            bgcolor: "#F2F0EB",
            borderRadius: "10px",
            width: "fit-content",
          }}
        >
          {detailedContent.map((content, idx) => {
            const isSelected = activeTab === idx;
            // Short label from heading
            const shortLabel = content.heading.length > 28
              ? content.heading.substring(0, 25) + "..."
              : content.heading;

            return (
              <Box
                key={idx}
                component="button"
                onClick={() => setActiveTab(idx)}
                sx={{
                  px: { xs: 1.8, sm: 2.4 },
                  py: 1.2,
                  borderRadius: "8px",
                  border: "none",
                  bgcolor: isSelected ? "#FFFFFF" : "transparent",
                  color: isSelected ? "#0E172A" : "#5E6068",
                  fontWeight: isSelected ? 800 : 600,
                  fontSize: { xs: "0.82rem", sm: "0.9rem" },
                  cursor: "pointer",
                  boxShadow: isSelected ? "0 4px 12px rgba(17, 18, 21, 0.08)" : "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: isSelected ? "#0E172A" : "#0E7490",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.75rem",
                    color: isSelected ? "#0E7490" : "#8E9098",
                    fontWeight: 700,
                  }}
                >
                  0{idx + 1}
                </Box>
                <span>{shortLabel}</span>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Main Dual-Column Content Stage */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1.4fr 1fr" },
          gap: { xs: 4, lg: 6 },
          alignItems: "start",
        }}
      >
        {/* Left Column: Active Phase Narrative */}
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            p: { xs: 3.5, sm: 4.5, md: 5 },
            borderRadius: "14px",
            border: "1px solid rgba(17, 18, 21, 0.08)",
            boxShadow: "0 8px 24px rgba(17, 18, 21, 0.03)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <Box
              sx={{
                px: 1.4,
                py: 0.4,
                borderRadius: "4px",
                bgcolor: "rgba(14, 116, 144, 0.08)",
                color: "#0E7490",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                fontFamily: "monospace",
              }}
            >
              PHASE 0{activeTab + 1} OF 0{detailedContent.length}
            </Box>
          </Box>

          <Typography
            variant="h4"
            sx={{
              color: "#0E172A",
              fontSize: { xs: "1.45rem", sm: "1.75rem" },
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              mb: 2.5,
            }}
          >
            {currentContent.heading}
          </Typography>

          <Box sx={{ mb: 3.5 }}>
            {currentContent.paragraphs.map((para, pIdx) => (
              <Typography
                key={pIdx}
                variant="body1"
                sx={{
                  color: "#4A4D57",
                  fontSize: { xs: "0.98rem", md: "1.05rem" },
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                {para}
              </Typography>
            ))}
          </Box>

          {/* Phase Key Deliverables */}
          <Box
            sx={{
              p: 2.5,
              borderRadius: "8px",
              bgcolor: "#FAF9F5",
              border: "1px solid rgba(17, 18, 21, 0.06)",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
              <CheckCircleIcon sx={{ color: "#0E7490", fontSize: 20 }} />
              <Typography sx={{ color: "#0E172A", fontWeight: 700, fontSize: "0.9rem" }}>
                Deliverable: Fully documented &amp; tested implementation
              </Typography>
            </Box>

            <Button
              component={Link}
              href="/contact"
              variant="text"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                fontSize: "0.85rem",
                p: 0,
                "&:hover": { bgcolor: "transparent", color: "#0E172A" },
              }}
            >
              Ask an Engineer
            </Button>
          </Box>
        </Box>

        {/* Right Column: Key Features Spotlight Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          <Box sx={{ pb: 1 }}>
            <Typography
              variant="caption"
              sx={{
                color: "#0E7490",
                fontWeight: 700,
                letterSpacing: "0.1em",
                display: "block",
                mb: 0.5,
              }}
            >
              CORE CAPABILITIES
            </Typography>
            <Typography
              sx={{
                color: "#0E172A",
                fontWeight: 800,
                fontSize: "1.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              Key Engineering Features
            </Typography>
          </Box>

          {features.map((feature, fIdx) => (
            <Box
              key={fIdx}
              sx={{
                bgcolor: "#FFFFFF",
                p: 3,
                borderRadius: "10px",
                border: "1px solid rgba(17, 18, 21, 0.08)",
                transition: "all 0.25s ease",
                "&:hover": {
                  borderColor: "#0E7490",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(14, 116, 144, 0.06)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    color: "#0E7490",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                  }}
                >
                  FEATURE 0{fIdx + 1}
                </Typography>
              </Box>

              <Typography
                variant="h6"
                sx={{
                  color: "#0E172A",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  mb: 0.8,
                  lineHeight: 1.3,
                }}
              >
                {feature.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#5E6068",
                  lineHeight: 1.65,
                  fontSize: "0.88rem",
                }}
              >
                {feature.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
