import classes from "./HamburgerMenu.module.css";
import Link from "next/link";

function HamburgerMenuDropdownItem(props) {
  return (
    <li>
      <Link className={classes.linkTitle} href={props.link}>
        {props.linkName}
      </Link>
    </li>
  );
}

export default HamburgerMenuDropdownItem;
