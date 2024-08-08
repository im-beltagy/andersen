import React from "react";
import styles from "./section7.module.css";

const Section7 = () => {
  const functionalities = [
    "A unified and simplified workflow devised for operational processing and management of vouchers, resulting in increased efficiency and cost savings;",
    "A dedicated internal website implemented for tracking the use of vouchers, allowing managers to save time and make more informed decisions;",
    "Website traffic increased through the development of a voucher management checker and redesign of several modules of the official website;",
    "UX research conducted, which helped to refine the cross-platform mobile app and create a more user-friendly experience for clients.",
  ];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Results</h1>
        <div className={styles.parentDescription}>
          <p className={styles.description}>
            {`Andersen implemented one project from scratch that brought positive business results and helped to implement four other subprojects. The well-optimized tools and applications helped the customer focus on their crucial goals, attract more users, and reduce costs by optimizing their technical processes.`}
          </p>
        </div>
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
    </section>
  );
};

export default Section7;
