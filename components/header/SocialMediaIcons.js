import Image from "next/image";
import Link from "next/link";
import classes from "./HamburgerMenu.module.css";

function SocialMediaIcons() {
  return (
    <>
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
    </>
  );
}

export default SocialMediaIcons;
