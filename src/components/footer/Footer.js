import styles from "../../styles/components/footer/Footer.module.css";

import FooterNavItem from "./FooterNavItem";
import FooterNavItemLink from "./FooterNavItemLink";
// import SocialMediaIcons from "../../components/SocialMediaIcons";

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
            <ul className={styles.footerNavLinks}>
              <FooterNavItem name="nieuw">
                <FooterNavItemLink link="/" name="trends" />
                <FooterNavItemLink link="/" name="brands" />
                <FooterNavItemLink link="/" name="lanceringen" />
              </FooterNavItem>
              <FooterNavItem name="fun stuff">
                <FooterNavItemLink link="/" name="8x" />
                <FooterNavItemLink link="/" name="wist je dat?" />
                <FooterNavItemLink link="/" name="terug in de tijd" />
              </FooterNavItem>
              <FooterNavItem name="highlights">
                <FooterNavItemLink link="/" name="icons" />
                <FooterNavItemLink link="/" name="shoe of the day" />
                <FooterNavItemLink link="/" name="media" />
              </FooterNavItem>
              <FooterNavItem name="over ons">
                <FooterNavItemLink link="/" name="shoesight" />
                <FooterNavItemLink link="/" name="ads & collabs" />
                <FooterNavItemLink link="/" name="contact" />
              </FooterNavItem>
              <FooterNavItem name="legale informatie">
                <FooterNavItemLink link="/" name="privacy policy" />
                <FooterNavItemLink link="/" name="disclaimer" />
              </FooterNavItem>
            </ul>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyright}>© 2023. Alle rechten voorbehouden</p>

          <div className={styles.socialMediaIcons}>
            {/* <SocialMediaIcons /> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
