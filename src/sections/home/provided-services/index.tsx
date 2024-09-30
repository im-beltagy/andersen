"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
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
    "Mobile Entwicklung",
    "Webentwicklung",
    "Desktop-Anwendungsentwicklung",
    "UI/UX design",
  ];
  return (
    <Box
      sx={{
        py: "var(--section-py)",
        bgcolor: "var(--primary-light)",
        display: { xs: "none", md: "block" },
      }}
    >
      <Container>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "46px", lg: "60px" },
            fontWeight: "bold",
            paddingX: "20px",
            marginBottom: "40px",
          }}
        >
          Services we provide
        </Typography>
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
        </Container>
      </Container>
    </Box>
  );
};

export default ProvidedServices;
