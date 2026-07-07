"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function TermsOfServicePage() {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', pt: { xs: 15, md: 22 }, pb: { xs: 10, md: 20 } }}>
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '3rem', md: '4.5rem' }, fontWeight: 900, mb: 4, letterSpacing: '-0.02em' }}>
          Terms of Service
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', mb: 8 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              1. Agreement to Terms
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem' }}>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Aetibar ("Company," "we," "us," or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              2. Intellectual Property Rights
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem', mb: 2 }}>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem' }}>
              The Content is provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              3. User Representations
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem' }}>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              4. Prohibited Activities
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem' }}>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              5. Modifications and Interruptions
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem' }}>
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
