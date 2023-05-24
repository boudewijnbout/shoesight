import styles from "@/styles/components/header/Header.module.css";

// Components
import SocialMediaIcons from "../SocialMediaIcons";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                
                {/* Logo text */}
                <div className={styles.headerLogo}>
                    <h1>Shoesight</h1>
                    <h2>Always keep your eyes at the prize</h2>
                </div>

                {/* Header items */}
                <div className={styles.headerItems}>

                    {/* Social media icons */}
                    <SocialMediaIcons />

                    {/* Navigation menu */}
                    <NavMenu />

                    {/* SearchBar */}
                    <SearchBar label="Artikelen zoeken..." />

                    {/* Hamburger icon (mobile) */}
                    <HamburgerIcon />
                </div>
            </header>
        </>
    )
}

export default Header;