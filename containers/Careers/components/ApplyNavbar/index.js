import styles from "./style.module.css";
import Link from "next/link";

const ApplyNavbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_content}>
          <div className={styles.pageLink}>
            <Link href="">Apply</Link>
          </div>
          <div className={styles.pageDescription}>
            <p>
              If you are interested in applying for a position with Signum
              Advocates , we invite you to submit your application through the
              form on this page. Please include your resume, as well as any
              additional materials that you believe may be relevant to your
              application.
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ApplyNavbar;
