"use client";
import React from "react";
import { Box, Container, Typography, Card, Box as MuiBox } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function OpeningsSection() {
 
  return (
    <Box sx={{ py: { xs: 12, md: 15 }, bgcolor: '#fcfcfc' }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ color: '#0B0F19', mb: 6, fontWeight: 900, letterSpacing: '-0.02em', textAlign: 'center', fontSize: { xs: '2rem', md: '3rem' } }}>
          Open Positions
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
            sx={{ 
              p: { xs: 4, md: 6 }, 
              bgcolor: 'white',
              border: '1px solid rgba(0,0,0,0.03)',
              borderRadius: 6,
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
              textAlign: 'center',
              width: '100%',
              maxWidth: 600,
              transition: 'transform 0.4s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 30px 60px -10px rgba(110,65,226,0.15)',
              }
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#0B0F19', mb: 2, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              Don't see a perfect fit?
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', mb: 4, fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.9 }}>
          We are always searching for exceptional talent. If you are passionate about building impactful technology and believe you can contribute to Aetibar’s vision, we would love to connect. Send us your resume and portfolio to start the conversation.
            </Typography>
            
            <Box 
              sx={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 2, 
                p: 2, 
                px: 4,
                bgcolor: 'rgba(110,65,226,0.05)', 
                borderRadius: 10,
                border: '1px solid rgba(110,65,226,0.1)'
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 1, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                hr.aetibar@gmail.com
              </Typography>
            </Box>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
