import { DUMMY_CAREERDATA } from "@/constants/careerdata";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import styles from "./style.module.css";

const Careermodal = ({ onClose, career }) => {
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, onClose]);

  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.modal} ref={modalRef}>
          <h2>{career.title}</h2>
          <p className={styles.modaltext}>{career.description}</p>
          <br />
          <h4
            style={{
              color: "#55555",
              fontSize: "1.5rem",
              lineHeight: "24px",
            }}
          >
            Roles
          </h4>
          <br />
          <ul className={styles.rolelist}>
            {career.roles.map((role) => (
              <li>{role}</li>
            ))}
          </ul>
          <br />
          <article>
            <span className={styles.date}>{career.date}</span>
            <Link href={`/careers/apply}`}>
              <button className={styles.button} onClick={onClose}>
                Click here to Apply
              </button>
            </Link>
          </article>
        </div>
      </div>
    </>
  );
};

export default Careermodal;
