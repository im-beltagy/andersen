import { Box, Container, Grid } from "@mui/material";
import styles from "./styles.module.css";
import globals from "@/app/globals.module.css";
import Image from "next/image";
import Link from "next/link";

const companies = [
  "/assets/companies/tui-color.svg",
  "/assets/companies/media-markt-color.svg",
  "/assets/companies/digital-inspire-color.svg",
  "/assets/companies/samsung-color.svg",
  "/assets/companies/asset-book-color.svg",
  "/assets/companies/prea-gmbh-color.svg",
  "/assets/companies/mogo-finance-color.svg",
  "/assets/companies/mercedes-color.svg",
];

export default function HomeWorkedWith() {
  return (
    <Box
      className={globals.card_container}
      sx={{ py: "var(--section-py)", bgcolor: "var(--primary-light)" }}
    >
      <Container>
        <h2 className={globals.headding}>
          {"Companies we're proud to have worked with"}
        </h2>
        <Grid container spacing={4} sx={{ mt: { xs: 2, sm: 7.5 } }}>
          {companies.map((company) => (
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
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
