"use client";

import styles from "./styles.module.css";
import {
  Box,
  Button,
  Grid,
  Rating,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Slider from "../../slider";
import { useRouter } from "next/navigation";

export default function HomeNews({ slidess }: any) {
  const md = useMediaQuery("(min-width:1190px)");
  const router = useRouter()
  const slides = slidess?.map((slide: any, index: number) => (
    <Grid
      key={index}
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: slide.bgColor,
        color: "#fff",
        padding: { xs: 2, sm: "0" },
        width: "100%",
        height: { xs: "60vh", lg: "90vh" },
        overflow: "hidden",
      }}
    >
      <Grid
        item
        xs={12}
        md={5}
        sx={{ textAlign: "left", padding: 2, height: md ? "350px" : "auto" }}
      >
        <Image
          src={slide.logo}
          alt={slide.title}
          style={{ height: md ? "46px" : "26px", width: "auto" }}
          width={1000}
          height={1000}
        />
          <Typography
              variant="h4" // Use a heading variant, e.g., "h4" for title styling
              sx={{
                  fontWeight: "bold", // You can add custom styles like bold if needed
                  fontSize: { xs: "1.2rem", md: "2rem" }, // Adjust font size based on screen size
                  marginY: { xs: ".6rem", md: "1.5rem" },
              }}
          >
              {slide.title}
          </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: { xs: ".7rem", md: "1rem" },
            marginY: { xs: ".6rem", md: "1.5rem" },
          }}
        >
          {slide.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: { xs: 2, md: 5 },
          }}
        >
          <Typography variant="body2" gutterBottom>
            Verfügbar im
          </Typography>
          <Image
            src={
              "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/04/5f9eb47f82d7eddf1cbe9e1b7f270fa9.play-store.webp"
            }
            alt={slide.title}
            style={{
              height: md ? "30px" : "20px",
              width: "auto",
              margin: "0 1rem ",
            }}
            width={1000}
            height={1000}
          />
          <Image
            src="https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/04/16f87c122b619f21a0f2f9d8e3c38e2a.app-store.webp"
            alt={slide.title}
            style={{ height: md ? "30px" : "20px", width: "auto" }}
            width={1000}
            height={1000}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginY: { xs: 1, md: 3 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
              {slide.rating}/5
            </Typography>
            <Typography sx={{ fontSize: "0.7rem" }}> Ratings</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginX: 5,
              flexDirection: "column",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
              10M+
            </Typography>
            <Typography sx={{ fontSize: "0.7rem" }}> Downloads</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="body2" sx={{ fontSize: "1.1rem" }}>
              $47M+
            </Typography>
            <Typography sx={{ fontSize: "0.7rem" }}> Funding Raised</Typography>
          </Box>
        </Box>


          <Button onClick={() => router.push(slide.buttonLink)}
          variant="contained"
          color="success"
          sx={{ marginTop: 1, fontSize: { xs: ".7rem", md: "1rem" } }}
        >
          {slide.buttonLabel}
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          justifyContent: { xs: "center", lg: "flex-end" },
          // marginLeft: 4,
        }}
      >
        <Image
          src={slide.image}
          alt={slide.title}
          style={{ height: "50%", width: "60%" }}
          width={1000}
          height={1000}
        />
      </Grid>
    </Grid>
  ));

  if (slides) return <Slider slides={slides} />;

  return "Loading...";
}
