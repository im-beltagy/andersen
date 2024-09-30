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
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
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

  const duplicatedImages = [...images, ...images];

  return (
    <Box
      sx={{
        height: "18vh",
        width: "100%",
        backgroundColor: "#fff",
        paddingY: "15px",
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        {duplicatedImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              height: "100px",
              backgroundColor: "#eee",
              width: "70px",
              marginX: "10px",
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
              style={{ height: "90%", width: "100%", objectFit: "contain" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default InfiniteAutoplayCarousel;
