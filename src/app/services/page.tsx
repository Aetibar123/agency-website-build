"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Divider } from "@mui/material";
import Link from "next/link";
import { getAllServices } from "../../data/detailedServices";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ServicesHubPage() {
  const services = getAllServices();

  return (
    <Box sx={{ bgcolor: '#fcfcfc', minHeight: '100vh', pb: 15 }}>
      {/* AIRY PREMIUM HERO SECTION */}
      <Box sx={{ pt: { xs: 15, md: 22 }, pb: { xs: 10, md: 15 }, px: 3, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Soft elegant background glows */}
        <Box sx={{ position: 'absolute', top: -100, left: '30%', width: 600, height: 600, bgcolor: 'rgba(110,65,226,0.03)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0 }} />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'inline-block', px: 3, py: 1, border: '1px solid rgba(110,65,226,0.15)', borderRadius: 10, mb: 4, bgcolor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)' }}>
            <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
              OUR DOMAINS OF EXPERTISE
            </Typography>
          </Box>
          <Typography variant="h1" sx={{ color: '#0B0F19', mb: 4, fontSize: { xs: '3.5rem', md: '5.5rem' }, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Elevate Your <br />
            <Box component="span" sx={{ color: 'primary.main', display: 'inline-block', position: 'relative' }}>
              Digital Presence
              <Box sx={{ position: 'absolute', bottom: 10, left: 0, width: '100%', height: 16, bgcolor: 'primary.main', opacity: 0.1, transform: 'skewX(-15deg)' }} />
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', fontSize: '1.35rem', lineHeight: 1.8, maxWidth: 800, mx: 'auto' }}>
            From bleeding-edge AI automation to cinematic visual storytelling, our specialized departments work in absolute synergy to scale your brand's authority.
          </Typography>
        </Container>
      </Box>

      {/* CLEAN MINIMALIST GRID */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index}>
              <Card 
                component={Link}
                href={`/services/${service.slug}`}
                sx={{ 
                  height: '100%',
                  textDecoration: 'none',
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 4,
                  bgcolor: 'white',
                  border: '1px solid rgba(0,0,0,0.03)',
                  boxShadow: '0 20px 40px -20px rgba(0,0,0,0.05)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 30px 60px -20px rgba(110,65,226,0.15)',
                    '& .service-image': {
                      transform: 'scale(1.05)'
                    },
                    '& .arrow-icon': {
                      transform: 'translateX(5px)',
                      color: 'primary.main'
                    }
                  }
                }}
              >
                {/* Premium Image Top Header */}
                <Box sx={{ overflow: 'hidden', height: 240, position: 'relative' }}>
                  <CardMedia
                    className="service-image"
                    component="img"
                    image={`/images/services/${service.slug}.png`}
                    alt={service.title}
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                  {/* Subtle gradient overlay to soften the image transition */}
                  <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '40%', background: 'linear-gradient(to top, white, transparent)' }} />
                </Box>
                
                {/* Clean Content Area */}
                <CardContent sx={{ p: 4, pt: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1.5 }}>
                    <Box sx={{ color: 'primary.main', display: 'flex' }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19' }}>
                      {service.title}
                    </Typography>
                  </Box>
                  
                  <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7, mb: 4, flexGrow: 1 }}>
                    {service.description.length > 130 ? service.description.substring(0, 130) + "..." : service.description}
                  </Typography>

                  <Divider sx={{ mb: 3, borderColor: 'rgba(0,0,0,0.05)' }} />

                  {/* Elegant Learn More CTA */}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#888' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, fontSize: '0.75rem' }}>
                      Explore Service
                    </Typography>
                    <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 14, transition: 'all 0.3s ease' }} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
