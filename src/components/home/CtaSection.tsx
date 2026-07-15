"use client";
import React from "react";
import { Box, Container, Card, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function CtaSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }} id="contact">
      <Container maxWidth="md">
        <Card sx={{ bgcolor: 'secondary.main', color: 'white', textAlign: 'center', p: { xs: 4, md: 8 }, borderRadius: 4 }}>
          <Typography variant="caption" sx={{ mb: 3, color: 'primary.main', fontWeight: 800, letterSpacing: 2, display: 'block' }}>
          READY TO BUILD?
          </Typography>
           <Typography variant="h2" sx={{ mb: 3, color: 'white', fontWeight: 900, letterSpacing: '-0.02em', fontSize: { xs: '2rem', md: '3rem' } }}>
          Let's Build Something Great Together.
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, color: 'grey.300', maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9 }}>
           Whether you need a high-performance website, custom software, AI automation, or digital marketing, we'll help you build scalable digital solutions that grow with your business.
          </Typography>
          <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" size="large" sx={{ px: 6, py: 2, fontSize: '1.1rem' }}>
              Start Your Project →
            </Button>
          </Link>
          <Typography variant="body1" sx={{ mt: 2, color: 'grey.300', maxWidth: 600, mx: 'auto', fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
            Typically responds within 24 business hours
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
