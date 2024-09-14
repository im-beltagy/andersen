import HomeCaseStudies from "@/sections/home/case-studies";
import HomeForm from "@/sections/home/form";
import HomeHero from "@/sections/home/hero";
import HomeNews from "@/sections/home/hero/news";
import InfiniteAutoplayCarousel from "@/sections/home/infinite-scroll";
import ProvidedServices from "@/sections/home/provided-services";
import ProvidedServicesAccordion from "@/sections/home/provided-services/withAccordion";
import HomeTechSet from "@/sections/home/tech-set";
import HomeTrust from "@/sections/home/trust";
import { Box } from "@mui/material";
const slides = [
  {
    title: "Quick Clean – Mobile Autowäsche für Komfort",
    logo:"/assets/images/cases/quickclean.png",
    description: "Mit Quicki Clean buchst du Fahrzeugpflege-Dienste bequem und unkompliziert – für ein glänzendes Ergebnis ohne Aufwand!",
    rating: 4.8,
    employeeUsage: "1000+",
    image:
      "/assets/images/cases/quick clean.png",
    buttonLabel: "Download Case Study",
    buttonLink: "/project-cases/case3",
    bgColor: "#6a0003",
  },
  {
    title: "Pronto - Effiziente Versandlösung",
    logo:"/assets/images/cases/pronto_logo 1.png",
    description:
      "Mit Pronto wird der Versand von Waren zwischen Städten zum Kinderspiel – einfach, schnell und effizient für Kunden und Dienstleister!",
    rating: 4.7,
    employeeUsage: "1000+",
    image:
        "/assets/images/cases/pronto.png",
    buttonLabel: "Download Case Study",
    buttonLink: "/project-cases/case1",
    bgColor: "#002042",
  },
  {
    title: "Barq Daily – Deine Plattform für Online-Shopping",
    logo:"/assets/images/cases/barq_logo.png",
    description: "Entdecke mit Barq Daily das bequemste Einkaufserlebnis – alles, was du brauchst, nur einen Klick entfernt!",
    rating: 4.8,
    employeeUsage: "1000+",
    image:
      "/assets/images/cases/barq.png",
    buttonLabel: "Download Case Study",
    buttonLink: "/project-cases/case4",
    bgColor: "#0b0b0b",
  },
  {
    title: "Moola Pay - Die smarte Finanzlösung",
    logo:"/assets/images/cases/moola.svg",
    description:
      "Mola Pay optimiert das Finanzmanagement von Unternehmen und hilft dabei, Kosten zu sparen und Effizienz zu steigern.",
    rating: 4.7,
    employeeUsage: "1000+",
    image: "/assets/images/cases/moola.png",
    buttonLabel: "Download Case Study",
    buttonLink: "/project-cases/case2",
    bgColor: "#355200"

  },
];
export default function Page() {
  return (
    <Box bgcolor="#020d1c" sx={{ "&>*:not(:last-child)": { marginBottom: 2 } }}>
      <Box>
        <HomeHero />
        <HomeTrust />
      </Box>
      <InfiniteAutoplayCarousel />
      <Box
        sx={{
          backgroundColor: "#fff",
          marginTop: "100px",
          height: { xs: "auto", lg: "95vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HomeNews slidess={slides} />
      </Box>
      <HomeCaseStudies />
      <HomeTechSet />
      <HomeForm />
    </Box>
  );
}
