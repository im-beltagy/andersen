import React from "react";
import styles from "./section4.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Section4 = () => {
  return (
    <section className={styles.section}>
  <Box className={styles.gridContainer}>
      <Box className={styles.gridItem}>
        <Image
          src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/fti/1.1.desktop-2x.webp"
          alt="voucher management"
          className={styles.image}
          width={1000}
          height={1000}
        />
      </Box>
      <Box className={styles.gridItem} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography className={styles.description}>{`FTI GROUP's voucher management dashboards`}</Typography>
      </Box>
    </Box>
    </section>
  );
};

export default Section4;
