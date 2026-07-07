"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: 4, 
        bgcolor: 'transparent', 
        zIndex: 9999 
      }}
    >
      <Box 
        sx={{ 
          height: '100%', 
          bgcolor: 'primary.main', 
          width: `${scrollProgress}%`,
          boxShadow: '0 0 10px rgba(110,65,226,0.8)',
          transition: 'width 0.1s ease-out'
        }} 
      />
    </Box>
  );
}
