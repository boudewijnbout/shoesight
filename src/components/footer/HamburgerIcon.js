import styles from "../../styles/components/header/HamburgerIcon.module.css";
import MobileNav from "./MobileNav";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  const animate = () => {
    setAnimation(true);
  };

  return (
    <>
      <button
        className={styles.hamburgerIcon}
        type="button"
        onClick={() => {
          setOpen(!open);
          animate();
        }}
      >
        <Hamburger size={32} color="#000000"  rounded />
      </button>

      {open && (
        <MobileNav open={open} />
      )}
    </>
  );
};

export default HamburgerMenu;
