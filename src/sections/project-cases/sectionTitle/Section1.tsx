import React from "react";
import styles from "./section1.module.css";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
interface Section1Props {
  title: string;
  branch: string;
  imageUrl: string;
}
const Section1: React.FC<Section1Props> = ({title, branch, imageUrl}) => {
  return (
    <section className={styles.section}>
      <Box className={styles.gridContainer}>
        <Box className={` ${styles.item1}`}>
          <Typography className={styles.title}>{title}</Typography>
          <Typography className={styles.tag}>{branch}</Typography>
        </Box>
      </Box>
      <Box className={` ${styles.item3}`}>
        <Image
          src={imageUrl}
          alt="voucher management"
          width={1000}
          height={500}
          className={styles.image}
        />
      </Box>
    </section>
  );
};

export default Section1;
