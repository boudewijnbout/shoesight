import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "@/styles/components/SocialMediaIcons.module.css";

const SocialMediaIcons = () => {
  return (
    <>
      <div className={styles.socialMediaIcons}>

        {/* Instagram logo */}
        <Link href="/">
          <Image
            src="/static/images/instagram.svg"
            alt="Klein instagram logo"
            width={25}
            height={25}
          />
        </Link>

        {/* Facebook logo */}
        <Link href="/">
          <Image
            src="/static/images/facebook.svg"
            alt="Klein facebook logo"
            width={25}
            height={25}
          />
        </Link>

        {/* Linkedin logo */}
        <Link href="/">
          <Image
            src="/static/images/linkedin.svg"
            alt="Klein linkedin logo"
            width={25}
            height={25}
          />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaIcons;