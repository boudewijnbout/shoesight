import classes from "./HamburgerMenu.module.css";
import Link from "next/link";
import HamburgerMenuDropdown from "/components/header/HamburgerMenuDropdown";
import HamburgerMenuDropdownItem from "/components/header/HamburgerMenuDropdownItem";
import SocialMediaIcons from "/components/header/SocialMediaIcons";
import { motion } from "framer-motion";
function HamburgerMenuNav() {
  const animateFrom = { opacity: 0, x: -25 };
  const animateTo = { opacity: 1, x: 0 };
  return (
    <>
      <motion.ul
        className={classes.HamburgerMenuNav}
        initial={animateFrom}
        animate={animateTo}
      >
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          className={classes.linkTitle}
        >
          <Link className={classes.home} href="/">
            home
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          className={classes.linkTitle}
        >
          <HamburgerMenuDropdown name="nieuw">
            <HamburgerMenuDropdownItem link="/" linkName="trends" />
            <HamburgerMenuDropdownItem link="/" linkName="brands" />
            <HamburgerMenuDropdownItem link="/" linkName="lanceringen" />
          </HamburgerMenuDropdown>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          className={classes.linkTitle}
        >
          <HamburgerMenuDropdown name="fun stuff">
            <HamburgerMenuDropdownItem link="/" linkName="8x" />
            <HamburgerMenuDropdownItem link="/" linkName="wist je dat?" />
            <HamburgerMenuDropdownItem link="/" linkName="terug in de tijd" />
          </HamburgerMenuDropdown>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.4 }}
          className={classes.linkTitle}
        >
          <HamburgerMenuDropdown name="highlights">
            <HamburgerMenuDropdownItem link="/" linkName="shoe of the day" />
            <HamburgerMenuDropdownItem link="/" linkName="icons" />
            <HamburgerMenuDropdownItem link="/" linkName="media" />
          </HamburgerMenuDropdown>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.5 }}
          className={classes.linkTitle}
        >
          <HamburgerMenuDropdown name="over ons">
            <HamburgerMenuDropdownItem link="/" linkName="shoesight" />
            <HamburgerMenuDropdownItem
              link="/"
              linkName="adverteren & collabs"
            />
            <HamburgerMenuDropdownItem link="/" linkName="privacy policy" />
            <HamburgerMenuDropdownItem link="/" linkName="disclaimer" />
            <HamburgerMenuDropdownItem link="/" linkName="contact" />
          </HamburgerMenuDropdown>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.6 }}
          className={classes.linkTitle}
        >
          <SocialMediaIcons />
        </motion.li>
      </motion.ul>
    </>
  );
}

export default HamburgerMenuNav;
