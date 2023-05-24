import styles from "@/styles/components/header/NavMenuMobile.module.css";

// Components
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import SearchBar from "./Searchbar";

const NavMenuMobile = ({ open }) => {
  return (
    <>
      <nav className={open ? "visible" : "hidden"}>
        <ul className={styles.navMenuMobile}>
          <NavItem linkUrl="/" title="Home" />

          {/* Nieuw link + dropdown */}
          <li className={styles.navMenuMobileItem}>
            <Dropdown title="Nieuw">
              <DropdownItem linkUrl="/" title="trends" />
              <DropdownItem linkUrl="/" title="brands" />
              <DropdownItem linkUrl="/" title="lanceringen" />
            </Dropdown>
          </li>

          {/* Fun stuff link + dropdown */}
          <li className={styles.navMenuMobileItem}>
            <Dropdown title="Fun stuff">
              <DropdownItem linkUrl="/" title="8x" />
              <DropdownItem linkUrl="/" title="wist je dat?" />
              <DropdownItem linkUrl="/" title="terug in de tijd" />
            </Dropdown>
          </li>

          {/* Highlights link + dropdown */}
          <li className={styles.navMenuMobileItem}>
            <Dropdown title="Highlights">
              <DropdownItem linkUrl="/" title="icons" />
              <DropdownItem linkUrl="/" title="shoe of the day" />
              <DropdownItem linkUrl="/" title="media" />
            </Dropdown>
          </li>

          {/* Over ons link + dropdown */}
          <li className={styles.navMenuMobileItem}>
            <Dropdown title="Over ons">
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
