import styles from "./style.module.css";

const Button = (props) => {
  return (
    <button className={`${styles.button} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
