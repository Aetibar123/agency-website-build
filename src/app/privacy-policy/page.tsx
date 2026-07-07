"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', pt: { xs: 15, md: 22 }, pb: { xs: 10, md: 20 } }}>
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '3rem', md: '4.5rem' }, fontWeight: 900, mb: 4, letterSpacing: '-0.02em' }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.25rem', mb: 8 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              1. Introduction
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Welcome to Aetibar. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@aetibar.com.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              2. Information We Collect
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem', mb: 2 }}>
              We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem' }}>
              The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: names, phone numbers, email addresses, mailing addresses, and similar data.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              3. How We Use Your Information
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem' }}>
              We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              4. Will Your Information Be Shared?
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem' }}>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, and Legal Obligations.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              5. Contact Us
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: '1.1rem' }}>
              If you have questions or comments about this notice, you may email us at info@aetibar.com or by post to:
              <br/><br/>
              Aetibar Digital Agency<br/>
              Udaipur, Rajasthan, India
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
