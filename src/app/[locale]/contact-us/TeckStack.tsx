import React, { useState } from "react";
import styles from "./TechStack.module.css"; // Assume you're using CSS Modules
import { Box } from "@mui/material";

type TechCounts = {
  frontend: { [key: string]: number };
  backend: { [key: string]: number };
  mobile: { [key: string]: number };
  database: { [key: string]: number };
};

const initialTechState: TechCounts = {
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

const TechStack = () => {
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
      <Box key={tech} className={styles.techRow}>
        <span>{tech}</span>
        <Box className={styles.counter}>
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
        </Box>
      </Box>
    ));
  };

  return (
    <div className={styles.techStack}>
      <h1>
        1.Specify the tech stack and the number of developers you need per each
        technology:
      </h1>
      <Box className={styles.stacks}>
        <Box className={styles.techCategory}>
          <h2>Front-end</h2>
          {renderTechStack("frontend")}
        </Box>
        <Box className={styles.techCategory}>
          <h2>Back-end</h2>
          {renderTechStack("backend")}
        </Box>
        <Box className={styles.techCategory}>
          <h2>Mobile</h2>
          {renderTechStack("mobile")}
        </Box>
        <Box className={styles.techCategory}>
          <h2>Database & Cloud</h2>
          {renderTechStack("database")}
        </Box>
      </Box>
    </div>
  );
};

export default TechStack;