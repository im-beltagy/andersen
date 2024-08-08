import React from "react";
import styles from "./Section11.module.css"; // Make sure to include the CSS file

const Section11 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection1}>
        <div className={styles.label}>NDA</div>
        <h1 className={styles.hi}>
          A Blockchain Ecosystem for B2B and B2C Products
        </h1>
      </div>
      <div className={styles.imageSection}>
        <img
          src="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/desktop_webp/1712317943.webp"
          alt="Description"
        />
      </div>
      <div className={styles.textSection2}>
        <div className={styles.label}>NDA</div>
        <h1 className={styles.hi}>
          A Blockchain Ecosystem for B2B and B2C Products
        </h1>
      </div>
    </div>
  );
};

export default Section11;
