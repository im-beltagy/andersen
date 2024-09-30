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

      <Container
        sx={{ marginTop: "100px", padding: "50px", backgroundColor: "#fff", display:{ xs: "none", sm: "block"} }}
      >
        <Typography
          sx={{ fontSize: "50px", fontWeight: "bold", marginBottom: "40px" }}
        >
          Anfrage für eine IT-Projektkostenschätzung

        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          
        >
          <Tab
            label="Maßgeschneiderte Softwareentwicklung"
            sx={{ color: value === 0 ? "#000" : "#000" }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ fontSize: "20px", fontWeight: "bold" }}>
              1.Welche Art von Softwarelösung möchten Sie mit Webizi entwickeln?
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography>Mobile</Typography>
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography>Web</Typography>
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography>Desktop</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginY: "50px" }}>
            <Grid item xs={12} sx={{ fontSize: "20px", fontWeight: "bold" }}>
              2.In welchem Stadium befindet sich Ihr Softwareentwicklungsprozess derzeit?
            </Grid>

            <Grid item xs={12} sx={{ fontSize: "20px", fontWeight: "bold" }}>
              <RadioGroup
                aria-label="radio-group"
                name="radio-group"
                value={value2}
                onChange={handleChange2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="Idee"
                  sx={{ margin: "5px" }}
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Prototyp/Spezifikation"
                  sx={{ margin: "5px" }}
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Entwickelte Lösung"
                  sx={{ margin: "5px" }}
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="MVP"
                  sx={{ margin: "5px" }}
                />
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ fontSize: "20px", fontWeight: "bold" }}>
              3. Was sind die Hauptziele oder -vorgaben für diese Softwarelösung?
            </Grid>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Beschreiben Sie die Ziele Ihrer Softwarelösung"
              />
            </Grid>
          </Grid>
          <Button  sx={{ marginTop: "50px", color: "#000", backgroundColor:"#ffdb00" }}>
            Preise anfordern
          </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >

            <Grid container spacing={2}>
 
              <TechStack />
              <Divider sx={{width:"100%"}} />
              <ExtraSpecialists />
            </Grid>
          </Box>
        </TabPanel>
      </Container>
    </div>
  );
}

export default HeroFull;
