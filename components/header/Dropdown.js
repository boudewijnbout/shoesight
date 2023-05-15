import classes from "../../src/styles/Header.module.css";

const Dropdown = (props) => {
  return (
    <>
      <ul className={classes.dropdownItems}>{props.children}</ul>
    </>
  );
};

export default Dropdown;
