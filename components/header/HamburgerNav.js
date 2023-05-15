import classes from "./HamburgerMenu.module.css";
import Link from "next/link";
import HamburgerDropdown from "/components/header/HamburgerDropdown";
import HamburgerDropdownItem from "/components/header/HamburgerDropdownItem";
import SocialMediaIcons from "/components/SocialMediaIcons";
import { motion } from "framer-motion";
const HamburgerNav = () => {
  const animateFrom = { opacity: 0, x: -25 };
  const animateTo = { opacity: 1, x: 0 };
  return (
    <>
      <motion.ul
        className={classes.hamburgerNav}
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
          <HamburgerDropdown title="nieuw">
            <HamburgerDropdownItem link="/" linkTitle="trends" />
            <HamburgerDropdownItem link="/" linkTitle="brands" />
            <HamburgerDropdownItem link="/" linkTitle="lanceringen" />
          </HamburgerDropdown>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          className={classes.linkTitle}
        >
          <HamburgerDropdown title="fun stuff">
            <HamburgerDropdownItem link="/" linkTitle="8x" />
            <HamburgerDropdownItem link="/" linkTitle="wist je dat?" />
            <HamburgerDropdownItem link="/" linkTitle="terug in de tijd" />
          </HamburgerDropdown>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.4 }}
          className={classes.linkTitle}
        >
          <HamburgerDropdown title="highlights">
            <HamburgerDropdownItem link="/" linkTitle="shoe of the day" />
            <HamburgerDropdownItem link="/" linkTitle="icons" />
            <HamburgerDropdownItem link="/" linkTitle="media" />
          </HamburgerDropdown>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.5 }}
          className={classes.linkTitle}
        >
          <HamburgerDropdown title="over ons">
            <HamburgerDropdownItem link="/" linkTitle="shoesight" />
            <HamburgerDropdownItem link="/" linkTitle="adverteren & collabs" />
            <HamburgerDropdownItem link="/" linkTitle="privacy policy" />
            <HamburgerDropdownItem link="/" linkTitle="disclaimer" />
            <HamburgerDropdownItem link="/" linkTitle="contact" />
          </HamburgerDropdown>
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
};

export default HamburgerNav;
