"use client";

import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import React from 'react';
import { Avatar, Box, Button, Container, Divider, Drawer, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Paper, Typography } from '@mui/material';
import Iconify from '../iconify/iconify';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
  window?: () => Window;

};

const customTheme = createTheme({
 
  typography:{
    fontWeightRegular:500,
  },
  palette: {
    primary: {
      main: '#ffdb00',
    },
  },
});
export default function Footer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navItems = ['Tech Stack', 'Industries', 'Services', 'Company', 'Case studies'];
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const theme = useTheme();


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={customTheme}>
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ color: '#fff', bgcolor: "#020D1C", position: 'relative', top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ py: 11, display: 'flex', flexDirection: 'column' }}>
          <Grid container justifyContent="center" >

            <Grid container spacing={{ sm: 1.5, md: 3 }} sx={{ flexWrap: 'nowrap' }} justifyContent={{ xs: 'start', md: 'center' }}>
              <Grid item md={2} flexDirection="column" spacing={{ sm: 1, md: 2 }}  >
                <Typography fontWeight="regular" component="div" sx={{ fontSize: { xs: 18, md: 22 } }}>
                  Tech Stack
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Back-end
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Front-end
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Android
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  iOS
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Java
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  PHP
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  React
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Python
                </Typography>
              </Grid>
              <Grid item md={2} flexDirection="column" spacing={{ sm: 1, md: 2 }}  >
                <Typography fontWeight="regular" component="div" sx={{ fontSize: { xs: 18, md: 22 } }}>
                  Industries
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Healthcare
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Logistics
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Travel & Hospitality
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Automotive
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Media & Entertainment
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Telecom
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Manufacturing
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Real Estate
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  iGaming
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Retail
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Nonprofit
                </Typography>
              </Grid>
              <Grid item md={2} flexDirection="column" spacing={{ sm: 1, md: 2 }}  >
                <Typography fontWeight="regular" component="div" sx={{ fontSize: { xs: 18, md: 22 } }}>
                  Services
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Mobile Development
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Web Development
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Quality Assurance
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Staff Augmentation
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Managed Delivery
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Dedicated Team
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  UI/UX Design
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  DevOps Services
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Business Analysis
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Solution Architecture
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  IoT Development Services
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Startups & MVP Services
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  SaaS
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Database
                </Typography>
              </Grid>
              <Grid item md={2} flexDirection="column" spacing={{ sm: 1, md: 2 }}  >
                <Typography fontWeight="regular" component="div" sx={{ fontSize: { xs: 18, md: 22 } }}>
                  Projects
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Verivox
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Management Events
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  G Bank
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  TUI
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Exigo
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  FTI </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Universkin
                </Typography>

              </Grid>
              <Grid item md={2} flexDirection="column" spacing={{ sm: 1, md: 2 }}  >
                <Typography fontWeight="regular" component="div" sx={{ fontSize: { xs: 18, md: 22 } }}>
                  Company
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  About us
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Insights
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  Testimonials
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  GTC
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  GTC for Consultancy services
                </Typography>
                <Typography fontWeight="regular" sx={{ my: 3, fontSize: { sm: 13, md: 15 } }}>
                  GTC for Consultancy services of UAB «Andersen Soft»
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={10} sx={{ display: { xs: 'none', md: 'block' } }}>

              <Divider sx={{ borderTop: 0.1, borderRadius: 20 }} color="grey" orientation="vertical" variant="middle" flexItem />
            </Grid>
          </Grid>
          <Divider sx={{ display: { xs: 'block', md: 'none' }, borderTop: 0.1, borderRadius: 20 }} color="grey" orientation="vertical" variant="middle" flexItem />
        </Toolbar>
        <Toolbar sx={{ mb: 11, display: 'flex', flexDirection: 'column' }}>
          <Container  >

            <Box sx={{ width: '100%' }}>

              <Typography fontWeight="regular" component="div" sx={{ fontSize: { xs: 18, md: 22 } }}>
                Our offices
              </Typography>
            </Box>

            <Grid container spacing={{ sm: 1.5, md: 3 }} justifyContent="center" alignItems="center">
              <Grid item xs={6} md={3} flexDirection="column" spacing={{ sm: 1, md: 2 }}  >

                <Typography fontWeight="regular" sx={{ my: 5, fontSize: { sm: 13, md: 15 } }}>
                  Dubai
                </Typography>
                <Typography fontWeight="regular" sx={{ fontSize: { sm: 13, md: 15 } }}>
                  The One Tower, Sheik Zayed Road, 23rd floor, Dubai, UAE
                </Typography>
                <Typography fontWeight="regular" sx={{ unicodeBidi: 'embed', direction: 'ltr', my: 2, fontSize: { sm: 13, md: 15 } }}>
                  +48 22 390 64 08
                </Typography>
              </Grid>
              <Grid item xs={6} md={3} flexDirection="column" spacing={{ sm: 1, md: 2 }}  >
                <Box sx={{ display: 'flex', }}>
                  <Divider sx={{ my: 5, borderRight: 0.1, borderRadius: 20 }} color="grey" orientation="vertical" variant="middle" flexItem />
                  <Box sx={{ px: 2 }}>
                    <Typography fontWeight="regular" sx={{ my: 5, fontSize: { sm: 13, md: 15 } }}>
                      Munich
                    </Typography>
                    <Typography fontWeight="regular" sx={{ fontSize: { sm: 13, md: 15 } }}>
                      Rosa-Bavarese-Straße 3, 80639 Munich, Germany
                    </Typography>
                    <Typography fontWeight="regular" sx={{ unicodeBidi: 'embed', direction: 'ltr', my: 2, fontSize: { sm: 13, md: 15 } }}>
                      +49 22 198 253 169
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} md={3} flexDirection="column" spacing={{ sm: 1, md: 2 }}  >
                <Box sx={{ display: 'flex' }}>
                  <Divider sx={{ my: 5, borderRight: 0.1, borderRadius: 20 }} color="grey" orientation="vertical" variant="middle" flexItem />
                  <Box sx={{ px: 2 }}>
                    <Typography fontWeight="regular" sx={{ my: 5, fontSize: { sm: 13, md: 15 } }}>
                      Warsaw
                    </Typography>
                    <Typography fontWeight="regular" sx={{ fontSize: { sm: 13, md: 15 } }}>
                      Rondo Daszyńskiego 1, 23 floor, Warsaw, 00-843, Poland
                    </Typography>
                    <Typography fontWeight="regular" sx={{ unicodeBidi: 'embed', direction: 'ltr', my: 2, fontSize: { sm: 13, md: 15 } }}>
                      +48 22 390 64 08
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} md={3} flexDirection="column" spacing={{ sm: 1, md: 2 }}  >
                <Box sx={{ display: 'flex' }}>
                  <Divider sx={{ my: 5, borderRight: 0.1, borderRadius: 20 }} color="grey" orientation="vertical" variant="middle" flexItem />
                  <Box sx={{ px: 2 }}>
                    <Typography fontWeight="regular" sx={{ my: 5, fontSize: { sm: 13, md: 15 } }}>
                      London
                    </Typography>
                    <Typography fontWeight="regular" sx={{ fontSize: { sm: 13, md: 15 } }}>
                      {`30 St Mary's Axe, London, EC3A 8BF, UK`}
                    </Typography>
                    <Typography fontWeight="regular" sx={{ unicodeBidi: 'embed', direction: 'ltr', my: 2, fontSize: { sm: 13, md: 15 } }}>
                      +44 207 048 6755
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ mb: 7, width: '100%', textAlign: 'right', display: 'flex', justifyContent: 'end', alignItems: "center" }}>
              <Box sx={{
                ":hover": {
                  color: (theme) => theme.palette.primary.main
                }, display: 'flex', justifyContent: 'end', alignItems: "center", cursor: 'pointer'
              }}>

                <Typography fontWeight="regular" component="div" sx={{
                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                    borderColor: (theme) => theme.palette.primary.main
                  },
                  mx: 1, borderBottom: 1, borderColor: '#fff', fontSize: { sm: 13, md: 15 }
                }}>
                  See more
                </Typography>
                <Typography>
                  →
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ borderTop: 0.1, borderRadius: 20 }} color="grey" orientation="vertical" variant="middle" flexItem />
            <Box sx={{ width: '100%' }}>

              <Typography fontWeight="regular" component="div" sx={{ my: 3, fontSize: { xs: 18, md: 22 } }}>
                Contact us
              </Typography>
              <Grid container spacing={1} justifyContent="start">
                <Grid item xs={6} md={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Iconify width={30} height={30} icon="gridicons:phone" sx={{ color: (theme) => theme.palette.primary.main }} />
                    <Typography fontWeight="regular" component="div" sx={{
                      my: 3,
                      unicodeBidi: 'embed', direction: 'ltr',
                      color: '#fff',
                      ml: 1,
                      fontSize: {
                        xs: 13,
                        md: 15
                      }
                    }}>
                      +48 22 390 64 08
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Iconify width={30} height={30} icon="mingcute:mail-line" sx={{ color: (theme) => theme.palette.primary.main }} />
                    <Typography fontWeight="regular" component="div" sx={{
                      my: 3,
                      unicodeBidi: 'embed', direction: 'ltr',
                      color: '#fff',
                      ml: 1,
                      fontSize: {
                        xs: 13,
                        md: 15
                      }
                    }}>
                      vn@andersenlab.com
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Toolbar>

        <Toolbar sx={{ bgcolor: "#020303", display: 'flex', flexDirection: 'column' }}>
          <Container  >
            <Grid container spacing={1} sx={{ my: 1 }} alignItems="center" justifyContent="space-between">
              <Grid item xs={12} md={6}  >
                <Box sx={{ display: 'flex', alignItems: "center", whiteSpace:'nowrap' }}>

                  <Typography sx={{ my: 0.5, fontSize: 12, }} color="#ccc">
                    ©2024 Andersen Inc. All Rights Reserved.
                  </Typography>
                  <Typography fontWeight="bold" sx={{
                    mx: 0.3, my: 0.5, fontSize: 12, borderBottom: 1,
                    cursor: "pointer", ":hover": {
                      color: (theme) => theme.palette.primary.main
                    }
                  }} color="white" >
                    Privacy Policy
                  </Typography>
                  <Typography sx={{ my: 0.5, fontSize: 12 }} color="#ccc">
                    &
                  </Typography>
                  <Typography fontWeight="bold" sx={{
                    mx: 0.3, my: 0.5, fontSize: 12, borderBottom: 1,
                    cursor: "pointer", ":hover": {
                      color: (theme) => theme.palette.primary.main
                    }
                  }} color="white" >
                    Cookies Policy.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: "center",whiteSpace:'nowrap'  }}>
                  <Typography sx={{ my: 0.5, fontSize: 12 }} color="#ccc">
                    This site is protected by reCAPTCHA and the Google
                  </Typography>
                  <Typography fontWeight="bold" sx={{
                    mx: 0.3, my: 0.5, fontSize: 12, borderBottom: 1,
                    cursor: "pointer", ":hover": {
                      color: (theme) => theme.palette.primary.main
                    }
                  }} color="white" >
                    Privacy Policy
                  </Typography>
                  <Typography sx={{ my: 0.5, fontSize: 12 }} color="#ccc">
                    and
                  </Typography>
                  <Typography fontWeight="bold" sx={{
                    mx: 0.3, my: 0.5, fontSize: 12, borderBottom: 1,
                    cursor: "pointer", ":hover": {
                      color: (theme) => theme.palette.primary.main
                    }
                  }} color="white" >
                    Terms of Service apply.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}  >
                <Box sx={{ display: 'flex',justifyContent:"flex-end" ,alignItems: "center",}}>

                <Box sx={{ display: 'flex',alignItems: "center", gap:2 }}>
                    <Box component="span">
                    <Iconify icon="bi:facebook" sx={{":hover":{
                      color: (theme) => theme.palette.primary.main
                    },width:25,height:25}}  />
                    </Box>
                    <Box component="span">
                    <Iconify icon="icomoon-free:xing" sx={{":hover":{
                      color: (theme) => theme.palette.primary.main
                    },width:25,height:25}}  />
                    </Box>
                    <Box component="span">
                    <Iconify icon="uiw:linkedin"  sx={{":hover":{
                      color: (theme) => theme.palette.primary.main
                    },width:25,height:25}}  />
                    </Box>
                    <Box component="span">
                    <Iconify icon="bi:twitter-x"  sx={{":hover":{
                      color: (theme) => theme.palette.primary.main
                    },width:25,height:25}}  />
                    </Box>
                    <Box component="span">
                    <Iconify  icon="uil:instagram-alt" sx={{":hover":{
                      color: (theme) => theme.palette.primary.main
                    },width:25,height:25}}  />
                    </Box>
                    <Box component="span">
                    <Iconify  icon="tabler:brand-behance" sx={{":hover":{
                      color: (theme) => theme.palette.primary.main
                    },width:25,height:25}}  />
                    </Box>
                    <Box component="span">
                    <Iconify icon="ri:dribbble-fill" sx={{":hover":{
                      color: (theme) => theme.palette.primary.main
                    },width:25,height:25}}  />
                    </Box>


                </Box>
                </Box>

              </Grid>

            </Grid>

          </Container>
        </Toolbar>
      </AppBar>
    </Box>
      </ThemeProvider>
  );
}
