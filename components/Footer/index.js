import styles from "./style.module.css";
import Link from "next/link";
import { sitePaths } from "@/constants/sitepaths";
import { useRouter } from "next/router";

function Footer({ className }) {
  const router = useRouter();

  // const Title = pathsArray.find((it) => it.path === router.pathname);
  return (
    <footer className={`${styles.footer} ${className}`}>
      <h4>
        <span>&#8226; </span> NEED TO CONNECT?
      </h4>
      <section className={`${styles.footer_content}`}>
        <div className={styles.contact_section}>
          <h1>Let’s Talk</h1>
        </div>
        <div className={`${styles.footerlink_container}`}>
          <ul>
            <li>
              <Link href={sitePaths.Home.path}>{sitePaths.Home.name}</Link>
            </li>
            <li>
              <Link href={sitePaths.Team.path}>{sitePaths.Team.name}</Link>
            </li>
            {/* <li>
              <Link href={sitePaths.Publications.path}>
                {sitePaths.Publications.name}
              </Link>
            </li> */}
          </ul>
          <ul>
            <li>
              <Link href={sitePaths.AboutUs.path}>
                {sitePaths.AboutUs.name}
              </Link>
            </li>
            <li>
              <Link href={sitePaths.Practices.path}>
                {sitePaths.Practices.name}
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.copyright}>
        <p>© 2023 Signum Associates</p>
        <span>Privacy</span>
        <span>T&C’s</span>
      </section>
    </footer>
  );
}

export default Footer;
