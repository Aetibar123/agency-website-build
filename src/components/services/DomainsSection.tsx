"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { ServiceDetail } from "../../data/detailedServices";

export default function DomainsSection({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" sx={{ color: 'secondary.main', mb: 2, fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
            Industries We Serve
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9 }}>
            Our {service.title.toLowerCase()} solutions are battle-tested across highly regulated and competitive domains.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {service.domains.map((domain, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Card sx={{ height: '100%', bgcolor: 'background.default', border: 'none', boxShadow: 'none' }}>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ color: 'secondary.main', mb: 2, fontWeight: 800, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    {domain.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8 }}>
                    {domain.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
