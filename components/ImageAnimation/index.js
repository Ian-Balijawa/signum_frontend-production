import styles from "./style.module.css";
import { DUMMY_IMAGESDATA } from "@/constants/imagedata";
import AnimatedImage from "../AnimatedImage";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const AnimationComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % DUMMY_IMAGESDATA.length
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="animation_container">
      <div className="vertical_line">
        {DUMMY_IMAGESDATA.map((part, index) => (
          <Image
            key={part.id}
            className={`animated_image ${
              index === currentImageIndex ? "active" : ""
            }`}
            src={part.image}
            alt={`Image ${index}`}
          />
        ))}
      </div>
      <div className="vertical_line">
        {DUMMY_IMAGESDATA.map((part, index) => (
          <Image
            key={part.id}
            className={`animated_image ${
              index === (currentImageIndex + 1) % DUMMY_IMAGESDATA.length
                ? "active"
                : ""
            }`}
            src={part.image}
            alt={`Image ${index}`}
          />
        ))}
      </div>
      <div className="vertical_line">
        {DUMMY_IMAGESDATA.map((part, index) => (
          <Image
            key={part.id}
            className={`animated_image ${
              index === currentImageIndex ? "active" : ""
            }`}
            src={part.image}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimationComponent;
