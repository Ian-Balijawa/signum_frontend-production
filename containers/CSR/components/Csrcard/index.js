import Image from "next/image";
import styles from "./style.module.css";

const Csrcard = ({ image, title, date, heading, content }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <Image src={image} width={500} height={300} alt="csr image" />
        </div>
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <div className={styles.headingContainer}>
              <article style={{ flex: "1" }}>
                <h4>{title}</h4>
              </article>
              <article>
                <span>{date}</span>
              </article>
            </div>
            <hr />
            <p className={styles.heading}>{heading}</p>
            <p className={styles.text}>{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Csrcard;
