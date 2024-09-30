"use client";

import { Box, Container, Stack } from "@mui/material";
import globals from "@/app/globals.module.css";
import styles from "./styles.module.css";
import { useState } from "react";
import Image from "next/image";
import Slider from "@/components/slider";
import Link from "next/link";
import Iconify from "@/components/iconify";

const labels = [
  "Alle",
  "mobile",
  "front-end",
  "back-end",
  "cloud",
  "CMS",
];

const data = {
  Alle: [
    {
      icon: "/assets/tech/iOS.svg",
      label: "iOS",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
    },
    {
      icon: "/assets/images/cases/node.png",
      label: "Node JS",
    },
    {
      icon: "/assets/images/cases/spring.png",
      label: "Spring boot",
    },
    {
      icon: "/assets/images/cases/net.png",
      label: ".Net Core",
    },
    {
      icon: "/assets/images/cases/flutter.svg",
      label: "Flutter",
    },
    {
      icon: "/assets/images/cases/vue.png",
      label: "Vue JS",
    },
    {
      icon: "/assets/images/cases/angular.png",
      label: "Angular",
    }

  ],
  mobile: [
    {
      icon: "/assets/tech/iOS.svg",
      label: "iOS",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
    },
    {
      icon: "/assets/images/cases/flutter.svg",
      label: "Flutter",
    }
  ],
  "front-end": [

    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
    },
    {
      icon: "/assets/images/cases/vue.png",
      label: "Vue JS",
    },
    {
      icon: "/assets/images/cases/angular.png",
      label: "Angular",
    }

  ],
  "back-end": [
    {
      icon: "/assets/images/cases/node.png",
      label: "Node JS",
    },
    {
      icon: "/assets/images/cases/spring.png",
      label: "Spring boot",
    },
    {
      icon: "/assets/images/cases/net.png",
      label: ".Net Core",
    }

  ],

  cloud: [
    {
      icon: "/assets/images/cases/microsoft-azure.svg",
      label: "Microsoft Azure",
    }
  ],
  CMS: [
    {
      icon: "/assets/images/cases/wordpress.png",
      label: "Wordpress",
    },
  ],
};

export default function HomeTechSet() {
  const [tab, setTab] = useState<string>(labels[0]);

  return (
    <Box
      className={globals.card_container}
      sx={{ py: "var(--section-py)", bgcolor: "var(--primary-light)" }}
    >
      <Container>
        <h2 className={globals.headding}>Technologie</h2>
        <p className={globals.sub_headding}>
          Kooperieren Sie mit kompetenten IT-Experten im Bereich der{" "}
          <a  target="_blank">
            Web
          </a>{" "}
          und{" "}
          <a  target="_blank">
            mobilen
          </a>{" "}
          Softwareentwicklung. Als vertrauenswürdiger Technologie- und Geschäftspartner setzen wir die fortschrittlichsten Technologien, Frameworks und Komponenten ein, um Software zu entwickeln, die sowohl durch ein solides und effektives {" "}
          <a  target="_blank">
            Back-End
          </a>{" "}
          als auch durch eine intuitive{" "}
          <a  target="_blank">
            UI/UX
          </a>{" "}
           überzeugt.
        </p>

        <div className={styles.labels}>
          <Stack direction={"row"} gap={1} flexWrap="wrap">
            {labels.map((label) => (
              <button
                className={`${globals.button} ${styles.button} ${
                  label === tab ? styles.active : ""
                }`}
                onClick={() => setTab(label)}
                key={label}
              >
                {label}
              </button>
            ))}
          </Stack>
        </div>

        {labels.map((item) => (
          <div
            className={styles.content}
            style={{
              display: item === tab ? "block" : "none",
            }}
            key={item}
          >
            <Slider
              slidesPerView={2}
              spaceBetween={10}
              style={{
                ["--swiper-navigation-color" as any]: "var(--primary-dark)",
              }}
              breakpoints={{
                545: {
                  slidesPerView: 3,
                },
                900: {
                  slidesPerView: 5,
                },
              }}
              slides={data[tab as keyof typeof data].map((item) => (
                <div className={styles.card_wrapper} key={item.label}>
                  <a  className={styles.card}>
                    <Image
                      className={styles.icon}
                      src={item.icon}
                      width={60}
                      height={60}
                      alt={item.label}
                    />
                    <h3 className={styles.label}>{item.label}</h3>
                  </a>
                </div>
              ))}
            />
          </div>
        ))}

      </Container>
    </Box>
  );
}
