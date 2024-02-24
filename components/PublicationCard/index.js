import styles from "./style.module.css";

const PublicationsCard = ({
  date,
  title,
  description,
  subHeading,
  className,
}) => {
  return (
    <div className={`${styles.outerContainer} ${className}`}>
      <div className={styles.innerContainer}>
        <div className={styles.headingContainer}>
          <article>
            <h4>{title}</h4>
          </article>
          <article>
            <span>{date}</span>
          </article>
        </div>
        <hr />
        <p className={styles.subHeading}>{subHeading}</p>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
};

export default PublicationsCard;
