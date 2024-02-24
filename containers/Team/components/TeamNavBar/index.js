import SignumLogo from "@/components/SignumLogo";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { BiMenu } from "react-icons/bi";
import styles from "./style.module.css";
import useToggle from "@/utils/toggleMenu";
import MobileNavBar from "@/components/NavigationBar/MobileNav";

const TeamNavBar = () => {
  const { isMenuOpen, toggleMenuButton, closeMobileNavbar, toggleVisibile } =
    useToggle(true);

  return (
    <>
      <nav className={styles.nav}>
        {/* <button className="menu_icon" onClick={toggleVisibile}>
          {isMenuOpen ? (
            <BiMenu color="#ffffff" size={44} onClick={toggleMenuButton} />
          ) : (
            <CgClose color="#950019" size={44} onClick={toggleMenuButton} />
          )}
        </button> */}
        {isMenuOpen ? (
          <div className={styles.nav_content}></div>
        ) : (
          <MobileNavBar closeMobileNavbar={closeMobileNavbar} />
        )}
      </nav>
    </>
  );
};

export default TeamNavBar;
