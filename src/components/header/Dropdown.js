import styles from "@/styles/components/header/Dropdown.module.css";

import { useState } from "react";

const Dropdown = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <>
    
      {/* Toggle dropdown btn */}
      <button className={styles.dropdownBtn} onClick={toggleDropdown}>
        {title}
      </button>

      {/* Dropdown menu */}
      <ul className={open ? styles.dropdownVisible : styles.dropdownHidden}>
        {children}
      </ul>
    </>
  );
};

export default Dropdown;
