import { useState } from "react";

// Components
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import SearchBar from "./Searchbar";

// Styles
import styles from "@/styles/components/header/NavMenuMobile.module.css";

interface NavMenuMobileProps {
  open: boolean,
}

const NavMenuMobile = ({ open }: NavMenuMobileProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  return (
    <>
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <ul className={styles.navItemsMobile}>
          <NavItem linkUrl="/" title="Home" />

          {/* Nieuw link + dropdown */}
          <li className={styles.navMenuMobileItem}>
            <Dropdown title="Nieuw" openDropdown={openDropdown as string} setOpenDropdown={setOpenDropdown}>
              <DropdownItem linkUrl="/" title="trends" />
              <DropdownItem linkUrl="/" title="brands" />
            </Dropdown>
          </li>

          {/* Fun stuff link + dropdown */}
          <li className={styles.navMenuMobileItem}>
            <Dropdown title="Fun stuff" openDropdown={openDropdown as string} setOpenDropdown={setOpenDropdown}>
              <DropdownItem linkUrl="/" title="top 10" />
              <DropdownItem linkUrl="/" title="facts & figures" />
              <DropdownItem linkUrl="/" title="flashback" />
            </Dropdown>
          </li>

          {/* Highlights link + dropdown */}
          <li className={styles.navMenuMobileItem}>
            <Dropdown title="Highlights" openDropdown={openDropdown as string} setOpenDropdown={setOpenDropdown}>
              <DropdownItem linkUrl="/" title="icons" />
              <DropdownItem linkUrl="/" title="shoe of the day" />
              <DropdownItem linkUrl="/" title="media" />
            </Dropdown>
          </li>

          {/* Over ons link + dropdown */}
          <li className={styles.navMenuMobileItem}>
            <Dropdown title="Over ons" openDropdown={openDropdown as string} setOpenDropdown={setOpenDropdown}>
              <DropdownItem linkUrl="/" title="shoesight" />
              <DropdownItem linkUrl="/" title="ads & collabs" />
              <DropdownItem linkUrl="/" title="contact" />
            </Dropdown>
          </li>
        </ul>

        {/* Searchbar */}
        <SearchBar label="Artikelen zoeken..." />
      </nav>
    </>
  );
};

export default NavMenuMobile;
