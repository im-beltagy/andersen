import React from "react";
import styles from "./section6.module.css";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

interface Section6Props {
    description: any;
}

const Section6: React.FC<Section6Props> = ({ description }) => {
    return (
        <section className={styles.section}>
            <Box className={styles.container}>
                <Typography className={styles.title}>Lösung</Typography>
                <Box className={styles.parentDescription}>
                    <Image
                        src="https://static.andersenlab.com/andersenlab/new-andersensite/icons/brand/hint.svg"
                        alt="hint"
                        width={40}
                        height={40}
                    />
                    <Typography className={styles.description}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </section>
    );
};

export default Section6;
