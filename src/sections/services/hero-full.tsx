"use client";

import {
  Box,
  Container,
} from "@mui/material";

import Section9 from "@/sections/project-cases/sectionContactForm/Section9";
import styles2 from "./hero.module.css";
import ProvidedServices from "@/sections/home/provided-services";
import ProvidedServicesAccordion from "@/sections/home/provided-services/withAccordion";
import Grantees from "@/sections/services/Grantees/Grantees";
import Image from "next/image";
import ItServices from "@/sections/about-us/it-services";
import React from "react";

function HeroFull(): React.JSX.Element {

  return (
    <Box className={styles2.contactSection}>
      <Box className={styles2.contactUs}>
        <Image
          src="https://andersenlab.com/react-assets/static/74306c57a3b06cb29a7e834f2089349b/ae3a5/1920x546-2x-v2.webp"
          alt="Contact Us"
          className={styles2.contactUsImage}
          width={500}
          height={300}
        />
        <Box className={styles2.contactUsContent}>
          <h2>IT Services with Sparkling Results</h2>
        </Box>
      </Box>

        <ItServices style={{ backgroundColor: "#ffffff", padding: "20px" }}/>
      <Container
        sx={{
          marginTop: "100px",
          padding: "50px",
          backgroundColor: "#fff",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Grantees />
      </Container>
      <Container sx={{ backgroundColor: "#fff", padding: "20px", marginTop: "100px" }}>
        <Section9 />
      </Container>
    </Box>
  );
}

export default HeroFull;
