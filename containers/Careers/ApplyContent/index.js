import Contactcard from "@/components/Contactcard";
import Navbar from "@/components/Navbar";
import ApplyNavbar from "../components/ApplyNavbar";
import Form from "../components/Form";
import styles from "./style.module.css";

const ApplyContent = () => {
  return (
    <>
      <ApplyNavbar />
      <div className={styles.applyContainer}>
        <Contactcard className={styles.cardContainer} />
        <Form className={styles.form} />
      </div>
    </>
  );
};

export default ApplyContent;
