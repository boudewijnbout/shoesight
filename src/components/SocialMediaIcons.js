import Image from "next/image";
import Link from "next/link";

const SocialMediaIcons = () => {
  return (
    <>
        <Link href="/">
          <Image
            src="/static/images/instagram.svg"
            alt="instagram-logo"
            width={25}
            height={25}
          />
        </Link>
        <Link href="/">
          <Image
            src="/static/images/facebook.svg"
            alt="facebook-logo"
            width={25}
            height={25}
          />
        </Link>
        <Link href="/">
          <Image
            src="/static/images/twitter.svg"
            alt="twitter-logo"
            width={25}
            height={25}
          />
        </Link>
        <Link href="/">
          <Image
            src="/static/images/linkedin.svg"
            alt="linkedin-logo"
            width={25}
            height={25}
          />
        </Link>
    </>
  );
};

export default SocialMediaIcons;
