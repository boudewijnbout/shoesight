import styles from "@/styles/components/header/NavMenu.module.css";

// Components
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";

const NavMenu = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navItems}>
          <NavItem linkUrl="/" title="home" />

          {/* Nieuw link + dropdown */}
          <li className={styles.navMenuItem}>
            <Dropdown title="nieuw">
              <DropdownItem linkUrl="/" title="trends" />
              <DropdownItem linkUrl="/" title="brands" />
              <DropdownItem linkUrl="/" title="lanceringen" />
            </Dropdown>
          </li>

          {/* Fun stuff link + dropdown */}
          <li className={styles.navMenuItem}>
            <Dropdown title="fun stuff">
              <DropdownItem linkUrl="/" title="8x" />
              <DropdownItem linkUrl="/" title="wist je dat?" />
              <DropdownItem linkUrl="/" title="terug in de tijd" />
            </Dropdown>
          </li>

          {/* Highlights link + dropdown */}
          <li className={styles.navMenuItem}>
            <Dropdown title="highlights">
              <DropdownItem linkUrl="/" title="icons" />
              <DropdownItem linkUrl="/" title="shoe of the day" />
              <DropdownItem linkUrl="/" title="media" />
            </Dropdown>
          </li>

          {/* Over ons link + dropdown */}
          <li className={styles.navMenuItem}>
            <Dropdown title="over ons">
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
