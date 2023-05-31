import styles from "../../styles/components/footer/Footer.module.css";
import FooterNavItemLink from "./FooterNavItemLink";
import SocialMediaIcons from "../../components/SocialMediaIcons";

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
              <FooterNavItemLink link="/" name="about" />
              <FooterNavItemLink link="/" name="contact" />
              <FooterNavItemLink link="/" name="adverteren" />
              <FooterNavItemLink link="/" name="collabs" />
              <FooterNavItemLink link="/" name="privacy policy" />
              <FooterNavItemLink link="/" name="disclaimer" />
            </ul>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyright}>© 2023. Alle rechten voorbehouden</p>

          <div className={styles.socialMediaIcons}>
            <p>Volg Shoesight</p>
            <SocialMediaIcons />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
