import styles from "../../styles/components/header/HamburgerDropdown.module.css";

import { useState } from "react";

const HamburgerDropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  const animate = () => {
    setAnimation(true);
  };
  
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
          animate();
        }}
      >
        {props.title}
      </button>
      {open && (
        <ul
          className={animation ? styles.dropdownAnimation : styles.dropdown}
        >
          {props.children}
        </ul>
      )}
    </>
  );
};

export default HamburgerDropdown;
