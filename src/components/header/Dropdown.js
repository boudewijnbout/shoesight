import classes from "../../styles/components/Header.module.css";
import { useState } from "react";
const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={classes.DropdownTitle}
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.title}
      </button>
      {open && <ul className={classes.dropdownItems}>{props.children}</ul>}
    </>
  );
};

export default Dropdown;
