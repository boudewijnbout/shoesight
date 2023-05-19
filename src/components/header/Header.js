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
        <div className={styles.headerLogo}>
          <h1>SHOESIGHT</h1>
          <h2>Always keep your eyes on the prize</h2>
        </div>

        <div className={styles.headerItemsWrapper}>
          <div className={styles.socialMediaIcons}>
            <SocialMediaIcons />
          </div>
          <nav className={styles.headerMenuDesktop}>
            <ul className={styles.linkContainer}>
              <li className={styles.link}>
                <Link className={styles.linkTitle} href="/">
                  home
                </Link>
              </li>

              <li className={styles.link}>
                <Dropdown>
                  <DropdownItem name="trends" link="/" />
                  <DropdownItem name="brands" link="/" />
                  <DropdownItem name="lanceringen" link="/" />
                </Dropdown>
                nieuw
              </li>
              <li className={styles.link}>
                <Dropdown>
                  <DropdownItem name="8x" link="/" />
                  <DropdownItem name="wist je dat?" link="/" />
                  <DropdownItem name="terug in de tijd" link="/" />
                </Dropdown>
                fun stuff
              </li>

              <li className={styles.link}>
                <Dropdown>
                  <DropdownItem name="shoe of the day" link="/" />
                  <DropdownItem name="icons" link="/" />
                  <DropdownItem name="media" link="/" />
                </Dropdown>
                highlights
              </li>
              <li className={styles.link}>
                <Dropdown>
                  <DropdownItem name="shoesight" link="/" />
                  <DropdownItem name="adverteren & collabs" link="/" />
                  <DropdownItem name="privacy policy" link="/" />
                  <DropdownItem name="disclaimer" link="/" />
                  <DropdownItem name="contact" link="/" />
                </Dropdown>
                over ons
              </li>
            </ul>
          </nav>

          <HamburgerIcon />
          <Searchbar />
        </div>
      </header>
    </>
  );
};

export default Header;
