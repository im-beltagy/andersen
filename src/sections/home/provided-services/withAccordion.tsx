"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useState } from "react";

const ProvidedServicesAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
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
    <Box sx={{ py: "var(--section-py)", bgcolor: "var(--primary-light)", display:{xs:"block",md:"none"} }}>
      <Container sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Box sx={{ fontSize: "17px", fontWeight: "bold" }}>
              Custom Software Development
            </Box>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Box sx={{ fontSize: "17px", fontWeight: "bold" }}>
              Audit and Consulting
            </Box>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Box sx={{ fontSize: "17px", fontWeight: "bold" }}>
              Delivery
            </Box>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{ width: "100%" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Box sx={{ fontSize: "17px", fontWeight: "bold" }}>
              Support, Maintenance, and Managed Services
            </Box>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default ProvidedServicesAccordion;