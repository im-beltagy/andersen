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
            <h4 className={styles.content}>
              Andersen Sponsors Digital Uzbekistan 2024 Forum
            </h4>
          </div>
        ))
      );
    }, 1000);
  }, []);

  return (
    <div className={styles2.contactSection}>
      <div className={styles2.contactUs}>
        <img
          src="https://andersenlab.com/react-assets/static/800ae4bec3dde4fa3f515d0f41c6264e/1b2ee/tablet.webp"
          alt="Contact Us"
          className={styles2.contactUsImage}
        />
        <div className={styles2.contactUsContent}>
          <h2>Contact Us</h2>
          <p>
            We would love to hear from you! Please reach out for any inquiries.
          </p>
        </div>
      </div>
      <Container
        sx={{ backgroundColor: "#fff", padding: "20px",  }}
      >
        <Section9 />
      </Container>
      <Container sx={{ marginTop: "100px", padding: "50px", color: "#fff" }}>
        <Typography sx={{ fontSize: "60px", fontWeight: "bold" }}>
          Testimonials
        </Typography>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "bold", marginY: "50px" }}
        >
          Customers of different sizes, industries, and business lines
          consistently choose our software company for their IT needs,
          expressing satisfaction with our deliverables. Below is the feedback
          they have shared.
        </Typography>
        <Slider slides={slides} />
      </Container>
      <Container
        sx={{ marginTop: "100px", padding: "50px", backgroundColor: "#fff", display:{ xs: "none", sm: "block"} }}
      >
        <Typography
          sx={{ fontSize: "50px", fontWeight: "bold", marginBottom: "40px" }}
        >
          Request an IT project cost estimate
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
        >
          <Tab
            label="custom software development"
            sx={{ color: value === 0 ? "#000" : "#000" }}
          />
          <Tab
            label="team augmentation"
            sx={{ color: value === 1 ? "#000" : "#000" }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ fontSize: "20px", fontWeight: "bold" }}>
              1.What type of software solution would you like to develop with
              Andersen?
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography>Mobile</Typography>
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography>Web</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginY: "50px" }}>
            <Grid item xs={12} sx={{ fontSize: "20px", fontWeight: "bold" }}>
              2.What is the current stage of your software development process?
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
                  label="Idea"
                  sx={{ margin: "5px" }}
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Prototype/Specification"
                  sx={{ margin: "5px" }}
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Designed solution"
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
              3.What type of software solution would you like to develop with
              Andersen?
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox />
              <Typography>Project Manager</Typography>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox />
              <Typography>Business Analyst</Typography>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox />
              <Typography>UI/UX Designer</Typography>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox />
              <Typography>Architect</Typography>
            </Grid>
          </Grid>
          <Button variant="contained" sx={{ marginTop: "50px", color: "#000" }}>
            Get pricing
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
