import classes from "./HamburgerMenu.module.css";

import { useState } from "react";

function HamburgerMenuDropdown(props) {
  const [open, setOpen] = useState(false);
  console.log(props);
  return (
    <>
      <li className={classes.linkTitle}>
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {props.name}
        </button>
        {open && <ul className={classes.dropdown}>{props.children}</ul>}
      </li>
    </>
  );
}

export default HamburgerMenuDropdown;
