import React from "react";
import Image from "next/image";
import styles from "./ScrollingLogos.module.scss";
import {
  asu,
  gvsu,
  insper,
  nyu,
  princeton,
  rice,
  ubc,
  ucdavis,
  uvic,
  york,
} from "../lib/images/universities";

const UNIVERSITY_LOGOS = [
  // Ordered by (subjectively) most to least well-known
  { alt: "Princeton University", src: princeton },
  //   { alt: "University of Michigan", src: michigan },
  //   { alt: "University of Illinois at Urbana-Champaign", src: illinois },
  { alt: "Rice University", src: rice },
  { alt: "New York University", src: nyu },
  { alt: "University of California, Davis", src: ucdavis },
  { alt: "Arizona State University", src: asu },
  { alt: "University of British Columbia", src: ubc },
  //   { alt: "University of California, Santa Barbara", src: ucsb },
  //   { alt: "University of California, San Diego", src: ucsd },
  { alt: "University of York", src: york },
  { alt: "University of Victoria", src: uvic },
  { alt: "Grand Valley State University", src: gvsu },
  { alt: "Insper", src: insper },
];

const ScrollingLogos: React.FC = () => {
  return (
    <div className={styles.scrollingContainer}>
      <div className={styles.scrollingTrack}>
        {UNIVERSITY_LOGOS.map((logo, index) => (
          <div key={`first-${index}`} className={styles.logoItem}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              style={{
                objectFit: "contain",
                maxHeight: "60px",
                width: "auto",
              }}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {UNIVERSITY_LOGOS.map((logo, index) => (
          <div key={`second-${index}`} className={styles.logoItem}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              style={{
                objectFit: "contain",
                maxHeight: "60px",
                width: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
