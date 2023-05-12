import classes from "./HamburgerMenu.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HamburgerMenuDropdown from "/components/header/HamburgerMenuDropdown";
import HamburgerMenuDropdownItem from "/components/header/HamburgerMenuDropdownItem";
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

        <li className={classes.socialMediaIcons}>
          <Link href="/">
            <Image
              src="/instagramLogo.svg"
              alt="instagram-logo"
              width={25}
              height={25}
            />
          </Link>
          <Link href="/">
            <Image
              src="/facebookLogo.svg"
              alt="facebook-logo"
              width={25}
              height={25}
            />
          </Link>
          <Link href="/">
            <Image
              src="/twitterLogo.svg"
              alt="twitter-logo"
              width={25}
              height={25}
            />
          </Link>
          <Link href="/">
            <Image
              src="/linkedinLogo.svg"
              alt="linkedin-logo"
              width={25}
              height={25}
            />
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HamburgerMenuNav;
