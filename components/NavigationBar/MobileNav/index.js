import styles from './style.module.css';
import { pathsArray } from '@/constants/sitepaths';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SignumLogo from '@/components/SignumLogo';

const MobileNavBar = () => {
  const filteredPaths = pathsArray
    .filter((path) => path.path !== '/')
    .filter((p) => !p.hide);

  return (
    <div className={styles.mobilemenuContainer}>
      <div className={styles.menulist}>
        <div className={styles.navlogo}>
          <Link href="/">
            <SignumLogo size={1.8} />
          </Link>
        </div>
        <div className={styles.navmenu}>
          <div>
            <ul className={styles.list}>
              {filteredPaths.map((menu, index) => {
                return (
                  <Link href={menu.path} key={`${index}_${menu.id}`}>
                    <li
                      key={`${index}_${menu.id}_${index}`}
                      className={styles.nav_item}
                    >
                      {menu.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className={styles.feature}>
            <h2>Featured Insights</h2>
            <article>
              <button className={styles.featurebutton}>Oil & Gas</button>
              <p>
                Uganda’s Oil bill and how it affects Regional & International
                trade
              </p>
            </article>
            <article>
              <button className={styles.featurebutton}>Oil & Gas</button>
              <p>
                Uganda’s Oil bill and how it affects Regional & International
                trade
              </p>
            </article>
            <article>
              <button className={styles.featurebutton}>Oil & Gas</button>
              <p>
                Uganda’s Oil bill and how it affects Regional & International
                trade
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
