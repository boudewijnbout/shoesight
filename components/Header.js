import classes from "../src/styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Searchbar from "/components/Searchbar";
function Header() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <h1>SHOESIGHT</h1>
          <h2>Always keep your eyes on the prize</h2>
        </div>

        <nav className={classes.nav}>
          <ul className={classes.navItems}>
            <li>
              <Link href="/">
                <Image
                  className={classes.logo}
                  src="/instagramLogo.svg"
                  alt="instagram-logo"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="/">
                <Image
                  className={classes.logo}
                  src="/facebookLogo.svg"
                  alt="facebook-logo"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="/">
                <Image
                  className={classes.logo}
                  src="/twitterLogo.svg"
                  alt="twitter-logo"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="/">
                <Image
                  className={classes.logo}
                  src="/linkedinLogo.svg"
                  alt="linkedin-logo"
                  width={25}
                  height={25}
                />
              </Link>
            </li>
            <li>
              <ul className={classes.links}>
                <li>
                  <Link className={classes.linkTitle} href="/">
                    home
                  </Link>
                </li>
                <Link className={classes.linkTitle} href="/">
                  nieuw
                </Link>
                <li>
                  <Link className={classes.linkTitle} href="/">
                    fun stuff
                  </Link>
                </li>
                <li>
                  <Link className={classes.linkTitle} href="/">
                    highlights
                  </Link>
                </li>
                <li>
                  <Link className={classes.linkTitle} href="/">
                    over ons
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Searchbar />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
