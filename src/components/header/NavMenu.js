import styles from "@/styles/components/header/NavMenu.module.css";

// Components
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";

const NavMenu = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <NavItem linkUrl="/" title="home" />

          {/* Nieuw link + dropdown */}
          <NavItem linkUrl="/" title="nieuw">
            <Dropdown>
              <DropdownItem linkUrl="/" title="trends" />
            </Dropdown>
          </NavItem>

          {/* Fun stuff link + dropdown */}
          <NavItem linkUrl="/" title="fun stuff">
            <Dropdown>
              <DropdownItem linkUrl="/" title="8x" />
            </Dropdown>
          </NavItem>

          {/* Highlights link + dropdown */}
          <NavItem linkUrl="/" title="highlights">
            <Dropdown>
              <DropdownItem linkUrl="/" title="shoe of the day" />
            </Dropdown>
          </NavItem>

          {/* Over ons link + dropdown */}
          <NavItem linkUrl="/" title="over ons">
            <Dropdown>
              <DropdownItem linkUrl="/" title="shoesight" />
            </Dropdown>
          </NavItem>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
