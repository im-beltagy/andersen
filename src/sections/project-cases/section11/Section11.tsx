import React from "react";
import styles from "./Section11.module.css"; // Make sure to include the CSS file
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Section11 = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.textSection1}>
        <Box className={styles.label}>NDA</Box>
        <Typography className={styles.hi}>
          A Blockchain Ecosystem for B2B and B2C Products
        </Typography>
      </Box>
      <Box className={styles.imageSection}>
        <Image
          src="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/desktop_webp/1712317943.webp"
          alt="Description"
          width={500} 
          height={300}
        />
      </Box>
      <Box className={styles.textSection2}>
        <Box className={styles.label}>NDA</Box>
        <Typography className={styles.hi}>
          A Blockchain Ecosystem for B2B and B2C Products
        </Typography>
      </Box>
    </Box>
  );
};

export default Section11;
