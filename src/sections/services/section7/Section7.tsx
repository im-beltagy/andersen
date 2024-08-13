import React from "react";
import styles from "./section7.module.css";

const Section7 = () => {
  const functionalities = [
    {
      title: "High-quality practices",
      text: "In order to apply the most cutting-edge approaches and provide high-quality Software Development Services, our experts are regularly certified by the most trusted and progressive entities.",
    },
    {
      title: "Customer trust",
      text: "Thanks to our high professional standards, effective development workflows, and focus on quality, we have earned a positive reputation in the market, reflected in our rankings – for example, 4.9/5 on Clutch.",
    },
    {
      title: "Strategic partnerships",
      text: "Andersen's recurring and referring customers prove our reliability and dedication. Once your IT project is completed, we will be happy to work with you to implement new ones, provide ongoing support and maintenance, or upgrade your existing software.",
    },
    {
      title: "Individual approach",
      text: "Andersen is a supplier of Software Development Services employing and allocating IT specialists with both the hard and soft skills required to seamlessly integrate with your in-house team.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>{"Andersen's guarantees"}</h1>
        <div className={styles.gridContainer}>
            <ul className={styles.list}>
              {functionalities?.map((item, index) => (
                <li className={styles.listItem} key={index}>
                  <h2 className={styles.itemTitle}>{item.title}</h2>
                  <span className={styles.listItemText}>{item.text}</span>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Section7;