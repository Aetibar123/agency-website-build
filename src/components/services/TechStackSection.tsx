"use client";
import React from "react";
import { Box, Container, Grid, Typography, Chip } from "@mui/material";
import { ServiceDetail } from "../../data/detailedServices";

export default function TechStackSection({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
              Our Tech Stack
            </Typography>
            <Typography variant="body1" sx={{ color: 'primary.light', mb: 4 }}>
              We leverage enterprise-grade technologies and industry-standard tools to ensure maximum reliability and performance.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {service.technologies.map((tech, idx) => (
                <Chip 
                  key={idx} 
                  label={tech} 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    color: 'white', 
                    fontSize: '1.1rem',
                    py: 3,
                    px: 2,
                    borderRadius: 2,
                    fontWeight: 600,
                  }} 
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
