import Link from "next/link";

// Styles
import styles from "@/styles/components/footer/FooterNavItem.module.css"

const FooterNavItem = ({ linkUrl, title }) => {
  return (
    <li className={styles.footerNavItem}>
      <Link href={linkUrl}>
        {title}
      </Link>
    </li>
  );
};

export default FooterNavItem;
