import styles from "../../styles/components/header/Dropdown.module.css";
import { useState } from "react";

const Dropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <button
        className={styles.dropdownBtn}
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {title}
      </button>
      {open && <ul className={styles.dropdownItems}>{children}</ul>}
    </>
  );
};

export default Dropdown;
