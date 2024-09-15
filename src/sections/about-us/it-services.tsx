"use client";

import { Box, Button, Container, Grid, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import TabPanel from '@/components/tabs/tab-panel';
import Iconify from '@/components/iconify';
import Link from "next/link";


const tabsHead = [
    'Maßgeschneiderte Softwareentwicklung',
    'Mobile Entwicklung',
    'Webentwicklung',
    'Verwaltete Bereitstellung',
    'UI/UX-Design-Services',
    'Personalaufstockung',
    'Dediziertes Team',
    'Lösungsarchitektur',
    'Projektmanagement',
    'Qualitätssicherungsdienste',
    'DevOps-Dienste',
    'Geschäftsanalyse',
    'Cloud-Entwicklung',
    'IT-Sicherheitsmanagement',
    'Datenwissenschaft',
    'Entdeckungsphase',
    'Anwendungswartung und -support',
];

const customTheme = createTheme({
        typography: {
            fontFamily: 'Roboto, Segoe UI, Helvetica Neue, Arial, sans-serif',
        },
    palette: {
      primary: {
        main: '#ffdb00',
      },
    },
  });
  
function ItServices():React.JSX.Element {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
    

   const a11yProps = (index: number) => {
        return {
           
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
        };
      };
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{width:'100%', height:{xs:400,sm:450,md:668}}}>
        <Container sx={{my:8}}>
        <Grid container spacing={1} justifyContent="center" gap={5}>
            <Grid item xs={12}>

            <Typography fontWeight="bold" sx={{fontSize:{xs:18, sm:25, md:60}}}>
                Webizi – Ihr Partner für umfassende IT-Lösungen!
            </Typography>
            </Grid>
            <Grid item xs={12}>

            <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height:{xs:150,sm:250,md:368} }}
        >
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1,
                
                minWidth: {md:400, xs:100,},
                       "& .MuiTab-root":{
                        ':hover':{
                            bgcolor: '#f6f7f8',
                        },
                       },
                '& .Mui-selected': {
                    bgcolor:'#ebebeb'
                  },
                 borderColor: 'divider' ,
         }}
        >
             {tabsHead.map((item, index)=> (

            <Tab key={item} label={<Typography   sx={{ 
                

                color: '#000000',
            fontWeight:"600",fontSize:{xs:14, md:18}}}>{item}</Typography>} {...a11yProps(index)} />
            ))}
        </Tabs>
       {tabsHead.map((item, index)=> (

        <TabPanel key={item} value={value} index={index} >
            <Box sx={{maxWidth: '100%',}}>
                <Typography fontWeight="semibold" sx={{fontSize:{xs:16, md:19}}}>
               {`Mit unserer breiten Expertise und tiefem Verständnis Ihrer Geschäftsziele bringt das Webizi-Team Ihre Ideen zum Leben – maßgeschneidert für jede Branche!`}
                </Typography>
                <Box sx={{bgcolor: '#fafafa', p:2, my:2, maxWidth: 500,}}>
                <Typography fontWeight="semibold" sx={{  fontSize:{xs:16, md:19}}}>
                    Mit Webizi zum Erfolg!:
                    </Typography>
                    <Typography fontWeight="semibold" sx={{display:'flex',alignItems:'center',gap:2,fontSize:{xs:16, md:19}}}>
                    <Iconify  icon="basil:check-outline" sx={{color:'green',width:13,height:13}}  />
                       Mobile, Web, und Cloud Entwicklung;
                    </Typography>
                    <Typography fontWeight="semibold" sx={{display:'flex',alignItems:'center',gap:2,fontSize:{xs:16, md:19}}}>
                    <Iconify  icon="basil:check-outline" sx={{color:'green',width:13,height:13}}  />
                    DevOps, QA, und Tech support services;
                    </Typography>
                    <Typography fontWeight="semibold" sx={{display:'flex',alignItems:'center',gap:2,fontSize:{xs:16, md:19}}}>
                    <Iconify  icon="basil:check-outline" sx={{color:'green',width:13,height:13}}  />
                    UI/UX Software Design.
                    </Typography>
                </Box>
                <Link href="/contact-us" passHref>
                <Button
                sx={{
                    borderRadius:0,
                    boxShadow:0,
                    transition:'0.3s',
                    border:0,
                    px:10,
                    py:2,
                    fontSize: 15,
                   fontWeight:'bold',
                    color:'#020303',
                    borderColor:(theme)=> theme.palette.primary.main,
                    ':hover':{
                      boxShadow:0,
                      bgcolor:(theme)=> theme.palette.primary.light,
                      borderColor:(theme)=> theme.palette.primary.light,
                    },
                  }} color="primary" variant="contained"  >
                 Mehr Erfahren
                  </Button>
                </Link>

            </Box>
        </TabPanel>
       ))}
       
        </Box>
            </Grid>
            
        </Grid>
      
        </Container>
  
      </Box>
   </ThemeProvider>
  )
}

export default ItServices;
