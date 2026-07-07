"use client";
import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";
import { PortfolioProject } from "../../data/portfolioProjects";

export default function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <Card 
      component={Link} 
      href={`/portfolio/${project.slug}`}
      sx={{ 
        textDecoration: 'none',
        display: 'block',
        bgcolor: '#ffffff', 
        borderRadius: 4, 
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.03)',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.03)',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.1)',
          '& .project-image': {
            transform: 'scale(1.05)'
          },
          '& .arrow-icon': {
            transform: 'translateX(5px)',
            color: 'primary.main'
          }
        }
      }}
    >
      <Box 
        className="project-image"
        sx={{ 
          height: 250, 
          width: '100%', 
          background: project.image ? `url(${project.image}) center/cover no-repeat` : project.thumbnailColor,
          transition: 'transform 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
         {project.image && <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(11, 15, 25, 0.4)' }} />}
         {!project.image && (
           <Typography variant="h4" sx={{ color: 'rgba(255,255,255,0.2)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: 4 }}>
             {project.category}
           </Typography>
         )}
      </Box>
      <CardContent sx={{ p: 4, pb: '32px !important' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>
            {project.client}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
            {project.category}
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19', mb: 2, lineHeight: 1.3 }}>
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666', mb: 4, lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {project.summary}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="button" sx={{ color: '#0B0F19', fontWeight: 700 }}>
            Read Case Study
          </Typography>
          <ArrowForwardIcon className="arrow-icon" sx={{ fontSize: 18, color: '#0B0F19', transition: 'all 0.3s ease' }} />
        </Box>
      </CardContent>
    </Card>
  );
}
