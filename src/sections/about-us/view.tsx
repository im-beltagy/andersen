import HeroFull from "@/sections/about-us/hero-full";
import {Box, Container, Divider} from "@mui/material";
import React from "react";
import ItServices from "./it-services";
import TeamWork from "./team-work";
import HomeTrust from "../home/trust";
import HomeWorkedWith from "../home/worked-with";
import Section9 from "@/sections/project-cases/sectionContactForm/Section9";

const companies = [
  "https://svgsilh.com/svg/80658.svg",
  "https://www.svgrepo.com/download/353443/aws.svg",
];
function View(): React.JSX.Element {
  return (
    <Box>
      <HeroFull />
      <HomeTrust
        mainText={`Wir sind spezialisiert auf die Entwicklung von Softwarelösungen durch die Synergie von Fachkräften und effizienten Prozessen.`}
      />
      <HomeWorkedWith />
      <HomeWorkedWith
        Links={companies}
        mainText={`Softwareentwicklung auf Expertenniveau`}
      />
      <ItServices />
{/*
      <TeamWork />
*/}

      <Container>
          <Divider sx={{ my: 2 }} />
        <Section9 />
      </Container>
    </Box>
  );
}

export default View;
