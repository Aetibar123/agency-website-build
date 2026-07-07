"use client";
import React from "react";
import { Box, Container, Card, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function CtaSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }} id="contact">
      <Container maxWidth="md">
        <Card sx={{ bgcolor: 'secondary.main', color: 'white', textAlign: 'center', p: { xs: 4, md: 8 }, borderRadius: 4 }}>
           <Typography variant="h2" sx={{ mb: 3, color: 'white' }}>
            Ready to Dominate Your Industry?
          </Typography>
          <Typography variant="body1" sx={{ mb: 5, color: 'grey.300', maxWidth: 600, mx: 'auto' }}>
            Stop letting outdated technology and inefficient marketing strategies hold your business back. Schedule a free, no-obligation strategic consultation with our experts today, and let us blueprint your path to unprecedented digital growth.
          </Typography>
          <Link href="/contact" passHref style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" size="large" sx={{ px: 6, py: 2, fontSize: '1.1rem' }}>
              Contact Us
            </Button>
          </Link>
        </Card>
      </Container>
    </Box>
  );
}
