"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About Us', path: '/about' },
  { name: 'Journal', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'FAQ', path: '/faq' }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0} 
        sx={{ 
          top: { xs: 10, md: 20 },
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: '95%', md: '85%', lg: 1100 },
          bgcolor: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 10,
          boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
          zIndex: 1100
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 70, px: { xs: 1, md: 2 } }}>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              href="/"
              sx={{
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: '#0B0F19',
                textDecoration: 'none',
              }}
            >
              AETIBAR<Box component="span" sx={{ color: 'primary.main' }}>.</Box>
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Typography
                  key={item.name}
                  component={Link}
                  href={item.path}
                  sx={{
                    color: '#444',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                    cursor: 'pointer',
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button 
                component={Link}
                href="/contact"
                variant="contained" 
                color="primary" 
                sx={{ 
                  borderRadius: 8, 
                  px: 3, 
                  py: 1, 
                  fontWeight: 700, 
                  textTransform: 'none',
                  boxShadow: '0 8px 20px rgba(110,65,226,0.25)',
                  '&:hover': {
                    boxShadow: '0 12px 25px rgba(110,65,226,0.35)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>

            <IconButton 
              sx={{ display: { md: 'none' }, color: '#0B0F19' }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { 
            width: 240, // Even smaller width
            bgcolor: 'rgba(255, 255, 255, 0.95)', // Light theme
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(0,0,0,0.05)',
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            p: 2.5,
            boxShadow: '-10px 0 40px rgba(0,0,0,0.05)'
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#0B0F19', letterSpacing: 1 }}>
            MENU
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#0B0F19', bgcolor: 'rgba(0,0,0,0.03)', '&:hover': { bgcolor: 'rgba(0,0,0,0.06)' } }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {navItems.map((item) => (
            <ListItem 
              key={item.name} 
              component={Link} 
              href={item.path}
              onClick={handleDrawerToggle}
              sx={{ 
                color: '#444', 
                textDecoration: 'none',
                borderRadius: 2,
                px: 2,
                py: 1,
                transition: 'all 0.2s ease',
                '&:hover': { bgcolor: 'rgba(110,65,226,0.08)', color: 'primary.main', transform: 'translateX(4px)' }
              }}
            >
              <ListItemText 
                primary={
                  <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>
                    {item.name}
                  </Typography>
                } 
              />
            </ListItem>
          ))}
          <ListItem 
            component={Link} 
            href="/contact"
            onClick={handleDrawerToggle}
            sx={{ mt: 2, px: 1 }}
          >
            <Button 
              fullWidth 
              variant="contained" 
              color="primary" 
              sx={{ 
                borderRadius: 6, 
                fontWeight: 700, 
                py: 1.2,
                boxShadow: '0 4px 15px rgba(110,65,226,0.2)',
                '&:hover': { boxShadow: '0 6px 20px rgba(110,65,226,0.3)' }
              }}
            >
              Contact Us
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
