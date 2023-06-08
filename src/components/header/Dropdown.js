import styles from "@/styles/components/header/Dropdown.module.css";

import { useState, useEffect } from "react";

const Dropdown = ({ children, title, openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === title;  

  const toggleDropdown = () => {
    setOpenDropdown(isOpen ? null : title)
  } 

  return (
    <>

      <div className={styles.dropdownContainer}>

        {/* Toggle dropdown btn */}
        <button className={styles.dropdownBtn} onClick={toggleDropdown}>
          {title}
        </button>

        {/* Dropdown menu */}
        <ul className={isOpen ? styles.dropdownVisible : styles.dropdownHidden}>
          {children}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
