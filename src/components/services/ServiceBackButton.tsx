"use client";
import React from 'react';
import { IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';

export default function ServiceBackButton() {
  const router = useRouter();

  return (
    <Box sx={{ position: 'fixed', top: { xs: 80, md: 100 }, left: { xs: 16, md: 40 }, zIndex: 999 }}>
      <IconButton 
        onClick={() => router.push('/services')}
        aria-label="Back to Services"
        sx={{ 
          bgcolor: '#FAF9F5', 
          color: '#0E172A', 
          border: '1px solid rgba(17, 18, 21, 0.1)',
          boxShadow: '0 4px 16px rgba(17, 18, 21, 0.06)',
          '&:hover': { bgcolor: '#0E172A', color: '#FFFFFF' },
          width: 46,
          height: 46,
          transition: 'all 0.25s ease',
        }}
      >
        <ArrowBackIcon sx={{ fontSize: 20 }} />
      </IconButton>
    </Box>
  );
}
