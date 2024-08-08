"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
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
  const [techStack, setTechStack] = React.useState([
    {
      name: "Front-end",
      techs: [
        { name: "React", number: 0 },
        { name: "Angular", number: 0 },
        { name: "Vue.js", number: 0 },
      ],
    },
    {
      name: "Mobile",
      techs: [
        { name: "React Native", number: 0 },
        { name: "Flutter", number: 0 },
        { name: "Xamarin", number: 0 },
      ],
    },
    {
      name: "Back-end",
      techs: [
        { name: "Node.js", number: 0 },
        { name: "Python", number: 0 },
        { name: "Java", number: 0 },
      ],
    },
  ]);

  const handleTechIncrease = (stackIndex: number, techIndex: number) => {
    console.log("Increase button clicked");
    setTechStack((prevTechStack) => {
      const updatedTechStack = [...prevTechStack];
      updatedTechStack[stackIndex].techs[techIndex].number += 1;
      return updatedTechStack;
    });
  };

  const handleTechDecrease = (stackIndex: number, techIndex: number) => {
    console.log("Decrease button clicked");
    setTechStack((prevTechStack) => {
      const updatedTechStack = [...prevTechStack];
      console.log(updatedTechStack[stackIndex].techs[techIndex]);
      updatedTechStack[stackIndex].techs[techIndex].number = Math.max(
        0,
        updatedTechStack[stackIndex].techs[techIndex].number - 1
      );
      console.log(updatedTechStack);
      return updatedTechStack;
    });
  };

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
    <>
      <Container sx={{ backgroundColor: "#fff", padding: "20px" }}>
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
        sx={{ marginTop: "100px", padding: "50px", backgroundColor: "#fff" }}
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
            <Typography variant="h5" component="h2" gutterBottom>
              Specify the tech stack and the number of developers you need per
              each technology:
            </Typography>
            <Grid container spacing={2}>
              {techStack.map((stack, stackIndex) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={stackIndex}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" component="h3" gutterBottom>
                    {stack.name}
                  </Typography>
                  {stack.techs.map((tech, techIndex) => (
                    <Box
                      key={techIndex}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <Button
                        sx={{ color: "#000", fontSize: "20px" }}
                        onClick={() =>
                          handleTechDecrease(stackIndex, techIndex)
                        }
                      >
                        -
                      </Button>
                      <Typography variant="subtitle2" gutterBottom>
                        {tech.name}: {tech.number}
                      </Typography>
                      <Button
                        sx={{ color: "#000", fontSize: "20px" }}
                        onClick={() =>
                          handleTechIncrease(stackIndex, techIndex)
                        }
                      >
                        +
                      </Button>
                    </Box>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>
        </TabPanel>
      </Container>
    </>
  );
}

export default HeroFull;
