import React, { useState } from "react";
import styles from "../contact-us/teck-stack/TechStack.module.css"
import { Box, Button } from "@mui/material";

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
    <Box className={styles.techStack}>
      <h1>2.Extra specialists to add to the team:</h1>
      <Box className={styles.stacks}>
        <Box className={styles.techCategory}>
          {renderTechStack("frontend")}
        </Box>
        <Box className={styles.techCategory}>
          {renderTechStack("backend")}
        </Box>
        <Box className={styles.techCategory}>
          {renderTechStack("mobile")}
        </Box>
        <Box className={styles.techCategory}>
          {renderTechStack("database")}
        </Box>
      </Box>
    </Box>
  );
};

export default ExtraSpecialists;
