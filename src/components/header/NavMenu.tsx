import { useState } from "react";

// Components
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";

// Styles
import styles from "@/styles/components/header/NavMenu.module.css";

const NavMenu = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navItems}>
          <NavItem linkUrl="/" title="home" />

          {/* Nieuw link + dropdown */}
          <li className={styles.navMenuItem}>
            <Dropdown title="nieuw" openDropdown={openDropdown as string} setOpenDropdown={setOpenDropdown}>
              <DropdownItem linkUrl="/" title="trends" />
              <DropdownItem linkUrl="/" title="brands" />
            </Dropdown>
          </li>

          {/* Fun stuff link + dropdown */}
          <li className={styles.navMenuItem}>
            <Dropdown title="fun stuff" openDropdown={openDropdown as string} setOpenDropdown={setOpenDropdown}>
              <DropdownItem linkUrl="/" title="top 10" />
              <DropdownItem linkUrl="/" title="facts & figures" />
              <DropdownItem linkUrl="/" title="flashback" />
            </Dropdown>
          </li>

          {/* Highlights link + dropdown */}
          <li className={styles.navMenuItem}>
            <Dropdown title="highlights" openDropdown={openDropdown as string} setOpenDropdown={setOpenDropdown}>
              <DropdownItem linkUrl="/" title="icons" />
              <DropdownItem linkUrl="/" title="shoe of the day" />
              <DropdownItem linkUrl="/" title="media" />
            </Dropdown>
          </li>

          {/* Over ons link + dropdown */}
          <li className={styles.navMenuItem}>
            <Dropdown title="over ons" openDropdown={openDropdown as string} setOpenDropdown={setOpenDropdown}>
              <DropdownItem linkUrl="/" title="shoesight" />
              <DropdownItem linkUrl="/" title="ads & collabs" />
              <DropdownItem linkUrl="/" title="contact" />
            </Dropdown>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
