import Link from 'next/link';
import styles from './style.module.css';
import React, { useState } from 'react';
import SignumLogo from '../SignumLogo';
import { BiMenu } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { pathsArray } from '@/constants/sitepaths';
import MobileNavBar from '../NavigationBar/MobileNav';

const NavigateBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <SignumLogo size={1.8} />
        </Link>
      </div>

      <div className={styles.navLinkContainer}>
        <ul className={`${styles.menulist} ${styles.desktopMenu}`}>
          {pathsArray
            .filter((p) => !p.hide)
            .map((menu) => {
              return (
                <Link
                  href={menu.path}
                  className={styles.nav_links}
                  key={menu.id}
                >
                  <li className={styles.nav_item}>{menu.name}</li>
                </Link>
              );
            })}
        </ul>
      </div>

      <div className={`${styles.hamburgerMenuContainer} ${styles.mobileMenu}`}>
        <BiMenu size={30} onClick={openMenu} className={styles.menuicon} />
      </div>

      {showMenu && (
        <div className={styles.overlayMenu}>
          <div className={styles.closeButtonCase}>
            <CgClose size={30} onClick={closeMenu} color="#950019" />
          </div>
          <div onClick={closeMenu}>
            <MobileNavBar />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigateBar;
