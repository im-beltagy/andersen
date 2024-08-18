"use client";

import styles from "./styles.module.css";
import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "../../slider";

export default function HomeNews({slidess}: any) {

  const slides = slidess?.map((slide: any, index: number)=>(
    <Grid
    key={index}
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: slide.bgColor,
              color: "#fff",
              padding: 2,
              width: "100%",
              borderRadius: "10px",
height: { xs: "auto", lg:"80vh" },
            }}
          >
            <Grid item xs={12} lg={5} sx={{ textAlign: "left", padding: 2, height: "350px" }}>
              <Typography variant="h4" component="h2" gutterBottom>
                {slide.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {slide.description}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Available on --
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                <Rating value={slide.rating} readOnly precision={0.5} />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  {slide.rating}/5 Ratings
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                {slide.employeeUsage} Employee Usage
              </Typography>
              <Button variant="contained" color="success" sx={{ marginTop: 2 }}>
                {slide.buttonLabel}
              </Button>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ marginLeft: 4 }}>
              <Image
                src={slide.image}
                alt={slide.title}
                style={{ height: "50%" , width: "58%"}}
                width={1000}
                height={1000}
              />
            </Grid>
          </Grid>
  ))

  if (slides) return <Slider slides={slides} />;

  return "Loading...";
}
