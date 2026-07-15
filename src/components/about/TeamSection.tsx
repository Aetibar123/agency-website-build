"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function TeamSection() {
  const team = [
    { name: "Hasrat", role: "Chief Executive Officer", image: "/images/about/person1.jpeg" },
    { name: "Amaan", role: "Head of Engineering", image: "/images/about/person2.jpeg" },
    { name: "Aaqib", role: "Lead AI Architect", image: "/images/about/person1.jpeg" },
    { name: "Rohit", role: "Creative Director", image: "/images/about/person1.jpeg" },
  ];

  return (
    <Box sx={{ py: { xs: 15, md: 20 }, bgcolor: '#fcfcfc' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 2 }}>
            Leadership
          </Typography>
          <Typography variant="h2" sx={{ color: '#0B0F19', mb: 3, fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
            Meet The Minds Behind Aetibar
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 600, mx: 'auto', fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9 }}>
          A team of engineers, designers, and technology enthusiasts working together to build impactful digital solutions. We combine technical expertise, creative thinking, and a passion for innovation to help businesses transform their ideas into scalable digital experiences.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {team.map((member, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Card 
                sx={{ 
                  height: '100%', 
                  border: 'none', 
                  boxShadow: 'none', 
                  bgcolor: 'transparent',
                  cursor: 'pointer',
                  '&:hover': {
                    '& .team-image': {
                      filter: 'grayscale(0%)',
                      transform: 'scale(1.05)'
                    },
                    '& .social-icons': {
                      opacity: 1,
                      transform: 'translateY(0)'
                    }
                  }
                }}
              >
                <Box 
                  sx={{ 
                    height: 350, 
                    borderRadius: 4, 
                    overflow: 'hidden',
                    mb: 3,
                    position: 'relative'
                  }}
                >
                  <CardMedia
                    className="team-image"
                    component="img"
                    image={member.image}
                    alt={member.name}
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(100%)',
                      transition: 'all 0.5s ease'
                    }}
                  />
                 
                </Box>
                
                <CardContent sx={{ p: 0, pb: '0 !important', textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19', mb: 0.5, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', fontSize: '0.75rem' }}>
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
