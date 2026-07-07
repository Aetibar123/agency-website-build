import React from "react";
import ContactHeroSection from "../../components/contact/ContactHeroSection";
import { Box, Container, Typography, IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      
      {/* Contact Info Section */}
      <Box sx={{ 
        bgcolor: '#060913', // Slightly darker than footer for visual separation
        py: { xs: 8, md: 15 }, 
        textAlign: 'center', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(110,65,226,0.2)', // Purple separator line before footer
        position: 'relative'
      }}>
        {/* Subtle purple glow */}
        <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '30%', height: '5px', bgcolor: 'primary.main', filter: 'blur(20px)' }} />

        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ mb: 6 }}>
            <EmailIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mb: 1 }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 4 }}>
              Prefer direct email? Drop us a message anytime at:
            </Typography>
            <Typography 
              variant="h4" 
              component="a" 
              href="mailto:hello.aetibar@gmail.com"
              sx={{ 
                color: 'white', 
                fontWeight: 900, 
                textDecoration: 'none', 
                borderBottom: '2px solid',
                borderColor: 'primary.main',
                pb: 1,
                transition: 'all 0.3s',
                '&:hover': {
                  color: 'primary.light',
                  borderColor: 'primary.light'
                }
              }}
            >
              hello.aetibar@gmail.com
            </Typography>
          </Box>

          <Box sx={{ mt: 8 }}>
            <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.5)', mb: 3, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
              Follow our journey
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <IconButton href="https://x.com/Aetibar_" target="_blank" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', width: 50, height: 50, transition: 'all 0.3s', '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-5px)' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/aetibar-information-and-technologies-502531406" target="_blank" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', width: 50, height: 50, transition: 'all 0.3s', '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-5px)' } }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com/aetibar_information/" target="_blank" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', width: 50, height: 50, transition: 'all 0.3s', '&:hover': { bgcolor: 'primary.main', transform: 'translateY(-5px)' } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
