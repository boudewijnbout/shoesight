import classes from "./HamburgerMenu.module.css";
import Link from "next/link";
import HamburgerDropdown from "../../components/header/HamburgerDropdown";
import HamburgerDropdownItem from "../../components/header/HamburgerDropdownItem";
import SocialMediaIcons from "../../components/header/SocialMediaIcons";

const HamburgerNav = (props) => {
  return (
    <>
      <ul className={props.class}>
        <li className={classes.linkTitle}>
          <Link className={classes.home} href="/">
            home
          </Link>
        </li>
        <li className={classes.linkTitle}>
          <HamburgerDropdown title="nieuw">
            <HamburgerDropdownItem link="/" linkTitle="trends" />
            <HamburgerDropdownItem link="/" linkTitle="brands" />
            <HamburgerDropdownItem link="/" linkTitle="lanceringen" />
          </HamburgerDropdown>
        </li>
        <li className={classes.linkTitle}>
          <HamburgerDropdown title="fun stuff">
            <HamburgerDropdownItem link="/" linkTitle="8x" />
            <HamburgerDropdownItem link="/" linkTitle="wist je dat?" />
            <HamburgerDropdownItem link="/" linkTitle="terug in de tijd" />
          </HamburgerDropdown>
        </li>
        <li className={classes.linkTitle}>
          <HamburgerDropdown title="highlights">
            <HamburgerDropdownItem link="/" linkTitle="shoe of the day" />
            <HamburgerDropdownItem link="/" linkTitle="icons" />
            <HamburgerDropdownItem link="/" linkTitle="media" />
          </HamburgerDropdown>
        </li>
        <li className={classes.linkTitle}>
          <HamburgerDropdown title="over ons">
            <HamburgerDropdownItem link="/" linkTitle="shoesight" />
            <HamburgerDropdownItem link="/" linkTitle="adverteren & collabs" />
            <HamburgerDropdownItem link="/" linkTitle="privacy policy" />
            <HamburgerDropdownItem link="/" linkTitle="disclaimer" />
            <HamburgerDropdownItem link="/" linkTitle="contact" />
          </HamburgerDropdown>
        </li>
        <li className={classes.SocialMediaIconsDropdown}>
          <SocialMediaIcons />
        </li>
      </ul>
    </>
  );
};

export default HamburgerNav;
