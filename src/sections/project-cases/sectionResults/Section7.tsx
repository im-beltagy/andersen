import React from "react";
import styles from "./section7.module.css";
import { Box, Typography } from "@mui/material";
interface Section7Props {
    description: string;
    functionalities: string[];
}
const Section7 : React.FC<Section7Props>= ({description, functionalities}) => {

  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Typography className={styles.title}>Ergebnisse</Typography>
        <Box className={styles.parentDescription}>
          <Typography className={styles.description}>
            {description}
          </Typography>
        </Box>
        <Box className={styles.gridContainer}>
            <Box className={styles.gridItem}>
              <ul className={styles.list}>
                {functionalities?.map((text, index) => (
                  <li className={styles.listItem }  key={index}>
                   
                    <span className={styles.listItemText}>{text}</span>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
      </Box>
    </section>
  );
};

export default Section7;
