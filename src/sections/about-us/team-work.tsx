"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import TabPanel from "@/components/tabs/tab-panel";
import Iconify from "@/components/iconify";

const customTheme = createTheme({
  typography: {
    fontFamily: "Roboto, Segoe UI, Helvetica Neue, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#ffdb00",
    },
  },
});

function TeamWork(): React.JSX.Element {
  const theme = useTheme();

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          width: "100%",
          height: { xs: 500, sm:700, md: 1100, background: "#020d1c" , position:'relative'},
        }}
      >
        <Container sx={{ my: 2 }}>
          <Grid container spacing={1} justifyContent="center" gap={5}>
            <Grid item xs={12} sx={{ mt: {md:9,xs:3} }}>
              <Typography
                fontWeight="bold"
                sx={{ color: "#fff", fontSize: { xs: 18, sm: 25, md: 60 } }}
              >
                Andersen's team at work and leisure
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box >
                <Grid container rowSpacing={3} columnSpacing={3}>
                  <Grid item xs={5} md={5}>
                      <img
                        srcSet={`/assets/images/about-us/team5.jpeg`}
                        src={`/assets/images/about-us/team5.jpeg`}
                        alt={'work team'}
                        style={{height:'100%'}}
                        loading="lazy"
                      />
                  </Grid>
                  <Grid item xs={7} md={7}>
                     
                 <Grid  container rowSpacing={3} columnSpacing={3}>
                  <Grid item xs={6} >
                  <img
                        srcSet={`/assets/images/about-us/team1.jpeg`}
                        src={`/assets/images/about-us/team1.jpeg`}
                        alt={'work team'}
                        loading="lazy"
                        style={{height:'100%'}}
                      />
                  </Grid>
                  <Grid item xs={6} >
                  <img
                        srcSet={`/assets/images/about-us/team4.jpeg`}
                        src={`/assets/images/about-us/team4.jpeg`}
                        alt={'work team'}
                       loading="lazy"
                       style={{height:'100%'}}
                      />
                    </Grid>
                    <Grid item xs={7} >
                  <img
                        srcSet={`/assets/images/about-us/team2.jpeg`}
                        src={`/assets/images/about-us/team2.jpeg`}
                        alt={'work team'}
                       loading="lazy"
                       style={{height:'100%'}}
                      />
                    </Grid>
                    <Grid item xs={5} >
                  <img
                        srcSet={`/assets/images/about-us/team3.jpeg`}
                        src={`/assets/images/about-us/team3.jpeg`}
                        alt={'work team'}
                        style={{height:'100%'}}
                       loading="lazy"
                      />
                    </Grid>
                  </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} >
               
        <Box sx={{justifyContent:"end", display:"flex"}}>

            <Box sx={{
                
                ":hover": {
                  color: (theme) => theme.palette.primary.main
                }, display: 'flex', justifyContent: 'end', alignItems: "center", cursor: 'pointer'
              }}>

                <Typography fontWeight="regular" component="div" sx={{
                    color: '#fff',
                  "&:hover": {
                    color: (theme) => theme.palette.primary.main,
                    borderColor: (theme) => theme.palette.primary.main
                  },
                  mx: 1, borderBottom: 1, borderColor: '#fff', fontSize: { sm: 18, md: 22 }
                }}>
                  See more
                </Typography>
                {/* <Typography color="#fff">
                  →
                </Typography> */}
              </Box>
        </Box>
               
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default TeamWork;

/*  <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}&dpr=2 2x`}
        src={`${item.img}`}
        alt={item.title}
        loading="lazy"
      />
      <ImageListItemBar position="below" title={item.author} />
    </ImageListItem> */
