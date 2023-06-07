import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";

import styles from "@/styles/components/header/Header.module.css";

// Components
import SocialMediaIcons from "../SocialMediaIcons";
import NavMenu from "./NavMenu";
import Searchbar from "./Searchbar";
import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
    setNavbarVisible(isVisible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [[]]);

  return (
    <header
      className={`${styles.header} ${!isNavbarVisible ? styles.active : ""}`}
    >
      {/* Logo text */}
      <div className={styles.headerLogo}>
        <h1>Shoesight</h1>
        <h2>Always keep your eyes at the prize</h2>
      </div>

      {/* Header items */}
      <div
        className={`${styles.headerItems} ${
          !isNavbarVisible ? styles["active"] : ""
        }`}
      >
        {/* Social media icons */}
        <SocialMediaIcons />

        {/* Navigation menu */}
        <NavMenu />

        {/* SearchBar */}
        <Searchbar />

        {/* Hamburger icon (mobile) */}
        <HamburgerIcon />
      </div>
    </header>
  );
};

export default Header;
