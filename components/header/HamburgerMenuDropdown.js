import classes from "./HamburgerMenu.module.css";
import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";
import HamburgerMenuDropdownItem from "/components/header/HamburgerMenuDropdownItem";
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
