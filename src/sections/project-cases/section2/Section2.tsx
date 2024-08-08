import React from "react";
import styles from "./section2.module.css";

const Section2 = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.subtitle}>ABOUT</h2>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>About the client</h1>
          <p className={styles.clientDescription}>
            FTI Group is the fourth-largest travel operator in Europe. The group
            is broadly represented by various brands and subsidiaries. With over
            11,000 employees worldwide, FTI Group operates in six source markets
            and offers holiday packages in more than 120 countries.
          </p>
          <div className={styles.clientLocation}>
            <span >LOCATION:</span> <span>Germany</span>
          </div>
        </div>
        <div className={styles.rightSection}>
          <img
            src="https://static.andersenlab.com/andersenlab/new-andersensite/bg-for-blocks/about-the-client/germany-tablet-2x.png"
            alt="FTI Group Location"
            className={styles.clientMap}
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
