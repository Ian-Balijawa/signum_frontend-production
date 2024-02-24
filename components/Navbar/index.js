import { pathsArray } from '@/constants/sitepaths';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './style.module.css';

const Navbar = () => {
  const router = useRouter();
  const [page, setPage] = useState('');
  const [desc, setDesc] = useState('');
  const [shortdesc, setshortDesc] = useState('');
  const [showBackground, setshowBackground] = useState(false);

  useEffect(() => {
    const filteredPaths = pathsArray
      .filter((path) => path.path !== '/')
      .filter((p) => !p.hide);
    const specificPage = filteredPaths.find((path) =>
      router.pathname.includes(path.path),
    );
    setPage(specificPage.name);
    setshowBackground(
      ['/publications', '/csr', '/careers'].includes(specificPage.path),
    );
    console.log('Router is', router);
  }, [router]);

  useEffect(() => {
    const filteredPaths = pathsArray
      .filter((path) => path.path !== '/')
      .filter((p) => !p.hide);
    const specificPageDesc = filteredPaths.find((path) =>
      router.pathname.includes(path.path),
    );
    setDesc(specificPageDesc.longDesc);
    setshortDesc(specificPageDesc.shortDesc);
  }, [router.pathname]);

  return (
    <nav
      className={`${styles.nav} ${showBackground ? styles.withBackground : ''}`}
    >
      <div className={styles.nav_content}>
        <div className={styles.pageLink}>
          <Link href="">{page}</Link>
        </div>
        <div className={styles.pageDescription}>
          <p className={styles.longDesc}>{desc}</p>
          <p className={styles.shortDesc}>{shortdesc}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
