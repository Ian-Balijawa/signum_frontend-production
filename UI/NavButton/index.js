import Button from "@/UI/Button";
import styles from "./style.module.css";
import Link from "next/link";
import { HiPlus } from "react-icons/hi";

const NavButton = ({ className, href }) => {
  return (
    <Link href={`${href}`} passHref={true}>
      <Button className={`${styles.button} ${className}`}>
        LEARN MORE
        <HiPlus size={18} className={styles.icon} />
      </Button>
    </Link>
  );
};

export default NavButton;
