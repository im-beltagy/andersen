"use client";

import { Box, Container, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Image from 'next/image';


const customTheme = createTheme({
 
    palette: {
      primary: {
        main: '#ffdb00',
      },
    },
  });
function HeroFull():React.JSX.Element {
    const theme = useTheme();

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{width:'100%', height:{xs:300,sm:450,md:668}}}>
      <ImageListItem style={{height:"100%"}} >
          <Image
            src={`/assets/Frame 3.svg`}
            alt="hero"
            loading="lazy"
            sizes="(min-width: 3840px) 3840px, 100vw"
            style={{height:"100%", width:"100%"}}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            />
          <ImageListItemBar
          sx={{height:'100%', background:`linear-gradient(0deg, rgba(2,13,28,1) 0%, rgba(255,255,255,0) 100%)`}}
          title={  <Container>
            <Typography fontWeight="bold"  sx={{lineHeight:1.1,fontSize: {xs:35, sm:50, md:70, lg:100}}}>Lernen Sie Ihre   <br /> Softwareexperten kennen
             <Box component="span" sx={{mx:2,fontSize:30,color:(theme)=> theme.palette.primary.main}}>•</Box></Typography>
             </Container>}
          />
        </ImageListItem>
  
   </Box>
   </ThemeProvider>
  )
}

export default HeroFull;
