import styles from "./style.module.css";

function CardItem({ title, text, number, className }) {
  return (
    <div className={`${styles.card_container} ${className}`}>
      <h2>
        <span>{number}</span>
        &nbsp; {title}
      </h2>
      <p>{text}</p>
    </div>
  );
}

export default CardItem;
