import React, { useState } from "react";
import styles from "./TechStack.module.css"; // Assume you're using CSS Modules

type TechCounts = {
  frontend: { [key: string]: number };
  backend: { [key: string]: number };
  mobile: { [key: string]: number };
  database: { [key: string]: number };
};

const initialTechState: TechCounts = {
  frontend: {
    "Project Manager": 0,
    "QA/QA Automation Engineer": 0,
  },
  backend: {
    "UI/UX Designer": 0,
    "Solution Architects": 0,
  },
  mobile: {
    "Business Analyst": 0,
  },
  database: {
    "DevOps Engineer": 0,
  },
};

const ExtraSpecialists = () => {
  const [techCounts, setTechCounts] = useState<TechCounts>(initialTechState);

  const handleIncrement = (category: keyof TechCounts, tech: string) => {
    setTechCounts({
      ...techCounts,
      [category]: {
        ...techCounts[category],
        [tech]: techCounts[category][tech] + 1,
      },
    });
  };

  const handleDecrement = (category: keyof TechCounts, tech: string) => {
    setTechCounts({
      ...techCounts,
      [category]: {
        ...techCounts[category],
        [tech]: Math.max(0, techCounts[category][tech] - 1),
      },
    });
  };

  const renderTechStack = (category: keyof TechCounts) => {
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
      <h1>2.Extra specialists to add to the team:</h1>
      <div className={styles.stacks}>
        <div className={styles.techCategory}>
          {/* <h2>Front-end</h2> */}
          {renderTechStack("frontend")}
        </div>
        <div className={styles.techCategory}>
          {/* <h2>Back-end</h2> */}
          {renderTechStack("backend")}
        </div>
        <div className={styles.techCategory}>
          {/* <h2>Mobile</h2> */}
          {renderTechStack("mobile")}
        </div>
        <div className={styles.techCategory}>
          {/* <h2>Database & Cloud</h2> */}
          {renderTechStack("database")}
        </div>
      </div>
    </div>
  );
};

export default ExtraSpecialists;
