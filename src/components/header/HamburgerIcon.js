import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";

// Styles
import styles from "@/styles/components/header/Header.module.css";

// Components
import NavMenuMobile from "./NavMenuMobile";

const HamburgerIcon = () => {
    const [open, setOpen] = useState(false);

    // Disable body scroll when menu is open
    if (typeof window !== "undefined") {
        open?document.body.classList.add("disable-scroll"):document.body.classList.remove("disable-scroll");
    }

    // Toggle the menu
    const toggleMenu = () => {
        setOpen(!open);
    }

    return (
        <>
            <button className={styles.hamburgerToggle} onClick={toggleMenu}><Hamburger size={32} color="#000000" rounded /></button>
            <NavMenuMobile open={open} />
        </>
    )
}

export default HamburgerIcon;