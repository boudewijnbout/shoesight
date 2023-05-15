import classes from "../../src/styles/Header.module.css";
import Link from "next/link";
import Searchbar from "/components/header/Searchbar";
import Dropdown from "/components/header/Dropdown";
import DropdownItem from "./DropdownItem";
import HamburgerMenu from "/components/header/HamburgerMenu";
import SocialMediaIcons from "/components/SocialMediaIcons";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <h1>SHOESIGHT</h1>
          <h2>Always keep your eyes on the prize</h2>
          <HamburgerMenu />
        </div>

        <nav className={classes.nav}>
          <ul className={classes.navItems}>
            <SocialMediaIcons />

            <li>
              <ul className={classes.linkContainer}>
                <li className={classes.link}>
                  <Link className={classes.linkTitle} href="/">
                    home
                  </Link>
                </li>

                <li className={classes.link}>
                  <Dropdown>
                    <DropdownItem name="trends" link="/" />
                    <DropdownItem name="brands" link="/" />
                    <DropdownItem name="lanceringen" link="/" />
                  </Dropdown>
                  nieuw
                </li>
                <li className={classes.link}>
                  <Dropdown>
                    <DropdownItem name="8x" link="/" />
                    <DropdownItem name="wist je dat?" link="/" />
                    <DropdownItem name="terug in de tijd" link="/" />
                  </Dropdown>
                  fun stuff
                </li>

                <li className={classes.link}>
                  <Dropdown>
                    <DropdownItem name="shoe of the day" link="/" />
                    <DropdownItem name="icons" link="/" />
                    <DropdownItem name="media" link="/" />
                  </Dropdown>
                  highlights
                </li>
                <li className={classes.link}>
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
            </li>
            <li>
              <Searchbar />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
