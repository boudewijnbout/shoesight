import Link from "next/link";

// Styles
import styles from "@/styles/components/footer/FooterNavItem.module.css";

interface FooterNavItemProps {
  linkUrl: string,
  title: string,
}

const FooterNavItem = ({ linkUrl, title }: FooterNavItemProps) => {
  return (
    <li className={styles.footerNavItem}>
      <Link href={linkUrl}>
        {title}
      </Link>
    </li>
  );
};

export default FooterNavItem;
