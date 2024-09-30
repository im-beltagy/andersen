import React from "react";
import styles from "./section2.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface Section2Props {
    description: string;

}
const Section2: React.FC<Section2Props> = ({description}) => {
  return (
    <section className={styles.section}>
    </section>
  );
};

export default Section2;
