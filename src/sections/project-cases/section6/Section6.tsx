import React from "react";
import styles from "./section6.module.css";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Section6 = () => {
  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Typography className={styles.title}>Solutions</Typography>
        <Box className={styles.parentDescription}>
          <Image
            src="https://static.andersenlab.com/andersenlab/new-andersensite/icons/brand/hint.svg"
            alt="hint"
            width={40}
            height={40}
          />
          <Typography className={styles.description}>
            {`     This partnership, which lasted for two years, relied on our teamwork
            to improve and streamline FTI Group's websites, introduce a voucher
            management system and checker, and redesign various modules of the
            official website. Andersen's team also conducted thorough UX
            research to enhance the user experience of the cross-platform mobile
            app. As part of the project, we developed an internal tool for FTI
            Group to manage their vouchers with ease and efficiency.`}
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default Section6;
