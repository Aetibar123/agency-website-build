"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function TeamSection() {
  const team = [
    { name: "Hasrat", role: "Chief Executive Officer", image: "/images/about/team_ceo.png" },
    { name: "Rakhi", role: "Head of Engineering", image: "/images/about/team_engineering.png" },
    { name: "Aaqib DM", role: "Lead AI Architect", image: "/images/about/team_ai.png" },
    { name: "Rohit", role: "Creative Director", image: "/images/about/team_creative.png" },
  ];

  return (
    <Box sx={{ py: { xs: 15, md: 20 }, bgcolor: '#fcfcfc' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 12 }}>
          <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 2 }}>
            Leadership
          </Typography>
          <Typography variant="h2" sx={{ color: '#0B0F19', mb: 3, fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: '-0.02em' }}>
            Meet the Minds Behind the Magic
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: 600, mx: 'auto', fontSize: '1.25rem' }}>
            Our team consists of industry veterans, prodigious engineers, and visionary designers united by a single goal.
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
                  {/* Social Icons Overlay */}
                  <Box 
                    className="social-icons"
                    sx={{
                      position: 'absolute',
                      bottom: 0, left: 0, right: 0,
                      p: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 1,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                      opacity: 0,
                      transform: 'translateY(20px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'primary.main' } }}>
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'primary.main' } }}>
                      <TwitterIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                
                <CardContent sx={{ p: 0, pb: '0 !important', textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19', mb: 0.5 }}>
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
