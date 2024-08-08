import globals from "@/app/globals.module.css";
import styles from "./styles.module.css";
import { Box, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    cover: "/assets/home/case-studies/1.webp",
    icon: "/assets/companies/tui-color.svg",
    title: "Internal Tools for a Travel Company",
    specialists: "7",
    months: "22",
  },
  {
    cover: "/assets/home/case-studies/1.webp",
    icon: "/assets/companies/tui-color.svg",
    title: "A Data-Driven Medical Solution for a Skin-Care Provider",
    specialists: "10",
    months: "42",
  },
  {
    cover: "/assets/home/case-studies/2.webp",
    icon: "/assets/companies/tui-color.svg",
    title: "A FinTech Portal to Compare Utility Payment Rates",
    specialists: "5",
    months: "36",
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
            <a href="#" className={styles.card} key={item.title}>
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
                    {item.specialists} specialists
                  </span>
                  <span className={styles.label_item}>
                    {item.months} months
                  </span>
                </Stack>
              </div>

              <div className={styles.card_content}>
                <Image
                  className={styles.icon}
                  src={item.icon}
                  alt="-"
                  width={71}
                  height={30}
                />
                <h3 className={styles.card_title}>{item.title}</h3>
                <Stack
                  className={styles.labels_after_title}
                  direction="row"
                  gap={1}
                  justifyContent="flex-end"
                >
                  <span className={styles.label_item}>
                    {item.specialists} specialists
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
            {"Explore more of Andersen’s case studies"}
          </h3>
          <Link
            href="#"
            target="_blank"
            className={`${globals.button} ${globals.button_primary}`}
          >
            See all (202)
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
