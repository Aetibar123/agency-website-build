"use client";
import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, Divider } from "@mui/material";
import { ServiceDetail } from "../../../data/detailedServices";
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';

export default function VideoEditingPage({ service }: { service: ServiceDetail }) {
  return (
    <Box sx={{ bgcolor: '#fafafa', color: '#111', minHeight: '100vh', pt: { xs: 12, md: 16 } }}>
      <Container maxWidth="xl">
        
        {/* HERO SECTION - EDITORIAL LIGHT THEME */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, p: 1, px: 3, bgcolor: 'rgba(110,65,226,0.08)', borderRadius: 10, mb: 4 }}>
            <PlayCircleOutlinedIcon sx={{ color: 'primary.main' }} />
            <Typography variant="subtitle2" sx={{ color: 'primary.main', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700 }}>
             Creative Production
            </Typography>
          </Box>
          <Typography variant="h1" sx={{ color: 'secondary.main', fontSize: { xs: '3.5rem', md: '5.5rem' }, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, mb: 3 }}>
            {service.title.split(' ')[0]} <br/> 
            <Box component="span" sx={{ color: 'primary.main', fontStyle: 'italic' }}>
              {service.title.split(' ').slice(1).join(' ')}
            </Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.35rem', maxWidth: 800, mx: 'auto', lineHeight: 1.8 }}>
            {service.description}
          </Typography>
        </Box>

        {/* FIXED IMAGE POSITIONING - LARGE CINEMATIC POSTER */}
        <Box 
          sx={{ 
            width: '100%', 
            height: { xs: 400, md: 700 }, 
            borderRadius: 8, 
            overflow: 'hidden',
            mb: { xs: 10, md: 15 },
            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
          }}
        >
          <img 
            src="/images/services/video-editing.png" 
            alt="Video Editing Suite" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        <Grid container spacing={10}>
          {/* MAIN CONTENT - 600 WORDS */}
          <Grid size={{ xs: 12, md: 7, lg: 8 }}>
            {service.detailedContent?.map((content, idx) => (
              <Box key={idx} sx={{ mb: 8 }}>
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, color: 'secondary.main' }}>
                  {content.heading}
                </Typography>
                {content.paragraphs.map((p, pIdx) => (
                  <Typography key={pIdx} variant="body1" sx={{ color: 'text.secondary', fontSize: '1.15rem', lineHeight: 2, mb: 3 }}>
                    {p}
                  </Typography>
                ))}
              </Box>
            ))}
          </Grid>

          {/* RIGHT SIDEBAR - FEATURES & DOMAINS */}
          <Grid size={{ xs: 12, md: 5, lg: 4 }}>
            <Box sx={{ position: 'sticky', top: 120 }}>
              
              <Card sx={{ bgcolor: 'white', borderRadius: 4, p: 4, mb: 6, boxShadow: '0 10px 40px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, color: 'secondary.main' }}>
                  Methodology
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {service.features.map((feature, idx) => (
                    <Box key={idx}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {feature.desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Card>

              <Card sx={{ bgcolor: '#0B0F19', color: 'white', borderRadius: 4, p: 4, boxShadow: '0 20px 40px rgba(110,65,226,0.15)' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>
                  Toolkit & Software
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {service.technologies.map((tech, idx) => (
                    <Box key={idx} sx={{ px: 2, py: 1, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 1, border: '1px solid rgba(255,255,255,0.05)' }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{tech}</Typography>
                    </Box>
                  ))}
                </Box>
                
                <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
                
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3 }}>
                  Industries Served
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {service.domains.map((domain, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                       <Box sx={{ w: 8, h: 8, borderRadius: '50%', bgcolor: 'primary.main' }} />
                       <Typography variant="body2" sx={{ fontWeight: 500 }}>{domain.name}</Typography>
                    </Box>
                  ))}
                </Box>
              </Card>

            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ height: 100 }} />
    </Box>
  );
}
