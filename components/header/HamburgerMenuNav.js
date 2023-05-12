import classes from "./HamburgerMenu.module.css";
import Link from "next/link";
import HamburgerMenuDropdown from "/components/header/HamburgerMenuDropdown";
import HamburgerMenuDropdownItem from "/components/header/HamburgerMenuDropdownItem";
import SocialMediaIcons from "/components/header/SocialMediaIcons";
function HamburgerMenuNav() {
  return (
    <>
      <ul className={classes.HamburgerMenuNav}>
        <li className={classes.linkTitle}>
          <Link className={classes.home} href="/">
            home
          </Link>
        </li>

        <HamburgerMenuDropdown name="nieuw">
          <HamburgerMenuDropdownItem link="/" linkName="trends" />
          <HamburgerMenuDropdownItem link="/" linkName="brands" />
          <HamburgerMenuDropdownItem link="/" linkName="lanceringen" />
        </HamburgerMenuDropdown>

        <HamburgerMenuDropdown name="fun stuff">
          <HamburgerMenuDropdownItem link="/" linkName="8x" />
          <HamburgerMenuDropdownItem link="/" linkName="wist je dat?" />
          <HamburgerMenuDropdownItem link="/" linkName="terug in de tijd" />
        </HamburgerMenuDropdown>

        <HamburgerMenuDropdown name="highlights">
          <HamburgerMenuDropdownItem link="/" linkName="shoe of the day" />
          <HamburgerMenuDropdownItem link="/" linkName="icons" />
          <HamburgerMenuDropdownItem link="/" linkName="media" />
        </HamburgerMenuDropdown>

        <HamburgerMenuDropdown name="over ons">
          <HamburgerMenuDropdownItem link="/" linkName="shoesight" />
          <HamburgerMenuDropdownItem link="/" linkName="adverteren & collabs" />
          <HamburgerMenuDropdownItem link="/" linkName="privacy policy" />
          <HamburgerMenuDropdownItem link="/" linkName="disclaimer" />
          <HamburgerMenuDropdownItem link="/" linkName="contact" />
        </HamburgerMenuDropdown>

        <SocialMediaIcons />
      </ul>
    </>
  );
}

export default HamburgerMenuNav;
