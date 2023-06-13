// Components
import FooterNavMenu from "./FooterNavMenu";
import SocialMediaIcons from "../../components/SocialMediaIcons";

// Styles
import styles from "../../styles/components/footer/Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogo}>
            <h2>SHOESIGHT</h2>
            <h3>Always keep your eyes on the prize</h3>
          </div>

          <FooterNavMenu />
        </div>

        <hr />

        <div className={styles.footerCopyright}>
          <p>© 2023. Alle rechten voorbehouden</p>

          <div className={styles.footerSocials}>
            <p>Volg <span>SHOESIGHT</span></p>
            <SocialMediaIcons />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
