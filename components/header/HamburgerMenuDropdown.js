import classes from "./HamburgerMenu.module.css";

import { useState } from "react";

function HamburgerMenuDropdown(props) {
  const [open, setOpen] = useState(false);
  console.log(props);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.name}
      </button>
      {open && <ul className={classes.dropdown}>{props.children}</ul>}
    </>
  );
}

export default HamburgerMenuDropdown;
