import React from "react";
//import styles from "./style.module.css";

const AnimatedImage = ({ src, reverse }) => {
  return (
    <div className={`animated_image ${reverse ? "reverse" : ""}`}>
      <img src={src} alt="image" />
    </div>
  );
};

export default AnimatedImage;
