"use client";

import { Box, Button, Container, Grid, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import globals from "@/app/globals.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
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
const ProvidedServices = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [value2, setValue2] = useState("option1");

  const handleChange2 = (event: React.SyntheticEvent) => {
    setValue2((event.target as HTMLInputElement).value);
  };
  const customDevelopment = [
    "MObile development",
    "Web development",
    "Desktop application development",
    "Game development",
    "AI and Machine Learning development",
    "Blockchain development",
    "Cybersecurity development",
    "Embedded Systems development",
    "Natural Language Processing (NLP) development",
    "Virtual Reality (VR) and Augmented Reality (AR) development",
    "Software Testing and Quality Assurance (STQA)",
  ];
  const AuditConsulting = [
    "Artificial Intelligence",
    "QA services",
    "Desktop application development",
    "Marketing for IT",
    "Solution architecture",
    "UI/UX design",
    "Business analysis",
    "Embedded Systems development",
    "Natural Language Processing (NLP) development",
    "Virtual Reality (VR) and Augmented Reality (AR) development",
    "Software Testing and Quality Assurance (STQA)",
  ];
  const Delivery = [
    "SAAS",
    "Project management",
    "Discovery phase",
    "Staff augmentation",
    "Embedded Systems development",
    "Natural Language Processing (NLP) development",
    "Virtual Reality (VR) and Augmented Reality (AR) development",
    "Software Testing and Quality Assurance (STQA)",
  ];
  const Support = [
    "SAAS",
    "Project management",
    "Discovery phase",
    "Staff augmentation",
    "Desktop application development",
    "Game development",
    "AI and Machine Learning development",
    "Blockchain development",
  ];
  return (
    <Box
      sx={{
        py: "var(--section-py)",
        bgcolor: "var(--primary-light)",
        display: { xs: "none", md: "block" },
      }}
    >
      <Container sx={{ display: "flex", alignItems: "start" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          orientation="vertical"
          sx={{ width: "150%", marginTop: "15px" }}
        >
          <Tab
            label="custom software development"
            sx={{
              backgroundColor: value === 0 ? "#ebebeb" : "#fff",
              alignItems: "start",
              fontSize: "17px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          />
          <Tab
            label="Audit and Consulting"
            sx={{
              backgroundColor: value === 1 ? "#ebebeb" : "#fff",
              alignItems: "start",
              fontSize: "17px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          />
          <Tab
            label="Delivery"
            sx={{
              backgroundColor: value === 2 ? "#ebebeb" : "#fff",
              alignItems: "start",
              fontSize: "17px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          />
          <Tab
            label="Support, Maintenance, and Managed Services"
            sx={{
              backgroundColor: value === 3 ? "#ebebeb" : "#fff",
              textAlign: "start",
              fontSize: "17px",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={2}>
            {customDevelopment?.map((dev, index) => (
              <Grid
                item
                key={index}
                xs={6}
                sx={{ fontSize: "20px", fontWeight: "bold" }}
              >
                <Button
                  sx={{
                    width: "100%",
                    color: "#000",
                    position: "relative",
                    padding: "10px",
                    display: "flex",
                    fontSize: "16px",
                    justifyContent: "start",
                    textAlign: "start",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: "100%",
                      bottom: 0,
                      height: "2px",
                      backgroundColor: "#ffe232",
                      transition: "right 0.6s",
                    },
                    "&:hover": {
                      bgcolor: "#ebebeb",
                      "&::after": {
                        right: 0,
                      },
                    },
                  }}
                >
                  {dev}
                  <ArrowRightAltIcon sx={{ marginLeft: "auto" }} />
                </Button>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={2}>
            {AuditConsulting?.map((dev, index) => (
              <Grid
                item
                key={index}
                xs={6}
                sx={{ fontSize: "20px", fontWeight: "bold" }}
              >
                <Button
                  sx={{
                    width: "100%",
                    color: "#000",
                    position: "relative",
                    padding: "10px",
                    display: "flex",
                    fontSize: "16px",
                    justifyContent: "start",
                    textAlign: "start",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: "100%",
                      bottom: 0,
                      height: "2px",
                      backgroundColor: "#ffe232",
                      transition: "right 0.6s",
                    },
                    "&:hover": {
                      bgcolor: "#ebebeb",
                      "&::after": {
                        right: 0,
                      },
                    },
                  }}
                >
                  {dev}
                  <ArrowRightAltIcon sx={{ marginLeft: "auto" }} />
                </Button>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={2}>
            {Delivery?.map((dev, index) => (
              <Grid
                item
                key={index}
                xs={6}
                sx={{ fontSize: "20px", fontWeight: "bold" }}
              >
                <Button
                  sx={{
                    width: "100%",
                    color: "#000",
                    position: "relative",
                    padding: "10px",
                    display: "flex",
                    fontSize: "16px",
                    justifyContent: "start",
                    textAlign: "start",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: "100%",
                      bottom: 0,
                      height: "2px",
                      backgroundColor: "#ffe232",
                      transition: "right 0.6s",
                    },
                    "&:hover": {
                      bgcolor: "#ebebeb",
                      "&::after": {
                        right: 0,
                      },
                    },
                  }}
                >
                  {dev}
                  <ArrowRightAltIcon sx={{ marginLeft: "auto" }} />
                </Button>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Grid container spacing={2}>
            {Support?.map((dev, index) => (
              <Grid
                item
                key={index}
                xs={6}
                sx={{ fontSize: "20px", fontWeight: "bold" }}
              >
                <Button
                  sx={{
                    width: "100%",
                    color: "#000",
                    position: "relative",
                    padding: "10px",
                    display: "flex",
                    fontSize: "16px",
                    justifyContent: "start",
                    textAlign: "start",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: "100%",
                      bottom: 0,
                      height: "2px",
                      backgroundColor: "#ffe232",
                      transition: "right 0.6s",
                    },
                    "&:hover": {
                      bgcolor: "#ebebeb",
                      "&::after": {
                        right: 0,
                      },
                    },
                  }}
                >
                  {dev}
                  <ArrowRightAltIcon sx={{ marginLeft: "auto" }} />
                </Button>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Container>
    </Box>
  );
};

export default ProvidedServices;
