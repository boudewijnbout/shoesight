import styles from "../../styles/components/header/Header.module.css";
import Link from "next/link";
import Searchbar from "../../components/header/Searchbar";
import Dropdown from "../../components/header/Dropdown";
import DropdownItem from "./DropdownItem";
import HamburgerIcon from "./HamburgerIcon";
import SocialMediaIcons from "../../components/header/SocialMediaIcons";

const Header = () => {
  return (
    <>
      <header className={styles.header}>

        {/* Logo */}
        <div className={styles.headerLogo}>
          <h1>SHOESIGHT</h1>
          <h2>Always keep your eyes on the prize</h2>
        </div>

        {/* Header items */}
        <div className={styles.headerItemsWrapper}>
          <SocialMediaIcons />

          {/* Desktop navigation menu */}
          <nav className={styles.headerMenuDesktop}>
            <ul className={styles.linkContainer}>

              {/* Home link */}
              <li className={styles.link}>
                <Link className={styles.linkTitle} href="/">
                  home
                </Link>
              </li>

              {/* Nieuw dropdown */}
              <li className={styles.link}>
                <Dropdown>
                  <DropdownItem title="trends" link="/" />
                  <DropdownItem title="brands" link="/" />
                  <DropdownItem title="lanceringen" link="/" />
                </Dropdown>
                nieuw
              </li>

              {/* Fun stuff dropdown */}
              <li className={styles.link}>
                <Dropdown>
                  <DropdownItem title="8x" link="/" />
                  <DropdownItem title="wist je dat?" link="/" />
                  <DropdownItem title="terug in de tijd" link="/" />
                </Dropdown>
                fun stuff
              </li>

              {/* Highlights dropdown */}
              <li className={styles.link}>
                <Dropdown>
                  <DropdownItem title="shoe of the day" link="/" />
                  <DropdownItem title="icons" link="/" />
                  <DropdownItem title="media" link="/" />
                </Dropdown>
                highlights
              </li>

              {/* Over ons dropdown */}
              <li className={styles.link}>
                <Dropdown>
                  <DropdownItem title="shoesight" link="/" />
                  <DropdownItem ttle="adverteren & collabs" link="/" />
                  <DropdownItem title="privacy policy" link="/" />
                  <DropdownItem title="disclaimer" link="/" />
                  <DropdownItem title="contact" link="/" />
                </Dropdown>
                over ons
              </li>
            </ul>
          </nav>

          <Searchbar />
          <HamburgerIcon />
        </div>
      </header>
    </>
  );
};

export default Header;
