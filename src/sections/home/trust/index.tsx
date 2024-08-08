import { Box, Container, Divider, Paper, Stack } from "@mui/material";
import styles from "./styles.module.css";
import globals from "@/app/globals.module.css";
import Image from "next/image";
type props = {
  mainText?:string;
}
export default function HomeTrust({mainText}:props) {
  return (
    <Box
      className={globals.card_container}
      sx={{ py: "var(--section-py)", bgcolor: "var(--primary-light)" }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
          spacing={{ xs: 2, md: 10 }}
        >
          <h2 className={styles.title}>
           {mainText || ' Our software products are a direct result of the right team and processes cultivated over the years.'}
          </h2>
          <Divider flexItem orientation="vertical" />
          <Stack direction="row" spacing={2} flexShrink={0} color={"#858585"}>
            <Image
              width="100"
              height="100"
              alt="Clutch top information technology companies"
              src="/assets/brands/clutch-gray.svg"
            />
            <Image
              width="140"
              height="100"
              alt="Clutch top information technology companies"
              src="https://static.andersenlab.com/andersenlab/new-andersensite/icons/logos/clutch-reviews-stars-100-dark.svg"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
