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
import Section9 from "@/sections/project-cases/sectionContactForm/Section9";
import Slider from "@/components/slider";
import styles from "../../../components/slider/styles.module.css";
import styles2 from "./hero.module.css";
import TechStack from "../teck-stack/TeckStack";
import ExtraSpecialists from "../extraSpecialists";
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
          <div
            className={styles.card}
            onClick={() => console.log(index)}
            role="button"
            key={index}
          >
            <p className={styles.title}>Jun 14, 2024</p>
          </div>
        ))
      );
    }, 1000);
  }, []);

  return (
    <div className={styles2.contactSection}>
      <div className={styles2.contactUs}>
        <div className={styles2.contactUsContent}>
          <h2>Kontaktieren Sie uns</h2>
          <p>
            Wir würden uns freuen, von Ihnen zu hören! Kontaktieren Sie uns gerne bei Fragen oder Anfragen.
          </p>
        </div>
      </div>
      <Container
        sx={{ backgroundColor: "#fff", padding: "20px",  }}
      >
        <Section9 />
      </Container>


    </div>
  );
}

export default HeroFull;
