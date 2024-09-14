import React from "react";
import styles from "./sectionProblem.module.css";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

interface Section6Props {
    description: any;
}

const SectionProblem: React.FC<Section6Props> = ({ description  }) => {
    return (
        <section className={styles.section}>
            <Box className={styles.container}>
                <Typography className={styles.title}>Problem</Typography>
                <Box className={styles.parentDescription}>
                    <Typography className={styles.description}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </section>
    );
};

export default SectionProblem;
