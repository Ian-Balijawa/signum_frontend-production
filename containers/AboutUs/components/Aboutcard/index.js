import styles from "./style.module.css";

const AboutusCard = ({ title, text }) => {
  return (
    <>
      <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <article>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default AboutusCard;
