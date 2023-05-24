import styles from "@/styles/components/header/Dropdown.module.css";

import { useState } from "react";

const Dropdown = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className={styles.dropdownBtn} onClick={toggleDropdown}>
        {title}
      </button>
      <ul className={open ? styles.dropdownVisible : styles.dropdownHidden}>
        {children}
      </ul>
    </>
  );
};

export default Dropdown;
