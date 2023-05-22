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

          <div className={styles.socialMediaIcons}>
            <SocialMediaIcons />
          </div>

          {/* Desktop navigation menu */}
          <nav className={styles.headerMenuDesktop}>
            <ul className={styles.headerMenuLinks}>

              {/* Home link */}
              <li className={styles.headerMenulink}>
                <Link href="/">
                  home
                </Link>
              </li>

              {/* Nieuw dropdown */}
              <li className={styles.headerMenuLink}>
                <Dropdown>
                  <DropdownItem title="trends" link="/" />
                  <DropdownItem title="brands" link="/" />
                  <DropdownItem title="lanceringen" link="/" />
                </Dropdown>
                nieuw
              </li>

              {/* Fun stuff dropdown */}
              <li className={styles.headerMenuLink}>
                <Dropdown>
                  <DropdownItem title="8x" link="/" />
                  <DropdownItem title="wist je dat?" link="/" />
                  <DropdownItem title="terug in de tijd" link="/" />
                </Dropdown>
                fun stuff
              </li>

              {/* Highlights dropdown */}
              <li className={styles.headerMenuLink}>
                <Dropdown>
                  <DropdownItem title="shoe of the day" link="/" />
                  <DropdownItem title="icons" link="/" />
                  <DropdownItem title="media" link="/" />
                </Dropdown>
                highlights
              </li>

              {/* Over ons dropdown */}
              <li className={styles.headerMenuLink}>
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

          <Searchbar title="Artikelen zoeken..." />
          <HamburgerIcon />
        </div>
      </header>
    </>
  );
};

export default Header;
