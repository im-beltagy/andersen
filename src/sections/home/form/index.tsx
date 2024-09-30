"use client"


import globals from "@/app/globals.module.css";
import Section9 from "@/sections/project-cases/section9/Section9";
import { Box, Container } from "@mui/material";

export default function HomeForm() {
  return (
    <Box
      className={globals.card_container}
      sx={{ py: "var(--section-py)", bgcolor: "var(--primary-light)" }}
    >
      <Container>
        <Section9 />
      </Container>
    </Box>
  );
}
