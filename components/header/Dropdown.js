import classes from "../../src/styles/Header.module.css";
import Link from "next/link";
import DropdownItem from "/components/header/DropdownItem";
function Dropdown(props) {
  return (
    <>
      <ul className={classes.dropdownItems}>{props.children}</ul>
    </>
  );
}

export default Dropdown;
