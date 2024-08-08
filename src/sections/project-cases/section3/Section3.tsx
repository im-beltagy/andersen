import React from "react";
import styles from "./section3.module.css";

const Section3 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>About the project</h1>
        <p className={styles.firstDescription}>
          {`     This partnership, which lasted for two years, relied on our teamwork
            to improve and streamline FTI Group's websites, introduce a voucher
            management system and checker, and redesign various modules of the
            official website. Andersen's team also conducted thorough UX
            research to enhance the user experience of the cross-platform mobile
            app. As part of the project, we developed an internal tool for FTI
            Group to manage their vouchers with ease and efficiency.`}
        </p>
        <div className={styles.parentSecondDescription}>
          <p className={styles.secondDescription}>
            {`   The results of the project spoke for themselves. PR Manager at FTI
            Group Gert Becker was full of praise for Andersen's contribution to
            the resulting voucher management software. He noted that the clean
            code, business-friendly ideas, and transparency of our engineers'
            work won their confidence, leading to the partnership extending to
            four subprojects in the travel industry. FTI Group entrusted
            Andersen with tasks of various complexity levels.`}
          </p>
        </div>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.detailTitle}>DURATION:</span>
            <span className={styles.detailValue}>23 months</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailTitle}>TECHNOLOGIES:</span>
            <div className={styles.technologies}>
              <span className={styles.technology}>JavaScript</span>
              <span className={styles.technology}>Vue.js</span>
              <span className={styles.technology}>Angular</span>
              <span className={styles.technology}>PHP</span>
              <span className={styles.technology}>React.js</span>
              <span className={styles.technology}>Firebase</span>
              <a href="#" className={styles.viewAll}>
                + View all
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
