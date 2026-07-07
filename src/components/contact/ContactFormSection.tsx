"use client";
import React from "react";
import { Box, Container, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactFormSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          {/* Contact Details */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h3" sx={{ color: '#0B0F19', mb: 4, fontWeight: 800, fontSize: { xs: '2rem', md: '2.5rem' }, letterSpacing: '-0.02em' }}>
              Direct Channels
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', mb: 6, fontSize: '1.1rem', lineHeight: 1.8 }}>
              Fill out the form and our team will get back to you within 24 hours. For immediate assistance, feel free to use our direct contact lines below.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{ p: 2, bgcolor: '#fcfcfc', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 3, display: 'flex', boxShadow: '0 10px 20px -10px rgba(0,0,0,0.05)' }}>
                  <EmailIcon color="primary" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0B0F19', mb: 0.5 }}>Email Us</Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>info@aetibar.com</Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>support@aetibar.com</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{ p: 2, bgcolor: '#fcfcfc', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 3, display: 'flex', boxShadow: '0 10px 20px -10px rgba(0,0,0,0.05)' }}>
                  <PhoneIcon color="primary" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0B0F19', mb: 0.5 }}>Call Us</Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>+91 123 456 7890</Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>Mon-Fri, 9am - 6pm (IST)</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box sx={{ p: 2, bgcolor: '#fcfcfc', border: '1px solid rgba(0,0,0,0.05)', borderRadius: 3, display: 'flex', boxShadow: '0 10px 20px -10px rgba(0,0,0,0.05)' }}>
                  <LocationOnIcon color="primary" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0B0F19', mb: 0.5 }}>Visit Us</Typography>
                  <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                    123 Innovation Drive, Tech Park<br/>
                    Udaipur, Rajasthan, India
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Premium Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, md: 8 }, 
                borderRadius: 6, 
                bgcolor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.03)',
                boxShadow: '0 30px 60px -20px rgba(0,0,0,0.08)' 
              }}
            >
              <Typography variant="h4" sx={{ color: '#0B0F19', mb: 5, fontWeight: 800, letterSpacing: '-0.02em' }}>
                Send us a message
              </Typography>
              <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Grid container spacing={4}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField 
                      fullWidth 
                      label="First Name" 
                      variant="standard" 

                      sx={{ '& .MuiInput-root': { py: 1 } }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField 
                      fullWidth 
                      label="Last Name" 
                      variant="standard" 
                      sx={{ '& .MuiInput-root': { py: 1 } }}
                    />
                  </Grid>
                </Grid>
                <TextField 
                  fullWidth 
                  label="Work Email" 
                  variant="standard" 
                  type="email" 
                  sx={{ '& .MuiInput-root': { py: 1 } }}
                />
                <TextField 
                  fullWidth 
                  label="Company (Optional)" 
                  variant="standard" 
                  sx={{ '& .MuiInput-root': { py: 1 } }}
                />
                <TextField 
                  fullWidth 
                  label="How can we help you?" 
                  variant="standard" 
                  multiline 
                  rows={4} 
                  sx={{ '& .MuiInput-root': { py: 1 } }}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  endIcon={<SendIcon />}
                  sx={{ 
                    mt: 3, 
                    py: 2, 
                    fontSize: '1.1rem', 
                    borderRadius: 3, 
                    textTransform: 'none', 
                    fontWeight: 700,
                    boxShadow: '0 10px 20px -10px rgba(110,65,226,0.5)'
                  }}
                >
                  Send Inquiry
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
