import classes from "./HamburgerMenu.module.css";
import HamburgerNav from "./HamburgerNav";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={classes.mobileNav}>
        <button
          type="button"
          className={classes.container}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Hamburger size={35} color="#000000" rounded />
        </button>

        {open && <HamburgerNav />}
      </nav>
    </>
  );
};

export default HamburgerMenu;
