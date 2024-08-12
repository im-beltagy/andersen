"use client";

import { Typography } from "@mui/material";
import Link from "next/link";
import styles from "./header.module.css";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { defaultLocale, locales, LocalesNames } from "@/config-locale";

export default function LocaleButton() {
  const currentLocale = useLocale();
  const anotherLocale =
    locales.find((locale) => locale !== currentLocale) || defaultLocale;
  const pathname = usePathname();
  const link = pathname.replace(`/${currentLocale}`, `/${anotherLocale}`);

  return (
    <Typography
      component={Link}
      href={link}
      className={styles.desktop_link}
      fontSize={{ xs: "14px", md: "16px" }}
      fontWeight="light"
    >
      {LocalesNames[anotherLocale]}
    </Typography>
  );
}
