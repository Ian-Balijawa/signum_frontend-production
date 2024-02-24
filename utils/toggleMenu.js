import { useState } from "react";

function useToggle(initialState = true) {
  const [showDesktopMenu, setshowDesktopMenu] = useState(initialState);
  const [isMenuOpen, setIsMenuOpen] = useState(initialState);

  const toggleVisibile = () => {
    setshowDesktopMenu(!showDesktopMenu);
  };

  const toggleMenuButton = () => {
    setIsMenuOpen(!isMenuOpen);
    setshowDesktopMenu(!true);
  };

  const closeMobileNavbar = () => {
    setshowDesktopMenu(true);
    setIsMenuOpen(true);
  };

  return {
    showDesktopMenu,
    isMenuOpen,
    toggleMenuButton,
    closeMobileNavbar,
    toggleVisibile,
  };
}

export default useToggle;
