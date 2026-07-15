"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <Box sx={{ bgcolor: '#ffffff', color: '#111', minHeight: '100vh', pt: { xs: 15, md: 22 }, pb: { xs: 10, md: 20 } }}>
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ color: '#0B0F19', fontSize: { xs: '1.9rem', md: '3rem' }, fontWeight: 900, mb: 4, letterSpacing: '-0.02em' }}>
          Terms of Service
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, mb: 8 }}>
          <strong>Last Updated:</strong> July 15, 2026
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Welcome to <strong>Aetibar</strong> ("Aetibar", "we", "our", or "us").
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              By accessing or using our website, requesting a consultation, or engaging with our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of our website and services.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              2. Our Services
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Aetibar provides professional digital services including, but not limited to:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4, mb: 4 }}>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>AI Automation</li>
              <li>AI Solutions & Tools</li>
              <li>UI/UX & Graphic Design</li>
              <li>Video Editing</li>
              <li>SEO</li>
              <li>Digital Marketing</li>
              <li>Technical Consulting</li>
            </Box>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              The availability and scope of services may change at any time without prior notice.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              3. Intellectual Property
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Unless otherwise stated, all content available on this website—including text, graphics, branding, logos, icons, images, software, source code, designs, layouts, and other materials—is owned by or licensed to Aetibar and is protected under applicable intellectual property laws.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              You may not copy, reproduce, distribute, modify, publish, or commercially exploit any part of this website without our prior written permission.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              Ownership of custom work delivered to clients will be governed by the applicable project agreement or contract.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              4. Client Responsibilities
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              When working with Aetibar, you agree to:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4, mb: 4 }}>
              <li>Provide accurate information.</li>
              <li>Respond to requests for feedback within a reasonable timeframe.</li>
              <li>Supply any required content, assets, or credentials needed for project completion.</li>
              <li>Ensure you have the legal rights to any materials you provide.</li>
            </Box>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              Project delays caused by missing information or delayed approvals may affect delivery timelines.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              5. Payments & Proposals
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Project pricing, timelines, deliverables, and payment schedules are defined within individual proposals or agreements.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Unless otherwise specified:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4 }}>
              <li>Quotes are valid for a limited period.</li>
              <li>Work may begin after agreed payment requirements are fulfilled.</li>
              <li>Additional work outside the approved scope may require separate quotations.</li>
            </Box>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              6. Acceptable Use
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              You agree not to:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4 }}>
              <li>Use our website for unlawful purposes.</li>
              <li>Attempt unauthorized access to our systems.</li>
              <li>Upload malicious software or harmful code.</li>
              <li>Interfere with website functionality or security.</li>
              <li>Violate applicable laws or regulations while using our services.</li>
            </Box>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              7. Third-Party Services
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Our projects may integrate third-party platforms, APIs, hosting providers, analytics services, payment processors, or other external tools.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              Aetibar is not responsible for the availability, pricing, security, or policies of third-party services.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              8. Confidentiality
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              We respect the confidentiality of client information and project materials.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Unless authorized or legally required, confidential business information shared during a project will not be disclosed to third parties.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              Likewise, clients agree not to disclose proprietary methodologies, documentation, or intellectual property belonging to Aetibar without written permission.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              9. Disclaimer
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              Our website and its content are provided on an "as is" and "as available" basis.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              While we strive for accuracy and reliability, we do not guarantee:
            </Typography>
            <Box component="ul" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, pl: 4, mb: 4 }}>
              <li>Continuous website availability</li>
              <li>Error-free operation</li>
              <li>Compatibility with every device or browser</li>
              <li>Specific business outcomes or search engine rankings</li>
            </Box>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              Results from marketing, SEO, AI, or software projects may vary depending on numerous external factors.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              10. Limitation of Liability
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              To the fullest extent permitted by law, Aetibar shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our website or services.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              Our total liability shall not exceed the amount paid by the client for the specific service giving rise to the claim, where permitted by applicable law.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              11. Changes to These Terms
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              We reserve the right to update or modify these Terms of Service at any time.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              Changes become effective immediately upon publication on this page. Continued use of our website or services constitutes acceptance of the revised terms.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              12. Governing Law
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 2 }}>
              These Terms shall be governed and interpreted in accordance with the applicable laws of India, without regard to conflict of law principles.
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' } }}>
              Any disputes arising from these Terms or our services shall be subject to the jurisdiction of the competent courts in Rajasthan, India.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, color: '#0B0F19', mb: 3 }}>
              13. Contact Us
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.9, fontSize: { xs: '1rem', md: '1.15rem' }, mb: 4 }}>
              For any questions regarding these Terms of Service, please contact us.
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
