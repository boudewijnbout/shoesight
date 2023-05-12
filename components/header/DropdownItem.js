import classes from "../../src/styles/Header.module.css";
import Link from "next/link";

function DropdownItem(props) {
  return (
    <>
      <li>
        <Link className={classes.linkTitle} href={props.link}>
          {props.name}
        </Link>
      </li>
    </>
  );
}

export default DropdownItem;
