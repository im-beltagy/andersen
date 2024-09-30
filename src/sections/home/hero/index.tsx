"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./styles.module.css";
import globals from "@/app/globals.module.css";
import HomeNews from "./news";
import { Container } from "@mui/material";

export default function HomeHero() {
  const t = useTranslations("Pages.Home.Hero");

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          className={styles.background_sm}
          src="/assets/home/hero/hero1.png"
          alt="hero"
          sizes="(min-width: 3840px) 3840px, 100vw"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
        <Image
          className={styles.background_lg}
          src="/assets/home/hero/hero3.png"
          alt="hero"
          sizes="(min-width: 3840px) 3840px, 100vw"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />

        <Container className={`${styles.content}`}>
          <h1 className={styles.headding}>{t("headding")}</h1>
          <button
            className={`${globals.button} ${globals.button_primary} ${styles.action}`}
          >
            {t("action")}
          </button>
        </Container>
      </div>
      {/* <Container className={`${styles.news_wrapper}`}>
        <HomeNews />
      </Container> */}
    </section>
  );
}
