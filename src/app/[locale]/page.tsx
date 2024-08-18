import HomeCaseStudies from "@/sections/home/case-studies";
import HomeForm from "@/sections/home/form";
import HomeHero from "@/sections/home/hero";
import HomeNews from "@/sections/home/hero/news";
import EventsTabs from "@/sections/home/meet-us";
import ProvidedServices from "@/sections/home/provided-services";
import ProvidedServicesAccordion from "@/sections/home/provided-services/withAccordion";
import HomeTechSet from "@/sections/home/tech-set";
import HomeTrust from "@/sections/home/trust";
import HomeWorkedWith from "@/sections/home/worked-with";
import { Box } from "@mui/material";
const slides = [
  {
    title: "SML Isuzu",
    description:
      "ERP Solution to the commercial vehicle manufacturer, specializing in buses, ambulances and customized vehicles.",
    rating: 4.7,
    employeeUsage: "1000+",
    image:
      "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/5e389b33742d846d20406a83ca7a78bf.uber-portfolio-app_9.webp", // Replace with your image path
    buttonLabel: "Download Case Study",
    bgColor: "#6a0003",
  },
  {
    title: "Bharat Forge",
    description:
      "Unique Ideas Next level of building a customer-driven solution.",
    rating: 4.7,
    employeeUsage: "1000+",
    image:
      "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/7220367fa4e58c42b7a7589d8f319071.uber-portfolio-app_3.webp", // Replace with your image path
    buttonLabel: "Download Case Study",
    bgColor: "#002042",
  },
  {
    title: "Bharat Forge",
    description:
      "Unique Ideas Next level of building a customer-driven solution.",
    rating: 4.7,
    employeeUsage: "1000+",
    image:
      "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/83b1320cd179981eec849682cbafd464.uber-portfolio-app_11.webp", // Replace with your image path
    buttonLabel: "Download Case Study",
    bgColor: "#355200",
  },
  {
    title: "Bharat Forge",
    description:
      "Unique Ideas Next level of building a customer-driven solution.",
    rating: 4.7,
    employeeUsage: "1000+",
    image:
      "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2023/05/b6c5c47bc193de89b24a7f77774a1740.uber-portfolio-app_8.webp", // Replace with your image path
    buttonLabel: "Download Case Study",
    bgColor: "#0b0b0b",
  },
];
export default function Page() {
  return (
    <Box bgcolor="#020d1c" sx={{ "&>*:not(:last-child)": { marginBottom: 2 } }}>
      <Box>
        <HomeHero />
        <HomeTrust />
      </Box>
      <ProvidedServices />
      <ProvidedServicesAccordion />
      <Box sx={{backgroundColor:"#fff", padding: "20px", marginTop: "100px", height: { xs: "auto", lg:"90vh" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <HomeNews slidess={slides} />
      </Box>
      <HomeWorkedWith />
      <HomeCaseStudies />
      <HomeTechSet />
      <EventsTabs />
      <HomeForm />
    </Box>
  );
}
