"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', pt: { xs: 15, md: 22 }, pb: { xs: 10, md: 20 } }}>
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '1.9rem', md: '3rem' }, fontWeight: 900, mb: 4, letterSpacing: '-0.02em' }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, mb: 8 }}>
          <strong>Last Updated:</strong> July 15, 2026
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              1. Introduction
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Welcome to <strong>Aetibar</strong> ("Aetibar", "we", "our", or "us").
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website, submit an inquiry, or use our services.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              By using our website, you agree to the practices described in this Privacy Policy.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              2. Information We Collect
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              We may collect the following types of information:
            </Typography>
            
            <Typography variant="h3" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 700, color: '#0B0F19', mb: 2, mt: 4 }}>
              Personal Information
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Information you voluntarily provide, including:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4, mb: 4 }}>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Project details or messages submitted through our contact forms</li>
            </Box>

            <Typography variant="h3" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 700, color: '#0B0F19', mb: 2 }}>
              Technical Information
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              When you visit our website, we may automatically collect certain technical information such as:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4 }}>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referral source</li>
              <li>Cookies and similar technologies</li>
            </Box>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              3. How We Use Your Information
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              We use your information to:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4, mb: 4 }}>
              <li>Respond to inquiries and consultation requests</li>
              <li>Communicate regarding projects and services</li>
              <li>Deliver requested services</li>
              <li>Improve website performance and user experience</li>
              <li>Analyze website traffic and usage trends</li>
              <li>Prevent fraud and maintain website security</li>
              <li>Comply with applicable legal obligations</li>
            </Box>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              We do <strong>not</strong> sell your personal information to third parties.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              4. Cookies & Analytics
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Our website may use cookies and similar technologies to improve functionality, analyze traffic, and enhance user experience.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              These technologies may include:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4, mb: 4 }}>
              <li>Essential website cookies</li>
              <li>Analytics tools</li>
              <li>Performance monitoring</li>
              <li>Security-related cookies</li>
            </Box>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              You can disable cookies through your browser settings; however, some features of the website may not function properly.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              5. Third-Party Services
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              We may use trusted third-party service providers to operate and improve our business, including services such as:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4, mb: 4 }}>
              <li>Website hosting</li>
              <li>Analytics platforms</li>
              <li>Email communication services</li>
              <li>Cloud infrastructure</li>
              <li>Customer support tools</li>
            </Box>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              These providers process data only as necessary to perform their services and are expected to maintain appropriate security standards.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              6. Data Security
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              We implement reasonable technical and organizational safeguards designed to protect your information from unauthorized access, disclosure, alteration, or destruction.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              While we strive to use commercially acceptable security measures, no method of internet transmission or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              7. Data Retention
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              We retain personal information only for as long as necessary to:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4, mb: 4 }}>
              <li>Provide our services</li>
              <li>Respond to inquiries</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </Box>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              When information is no longer required, it will be securely deleted or anonymized where reasonably possible.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              8. Your Rights
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Depending on your location and applicable laws, you may have the right to:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4, mb: 4 }}>
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent where applicable</li>
              <li>Object to certain types of data processing</li>
              <li>Request a copy of your personal information</li>
            </Box>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              To exercise these rights, please contact us using the details below.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              9. External Links
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Our website may contain links to third-party websites.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              We are not responsible for the privacy practices, content, or security of external websites. We encourage you to review their respective privacy policies before providing any personal information.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              10. Children's Privacy
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Our services are not intended for individuals under the age of 13, and we do not knowingly collect personal information from children.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              If you believe a child has provided us with personal information, please contact us so we can promptly remove it.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              11. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              We may update this Privacy Policy from time to time to reflect changes in our business, technology, legal requirements, or services.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              The "Last Updated" date at the top of this page indicates when this policy was most recently revised.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              12. Contact Us
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 4 }}>
              If you have any questions regarding this Privacy Policy or our data practices, please contact us.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 1 }}>
              <strong>Aetibar</strong>
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 1 }}>
              📧 Email: <Link href="mailto:hello.aetibar@gmail.com" style={{ color: '#6e41e2', textDecoration: 'none' }}>hello.aetibar@gmail.com</Link>
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 1 }}>
              🌐 Website: <Link href="https://aetibar.in" style={{ color: '#6e41e2', textDecoration: 'none' }}>https://aetibar.in</Link>
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              📍 Udaipur, Rajasthan, India
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
