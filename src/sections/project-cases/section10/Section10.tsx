import React from "react";
import styles from "./section10.module.css";
import Image from "next/image";
import { Box } from "@mui/material";
interface Section11Props {
  title: string;
  imageUrl: string;
  caseUrl: any;
  title2: string;
  imageUrl2: string;
  caseUrl2: any;
}
const Section10: React.FC<Section11Props> = ( {title, caseUrl, imageUrl, title2, imageUrl2, caseUrl2}) => {
  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <article className={styles["Item-module--gridItems--ef819"]}>
          <Box className={styles["ProjectGalleryCard-module--item--d0f20"]}>
            <a
              className={
                styles["ProjectGalleryCard-module--pictureWrapper--b2b15"]
              }
              href={caseUrl}
            >
              <picture
                className={styles["ProjectGalleryCard-module--picture--7ce08"]}
              >
                <source
                  data-srcset={imageUrl}
                  media="(max-width: 544px)"
                  type="image/webp"
                />
                <source
                  data-srcset={imageUrl}
                  media="(max-width: 544px)"
                />
                <source
                  data-srcset={imageUrl}
                  type="image/webp"
                />
                <source data-srcset={imageUrl} />
                <Image
                  className={`${styles["ProjectGalleryCard-module--img--11f55"]} ${styles["Image-module--img--b87cd"]} lazyloaded`}
                  alt="UI/UX Redesign for Airline SaaS preview"
                  src={imageUrl}
                  width={500} // Set appropriate width
                  height={300} // Set appropriate height
                />
              </picture>
            </a>
            <Box
              className={styles["ProjectGalleryCard-module--content--513b2"]}
            >

              <a
                className={styles["ProjectGalleryCard-module--title--f49ae"]}
                href={caseUrl}
              >
                {title}
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
              href={caseUrl2}
            >
              <picture
                className={styles["ProjectGalleryCard-module--picture--7ce08"]}
              >
                <source
                  data-srcset={imageUrl2}
                  media="(max-width: 544px)"
                  type="image/webp"
                />
                <source
                  data-srcset={imageUrl2}
                  media="(max-width: 544px)"
                />
                <source
                  data-srcset={imageUrl2}
                  type="image/webp"
                />
                <source data-srcset={imageUrl2} />
                <Image
                  className={`${styles["ProjectGalleryCard-module--img--11f55"]} ${styles["Image-module--img--b87cd"]} lazyloaded`}
                  alt="UI/UX Redesign for Airline SaaS preview"
                  src={imageUrl2}
                  width={500}
                  height={300}
                />
              </picture>
            </a>
            <Box
              className={styles["ProjectGalleryCard-module--content--513b2"]}
            >
              <a
                className={styles["ProjectGalleryCard-module--title--f49ae"]}
                href={caseUrl2}
              >
                {title2}
              </a>
            </Box>
          </Box>
        </article>
      </Box>
    </section>
  );
};

export default Section10;
