"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { ServiceDetail } from "../../data/detailedServices";

export default function CoreOfferingsSection({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h3" sx={{ color: 'secondary.main', mb: 4, fontWeight: 700 }}>
              The Core Engine
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', textAlign: 'justify', lineHeight: 1.8 }}>
              {service.description}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={3}>
              {service.features.map((feature, idx) => (
                <Grid size={{ xs: 12 }} key={idx}>
                  <Card sx={{ border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'none', borderRadius: 4 }}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" sx={{ color: 'secondary.main', mb: 1, fontWeight: 700 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {feature.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
