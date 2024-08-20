import React from "react";
import styles from "./section2.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Section2 = () => {
  return (
    <section className={styles.section}>
      <Typography className={styles.subtitle}>ABOUT</Typography>
      <Box className={styles.container}>
        <Box className={styles.leftSection}>
          <Typography className={styles.title}>About the client</Typography>
          <Typography className={styles.clientDescription}>
            FTI Group is the fourth-largest travel operator in Europe. The group
            is broadly represented by various brands and subsidiaries. With over
            11,000 employees worldwide, FTI Group operates in six source markets
            and offers holiday packages in more than 120 countries.
          </Typography>
          <Box className={styles.clientLocation}>
            <span >LOCATION:</span> <span>Germany</span>
          </Box>
        </Box>
        <Box className={styles.rightSection}>
          <Image
            src="https://static.andersenlab.com/andersenlab/new-andersensite/bg-for-blocks/about-the-client/germany-tablet-2x.png"
            alt="FTI Group Location"
            className={styles.clientMap}
            width={400}
            height={300}
          />
        </Box>
      </Box>
    </section>
  );
};

export default Section2;
