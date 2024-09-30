"use client"


import { Box } from '@mui/material';
import React from 'react';
import HeroFull from '@/sections/contact-us/hero/hero-full';

function View():React.JSX.Element {
  return (
    <Box sx={{backgroundColor:"#040d26"}}>
      <HeroFull/>
    </Box>
  )
}

export default View;
