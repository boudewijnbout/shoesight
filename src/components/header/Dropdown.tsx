// Styles
import styles from "@/styles/components/header/Dropdown.module.css";

import { ReactNode } from "react";

interface DropdownProps {
  children: ReactNode,
  title: string,
  openDropdown: string,
  setOpenDropdown: (openDropdown: string | null) => void,
}

const Dropdown = ({ children, title, openDropdown, setOpenDropdown }: DropdownProps) => {
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
