import classes from "./HamburgerMenu.module.css";
import HamburgerNav from "./HamburgerNav";
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
      <nav className={classes.mobileNav}>
        <button
          type="button"
          className={classes.container}
          onClick={() => {
            setOpen(!open);
            animate();
          }}
        >
          <Hamburger size={32} color="#000000" rounded />
        </button>

        {open && (
          <HamburgerNav
            class={animation ? classes.animation : classes.hamburgerNav}
          />
        )}
      </nav>
    </>
  );
};

export default HamburgerMenu;
