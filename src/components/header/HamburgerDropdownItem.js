import classes from "../../styles/components/header/HamburgerDropdown.module.css";
import Link from "next/link";

const HamburgerDropdownItem = (props) => {
  return (
    <li>
      <Link className={classes.linkTitle} href={props.link}>
        {props.linkTitle}
      </Link>
    </li>
  );
};

export default HamburgerDropdownItem;
