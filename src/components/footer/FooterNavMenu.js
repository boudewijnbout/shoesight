// Components
import FooterNavItem from "./FooterNavItem";

// Styles
import styles from "../../styles/components/footer/FooterNavMenu.module.css";

const FooterNavMenu = () => {
    return (
        <nav className={styles.footerNavMenu}>
            <ul>
                <FooterNavItem linkUrl="/" title="about" />
                <FooterNavItem linkUrl="/" title="contact" />
                <FooterNavItem linkUrl="/" title="adverteren" />
                <FooterNavItem linkUrl="/" title="collabs" />
                <FooterNavItem linkUrl="/" title="privacy policy" />
                <FooterNavItem linkUrl="/" title="disclaimer" />
            </ul>
        </nav>
    )
}

export default FooterNavMenu;