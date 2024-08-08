"use client";

import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Grid, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Divider, Drawer, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Paper, Typography } from '@mui/material';
import Iconify from '../iconify/iconify';
import { useRouter } from 'next/navigation';
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
export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navItems = ['Tech Stack', 'Industries', 'Services', 'Company', 'Case studies'];
  const route = useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('md'));
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Box
        component="img"
        alt="auth"
        src={ '/logo/logo_single.svg'}
        sx={{
          my: 2 ,
          mx:"auto",
        display:'block',
        width: {xs:40,md:70},
        height: {xs:40,md:70},
        }}
        />

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
             <Typography variant="body1" fontWeight="light">
              {item}
             </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop  
 > 100); 
    };

    addEventListener('scroll', handleScroll);
    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);
  const container = window !== undefined ? () => window().document.body : undefined;
  const logo = sm ? '/assets/logo.svg': '/assets/small_logo.svg';
  return (
    <>
     <ThemeProvider theme={customTheme}>
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav"  sx={{bgcolor:'#fff'}}>
        <Toolbar sx={{display:'flex', justifyContent:"space-between", }}>
        <Box
        component="img"
        alt="auth"
        src={logo }
        sx={{
          cursor:'pointer',
        display:'block',
        width: {xs:40,md:150},
        height: {xs:40,md:70},
        }}
      />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ color:'black', mr: 2, display: { md: 'none' } }}
          >
          <Iconify icon="mdi:menu" />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems:'center', gap:{xs:0.5,lg:1}, }}>
            {navItems.map((item, index) => (
              <Box key={index} sx={{
                color:'black',
                ':hover':{
                 
                  cursor:'pointer',
                 '.iconify': {
                  transform: 'rotate(-180deg)'
                 },
                },

                display:'flex',
                alignItems:"center",
                flexDirection: 'row',
                flexWrap: 'nowrap',
                px:0.1,
                height: '100%',
                justifyContent:' flex-start',
               
                }}>
            <Typography
            sx={{
              position: 'relative',
              p:'28px 0',
              whiteSpace: 'nowrap',
              ":after":{
                bgcolor: '#ffdb00',
                bottom: 0,
                content: `" "`,
                height: '4px',
                left: 'auto',
                margin: '0',
                position: 'absolute',
                right: 0,
                
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform .15s ease-out',
                width: '100%'
              },
              ':hover':{
                ":after":{
                  transform: 'scaleX(1)',
                },
              },
            }}
             fontSize={{  xs: '14px', md: '16px'}} fontWeight="light">
            {item}
           </Typography>

            <Iconify  icon="mdi:chevron-down" sx={{
              transition:'transform 0.1s ease-out',
             width:15,
             height:15,
              mx:0.3,
              }} />

              </Box>
            ))}
            <Divider sx={{my:3.5, borderRight:0.1}} color="grey" orientation="vertical" variant="middle" flexItem />
             <Box sx={{
                color:'black',
                ':hover':{
                  color:'white',
                },
                display:'flex',
                alignItems:"center",
                height:'100%',
                mx:{sx:0,sm:1,md:2
                }}}>
                  <Button   sx={{
                    borderRadius:0,
                    boxShadow:0,
                   
                    border:0,
                    fontSize: '14px',
                   fontWeight:'bold',
                    color:'#020303',
                    borderColor:(theme)=> theme.palette.primary.main,
                    ':hover':{
                      boxShadow:0,
                      bgcolor:(theme)=> theme.palette.primary.light,
                      borderColor:(theme)=> theme.palette.primary.light,
                    },
                  }} color="primary" variant="contained"  >
                  Contact us
                  </Button>

              </Box>
          </Box>
           
        </Toolbar>
      
      </AppBar>
     {/*  <Box sx={{position:'fixed',top:{xs:50,sm:60,md:70},left:0, right:0,py:{xs:1.5,md:2.5},px:4, transition:'0.5s', width: '100%',bgcolor:'rgba(50,50,50,0.8)'}}>
          
          <Grid container>
          <Grid item sm={6} display="flex" flexDirection="row" gap={3}>
          <Typography onClick={()=>route.push('/about-us') } sx={{cursor:'pointer', ':hover':{color:(theme)=> theme.palette.primary.main}}}>
          Technologies
          </Typography>
          <Typography sx={{cursor:'pointer', ':hover':{color:(theme)=> theme.palette.primary.main}}}>
          Projects
          </Typography>
          <Typography sx={{cursor:'pointer', ':hover':{color:(theme)=> theme.palette.primary.main}}}>
          Testimonials
          </Typography>
          </Grid>
          </Grid>
        
        </Box> */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
       
    
    </Box>
     </ThemeProvider>
    </>
  );
}
