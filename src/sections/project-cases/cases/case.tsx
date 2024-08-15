"use client";

import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Case = () => {
  const items = {length:20};
  const router = useRouter();
  return (
    
      Array?.from(items, (_,index)=> (

        <Box key={index} sx={{ direction:index % 2 === 0 ? 'rtl': 'ltr', mx: "auto", my: 20 }}>
          <Box
            sx={{ display: "flex", mx: { xs: 4, md: 8 }, justifyContent: "center" }}
          >
            <Grid container columnGap={3} justifyContent="center">
              <Grid item xs={12} md={6} sx={{order:{xs:2,md:1},border:1,borderColor:'#ddd', minHeight: 300, bgcolor: "#F8F8F8" }}>
                <Box>
                  <Grid container justifyContent="start">
                    <Grid item xs={3} sx={{ textAlign: "center", ml: "auto" }}>
                      <Typography sx={{ bgcolor: "#b0f13c", px: 1, py: 0.5 }}>
                        Fintech
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{mb:9, py: 2, px: 4 }}>
                        <Image
                          objectFit="cover"
                          sizes="100%"
                          width="200"
                          height="100"
                          alt="Clutch top information technology companies"
                          src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/c2171a5a36ef99d621b79775abe9acd6.portfolio-log-bharatpay.svg"
                        />
                        <Typography variant="h5" fontWeight="bold">
                          {`"Leading Fintech Solution in India"`}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                          {`A revolutionary fintech app empowering merchants with QR-based payments, business loans, and digital bookkeeping. It aims to simplify financial management for small businesses across the country.`}
                        </Typography>
                        <Box sx={{ flexWrap:'wrap',gap:2, display: "flex", my:2 , alignItems:'center'}}>
                          <Typography variant="h6">Available on</Typography>
                          <Image
                            objectFit="cover"
                            sizes="100%"
                            width="100"
                            height="50"
                            alt="Clutch top information technology companies"
                            src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/b6c8582d22b0931adebab631f350cece.apple-store.svg"
                          />
                          <Image
                            objectFit="cover"
                            sizes="100%"
                            width="100"
                            height="50"
                            alt="Clutch top information technology companies"
                            src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/source/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/7b7fef4813775657e82e44a30e3573a4.play-store.svg"
                          />
                        </Box>
                        <Box sx={{ flexWrap:'wrap',gap:5, display: "flex", my:2 , alignItems:'center'}}>
                            <Box>
                                <Typography variant="h4" fontWeight="bold">
                                   10M+
                                </Typography>
                                <Typography variant="body2">
                                Downloads
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4" fontWeight="bold">
                                4.7/5
                                </Typography>
                                <Typography variant="body2">
                                Avg. Rating
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4" fontWeight="bold">
                                $100M+
                                </Typography>
                                <Typography variant="body2">
                                Funding Raised
                                </Typography>
                            </Box>
                         
                        </Box>
                        <Button onClick={()=> router.push('/project-cases/internal-management-system-for-tourism')}  variant="contained" sx={{fontWeight:"bold",color:"#000",transition:"0.3s",bgcolor:'#b0f13c',':hover':{bgcolor:'#23C761'},py:1,px:{xs:2, md:4}}}>
                        Download Case Study
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4.5} sx={{order:{xs:1,md:2}, background:'linear-gradient(145deg, rgba(92,210,223,1) 0%, rgba(75,154,209,1) 100%)',}}>
                <Box sx={{width:'100%',height:'100%',backgourndSize:"auto auto",backgroundImage:`url('https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/09/9aceea39b7236ecc9721eaeab27e93aa.portfolio-app-bharatpay-bg.webp')`}}>
                <img
                style={{margin:'20px auto',maxWidth:'100%',maxHeight:'530px', height:'auto'}}
                        
                          alt="Clutch top information technology companies"
                          src="/assets/images/cases/phone1.png"
                        />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ))
    
  );
};

export default Case;