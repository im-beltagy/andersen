import React from "react";
import styles from "./section3.module.css";
import { Box, Typography } from "@mui/material";
interface Section3Props {
    description: string;
    duration: string;
    technologies: string[];
}
const Section3: React.FC<Section3Props> = ({description, duration, technologies}) => {
  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Typography className={styles.title}>Über das Projekt</Typography>
        <Typography className={styles.firstDescription}>
          {description}
        </Typography>
        {/*<Box className={styles.parentSecondDescription}>
          <Typography className={styles.secondDescription}>
            {`   The results of the project spoke for themselves. PR Manager at FTI
            Group Gert Becker was full of praise for Andersen's contribution to
            the resulting voucher management software. He noted that the clean
            code, business-friendly ideas, and transparency of our engineers'
            work won their confidence, leading to the partnership extending to
            four subprojects in the travel industry. FTI Group entrusted
            Andersen with tasks of various complexity levels.`}
          </Typography>
        </Box>*/}
        <Box className={styles.details}>
          <Box className={styles.detailItem}>
            <span className={styles.detailTitle}>DAUER:</span>
            <span className={styles.detailValue}>{duration}</span>
          </Box>
          <Box className={styles.detailItem}>
            <span className={styles.detailTitle}>TECHNOLOGIEN:</span>
            <Box className={styles.technologies}>
              {technologies.map((tech, index) => (
                  <span key={index} className={styles.technology}>{tech}</span>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Section3;
