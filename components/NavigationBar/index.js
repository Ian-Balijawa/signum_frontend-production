import React, { useState, useEffect } from "react";
import DesktopBar from "./DesktopNav";

const NavigationBar = () => {
  //const [showDesktopMenu, setshowDesktopMenu] = useState(true);
  // const [isMenuOpen, setIsMenuOpen] = useState(true);

  // const toggleVisibile = () => {
  //   setshowDesktopMenu(!showDesktopMenu);
  // };

  // const toggleMenuButton = () => {
  //   setIsMenuOpen(!isMenuOpen);
  //   setshowDesktopMenu(!true);
  // };

  // const closeMobileNavbar = () => {
  //   setshowDesktopMenu(true);
  //   setIsMenuOpen(true);
  // };

  return (
    <>
      <div>
        {/* <button className={styles.menu_icon} onClick={toggleVisibile}>
          {isMenuOpen ? (
            <BiMenu onClick={toggleMenuButton} size={44} />
          ) : (
            <CgClose onClick={toggleMenuButton} color="#950019" />
          )}
        </button> */}
        <DesktopBar />
      </div>
    </>
  );
};

export default NavigationBar;
