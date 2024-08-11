import React, { useState } from "react";
import styles from "./TechStack.module.css"; // Assume you're using CSS Modules

const TechStack = () => {
  const initialTechState = {
    frontend: {
      "Vue.js": 0,
      Angular: 0,
      "React.js": 0,
      JavaScript: 0,
    },
    backend: {
      ".NET": 0,
      Java: 0,
      Python: 0,
      Scala: 0,
      Ruby: 0,
      "C++": 0,
      "Node.js": 0,
      Golang: 0,
    },
    mobile: {
      Android: 0,
      "React Native": 0,
      iOS: 0,
      Xamarin: 0,
      Ionic: 0,
      Flutter: 0,
    },
    database: {
      PostgreSQL: 0,
      MySQL: 0,
      Oracle: 0,
      "Microsoft Azure SQL Database": 0,
      MsSQL: 0,
      NoSQL: 0,
      AWS: 0,
    },
  };

  const [techCounts, setTechCounts] = useState(initialTechState);

  const handleIncrement = (category: string, tech: string) => {
    setTechCounts({
      ...techCounts,
      [category]: {
        ...techCounts[category],
        [tech]: techCounts[category][tech] + 1,
      },
    });
  };

  const handleDecrement = (category, tech) => {
    setTechCounts({
      ...techCounts,
      [category]: {
        ...techCounts[category],
        [tech]: Math.max(0, techCounts[category][tech] - 1),
      },
    });
  };

  const renderTechStack = (category) => {
    return Object.keys(techCounts[category]).map((tech) => (
      <div key={tech} className={styles.techRow}>
        <span>{tech}</span>
        <div className={styles.counter}>
          <button
            className={styles.btn}
            onClick={() => handleDecrement(category, tech)}
          >
            -
          </button>
          <span className={styles.counterValue}>
            {techCounts[category][tech]}
          </span>
          <button
            className={styles.btn}
            onClick={() => handleIncrement(category, tech)}
          >
            +
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.techStack}>
      <h1>
        1.Specify the tech stack and the number of developers you need per each
        technology:
      </h1>
      <div className={styles.stacks}>
        <div className={styles.techCategory}>
          <h2>Front-end</h2>
          {renderTechStack("frontend")}
        </div>
        <div className={styles.techCategory}>
          <h2>Back-end</h2>
          {renderTechStack("backend")}
        </div>
        <div className={styles.techCategory}>
          <h2>Mobile</h2>
          {renderTechStack("mobile")}
        </div>
        <div className={styles.techCategory}>
          <h2>Database & Cloud</h2>
          {renderTechStack("database")}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
