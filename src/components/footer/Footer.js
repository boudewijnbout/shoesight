import styles from "../../styles/components/footer/Footer.module.css";

import NavItem from "./NavItem";
import NavItemLink from "./NavItemLink";
import SocialMediaIcons from "./SocialMediaIcons";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <h2>SHOESIGHT</h2>
            <h3>Always keep your eyes on the prize</h3>
          </div>

          <nav>
            <ul className={styles.navLinks}>
              <NavItem name="nieuw">
                <NavItemLink link="/" name="trends" />
                <NavItemLink link="/" name="brands" />
                <NavItemLink link="/" name="lanceringen" />
              </NavItem>
              <NavItem name="fun stuff">
                <NavItemLink link="/" name="8x" />
                <NavItemLink link="/" name="wist je dat?" />
                <NavItemLink link="/" name="terug in de tijd" />
              </NavItem>
              <NavItem name="highlights">
                <NavItemLink link="/" name="icons" />
                <NavItemLink link="/" name="shoe of the day" />
                <NavItemLink link="/" name="media" />
              </NavItem>
              <NavItem name="over ons">
                <NavItemLink link="/" name="shoesight" />
                <NavItemLink link="/" name="ads & collabs" />
                <NavItemLink link="/" name="contact" />
              </NavItem>
              <NavItem name="legale informatie">
                <NavItemLink link="/" name="privacy policy" />
                <NavItemLink link="/" name="disclaimer" />
              </NavItem>
            </ul>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyright}>© 2023. Alle rechten voorbehouden</p>

          <div className={styles.socialMediaIcons}>
            <SocialMediaIcons />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
