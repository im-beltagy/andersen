import React from "react";
import styles from "./section10.module.css";
import Image from "next/image";
import { Box } from "@mui/material";

const Section10 = () => {
  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <article className={styles["Item-module--gridItems--ef819"]}>
          <Box className={styles["ProjectGalleryCard-module--item--d0f20"]}>
            <a
              className={
                styles["ProjectGalleryCard-module--pictureWrapper--b2b15"]
              }
              href="/project-cases/ui-ux-redesign-saas-airlines-loyalty-management"
            >
              <picture
                className={styles["ProjectGalleryCard-module--picture--7ce08"]}
              >
                <source
                  data-srcset="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/mobile_webp/1712317953.webp 1x"
                  media="(max-width: 544px)"
                  type="image/webp"
                />
                <source
                  data-srcset="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/mobile/1712317946.jpg 1x"
                  media="(max-width: 544px)"
                />
                <source
                  data-srcset="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/desktop_webp/1712317943.webp 1x"
                  type="image/webp"
                />
                <source data-srcset="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/desktop/1712317939.jpg 1x" />
                <Image
                  className={`${styles["ProjectGalleryCard-module--img--11f55"]} ${styles["Image-module--img--b87cd"]} lazyloaded`}
                  alt="UI/UX Redesign for Airline SaaS preview"
                  src="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/desktop_webp/1712317943.webp"
                  width={500} // Set appropriate width
                  height={300} // Set appropriate height
                />
              </picture>
            </a>
            <Box
              className={styles["ProjectGalleryCard-module--content--513b2"]}
            >
              <Image
                className={`${styles["ProjectGalleryCard-module--logo--75429"]} lazyloaded`}
                src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/nda.svg"
                alt="UI/UX Redesign for Airline SaaS logo"
                width={50} // Set appropriate width
                height={50} // Set appropriate height
              />
              <a
                className={styles["ProjectGalleryCard-module--title--f49ae"]}
                href="/project-cases/ui-ux-redesign-saas-airlines-loyalty-management"
              >
                UI/UX Redesign for Airline SaaS
              </a>
            </Box>
          </Box>
        </article>
        <article className={styles["Item-module--gridItems--ef819"]}>
          <Box className={styles["ProjectGalleryCard-module--item--d0f20"]}>
            <a
              className={
                styles["ProjectGalleryCard-module--pictureWrapper--b2b15"]
              }
              href="/project-cases/ui-ux-redesign-saas-airlines-loyalty-management"
            >
              <picture
                className={styles["ProjectGalleryCard-module--picture--7ce08"]}
              >
                <source
                  data-srcset="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/mobile_webp/1712317953.webp 1x"
                  media="(max-width: 544px)"
                  type="image/webp"
                />
                <source
                  data-srcset="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/mobile/1712317946.jpg 1x"
                  media="(max-width: 544px)"
                />
                <source
                  data-srcset="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/desktop_webp/1712317943.webp 1x"
                  type="image/webp"
                />
                <source data-srcset="https://content.andersenlab.com/case/ui-ux-redesign-saas-airlines-loyalty-management/preview/desktop/1712317939.jpg 1x" />
                <Image
                  className={`${styles["ProjectGalleryCard-module--img--11f55"]} ${styles["Image-module--img--b87cd"]} lazyloaded`}
                  alt="UI/UX Redesign for Airline SaaS preview"
                  src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/avacanet_camino/preview-shots/medium.webp"
                  width={500}
                  height={300}
                />
              </picture>
            </a>
            <Box
              className={styles["ProjectGalleryCard-module--content--513b2"]}
            >
              <Image
                className={`${styles["ProjectGalleryCard-module--logo--75429"]} lazyloaded`}
                src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/nda.svg"
                alt="UI/UX Redesign for Airline SaaS logo"
                width={50}
                height={50}
              />
              <a
                className={styles["ProjectGalleryCard-module--title--f49ae"]}
                href="/project-cases/ui-ux-redesign-saas-airlines-loyalty-management"
              >
                UI/UX Redesign for Airline SaaS
              </a>
            </Box>
          </Box>
        </article>
      </Box>
    </section>
  );
};

export default Section10;
