import classes from "../../src/styles/Header.module.css";
import Link from "next/link";

const DropdownItem = (props) => {
  return (
    <>
      <Link className={classes.linkTitle} href={props.link}>
        {props.name}
      </Link>
    </>
  );
};

export default DropdownItem;
