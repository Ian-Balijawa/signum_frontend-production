import React, { useMemo } from "react";
import styles from "./style.module.css";
import { DUMMY_IMAGESDATA } from "@/constants/imagedata";

const CareerIntro = ({ text, partnerImages }) => {
  const imageStyle = useMemo(() => {
    if (!partnerImages?.length) {
      return null;
    } else {
      const interval = 100 / partnerImages.length;
      const backgroundPosition = partnerImages
        .map((p, index) => `${index * interval}% 50%`)
        .join(", ");

      return {
        /* background-position: left center right; */
        backgroundRepeat: "no-repeat",
        backgroundSize: `${interval}% auto`,
        backgroundPosition,
        backgroundImage: `${partnerImages
          .map((pt) => `url("${pt.image_url}")`)
          .join(", ")}`,
      };
    }
  }, [partnerImages]);

  return (
    <>
      <div className={styles.careerContainer}>
        <article>
          <h1 style={imageStyle}>Careers.</h1>
          <p>{text}</p>
        </article>
      </div>
    </>
  );
};

export default CareerIntro;
