import React from "react";
import styles from "./section4.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
interface Section4Props {
    imageUrl: string;
    alt: string;
    imageDescription: string;
}
const Section4 : React.FC<Section4Props>= ({imageUrl, alt, imageDescription}) => {
  return (
    <section className={styles.section}>
  <Box className={styles.gridContainer}>
      <Box className={styles.gridItem}>
        <Image
          src={imageUrl}
          alt={alt}
          className={styles.image}
          width={1000}
          height={1000}
        />
      </Box>
      <Box className={styles.gridItem} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography className={styles.description}>{imageDescription}</Typography>
      </Box>
    </Box>
    </section>
  );
};

export default Section4;
