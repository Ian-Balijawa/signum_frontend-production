import Link from "next/link";
import styles from "./style.module.css";

const ExpertButton = ({ className, href, children }) => {
  return (
    <Link href={`${href}`} passHref={true}>
      <button className={`${styles.button} ${className}`}>{children}</button>
    </Link>
  );
};

export default ExpertButton;
