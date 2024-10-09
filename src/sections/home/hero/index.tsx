"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./styles.module.css";
import globals from "@/app/globals.module.css";
import { Container } from "@mui/material";
import LocaleButton from "@/components/layouts/locale-button";
import Link from "next/link";
import React from "react";


export default function HomeHero() {
  const t = useTranslations("Pages.Home.Hero");
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          className={styles.background_sm}
          src="/assets/home/hero/hero3.png"
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
          <LocaleButton />
          <Link
              href="/contact-us"
              className={`${globals.button} ${globals.button_primary} ${styles.action}`}
              style={{ minWidth: "110px", padding: "10px 18px", fontSize: "14px" }}
          >
            Projekt Anfrage
          </Link>
        </Container>
      </div>
    </section>
  );
}
