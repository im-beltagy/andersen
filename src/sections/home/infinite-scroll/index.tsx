"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Image from "next/image";

const InfiniteAutoplayCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 8,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const images = [
    "https://prestashop.com/wp-content/uploads/2023/03/Kway-1.png",
    "https://prestashop.com/wp-content/uploads/2023/03/Push_listing_offre_Finsbury_240-1.png",
    "https://prestashop.com/wp-content/uploads/2023/03/Push_listing_offre_Pylones_240_NB-1-e1679901855972.png",
    "https://prestashop.com/wp-content/uploads/2023/03/Push_dealy_460_Noir-1.svg",
    "https://prestashop.com/wp-content/uploads/2023/04/LOGO_HUYGENS.svg",
  ];
  return (
    <Box sx={{ height: "30vh", width: "100%", backgroundColor: "#fff",paddingY: "20px" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: "100px",
              backgroundColor: "#eee",
              width: "70px",
              marginX: "500px",
              padding: "20px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={image}
              alt="image"
              width={500}
              height={500}
              style={{ height: "90%",
                width: "100%",
                objectFit: "contain",

              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default InfiniteAutoplayCarousel;
