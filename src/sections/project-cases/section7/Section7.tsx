import React from "react";
import styles from "./section7.module.css";
import { Box, Typography } from "@mui/material";

const Section7 = () => {
  const functionalities = [
    "A unified and simplified workflow devised for operational processing and management of vouchers, resulting in increased efficiency and cost savings;",
    "A dedicated internal website implemented for tracking the use of vouchers, allowing managers to save time and make more informed decisions;",
    "Website traffic increased through the development of a voucher management checker and redesign of several modules of the official website;",
    "UX research conducted, which helped to refine the cross-platform mobile app and create a more user-friendly experience for clients.",
  ];
  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Typography className={styles.title}>Results</Typography>
        <Box className={styles.parentDescription}>
          <Typography className={styles.description}>
            {`Andersen implemented one project from scratch that brought positive business results and helped to implement four other subprojects. The well-optimized tools and applications helped the customer focus on their crucial goals, attract more users, and reduce costs by optimizing their technical processes.`}
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
