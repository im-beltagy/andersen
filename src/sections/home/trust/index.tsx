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
           {mainText || ' Unsere Softwareprodukte sind das Ergebnis eines erfahrenen Teams und optimierter Prozesse, die über die Jahre verfeinert und perfektioniert wurden.'}
          </h2>

          <Stack direction="row" spacing={2} flexShrink={0} color={"#858585"}>
          </Stack>

        </Stack>
        <Divider flexItem  sx={{ width: '100%', my: 2 , marginTop: 10}}/>

      </Container>

    </Box>
  );
}
