"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useEffect, useState } from "react";
import Section9 from "@/sections/project-cases/section9/Section9";
import Slider from "@/components/slider";
import styles from "../../../components/slider/styles.module.css";
import styles2 from "./hero.module.css";
import TechStack from "./TeckStack";
import ExtraSpecialists from "./extraSpecialists";
import ProvidedServices from "@/sections/home/provided-services";
import ProvidedServicesAccordion from "@/sections/home/provided-services/withAccordion";
import Section7 from "@/sections/services/section7/Section7";
import Image from "next/image";
const TabPanel = (props: any) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

function HeroFull(): React.JSX.Element {
  const [slides, setSlides] = useState<any>();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [value2, setValue2] = useState("option1");

  const handleChange2 = (event: React.SyntheticEvent) => {
    setValue2((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    setTimeout(() => {
      setSlides(
        Array.from({ length: 18 })?.map((_, index) => (
          <Box
            className={styles.card}
            onClick={() => console.log(index)}
            role="button"
            key={index}
          >
            <Typography className={styles.title}>Jun 14, 2024</Typography>
            <Typography className={styles.content}>
              Andersen Sponsors Digital Uzbekistan 2024 Forum
            </Typography>
          </Box>
        ))
      );
    }, 1000);
  }, []);

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
     
      <Container sx={{ padding: "50px" }}>
        <ProvidedServices />
        <ProvidedServicesAccordion />
      </Container>
      <Container
        sx={{
          marginTop: "100px",
          padding: "50px",
          backgroundColor: "#fff",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Section7 />
      </Container>
      <Container sx={{ backgroundColor: "#fff", padding: "20px", marginTop: "100px" }}>
        <Section9 />
      </Container>
    </Box>
  );
}

export default HeroFull;
