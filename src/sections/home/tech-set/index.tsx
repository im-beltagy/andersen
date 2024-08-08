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
  "popular",
  "mobile",
  "front-end",
  "back-end",
  "database",
  "cloud",
  "CMS",
];

const data = {
  popular: [
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
  ],
  mobile: [
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
  ],
  "front-end": [
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
  ],
  "back-end": [
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
  ],
  database: [
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
  ],
  cloud: [
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
  ],
  CMS: [
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/IOS.svg",
      label: "iOS",
      href: "#",
    },
    {
      icon: "/assets/tech/Android.svg",
      label: "Android",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
    },
    {
      icon: "/assets/tech/React.svg",
      label: "React.js",
      href: "#",
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
        <h2 className={globals.headding}>Technology set</h2>
        <p className={globals.sub_headding}>
          Cooperate with competent and knowledgeable IT experts in{" "}
          <a href="/services/web-development" target="_blank">
            web
          </a>{" "}
          and{" "}
          <a href="/services/mobile-development" target="_blank">
            mobile
          </a>{" "}
          software engineering. As a trusted tech and business partner, we apply
          the most advanced technologies, frameworks, and components to build
          software notable for both its solid and effective{" "}
          <a href="/find-developers/back-end" target="_blank">
            back-end
          </a>{" "}
          with intuitive{" "}
          <a href="/services/design-studio" target="_blank">
            UI/UX
          </a>
          .
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
                  <a href="#" className={styles.card}>
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

        <Link href="#" className={styles.link}>
          <span>Assemble a software development team</span>
          <Iconify icon="material-symbols:arrow-right-alt-rounded" />
        </Link>
      </Container>
    </Box>
  );
}
