import { Box, Container, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import globals from "@/app/globals.module.css";
import Image from "next/image";
import Link from "next/link";

const companies = [
  "/assets/companies/tui-color.svg",
  "/assets/companies/media-markt-color.svg",
  "/assets/companies/digital-inspire-color.svg",
  "/assets/companies/deutsche-bahn-ag-1.svg",
  "/assets/companies/asset-book-color.svg",
  "/assets/companies/prea-gmbh-color.svg",
  "/assets/companies/mogo-finance-color.svg",
  "/assets/companies/Condor_logo_2022.svg",
];
type props = {
  Links?:string[];
  mainText?:string
}
export default function HomeWorkedWith({Links, mainText}:props) {
  return (
    <Box
      className={globals.card_container}
      sx={{bgcolor:Links ? '#020D1C': "var(--primary-light)", py: "var(--section-py)",  }}
    >
      <Container>
        <Typography className={globals.headding} style={{color: Links? "#fff": '#000000' }}>
          {mainText ?mainText :`Stolz auf die Partnerschaften mit führenden Unternehmen!`}
        </Typography>
        <Grid container justifyContent="center" spacing={4} sx={{ mt: { xs: 2, sm: 7.5 } }}>
          {
            Links && (
            Links?.map((company:string) => (
                <Grid item xs={6} sm={2} key={company}>
                  <Link href="#" className={styles.about_link}>
                    <Image
                      className={styles.company_img}
                      width="130"
                      height="60"
                      alt="brand-name"
                      src={company}
                    />
                  </Link>
                </Grid>
              ))
            )
          }
            {
            !Links && (
            companies?.map((company:string) => (
                <Grid item xs={6} sm={3} key={company}>
                  <Link href="#" className={styles.company_link}>
                    <Image
                      className={styles.company_img}
                      width="122"
                      height="45"
                      alt="brand-name"
                      src={company}
                    />
                  </Link>
                </Grid>
              ))
            )
          }
          {}
        </Grid>
      </Container>
    </Box>
  );
}
