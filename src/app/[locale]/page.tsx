import HomeCaseStudies from "@/sections/home/case-studies";
import HomeForm from "@/sections/home/form";
import HomeHero from "@/sections/home/hero";
import HomeTechSet from "@/sections/home/tech-set";
import HomeTrust from "@/sections/home/trust";
import HomeWorkedWith from "@/sections/home/worked-with";
import { Box, Stack } from "@mui/material";

export default function Page() {
  return (
    <Box bgcolor="#020d1c" sx={{ "&>*:not(:last-child)": { marginBottom: 2 } }}>
      <Box>
        <HomeHero />
        <HomeTrust />
      </Box>
      <HomeWorkedWith />
      <HomeCaseStudies />
      <HomeTechSet />
      <HomeForm />
    </Box>
  );
}
