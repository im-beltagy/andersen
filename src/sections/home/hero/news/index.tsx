"use client";

import styles from "./styles.module.css";
import Slider from "@/components/slider";
import { useEffect, useState } from "react";

export default function HomeNews() {
  const [slides, setSlides] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      setSlides(
        Array.from({ length: 18 }).map((_, index) => (
          <div
            className={styles.card}
            onClick={() => console.log(index)}
            role="button"
            key={index}
          >
            <p className={styles.title}>Jun 14, 2024</p>
            <h4 className={styles.content}>
              Andersen Sponsors Digital Uzbekistan 2024 Forum
            </h4>
          </div>
        ))
      );
    }, 1000);
  }, []);

  if (slides) return <Slider slides={slides} />;

  return "Loading...";
}
