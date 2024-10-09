import globals from "@/app/globals.module.css";
import styles from "./styles.module.css";
import { Box, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    cover: "/assets/images/cases/Frame 3.png",
    title: "Pronto - Effiziente Versandlösung",
    specialists: "7",
    months: "24",
    url: "/project-cases/case1",
  },
  {
    cover: "/assets/images/cases/Frame 7.png",
    title: "Barq Daily – Deine Plattform für Online-Shopping",
    specialists: "13",
    months: "12",
    url: "/project-cases/case4",
  },
  {
    cover: "/assets/images/cases/Frame 5.png",
    title: "Moola Pay - Die smarte Finanzlösung",
    specialists: "9",
    months: "24",
    url: "/project-cases/case2",
  },
];

export default function HomeCaseStudies() {
  return (
    <Box
      className={globals.card_container}
      sx={{ py: "var(--section-py)", bgcolor: "var(--primary-light)" }}
    >
      <Container>
        <h2 className={globals.headding}>Case studies</h2>

        <div className={styles.cards_container}>
          {data.map((item) => (
            <a href={item.url} className={styles.card} key={item.title}>
              <div className={styles.cover}>
                <Image
                  className={styles.cover_image}
                  src={item.cover}
                  layout="fill"
                  objectFit="cover"
                  alt={item.title}
                />
                <Stack
                  className={styles.labels}
                  direction="row"
                  gap={1}
                  justifyContent="flex-end"
                >
                  <span className={styles.label_item}>
                    {item.specialists} Experte
                  </span>
                  <span className={styles.label_item}>
                    {item.months} months
                  </span>
                </Stack>
              </div>

              <div className={styles.card_content}>

                <h3 className={styles.card_title}>{item.title}</h3>
                <Stack
                  className={styles.labels_after_title}
                  direction="row"
                  gap={1}
                  justifyContent="flex-end"
                >
                  <span className={styles.label_item}>
                    {item.specialists} Experte
                  </span>
                  <span className={styles.label_item}>
                    {item.months} months
                  </span>
                </Stack>
              </div>
            </a>
          ))}
        </div>

        <Stack
          alignItems="flex-start"
          gap={2}
          direction={{ md: "row" }}
          justifyContent="space-between"
          bgcolor="#fafafa"
          padding={{ xs: "20px", sm: "40px" }}
        >
          <h3 className={styles.card_title}>
            {"Entdecken Sie weitere Projekte von Webizi"}
          </h3>
          <Link
            href="/project-cases"
            className={`${globals.button} ${globals.button_primary}`}
          >
            mehr...
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
