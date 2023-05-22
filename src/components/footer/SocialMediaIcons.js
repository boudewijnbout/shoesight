import Image from "next/image";
import Link from "next/link";
import classes from "../../styles/components/Header.module.css";

const SocialMediaIcons = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/instagram.svg"
          alt="instagram-logo"
          width={25}
          height={25}
        />
      </Link>
      <Link href="/">
        <Image src="/facebook.svg" alt="facebook-logo" width={25} height={25} />
      </Link>
      <Link href="/">
        <Image src="/twitter.svg" alt="twitter-logo" width={25} height={25} />
      </Link>
      <Link href="/">
        <Image src="/linkedin.svg" alt="linkedin-logo" width={25} height={25} />
      </Link>
    </>
  );
};

export default SocialMediaIcons;
