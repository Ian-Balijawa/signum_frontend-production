import styles from "./style.module.css";
import { BsPlusCircle } from "react-icons/bs";
import ExpertButton from "@/UI/ExpertButton";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";

const Aboutuscase = ({ title }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className={styles.content} data-aos="fade-right">
      <h2>{title}</h2>
      <p>
        Signum Advocates is a modern and innovative business law firm whose core
        purpose is to nurture growth and offer peace of mind. We strive to meet
        the ever-changing, unique, and diverse needs of our clients hence
        earmarking us as "the preferred corporate firm of choice". Signum's
        philosophy is to add value to the transactions/briefs on which the firm
        works by being more than just providers of legal advice.
      </p>
      <ExpertButton className={styles.button} href="/practices">
        View our Expertise <BsPlusCircle className={styles.icon} />
      </ExpertButton>
    </div>
  );
};

export default Aboutuscase;
