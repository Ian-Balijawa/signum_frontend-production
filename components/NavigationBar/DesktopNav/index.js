import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./style.module.css";
import NavButton from "@/UI/NavButton";
import { FaArrowRight } from "react-icons/fa";
import Colors from "@/constants/colors";
import redSlantingLines from "@/assets/svgs/red_lines.svg";
import whiteSlantingLines from "@/assets/svgs/white_lines.svg";
import NavigateBar from "@/components/NavigateBar";

const DesktopBar = () => {
  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight * 0.8,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <div className={styles.backgroundImage}>
        <NavigateBar />
        <div className={styles.slantingLines}>
          <Image
            src={redSlantingLines}
            className={styles.redSlantingLines}
            alt="red slanting lines"
          />
          <Image
            src={whiteSlantingLines}
            className={styles.whiteSlantingLines}
            alt="white slanting lines"
          />
        </div>

        <div className={styles.content_container}>
          <p>WE ARE</p>
          <h1 style={{ fontWeight: "bold" }}>SIGNUM</h1>
          <span>
            Signum Advocates is a modern and innovative business law firm whose
            core purpose is to nurture growth and offer peace of mind. We strive
            to meet the ever-changing, unique, and diverse needs of our clients
            hence earmarking us as &#34;the preferred corporate firm of
            choice&#34;.
          </span>
          <NavButton href="/about" />
        </div>

        <button className={styles.scroll_down} onClick={scrollDown}>
          Scroll down
          <FaArrowRight
            color={Colors.white}
            size={18}
            style={{ marginLeft: 10 }}
          />
        </button>
      </div>
    </nav>
  );
};

export default DesktopBar;
