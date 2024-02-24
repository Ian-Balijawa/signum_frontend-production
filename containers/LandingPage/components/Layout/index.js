import NavButton from "@/UI/NavButton";
import styles from "./style.module.css";

const Layout = ({ title, className, text, href }) => {
  return (
    <div className={`${styles.content} ${className}`}>
      <h2>{title}</h2>
      <p>{text}</p>
      <NavButton className={styles.button} href={href} />
    </div>
  );
};

export default Layout;
