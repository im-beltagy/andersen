import React from "react";
import styles from "./section5.module.css";

const Section5 = () => {
  const functionalities = [
    "An extensive database of all the company's vouchers with a unified and simplified workflow for their operational processing and management;",
    "An embedded plugin on the existing website for detailed management;",
    "Ensuring compatibility across different browsers and their various versions;",
    "An extension for using vouchers, their blocking, redemption, and filtering;",
    "Implementing techniques like lazy loading, code splitting, caching, and Server-Side Rendering for performance optimization;",
    "Integrating with analytics tools to track user interactions and app performance.",
  ];
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        <div className={styles.box}>
          <h2 className={styles.title}>Application functionality</h2>
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <ul className={styles.list}>
                {functionalities?.map((text, index) => (
                  <li className={styles.listItem }  key={index}>
                   
                    <span className={styles.listItemText}>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
