import HeroFull from "@/components/hero-full";
import { Box } from "@mui/material";
import React from "react";
import Section1 from "../../section1/Section1";
import Section3 from "../../section3/Section3";
import Section4 from "../../section4/Section4";
import Section5 from "../../section5/Section5";
import Section6 from "../../section6/Section6";
import Section7 from "../../section7/Section7";
import Section8 from "../../section8/Section8";
import Section10 from "../../section10/Section10";
import Section11 from "../../section11/Section11";
import Section9 from "../../section9/Section9";
import Section2 from "../../section2/Section2";

function ViewProjectCases(): React.JSX.Element {
  return (
    <Box sx={{padding:"20px", maxWidth:"1200px", margin:"auto", marginTop:"50px", backgroundColor: "#ffffff"}}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
    </Box>
  );
}

export default ViewProjectCases;
