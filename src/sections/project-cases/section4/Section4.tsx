import React from "react";
import styles from "./section4.module.css";

const Section4 = () => {
  return (
    <section className={styles.section}>
  <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <img
          src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/fti/1.1.desktop-2x.webp"
          alt="voucher management"
          className={styles.image}
        />
      </div>
      <div className={styles.gridItem} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className={styles.description}>{`FTI GROUP's voucher management dashboards`}</p>
      </div>
    </div>
    </section>
  );
};

export default Section4;
