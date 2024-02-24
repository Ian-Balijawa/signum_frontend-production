import Image from "next/image";
import styles from "./style.module.css";
import { BiTime } from "react-icons/bi";

const Careercard = ({ career, onClick }) => {
  return (
    <>
      <div className={styles.card}>
        <h2>{career.title}</h2>
        <p>{career.description}</p>
        <p>
          <BiTime className={styles.timeicon} />
          {career.date}
        </p>
        <button onClick={() => onClick(career)}>
          More details
          <span>
            <Image
              src="/Images/arrow_right.svg"
              height={15}
              width={15}
              className={styles.icon}
              alt="direction arrow"
            />
          </span>
        </button>
      </div>
    </>
  );
};

export default Careercard;
