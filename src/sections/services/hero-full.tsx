"use client";

import {
  Box,
  Container,
} from "@mui/material";

import Section9 from "@/sections/project-cases/sectionContactForm/Section9";
import styles2 from "./hero.module.css";
import Image from "next/image";
import ItServices from "@/sections/about-us/it-services";
import React from "react";

function HeroFull(): React.JSX.Element {

  return (
    <Box className={styles2.contactSection}>
      <Box className={styles2.contactUs}>
        <Image
          src="/assets/home/hero/hero3.png"
          alt="Contact Us"
          className={styles2.contactUsImage}
          width={500}
          height={300}
        />
        <Box className={styles2.contactUsContent}>
          <h2>IT Services with Sparkling Results</h2>
        </Box>
      </Box>

        <ItServices />
      <Container
        sx={{
          marginTop: "100px",
          padding: "50px",
          backgroundColor: "#fff",
          display: { xs: "none", sm: "block" },
        }}
      >
      </Container>
      <Container sx={{ backgroundColor: "#fff", padding: "20px", marginTop: "100px" }}>
        <Section9 />
      </Container>
    </Box>
  );
}

export default HeroFull;
