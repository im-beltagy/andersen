"use client";
import React from "react";
import styles from "./Section11.module.css"; // Make sure to include the CSS file
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from 'next/link';
interface Section11Props {
    title: string;
    imageUrl: string;
    caseUrl: any;
}
const Section11: React.FC<Section11Props> = ( {title, caseUrl, imageUrl}) => {
  return (
    <Box className={styles.container}>
        <Box className={styles.textSection1}>
            <Box></Box>
            <Link href={caseUrl} passHref legacyBehavior>
                <a className={styles.title}>
                    <Typography component="span" style={{ fontSize: 'inherit', fontWeight: 'inherit' }}>
                        {title}
                    </Typography>
                </a>
            </Link>

        </Box>
        <Box className={styles.imageSection}>
            <Link href={caseUrl} passHref legacyBehavior>
                <a>
                    <Image src={imageUrl} alt="Description" width={500} height={300} />
                </a>
            </Link>
      </Box>
      <Box className={styles.textSection2}>
        <Box ></Box>

      </Box>
    </Box>
  );
};

export default Section11;
