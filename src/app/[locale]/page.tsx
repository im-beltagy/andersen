import HomeCaseStudies from "@/sections/home/case-studies";
import HomeForm from "@/sections/home/form";
import HomeHero from "@/sections/home/hero";
import EventsTabs from "@/sections/home/meet-us";
import ProvidedServices from "@/sections/home/provided-services";
import ProvidedServicesAccordion from "@/sections/home/provided-services/withAccordion";
import HomeTechSet from "@/sections/home/tech-set";
import HomeTrust from "@/sections/home/trust";
import HomeWorkedWith from "@/sections/home/worked-with";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <Box bgcolor="#020d1c" sx={{ "&>*:not(:last-child)": { marginBottom: 2 } }}>
      <Box>
        <HomeHero />
        <HomeTrust />
      </Box>
      <ProvidedServices />
      <ProvidedServicesAccordion />
      <HomeWorkedWith />
      <HomeCaseStudies />
      <HomeTechSet />
      <EventsTabs />
      <HomeForm />
    </Box>
  );
}
