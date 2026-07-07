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
        sx={{ 
          bgcolor: 'white', 
          color: 'primary.main', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          '&:hover': { bgcolor: '#f0f0f0' },
          width: 50,
          height: 50
        }}
      >
        <ArrowBackIcon />
      </IconButton>
    </Box>
  );
}
