import classes from "./HamburgerMenu.module.css";

import { useState } from "react";

const HamburgerDropdown = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.title}
      </button>
      {open && <ul className={classes.dropdown}>{props.children}</ul>}
    </>
  );
};

export default HamburgerDropdown;
