import styles from "../../styles/components/header/MobileNav.module.css";
import Link from "next/link";
import HamburgerDropdown from "./HamburgerDropdown";
import HamburgerDropdownItem from "./HamburgerDropdownItem";

const MobileNav = () => {
  return (
    <>
      <nav className={styles.headerMenuMobile} >
        <ul>

          {/* Home link */}
          <li>
            <Link className={styles.home} href="/">
              home
            </Link>
          </li>

          {/* Nieuw dropdown */}
          <li>
            <HamburgerDropdown title="nieuw">
              <HamburgerDropdownItem link="/" linkTitle="trends" />
              <HamburgerDropdownItem link="/" linkTitle="brands" />
            </HamburgerDropdown>
          </li>

          {/* Fun stuff dropdown */}
          <li>
            <HamburgerDropdown title="fun stuff">
              <HamburgerDropdownItem link="/" linkTitle="top 10" />
              <HamburgerDropdownItem link="/" linkTitle="facts & figures" />
              <HamburgerDropdownItem link="/" linkTitle="flashback" />
            </HamburgerDropdown>
          </li>

          {/* Highlights dropdown */}
          <li>
            <HamburgerDropdown title="highlights">
              <HamburgerDropdownItem link="/" linkTitle="shoe of the day" />
              <HamburgerDropdownItem link="/" linkTitle="icons" />
              <HamburgerDropdownItem link="/" linkTitle="media" />
            </HamburgerDropdown>
          </li>

          {/* Over ons dropdown */}
          <li>
            <HamburgerDropdown title="over ons">
              <HamburgerDropdownItem link="/" linkTitle="shoesight" />
              <HamburgerDropdownItem
                link="/"
                linkTitle="adverteren & collabs"
              />
              <HamburgerDropdownItem link="/" linkTitle="privacy policy" />
              <HamburgerDropdownItem link="/" linkTitle="disclaimer" />
              <HamburgerDropdownItem link="/" linkTitle="contact" />
            </HamburgerDropdown>
          </li>
        </ul>
            
        {/* Seperator line */}
        <hr />

        {/* Social media icons */}
        <div className={styles.socialMediaIcons}>
          {/* <SocialMediaIcons /> */}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
