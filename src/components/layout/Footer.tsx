"use client";
import React from "react";
import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import Link from "next/link";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0B0F19', color: 'grey.400', py: 8, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          {/* Logo & Description */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 800 }}>
              AETIBAR<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.8 }}>
              A premium, full-service digital transformation agency specializing in cutting-edge web development, sophisticated AI automations, and data-driven global marketing strategies. We build the technology of tomorrow, today.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Headquartered in Udaipur, India.
            </Typography>
          </Grid>
          
          {/* Services Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>Services</Typography>
            {[
              { name: 'Web Development', href: '/services/web-development' },
              { name: 'App Development', href: '/services/app-development' },
              { name: 'AI Automations', href: '/services/ai-automation' },
              { name: 'SEO & Marketing', href: '/services/seo' },
              { name: 'Brand Design', href: '/services/graphics-designing' }
            ].map(link => (
              <Link key={link.name} href={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body2" sx={{ cursor: 'pointer', mb: 1.5, transition: 'all 0.2s', '&:hover': { color: 'primary.main', transform: 'translateX(5px)' } }}>
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Grid>
          
          {/* Company Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>Company</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Journal', href: '/blog' },
                { name: 'Careers', href: '/careers' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Contact Us', href: '/contact' }
              ].map(link => (
                <Link key={link.name} href={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body2" sx={{ cursor: 'pointer', transition: 'all 0.2s', '&:hover': { color: 'primary.main', transform: 'translateX(5px)' } }}>
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
          
          {/* Contact Info & Socials */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 3 }}>Get in Touch</Typography>
            <Typography variant="body2" sx={{ mb: 1, color: 'white', fontWeight: 600 }}>
              hello.aetibar@gmail.com
            </Typography>
            
            <Typography variant="subtitle2" sx={{ color: 'white', mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>Follow Us</Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <IconButton href="https://x.com/Aetibar_" target="_blank" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', transition: 'all 0.3s', '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-3px)' } }}><TwitterIcon fontSize="small" /></IconButton>
              <IconButton href="https://www.linkedin.com/in/aetibar-information-and-technologies-502531406" target="_blank" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', transition: 'all 0.3s', '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-3px)' } }}><LinkedInIcon fontSize="small" /></IconButton>
              <IconButton href="https://www.instagram.com/aetibar_information/" target="_blank" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', transition: 'all 0.3s', '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-3px)' } }}><InstagramIcon fontSize="small" /></IconButton>
            </Box>
          </Grid>
        </Grid>
        
        {/* Bottom Copyright Bar */}
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mt: 8, mb: 4 }} />
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} AETIBAR Digital Agency. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}><Typography variant="body2" sx={{ '&:hover': { color: 'white' } }}>Privacy Policy</Typography></Link>
            <Link href="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}><Typography variant="body2" sx={{ '&:hover': { color: 'white' } }}>Terms of Service</Typography></Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
