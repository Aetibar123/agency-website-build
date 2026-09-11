"use client";
import React, { useState, useEffect } from 'react';
import { IconButton, Box, Zoom } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export default function PortfolioBackButton() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Zoom in={visible}>
      <Box sx={{ position: 'fixed', top: { xs: 75, md: 95 }, left: { xs: 16, md: 36 }, zIndex: 999 }}>
        <IconButton 
          onClick={() => router.push('/portfolio')}
          aria-label="Back to Work"
          sx={{ 
            bgcolor: '#FAF9F5', 
            color: '#0E172A', 
            border: '1px solid rgba(17, 18, 21, 0.12)',
            boxShadow: '0 8px 24px rgba(17, 18, 21, 0.08)',
            '&:hover': { bgcolor: '#0E172A', color: '#FFFFFF' },
            width: 44,
            height: 44,
            transition: 'all 0.25s ease',
          }}
        >
          <ArrowBackIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>
    </Zoom>
  );
}
