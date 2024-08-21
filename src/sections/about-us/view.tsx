import HeroFull from "@/sections/about-us/hero-full";
import { Box, Container } from "@mui/material";
import React from "react";
import ItServices from "./it-services";
import TeamWork from "./team-work";
import HomeTrust from "../home/trust";
import HomeWorkedWith from "../home/worked-with";
import Section9 from "../project-cases/section9/Section9";

const companies = [
  "https://static.andersenlab.com/andersenlab/new-andersensite/icons/logos/oracle-java-se.svg",
  "https://static.andersenlab.com/andersenlab/new-andersensite/icons/logos/microsoft.svg",
  "https://static.andersenlab.com/andersenlab/new-andersensite/icons/technologies/aws-white.svg",
  "https://static.andersenlab.com/andersenlab/new-andersensite/icons/custom-software-development/ISTQB.svg",
  "https://static.andersenlab.com/andersenlab/new-andersensite/icons/pm/pmp-logo_v2.svg",
];
function View(): React.JSX.Element {
  return (
    <Box>
      <HeroFull />
      <HomeTrust
        mainText={`We specialize in developing software solutions through the synergy of skilled professionals and efficient processes.`}
      />
      <HomeWorkedWith />
      <HomeWorkedWith
        Links={companies}
        mainText={`Expert-level software development company`}
      />
      <ItServices />
      <TeamWork />
      <Container>
        <Section9 />
      </Container>
    </Box>
  );
}

export default View;
