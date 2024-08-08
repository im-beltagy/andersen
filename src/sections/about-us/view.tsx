import HeroFull from '@/components/hero-full';
import { Box } from '@mui/material';
import React from 'react';
import ItServices from './it-services';
import TeamWork from './team-work';

function View():React.JSX.Element {
  return (
    <Box>
        <HeroFull />
        <ItServices />
        <TeamWork />
    </Box>
  )
}

export default View;
